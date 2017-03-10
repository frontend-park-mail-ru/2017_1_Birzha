class MenuPage extends BasePage {
    constructor(map, callBackIfRun) {
        super(map);
        this.callbackIfRun = callBackIfRun;

        this.children = [];

        this.buttonMenu = null;
        this.menuShapes = null;

        this.ticker = 0;
    }

    startPage() {
        let cenX = this.base.basicCenter.x, cenY = this.base.basicCenter.y;
        this.Width = this.base.basicCenter.x * 2;
        this.Height = this.base.basicCenter.y * 2;
        //console.log( cenX, Height);

        let children = [];

        this.menuGraph = new GraphTree(this.base);

        children.push(this.menuGraph.addNewVertexToCurrent({x: cenX + 100, y: cenY + 100}));
        children.push(this.menuGraph.addNewVertexByMove(50, 50));
        children.push(this.menuGraph.addNewVertexByNode({x: 50, y: 100}, this.menuGraph.getCurrentVertex));
        children.push(this.menuGraph.addNewVertexByMove(10, 30));
        children.push(this.menuGraph.addNewVertexByMove(100, -50));
        this.children = children;

        this.menuShapes = [
            {angle: 0, left: 0, right: this.base.getWidth / 2.5, top: 0, down: this.base.getHeight / 2.5},
            {angle: 100, left: 0, right: this.base.getWidth / 2.5, top: 0, down: this.base.getHeight / 2.5},
            {angle: 300, left: this.base.getWidth / 1.5, right:this.base.getWidth, top: 0, down: this.base.getHeight / 2.5},
            {angle: 40, left: 0, right: this.base.getWidth / 2.5, top: this.base.getHeight / 1.5, down: this.base.getHeight},
            {angle: 200, left: this.base.getWidth / 1.5, right: this.base.getWidth, top: this.base.getHeight / 1.5, down: this.base.getHeight}
        ];

        createjs.Ticker.addEventListener("tick", this.tick.bind(this));
        createjs.Ticker.setInterval(100);
        createjs.Ticker.setFPS(50);
    }

    stopPage() {
        createjs.Ticker.setPaused(true);
        createjs.Ticker.removeEventListener("tick", this.tick);

        console.log("!");

        this.menuGraph.destruct();
        this.base.stage.removeChild(this.buttonMenu);
        this.base.stage.clear();

        this.base.update();
    }


    tick(event) {
        // console.log(createjs.Ticker.getMeasuredFPS());

        const Width = this.Width;
        const Height = this.Height;
        //console.log(Width, Height);

        if(!createjs.Ticker.getPaused()) {
            this.ticker++;

            let menuShapes = this.menuShapes;

            this.children.forEach(function( item, index) {
                menuShapes[index].angle += randomInteger(-20, 20) * (Math.PI / 180); // randomInteger(0, 360) * (Math.PI / 180)

                item.data.x +=  3 * Math.cos(menuShapes[index].angle)  ;
                item.data.y +=  3 * Math.sin(menuShapes[index].angle)  ;

                if(item.data.x >= Width ){
                    item.data.x = Width  ;
                }
                if(item.data.x <= 0 ){
                    item.data.x = 0  ;
                }
                if(item.data.y >= Height ){
                    item.data.y = Height  ;
                }
                if( item.data.y < 0 ){
                    item.data.y = 0  ;
                }

            });

            this.menuGraph.showNodes();
            this.base.update();
        }
    }
}
