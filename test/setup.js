import 'jsdom-global/register'; // at the top of file, even before importing react
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFrown as farFrown,
} from '@fortawesome/free-regular-svg-icons';
import {
  faBan,
  faPlay,
  faStop,
  faUser,
  faPause,
  faCopy,
  faShare,
  faExclamation,
  faExclamationCircle,
  faFrown,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBan,
  faPlay,
  faStop,
  faUser,
  faPause,
  faCopy,
  faShare,
  faExclamation,
  faExclamationCircle,
  faFrown,
  farFrown,
  faChevronLeft,
  faChevronRight,
);

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });
