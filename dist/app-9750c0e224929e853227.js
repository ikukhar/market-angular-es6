webpackJsonp([0],{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * angular-spinner version 0.8.1
 * License: MIT.
 * Copyright (C) 2013, 2014, 2015, 2016, Uri Shaked and contributors.
 */

'format amd';

(function (root) {
	'use strict';

	function factory(angular, Spinner) {

		return angular
			.module('angularSpinner', [])

			.constant('SpinJSSpinner', Spinner)

			.provider('usSpinnerConfig', function () {
				var _config = {}, _themes = {};

				return {
					setDefaults: function (config) {
						_config = config || _config;
					},
					setTheme: function(name, config) {
						_themes[name] = config;
					},
					$get: function () {
						return {
							config: _config,
							themes: _themes
						};
					}
				};
			})

			.factory('usSpinnerService', ['$rootScope', function ($rootScope) {
				var config = {};

				config.spin = function (key) {
					$rootScope.$broadcast('us-spinner:spin', key);
				};

				config.stop = function (key) {
					$rootScope.$broadcast('us-spinner:stop', key);
				};

				return config;
			}])

			.directive('usSpinner', ['SpinJSSpinner', 'usSpinnerConfig', function (SpinJSSpinner, usSpinnerConfig) {
				return {
					scope: true,
					link: function (scope, element, attr) {
						scope.spinner = null;

						scope.key = angular.isDefined(attr.spinnerKey) ? attr.spinnerKey : false;

						scope.startActive = angular.isDefined(attr.spinnerStartActive) ?
							scope.$eval(attr.spinnerStartActive) : scope.key ?
							false : true;

						function stopSpinner() {
							if (scope.spinner) {
								scope.spinner.stop();
							}
						}

						scope.spin = function () {
							if (scope.spinner) {
								scope.spinner.spin(element[0]);
							}
						};

						scope.stop = function () {
							scope.startActive = false;
							stopSpinner();
						};

						scope.$watch(attr.usSpinner, function (options) {
							stopSpinner();

							// order of precedence: element options, theme, defaults.
							options = angular.extend(
								{},
								usSpinnerConfig.config,
								usSpinnerConfig.themes[attr.spinnerTheme],
								options);

							scope.spinner = new SpinJSSpinner(options);
							if ((!scope.key || scope.startActive) && !attr.spinnerOn) {
								scope.spinner.spin(element[0]);
							}
						}, true);

						if (attr.spinnerOn) {
							scope.$watch(attr.spinnerOn, function (spin) {
								if (spin) {
									scope.spin();
								} else {
									scope.stop();
								}
							});
						}

						scope.$on('us-spinner:spin', function (event, key) {
							if (key === scope.key) {
								scope.spin();
							}
						});

						scope.$on('us-spinner:stop', function (event, key) {
							if (key === scope.key) {
								scope.stop();
							}
						});

						scope.$on('$destroy', function () {
							scope.stop();
							scope.spinner = null;
						});
					}
				};
			}]);
	}

    if ((typeof module === 'object') && module.exports) {
		/* CommonJS module */
		module.exports = factory(__webpack_require__(6), __webpack_require__(39));
	} else if (true) {
		/* AMD module */
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6), __webpack_require__(39)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		/* Browser global */
		factory(root.angular, root.Spinner);
	}
}(this));


/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

/**
 * Created by alex_crack on 20.11.15.
 */
__webpack_require__(116);
module.exports = 'ui-notification';

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(129);


/***/ },

/***/ 107:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(6);

var _angular2 = _interopRequireDefault(_angular);

var _products = __webpack_require__(229);

var _products2 = _interopRequireDefault(_products);

var _navbar = __webpack_require__(224);

var _navbar2 = _interopRequireDefault(_navbar);

var _productList = __webpack_require__(225);

var _productList2 = _interopRequireDefault(_productList);

var _product = __webpack_require__(227);

var _product2 = _interopRequireDefault(_product);

var _categories = __webpack_require__(216);

var _categories2 = _interopRequireDefault(_categories);

var _cart = __webpack_require__(214);

var _cart2 = _interopRequireDefault(_cart);

var _cartButton = __webpack_require__(212);

var _cartButton2 = _interopRequireDefault(_cartButton);

var _checkoutButton = __webpack_require__(218);

var _checkoutButton2 = _interopRequireDefault(_checkoutButton);

var _checkout = __webpack_require__(220);

var _checkout2 = _interopRequireDefault(_checkout);

var _loginButton = __webpack_require__(222);

var _loginButton2 = _interopRequireDefault(_loginButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentsModule = _angular2.default.module('app.components', []).component('products', _products2.default).component('mNavbar', _navbar2.default).component('productList', _productList2.default).component('product', _product2.default).component('categories', _categories2.default).component('cart', _cart2.default).component('cartButton', _cartButton2.default).component('checkoutButton', _checkoutButton2.default).component('checkout', _checkout2.default).component('loginButton', _loginButton2.default).name;

exports.default = ComponentsModule;

/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = __webpack_require__(6);

var _angular2 = _interopRequireDefault(_angular);

var _products = __webpack_require__(236);

var _products2 = _interopRequireDefault(_products);

var _categories = __webpack_require__(234);

var _categories2 = _interopRequireDefault(_categories);

var _cart = __webpack_require__(233);

var _cart2 = _interopRequireDefault(_cart);

var _auth = __webpack_require__(232);

var _auth2 = _interopRequireDefault(_auth);

var _access = __webpack_require__(231);

var _access2 = _interopRequireDefault(_access);

var _event = __webpack_require__(235);

var _event2 = _interopRequireDefault(_event);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ServicesModule = _angular2.default.module('app.services', []).service('ProductsService', _products2.default).service('CategoriesService', _categories2.default).service('CartService', _cart2.default).service('AuthService', _auth2.default).service('AccessService', _access2.default).service('EventService', _event2.default).name;

exports.default = ServicesModule;

/***/ },

/***/ 111:
/***/ function(module, exports) {

"use strict";
'use strict';

routesConfig.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routesConfig;

/** @ngInject */

function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/products');

  /** @ngInject */
  $stateProvider.state('products', {
    url: '/products',
    component: 'products',
    resolve: {
      products: ["ProductsService", function products(ProductsService) {
        'ngInject';

        return ProductsService.getProducts();
      }]
    }
  }).state('cart', {
    url: '/cart',
    component: 'cart',
    resolve: {
      products: ["CartService", function products(CartService) {
        'ngInject';

        return CartService.getProducts();
      }]
    }
  }).state('checkout', {
    url: '/checkout',
    component: 'checkout',
    onEnter: ["AccessService", function onEnter(AccessService) {
      'ngInject';

      return AccessService.isAuthenticated();
    }]
  });
}

/***/ },

/***/ 112:
/***/ function(module, exports) {

"use strict";
'use strict';

run.$inject = ["$transitions", "AccessService", "$log", "EventService", "usSpinnerService"];
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = run;
/** @ngInject */

function run($transitions, AccessService, $log, EventService, usSpinnerService) {
  EventService.on('logout', function () {
    $transitions._router.stateService.reload();
  });

  $transitions.onStart({}, function () {
    usSpinnerService.spin('mainSpin');
  });

  $transitions.onFinish({}, function () {
    usSpinnerService.stop('mainSpin');
  });

  $transitions.onError({}, function (trans) {
    trans.promise.catch(function (error) {
      switch (error) {
        case AccessService.UNAUTHORIZED:
          break;

        case AccessService.FORBIDDEN:
          break;

        default:
          $log.warn("$stateChangeError event catched");
          break;
      }
      return trans.router.stateService.go('products');
    });
  });
}

/***/ },

