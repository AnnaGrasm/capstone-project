import ButtonDescription from './ButtonDescription';


const Template = args => <ButtonDescription {...args} />;

export const Description = Template.bind({});

Description.args = {
	showDescription: true,
	description: "llllll",
	id: 2,
	name: "Wishbone Chair"
};

const story = {
	title: "Component/ButtonDescription",
	component: ButtonDescription, 
	argTypes: {toggleDescription: {action: 'toggleDescription'}}
};

export default story;

