'use strict';

(function(module){
  const aboutController = {};

  aboutController.index = () => {
    $('.my-articles').hide();
    $('.about-me').show();
  };
  module.aboutController = aboutController;
}(window));
