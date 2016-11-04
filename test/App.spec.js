// using `spec` in file name is not important
/* eslint-env mocha */

const {expect} = require('chai')
const React = require('react')
const Search = require('../js/Search')
const ShowCard = require('../js/ShowCard')
const Header = require('../js/Header')
const {shows} = require('../public/data')
const {shallow, mount} = require('enzyme')
const {store, rootReducer} = require('../js/Store')
const {Provider} = require('react-redux')

describe('<Search />', () => {
	it("should render the Header", () => {
		const wrapper = shallow(<Provider><Search /></Provider>)
		console.log(wrapper.find(Header));	
		expect(wrapper.find(Header).length).to.equal(1);	
		console.log(wrapper.find(Header));	
	})

	xit('should render as many shows as there are data for', () => {
		const wrapper = shallow(<Search />)
		expect(wrapper.find(ShowCard).length).to.equal(shows.length)
	})

	xit('should filter correctly given new state', () => {
		const wrapper = mount(<Search />)
		const input = wrapper.find('.search-input')

		// shallow doesn't allow interaction. here we have to simulate the change of input
		// use shallow as much as you can and mount only when you have to
		input.node.value = 'house'
		input.simulate('change')

		expect(wrapper.state('searchTerm')).to.equal('house')
		expect(wrapper.find('.show-card').length).to.equal(2)
	})
})

xdescribe('Store', () => {
	it('should bootstrap', () => {
		const state = rootReducer(undefined, {type: '@@redux/INIT'})
		expect(state).to.deep.equal({searchTerm: ''})
	})

	it('should handle setSearchTerm actions', () => {
		const state = rootReducer({searchTerm: 'some test string'}, {type: 'setSearchTerm', value: 'new value'});
		expect(state).to.deep.equal({searchTerm: 'new value'})
	})
})