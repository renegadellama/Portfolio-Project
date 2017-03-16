'use strict';
var portfolio = [];

function PortfolioData(obj){
  this.projName = obj.projName;
  this.icon = obj.icon;
  this.description = obj.description;
  this.date = obj.date;
  this.contributors = obj.contributors;
  this.link = obj.link;
}

var histicuffs = new PortfolioData('Histicuffs', Images/teddy.jpg, 'Historical Quiz-Based Figthing Tournament', '3/3/17', 'Isak Swearingen, Erik Enderlein, James Thomas, Enrique Rico', 'https://endere.github.io/Histicuffs/');
var salmoncookies = new PortfolioData('Salmon Cookies', 'img', 'Random Number Generator which Populates Data for an Imaginary Store', '2/17/16', 'Isak Swearingen', 'https://github.com/renegadellama/Salmon-Cookies' );
