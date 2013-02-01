ig.module('game.entities.toolbar')

.requires('impact.entity')

.defines(function() {

    EntityToolbar = ig.Entity.extend({

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        update: function() {}

    });

});