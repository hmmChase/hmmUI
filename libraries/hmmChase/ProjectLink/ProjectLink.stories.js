import allCombos from '../../../.storybook/allCombos';
import { ProjectLink } from './ProjectLink';

export default { title: 'libraries|hmmChase', component: ProjectLink };

const data = {
  children: ['', 'click me']
};

export const projectLink = () => allCombos(ProjectLink, data);
