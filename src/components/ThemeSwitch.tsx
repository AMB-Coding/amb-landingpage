import {ActionIcon, useMantineColorScheme} from "@mantine/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export function ThemeSwitch(): JSX.Element {
	const {colorScheme, toggleColorScheme} = useMantineColorScheme();
	const dark = colorScheme === 'dark';

	return (
		<ActionIcon
			variant="outline"
			color={dark ? 'yellow' : 'blue'}
			onClick={() => toggleColorScheme()}
			title="Toggle color scheme"
		>
			{dark ? (
				<FontAwesomeIcon icon={faSun} size={"lg"}/>
			) : (
				<FontAwesomeIcon icon={faMoon} size={"lg"}/>
			)}
		</ActionIcon>
	);
}
