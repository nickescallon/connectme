var w = 1000;
var h = 500;

/*---------------TEST DATASET------------------*/
  
    var compList = {
      "hack reactor": 0,
      "seedchange": 1,
      "McKinsey": 2,
      "DocuSign": 3,
      "Monsoon": 4,
      "Architect": 5,
      "LOYAL3": 6,
      "Boatbound": 7,
      "Thoughtworks": 8,
      "salesforce": 9,
      "HackBright": 10,
      "Futura IO": 11
      }

    var grads = [{"name":"Albert Lee", "company":"seedchange", "cohort":1, "isCompany":false},
    {"name":"Mark Chatkhan", "company":"McKinsey", "cohort":1, "isCompany":false},
    {"name":"CJ Winslow", "company":"DocuSign", "cohort":1, "isCompany":false},
    {"name":"Adnan Wahab", "company":"Monsoon", "cohort":1, "isCompany":false},
    {"name":"Christen Thompson", "company":"Architect", "cohort":1, "isCompany":false},
    {"name":"Henry Zhu", "company":"LOYAL3", "cohort":1, "isCompany":false},
    {"name":"JP Whitaker", "company":"Boatbound", "cohort":1, "isCompany":false},
    {"name":"June Jung", "company":"Thoughtworks", "cohort":1, "isCompany":false},
    {"name":"Mark Reveley", "company":"McKinsey", "cohort":1, "isCompany":false},
    {"name":"Megan Tulac", "company":"McKinsey", "cohort":1, "isCompany":false},
    {"name":"Nathan Houle", "company":"Hack Reactor", "cohort":1, "isCompany":false},
    {"name":"Paul Bacchus", "company":"McKinsey", "cohort":1, "isCompany":false},
    {"name":"Mark Rossetti", "company":"salesforce", "cohort":1, "isCompany":false},
    {"name":"Shrah Smith", "company":"HackBright", "cohort":1, "isCompany":false},
    {"name":"Tim Schiller", "company":"Futura IO", "cohort":1, "isCompany":false}]
    
    /*---------------------BUILDS NODES AND LINKS FROM DATA ABOVE-----------------------*/

    var nodes = [];
    var links = [];

    for (var k in compList) {
      var temp = {};
      temp[k] = compList[k];
      temp["name"] = k;
      temp["company"] = null;
      temp["cohort"] = null;
      temp["isCompany"] = true;
      nodes.push(temp);
    }

    for (var i=0; i<grads.length; i++){
      nodes.push(grads[i]);
      //this block will link every grad to HR
      var temp = {};
      temp["source"] = nodes.length-1;
      temp["target"] = 0;
      links.push(temp);
      //if the grad has a link to a company, this will establish it
      if (compList[grads[i].company] !== undefined){
        temp = {};
        temp["source"] = nodes.length-1;
        temp["target"] = compList[grads[i].company];
        links.push(temp);
      }
    }

    /*----------------------------------------------------------------------------------*/

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(30)
    .size([w, h])
    .nodes(nodes)
    .links(links)
    .start();

var svg = d3.select("body").append("svg")
    .attr("width", w)
    .attr("height", h);

var link = svg.selectAll(".link")
    .data(links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke-width", function(d) { return Math.sqrt(d.value); });

var node = svg.selectAll(".node")
      .data(nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 10)
      //.style("fill", function(d) { return color(d.group); }) // somehow add face pictures here
      .style("fill", 'white')
      .style("stroke", 'blue');
      //.call(force.drag); // enable to make draggable

node.append("title")
      .text(function(d) { return d.name; });

/*-------------------FORCE POSITIONING--------------------------------*/
force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
});
