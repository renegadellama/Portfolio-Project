'use strict';
(function(method){

  PortfolioData.loadAll = function() {
    rawData.map(function(ele) {
      PortfolioData.all = rows.map(ele => new PortfolioData(ele));
    });
  };

  PortfolioData.fetchAll = function() {
    if (localStorage.rawData) {
      var newData = JSON.parse(localStorage.rawData);

      PortfolioData.loadAll(newData);
      articleView.initIndexPage();
    } else {
      $.getJSON('/Server/stringData.json').then(function(data){
        localStorage.rawData = JSON.stringify(data);
        var newData = JSON.parse(localStorage.rawData);
        PortfolioData.loadAll(newData).toHtml();
        articleView.initIndexPage();
      });
    }
  };
  method.PortfolioData = PortfolioData;
}(window));
