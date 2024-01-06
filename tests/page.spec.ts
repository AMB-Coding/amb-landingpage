import {expect, PlaywrightTestArgs, test} from '@playwright/test';

test('top', async ({page}) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot({threshold: 0});
});

test('bottom', async ({page}) => {
	await endpointMocks(page);

	await page.goto('/');
	await page.evaluate(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
	await expect(page).toHaveScreenshot({threshold: 0});
});

async function endpointMocks(page: PlaywrightTestArgs['page']) {
	// Intercept network requests for images and replace them with a static image
	await page.route(/.+gif/, (route) => {
		route.fulfill({
			path: './public/favicon-16x16.png',
		});
	});

	await page.route(/https:\/\/discord.com\/api\/v10\/invites\/.+\?with_counts=true/, (route) => {
		route.fulfill({
			body: '{"guild":{"id":"706254758721224707","name":"Arma macht Bock!","icon":"a_8573bad60730ce4caf4540a4b396bb71"},"approximate_member_count":300,"approximate_presence_count":95}\n'
		});
	});
}
