import { shallow } from 'enzyme'
import App from './App'

describe('<App/>', () => {
  const wrapper = shallow(<App/>)
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})
