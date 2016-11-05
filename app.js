require('babel-register')

const express = require("express")
const React = require("react")
const ReactDOMServer = require("react-dom/server")
const ReactRouter = require('react-router')
const match = ReactRouter.match
const RouterContext = ReactRouter.RouterContext
const ReactRedux = require('react-redux')
const Provider = ReactRedux.Provider
const Store = require('./js/Store.jsx')
const store = Store.store
const _ = require('lodash')
const fs = require('fs')
const port = 5050
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./js/ClientApp.jsx')
const routes = App.routes

const app = express() // Created new express server

// when ever somebody requests something to public, we gonna serve them file in there.
app.use('/public', express.static('./public'))

// anything that doesn't match above should match here
app.use((req, res) => {
	// matches given route to given set of routes
	match({routes: routes, location: req.url}, (error, redirectLocation, renderProps) => {
		if (error) {	
			res.status(500).send(error.message)
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {
			const body = ReactDOMServer.renderToString(
				React.createElement(Provider, {store}, 
					React.createElement(RouterContext, renderProps))
			)
			res.status(200).send(template({body}))	
		} else {
			res.status(400).send("Not Found")
		}
	})
})

console.log("Listening on port: " + port);
app.listen(port);
