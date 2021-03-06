import {Avatar, Box, Card, createStyles, Group, Text} from "@mantine/core";

const useStyles = createStyles((theme) => ({
	wrapper: {
		background: theme.fn.linearGradient(0, theme.colors.cyan[6], theme.colors.cyan[3]),
		paddingRight: 3,
		borderRadius: 3,
	},
	container: {
		overflowX: 'scroll',
		display: 'flex',
		padding: '3rem',
		background: theme.colorScheme !== 'dark' ? theme.colors.gray[2] : theme.colors.dark[7],
	},

	card: {
		minWidth: 300,
		height: 350,
		backgroundColor: theme.colorScheme !== 'dark' ? theme.colors.gray[3] : theme.colors.dark[8],
		boxShadow: theme.colorScheme !== 'dark' ? `-0.5rem 0 1.5rem ${theme.colors.gray[5]}` : '-1rem 0 2.3rem #000',
		display: 'flex',
		flexDirection: 'column',
		padding: theme.spacing.sm,
		transition: '0.2s',

		'&:not(:first-of-type)': {
			marginLeft: -130,
		},

		'&:hover': {
			transform: 'translateY(-1rem)',
		},

		'&:hover~&': {
			transform: 'translateX(130px)',
		},
	},
	cardBody: {
		marginBottom: 'auto',
	},
	cardDetails: {
		color: theme.colorScheme !== 'dark' ? theme.colors.gray[9] : theme.colors.gray[0],
	},
	cardDetailsDate: {
		color: theme.colors.gray[6],
	},
	quote: {
		fontSize: 20,
		fontWeight: 700,
	},
}));

type PlayerQuote = {
	firstEventDate: string;
	quote: string;
	avatar?: string;
	name: string;
};

/*Inspired by https://css-tricks.com article cards*/
export function PlayerRecommends(): JSX.Element {
	const {classes} = useStyles();

	const quotes: Array<PlayerQuote> = [
		{
			firstEventDate: '03.05.2020',
			quote: 'Ich kann so mitspielen, dass ich nicht mal ein Funkgerät brauche!',
			avatar: 'https://cdn.discordapp.com/avatars/462730833543823380/a00568dceeda110cc4c6a11e307d32ed.png?size=40',
			name: 'Ossi',
		},
		{
			firstEventDate: '03.05.2020',
			quote: 'Der Medic slottet sich auf mich.',
			avatar: 'https://cdn.discordapp.com/avatars/306509637719425024/97d0a4c378edb1859b08060ca6187086.png?size=40',
			name: 'Joghurt',
		},
		{
			firstEventDate: '17.08.2021',
			quote: 'iCh HaBe MeIneN eIgEnEn TaG',
			avatar: 'https://cdn.discordapp.com/embed/avatars/0.png?size=40',
			name: 'JohnMcleod',
		}, {
			firstEventDate: '07.02.2021',
			quote: 'Ich bin cool 😎',
			avatar: 'https://cdn.discordapp.com/avatars/793276451049832470/9146f76d7f79ed22f8972cabbe41ff46.png?size=40',
			name: 'Mäxo',
		},
		{
			firstEventDate: 'Jan 19, 2020',
			quote: 'Alles guti schmuti. Eigentlich wäre auch ein langer Text möglich. Wäre das wohl besser?',
			name: '1Mensch',
		},
		{
			firstEventDate: 'Jan 19, 2020',
			quote: 'Help ich komme aus dem Fenster raus. So helfen sie mir.',
			name: '2Mensch',
		},
		{
			firstEventDate: 'Jan 19, 2020',
			quote: 'NTF macht nur Chaos.',
			name: 'Parrot',
		},
	];

	return (
		<Box className={classes.wrapper}>
			<Box className={classes.container}>
				{quotes.map((quote) =>
					<Card key={quote.name} className={classes.card} radius={'lg'}>
						<header className={classes.cardBody}>
							<Text size={'sm'} className={classes.cardDetails}>
								Dabei seit <span
								className={classes.cardDetailsDate}>{quote.firstEventDate}</span>
							</Text>
							<h2 className={classes.quote}>
								{quote.quote}
							</h2>
						</header>
						<Group>
							<Avatar radius={'xl'} src={quote.avatar}></Avatar>
							<Text color={'dimmed'}>{quote.name}</Text>
						</Group>
					</Card>,
				)}
			</Box>
		</Box>
	);
}
