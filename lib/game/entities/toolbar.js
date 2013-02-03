ig.module('game.entities.toolbar')

.requires(
    'impact.entity',
    'game.entities.palette'
)

.defines(function() {

    EntityToolbar = ig.Entity.extend({

        // Used for drag and drop.
        is_clicked: false,
        click_offset: { x: 0, y: 0 },

        size: { x: 76, y: 207 },

        background: new ig.Image('media/toolbar-bg.png'),

        palette: {
            tilesheet: new ig.Image('media/palette.png'),
            entity: null,
            selected: 0 // tile selected
        },

        icon: {
            size: { x: 22, y: 20 },
            selected: 1,
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

                // Select icon tile.
                var sourceX = this.icon.size.x * ( 2 * i );
                // Use 'hover' icon if selected.
                sourceX += this.icon.size.x * ( i === this.icon.selected ? 1 : 0 );

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

                    this.is_clicked = true; // assume drag
                    this.click_offset = {
                        x: ig.input.mouse.x - this.pos.x,
                        y: ig.input.mouse.y - this.pos.y
                    };

                    // Check if mouse is over an icon.
                    for( var i = 0; i < this.icon.positions.length; i++ ) {
                        if( ig.input.mouse.x >= this.pos.x + this.icon.positions[i].x &&
                            ig.input.mouse.x < this.pos.x +  this.icon.positions[i].x + this.icon.size.x &&
                            ig.input.mouse.y >= this.pos.y + this.icon.positions[i].y &&
                            ig.input.mouse.y < this.pos.y + this.icon.positions[i].y + this.icon.size.y ) {

                            this.icon.selected = i;
                            this.is_clicked = false; // no drag

                        }
                    }

                }

            }

            if(ig.input.state('mouse1')) {
                if(this.is_clicked) {
                    this.pos.x = ig.input.mouse.x - this.click_offset.x;
                    this.pos.y = ig.input.mouse.y - this.click_offset.y;
                }
            } else {
                this.is_clicked = false;
            }

        }

    });

});