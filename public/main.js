var jsApp = {
    onload: function() {
        if (!me.video.init('jsapp', 320, 240, true, 2.0)) {
            alert("html 5 canvas is not supported by this browser.");
            return;
        }
        me.loader.onload = this.loaded.bind(this);
        me.loader.preload(resources);
        me.state.change(me.state.LOADING);
        me.gamestat.add("coins", 0);
        me.gamestat.add("totalCoins", 6);
    },
    loaded: function () {
        me.entityPool.add("player", PlayerEntity);
        me.entityPool.add("coin", CoinEntity)
        me.entityPool.add("EnemyEntity", EnemyEntity)
        me.entityPool.add("EnemyEntity2", EnemyEntity2)
        me.entityPool.add("boots", BootsEntity)
        me.state.set(me.state.PLAY, new PlayScreen());
        me.state.set(me.state.MENU, new TitleScreen());
        me.state.transition("fade", "#DC143C", 250);
        me.state.change(me.state.MENU);
    }
};
window.onReady(function() {
    jsApp.onload();
})