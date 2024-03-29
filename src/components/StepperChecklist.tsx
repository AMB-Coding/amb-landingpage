import {Stepper} from "@mantine/core";
import {ReactNode, useState} from "react";

type Step = {
	label: ReactNode;
	description: ReactNode;
}
type StepperChecklistProps = {
	steps: Array<Step>;
};

export function StepperChecklist(props: StepperChecklistProps): JSX.Element {
	const [active, setActive] = useState(0);

	return (
		<Stepper active={active} onStepClick={setActive} orientation={'vertical'} size={'lg'}>
			{props.steps.map((step) =>
				<Stepper.Step key={step.label?.toString()} label={step.label} description={step.description}/>,
			)}
		</Stepper>
	);
}
