// using `spec` in file name is not important
/* eslint-env mocha */

const {expect} = require('chai')

describe('<Search />', () => {
	it("should pass", () => {
		expect(((1 + 1) === 2)).to.be.true
		expect(1 + 1).to.equal(2)
	})
})