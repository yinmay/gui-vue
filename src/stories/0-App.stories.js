import GButton from '../components/Button/Button';

export default {
  title: 'GButton',
};
export const button = () => ({
  components: { GButton },

  template:
    '<g-button icon="true" iconPosition="left"><div>123</div></g-button>',
});

button.story = {
  name: 'Button',
};
