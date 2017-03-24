'use strict';

PortfolioData.all = [];

PortfolioData.loadAll = function() {
  rawData.forEach(function(ele) {
    PortfolioData.all.push(new PortfolioData(ele));
  });
};

PortfolioData.fetchAll = function() {
  if (localStorage.rawData) {
    var newData = JSON.parse(localStorage.rawData);

    PortfolioData.loadAll(newData);
      articleView.initIndexPage();
  } else {
    $.getJSON('/Server/stringData.json').then(function(data){
      localStorage.rawData =  JSON.stringify(data);
      var newData = JSON.parse(localStorage.rawData);
      PortfolioData.loadAll(newData).toHtml();
      articleView.initIndexPage();
    });
  }
};
