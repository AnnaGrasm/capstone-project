import ButtonLike from './ButtonLike';

const Template = args => <ButtonLike {...args} />;

export const Like = Template.bind({});

Like.args = {
  isLiked: true,
};

const story = {
  title: 'Component/ButtonLike',
  component: ButtonLike,
  argTypes: {
    toggleLike: {action: 'click'},
  },
};

export default story;
