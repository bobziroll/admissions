'use strict';

describe('myApp.part2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('part2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});