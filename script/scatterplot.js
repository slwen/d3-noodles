// D3 Scripting Lain Here
/* global d3:false */

// var dataset = [
//                   [ 5,     20 ],
//                   [ 480,   90 ],
//                   [ 250,   50 ],
//                   [ 100,   33 ],
//                   [ 330,   95 ],
//                   [ 410,   12 ],
//                   [ 475,   44 ],
//                   [ 25,    67 ],
//                   [ 85,    21 ],
//                   [ 220,   88 ],
//                   [ 600,   60 ],
//                   [ 1200,  80 ]
//               ];

//Dynamic, random dataset
var dataset = [];
var numDataPoints = 30;
var xRange = Math.random() * 1000;
var yRange = Math.random() * 1000;
for (var i = 0; i < numDataPoints; i++) {
    var newNumber1 = Math.round(Math.random() * xRange);
    var newNumber2 = Math.round(Math.random() * yRange);
    dataset.push([newNumber1, newNumber2]);
}

// Width & Height
var w = 600;
var h = 300;
var padding = 35;

// Scales
var xScale = d3.scale.linear()
					.domain([0, d3.max(dataset, function(d){ return d[0]; })])
					.range([padding, w - padding * 3]);

var yScale = d3.scale.linear()
					 .domain([0, d3.max(dataset, function(d){ return d[1]; })])
					 .range([h - padding, padding]);

var xAxis = d3.svg.axis()
				  .scale(xScale)
				  .orient('bottom')
				  .ticks(5);

var yAxis = d3.svg.axis()
				  .scale(yScale)
				  .orient('left')
				  .ticks(5);


// Create SVG element
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

svg.selectAll('circle')
		.data(dataset)
		.enter()
		.append('circle')
		.attr('cx', function(d){
			return xScale(d[0]);
		})
		.attr('cy', function(d){
			return yScale(d[1]);
		})
		.attr('r',5)
		.attr('opacity', function(d){
			return xScale(d[0])/1000;
		});

// Create x axis
svg.append('g')
	.attr('class','axis')
	.attr('transform', 'translate(0,' + (h - padding) + ')')
	.call(xAxis);

// Create y axis
svg.append('g')
	.attr('class','axis')
	.attr('transform', 'translate(' + padding + ', 0)')
	.call(yAxis);