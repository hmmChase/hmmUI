// import { action } from '@storybook/addon-actions';
import allCombos from '../../../.storybook/allCombos';
import FoilType from './FoilType';

export default { title: 'components|Gold/FoilType', component: FoilType };

const data = {
  // id: ['1']
};

// const actions = {
//   onClick: action('onClick')
// };

export const foilType = () => allCombos(FoilType, data);
