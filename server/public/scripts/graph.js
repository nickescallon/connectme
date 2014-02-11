var w = window.innerWidth;
var h = window.innerHeight;

/*---------------TEST DATASET------------------*/
    //SHOULD POPULATE BASED ON grads...
    // var compList = {
    //   "hack reactor": 0,
    //   "seedchange": 1,
    //   "McKinsey": 2,
    //   "DocuSign": 3,
    //   "Monsoon": 4,
    //   "Architect": 5,
    //   "LOYAL3": 6,
    //   "Boatbound": 7,
    //   "Thoughtworks": 8,
    //   "salesforce": 9,
    //   "HackBright": 10,
    //   "Futura IO": 11,
    //   "Toaster Ltd": 12,
    //   "startups": 13,
    //   "Macy's.com": 14,
    //   "Adap.tv": 15,
    //   "Live Lovely": 16,


    //   }

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
    {"name":"Tim Schiller", "company":"Futura IO", "cohort":1, "isCompany":false},
    {"name":"Howard Tang", "company":"Toaster Ltd", "cohort":2, "isCompany":false},
    {"name":"Coleman Foley", "company":"startups", "cohort":2, "isCompany":false},
    {"name":"Tyler Briles", "company":"Macy's.com", "cohort":2, "isCompany":false},
    {"name":"Andreas Nauleau", "company":"Adap.tv", "cohort":2, "isCompany":false},
    {"name":"Gavin McDermott", "company":"Live Lovely", "cohort":2, "isCompany":false},
    {"name":"John Katsnelson", "company":"Monsoon", "cohort":2, "isCompany":false},
    {"name":"Mark Wilbur", "company":"Groupon", "cohort":2, "isCompany":false},
    {"name":"Mike Adams", "company":"OpenTable", "cohort":2, "isCompany":false},
    {"name":"Nate Phillips", "company":"seedchange", "cohort":2, "isCompany":false},
    {"name":"Raya Desawade", "company":"Pulselocker", "cohort":2, "isCompany":false},
    {"name":"Tatiana Charkova", "company":"Edthena", "cohort":2, "isCompany":false},
    {"name":"Tony Thomson", "company":"Adobe", "cohort":2, "isCompany":false},
    {"name":"Alex Paley", "company":"Green Dot", "cohort":3, "isCompany":false},
    {"name":"Andrew Magliozzi", "company":"Koemei", "cohort":3, "isCompany":false},
    {"name":"Tony Singhavong", "company":"Vsco", "cohort":3, "isCompany":false},
    {"name":"Blake Embrey", "company":"Formidable Labs", "cohort":3, "isCompany":false},
    {"name":"Chad Reed", "company":"GlobeSherpa", "cohort":3, "isCompany":false},
    {"name":"Peter DeCroos", "company":"SmartShoot", "cohort":3, "isCompany":false},
    {"name":"Tyson Daugherty", "company":"Yummy Corp", "cohort":3, "isCompany":false},
    {"name":"Jason Kang", "company":"thismoment", "cohort":3, "isCompany":false},
    {"name":"John Dvorak", "company":"Node Prime", "cohort":3, "isCompany":false},
    {"name":"Magee Mooney", "company":"Tog+Porter", "cohort":3, "isCompany":false},
    {"name":"Selby Walker", "company":"Versal", "cohort":3, "isCompany":false},
    {"name":"Mark Lee", "company":"Slideshare", "cohort":3, "isCompany":false},
    {"name":"Nima Mehanian", "company":"AdTonik", "cohort":3, "isCompany":false},
    {"name":"Philip Rosen", "company":"startups", "cohort":3, "isCompany":false},
    {"name":"Andrew Ha", "company":"Adap.tv", "cohort":3, "isCompany":false},
    {"name":"Ruan Pethiyagoda", "company":"Hack Reactor", "cohort":3, "isCompany":false},
    {"name":"Dan Sell", "company":"Green Dot", "cohort":3, "isCompany":false},
    {"name":"Seung Lim", "company":"AOL", "cohort":3, "isCompany":false},
    {"name":"Tim Sze", "company":"Green Dot", "cohort":3, "isCompany":false},
    {"name":"Charles Holbrow", "company":"MIT", "cohort":4, "isCompany":false},
    {"name":"Dylan O'Carroll", "company":"Chartboost", "cohort":4, "isCompany":false},
    {"name":"Brian Chu", "company":"UC Berkeley", "cohort":4, "isCompany":false},
    {"name":"Bianca Gandolfo", "company":"Hack Reactor", "cohort":4, "isCompany":false},
    {"name":"Brandon Salazar", "company":"Maxwell Rowe Creative Lab", "cohort":4, "isCompany":false},
    {"name":"Elle Beal", "company":"NodePrime", "cohort":4, "isCompany":false},
    {"name":"Eric Levin", "company":"DocuSign", "cohort":4, "isCompany":false},
    {"name":"Greg Palmer", "company":"Konsu.It", "cohort":4, "isCompany":false},
    {"name":"Patrick Stapleton", "company":"Keychain Logistics", "cohort":4, "isCompany":false},
    {"name":"Alex Gaputin", "company":"Backplane", "cohort":4, "isCompany":false},
    {"name":"Jake Seip", "company":"Keychain Logistics", "cohort":4, "isCompany":false},
    {"name":"Kevin Smith", "company":"Backcountry.com", "cohort":4, "isCompany":false},
    {"name":"Nick Miller", "company":"Radius Intelligence", "cohort":4, "isCompany":false},
    {"name":"Rohan Sathe", "company":"Voxer", "cohort":4, "isCompany":false},
    {"name":"Bill Shelton", "company":"Edmodo", "cohort":4, "isCompany":false},
    {"name":"Evan Peele", "company":"coTap", "cohort":4, "isCompany":false},
    {"name":"Walker Flynn", "company":"Evisors", "cohort":4, "isCompany":false},
    {"name":"Andrew Spade", "company":"Hack Reactor", "cohort":5, "isCompany":false},
    {"name":"Gregory Hilkert", "company":"Brandcast", "cohort":5, "isCompany":false},
    {"name":"Peter Shugar", "company":"Booshaka", "cohort":5, "isCompany":false},
    {"name":"Barry Wong", "company":"OpenTable", "cohort":5, "isCompany":false},
    {"name":"Al Lin", "company":"Groupon", "cohort":5, "isCompany":false},
    {"name":"Mike Ramos", "company":"Ticketfly", "cohort":5, "isCompany":false},
    {"name":"Jake McGuire", "company":"Ziploop", "cohort":5, "isCompany":false},
    {"name":"Felix Tripier", "company":"Famo.us", "cohort":5, "isCompany":false},
    {"name":"Guy Morita", "company":"Hipmunk", "cohort":5, "isCompany":false},
    {"name":"Hao Liu", "company":"Brandcast", "cohort":5, "isCompany":false},
    {"name":"Joshua Pagano", "company":"Vertical Response", "cohort":5, "isCompany":false},
    {"name":"Josh Sprague", "company":"LessThan3", "cohort":5, "isCompany":false},
    {"name":"Kyle Geppert", "company":"Summit Hill", "cohort":5, "isCompany":false},
    {"name":"Maxwell Malin", "company":"Livefyre", "cohort":5, "isCompany":false},
    {"name":"Zak Zibrat", "company":"Rigetti Quantum Computing", "cohort":5, "isCompany":false},
    {"name":"Alessandro Zanardi", "company":"Good Karma", "cohort":5, "isCompany":false},
    {"name":"Phillip Alexander", "company":"Hack Reactor", "cohort":5, "isCompany":false},
    {"name":"Cyd La Luz", "company":"Schoolzilla", "cohort":5, "isCompany":false},
    {"name":"Ricky Sidhu", "company":"LinkedIn", "cohort":5, "isCompany":false},
    {"name":"Savannah Kunovsky", "company":"Hack Reactor", "cohort":5, "isCompany":false},
    {"name":"Shaohua Zhou", "company":"Versal", "cohort":5, "isCompany":false},
    {"name":"Stephen Portanova", "company":"Lockit", "cohort":5, "isCompany":false},
    {"name":"Christopher Sita", "company":"VMWare", "cohort":5, "isCompany":false},
    {"name":"Tuhin Chakraborty", "company":"Pandora", "cohort":5, "isCompany":false},
    {"name":"Brett Hoyer", "company":"DeliRadio", "cohort":6, "isCompany":false},
    {"name":"Daniel Miller", "company":"DeliRadio", "cohort":6, "isCompany":false},
    {"name":"Aysegul Yonet", "company":"SolutionSets", "cohort":6, "isCompany":false},
    {"name":"Andrew Delikat", "company":"Hack Reactor", "cohort":6, "isCompany":false},
    {"name":"Blake West", "company":"Hack Reactor", "cohort":6, "isCompany":false},
    {"name":"Curtis Mitchell", "company":"Bluenose Analytics", "cohort":6, "isCompany":false},
    {"name":"David Gonzales", "company":"DeliRadio", "cohort":6, "isCompany":false},
    {"name":"Douglas Kong", "company":"NeuStar", "cohort":6, "isCompany":false},
    {"name":"Elie Kiwan", "company":"AdPerk", "cohort":6, "isCompany":false},
    {"name":"Martin Henry-Castaneda", "company":"SolutionSets", "cohort":6, "isCompany":false},
    {"name":"Kristina Garfinkel", "company":"Versal", "cohort":6, "isCompany":false},
    {"name":"Kevin Moore", "company":"Hack Reactor", "cohort":6, "isCompany":false},
    {"name":"Lindsay Hertz", "company":"Desk.com", "cohort":6, "isCompany":false},
    {"name":"Jess MacQueen", "company":"Hack Reactor", "cohort":6, "isCompany":false},
    {"name":"Michael O'Brien", "company":"Famo.us", "cohort":6, "isCompany":false},
    {"name":"Matthew Goo", "company":"Switchfly", "cohort":6, "isCompany":false},
    {"name":"Will Ngo", "company":"Desk.com", "cohort":6, "isCompany":false},
    {"name":"Michael Nason", "company":"Famo.us", "cohort":6, "isCompany":false},
    {"name":"Peter Schroedl", "company":"Beats Audio", "cohort":6, "isCompany":false},
    {"name":"Ryan Stellar", "company":"Hack Reactor", "cohort":6, "isCompany":false},
    {"name":"Rupa Sharma", "company":"Green Dot", "cohort":6, "isCompany":false},
    {"name":"Matt Silverstein", "company":"Tealium", "cohort":6, "isCompany":false},
    {"name":"Tae Jo", "company":"Hack Reactor", "cohort":6, "isCompany":false},
    {"name":"Tyler McGinnis", "company":"Needle", "cohort":6, "isCompany":false}
    ]


    
    /*---------------------BUILDS NODES AND LINKS FROM DATA ABOVE-----------------------*/
    var compList = {"Hack Reactor": 0};
    var count = 1;
    for (var i=0; i<grads.length; i++){
      if ( compList[grads[i].company] === undefined){
        compList[grads[i].company] = count;
        count++;
      }

    }
    console.log(compList);
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
    console.log(links);
    /*----------------------------------------------------------------------------------*/

var force = d3.layout.force()
    .charge(-1000)
    .linkDistance(50)
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
      .style("stroke", 'blue')
      .call(force.drag); // enable to make draggable

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
