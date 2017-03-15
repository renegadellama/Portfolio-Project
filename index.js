'use strict';
var portfolio = [];

function portfolioData(projName, icon, description, date, contributors, link){
  this.projName = projName;
  this.icon = icon;
  this.description = description;
  this.date = date;
  this.contributors = contributors;
  this.link = link;
}

var histicuffs = ('Histicuffs', 'img', 'Historical Quiz-Based Figthing Tournament', '3/3/17', 'Isak Swearingen, Erik Enderlein, James Thomas, Enrique Rico', 'https://endere.github.io/Histicuffs/');
var salmoncookies = ('Salmon Cookies', 'img', 'Random Number Generator which Populates Data for an Imaginary Store', '2/17/16', 'Isak Swearingen', 'https://github.com/renegadellama/Salmon-Cookies' );
