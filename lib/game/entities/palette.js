ig.module('game.entities.palette')

.requires('impact.entity')

.defines(function() {

    EntityPalette = ig.Entity.extend({

        tilesheet: new ig.Image('media/palette.png'),
        tilesize: 22,

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        draw: function() {
            var tile = 0;
            for( var y = 0; y < this.tilesheet.height / this.tilesize; y++ ) {
                for( var x = 0; x < this.tilesheet.width / this.tilesize; x++ ) {
                    var draw_x = this.pos.x + x * this.tilesize;
                    var draw_y = this.pos.y + y * this.tilesize;
                    this.tilesheet.drawTile(
                        draw_x,
                        draw_y,
                        tile,
                        this.tilesize
                    );
                    tile++;
                }
            }
        },

        update: function() {

        }

    });

});