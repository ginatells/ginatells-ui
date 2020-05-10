import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './MainPage'
import { shallow } from 'enzyme';

describe('MainPage Component', () => {
    let wrapper;

    const shallowMainPage = () => {
        if (!wrapper)
            wrapper = shallow(<MainPage/>);
        return wrapper;
    };

    beforeEach(() => {
        wrapper = null;
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MainPage/>, div);
    });

    describe('Character Image', () => {
        it('renders gina\'s  imagine inside a character div', () => {
            const image = shallowMainPage().find('div#main-page div#character-div img#gina-img');
            expect(image.exists()).toBe(true);
            expect(image.prop('src')).toBe('gina.png');
        });
    });

    describe('List of Options', () => {
        it('constains an unordered list inside an options div', () => {
            expect(shallowMainPage().find('div#main-page div#options-div ul#options-list').exists()).toBe(true);
        });

        it('renders 5 Options inside an unordered list', () => {
            const unorderedlist = shallowMainPage().find('div#main-page ul#options-list');
            expect(unorderedlist.children()).toHaveLength(5);
            expect(unorderedlist.childAt(0).find('Option#op-one').exists()).toBe(true);
            expect(unorderedlist.childAt(1).find('Option#op-two').exists()).toBe(true);
            expect(unorderedlist.childAt(2).find('Option#op-three').exists()).toBe(true);
            expect(unorderedlist.childAt(3).find('Option#op-four').exists()).toBe(true);
            expect(unorderedlist.childAt(4).find('Option#op-five').exists()).toBe(true);
        });

        it('renders correct text for each option', () => {
            const unorderedlist = shallowMainPage().find('div#main-page ul#options-list');
            expect(unorderedlist.childAt(0).find('Option#op-one').prop('text')).toBe('Very Interested');
            expect(unorderedlist.childAt(1).find('Option#op-two').prop('text')).toBe('Interested errouuuu');
            expect(unorderedlist.childAt(2).find('Option#op-three').prop('text')).toBe('Don\'t Care');
            expect(unorderedlist.childAt(3).find('Option#op-four').prop('text')).toBe('Not so Interested');
            expect(unorderedlist.childAt(4).find('Option#op-five').prop('text')).toBe('Really Not Interested');
        });

        it('Renders correct color for each option', () => {
            const unorderedlist = shallowMainPage().find('div#main-page ul#options-list');
            expect(unorderedlist.childAt(0).find('Option#op-one').prop('color')).toBe('green');
            expect(unorderedlist.childAt(1).find('Option#op-two').prop('color')).toBe('lightgreen');
            expect(unorderedlist.childAt(2).find('Option#op-three').prop('color')).toBe('blue');
            expect(unorderedlist.childAt(3).find('Option#op-four').prop('color')).toBe('orange');
            expect(unorderedlist.childAt(4).find('Option#op-five').prop('color')).toBe('red');
        });
    });
});