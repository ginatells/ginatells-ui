import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage'
import { shallow } from 'enzyme';

describe('Option Component', () => {
    let props;
    let wrapper;

    const shallowOption = () => {
        if (!wrapper)
            wrapper = shallow(<MainPage {...props} />);
        return wrapper;
    };

    beforeEach(() => {
        props = {};
        wrapper = null;
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainPage {...props} />, div);
    });
});