import {StatCounter} from './StatCounter';
import {Group} from '@mantine/core';
import {useIntersection} from '@mantine/hooks';

export function EventStats(): JSX.Element {
	const {ref, entry} = useIntersection();

	return (
		<Group grow mt={'xl'} ref={ref}>
			<StatCounter countEnd={100} info={"Events in den letzten 365 Tagen"}
						 isCounting={entry?.isIntersecting}/>
			<StatCounter countEnd={1242} info={"Belegte Slots in den letzten 365 Tagen"}
						 isCounting={entry?.isIntersecting}/>
		</Group>
	);
}
