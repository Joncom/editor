ig.module('game.entities.tools')

.requires('impact.entity')

.defines(function() {

    EntityTools = ig.Entity.extend({

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        update: function() {}

    });

});