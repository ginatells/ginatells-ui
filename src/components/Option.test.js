import React from 'react';
import ReactDOM from 'react-dom';
import Option from './Option'
import { shallow } from 'enzyme';

describe('Option Component', () => {
    let props;
    let wrapper;

    const shallowOption = () => {
        if (!wrapper)
            wrapper = shallow(<Option {...props} />);
        return wrapper;
    };

    beforeEach(() => {
        props = {
            text: '',
            color: '',
            id: 0,
            value: 0
        };
        wrapper = null;
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Option {...props} />, div);
    });

    it('renders a given text', () => {
        props = {
            ...props,
            text: 'Very Interested'
        };
        expect(shallowOption().find('div p').text()).toBe('Very Interested');
    });

    it('renders a given color', () => {
        props = {
            ...props,
            color: 'green'
        };
        expect(shallowOption().find('div').hasClass('background-green')).toBe(true);
    });
});