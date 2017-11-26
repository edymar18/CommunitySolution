webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Login = (function () {
    function Login(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Login.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Login');
    };
    Login.prototype.login = function () {
        //Api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/login/login.html"*/`\n\n\n<ion-content padding>\n<ion-list>\n\n  <ion-item>\n    <ion-label fixed>Correo Electrónico</ion-label>\n    <ion-input type="email" value=""></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Contraseña</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="primary" (click)="login()">Login</button>\n \n\n\n</ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Login);
    return Login;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Signup = (function () {
    function Signup(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signup');
    };
    Signup.prototype.signup = function () {
        //Api connections
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/signup/signup.html"*/`<ion-content padding>\n<ion-list>\n\n  <ion-item>\n    <ion-label fixed>Name</ion-label>\n    <ion-input type="text" value=""></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Email</ion-label>\n    <ion-input type="text" value=""></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Username</ion-label>\n    <ion-input type="text" value=""></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label fixed>Password</ion-label>\n    <ion-input type="password"></ion-input>\n  </ion-item>\n\n  <button ion-button block color="primary" (click)="signup()">Signup</button>\n\n</ion-list>\n</ion-content>`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Signup);
    return Signup;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Welcome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var Welcome = (function () {
    function Welcome(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Welcome.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Welcome');
    };
    Welcome.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Welcome.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* Signup */], {}, { animate: false });
    };
    Welcome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/welcome/welcome.html"*/`<ion-content padding id="welcome">\n\n\n  <ion-slides pager autoplay="5000" loop="true" speed="3000">\n\n  <ion-slide style="background-color: white">\n    <img src="assets/imgs/logo.png" class="logo"/>\n	<h1> Community Solution </h1>\n	 <div>Soluciones para tu comunidad</div>\n    <button ion-button block class="marginTop" (click)="signup()">Registrarse</button>\n	<button ion-button block color="corporate" (click)="login()">Ingresar</button>\n  </ion-slide>\n\n  <ion-slide style="background-color: white">\n    <h2>Pública tu idea para ayudar a la comunidad</h2>\n    <img src="../../assets/imgs/3.jpg">\n  </ion-slide>\n\n  <ion-slide style="background-color: white">\n  	<img src="../../assets/imgs/1.jpg">\n    <div>Soluciones para tu comunidad</div>\n    <button ion-button block class="marginTop" (click)="signup()">Registrarse</button>\n	<button ion-button block color="corporate" (click)="login()">Ingresar</button>\n  </ion-slide>\n\n</ion-slides>\n\n</ion-content>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], Welcome);
    return Welcome;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		283,
		2
	],
	"../pages/signup/signup.module": [
		284,
		1
	],
	"../pages/welcome/welcome.module": [
		285,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, app) {
        this.navCtrl = navCtrl;
        this.app = app;
    }
    AboutPage.prototype.logout = function () {
        //Api Token Logout 
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/about/about.html"*/`<ion-header>\n	\n  <ion-navbar>\n  	<button menuToggle start>\n          <ion-icon name="md-menu"></ion-icon>\n    </button>\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h2>Bienvenido a Community Solution</h2>\n  <button ion-button color="primary" (click)="logout()">Logout</button>\n</ion-content>`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/contact/contact.html"*/`<ion-header>\n  <ion-navbar>\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n    <ion-title>Contact</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-left></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_category_category__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import pages to allow links to the page

// Service import for items

var HomePage = (function () {
    function HomePage(navCtrl, itemApi, app) {
        this.navCtrl = navCtrl;
        this.itemApi = itemApi;
        this.app = app;
    }
    HomePage.prototype.logout = function () {
        //Api Token Logout 
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    // This is where the data loads from the service.
    // It happens when the view loads for the first time.
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.itemApi.getItems().then(function (data) { return _this.items = data; });
    };
    // This function is an event to listen to clicks on elements.
    // The SingleItem Page has been included to be passed in this function.
    HomePage.prototype.CategoryTapped = function ($event, category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_category__["a" /* CategoryPage */], {
            category: 'Infraestructura'
        });
    };
    HomePage.prototype.CategoryTapped_2 = function ($event, category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_category__["a" /* CategoryPage */], {
            category: 'Salud'
        });
    };
    HomePage.prototype.CategoryTapped_3 = function ($event, category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_category__["a" /* CategoryPage */], {
            category: 'Seguridad'
        });
    };
    HomePage.prototype.CategoryTapped_4 = function ($event, category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_category__["a" /* CategoryPage */], {
            category: 'CulturayDeporte'
        });
    };
    HomePage.prototype.CategoryTapped_5 = function ($event, category) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_category_category__["a" /* CategoryPage */], {
            category: 'Otros'
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/home/home.html"*/`<ion-header>\n	\n  <ion-navbar>\n  	<button menuToggle start>\n          <ion-icon name="md-menu"></ion-icon>\n    </button>\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n    <ion-title>Categorías</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- Beginning of the category card -->\n  <div class="padding_helper" color="white" (click)="CategoryTapped()">\n    <div class="category__image">\n        <div class="text-center image__padding">\n          <p class="section__headline">\n              Inversión en obras civiles\n          </p>\n          <p class="nomargin category__headline">\n              Infraestructura\n          </p>\n        </div>\n    </div>\n  </div>\n  <!-- End of the category card -->\n\n  <!-- Beginning of the category card -->\n  <div class="padding_helper" color="white" (click)="CategoryTapped_2()">\n    <div class="category__image2">\n        <div class="text-center image__padding">\n          <p class="section__headline">\n              Mejora de calidad de vida\n          </p>\n          <p class="nomargin category__headline">\n              Salud\n          </p>\n        </div>\n    </div>\n  </div>\n  <!-- End of the category card -->\n\n  <!-- Beginning of the category card -->\n  <div class="padding_helper" color="white" (click)="CategoryTapped_3()">\n    <div class="category__image3">\n        <div class="text-center image__padding">\n          <p class="section__headline">\n              Siempre preparados\n          </p>\n          <p class="nomargin category__headline">\n              Seguridad\n          </p>\n        </div>\n    </div>\n  </div>\n  <!-- End of the category card -->\n\n   <!-- Beginning of the category card -->\n  <div class="padding_helper" color="white" (click)="CategoryTapped_4()">\n    <div class="category__image4">\n        <div class="text-center image__padding">\n          <p class="section__headline">\n              Participa y aprende\n          </p>\n          <p class="nomargin category__headline">\n              Cultura y deporte\n          </p>\n        </div>\n    </div>\n  </div>\n  <!-- End of the category card -->\n\n  <!-- Beginning of the category card -->\n  <div class="padding_helper" color="white" (click)="CategoryTapped_5()">\n    <div class="category__image5">\n        <div class="text-center image__padding">\n          <p class="section__headline">\n              Plantea tus ideas\n          </p>\n          <p class="nomargin category__headline">\n              Otros Proyectos\n          </p>\n        </div>\n    </div>\n  </div>\n  <!-- End of the category card -->\n\n  <button ion-button color="primary" (click)="logout()">Logout</button>\n</ion-content>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/home/home.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_service__["a" /* ItemApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_service__["a" /* ItemApi */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* App */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_single_item_single_item__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import pages to allow links to the page

// Service import for items

// The component imports the specific parts from the html and scss file.
// The Http provider is included to make the API call to the service.
var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams, itemApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemApi = itemApi;
        this.loadingController = loadingController;
        //this.category = this.navParams.data;
        this.passedCategory = this.navParams.get('category');
    }
    // ------------------------------------------------------------------------------------------
    // FUNCTIONS
    // ------------------------------------------------------------------------------------------
    // This is where the data loads from the service.
    // It happens when the view loads for the first time.
    CategoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Getting items.."
        });
        loader.present();
        // Get the JSON data from our itemApi
        this.itemApi.getItems().then(function (data) {
            loader.dismiss();
            _this.items = data;
            _this.items = _this.items.filter(function (item) { return item.category == _this.passedCategory; });
        });
    };
    // This function is an event to listen to clicks on elements.
    // The SingleItem Page has been included to be passed in this function.
    CategoryPage.prototype.itemTapped = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_single_item_single_item__["a" /* SingleItem */], item);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/category/category.html"*/`<ion-header>\n  <ion-navbar>\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n    <ion-title>Elementos de Categoría</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- List Code -->\n  <ion-list>\n\n    <ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        <ion-avatar item-left>\n          <img src="{{ item.imgpath }}">\n        </ion-avatar>\n        <h2>{{ item.title }}</h2>\n        <p>{{ item.category }}</p>\n    </ion-item>\n\n  </ion-list>\n  <!-- End of List Code -->\n\n</ion-content>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/category/category.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_service__["a" /* ItemApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemApi = (function () {
    function ItemApi(http) {
        this.http = http;
    }
    ItemApi.prototype.getItems = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get('assets/data.json')
                .subscribe(function (res) { return resolve(res.json()); });
        });
    };
    ItemApi = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ItemApi);
    return ItemApi;
}());

