import {
  require_react
} from "./chunk-3SOFIYQK.js";
import {
  __commonJS
} from "./chunk-HKJ2B2AA.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-animated-weather/build/skycons.js
var require_skycons = __commonJS({
  "node_modules/react-animated-weather/build/skycons.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var skycons = function(global2) {
      "use strict";
      var requestInterval, cancelInterval;
      (function() {
        var raf = global2.requestAnimationFrame || global2.webkitRequestAnimationFrame || global2.mozRequestAnimationFrame || global2.oRequestAnimationFrame || global2.msRequestAnimationFrame, caf = global2.cancelAnimationFrame || global2.webkitCancelAnimationFrame || global2.mozCancelAnimationFrame || global2.oCancelAnimationFrame || global2.msCancelAnimationFrame;
        if (raf && caf) {
          requestInterval = function requestInterval2(fn) {
            var handle = { value: null };
            function loop() {
              handle.value = raf(loop);
              fn();
            }
            loop();
            return handle;
          };
          cancelInterval = function cancelInterval2(handle) {
            caf(handle.value);
          };
        } else {
          requestInterval = setInterval;
          cancelInterval = clearInterval;
        }
      })();
      var KEYFRAME = 500, STROKE = 0.08, TAU = 2 * Math.PI, TWO_OVER_SQRT_2 = 2 / Math.sqrt(2);
      function circle(ctx, x, y, r) {
        ctx.beginPath();
        ctx.arc(x, y, r, 0, TAU, false);
        ctx.fill();
      }
      function line(ctx, ax, ay, bx, by) {
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(bx, by);
        ctx.stroke();
      }
      function puff(ctx, t, cx, cy, rx, ry, rmin, rmax) {
        var c = Math.cos(t * TAU), s = Math.sin(t * TAU);
        rmax -= rmin;
        circle(ctx, cx - s * rx, cy + c * ry + rmax * 0.5, rmin + (1 - c * 0.5) * rmax);
      }
      function puffs(ctx, t, cx, cy, rx, ry, rmin, rmax) {
        var i;
        for (i = 5; i--; ) {
          puff(ctx, t + i / 5, cx, cy, rx, ry, rmin, rmax);
        }
      }
      function cloud(ctx, t, cx, cy, cw, s, color) {
        t /= 3e4;
        var a = cw * 0.21, b = cw * 0.12, c = cw * 0.24, d = cw * 0.28;
        ctx.fillStyle = color;
        puffs(ctx, t, cx, cy, a, b, c, d);
        ctx.globalCompositeOperation = "destination-out";
        puffs(ctx, t, cx, cy, a, b, c - s, d - s);
        ctx.globalCompositeOperation = "source-over";
      }
      function sun(ctx, t, cx, cy, cw, s, color) {
        t /= 12e4;
        var a = cw * 0.25 - s * 0.5, b = cw * 0.32 + s * 0.5, c = cw * 0.5 - s * 0.5, i, p, cos, sin;
        ctx.strokeStyle = color;
        ctx.lineWidth = s;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.arc(cx, cy, a, 0, TAU, false);
        ctx.stroke();
        for (i = 8; i--; ) {
          p = (t + i / 8) * TAU;
          cos = Math.cos(p);
          sin = Math.sin(p);
          line(ctx, cx + cos * b, cy + sin * b, cx + cos * c, cy + sin * c);
        }
      }
      function moon(ctx, t, cx, cy, cw, s, color) {
        t /= 15e3;
        var a = cw * 0.29 - s * 0.5, b = cw * 0.05, c = Math.cos(t * TAU), p = c * TAU / -16;
        ctx.strokeStyle = color;
        ctx.lineWidth = s;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        cx += c * b;
        ctx.beginPath();
        ctx.arc(cx, cy, a, p + TAU / 8, p + TAU * 7 / 8, false);
        ctx.arc(cx + Math.cos(p) * a * TWO_OVER_SQRT_2, cy + Math.sin(p) * a * TWO_OVER_SQRT_2, a, p + TAU * 5 / 8, p + TAU * 3 / 8, true);
        ctx.closePath();
        ctx.stroke();
      }
      function rain(ctx, t, cx, cy, cw, s, color) {
        t /= 1350;
        var a = cw * 0.16, b = TAU * 11 / 12, c = TAU * 7 / 12, i, p, x, y;
        ctx.fillStyle = color;
        for (i = 4; i--; ) {
          p = (t + i / 4) % 1;
          x = cx + (i - 1.5) / 1.5 * (i === 1 || i === 2 ? -1 : 1) * a;
          y = cy + p * p * cw;
          ctx.beginPath();
          ctx.moveTo(x, y - s * 1.5);
          ctx.arc(x, y, s * 0.75, b, c, false);
          ctx.fill();
        }
      }
      function sleet(ctx, t, cx, cy, cw, s, color) {
        t /= 750;
        var a = cw * 0.1875, i, p, x, y;
        ctx.strokeStyle = color;
        ctx.lineWidth = s * 0.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (i = 4; i--; ) {
          p = (t + i / 4) % 1;
          x = Math.floor(cx + (i - 1.5) / 1.5 * (i === 1 || i === 2 ? -1 : 1) * a) + 0.5;
          y = cy + p * cw;
          line(ctx, x, y - s * 1.5, x, y + s * 1.5);
        }
      }
      function snow(ctx, t, cx, cy, cw, s, color) {
        t /= 3e3;
        var a = cw * 0.16, b = s * 0.75, u = t * TAU * 0.7, ux = Math.cos(u) * b, uy = Math.sin(u) * b, v = u + TAU / 3, vx = Math.cos(v) * b, vy = Math.sin(v) * b, w = u + TAU * 2 / 3, wx = Math.cos(w) * b, wy = Math.sin(w) * b, i, p, x, y;
        ctx.strokeStyle = color;
        ctx.lineWidth = s * 0.5;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (i = 4; i--; ) {
          p = (t + i / 4) % 1;
          x = cx + Math.sin((p + i / 4) * TAU) * a;
          y = cy + p * cw;
          line(ctx, x - ux, y - uy, x + ux, y + uy);
          line(ctx, x - vx, y - vy, x + vx, y + vy);
          line(ctx, x - wx, y - wy, x + wx, y + wy);
        }
      }
      function fogbank(ctx, t, cx, cy, cw, s, color) {
        t /= 3e4;
        var a = cw * 0.21, b = cw * 0.06, c = cw * 0.21, d = cw * 0.28;
        ctx.fillStyle = color;
        puffs(ctx, t, cx, cy, a, b, c, d);
        ctx.globalCompositeOperation = "destination-out";
        puffs(ctx, t, cx, cy, a, b, c - s, d - s);
        ctx.globalCompositeOperation = "source-over";
      }
      var WIND_PATHS = [[-0.75, -0.18, -0.7219, -0.1527, -0.6971, -0.1225, -0.6739, -0.091, -0.6516, -0.0588, -0.6298, -0.0262, -0.6083, 65e-4, -0.5868, 0.0396, -0.5643, 0.0731, -0.5372, 0.1041, -0.5033, 0.1259, -0.4662, 0.1406, -0.4275, 0.1493, -0.3881, 0.153, -0.3487, 0.1526, -0.3095, 0.1488, -0.2708, 0.1421, -0.2319, 0.1342, -0.1943, 0.1217, -0.16, 0.1025, -0.129, 0.0785, -0.1012, 0.0509, -0.0764, 0.0206, -0.0547, -0.012, -0.0378, -0.0472, -0.0324, -0.0857, -0.0389, -0.1241, -0.0546, -0.1599, -0.0814, -0.1876, -0.1193, -0.1964, -0.1582, -0.1935, -0.1931, -0.1769, -0.2157, -0.1453, -0.229, -0.1085, -0.2327, -0.0697, -0.224, -0.0317, -0.2064, 33e-4, -0.1853, 0.0362, -0.1613, 0.0672, -0.135, 0.0961, -0.1051, 0.1213, -0.0706, 0.1397, -0.0332, 0.1512, 53e-4, 0.158, 0.0442, 0.1624, 0.0833, 0.1636, 0.1224, 0.1615, 0.1613, 0.1565, 0.1999, 0.15, 0.2378, 0.1402, 0.2749, 0.1279, 0.3118, 0.1147, 0.3487, 0.1015, 0.3858, 0.0892, 0.4236, 0.0787, 0.4621, 0.0715, 0.5012, 0.0702, 0.5398, 0.0766, 0.5768, 0.089, 0.6123, 0.1055, 0.6466, 0.1244, 0.6805, 0.144, 0.7147, 0.163, 0.75, 0.18], [-0.75, 0, -0.7033, 0.0195, -0.6569, 0.0399, -0.6104, 0.06, -0.5634, 0.0789, -0.5155, 0.0954, -0.4667, 0.1089, -0.4174, 0.1206, -0.3676, 0.1299, -0.3174, 0.1365, -0.2669, 0.1398, -0.2162, 0.1391, -0.1658, 0.1347, -0.1157, 0.1271, -0.0661, 0.1169, -0.017, 0.1046, 0.0316, 0.0903, 0.0791, 0.0728, 0.1259, 0.0534, 0.1723, 0.0331, 0.2188, 0.0129, 0.2656, -64e-4, 0.3122, -0.0263, 0.3586, -0.0466, 0.4052, -0.0665, 0.4525, -0.0847, 0.5007, -0.1002, 0.5497, -0.113, 0.5991, -0.124, 0.6491, -0.1325, 0.6994, -0.138, 0.75, -0.14]], WIND_OFFSETS = [{ start: 0.36, end: 0.11 }, { start: 0.56, end: 0.16 }];
      function leaf(ctx, t, x, y, cw, s, color) {
        var a = cw / 8, b = a / 3, c = 2 * b, d = t % 1 * TAU, e = Math.cos(d), f = Math.sin(d);
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.lineWidth = s;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.beginPath();
        ctx.arc(x, y, a, d, d + Math.PI, false);
        ctx.arc(x - b * e, y - b * f, c, d + Math.PI, d, false);
        ctx.arc(x + c * e, y + c * f, b, d + Math.PI, d, true);
        ctx.globalCompositeOperation = "destination-out";
        ctx.fill();
        ctx.globalCompositeOperation = "source-over";
        ctx.stroke();
      }
      function swoosh(ctx, t, cx, cy, cw, s, index, total, color) {
        t /= 2500;
        var path = WIND_PATHS[index], a = (t + index - WIND_OFFSETS[index].start) % total, c = (t + index - WIND_OFFSETS[index].end) % total, e = (t + index) % total, b, d, f, i;
        ctx.strokeStyle = color;
        ctx.lineWidth = s;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        if (a < 1) {
          ctx.beginPath();
          a *= path.length / 2 - 1;
          b = Math.floor(a);
          a -= b;
          b *= 2;
          b += 2;
          ctx.moveTo(cx + (path[b - 2] * (1 - a) + path[b] * a) * cw, cy + (path[b - 1] * (1 - a) + path[b + 1] * a) * cw);
          if (c < 1) {
            c *= path.length / 2 - 1;
            d = Math.floor(c);
            c -= d;
            d *= 2;
            d += 2;
            for (i = b; i !== d; i += 2) {
              ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
            }
            ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw);
          } else for (i = b; i !== path.length; i += 2) {
            ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
          }
          ctx.stroke();
        } else if (c < 1) {
          ctx.beginPath();
          c *= path.length / 2 - 1;
          d = Math.floor(c);
          c -= d;
          d *= 2;
          d += 2;
          ctx.moveTo(cx + path[0] * cw, cy + path[1] * cw);
          for (i = 2; i !== d; i += 2) {
            ctx.lineTo(cx + path[i] * cw, cy + path[i + 1] * cw);
          }
          ctx.lineTo(cx + (path[d - 2] * (1 - c) + path[d] * c) * cw, cy + (path[d - 1] * (1 - c) + path[d + 1] * c) * cw);
          ctx.stroke();
        }
        if (e < 1) {
          e *= path.length / 2 - 1;
          f = Math.floor(e);
          e -= f;
          f *= 2;
          f += 2;
          leaf(ctx, t, cx + (path[f - 2] * (1 - e) + path[f] * e) * cw, cy + (path[f - 1] * (1 - e) + path[f + 1] * e) * cw, cw, s, color);
        }
      }
      var Skycons = function Skycons2(opts) {
        this.list = [];
        this.interval = null;
        this.color = opts && opts.color ? opts.color : "black";
        this.resizeClear = !!(opts && opts.resizeClear);
      };
      Skycons.CLEAR_DAY = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        sun(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
      };
      Skycons.CLEAR_NIGHT = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        moon(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
      };
      Skycons.PARTLY_CLOUDY_DAY = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        sun(ctx, t, w * 0.625, h * 0.375, s * 0.75, s * STROKE, color);
        cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
      };
      Skycons.PARTLY_CLOUDY_NIGHT = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        moon(ctx, t, w * 0.667, h * 0.375, s * 0.75, s * STROKE, color);
        cloud(ctx, t, w * 0.375, h * 0.625, s * 0.75, s * STROKE, color);
      };
      Skycons.CLOUDY = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        cloud(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, color);
      };
      Skycons.RAIN = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        rain(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
      };
      Skycons.SLEET = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        sleet(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
      };
      Skycons.SNOW = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        snow(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
        cloud(ctx, t, w * 0.5, h * 0.37, s * 0.9, s * STROKE, color);
      };
      Skycons.WIND = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h);
        swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 0, 2, color);
        swoosh(ctx, t, w * 0.5, h * 0.5, s, s * STROKE, 1, 2, color);
      };
      Skycons.FOG = function(ctx, t, color) {
        var w = ctx.canvas.width, h = ctx.canvas.height, s = Math.min(w, h), k = s * STROKE;
        fogbank(ctx, t, w * 0.5, h * 0.32, s * 0.75, k, color);
        t /= 5e3;
        var a = Math.cos(t * TAU) * s * 0.02, b = Math.cos((t + 0.25) * TAU) * s * 0.02, c = Math.cos((t + 0.5) * TAU) * s * 0.02, d = Math.cos((t + 0.75) * TAU) * s * 0.02, n = h * 0.936, e = Math.floor(n - k * 0.5) + 0.5, f = Math.floor(n - k * 2.5) + 0.5;
        ctx.strokeStyle = color;
        ctx.lineWidth = k;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        line(ctx, a + w * 0.2 + k * 0.5, e, b + w * 0.8 - k * 0.5, e);
        line(ctx, c + w * 0.2 + k * 0.5, f, d + w * 0.8 - k * 0.5, f);
      };
      Skycons.prototype = {
        _determineDrawingFunction: function _determineDrawingFunction(draw) {
          if (typeof draw === "string") draw = Skycons[draw.toUpperCase().replace(/-/g, "_")] || null;
          return draw;
        },
        add: function add(el, draw) {
          var obj;
          if (typeof el === "string") el = document.getElementById(el);
          if (el === null) return;
          draw = this._determineDrawingFunction(draw);
          if (typeof draw !== "function") return;
          obj = {
            element: el,
            context: el.getContext("2d"),
            drawing: draw
          };
          this.list.push(obj);
          this.draw(obj, KEYFRAME);
        },
        set: function set(el, draw) {
          var i;
          if (typeof el === "string") el = document.getElementById(el);
          for (i = this.list.length; i--; ) {
            if (this.list[i].element === el) {
              this.list[i].drawing = this._determineDrawingFunction(draw);
              this.draw(this.list[i], KEYFRAME);
              return;
            }
          }
          this.add(el, draw);
        },
        remove: function remove(el) {
          var i;
          if (typeof el === "string") el = document.getElementById(el);
          for (i = this.list.length; i--; ) {
            if (this.list[i].element === el) {
              this.list.splice(i, 1);
              return;
            }
          }
        },
        draw: function draw(obj, time) {
          var canvas = obj.context.canvas;
          if (this.resizeClear) canvas.width = canvas.width;
          else obj.context.clearRect(0, 0, canvas.width, canvas.height);
          obj.drawing(obj.context, time, this.color);
        },
        play: function play() {
          var self2 = this;
          this.pause();
          this.interval = requestInterval(function() {
            var now = Date.now(), i;
            for (i = self2.list.length; i--; ) {
              self2.draw(self2.list[i], now);
            }
          }, 1e3 / 60);
        },
        pause: function pause() {
          if (this.interval) {
            cancelInterval(this.interval);
            this.interval = null;
          }
        }
      };
      return Skycons;
    }(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : window);
    exports.default = skycons;
  }
});

