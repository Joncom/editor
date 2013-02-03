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

        draw: function() {

            var count_string = this.count.toString();

            for( var i = 0; i < count_string.length; i++ ) {

                var draw_x = this.pos.x + i*8;
                var draw_y = this.pos.y;
                var source_x = parseInt(count_string[i])*8;
                var source_y = 0;
                var width = 8;
                var height = 10;
                this.tilesheet.draw(draw_x, draw_y, source_x, source_y, width, height);

            }

        },

        update: function() {

        }

    });

});