/***/ 113:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * ngDialog - easy modals and popup windows
 * http://github.com/likeastore/ngDialog
 * (c) 2013-2015 MIT License, https://likeastore.com
 */

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        if (typeof angular === 'undefined') {
            factory(__webpack_require__(6));
        } else {
            factory(angular);
        }
        module.exports = 'ngDialog';
    } else if (true) {
        // AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        // Global Variables
        factory(root.angular);
    }
}(this, function (angular) {
    'use strict';

    var m = angular.module('ngDialog', []);

    var $el = angular.element;
    var isDef = angular.isDefined;
    var style = (document.body || document.documentElement).style;
    var animationEndSupport = isDef(style.animation) || isDef(style.WebkitAnimation) || isDef(style.MozAnimation) || isDef(style.MsAnimation) || isDef(style.OAnimation);
    var animationEndEvent = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend';
    var focusableElementSelector = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
    var disabledAnimationClass = 'ngdialog-disabled-animation';
    var forceElementsReload = { html: false, body: false };
    var scopes = {};
    var openIdStack = [];
    var keydownIsBound = false;
    var openOnePerName = false;


    m.provider('ngDialog', function () {
        var defaults = this.defaults = {
            className: 'ngdialog-theme-default',
            appendClassName: '',
            disableAnimation: false,
            plain: false,
            showClose: true,
            closeByDocument: true,
            closeByEscape: true,
            closeByNavigation: false,
            appendTo: false,
            preCloseCallback: false,
            overlay: true,
            cache: true,
            trapFocus: true,
            preserveFocus: true,
            ariaAuto: true,
            ariaRole: null,
            ariaLabelledById: null,
            ariaLabelledBySelector: null,
            ariaDescribedById: null,
            ariaDescribedBySelector: null,
            bodyClassName: 'ngdialog-open',
            width: null,
            height: null
        };

        this.setForceHtmlReload = function (_useIt) {
            forceElementsReload.html = _useIt || false;
        };

        this.setForceBodyReload = function (_useIt) {
            forceElementsReload.body = _useIt || false;
        };

        this.setDefaults = function (newDefaults) {
            angular.extend(defaults, newDefaults);
        };

        this.setOpenOnePerName = function (isOpenOne) {
            openOnePerName = isOpenOne || false;
        };

        var globalID = 0, dialogsCount = 0, closeByDocumentHandler, defers = {};

        this.$get = ['$document', '$templateCache', '$compile', '$q', '$http', '$rootScope', '$timeout', '$window', '$controller', '$injector',
            function ($document, $templateCache, $compile, $q, $http, $rootScope, $timeout, $window, $controller, $injector) {
                var $elements = [];

                var privateMethods = {
                    onDocumentKeydown: function (event) {
                        if (event.keyCode === 27) {
                            publicMethods.close('$escape');
                        }
                    },

                    activate: function($dialog) {
                        var options = $dialog.data('$ngDialogOptions');

                        if (options.trapFocus) {
                            $dialog.on('keydown', privateMethods.onTrapFocusKeydown);

                            // Catch rogue changes (eg. after unfocusing everything by clicking a non-focusable element)
                            $elements.body.on('keydown', privateMethods.onTrapFocusKeydown);
                        }
                    },

                    deactivate: function ($dialog) {
                        $dialog.off('keydown', privateMethods.onTrapFocusKeydown);
                        $elements.body.off('keydown', privateMethods.onTrapFocusKeydown);
                    },

                    deactivateAll: function (els) {
                        angular.forEach(els,function(el) {
                            var $dialog = angular.element(el);
                            privateMethods.deactivate($dialog);
                        });
                    },

                    setBodyPadding: function (width) {
                        var originalBodyPadding = parseInt(($elements.body.css('padding-right') || 0), 10);
                        $elements.body.css('padding-right', (originalBodyPadding + width) + 'px');
                        $elements.body.data('ng-dialog-original-padding', originalBodyPadding);
                        $rootScope.$broadcast('ngDialog.setPadding', width);
                    },

                    resetBodyPadding: function () {
                        var originalBodyPadding = $elements.body.data('ng-dialog-original-padding');
                        if (originalBodyPadding) {
                            $elements.body.css('padding-right', originalBodyPadding + 'px');
                        } else {
                            $elements.body.css('padding-right', '');
                        }
                        $rootScope.$broadcast('ngDialog.setPadding', 0);
                    },

                    performCloseDialog: function ($dialog, value) {
                        var options = $dialog.data('$ngDialogOptions');
                        var id = $dialog.attr('id');
                        var scope = scopes[id];

                        if (!scope) {
                            // Already closed
                            return;
                        }

                        if (typeof $window.Hammer !== 'undefined') {
                            var hammerTime = scope.hammerTime;
                            hammerTime.off('tap', closeByDocumentHandler);
                            hammerTime.destroy && hammerTime.destroy();
                            delete scope.hammerTime;
                        } else {
                            $dialog.unbind('click');
                        }

                        if (dialogsCount === 1) {
                            $elements.body.unbind('keydown', privateMethods.onDocumentKeydown);
                        }

                        if (!$dialog.hasClass('ngdialog-closing')){
                            dialogsCount -= 1;
                        }

                        var previousFocus = $dialog.data('$ngDialogPreviousFocus');
                        if (previousFocus && previousFocus.focus) {
                            previousFocus.focus();
                        }

                        $rootScope.$broadcast('ngDialog.closing', $dialog, value);
                        dialogsCount = dialogsCount < 0 ? 0 : dialogsCount;
                        if (animationEndSupport && !options.disableAnimation) {
                            scope.$destroy();
                            $dialog.unbind(animationEndEvent).bind(animationEndEvent, function () {
                                privateMethods.closeDialogElement($dialog, value);
                            }).addClass('ngdialog-closing');
                        } else {
                            scope.$destroy();
                            privateMethods.closeDialogElement($dialog, value);
                        }
                        if (defers[id]) {
                            defers[id].resolve({
                                id: id,
                                value: value,
                                $dialog: $dialog,
                                remainingDialogs: dialogsCount
                            });
                            delete defers[id];
                        }
                        if (scopes[id]) {
                            delete scopes[id];
                        }
                        openIdStack.splice(openIdStack.indexOf(id), 1);
                        if (!openIdStack.length) {
                            $elements.body.unbind('keydown', privateMethods.onDocumentKeydown);
                            keydownIsBound = false;
                        }
                    },

                    closeDialogElement: function($dialog, value) {
                        var options = $dialog.data('$ngDialogOptions');
                        $dialog.remove();
                        if (dialogsCount === 0) {
                            $elements.html.removeClass(options.bodyClassName);
                            $elements.body.removeClass(options.bodyClassName);
                            privateMethods.resetBodyPadding();
                        }
                        $rootScope.$broadcast('ngDialog.closed', $dialog, value);
                    },

                    closeDialog: function ($dialog, value) {
                        var preCloseCallback = $dialog.data('$ngDialogPreCloseCallback');

                        if (preCloseCallback && angular.isFunction(preCloseCallback)) {

                            var preCloseCallbackResult = preCloseCallback.call($dialog, value);

                            if (angular.isObject(preCloseCallbackResult)) {
                                if (preCloseCallbackResult.closePromise) {
                                    preCloseCallbackResult.closePromise.then(function () {
                                        privateMethods.performCloseDialog($dialog, value);
                                    }, function () {
                                        return false;
                                    });
                                } else {
                                    preCloseCallbackResult.then(function () {
                                        privateMethods.performCloseDialog($dialog, value);
                                    }, function () {
                                        return false;
                                    });
                                }
                            } else if (preCloseCallbackResult !== false) {
                                privateMethods.performCloseDialog($dialog, value);
                            } else {
                                return false;
                            }
                        } else {
                            privateMethods.performCloseDialog($dialog, value);
                        }
                    },

                    onTrapFocusKeydown: function(ev) {
                        var el = angular.element(ev.currentTarget);
                        var $dialog;

                        if (el.hasClass('ngdialog')) {
                            $dialog = el;
                        } else {
                            $dialog = privateMethods.getActiveDialog();

                            if ($dialog === null) {
                                return;
                            }
                        }

                        var isTab = (ev.keyCode === 9);
                        var backward = (ev.shiftKey === true);

                        if (isTab) {
                            privateMethods.handleTab($dialog, ev, backward);
                        }
                    },

                    handleTab: function($dialog, ev, backward) {
                        var focusableElements = privateMethods.getFocusableElements($dialog);

                        if (focusableElements.length === 0) {
                            if (document.activeElement && document.activeElement.blur) {
                                document.activeElement.blur();
                            }
                            return;
                        }

                        var currentFocus = document.activeElement;
                        var focusIndex = Array.prototype.indexOf.call(focusableElements, currentFocus);

                        var isFocusIndexUnknown = (focusIndex === -1);
                        var isFirstElementFocused = (focusIndex === 0);
                        var isLastElementFocused = (focusIndex === focusableElements.length - 1);

                        var cancelEvent = false;

                        if (backward) {
                            if (isFocusIndexUnknown || isFirstElementFocused) {
                                focusableElements[focusableElements.length - 1].focus();
                                cancelEvent = true;
                            }
                        } else {
                            if (isFocusIndexUnknown || isLastElementFocused) {
                                focusableElements[0].focus();
                                cancelEvent = true;
                            }
                        }

                        if (cancelEvent) {
                            ev.preventDefault();
                            ev.stopPropagation();
                        }
                    },

                    autoFocus: function($dialog) {
                        var dialogEl = $dialog[0];

                        // Browser's (Chrome 40, Forefix 37, IE 11) don't appear to honor autofocus on the dialog, but we should
                        var autoFocusEl = dialogEl.querySelector('*[autofocus]');
                        if (autoFocusEl !== null) {
                            autoFocusEl.focus();

                            if (document.activeElement === autoFocusEl) {
                                return;
                            }

                            // Autofocus element might was display: none, so let's continue
                        }

                        var focusableElements = privateMethods.getFocusableElements($dialog);

                        if (focusableElements.length > 0) {
                            focusableElements[0].focus();
                            return;
                        }

                        // We need to focus something for the screen readers to notice the dialog
                        var contentElements = privateMethods.filterVisibleElements(dialogEl.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span'));

                        if (contentElements.length > 0) {
                            var contentElement = contentElements[0];
                            $el(contentElement).attr('tabindex', '-1').css('outline', '0');
                            contentElement.focus();
                        }
                    },

                    getFocusableElements: function ($dialog) {
                        var dialogEl = $dialog[0];

                        var rawElements = dialogEl.querySelectorAll(focusableElementSelector);

                        // Ignore untabbable elements, ie. those with tabindex = -1
                        var tabbableElements = privateMethods.filterTabbableElements(rawElements);

                        return privateMethods.filterVisibleElements(tabbableElements);
                    },

                    filterTabbableElements: function (els) {
                        var tabbableFocusableElements = [];

                        for (var i = 0; i < els.length; i++) {
                            var el = els[i];

                            if ($el(el).attr('tabindex') !== '-1') {
                                tabbableFocusableElements.push(el);
                            }
                        }

                        return tabbableFocusableElements;
                    },

                    filterVisibleElements: function (els) {
                        var visibleFocusableElements = [];

                        for (var i = 0; i < els.length; i++) {
                            var el = els[i];

                            if (el.offsetWidth > 0 || el.offsetHeight > 0) {
                                visibleFocusableElements.push(el);
                            }
                        }

                        return visibleFocusableElements;
                    },

                    getActiveDialog: function () {
                        var dialogs = document.querySelectorAll('.ngdialog');

                        if (dialogs.length === 0) {
                            return null;
                        }

                        // TODO: This might be incorrect if there are a mix of open dialogs with different 'appendTo' values
                        return $el(dialogs[dialogs.length - 1]);
                    },

                    applyAriaAttributes: function ($dialog, options) {
                        if (options.ariaAuto) {
                            if (!options.ariaRole) {
                                var detectedRole = (privateMethods.getFocusableElements($dialog).length > 0) ?
                                    'dialog' :
                                    'alertdialog';

                                options.ariaRole = detectedRole;
                            }

                            if (!options.ariaLabelledBySelector) {
                                options.ariaLabelledBySelector = 'h1,h2,h3,h4,h5,h6';
                            }

                            if (!options.ariaDescribedBySelector) {
                                options.ariaDescribedBySelector = 'article,section,p';
                            }
                        }

                        if (options.ariaRole) {
                            $dialog.attr('role', options.ariaRole);
                        }

                        privateMethods.applyAriaAttribute(
                            $dialog, 'aria-labelledby', options.ariaLabelledById, options.ariaLabelledBySelector);

                        privateMethods.applyAriaAttribute(
                            $dialog, 'aria-describedby', options.ariaDescribedById, options.ariaDescribedBySelector);
                    },

                    applyAriaAttribute: function($dialog, attr, id, selector) {
                        if (id) {
                            $dialog.attr(attr, id);
                        }

                        if (selector) {
                            var dialogId = $dialog.attr('id');

                            var firstMatch = $dialog[0].querySelector(selector);

                            if (!firstMatch) {
                                return;
                            }

                            var generatedId = dialogId + '-' + attr;

                            $el(firstMatch).attr('id', generatedId);

                            $dialog.attr(attr, generatedId);

                            return generatedId;
                        }
                    },

                    detectUIRouter: function() {
                        //Detect if ui-router module is installed if not return false
                        try {
                            angular.module('ui.router');
                            return true;
                        } catch(err) {
                            return false;
                        }
                    },

                    getRouterLocationEventName: function() {
                        if(privateMethods.detectUIRouter()) {
                            return '$stateChangeStart';
                        }
                        return '$locationChangeStart';
                    }
                };

                var publicMethods = {
                    __PRIVATE__: privateMethods,

                    /*
                     * @param {Object} options:
                     * - template {String} - id of ng-template, url for partial, plain string (if enabled)
                     * - plain {Boolean} - enable plain string templates, default false
                     * - scope {Object}
                     * - controller {String}
                     * - controllerAs {String}
                     * - className {String} - dialog theme class
                     * - appendClassName {String} - dialog theme class to be appended to defaults
                     * - disableAnimation {Boolean} - set to true to disable animation
                     * - showClose {Boolean} - show close button, default true
                     * - closeByEscape {Boolean} - default true
                     * - closeByDocument {Boolean} - default true
                     * - preCloseCallback {String|Function} - user supplied function name/function called before closing dialog (if set)
                     * - bodyClassName {String} - class added to body at open dialog
                     * @return {Object} dialog
                     */
                    open: function (opts) {
                        var dialogID = null;
                        opts = opts || {};
                        if (openOnePerName && opts.name) {
                            dialogID = opts.name.toLowerCase().replace(/\s/g, '-') + '-dialog';
                            if (this.isOpen(dialogID)) {
                                return;
                            }
                        }
                        var options = angular.copy(defaults);
                        var localID = ++globalID;
                        dialogID = dialogID || 'ngdialog' + localID;
                        openIdStack.push(dialogID);

                        // Merge opts.data with predefined via setDefaults
                        if (typeof options.data !== 'undefined') {
                            if (typeof opts.data === 'undefined') {
                                opts.data = {};
                            }
                            opts.data = angular.merge(angular.copy(options.data), opts.data);
                        }

                        angular.extend(options, opts);

                        var defer;
                        defers[dialogID] = defer = $q.defer();

                        var scope;
                        scopes[dialogID] = scope = angular.isObject(options.scope) ? options.scope.$new() : $rootScope.$new();

                        var $dialog, $dialogParent, $dialogContent;

                        var resolve = angular.extend({}, options.resolve);

                        angular.forEach(resolve, function (value, key) {
                            resolve[key] = angular.isString(value) ? $injector.get(value) : $injector.invoke(value, null, null, key);
                        });

                        $q.all({
                            template: loadTemplate(options.template || options.templateUrl),
                            locals: $q.all(resolve)
                        }).then(function (setup) {
                            var template = setup.template,
                                locals = setup.locals;

                            if (options.showClose) {
                                template += '<div class="ngdialog-close"></div>';
                            }

                            var hasOverlayClass = options.overlay ? '' : ' ngdialog-no-overlay';
                            $dialog = $el('<div id="' + dialogID + '" class="ngdialog' + hasOverlayClass + '"></div>');
                            $dialog.html((options.overlay ?
                                '<div class="ngdialog-overlay"></div><div class="ngdialog-content" role="document">' + template + '</div>' :
                                '<div class="ngdialog-content" role="document">' + template + '</div>'));

                            $dialog.data('$ngDialogOptions', options);

                            scope.ngDialogId = dialogID;

                            if (options.data && angular.isString(options.data)) {
                                var firstLetter = options.data.replace(/^\s*/, '')[0];
                                scope.ngDialogData = (firstLetter === '{' || firstLetter === '[') ? angular.fromJson(options.data) : new String(options.data);
                                scope.ngDialogData.ngDialogId = dialogID;
                            } else if (options.data && angular.isObject(options.data)) {
                                scope.ngDialogData = options.data;
                                scope.ngDialogData.ngDialogId = dialogID;
                            }

                            if (options.className) {
                                $dialog.addClass(options.className);
                            }

                            if (options.appendClassName) {
                                $dialog.addClass(options.appendClassName);
                            }

                            if (options.width) {
                                $dialogContent = $dialog[0].querySelector('.ngdialog-content');
                                if (angular.isString(options.width)) {
                                    $dialogContent.style.width = options.width;
                                } else {
                                    $dialogContent.style.width = options.width + 'px';
                                }
                            }

                            if (options.height) {
                                $dialogContent = $dialog[0].querySelector('.ngdialog-content');
                                if (angular.isString(options.height)) {
                                    $dialogContent.style.height = options.height;
                                } else {
                                    $dialogContent.style.height = options.height + 'px';
                                }
                            }

                            if (options.disableAnimation) {
                                $dialog.addClass(disabledAnimationClass);
                            }

                            if (options.appendTo && angular.isString(options.appendTo)) {
                                $dialogParent = angular.element(document.querySelector(options.appendTo));
                            } else {
                                $dialogParent = $elements.body;
                            }

                            privateMethods.applyAriaAttributes($dialog, options);

                            if (options.preCloseCallback) {
                                var preCloseCallback;

                                if (angular.isFunction(options.preCloseCallback)) {
                                    preCloseCallback = options.preCloseCallback;
                                } else if (angular.isString(options.preCloseCallback)) {
                                    if (scope) {
                                        if (angular.isFunction(scope[options.preCloseCallback])) {
                                            preCloseCallback = scope[options.preCloseCallback];
                                        } else if (scope.$parent && angular.isFunction(scope.$parent[options.preCloseCallback])) {
                                            preCloseCallback = scope.$parent[options.preCloseCallback];
                                        } else if ($rootScope && angular.isFunction($rootScope[options.preCloseCallback])) {
                                            preCloseCallback = $rootScope[options.preCloseCallback];
                                        }
                                    }
                                }

                                if (preCloseCallback) {
                                    $dialog.data('$ngDialogPreCloseCallback', preCloseCallback);
                                }
                            }

                            scope.closeThisDialog = function (value) {
                                privateMethods.closeDialog($dialog, value);
                            };

                            if (options.controller && (angular.isString(options.controller) || angular.isArray(options.controller) || angular.isFunction(options.controller))) {

                                var label;

                                if (options.controllerAs && angular.isString(options.controllerAs)) {
                                    label = options.controllerAs;
                                }

                                var controllerInstance = $controller(options.controller, angular.extend(
                                    locals,
                                    {
                                        $scope: scope,
                                        $element: $dialog
                                    }),
                                    true,
                                    label
                                );

                                if(options.bindToController) {
                                    angular.extend(controllerInstance.instance, {ngDialogId: scope.ngDialogId, ngDialogData: scope.ngDialogData, closeThisDialog: scope.closeThisDialog, confirm: scope.confirm});
                                }

                                if(typeof controllerInstance === 'function'){
                                    $dialog.data('$ngDialogControllerController', controllerInstance());
                                } else {
                                    $dialog.data('$ngDialogControllerController', controllerInstance);
                                }
                            }

                            $timeout(function () {
                                var $activeDialogs = document.querySelectorAll('.ngdialog');
                                privateMethods.deactivateAll($activeDialogs);

                                $compile($dialog)(scope);
                                var widthDiffs = $window.innerWidth - $elements.body.prop('clientWidth');
                                $elements.html.addClass(options.bodyClassName);
                                $elements.body.addClass(options.bodyClassName);
                                var scrollBarWidth = widthDiffs - ($window.innerWidth - $elements.body.prop('clientWidth'));
                                if (scrollBarWidth > 0) {
                                    privateMethods.setBodyPadding(scrollBarWidth);
                                }
                                $dialogParent.append($dialog);

                                privateMethods.activate($dialog);

                                if (options.trapFocus) {
                                    privateMethods.autoFocus($dialog);
                                }

                                if (options.name) {
                                    $rootScope.$broadcast('ngDialog.opened', {dialog: $dialog, name: options.name});
                                } else {
                                    $rootScope.$broadcast('ngDialog.opened', $dialog);
                                }
                            });

                            if (!keydownIsBound) {
                                $elements.body.bind('keydown', privateMethods.onDocumentKeydown);
                                keydownIsBound = true;
                            }

                            if (options.closeByNavigation) {
                                var eventName = privateMethods.getRouterLocationEventName();
                                $rootScope.$on(eventName, function ($event) {
                                    if (privateMethods.closeDialog($dialog) === false)
                                        $event.preventDefault();
                                });
                            }

                            if (options.preserveFocus) {
                                $dialog.data('$ngDialogPreviousFocus', document.activeElement);
                            }

                            closeByDocumentHandler = function (event) {
                                var isOverlay = options.closeByDocument ? $el(event.target).hasClass('ngdialog-overlay') : false;
                                var isCloseBtn = $el(event.target).hasClass('ngdialog-close');

                                if (isOverlay || isCloseBtn) {
                                    publicMethods.close($dialog.attr('id'), isCloseBtn ? '$closeButton' : '$document');
                                }
                            };

                            if (typeof $window.Hammer !== 'undefined') {
                                var hammerTime = scope.hammerTime = $window.Hammer($dialog[0]);
                                hammerTime.on('tap', closeByDocumentHandler);
                            } else {
                                $dialog.bind('click', closeByDocumentHandler);
                            }

                            dialogsCount += 1;

                            return publicMethods;
                        });

                        return {
                            id: dialogID,
                            closePromise: defer.promise,
                            close: function (value) {
                                privateMethods.closeDialog($dialog, value);
                            }
                        };

                        function loadTemplateUrl (tmpl, config) {
                            $rootScope.$broadcast('ngDialog.templateLoading', tmpl);
                            return $http.get(tmpl, (config || {})).then(function(res) {
                                $rootScope.$broadcast('ngDialog.templateLoaded', tmpl);
                                return res.data || '';
                            });
                        }

                        function loadTemplate (tmpl) {
                            if (!tmpl) {
                                return 'Empty template';
                            }

                            if (angular.isString(tmpl) && options.plain) {
                                return tmpl;
                            }

                            if (typeof options.cache === 'boolean' && !options.cache) {
                                return loadTemplateUrl(tmpl, {cache: false});
                            }

                            return loadTemplateUrl(tmpl, {cache: $templateCache});
                        }
                    },

                    /*
                     * @param {Object} options:
                     * - template {String} - id of ng-template, url for partial, plain string (if enabled)
                     * - plain {Boolean} - enable plain string templates, default false
                     * - name {String}
                     * - scope {Object}
                     * - controller {String}
                     * - controllerAs {String}
                     * - className {String} - dialog theme class
                     * - appendClassName {String} - dialog theme class to be appended to defaults
                     * - showClose {Boolean} - show close button, default true
                     * - closeByEscape {Boolean} - default false
                     * - closeByDocument {Boolean} - default false
                     * - preCloseCallback {String|Function} - user supplied function name/function called before closing dialog (if set); not called on confirm
                     * - bodyClassName {String} - class added to body at open dialog
                     *
                     * @return {Object} dialog
                     */
                    openConfirm: function (opts) {
                        var defer = $q.defer();
                        var options = angular.copy(defaults);

                        opts = opts || {};

                        // Merge opts.data with predefined via setDefaults
                        if (typeof options.data !== 'undefined') {
                            if (typeof opts.data === 'undefined') {
                                opts.data = {};
                            }
                            opts.data = angular.merge(angular.copy(options.data), opts.data);
                        }

                        angular.extend(options, opts);

                        options.scope = angular.isObject(options.scope) ? options.scope.$new() : $rootScope.$new();
                        options.scope.confirm = function (value) {
                            defer.resolve(value);
                            var $dialog = $el(document.getElementById(openResult.id));
                            privateMethods.performCloseDialog($dialog, value);
                        };

                        var openResult = publicMethods.open(options);
                        if (openResult) {
                            openResult.closePromise.then(function (data) {
                                if (data) {
                                    return defer.reject(data.value);
                                }
                                return defer.reject();
                            });
                            return defer.promise;
                        }
                    },

                    isOpen: function(id) {
                        var $dialog = $el(document.getElementById(id));
                        return $dialog.length > 0;
                    },

                    /*
                     * @param {String} id
                     * @return {Object} dialog
                     */
                    close: function (id, value) {
                        var $dialog = $el(document.getElementById(id));

                        if ($dialog.length) {
                            privateMethods.closeDialog($dialog, value);
                        } else {
                            if (id === '$escape') {
                                var topDialogId = openIdStack[openIdStack.length - 1];
                                $dialog = $el(document.getElementById(topDialogId));
                                if ($dialog.data('$ngDialogOptions').closeByEscape) {
                                    privateMethods.closeDialog($dialog, '$escape');
                                }
                            } else {
                                publicMethods.closeAll(value);
                            }
                        }

                        return publicMethods;
                    },

                    closeAll: function (value) {
                        var $all = document.querySelectorAll('.ngdialog');

                        // Reverse order to ensure focus restoration works as expected
                        for (var i = $all.length - 1; i >= 0; i--) {
                            var dialog = $all[i];
                            privateMethods.closeDialog($el(dialog), value);
                        }
                    },

                    getOpenDialogs: function() {
                        return openIdStack;
                    },

                    getDefaults: function () {
                        return defaults;
                    }
                };

                angular.forEach(
                    ['html', 'body'],
                    function(elementName) {
                        $elements[elementName] = $document.find(elementName);
                        if (forceElementsReload[elementName]) {
                            var eventName = privateMethods.getRouterLocationEventName();
                            $rootScope.$on(eventName, function () {
                                $elements[elementName] = $document.find(elementName);
                            });
                        }
                    }
                );

                return publicMethods;
            }];
    });

    m.directive('ngDialog', ['ngDialog', function (ngDialog) {
        return {
            restrict: 'A',
            scope: {
                ngDialogScope: '='
            },
            link: function (scope, elem, attrs) {
                elem.on('click', function (e) {
                    e.preventDefault();

                    var ngDialogScope = angular.isDefined(scope.ngDialogScope) ? scope.ngDialogScope : 'noScope';
                    angular.isDefined(attrs.ngDialogClosePrevious) && ngDialog.close(attrs.ngDialogClosePrevious);

                    var defaults = ngDialog.getDefaults();

                    ngDialog.open({
                        template: attrs.ngDialog,
                        className: attrs.ngDialogClass || defaults.className,
                        appendClassName: attrs.ngDialogAppendClass,
                        controller: attrs.ngDialogController,
                        controllerAs: attrs.ngDialogControllerAs,
                        bindToController: attrs.ngDialogBindToController,
                        scope: ngDialogScope,
                        data: attrs.ngDialogData,
                        showClose: attrs.ngDialogShowClose === 'false' ? false : (attrs.ngDialogShowClose === 'true' ? true : defaults.showClose),
                        closeByDocument: attrs.ngDialogCloseByDocument === 'false' ? false : (attrs.ngDialogCloseByDocument === 'true' ? true : defaults.closeByDocument),
                        closeByEscape: attrs.ngDialogCloseByEscape === 'false' ? false : (attrs.ngDialogCloseByEscape === 'true' ? true : defaults.closeByEscape),
                        overlay: attrs.ngDialogOverlay === 'false' ? false : (attrs.ngDialogOverlay === 'true' ? true : defaults.overlay),
                        preCloseCallback: attrs.ngDialogPreCloseCallback || defaults.preCloseCallback,
                        bodyClassName: attrs.ngDialogBodyClass || defaults.bodyClassName
                    });
                });
            }
        };
    }]);

    return m;
}));


