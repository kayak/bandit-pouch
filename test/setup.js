import 'jsdom-global/register'; // at the top of file, even before importing react
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
configure({ adapter: new Adapter() });
