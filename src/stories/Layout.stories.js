import GLayout from '../components/Layout/Layout';

export default {
  title: 'GLayout',
};
export const layout = () => ({
  components: { GLayout },

  template: '<g-layout></g-layout>',
});

layout.story = {
  name: 'layout',
};