//# sourceMappingURL=item-api.service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_about__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_single_item_single_item__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_category_category__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_item_api_service__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Http import

// Page imports










// Service imports



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_single_item_single_item__["a" /* SingleItem */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginModule', name: 'Login', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomeModule', name: 'Welcome', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* Welcome */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_7__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_single_item_single_item__["a" /* SingleItem */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__services_item_api_service__["a" /* ItemApi */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* Welcome */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/app/app.html"*/`<ion-menu [content]="content">\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Menu Lateral</ion-title>\n  </ion-toolbar>\n</ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="logout()">\n        <ion-icon name="home"></ion-icon>Home\n      </button>\n      <button ion-item (click)="openPage(friendsPage)">\n        <ion-icon name="contacts"></ion-icon>Friends\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        Events\n      </button>\n      <button ion-item (click)="logout()">\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n\n<ion-nav [root]="rootPage"  #content swipeBackEnabled="false"></ion-nav>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_single_item_single_item__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import pages to allow links to the page

// Service import for items

// The component imports the specific parts from the html and scss file.
// The Http provider is included to make the API call to the service.
var ListPage = (function () {
    // The navController and the ItemApi Service is injected into the constructor
    function ListPage(navCtrl, params, itemApi, loadingController) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.itemApi = itemApi;
        this.loadingController = loadingController;
    }
    // ------------------------------------------------------------------------------------------
    // FUNCTIONS
    // ------------------------------------------------------------------------------------------
    // This is where the data loads from the service.
    // It happens when the view loads for the first time.
    ListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var loader = this.loadingController.create({
            content: "Getting items.."
        });
        loader.present();
        this.itemApi.getItems().then(function (data) {
            loader.dismiss();
            _this.items = data;
        });
    };
    // The getItems function is called everytime the searchbar input changes
    ListPage.prototype.getItems = function (searchbar) {
        var _this = this;
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            // Show loader when search is cancelled
            var loader_1 = this.loadingController.create({
                content: "Getting items.."
            });
            loader_1.present();
            // fetch the data and dismiss loader
            this.itemApi.getItems().then(function (data) {
                loader_1.dismiss();
                _this.items = data;
            });
        }
        this.items = this.items.filter(function (v) {
            if (v.title && q) {
                if (v.title.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    // End of Searchbar Code
    // This function is an event to listen to clicks on elements.
    // The SingleItem Page has been included to be passed in this function.
    ListPage.prototype.itemTapped = function ($event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_single_item_single_item__["a" /* SingleItem */], item);
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/list/list.html"*/`<ion-header>\n  <ion-navbar>\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n    <ion-title>Todos los Proyectos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Toolbar to wrap search bar\n  <ion-toolbar>\n-->\n    <!-- Searchbar Code -->\n    <ion-searchbar\n      placeholder="Search"\n      (ionInput)="getItems($event)">\n    </ion-searchbar>\n    <!-- End of Searchbar Code -->\n  <!--\n  </ion-toolbar>\n End of Toolbar Code -->\n\n\n\n  <!-- List Code -->\n  <ion-list>\n\n    <ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n        <ion-avatar item-left>\n          <img src="{{ item.imgpath }}">\n        </ion-avatar>\n        <h2>{{ item.title }}</h2>\n        <p>{{ item.category }}</p>\n    </ion-item>\n\n  </ion-list>\n  <!-- End of List Code -->\n\n\n\n\n</ion-content>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/list/list.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]]
        })
        // The generic export class is created with the page name.
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__services_service__["a" /* ItemApi */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_api_service__ = __webpack_require__(162);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__item_api_service__["a"]; });

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__list_list__["a" /* ListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/tabs/tabs.html"*/`<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="List" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Perfil" tabIcon="contact"></ion-tab>\n</ion-tabs>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleItem; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_service__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Service import for items

var SingleItem = (function () {
    function SingleItem(navCtrl, navParams, itemApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemApi = itemApi;
        this.item = this.navParams.data;
        console.log(this.item);
    }
    SingleItem = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-single-item',template:/*ion-inline-start:"/home/alexis/Documentos/CommunitySolution/src/pages/single-item/single-item.html"*/`<ion-header>\n  <ion-navbar>\n    <img ion-right src="assets/imgs/logo.png" class="navbarLogo" />\n    <ion-title>Proyecto</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <!-- Header content with background -->\n    <div>\n      <div>\n        <img src="{{ item.imgpath }}">\n      </div>\n      <br>\n      <br>\n      <!-- Item title -->\n      <h3 class="headline">\n        {{ item.title }}\n      </h3>\n      <!-- End of Item title -->\n      <br>\n      <!-- Item Category -->\n      <a class="btn__line__square__white">\n        {{ item.category }}\n      </a>\n      <!-- End of Item Category -->\n      <br>\n      <br>\n\n    </div>\n    <!-- End of Header Content -->\n\n    <!-- Content Description -->\n    <div class="item__content">\n      <p padding>\n        {{ item.description }}\n      </p>\n    </div>\n    <!-- End of Content Description -->\n\n</ion-content>\n`/*ion-inline-end:"/home/alexis/Documentos/CommunitySolution/src/pages/single-item/single-item.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_service__["a" /* ItemApi */]])
    ], SingleItem);
    return SingleItem;
}());

//# sourceMappingURL=single-item.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map