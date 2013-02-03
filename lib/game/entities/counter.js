ig.module('game.entities.counter')

.requires('impact.entity')

.defines(function() {

    EntityCounter = ig.Entity.extend({

        tilesheet: new ig.Image('media/numbers.png'),

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        update: function() {

        }

    });

});