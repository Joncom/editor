ig.module('game.entities.toolbar')

.requires('impact.entity')

.defines(function() {

    EntityToolbar = ig.Entity.extend({

        size: { x: 76, y: 207 },

        background: new ig.Image('media/toolbar-bg.png'),

        icon: {
            size: { x: 22, y: 20 },
            tilesheet: new ig.Image('media/toolbar-icons.png'),
            positions: [
                { x: 15, y: 13 }, { x: 39, y: 13 },
                { x: 15, y: 35 }, { x: 39, y: 35 },
                { x: 15, y: 57 }, { x: 39, y: 57 },
                { x: 15, y: 79 }, { x: 39, y: 79 },
                { x: 15, y: 114 }, { x: 39, y: 114 },
                { x: 15, y: 136 }, { x: 39, y: 136 }
            ]
        },

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        draw: function() {

            this.background.draw(
                this.pos.x - this.offset.x - ig.game._rscreen.x,
                this.pos.y - this.offset.y - ig.game._rscreen.y
            );

            for( var i = 0; i < this.icon.positions.length; i++ ) {
                var sourceX = this.icon.size.x * ( i % 2 === 0 ? i : i + 1 );
                var sourceY = 0;
                this.icon.tilesheet.draw(
                    this.pos.x + this.icon.positions[i].x - this.offset.x - ig.game._rscreen.x,
                    this.pos.y + this.icon.positions[i].y - this.offset.y - ig.game._rscreen.y,
                    sourceX,
                    sourceY,
                    this.icon.size.x,
                    this.icon.size.y
                );
            }

            this.parent();
        },

        update: function() {}

    });

});