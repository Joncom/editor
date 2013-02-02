ig.module('game.entities.toolbar')

.requires('impact.entity')

.defines(function() {

    EntityToolbar = ig.Entity.extend({

        size: { x: 76, y: 207 },

        background: new ig.Image('media/toolbar-bg.png'),
        icons:      new ig.Image('media/toolbar-icons.png'),

        icon_positions: [
            { x: 15, y: 13 }, { x: 39, y: 13 },
            { x: 15, y: 35 }, { x: 39, y: 35 },
            { x: 15, y: 57 }, { x: 39, y: 57 },
            { x: 15, y: 79 }, { x: 39, y: 79 },
            { x: 15, y: 114 }, { x: 39, y: 114 },
            { x: 15, y: 136 }, { x: 39, y: 136 }
        ],

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        draw: function() {

            this.background.draw(
                this.pos.x - this.offset.x - ig.game._rscreen.x,
                this.pos.y - this.offset.y - ig.game._rscreen.y
            );

            for( var tile = 0; tile < this.icon_positions.length; tile++ ) {
                this.icons.drawTile(
                    this.pos.x + this.icon_positions[tile].x - this.offset.x - ig.game._rscreen.x,
                    this.pos.y + this.icon_positions[tile].y - this.offset.y - ig.game._rscreen.y,
                    ( tile % 2 === 0 ? tile : tile + 1 ),
                    22 // size in px
                );
            }

            this.parent();
        },

        update: function() {}

    });

});