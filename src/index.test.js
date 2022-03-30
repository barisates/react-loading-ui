import {Loading, HideLoading, ShowLoading} from './index';

it('renders without crashing', () => {
    Loading();
    Loading({progress: true});
});

it('renders without crashing', () => {
    HideLoading();
    ShowLoading({progress: true});
    ShowLoading();
    HideLoading();
});