'use strict';

PortfolioData.prototype.createImage = function(i) {
  var imageEl = document.createElement('img');
  return imageEl;
};

PortfolioData.prototype.toHtml = function() {
  var $newProject = $('article.about-me').clone().removeClass('about-me');
  $newProject.find('h3').text(this.projName);
  $newProject.find('.project-image').attr('src', this.icon);
  $newProject.find('.description').text(this.description);
  $newProject.find('.date').text(this.date);
  return $newProject;
};
