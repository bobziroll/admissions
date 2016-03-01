'use strict';

describe('myApp.part1 module', function() {

  beforeEach(module('myApp.part1'));

  describe('part1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});