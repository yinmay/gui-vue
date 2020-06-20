import GCard from '../components/Card/Card';

export default {
  title: 'GCard',
};

export const card = () => ({
  components: { GCard },

  template:
    '<g-card><div slot="header">2</div><div slot="content">2</div></g-card>',
});

card.story = {
  name: 'card',
};
