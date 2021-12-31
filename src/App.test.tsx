import { shallow } from 'enzyme'
import App from './App'

describe('<App/>', () => {
  const wrapper = shallow(<App/>)
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
  it('renders Game', () => {
    expect(wrapper.find('Game')).toHaveLength(1)
  })
})
