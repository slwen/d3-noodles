// D3 Scripting Lain Here
/* global d3:false */

var dataset = [5, 10, 15, 20, 25];

d3.select('body').selectAll('div')
	.data(dataset).enter().append('div')
	.attr('class','bar')
	.style('height', function(d){
		return d * 5 + 'px';
	});