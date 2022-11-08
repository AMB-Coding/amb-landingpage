import {ColorScheme, ColorSchemeProvider, Global, MantineProvider, Skeleton} from '@mantine/core';
import {Suspense, useState} from 'react';
import {theme} from "./contexts/Theme";
import {StartPage} from './features/startpage/StartPage';

export function App(): JSX.Element {
	const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

	return (
		<Suspense fallback={<Skeleton/>}>
			<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
				<MantineProvider theme={{colorScheme, ...theme}} withNormalizeCSS withGlobalStyles>
					<StartPage/>
				</MantineProvider>
			</ColorSchemeProvider>
		</Suspense>
	);
}
