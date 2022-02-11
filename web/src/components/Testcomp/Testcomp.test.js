import { render } from '@redwoodjs/testing/web'

import Testcomp from './Testcomp'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Testcomp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Testcomp />)
    }).not.toThrow()
  })
})
