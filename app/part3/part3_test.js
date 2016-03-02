'use strict';

describe('myApp.part3 module', function() {

  beforeEach(module('myApp.view2'));

  describe('part3 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('Part3Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});