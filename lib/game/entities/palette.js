ig.module('game.entities.palette')

.requires('impact.entity')

.defines(function() {

    EntityPalette = ig.Entity.extend({

        tilesheet: new ig.Image('media/palette.png'),

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        draw: function() {

            this.parent();

        },

        update: function() {

        }

    });

});