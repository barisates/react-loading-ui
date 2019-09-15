import React from 'react';
import ReactDOM from 'react-dom';
import {Loading} from './index';

it('renders without crashing', () => {
    Loading();
    Loading({progress: true});
});
