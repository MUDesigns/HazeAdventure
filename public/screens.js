var PlayScreen = me.ScreenObject.extend({
    onDestroyEvent: function() {
        me.gamestat.reset("coins");
    },
    onResetEvent: function() {
        me.levelDirector.loadLevel("level1");
        me.input.bindKey(me.input.KEY.D, "right");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.SPACE, "jump");
        me.input.bindKey(me.input.KEY.R, "restart")
        document.getElementById('game-state').innerHTML = "Collect all of the coins!";
        document.getElementById('instructions').innerHTML = "'A' to move left, 'D' to move right, Space to jump, 'R' to restart.";
    }
});

var TitleScreen = me.ScreenObject.extend({
    init: function() {
        this.parent(true);
        me.input.bindKey(me.input.KEY.SPACE, "jump", true);
    },
    onResetEvent: function() {
        if (this.title == null) {
            this.title = me.loader.getImage("titleScreen");
            document.getElementById('game-state').innerHTML = "";
            document.getElementById('instructions').innerHTML = "";
        }
    },
    update: function() {
        if (me.input.isKeyPressed('jump')) {
            me.state.change(me.state.PLAY);
        }
        return true;
    },
    draw: function(context){
        context.drawImage(this.title, 50, 50);
    }
});