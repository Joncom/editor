ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'impact.debug.debug',
    'game.entities.toolbar',
    'game.entities.counter'
)
.defines(function(){

MyGame = ig.Game.extend({

    // Load a font
    font: new ig.Font( 'media/04b03.font.png' ),

    clearColor: null,

    init: function() {
        // Initialize your game here; bind keys etc.

        // Spawn the bar manager.
        this.spawnEntity(EntityToolbar, 50, 50);

        // Bind keys.
        ig.input.bind( ig.KEY.MOUSE1, 'mouse1' );
        ig.input.bind( ig.KEY.MOUSE2, 'mouse2' );

        // Set canvas to same size as browser viewport.
        ig.system.resize($(window).width(),$(window).height());

    },

    update: function() {
        // Update all entities and backgroundMaps
        this.parent();

        // Add your own, additional update code here
    },

    draw: function() {

        ig.system.context.clearRect( 0 ,0, ig.system.realWidth, ig.system.realHeight );

        // Draw all entities and backgroundMaps
        this.parent();

        // Add your own drawing code here
        var x = ig.system.width/2,
            y = ig.system.height/2;

        this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
    }
});

ig.main( '#canvas', MyGame, 60, 640, 480, 1 );

});
