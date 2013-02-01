ig.module('game.entities.toolbar')

.requires('impact.entity')

.defines(function() {

    EntityToolbar = ig.Entity.extend({

        size: { x: 76, y: 207 },

        background: new ig.Image('media/toolbar-bg.png'),

        init: function(x, y, settings) {

            this.parent(x, y, settings);

        },

        draw: function() {
            this.background.draw(
                this.pos.x - this.offset.x - ig.game._rscreen.x,
                this.pos.y - this.offset.y - ig.game._rscreen.y
            );
            this.parent();
        },

        update: function() {}

    });

});