(function(){

  'use strict';

  var as = document.querySelectorAll('.lane a');

  Array.prototype.slice.call(as).forEach(function(a) {
    var sushi = a.getAttribute('data-target-sushi'),
        image = document.querySelector('img[src="sushiyukicon_' + sushi + '.png"]'),
        queue = 'sushi';

    function enter() {
      // clear queue
      Velocity(this.element, 'stop');

      // add queue
      Velocity(this.element, {
        scale: [1, 0]
      }, {
        queue: 'sushi',
        duration: 650,
        easing: [200, 10],
        visibility: 'visible'
      });

      // animate
      Velocity.Utilities.dequeue(this.element, queue);
    }

    function leave() {
      Velocity(this.element, {
        scale: [0, 1]
      }, {
        duration: 350,
        visibility: 'hidden'
      });
    }

    a.addEventListener('mouseenter', enter.bind({ element: image }), false);
    a.addEventListener('mouseleave', leave.bind({ element: image }), false);
  });

}());
