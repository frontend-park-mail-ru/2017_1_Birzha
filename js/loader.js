
class Loader {
    constructor(srcManifest, callback) {
        this.queue = new createjs.LoadQueue(true);
        this.queue.loadManifest(srcManifest);
        this.queue.on("complete", this.handleLoadAllFile.bind(this));

        this.fromCallback = callback;
    }

    handleLoadAllFile(event) {
        // Example work with queue
        /* queue.getResult(Name) */
        // TODO check errors

        this.fromCallback(this.queue);
    }
}