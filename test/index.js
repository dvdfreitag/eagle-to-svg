'use strict'

var expect = require('chai').expect
var fs = require('fs')

var eagleToSVG = require('../index.js')

var layers = null
var parts = null
var symbols = null

describe('eagle-to-svg', () => {
	it('should parse schematics correctly', (done) => {
		expect(() => { layers = JSON.parse(fs.readFileSync('./test/layers.json')) }).not.to.throw('Error: Failed to load layer JSON')
		expect(() => { parts = JSON.parse(fs.readFileSync('./test/parts.json')) }).not.to.throw('Error: Failed to load part JSON')
		expect(() => { symbols = JSON.parse(fs.readFileSync('./test/symbols.json')) }).not.to.throw('Error: Failed to load symbol JSON')

		fs.readFile('./test/Signal-Detector/Signal Detector.sch', (fserr, fsdata) => {
			expect(fserr).to.equal(null)

			eagleToSVG.schematic(fsdata, null, (err, data) => {
				expect(err).to.equal(null)

				expect(data.layers).not.to.equal(null)
				expect(data.layers).to.be.an('array')
				expect(data.layers).to.have.length(6)
				expect(data.layers).to.deep.equal(layers)

				expect(data.parts).not.to.equal(null)
				expect(data.parts).to.be.an('array')
				expect(data.parts).to.have.length(36)
				expect(data.parts).to.deep.equal(parts)

				expect(data.symbols).not.to.equal(null)
				expect(data.symbols).to.be.an('array')
				expect(data.symbols).to.have.length(9)
				expect(data.symbols).to.deep.equal(symbols)

				setTimeout(done(), 50)
			})
		})
	})
})
