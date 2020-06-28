import allCombos from '../../../.storybook/allCombos';
import { Button } from './Button';

export default { title: 'libraries|hmmChase', component: Button };

const data = {
  children: ['', 'click me'],
  rel: '_blank',
  target: 'noopener noreferrer',
};

export const button = () => allCombos(Button, data);
