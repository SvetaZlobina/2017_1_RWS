import Manage  from './static/services/manage'
import {Router} from './static/services/router'

(function () {
    // let Application = window.Application;
    // let Mediator = window.Mediator;

    // let manage = new Manage();
    // window.manage = manage;
    //
    // manage.showInd();

    // Mediator.initialize();
    // let app = new Application;
    // app.start();


    let getLocation = function(href) {
        let l = document.createElement("a");
        l.href = href;
        return l;
    };

    Router.init();

    console.log(document.location.href);

    let str = getLocation(document.location.href).pathname;
    console.log(str);
    console.log(str.substring(0, str.length - 1));

    Router.nav(str);


})();