'use strict'

var expect = require('chai').expect
var fs = require('fs')

var eagleToSVG = require('../index.js')

function checkSchematic(schematic, callback) {
	eagleToSVG.schematic(schematic, null, function(err, data) {
		expect(err).to.equal(null)
		expect(data.layers).not.to.equal(null)
		callback()
	})
}

describe('eagle-to-svg', function() {
	it('should parse the correct layers', function(done) {
		fs.readFile('./test/Signal-Detector/Signal Detector.sch', function(err, data) {
			expect(err).to.equal(null)
			checkSchematic(data, done)
		})
	})
})