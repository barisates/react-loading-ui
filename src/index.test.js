import {Loading} from './index';

it('renders without crashing', () => {
    Loading();
    Loading({progress: true});
});
