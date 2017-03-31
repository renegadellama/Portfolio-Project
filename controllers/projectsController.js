'use strict';

(function(module){
  const projectsController = {};

  projectsController.index = () => {
    $('.about-me').hide();
    $('.my-articles').show();

  };
  module.projectsController = projectsController;
}(window));
