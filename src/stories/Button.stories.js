import GButton from '../components/Button/Button';
import Vue from 'vue';
import { storiesOf } from '@storybook/vue';

export default {
  title: 'GButton',
};

storiesOf('Button', module).add('default', () => ({
  components: { GButton },
  template: '<g-button>default</g-button>',
}));
