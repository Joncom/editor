ig.module('game.entities.counter')

.requires('impact.entity')

.defines(function() {

    EntityCounter = ig.Entity.extend({

        digits: 1,
        count: 0,
        count_string: '',

        tilesheet: new ig.Image('media/numbers.png'),

        init: function(x, y, settings) {

            this.parent(x, y, settings);

            this._prep_for_draw();

        },

        _prep_for_draw: function() {
            this.count_string = this.count.toString();
            var leading_zeroes = this.digits - this.count_string.length;
            for( var k = 0; k < leading_zeroes; k ++ ) {
                this.count_string = '0' + this.count_string;
            }
        },

        add_one: function() {
            this.count++;
            this._prep_for_draw();
            return this.count;
        },

        substract_one: function() {
            if(this.count > 0) this.count--;
            this._prep_for_draw();
            return this.count;
        },

        draw: function() {

            for( var i = 0; i < this.count_string.length; i++ ) {

                var draw_x = this.pos.x + i*8;
                var draw_y = this.pos.y;
                var source_x = parseInt(this.count_string[i])*8;
                var source_y = 0;
                var width = 8;
                var height = 10;
                this.tilesheet.draw(draw_x, draw_y, source_x, source_y, width, height);

            }

        },

        update: function() {}

    });

});