/***/ },

/***/ 116:
/***/ function(module, exports) {

/**
 * angular-ui-notification - Angular.js service providing simple notifications using Bootstrap 3 styles with css transitions for animating
 * @author Alex_Crack
 * @version v0.3.5
 * @link https://github.com/alexcrack/angular-ui-notification
 * @license MIT
 */
angular.module('ui-notification',[]);

angular.module('ui-notification').provider('Notification', function() {

    this.options = {
        delay: 5000,
        startTop: 10,
        startRight: 10,
        verticalSpacing: 10,
        horizontalSpacing: 10,
        positionX: 'right',
        positionY: 'top',
        replaceMessage: false,
        templateUrl: 'angular-ui-notification.html',
        onClose: undefined,
        closeOnClick: true,
        maxCount: 0, // 0 - Infinite
        container: 'body'
    };

    this.setOptions = function(options) {
        if (!angular.isObject(options)) throw new Error("Options should be an object!");
        this.options = angular.extend({}, this.options, options);
    };

    this.$get = ["$timeout", "$http", "$compile", "$templateCache", "$rootScope", "$injector", "$sce", "$q", "$window", function($timeout, $http, $compile, $templateCache, $rootScope, $injector, $sce, $q, $window) {
        var options = this.options;

        var startTop = options.startTop;
        var startRight = options.startRight;
        var verticalSpacing = options.verticalSpacing;
        var horizontalSpacing = options.horizontalSpacing;
        var delay = options.delay;

        var messageElements = [];
        var isResizeBound = false;

        var notify = function(args, t){
            var deferred = $q.defer();

            if (typeof args !== 'object') {
                args = {message:args};
            }

            args.scope = args.scope ? args.scope : $rootScope;
            args.template = args.templateUrl ? args.templateUrl : options.templateUrl;
            args.delay = !angular.isUndefined(args.delay) ? args.delay : delay;
            args.type = t || args.type || options.type ||  '';
            args.positionY = args.positionY ? args.positionY : options.positionY;
            args.positionX = args.positionX ? args.positionX : options.positionX;
            args.replaceMessage = args.replaceMessage ? args.replaceMessage : options.replaceMessage;
            args.onClose = args.onClose ? args.onClose : options.onClose;
            args.closeOnClick = (args.closeOnClick !== null && args.closeOnClick !== undefined) ? args.closeOnClick : options.closeOnClick;
            args.container = args.container ? args.container : options.container;
            
            var template=$templateCache.get(args.template);

            if(template){
                processNotificationTemplate(template);
            }else{
                // load it via $http only if it isn't default template and template isn't exist in template cache
                // cache:true means cache it for later access.
                $http.get(args.template,{cache: true})
                  .then(processNotificationTemplate)
                  .catch(function(data){
                    throw new Error('Template ('+args.template+') could not be loaded. ' + data);
                  });                
            }    
            
            
             function processNotificationTemplate(template) {

                var scope = args.scope.$new();
                scope.message = $sce.trustAsHtml(args.message);
                scope.title = $sce.trustAsHtml(args.title);
                scope.t = args.type.substr(0,1);
                scope.delay = args.delay;
                scope.onClose = args.onClose;

                var reposite = function() {
                    var j = 0;
                    var k = 0;
                    var lastTop = startTop;
                    var lastRight = startRight;
                    var lastPosition = [];
                    for(var i = messageElements.length - 1; i >= 0; i --) {
                        var element  = messageElements[i];
                        if (args.replaceMessage && i < messageElements.length - 1) {
                            element.addClass('killed');
                            continue;
                        }
                        var elHeight = parseInt(element[0].offsetHeight);
                        var elWidth  = parseInt(element[0].offsetWidth);
                        var position = lastPosition[element._positionY+element._positionX];

                        if ((top + elHeight) > window.innerHeight) {
                            position = startTop;
                            k ++;
                            j = 0;
                        }

                        var top = (lastTop = position ? (j === 0 ? position : position + verticalSpacing) : startTop);
                        var right = lastRight + (k * (horizontalSpacing + elWidth));

                        element.css(element._positionY, top + 'px');
                        if (element._positionX == 'center') {
                            element.css('left', parseInt(window.innerWidth / 2 - elWidth / 2) + 'px');
                        } else {
                            element.css(element._positionX, right + 'px');
                        }

                        lastPosition[element._positionY+element._positionX] = top + elHeight;

                        if (options.maxCount > 0 && messageElements.length > options.maxCount && i === 0) {
                            element.scope().kill(true);
                        }

                        j ++;
                    }
                };

                var templateElement = $compile(template)(scope);
                templateElement._positionY = args.positionY;
                templateElement._positionX = args.positionX;
                templateElement.addClass(args.type);

                var closeEvent = function(e) {
                    e = e.originalEvent || e;
                    if (e.type === 'click' || (e.propertyName === 'opacity' && e.elapsedTime >= 1)){
                        if (scope.onClose) {
                            scope.$apply(scope.onClose(templateElement));
                        }

                        templateElement.remove();
                        messageElements.splice(messageElements.indexOf(templateElement), 1);
                        scope.$destroy();
                        reposite();
                    }
                };

                if (args.closeOnClick) {
                    templateElement.addClass('clickable');
                    templateElement.bind('click', closeEvent);
                }

                templateElement.bind('webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd', closeEvent);

                if (angular.isNumber(args.delay)) {
                    $timeout(function() {
                        templateElement.addClass('killed');
                    }, args.delay);
                }

                setCssTransitions('none');

                angular.element(document.getElementsByTagName('body')).append(templateElement);
                var offset = -(parseInt(templateElement[0].offsetHeight) + 50);
                templateElement.css(templateElement._positionY, offset + "px");
                messageElements.push(templateElement);

                if(args.positionX == 'center'){
                    var elWidth = parseInt(templateElement[0].offsetWidth);
                    templateElement.css('left', parseInt(window.innerWidth / 2 - elWidth / 2) + 'px');
                }

                $timeout(function(){
                    setCssTransitions('');
                });

                function setCssTransitions(value){
                    ['-webkit-transition', '-o-transition', 'transition'].forEach(function(prefix){
                        templateElement.css(prefix, value);
                    });
                }

                scope._templateElement = templateElement;

                scope.kill = function(isHard) {
                    if (isHard) {
                        if (scope.onClose) {
                            scope.$apply(scope.onClose(scope._templateElement));
                        }

                        messageElements.splice(messageElements.indexOf(scope._templateElement), 1);
                        scope._templateElement.remove();
                        scope.$destroy();
                        $timeout(reposite);
                    } else {
                        scope._templateElement.addClass('killed');
                    }
                };

                $timeout(reposite);

                if (!isResizeBound) {
                    angular.element($window).bind('resize', function(e) {
                        $timeout(reposite);
                    });
                    isResizeBound = true;
                }

                deferred.resolve(scope);

            }

            return deferred.promise;
        };

        notify.primary = function(args) {
            return this(args, 'primary');
        };
        notify.error = function(args) {
            return this(args, 'error');
        };
        notify.success = function(args) {
            return this(args, 'success');
        };
        notify.info = function(args) {
            return this(args, 'info');
        };
        notify.warning = function(args) {
            return this(args, 'warning');
        };

        notify.clearAll = function() {
            angular.forEach(messageElements, function(element) {
                element.addClass('killed');
            });
        };

        return notify;
    }];
});

angular.module("ui-notification").run(["$templateCache", function($templateCache) {$templateCache.put("angular-ui-notification.html","<div class=\"ui-notification\"><h3 ng-show=\"title\" ng-bind-html=\"title\"></h3><div class=\"message\" ng-bind-html=\"message\"></div></div>");}]);

/***/ },

