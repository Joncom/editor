ig.module('game.entities.toolbar')

.requires('impact.entity')

.defines(function() {

    EntityToolbar = ig.Entity.extend({

        size: { x: 76, y: 207 },

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        update: function() {}

    });

});