// D3 Scripting Lain Here
/* global d3:false */

var dataset = [22, 16, 39, 28, 29, 31, 7, 12, 36, 22, 21, 12, 14, 14, 27, 14, 16];

// Width & Height
var w = 600;
var h = 300;
var barPadding = 1;

// Bar chart svg
var svg = d3.select('body')
			.append('svg')
			.attr('width', w)
			.attr('height', h);

// Bar chart columns
svg.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr('x', function(d,i){
		return i * (w / dataset.length);
	})
	.attr('y', function(d){
		return h - d * 4;
	})
	.attr('width', w / dataset.length - barPadding)
	.attr('height', function(d) {
		return d * 4;
	})
	.attr('fill', function(d){
		return 'rgb(0,0,' +  (d * 10) + ')';
	});

// Bar chart labels
svg.selectAll('text')
	.data(dataset)
	.enter()
	.append('text')
	.text(function(d){
		return d;
	})
	.attr('x', function(d,i){
		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
	})
	.attr('y', function(d){
		return h - (d * 4) + 15;
	})
	.attr('font-family','sans-serif')
	.attr('font-size','11px')
	.attr('fill','#fff')
	.attr('text-anchor','middle');