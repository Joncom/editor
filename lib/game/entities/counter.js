ig.module('game.entities.counter')

.requires('impact.entity')

.defines(function() {

    EntityCounter = ig.Entity.extend({

        count: 0,

        digits: 1,

        tilesheet: new ig.Image('media/numbers.png'),

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        add_one: function() {
            this.count++;
            return this.count;
        },

        substract_one: function() {
            if(this.count > 0) this.count--;
            return this.count;
        },

        update: function() {

        }

    });

});