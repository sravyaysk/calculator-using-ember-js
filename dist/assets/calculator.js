"use strict";



define('calculator/app', ['exports', 'ember', 'calculator/resolver', 'ember-load-initializers', 'calculator/config/environment'], function (exports, _ember, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  _ember.default.MODEL_FACTORY_INJECTIONS = true;

  App = _ember.default.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('calculator/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('calculator/helpers/app-version', ['exports', 'ember', 'calculator/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = _ember.default.Helper.helper(appVersion);
});
define('calculator/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('calculator/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('calculator/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'calculator/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _config$APP = _environment.default.APP,
      name = _config$APP.name,
      version = _config$APP.version;
  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('calculator/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('calculator/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('calculator/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/index'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('calculator/initializers/export-application-global', ['exports', 'ember', 'calculator/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember.default.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('calculator/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('calculator/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('calculator/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("calculator/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('calculator/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('calculator/router', ['exports', 'ember', 'calculator/config/environment'], function (exports, _ember, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = _ember.default.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    //this.route('index');
  });

  exports.default = Router;
});
define('calculator/routes/index', ['exports', 'ember'], function (exports, _ember) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var current = '0';
	exports.default = _ember.default.Route.extend({
		actions: {
			pushOpcode: function pushOpcode(value) {
				if (current == '0') {
					current = value;
				} else {
					current = current + value;
				}
				var display_area = $("#textfield");
				display_area.val(current);
			},
			clearAll: function clearAll() {
				current = '0';
				var display_area = $("#textfield");
				display_area.val(current);
			},
			performCalculation: function performCalculation() {
				current = eval(current);
				var display_area = $("#textfield");
				display_area.val(current);
			}
		}
	});
});
define('calculator/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("calculator/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "TPd/1SF8", "block": "{\"statements\":[[11,\"h2\",[]],[13],[0,\"Sravya's Ember JS Calculator\"],[14],[0,\"\\n\"],[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "calculator/templates/application.hbs" } });
});
define("calculator/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4YhECbFS", "block": "{\"statements\":[[11,\"form\",[]],[13],[0,\"\\n\"],[1,[33,[\"input\"],null,[[\"type\",\"id\",\"value\"],[\"text\",\"textfield\",[28,[\"disparea\"]]]]],false],[0,\"\\n\"],[11,\"table\",[]],[13],[0,\"\\n\\t\"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"1\"]],[13],[0,\"1\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"2\"]],[13],[0,\"2\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"3\"]],[13],[0,\"3\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"+\"]],[13],[0,\"+\"],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"4\"]],[13],[0,\"4\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"5\"]],[13],[0,\"5\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"6\"]],[13],[0,\"6\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"-\"]],[13],[0,\"-\"],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"7\"]],[13],[0,\"7\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"8\"]],[13],[0,\"8\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"9\"]],[13],[0,\"9\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"*\"]],[13],[0,\"X\"],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"tr\",[]],[13],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"clearAll\"]],[13],[0,\"C\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"0\"]],[13],[0,\"0\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"performCalculation\"]],[13],[0,\"=\"],[14],[14],[0,\"\\n      \"],[11,\"td\",[]],[13],[11,\"button\",[]],[15,\"type\",\"submit\"],[5,[\"action\"],[[28,[null]],\"pushOpcode\",\"/\"]],[13],[0,\"/\"],[14],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "calculator/templates/index.hbs" } });
});


define('calculator/config/environment', ['ember'], function(Ember) {
  var prefix = 'calculator';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("calculator/app")["default"].create({"name":"calculator","version":"0.0.0+"});
}
//# sourceMappingURL=calculator.map