/***/ 129:
/***/ function(module, exports) {



/***/ },

/***/ 184:
/***/ function(module, exports) {

module.exports = "<a ui-sref=\"cart\" class=\"cart-button\">\n  <span class=\"glyphicon glyphicon-shopping-cart\"></span>\n  <span class=\"count\" ng-if=\"$ctrl.count() > 0\">{{ $ctrl.count() }}</span>\n</a>\n";

/***/ },

/***/ 185:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-9\">\n\n    <div class=\"cart\">\n      <div class=\"cart-product thumbnail\" ng-repeat=\"product in $ctrl.products\">\n        <div class=\"title pull-left\">{{ product.name }}</div>\n        <div class=\"pull-right\">\n\n          <a class=\"btn btn-default btn-minus\" ng-click=\"$ctrl.down(product)\"><span class=\"glyphicon glyphicon-minus\"></span></a>\n          <div class=\"count\">{{ product.count }}</div>\n          <a class=\"btn btn-default btn-plus\" ng-click=\"$ctrl.up(product)\"><span class=\"glyphicon glyphicon-plus\"></span></a>\n\n          <div class =\"price\">{{ product.totalPrice | currency:\"$\" }}</div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <a class=\"btn btn-danger btn-remove\" ng-click=\"$ctrl.remove(product)\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n      </div>\n      <div class=\"total-price pull-right\">{{ $ctrl.totalPrice() | currency:\"$\" }}</div>\n    </div>\n\n    <div class=\"clearfix\"></div>\n    <hr>\n    <checkout-button class=\"pull-right\"></checkout-button>\n\n    </div>\n  </div>\n\n</div>\n";

