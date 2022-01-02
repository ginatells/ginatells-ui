import { shallow } from 'enzyme'
import Question from './Question'

describe('<Question/>', () => {
  const wrapper = shallow(<Question/>)
  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1)
  })
})