import { shallow } from 'enzyme'
import Game from './Game'

describe('<Game/>', () => {
  const wrapper = shallow(<Game/>)

  it('renders without crashing', () => {    
    expect(wrapper).toHaveLength(1)
  })

  describe('Gina\s avatar', () => {
    it('renders gina\'s img inside a character div', () => {
      expect(wrapper.find('img')).toHaveLength(1)
      expect(wrapper.find('img').prop('src')).toBe('gina.png')
    })
  })

  describe('Question', () => {
    it('renders a Question component', () => {
      expect(wrapper.find('Question')).toHaveLength(1)
    })
  })

  describe('List of Options', () => {
    it('renders correct text for each option', () => {
      const ul = wrapper.find('ul')
      expect(ul.childAt(0).find('li').text()).toBe('Very Interested')
      expect(ul.childAt(1).find('li').text()).toBe('Interested')
      expect(ul.childAt(2).find('li').text()).toBe('Don\'t Care')
      expect(ul.childAt(3).find('li').text()).toBe('Not so Interested')
      expect(ul.childAt(4).find('li').text()).toBe('Really Not Interested')
    })
  })
})