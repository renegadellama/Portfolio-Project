'use strict';

(function(module){
  const aboutController = {};

  aboutController.index = () => {
    $('.my-articles').hide();
    $('.project-template').hide();
    $('.about-me').show();
  };
  module.aboutController = aboutController;
}(window));
