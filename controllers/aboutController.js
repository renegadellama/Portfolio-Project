'use strict';

(function(module){
  const aboutController = {};

  aboutController.index = () => {
    $('.my-projects').hide();
    $('.about-me').show();
  };
  module.aboutController = aboutController;
}(window));
