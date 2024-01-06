import {expect, test} from '@playwright/test';

test('top', async ({page}) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot({threshold: 0});
});

test('bottom', async ({page}) => {
	// Intercept network requests for images and replace them with a static image
	await page.route(/.+gif/, (route) => {
		route.fulfill({
			path: './public/favicon-16x16.png',
		});
	});

	await page.goto('/');
	await page.evaluate(() => {
		window.scrollTo(0, document.body.scrollHeight);
	});
	await expect(page).toHaveScreenshot({threshold: 0});
});
