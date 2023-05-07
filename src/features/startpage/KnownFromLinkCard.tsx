import {Card, createStyles, getStylesRef, Text} from "@mantine/core";

const useStyles = createStyles((theme, _params) => {
	const image = getStylesRef('image');

	return {
		card: {
			height: 280,
			width: 260,

			[`&:hover .${image}`]: {
				transform: 'scale(1.03)',
			},
		},

		image: {
			ref: image,
			position: 'absolute',
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			transition: 'transform 500ms ease',
		},

		overlay: {
			position: 'absolute',
			top: '20%',
			left: 0,
			right: 0,
			bottom: 0,
			backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .85) 90%)',
		},

		content: {
			height: '100%',
			position: 'relative',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			zIndex: 1,
		},

		title: {
			color: theme.white,
			marginBottom: 5,
		},

		author: {
			color: theme.colors.dark[2],
		},
	};
});

type ImageCardProps = {
	link: string;
	image: string;
	title: string;
	description: string;
}

export function KnownFromLinkCard({image, title, description, link}: ImageCardProps): JSX.Element {
	const {classes} = useStyles();

	return (
		<Card
			p="lg"
			shadow="lg"
			radius="md"
			className={classes.card}
			component="a"
			href={link}
			target="_blank"
			rel="noopener,noreferrer"
		>
			<div className={classes.image} style={{backgroundImage: `url(${image})`}}/>
			<div className={classes.overlay}/>

			<div className={classes.content}>
				<Text size={'lg'} className={classes.title} weight={500}>
					{title}
				</Text>

				<Text size={'sm'} className={classes.author}>
					{description}
				</Text>
			</div>
		</Card>
	);
}
