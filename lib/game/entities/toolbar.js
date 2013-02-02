ig.module('game.entities.toolbar')

.requires('impact.entity')

.defines(function() {

    EntityToolbar = ig.Entity.extend({

        // Used for drag and drop.
        is_clicked: false,

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
                this.pos.x,
                this.pos.y
            );

            for( var i = 0; i < this.icon.positions.length; i++ ) {
                var sourceX = this.icon.size.x * ( i % 2 === 0 ? i : i + 1 );
                var sourceY = 0;
                this.icon.tilesheet.draw(
                    this.pos.x + this.icon.positions[i].x,
                    this.pos.y + this.icon.positions[i].y,
                    sourceX,
                    sourceY,
                    this.icon.size.x,
                    this.icon.size.y
                );
            }

            this.parent();
        },

        update: function() {

            if(ig.input.pressed('mouse1')) {

                // Check if mouse is over this entity.
                if( ig.input.mouse.x >= this.pos.x &&
                    ig.input.mouse.x < this.pos.x + this.size.x &&
                    ig.input.mouse.y >= this.pos.y &&
                    ig.input.mouse.y < this.pos.y + this.size.y ) {

                    this.is_clicked = true;

                }

            }

            if(this.is_clicked && ig.input.state('mouse1')) {
                this.pos.x = ig.input.mouse.x;
                this.pos.y = ig.input.mouse.y;
            }

        }

    });

});