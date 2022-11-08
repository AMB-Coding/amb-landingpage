import {MantineThemeOverride} from "@mantine/core";

export const theme: MantineThemeOverride = {
	primaryColor: 'cyan',

	components: {
		Container: {
			defaultProps: {size: 'lg'},
		},
	},

	globalStyles: (theme) => ({
		body: {
			backgroundColor: theme.colorScheme !== 'dark' ? theme.colors.gray[2] : theme.colors.dark[7],
		},
		'*::-webkit-scrollbar': {
			width: 8,
		},
		'*::-webkit-scrollbar-thumb': {
			backgroundColor: theme.colors.gray[5],
			borderRadius: "6px",
		},
		'@supports (-moz-appearance:none)': {
			"*": {
				/*The following attributes are currently supported only by Firefox. Webkit browsers are designed by the ::-webkit-scrollbar
				So that nothing is broken in potential future support, these values are set only for Firefox.*/
				scrollbarColor: `${theme.colors.gray[5]} transparent`,
				scrollbarWidth: 'thin',
			},
		},
	}),
};