/***/ },

/***/ 186:
/***/ function(module, exports) {

module.exports = "<div class=\"categories list-group\">\n  <!-- active -->\n  <div ng-repeat=\"cat in $ctrl.categories\">\n    <a href=\"#\" class=\"list-group-item\" ng-class=\"{ active: $ctrl.isActive(cat)}\" ng-click=\"$ctrl.select(cat)\">{{ cat.name }}</a>\n  </div>\n</div>\n";

/***/ },

/***/ 187:
/***/ function(module, exports) {

module.exports = "<a class=\"btn btn-success\" ng-click=\"$ctrl.checkout()\">\n  Checkout\n  <span class=\"glyphicon glyphicon-ok\"></span>\n</a>\n";

/***/ },

/***/ 188:
/***/ function(module, exports) {

module.exports = "<div class=\"container checkout\">\n\n  <div class=\"row\">\n\n    <div class=\"col-xs-12 col-sm-9\">\n      <button class=\"btn btn-info btn-buy\" ng-click=\"$ctrl.buy()\">Buy</button>\n    </div><!--/span-->\n\n  </div><!--/row-->\n\n</div>\n";

/***/ },

/***/ 189:
/***/ function(module, exports) {

module.exports = "<div ng-show=\"$ctrl.isAuthenticated()\">\n  <span class=\"glyphicon glyphicon-user\"></span>\n  <a ng-click=\"$ctrl.logout()\" href=\"\">Log Out</a>\n</div>\n\n<div ng-hide=\"$ctrl.isAuthenticated()\">\n  <a ng-click=\"$ctrl.login()\" href=\"\">Log In</a>\n</div>\n";

/***/ },

/***/ 190:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" role=\"navigation\">\n  <div class=\"container\">\n    <div class=\"col-xs-12\">\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header\">\n        <a ui-sref=\"products\" class=\"navbar-brand\" href=\"#\">Market</a>\n      </div>\n\n      <div class=\"navbar-right\">\n        <cart-button></cart-button>\n        <login-button></login-button>\n      </div>\n    </div>\n  </div><!-- /.container-fluid -->\n</nav>\n";

/***/ },

/***/ 191:
/***/ function(module, exports) {

module.exports = "<div class=\"row\">\n  <div ng-repeat=\"product in $ctrl.getProducts()\">\n    <div class=\"col-4 col-sm-4 col-lg-4\">\n      <product product=\"product\"></product>\n    </div><!--/span-->\n  </div>\n</div><!--/row-->\n";

/***/ },

/***/ 192:
/***/ function(module, exports) {

module.exports = "<h2>{{ $ctrl.product.name }}</h2>\n<p>{{ $ctrl.product.description }}</p>\n<p class=\"price\">{{ $ctrl.product.price | currency:\"$\" }}</p>\n<p><a class=\"btn btn-default btn-add-to-cart\" href=\"#\" role=\"button\" ng-click=\"$ctrl.addToCart()\">Add to cart</a></p>\n";

/***/ },

