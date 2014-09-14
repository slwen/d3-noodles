// D3 Scripting Lain Here
/* global d3:false */

var dataset = [22, 16, 39, 28, 29, 31, 7, 12, 36];

// Bar Chart
d3.select('body').selectAll('div')
	.data(dataset).enter().append('div')
	.attr('class','bar')
	.style('height', function(d){
		return d * 5 + 'px';
	});


// SVG Circle Chart
// var svg = d3.select('body').append('svg');
// var w = 800;
// var h = 450;

// svg.attr('width',w);
// svg.attr('height',h);

// var circles = svg.selectAll('circle').data(dataset).enter().append('circle');

// circles.attr('cx', function(d, i){
// 	return (i * 50) + 70;
// })
// .attr('cy', h/2)
// .attr('r', function(d){
// 	return d;
// })
// .attr('opacity','0.75');