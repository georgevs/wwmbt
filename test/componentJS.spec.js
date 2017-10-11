import { hello } from '../src/componentJS'
import { expect } from 'chai'

describe('componentJS', function () {
  it('should hello', function () {
    expect(hello()).to.eql('Hello from JavaScript')
  })
})