// node_modules/react-animated-weather/build/ReactAnimatedWeather.js
var require_ReactAnimatedWeather = __commonJS({
  "node_modules/react-animated-weather/build/ReactAnimatedWeather.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _skycons = require_skycons();
    var _skycons2 = _interopRequireDefault(_skycons);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function setIcon(icon, animate, skyconIcon, canvas) {
      skyconIcon.add(canvas, _skycons2.default[icon]);
      if (animate) {
        skyconIcon.play();
      }
    }
    var ReactAnimatedWeather = function ReactAnimatedWeather2(_ref) {
      var icon = _ref.icon, color = _ref.color, size = _ref.size, animate = _ref.animate;
      var skyconCanvas = (0, _react.useRef)(null);
      (0, _react.useEffect)(function() {
        var skyconIcon = new _skycons2.default({ color, resizeClear: true });
        var canvas = skyconCanvas.current;
        setIcon(icon, animate, skyconIcon, canvas);
        return function() {
          skyconIcon.remove(canvas);
        };
      }, [icon, color, animate, size]);
      return _react2.default.createElement("canvas", { ref: skyconCanvas, width: size, height: size });
    };
    ReactAnimatedWeather.defaultProps = {
      animate: true,
      size: 64,
      color: "black"
    };
    ReactAnimatedWeather.propTypes = {
      icon: _propTypes2.default.oneOf(["CLEAR_DAY", "CLEAR_NIGHT", "PARTLY_CLOUDY_DAY", "PARTLY_CLOUDY_NIGHT", "CLOUDY", "RAIN", "SLEET", "SNOW", "WIND", "FOG"]).isRequired,
      animate: _propTypes2.default.bool,
      size: _propTypes2.default.number,
      color: _propTypes2.default.string
    };
    exports.default = ReactAnimatedWeather;
  }
});

// node_modules/react-animated-weather/build/index.js
var require_build = __commonJS({
  "node_modules/react-animated-weather/build/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _ReactAnimatedWeather = require_ReactAnimatedWeather();
    var _ReactAnimatedWeather2 = _interopRequireDefault(_ReactAnimatedWeather);
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    exports.default = _ReactAnimatedWeather2.default;
  }
});
export default require_build();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-animated-weather.js.map