/***/ 193:
/***/ function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row row-offcanvas row-offcanvas-right\">\n\n    <div class=\"col-xs-12 col-sm-9\">\n      <product-list filter-categories=\"$ctrl.filterCategories\" products=\"$ctrl.products\"></product-list>\n    </div><!--/span-->\n\n    <div class=\"col-xs-6 col-sm-3 sidebar-offcanvas\" id=\"sidebar\" role=\"navigation\">\n      <categories on-select=\"$ctrl.onSelectCategory($event)\"></categories>\n    </div><!--/span-->\n\n  </div><!--/row-->\n\n</div>\n";

/***/ },

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cartButton = __webpack_require__(213);

var _cartButton2 = _interopRequireDefault(_cartButton);

var _cartButton3 = __webpack_require__(184);

var _cartButton4 = _interopRequireDefault(_cartButton3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CartButtonComponent = {
  controller: _cartButton2.default,
  template: _cartButton4.default
};

exports.default = CartButtonComponent;

/***/ },

/***/ 213:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartButtonController = function () {
  CartButtonController.$inject = ["CartService"];
  function CartButtonController(CartService) {
    'ngInject';

    _classCallCheck(this, CartButtonController);

    this.CartService = CartService;
  }

  _createClass(CartButtonController, [{
    key: 'count',
    value: function count() {
      return this.CartService.totalCount();
    }
  }]);

  return CartButtonController;
}();

exports.default = CartButtonController;

/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cart = __webpack_require__(215);

var _cart2 = _interopRequireDefault(_cart);

var _cart3 = __webpack_require__(185);

var _cart4 = _interopRequireDefault(_cart3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CartComponent = {
  controller: _cart2.default,
  template: _cart4.default,
  bindings: {
    products: '<'
  }
};

exports.default = CartComponent;

/***/ },

/***/ 215:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartController = function () {
  CartController.$inject = ["CartService"];
  function CartController(CartService) {
    'ngInject';

    _classCallCheck(this, CartController);

    this.CartService = CartService;
  }

  _createClass(CartController, [{
    key: '$onInit',
    value: function $onInit() {
      // this.loadProducts();
    }
  }, {
    key: 'loadProducts',
    value: function loadProducts() {
      var _this = this;

      this.CartService.getProducts().then(function (data) {
        _this.products = data;
      });
    }
  }, {
    key: 'totalPrice',
    value: function totalPrice() {
      return this.CartService.totalPrice();
    }
  }, {
    key: 'up',
    value: function up(product) {
      this.CartService.upCount(product);
      this.loadProducts();
    }
  }, {
    key: 'down',
    value: function down(product) {
      this.CartService.downCount(product);
      this.loadProducts();
    }
  }, {
    key: 'remove',
    value: function remove(product) {
      this.CartService.remove(product);
      this.loadProducts();
    }
  }]);

  return CartController;
}();

exports.default = CartController;

/***/ },

/***/ 216:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _categories = __webpack_require__(217);

var _categories2 = _interopRequireDefault(_categories);

var _categories3 = __webpack_require__(186);

var _categories4 = _interopRequireDefault(_categories3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CategoriesComponent = {
  controller: _categories2.default,
  template: _categories4.default,
  bindings: {
    onSelect: '&'
  }
};

exports.default = CategoriesComponent;

/***/ },

/***/ 217:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CategoriesController = function () {
  CategoriesController.$inject = ["CategoriesService"];
  function CategoriesController(CategoriesService) {
    'ngInject';

    _classCallCheck(this, CategoriesController);

    this.CategoriesService = CategoriesService;
    this.selectedCategories = this.CategoriesService.getSelected();
  }

  _createClass(CategoriesController, [{
    key: '$onInit',
    value: function $onInit() {
      var _this = this;

      this.CategoriesService.getCategories().then(function (categories) {
        _this.categories = categories;
      });
      if (this.selectedCategories.length > 0) {
        onSelect.call(this);
      }
    }
  }, {
    key: 'isActive',
    value: function isActive(cat) {
      if (this.selectedCategories.find(function (x) {
        return x.id === cat.id;
      })) {
        return true;
      }
      return false;
    }
  }, {
    key: 'select',
    value: function select(cat) {
      this.selectedCategories = this.CategoriesService.select(cat);
      onSelect.call(this);
    }
  }]);

  return CategoriesController;
}();

function onSelect() {
  this.onSelect({ $event: { categories: this.selectedCategories } });
}

exports.default = CategoriesController;

/***/ },

/***/ 218:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkoutButton = __webpack_require__(219);

var _checkoutButton2 = _interopRequireDefault(_checkoutButton);

var _checkoutButton3 = __webpack_require__(187);

var _checkoutButton4 = _interopRequireDefault(_checkoutButton3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckoutButtonComponent = {
  controller: _checkoutButton2.default,
  template: _checkoutButton4.default
};

exports.default = CheckoutButtonComponent;

/***/ },

/***/ 219:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckoutButtonController = function () {
  CheckoutButtonController.$inject = ["AuthService", "$state"];
  function CheckoutButtonController(AuthService, $state) {
    'ngInject';

    _classCallCheck(this, CheckoutButtonController);

    this.AuthService = AuthService;
    this.$state = $state;
  }

  _createClass(CheckoutButtonController, [{
    key: 'checkout',
    value: function checkout() {
      var _this = this;

      if (this.AuthService.isAuthenticated()) {
        this.$state.go('checkout');
      } else {
        this.AuthService.openModal().then(function () {
          return _this.$state.go('checkout');
        });
      }
    }
  }]);

  return CheckoutButtonController;
}();

exports.default = CheckoutButtonController;

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkout = __webpack_require__(221);

var _checkout2 = _interopRequireDefault(_checkout);

var _checkout3 = __webpack_require__(188);

var _checkout4 = _interopRequireDefault(_checkout3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckoutComponent = {
  template: _checkout4.default,
  controller: _checkout2.default
};

exports.default = CheckoutComponent;

/***/ },

/***/ 221:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CheckoutController = function () {
  CheckoutController.$inject = ["CartService", "$state"];
  function CheckoutController(CartService, $state) {
    'ngInject';

    _classCallCheck(this, CheckoutController);

    this.CartService = CartService;
    this.$state = $state;
  }

  _createClass(CheckoutController, [{
    key: 'buy',
    value: function buy() {
      var _this = this;

      this.CartService.buy().then(function () {
        return _this.$state.go('products');
      });
    }
  }]);

  return CheckoutController;
}();

exports.default = CheckoutController;

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loginButton = __webpack_require__(223);

var _loginButton2 = _interopRequireDefault(_loginButton);

var _loginButton3 = __webpack_require__(189);

var _loginButton4 = _interopRequireDefault(_loginButton3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginButtonComponent = {
  template: _loginButton4.default,
  controller: _loginButton2.default
};

exports.default = LoginButtonComponent;

/***/ },

/***/ 223:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginButtonController = function () {
  LoginButtonController.$inject = ["AuthService"];
  function LoginButtonController(AuthService) {
    'ngInject';

    _classCallCheck(this, LoginButtonController);

    this.AuthService = AuthService;
  }

  _createClass(LoginButtonController, [{
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      return this.AuthService.isAuthenticated();
    }
  }, {
    key: 'login',
    value: function login() {
      this.AuthService.openModal();
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.AuthService.logout();
    }
  }]);

  return LoginButtonController;
}();

exports.default = LoginButtonController;

/***/ },

/***/ 224:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navbar = __webpack_require__(190);

var _navbar2 = _interopRequireDefault(_navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavbarComponent = {
  template: _navbar2.default
};

exports.default = NavbarComponent;

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _productList = __webpack_require__(226);

var _productList2 = _interopRequireDefault(_productList);

var _productList3 = __webpack_require__(191);

var _productList4 = _interopRequireDefault(_productList3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductListComponent = {
  controller: _productList2.default,
  template: _productList4.default,
  bindings: {
    filterCategories: '<',
    products: '<'
  }
};

exports.default = ProductListComponent;

/***/ },

/***/ 226:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(38);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductListController = function () {
  ProductListController.$inject = ["ProductsService", "$scope"];
  function ProductListController(ProductsService, $scope) {
    'ngInject';

    _classCallCheck(this, ProductListController);

    this.ProductsService = ProductsService;
    this.$scope = $scope;
    this.filterCategories = [];
  }

  _createClass(ProductListController, [{
    key: '$onInit',
    value: function $onInit() {
      // this.ProductsService.getProducts().then(
      //   products => {
      //     this.products = products;
      //   }
      // );
    }
  }, {
    key: 'filteredProducts',
    value: function filteredProducts() {
      if (_lodash2.default.isEmpty(this.filterCategories) || _lodash2.default.isEmpty(this.products)) {
        return this.products;
      }

      var categoriesIds = this.filterCategories.map(function (x) {
        return x.id;
      });

      return this.products.filter(function (x) {
        return categoriesIds.indexOf(x.categoryId) === -1 ? false : true;
      });
    }
  }, {
    key: 'getProducts',
    value: function getProducts() {
      return this.filteredProducts();
    }
  }]);

  return ProductListController;
}();

exports.default = ProductListController;

/***/ },

/***/ 227:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product = __webpack_require__(228);

var _product2 = _interopRequireDefault(_product);

var _product3 = __webpack_require__(192);

var _product4 = _interopRequireDefault(_product3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductComponent = {
  controller: _product2.default,
  template: _product4.default,
  bindings: {
    product: '<'
  }
};

exports.default = ProductComponent;

/***/ },

/***/ 228:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductController = function () {
  ProductController.$inject = ["CartService", "Notification"];
  function ProductController(CartService, Notification) {
    'ngInject';

    _classCallCheck(this, ProductController);

    this.CartService = CartService;
    this.Notification = Notification;
  }

  _createClass(ProductController, [{
    key: 'addToCart',
    value: function addToCart() {
      this.CartService.add(this.product);
      this.Notification.warning('Product added to cart');
    }
  }]);

  return ProductController;
}();

