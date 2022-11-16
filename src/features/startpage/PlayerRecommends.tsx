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
			firstEventDate: '25.06.2022',
			quote: 'Der Einstieg in AMB war einfach und die Gruppe ist mittlerweile zum Ausklingen der Woche nicht mehr wegzudenken.',
			avatar: 'https://cdn.discordapp.com/guilds/706254758721224707/users/599236975861694474/avatars/a_7c3fb7d01e5ca727d9d85a2cbfe66931.png?size=40',
			name: 'HecTiics',
		},
		{
			firstEventDate: '26.03.21',
			quote: 'Als ich neu war, hat man mir stets geholfen, wurde gut aufgenommen, konnte jederzeit Fragen stellen. Das fand ich das Allerbeste, dass jeder dir geholfen hat und keiner genervt war.',
			avatar: 'https://cdn.discordapp.com/avatars/735384736436060201/616e5193941dae66c2ab1da5a4865df8.png?size=40',
			name: 'Kalle',
		},
		{
			firstEventDate: '25.09.2021',
			quote: 'Amb hat mein Leben verändert. Manchmal auch positiv',
			avatar: 'https://cdn.discordapp.com/avatars/481808293820628992/777acd892294c87cc8b2d93a54738a20.png?size=40',
			name: 'KevKevGo',
		},
		{
			firstEventDate: '04.2020',
			quote: 'Hier kann ich immer wieder Neues ausprobieren, Kontakte knüpfen und alles Mögliche spielen.',
			avatar: 'https://cdn.discordapp.com/avatars/185067296623034368/a_fa9cc615de6a8e6d1744bd1c568e6832.png?size=40',
			name: 'Alf',
		},
		{
			firstEventDate: '04.2020',
			quote: 'AMB= Arma macht Bock, dafür stehe ich mit meinem Namen. AMB, weil auch ich E-Sport ready sein wollte',
			avatar: 'https://cdn.discordapp.com/avatars/327385716977958913/9945a101c0b6f0f53bab921d7cd1154b.png?size=40',
			name: 'Gaik',
		},
		{
			firstEventDate: '07.2020',
			quote: 'ossi braucht kein funkgerät',
			avatar: 'https://cdn.discordapp.com/avatars/155409573337890816/257de27979273357de16494c0f1c40f4.png?size=40',
			name: 'Niko',
		},
		{
			firstEventDate: '06.2020',
			quote: 'Für Fortnite',
			avatar: 'https://cdn.discordapp.com/avatars/198204581996396545/5c549a306a7c96eb513a560855af76bf.png?size=40',
			name: 'Nameless',
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
