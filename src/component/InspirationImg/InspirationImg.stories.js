import InspirationImg from "./InspirationImg";

export default {
  title: 'Component/InspirationImg',
  component: InspirationImg,
};

const template = args => <InspirationImg {...args} />;

export const Default = template.bind({});

