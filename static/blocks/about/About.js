(function () {
    'use strict';

    class About {
        constructor(names) {
            this.about = template();
        }

        getElement(){
            return this.about;
        }
    }

    window.About = About;
})();


