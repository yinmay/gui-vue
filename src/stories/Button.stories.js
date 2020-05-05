import GButton from '../components/Button/Button';
// import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

export default {
  title: 'GButton',
};

storiesOf('Button', module).add('button', () => ({
  components: { GButton },
  template: '<g-button icon="1" iconPosition="right">default</g-button>',
}));
