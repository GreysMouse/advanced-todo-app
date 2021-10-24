import { useSelector } from 'react-redux';
import RootState from '../../store';

import SectionLink from '../SectionLink/SectionLink';

// const mapStateToProps = (state: any) => {
//   return {
//     isActive: true
//   }
// }

// const mapDispatchToProps= (dispatch: any) => {
//   return {
//     setActivePage: () => {
//       dispatch()
//     }
//   }
// }
interface ISectionLinkWrapperProps {
  sectionName: string;
  path: string;
}


const SectionLinkWrapper= ({ sectionName, path }: ISectionLinkWrapperProps): JSX.Element => {
  const selectedPath = useSelector((state: typeof RootState) => state.sectionLink.activePath);

  const isActive = selectedPath === path;

  return (
    <SectionLink sectionName={ sectionName } path={ path } isActive={ isActive } />
  )
}

export default SectionLinkWrapper;
