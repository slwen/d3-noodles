var dataset=[22,16,39,28,29,31,7,12,36,22,21,12,14,14,27,14,16],w=600,h=300,barPadding=1,svg=d3.select("body").append("svg").attr("width",w).attr("height",h);svg.selectAll("rect").data(dataset).enter().append("rect").attr("x",function(t,a){return a*(w/dataset.length)}).attr("y",function(t){return h-4*t}).attr("width",w/dataset.length-barPadding).attr("height",function(t){return 4*t}).attr("fill",function(t){return"rgb(0,0,"+10*t+")"}),svg.selectAll("text").data(dataset).enter().append("text").text(function(t){return t}).attr("x",function(t,a){return a*(w/dataset.length)+(w/dataset.length-barPadding)/2}).attr("y",function(t){return h-4*t+15}).attr("font-family","sans-serif").attr("font-size","11px").attr("fill","#fff").attr("text-anchor","middle");