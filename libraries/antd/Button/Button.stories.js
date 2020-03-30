import allCombos from '../../../.storybook/allCombos';
import { Button } from './Button';

export default { title: 'libraries|AntD', component: Button };

const data = {
  children: ['', 'click me'],
  type: 'primary'
};

export const button = () => allCombos(Button, data);
