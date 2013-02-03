ig.module('game.entities.counter')

.requires('impact.entity')

.defines(function() {

    EntityCounter = ig.Entity.extend({

        count: 0,

        tilesheet: new ig.Image('media/numbers.png'),

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        update: function() {

        }

    });

});