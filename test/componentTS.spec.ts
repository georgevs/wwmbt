import { hello } from '../src/componentTS'
import { expect } from 'chai'

describe('componentJS', function () {
  it('should hello', function () {
    expect(hello()).to.eql('Hello from TypeScript')
  })
})