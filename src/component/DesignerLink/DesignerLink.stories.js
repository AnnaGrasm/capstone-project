import DesignerLink from "./DesignerLink";

const Template = args => <DesignerLink {...args} />;

export const Designer = Template.bind({});

Designer.args = {
	designer: "Philippe Starck"
};

const story = {
	title: "Component/DesignerLink",
	component: DesignerLink
};

export default story;