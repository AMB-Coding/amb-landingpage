import {StatCounter} from './StatCounter';
import {Group} from '@mantine/core';
import {useIntersection} from '@mantine/hooks';

type EventStatsProps = {};

export function EventStats(props: EventStatsProps): JSX.Element {
	const {} = props;
	const {ref, entry} = useIntersection();

	return (
		<Group grow mt={'xl'} ref={ref}>
			<StatCounter countEnd={144} info={"Events in den letzten 365 Tagen"}
						 isCounting={entry?.isIntersecting}/>
			<StatCounter countEnd={1740} info={"Belegte Slots in den letzten 365 Tagen"}
						 isCounting={entry?.isIntersecting}/>
		</Group>
	);
}
