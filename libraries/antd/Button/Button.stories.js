import allCombos from '../../../.storybook/allCombos';
import { Button } from './Button';

export default { title: 'AntD', component: Button };

const data = {
  children: ['', 'click me'],
  type: 'primary'
};

export const button = () => allCombos(Button, data);
