import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Question from './Question';

describe('Question tests', () => {
  let wrapper;
  let props;

  const shallowQuestion = () => {
    if (!wrapper)
      wrapper = shallow(<Question {...props} />);
    return wrapper;
  };

  beforeEach(() => {
    props = {
      question: ''
    };
    wrapper = undefined;
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Question />, div);
  });

  it('it has a div with an image inside', () => {
    expect(shallowQuestion().find('div#question-div').exists()).toBe(true);
    expect(shallowQuestion().find('div#question-div img').exists()).toBe(true);
  });

  describe('image', () => {   
    it('renders a balloon image inside a character div', () => {
      const image = shallowQuestion().find('div#question-div img#balloon-img');
      expect(image.exists()).toBe(true);
      expect(image.prop('src')).toBe('balloon.png');
    });
  });

  describe('text', () => {   
    it('shows a text question when question exists', () => {
      const question = 'Do you like movies?';
      props.question = question;
      expect(shallowQuestion().find('div#text-question-div').text()).toBe(question);
    });

    it.each([[null], [undefined], ['']])('shows a text error when question is %s', (question) => {
      props.question = question;
      expect(shallowQuestion().find('div#text-question-div').text()).toBe('ERROR: Question not Found! Please, reload the page!');
    });
  });
});