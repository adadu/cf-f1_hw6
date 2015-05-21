// Jason E Anderson, ja@adadu.com, May 15 2015
// CodeFellows, HW5 Donut Shop JS only


var DonutShop = function(l, h, mn, mx, d) {
this.locationName = l;
this.hoursOfOperation = h;
this.minCustomers = mn;
this.maxCustomers = mx;
this.averageDonutsHr = d;
this.rand = Math.random();
this.shopLocation = function() {
  return l;
};
this.shopHours = function() {
  return h;
};
this.getDonutsPerHour = function() {
  var hr = Math.floor(this.calc() * d);
  return hr;
};
this.getDonutsPerDay = function() {
  var day = Math.floor(this.getDonutsPerHour() * h);
  return day;
};
this.calc = function() {
  var random = (this.rand * mx - mn + 1) + mn;
  return random;
};
};

function DonutMaster() {
this.shopList = [];
this.addShop = function(addName) {
  return this.shopList.push(addName);
};

this.generateReport = function() {
  for (var i = 0; i < this.shopList.length; i++) {
    $("tbody").append("<tr id='row' + i" + "/></tr>");
    $("'#row' + i" ).append("<th class=" + "shopLoc" + i + ">" + this.shopList[i].shopLocation() + "</th>");
    /* $("#row" + i ).append("<td class=" + "shopDetails" + i + ">" + this.shopList[i].shopHours() + "</td>");
    $("#row" + i ).append("<td class=" + "shopDetails" + i + ">" + this.shopList[i].getDonutsPerHour() + "</td>");
    $("#row" + i ).append("<td class=" + "shopDetails" + i + ">" + this.shopList[i].getDonutsPerDay() + "</td>");
    /*
    $(".shopDetails" + i ).hide();
    $(".shopLoc" + i ).on("mouseover", function() {
      $(".shopDetails" + i ).show();
    });
    $(".shopLoc" + i ).on("mouseout", function() {
      $(".shopDetails" + i ).hide();
    });
*/
  } // for loop
}; // generateReport
} // DonutMaster

var donutMaster = new DonutMaster();
var dT = new DonutShop("Downtown", 16, 8, 43, 4.5);
var cH = new DonutShop("Captiol Hill", 19, 4, 37, 2);
var sLU = new DonutShop("South Lake Union", 14, 9, 23, 6.33);
var we = new DonutShop("Wedgewood", 14, 2, 28, 1.25);
var ba = new DonutShop("Ballard", 14, 8, 58, 3.75);
donutMaster.addShop(dT);
donutMaster.addShop(cH);
donutMaster.addShop(sLU);
donutMaster.addShop(we);
donutMaster.addShop(ba);

$(document).ready( function() {
donutMaster.generateReport();
});