exports.default = ProductController;

/***/ },

/***/ 229:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _products = __webpack_require__(230);

var _products2 = _interopRequireDefault(_products);

var _products3 = __webpack_require__(193);

var _products4 = _interopRequireDefault(_products3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductsComponent = {
  template: _products4.default,
  controller: _products2.default,
  bindings: {
    products: '<'
  }
};

exports.default = ProductsComponent;

/***/ },

/***/ 230:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductsController = function () {
  function ProductsController() {
    'ngInject';

    _classCallCheck(this, ProductsController);
  }

  _createClass(ProductsController, [{
    key: 'onSelectCategory',
    value: function onSelectCategory($event) {
      this.filterCategories = $event.categories;
    }
  }]);

  return ProductsController;
}();

exports.default = ProductsController;

/***/ },

/***/ 231:
/***/ function(module, exports) {

"use strict";
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AccessService = function () {
  function AccessService($q, AuthService) {
    _classCallCheck(this, AccessService);

    this.$q = $q;
    this.AuthService = AuthService;
    this.OK = 200;
    // "we don't know who you are, so we can't say if you're authorized to access
    // this resource or not yet, please sign in first"
    this.UNAUTHORIZED = 401;
    // "we know who you are, and your profile does not allow you to access this resource"
    this.FORBIDDEN = 403;
  }

  _createClass(AccessService, [{
    key: "isAuthenticated",
    value: function isAuthenticated() {
      if (this.AuthService.isAuthenticated()) {
        return this.OK;
      }
      return this.$q.reject(this.UNAUTHORIZED);
    }
  }]);

  return AccessService;
}();

exports.default = AccessService;

/***/ },

/***/ 232:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthService = function () {
  AuthService.$inject = ["localStorageService", "ngDialog", "$q", "EventService"];
  function AuthService(localStorageService, ngDialog, $q, EventService) {
    'ngInject';

    _classCallCheck(this, AuthService);

    this.localStorageService = localStorageService;
    this.ngDialog = ngDialog;
    this.$q = $q;
    this.EventService = EventService;
  }

  _createClass(AuthService, [{
    key: 'login',
    value: function login() {
      this.saveToken('test-token');
      this.EventService.notify('login');
    }
  }, {
    key: 'logout',
    value: function logout() {
      this.removeToken();
      this.EventService.notify('logout');
    }
  }, {
    key: 'isAuthenticated',
    value: function isAuthenticated() {
      return Boolean(this.getToken());
    }
  }, {
    key: 'saveToken',
    value: function saveToken(token) {
      this.localStorageService.set('ma-token', token);
    }
  }, {
    key: 'removeToken',
    value: function removeToken() {
      this.localStorageService.remove('ma-token');
    }
  }, {
    key: 'getToken',
    value: function getToken() {
      return this.localStorageService.get('ma-token');
    }
  }, {
    key: 'openModal',
    value: function openModal() {
      var _this = this;

      var dialog = this.ngDialog.open({
        template: '<div>\n          \t<h2>Log In</h2>\n          \t<div class="ngdialog-buttons">\n          \t\t<button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click=closeThisDialog(0)>Cancel</button>\n          \t\t<button type="button" class="ngdialog-button ngdialog-button-primary" ng-click=closeThisDialog(1)>Log In</button>\n            </div>\n          </div>',
        plain: true
      });

      var deffered = this.$q.defer();
      dialog.closePromise.then(function (data) {
        if (data.value === 1) {
          _this.login();
          return deffered.resolve();
        }
      });

      return deffered.promise;
    }
  }]);

  return AuthService;
}();

exports.default = AuthService;

/***/ },

/***/ 233:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CartService = function () {
  CartService.$inject = ["ProductsService", "localStorageService", "$q"];
  function CartService(ProductsService, localStorageService, $q) {
    'ngInject';

    _classCallCheck(this, CartService);

    this.ProductsService = ProductsService;
    this.localStorageService = localStorageService;
    this.$q = $q;
    this.cart = [];
    this.totals = {
      count: 0,
      price: 0
    };
    this.loadFromCache();
  }

  _createClass(CartService, [{
    key: 'add',
    value: function add(product) {
      if (this.cart[product.id]) {
        this.changeProductCount(product, +1);
      } else {
        this.cart[product.id] = {
          id: product.id,
          count: 1,
          price: product.price,
          totalPrice: product.price

        };
      }

      this.save();
    }
  }, {
    key: 'remove',
    value: function remove(product) {
      if (this.cart[product.id]) {
        delete this.cart[product.id];
      }
      this.save();
    }
  }, {
    key: 'cleanCart',
    value: function cleanCart() {
      this.cart = {};
      this.save();
    }
  }, {
    key: 'upCount',
    value: function upCount(product) {
      this.changeProductCount(product, +1);
      this.save();
    }
  }, {
    key: 'downCount',
    value: function downCount(product) {
      if (this.cart[product.id].count > 1) {
        this.changeProductCount(product, -1);
        this.save();
      }
    }
  }, {
    key: 'changeProductCount',
    value: function changeProductCount(product, count) {
      var cartProduct = this.cart[product.id];
      cartProduct.count += count;
      cartProduct.totalPrice = cartProduct.count * cartProduct.price;
    }
  }, {
    key: 'getProducts',
    value: function getProducts() {
      var _this = this;

      var ids = Object.keys(this.cart);
      return this.ProductsService.getByIds(ids).then(function (products) {
        products.forEach(function (x) {
          x.count = _this.cart[x.id].count;
          x.price = _this.cart[x.id].price;
          x.totalPrice = _this.cart[x.id].totalPrice;
        });
        return products;
      });
    }
  }, {
    key: 'totalCount',
    value: function totalCount() {
      return this.totals.count;
    }
  }, {
    key: 'totalPrice',
    value: function totalPrice() {
      return this.totals.price;
    }
  }, {
    key: 'save',
    value: function save() {
      this.localStorageService.set('ma-cart', JSON.stringify(this.cart));
      this.calcTotal();
    }
  }, {
    key: 'loadFromCache',
    value: function loadFromCache() {
      this.cart = JSON.parse(this.localStorageService.get('ma-cart')) || {};
      this.calcTotal();
    }
  }, {
    key: 'calcTotal',
    value: function calcTotal() {
      var _this2 = this;

      this.totals.count = Object.keys(this.cart).length;
      var vals = Object.keys(this.cart).map(function (key) {
        return parseInt(_this2.cart[key].totalPrice, 10);
      });
      this.totals.price = vals.reduce(function (sum, x) {
        return sum + x;
      }, 0);
    }
  }, {
    key: 'buy',
    value: function buy() {
      var deffered = this.$q.defer();
      this.cleanCart();
      deffered.resolve();
      return deffered.promise;
    }
  }]);

  return CartService;
}();

exports.default = CartService;

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = __webpack_require__(38);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CategoriesService = function () {
  CategoriesService.$inject = ["$http", "$log", "localStorageService"];
  function CategoriesService($http, $log, localStorageService) {
    'ngInject';

    _classCallCheck(this, CategoriesService);

    this.$http = $http;
    this.$log = $log;
    this.localStorageService = localStorageService;
  }

  _createClass(CategoriesService, [{
    key: 'getCategories',
    value: function getCategories() {
      var _this = this;

      return this.$http.get('data/categories.json').then(function (data) {
        return data.data;
      }, function (error) {
        _this.$log.log(error);
      });
    }
  }, {
    key: 'select',
    value: function select(cat) {
      var selectedCategories = this.getSelected();
      var i = selectedCategories.findIndex(function (x) {
        return x.id === cat.id;
      });

      if (i === -1) {
        selectedCategories.push(cat);
      } else {
        selectedCategories.splice(i, 1);
      }

      this.localStorageService.set('selectedCategories', JSON.stringify(selectedCategories));

      return selectedCategories;
    }
  }, {
    key: 'getSelected',
    value: function getSelected() {
      var selectedCategories = JSON.parse(this.localStorageService.get('selectedCategories'));
      if (_lodash2.default.isEmpty(selectedCategories)) {
        selectedCategories = [];
      }
      return selectedCategories;
    }
  }]);

  return CategoriesService;
}();

exports.default = CategoriesService;

/***/ },

/***/ 235:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventService = function () {
  EventService.$inject = ["$q"];
  function EventService($q) {
    'ngInject';

    _classCallCheck(this, EventService);

    this.events = {
      login: $q.defer(),
      logout: $q.defer()
    };
  }

  _createClass(EventService, [{
    key: 'on',
    value: function on(event, callback) {
      var promise = this.events[event].promise;
      promise.then(null, null, callback);
      return promise;
    }
  }, {
    key: 'notify',
    value: function notify(event) {
      this.events[event].notify();
    }
  }]);

  return EventService;
}();

exports.default = EventService;

/***/ },

/***/ 236:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProductsService = function () {
  ProductsService.$inject = ["$http", "$log"];
  function ProductsService($http, $log) {
    'ngInject';

    _classCallCheck(this, ProductsService);

    this.$http = $http;
    this.$log = $log;
  }

  _createClass(ProductsService, [{
    key: 'getProducts',
    value: function getProducts() {
      var _this = this;

      return this.$http.get('data/products.json').then(function (data) {
        data.data.forEach(function (x) {
          return x.id = x.id.toString();
        });
        return data.data;
      }, function (error) {
        _this.$log.log(error);
      });
    }
  }, {
    key: 'getByIds',
    value: function getByIds(ids) {
      return this.getProducts().then(function (products) {
        return products.filter(function (x) {
          return ids.indexOf(x.id) === -1 ? false : true;
        });
      });
    }
  }]);

  return ProductsService;
}();

exports.default = ProductsService;

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _angular = __webpack_require__(6);

var _angular2 = _interopRequireDefault(_angular);

__webpack_require__(41);

