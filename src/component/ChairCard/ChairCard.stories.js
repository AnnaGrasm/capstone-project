import ChairCard from './ChairCard';

const Template = args => <ChairCard {...args} />;

export const Card = Template.bind({});

Card.args = {
  chair: {
    name: 'Wishbone Chair',
    designer: 'Hans J. Wegner',
    imgUrl: '../img/wishbone-chair.jpeg',
    imgUrlAlternative1: '../img/wishbone-chair-img1.jpeg',
    imgUrlAlternative2: '../img/wishbone-chair-img2.jpeg',
    imgUrlAlternative3: '../img/wishbone-chair-img3.jpeg',
	description: "sfdsd",
	

  },
  showDescription: true,
  isLiked: true
};

const story = {
  title: 'Component/ChairCard',
  component: ChairCard,
  argTypes: {
    toggleDescription: {action: 'toggleDescription'}, toggleLike: {action: 'click'},
  },
};

export default story;