__webpack_require__(40);

__webpack_require__(113);

__webpack_require__(39);

__webpack_require__(103);

__webpack_require__(104);

var _routes = __webpack_require__(111);

var _routes2 = _interopRequireDefault(_routes);

var _run = __webpack_require__(112);

var _run2 = _interopRequireDefault(_run);

var _servicesModule = __webpack_require__(110);

var _servicesModule2 = _interopRequireDefault(_servicesModule);

var _componentsModule = __webpack_require__(109);

var _componentsModule2 = _interopRequireDefault(_componentsModule);

__webpack_require__(107);

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = exports.app = 'app';

_angular2.default.module(app, ['ui.router', 'LocalStorageModule', 'ngDialog', 'angularSpinner', 'ui-notification', _servicesModule2.default, _componentsModule2.default]).config(_routes2.default).config(["usSpinnerConfigProvider", function (usSpinnerConfigProvider) {
  'ngInject';

  usSpinnerConfigProvider.setDefaults({ radius: 60 });
}]).run(_run2.default);

/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
    var opts = {
      lines: 12             // The number of lines to draw
    , length: 7             // The length of each line
    , width: 5              // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
    var target = document.getElementById('foo')
    var spinner = new Spinner(opts).spin(target)
 */
;(function (root, factory) {

  /* CommonJS */
  if (typeof module == 'object' && module.exports) module.exports = factory()

  /* AMD module */
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

  /* Browser global */
  else root.Spinner = factory()
}(this, function () {
  "use strict"

  var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
    , animations = {} /* Animation rules keyed by their name */
    , useCssAnimations /* Whether to use CSS animations or setTimeout */
    , sheet /* A stylesheet to hold the @keyframe or VML rules. */

  /**
   * Utility function to create elements. If no tag name is given,
   * a DIV is created. Optionally properties can be passed.
   */
  function createEl (tag, prop) {
    var el = document.createElement(tag || 'div')
      , n

    for (n in prop) el[n] = prop[n]
    return el
  }

  /**
   * Appends children and returns the parent.
   */
  function ins (parent /* child1, child2, ...*/) {
    for (var i = 1, n = arguments.length; i < n; i++) {
      parent.appendChild(arguments[i])
    }

    return parent
  }

  /**
   * Creates an opacity keyframe animation rule and returns its name.
   * Since most mobile Webkits have timing issues with animation-delay,
   * we create separate rules for each line/segment.
   */
  function addAnimation (alpha, trail, i, lines) {
    var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
      , start = 0.01 + i/lines * 100
      , z = Math.max(1 - (1-alpha) / trail * (100-start), alpha)
      , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
      , pre = prefix && '-' + prefix + '-' || ''

    if (!animations[name]) {
      sheet.insertRule(
        '@' + pre + 'keyframes ' + name + '{' +
        '0%{opacity:' + z + '}' +
        start + '%{opacity:' + alpha + '}' +
        (start+0.01) + '%{opacity:1}' +
        (start+trail) % 100 + '%{opacity:' + alpha + '}' +
        '100%{opacity:' + z + '}' +
        '}', sheet.cssRules.length)

      animations[name] = 1
    }

    return name
  }

  /**
   * Tries various vendor prefixes and returns the first supported property.
   */
  function vendor (el, prop) {
    var s = el.style
      , pp
      , i

    prop = prop.charAt(0).toUpperCase() + prop.slice(1)
    if (s[prop] !== undefined) return prop
    for (i = 0; i < prefixes.length; i++) {
      pp = prefixes[i]+prop
      if (s[pp] !== undefined) return pp
    }
  }

  /**
   * Sets multiple style properties at once.
   */
  function css (el, prop) {
    for (var n in prop) {
      el.style[vendor(el, n) || n] = prop[n]
    }

    return el
  }

  /**
   * Fills in default values.
   */
  function merge (obj) {
    for (var i = 1; i < arguments.length; i++) {
      var def = arguments[i]
      for (var n in def) {
        if (obj[n] === undefined) obj[n] = def[n]
      }
    }
    return obj
  }

  /**
   * Returns the line color from the given string or array.
   */
  function getColor (color, idx) {
    return typeof color == 'string' ? color : color[idx % color.length]
  }

  // Built-in defaults

  var defaults = {
    lines: 12             // The number of lines to draw
  , length: 7             // The length of each line
  , width: 5              // The line thickness
  , radius: 10            // The radius of the inner circle
  , scale: 1.0            // Scales overall size of the spinner
  , corners: 1            // Roundness (0..1)
  , color: '#000'         // #rgb or #rrggbb
  , opacity: 1/4          // Opacity of the lines
  , rotate: 0             // Rotation offset
  , direction: 1          // 1: clockwise, -1: counterclockwise
  , speed: 1              // Rounds per second
  , trail: 100            // Afterglow percentage
  , fps: 20               // Frames per second when using setTimeout()
  , zIndex: 2e9           // Use a high z-index by default
  , className: 'spinner'  // CSS class to assign to the element
  , top: '50%'            // center vertically
  , left: '50%'           // center horizontally
  , shadow: false         // Whether to render a shadow
  , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
  , position: 'absolute'  // Element positioning
  }

  /** The constructor */
  function Spinner (o) {
    this.opts = merge(o || {}, Spinner.defaults, defaults)
  }

  // Global defaults that override the built-ins:
  Spinner.defaults = {}

  merge(Spinner.prototype, {
    /**
     * Adds the spinner to the given target element. If this instance is already
     * spinning, it is automatically removed from its previous target b calling
     * stop() internally.
     */
    spin: function (target) {
      this.stop()

      var self = this
        , o = self.opts
        , el = self.el = createEl(null, {className: o.className})

      css(el, {
        position: o.position
      , width: 0
      , zIndex: o.zIndex
      , left: o.left
      , top: o.top
      })

      if (target) {
        target.insertBefore(el, target.firstChild || null)
      }

      el.setAttribute('role', 'progressbar')
      self.lines(el, self.opts)

      if (!useCssAnimations) {
        // No CSS animation support, use setTimeout() instead
        var i = 0
          , start = (o.lines - 1) * (1 - o.direction) / 2
          , alpha
          , fps = o.fps
          , f = fps / o.speed
          , ostep = (1 - o.opacity) / (f * o.trail / 100)
          , astep = f / o.lines

        ;(function anim () {
          i++
          for (var j = 0; j < o.lines; j++) {
            alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

            self.opacity(el, j * o.direction + start, alpha, o)
          }
          self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
        })()
      }
      return self
    }

    /**
     * Stops and removes the Spinner.
     */
  , stop: function () {
      var el = this.el
      if (el) {
        clearTimeout(this.timeout)
        if (el.parentNode) el.parentNode.removeChild(el)
        this.el = undefined
      }
      return this
    }

    /**
     * Internal method that draws the individual lines. Will be overwritten
     * in VML fallback mode below.
     */
  , lines: function (el, o) {
      var i = 0
        , start = (o.lines - 1) * (1 - o.direction) / 2
        , seg

      function fill (color, shadow) {
        return css(createEl(), {
          position: 'absolute'
        , width: o.scale * (o.length + o.width) + 'px'
        , height: o.scale * o.width + 'px'
        , background: color
        , boxShadow: shadow
        , transformOrigin: 'left'
        , transform: 'rotate(' + ~~(360/o.lines*i + o.rotate) + 'deg) translate(' + o.scale*o.radius + 'px' + ',0)'
        , borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
        })
      }

      for (; i < o.lines; i++) {
        seg = css(createEl(), {
          position: 'absolute'
        , top: 1 + ~(o.scale * o.width / 2) + 'px'
        , transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
        , opacity: o.opacity
        , animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
        })

        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
      }
      return el
    }

    /**
     * Internal method that adjusts the opacity of a single line.
     * Will be overwritten in VML fallback mode below.
     */
  , opacity: function (el, i, val) {
      if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
    }

  })


  function initVML () {

    /* Utility function to create a VML tag */
    function vml (tag, attr) {
      return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
    }

    // No CSS transforms but VML support, add a CSS rule for VML elements:
    sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

    Spinner.prototype.lines = function (el, o) {
      var r = o.scale * (o.length + o.width)
        , s = o.scale * 2 * r

      function grp () {
        return css(
          vml('group', {
            coordsize: s + ' ' + s
          , coordorigin: -r + ' ' + -r
          })
        , { width: s, height: s }
        )
      }

      var margin = -(o.width + o.length) * o.scale * 2 + 'px'
        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
        , i

      function seg (i, dx, filter) {
        ins(
          g
        , ins(
            css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
          , ins(
              css(
                vml('roundrect', {arcsize: o.corners})
              , { width: r
                , height: o.scale * o.width
                , left: o.scale * o.radius
                , top: -o.scale * o.width >> 1
                , filter: filter
                }
              )
            , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
            , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
            )
          )
        )
      }

      if (o.shadow)
        for (i = 1; i <= o.lines; i++) {
          seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
        }

      for (i = 1; i <= o.lines; i++) seg(i)
      return ins(el, g)
    }

    Spinner.prototype.opacity = function (el, i, val, o) {
      var c = el.firstChild
      o = o.shadow && o.lines || 0
      if (c && i + o < c.childNodes.length) {
        c = c.childNodes[i + o]; c = c && c.firstChild; c = c && c.firstChild
        if (c) c.opacity = val
      }
    }
  }

  if (typeof document !== 'undefined') {
    sheet = (function () {
      var el = createEl('style', {type : 'text/css'})
      ins(document.getElementsByTagName('head')[0], el)
      return el.sheet || el.styleSheet
    }())

    var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

    if (!vendor(probe, 'transform') && probe.adj) initVML()
    else useCssAnimations = vendor(probe, 'animation')
  }

  return Spinner

}));


/***/ }

},[277]);