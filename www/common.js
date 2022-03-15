"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["common"],{

/***/ 22333:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-767ae7c7.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-06cd27b1.js */ 42307);
/* harmony import */ var _haptic_9a9aa7ec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-9a9aa7ec.js */ 81414);
/* harmony import */ var _index_41bf41f2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-41bf41f2.js */ 87864);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_06cd27b1_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_41bf41f2_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_9a9aa7ec_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_9a9aa7ec_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_9a9aa7ec_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 77106:
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/dir-e8b767a8.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ isRTL)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/**
 * Returns `true` if the document or host element
 * has a `dir` set to `rtl`. The host value will always
 * take priority over the root document value.
 */
const isRTL = (hostEl) => {
  if (hostEl) {
    if (hostEl.dir !== '') {
      return hostEl.dir.toLowerCase() === 'rtl';
    }
  }
  return (document === null || document === void 0 ? void 0 : document.dir.toLowerCase()) === 'rtl';
};




/***/ }),

/***/ 31395:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/focus-visible-02bf7a99.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startFocusVisible": () => (/* binding */ startFocusVisible)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const ION_FOCUSED = 'ion-focused';
const ION_FOCUSABLE = 'ion-focusable';
const FOCUS_KEYS = ['Tab', 'ArrowDown', 'Space', 'Escape', ' ', 'Shift', 'Enter', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'Home', 'End'];
const startFocusVisible = (rootEl) => {
  let currentFocus = [];
  let keyboardMode = true;
  const ref = (rootEl) ? rootEl.shadowRoot : document;
  const root = (rootEl) ? rootEl : document.body;
  const setFocus = (elements) => {
    currentFocus.forEach(el => el.classList.remove(ION_FOCUSED));
    elements.forEach(el => el.classList.add(ION_FOCUSED));
    currentFocus = elements;
  };
  const pointerDown = () => {
    keyboardMode = false;
    setFocus([]);
  };
  const onKeydown = (ev) => {
    keyboardMode = FOCUS_KEYS.includes(ev.key);
    if (!keyboardMode) {
      setFocus([]);
    }
  };
  const onFocusin = (ev) => {
    if (keyboardMode && ev.composedPath) {
      const toFocus = ev.composedPath().filter((el) => {
        if (el.classList) {
          return el.classList.contains(ION_FOCUSABLE);
        }
        return false;
      });
      setFocus(toFocus);
    }
  };
  const onFocusout = () => {
    if (ref.activeElement === root) {
      setFocus([]);
    }
  };
  ref.addEventListener('keydown', onKeydown);
  ref.addEventListener('focusin', onFocusin);
  ref.addEventListener('focusout', onFocusout);
  ref.addEventListener('touchstart', pointerDown);
  ref.addEventListener('mousedown', pointerDown);
  const destroy = () => {
    ref.removeEventListener('keydown', onKeydown);
    ref.removeEventListener('focusin', onFocusin);
    ref.removeEventListener('focusout', onFocusout);
    ref.removeEventListener('touchstart', pointerDown);
    ref.removeEventListener('mousedown', pointerDown);
  };
  return {
    destroy,
    setFocus
  };
};




/***/ }),

/***/ 53345:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-0e9f0224.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ CoreDelegate),
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _home_mauro_Descargas_final_BridgeSD_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 74475);
/* harmony import */ var _helpers_6e1e5b65_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers-6e1e5b65.js */ 89171);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */


const attachComponent = /*#__PURE__*/function () {
  var _ref = (0,_home_mauro_Descargas_final_BridgeSD_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (delegate, container, component, cssClasses, componentProps, inline) {
    if (delegate) {
      return delegate.attachViewToDom(container, component, componentProps, cssClasses);
    }

    if (!inline && typeof component !== 'string' && !(component instanceof HTMLElement)) {
      throw new Error('framework delegate is missing');
    }

    const el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

    if (cssClasses) {
      cssClasses.forEach(c => el.classList.add(c));
    }

    if (componentProps) {
      Object.assign(el, componentProps);
    }

    container.appendChild(el);
    yield new Promise(resolve => (0,_helpers_6e1e5b65_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
    return el;
  });

  return function attachComponent(_x, _x2, _x3, _x4, _x5, _x6) {
    return _ref.apply(this, arguments);
  };
}();

const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};

const CoreDelegate = () => {
  let BaseComponent;
  let Reference;

  const attachViewToDom = /*#__PURE__*/function () {
    var _ref2 = (0,_home_mauro_Descargas_final_BridgeSD_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (parentElement, userComponent, userComponentProps = {}, cssClasses = []) {
      BaseComponent = parentElement;
      /**
       * If passing in a component via the `component` props
       * we need to append it inside of our overlay component.
       */

      if (userComponent) {
        /**
         * If passing in the tag name, create
         * the element otherwise just get a reference
         * to the component.
         */
        const el = typeof userComponent === 'string' ? BaseComponent.ownerDocument && BaseComponent.ownerDocument.createElement(userComponent) : userComponent;
        /**
         * Add any css classes passed in
         * via the cssClasses prop on the overlay.
         */

        cssClasses.forEach(c => el.classList.add(c));
        /**
         * Add any props passed in
         * via the componentProps prop on the overlay.
         */

        Object.assign(el, userComponentProps);
        /**
         * Finally, append the component
         * inside of the overlay component.
         */

        BaseComponent.appendChild(el);
        yield new Promise(resolve => (0,_helpers_6e1e5b65_js__WEBPACK_IMPORTED_MODULE_1__.c)(el, resolve));
      } else if (BaseComponent.children.length > 0) {
        // If there is no component, then we need to create a new parent
        // element to apply the css classes to.
        const el = BaseComponent.ownerDocument && BaseComponent.ownerDocument.createElement('div');
        cssClasses.forEach(c => el.classList.add(c)); // Move each child from the original template to the new parent element.

        el.append(...BaseComponent.children); // Append the new parent element to the original parent element.

        BaseComponent.appendChild(el);
      }
      /**
       * Get the root of the app and
       * add the overlay there.
       */


      const app = document.querySelector('ion-app') || document.body;
      /**
       * Create a placeholder comment so that
       * we can return this component to where
       * it was previously.
       */

      Reference = document.createComment('ionic teleport');
      BaseComponent.parentNode.insertBefore(Reference, BaseComponent);
      app.appendChild(BaseComponent);
      return BaseComponent;
    });

    return function attachViewToDom(_x7, _x8) {
      return _ref2.apply(this, arguments);
    };
  }();

  const removeViewFromDom = () => {
    /**
     * Return component to where it was previously in the DOM.
     */
    if (BaseComponent && Reference) {
      Reference.parentNode.insertBefore(BaseComponent, Reference);
      Reference.remove();
    }

    return Promise.resolve();
  };

  return {
    attachViewToDom,
    removeViewFromDom
  };
};



/***/ }),

/***/ 81414:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-9a9aa7ec.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 71780:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-e3f61316.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ arrowBackSharp),
/* harmony export */   "b": () => (/* binding */ closeCircle),
/* harmony export */   "c": () => (/* binding */ chevronBack),
/* harmony export */   "d": () => (/* binding */ closeSharp),
/* harmony export */   "e": () => (/* binding */ searchSharp),
/* harmony export */   "f": () => (/* binding */ caretBackSharp),
/* harmony export */   "g": () => (/* binding */ arrowDown),
/* harmony export */   "h": () => (/* binding */ reorderTwoSharp),
/* harmony export */   "i": () => (/* binding */ chevronDown),
/* harmony export */   "j": () => (/* binding */ chevronForwardOutline),
/* harmony export */   "k": () => (/* binding */ ellipsisHorizontal),
/* harmony export */   "l": () => (/* binding */ chevronForward),
/* harmony export */   "m": () => (/* binding */ caretUpSharp),
/* harmony export */   "n": () => (/* binding */ caretDownSharp),
/* harmony export */   "o": () => (/* binding */ close),
/* harmony export */   "p": () => (/* binding */ menuOutline),
/* harmony export */   "q": () => (/* binding */ menuSharp),
/* harmony export */   "r": () => (/* binding */ reorderThreeOutline),
/* harmony export */   "s": () => (/* binding */ searchOutline)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
/* Ionicons v6.0.0, ES Modules */
const arrowBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>";
const arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
const caretBackSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>";
const caretDownSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>";
const caretUpSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>";
const chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
const chevronDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>";
const chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const chevronForwardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
const close = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>";
const closeCircle = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>";
const closeSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>";
const ellipsisHorizontal = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>";
const menuOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const menuSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>";
const reorderThreeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const reorderTwoSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>";
const searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
const searchSharp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>";




/***/ }),

/***/ 55979:
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/keyboard-808e4e15.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KEYBOARD_DID_CLOSE": () => (/* binding */ KEYBOARD_DID_CLOSE),
/* harmony export */   "KEYBOARD_DID_OPEN": () => (/* binding */ KEYBOARD_DID_OPEN),
/* harmony export */   "copyVisualViewport": () => (/* binding */ copyVisualViewport),
/* harmony export */   "keyboardDidClose": () => (/* binding */ keyboardDidClose),
/* harmony export */   "keyboardDidOpen": () => (/* binding */ keyboardDidOpen),
/* harmony export */   "keyboardDidResize": () => (/* binding */ keyboardDidResize),
/* harmony export */   "resetKeyboardAssist": () => (/* binding */ resetKeyboardAssist),
/* harmony export */   "setKeyboardClose": () => (/* binding */ setKeyboardClose),
/* harmony export */   "setKeyboardOpen": () => (/* binding */ setKeyboardOpen),
/* harmony export */   "startKeyboardAssist": () => (/* binding */ startKeyboardAssist),
/* harmony export */   "trackViewportChanges": () => (/* binding */ trackViewportChanges)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const KEYBOARD_DID_OPEN = 'ionKeyboardDidShow';
const KEYBOARD_DID_CLOSE = 'ionKeyboardDidHide';
const KEYBOARD_THRESHOLD = 150;
let previousVisualViewport = {};
let currentVisualViewport = {};
let keyboardOpen = false;
/**
 * This is only used for tests
 */
const resetKeyboardAssist = () => {
  previousVisualViewport = {};
  currentVisualViewport = {};
  keyboardOpen = false;
};
const startKeyboardAssist = (win) => {
  startNativeListeners(win);
  if (!win.visualViewport) {
    return;
  }
  currentVisualViewport = copyVisualViewport(win.visualViewport);
  win.visualViewport.onresize = () => {
    trackViewportChanges(win);
    if (keyboardDidOpen() || keyboardDidResize(win)) {
      setKeyboardOpen(win);
    }
    else if (keyboardDidClose(win)) {
      setKeyboardClose(win);
    }
  };
};
/**
 * Listen for events fired by native keyboard plugin
 * in Capacitor/Cordova so devs only need to listen
 * in one place.
 */
const startNativeListeners = (win) => {
  win.addEventListener('keyboardDidShow', ev => setKeyboardOpen(win, ev));
  win.addEventListener('keyboardDidHide', () => setKeyboardClose(win));
};
const setKeyboardOpen = (win, ev) => {
  fireKeyboardOpenEvent(win, ev);
  keyboardOpen = true;
};
const setKeyboardClose = (win) => {
  fireKeyboardCloseEvent(win);
  keyboardOpen = false;
};
/**
 * Returns `true` if the `keyboardOpen` flag is not
 * set, the previous visual viewport width equal the current
 * visual viewport width, and if the scaled difference
 * of the previous visual viewport height minus the current
 * visual viewport height is greater than KEYBOARD_THRESHOLD
 *
 * We need to be able to accommodate users who have zooming
 * enabled in their browser (or have zoomed in manually) which
 * is why we take into account the current visual viewport's
 * scale value.
 */
const keyboardDidOpen = () => {
  const scaledHeightDifference = (previousVisualViewport.height - currentVisualViewport.height) * currentVisualViewport.scale;
  return (!keyboardOpen &&
    previousVisualViewport.width === currentVisualViewport.width &&
    scaledHeightDifference > KEYBOARD_THRESHOLD);
};
/**
 * Returns `true` if the keyboard is open,
 * but the keyboard did not close
 */
const keyboardDidResize = (win) => {
  return keyboardOpen && !keyboardDidClose(win);
};
/**
 * Determine if the keyboard was closed
 * Returns `true` if the `keyboardOpen` flag is set and
 * the current visual viewport height equals the
 * layout viewport height.
 */
const keyboardDidClose = (win) => {
  return keyboardOpen && currentVisualViewport.height === win.innerHeight;
};
/**
 * Dispatch a keyboard open event
 */
const fireKeyboardOpenEvent = (win, nativeEv) => {
  const keyboardHeight = nativeEv ? nativeEv.keyboardHeight : win.innerHeight - currentVisualViewport.height;
  const ev = new CustomEvent(KEYBOARD_DID_OPEN, {
    detail: { keyboardHeight }
  });
  win.dispatchEvent(ev);
};
/**
 * Dispatch a keyboard close event
 */
const fireKeyboardCloseEvent = (win) => {
  const ev = new CustomEvent(KEYBOARD_DID_CLOSE);
  win.dispatchEvent(ev);
};
/**
 * Given a window object, create a copy of
 * the current visual and layout viewport states
 * while also preserving the previous visual and
 * layout viewport states
 */
const trackViewportChanges = (win) => {
  previousVisualViewport = Object.assign({}, currentVisualViewport);
  currentVisualViewport = copyVisualViewport(win.visualViewport);
};
/**
 * Creates a deep copy of the visual viewport
 * at a given state
 */
const copyVisualViewport = (visualViewport) => {
  return {
    width: Math.round(visualViewport.width),
    height: Math.round(visualViewport.height),
    offsetTop: visualViewport.offsetTop,
    offsetLeft: visualViewport.offsetLeft,
    pageTop: visualViewport.pageTop,
    pageLeft: visualViewport.pageLeft,
    scale: visualViewport.scale
  };
};




/***/ }),

/***/ 90530:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-163ed7fb.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 14,
        y2: 26,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 8,
    fn: (dur, index, total) => {
      const transform = `rotate(${(360 / total) * index + (index < (total / 2) ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-sharp': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-sharp-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 76792:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-a24ff1ad.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
/* harmony import */ var _home_mauro_Descargas_final_BridgeSD_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 74475);


/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0 ? Object.assign({
    'ion-color': true,
    [`ion-color-${color}`]: true
  }, cssClassMap) : cssClassMap;
};

const getClassList = classes => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(c => c != null).map(c => c.trim()).filter(c => c !== '');
  }

  return [];
};

const getClassMap = classes => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};

const SCHEME = /^[a-z][a-z0-9+\-.]*:/;

const openURL = /*#__PURE__*/function () {
  var _ref = (0,_home_mauro_Descargas_final_BridgeSD_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (url, ev, direction, animation) {
    if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
      const router = document.querySelector('ion-router');

      if (router) {
        if (ev != null) {
          ev.preventDefault();
        }

        return router.push(url, direction, animation);
      }
    }

    return false;
  });

  return function openURL(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();



/***/ }),

/***/ 46436:
/*!******************************************************!*\
  !*** ./src/app/inicio-comprador/catalogo.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogoService": () => (/* binding */ CatalogoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let CatalogoService = class CatalogoService {
    constructor() {
        this.productos = [
            {
                id: '1',
                title: 'Naranja valencia',
                descripcion: 'Naranja deliciosa del Carmen de Chucurí',
                cantidad: 10,
                unidadesRef: 'Canasta (11 kg cada una)',
                precio: 20000,
                precioSugerido: 30000,
                imageURL: 'https://aleluyamarket.com/wp-content/uploads/2021/06/Naranja-Valencia.jpg',
                comments: ['Naranjas deliciosas', 'Buen precio'],
                starts: [5, 4],
                nameVend: 'Maria'
            },
            {
                id: '2',
                title: 'Papa pastusa',
                descripcion: 'Papa pastusa deliciosa del Carmen de Chucurí',
                cantidad: 50,
                unidadesRef: 'Kilogramos',
                precio: 4000,
                precioSugerido: 4000,
                imageURL: 'https://lagranjafruver.com.co/wp-content/uploads/2020/12/papa-pastusa-pareja_1.jpg',
                comments: ['Papas deliciosas', 'Buen precio'],
                starts: [5, 5],
                nameVend: 'Maria'
            },
            {
                id: '3',
                title: 'Mandarina criolla',
                descripcion: 'Mandarina deliciosa del Carmen de Chucurí',
                cantidad: 10,
                unidadesRef: 'Canasta (13 kg cada una)',
                precio: 20000,
                precioSugerido: 32000,
                imageURL: 'https://fruvery.com.co/wp-content/uploads/2020/06/mandarina.jpg',
                comments: ['Es un poco costosa, pero vale la pena pagar por ellas'],
                starts: [5],
                nameVend: 'Juan Alberto Sanchez'
            },
            {
                id: '4',
                title: 'Cebolla junca',
                descripcion: 'Cebolla junca deliciosa del Carmen de Chucurí',
                cantidad: 50,
                unidadesRef: 'Kilogramos',
                precio: 4000,
                precioSugerido: 3500,
                imageURL: 'https://static.merqueo.com/images/products/large/fa56a8fd-b80a-4e9a-a542-fd73be0551fa.jpg',
                comments: [],
                starts: [],
                nameVend: 'Juan Alberto Sanchez'
            },
            {
                id: '5',
                title: 'Yuca',
                descripcion: 'Yuca deliciosa del Carmen de Chucurí',
                cantidad: 50,
                unidadesRef: 'Kilogramos',
                precio: 3000,
                precioSugerido: 3000,
                imageURL: 'https://vivecol.com.co/wp-content/uploads/2020/07/image165.png',
                comments: ['Deliciosa yuca'],
                starts: [4],
                nameVend: 'Juan Alberto Sanchez'
            }
        ];
    }
    getProductos() {
        return [...this.productos];
    }
    getProducto(productoId) {
        return Object.assign({}, this.productos.find(producto => producto.id === productoId));
    }
    // eslint-disable-next-line max-len
    addProducto(title, descripcion, cantidad, unidadesRef, precio, precioSugerido, imageURL, nameVend) {
        this.productos.push({
            title,
            descripcion,
            cantidad,
            unidadesRef,
            precio,
            precioSugerido,
            imageURL,
            comments: [],
            starts: [],
            nameVend,
            id: this.productos.length + 1 + ''
        });
    }
    deleteProducto(productoId) {
        this.productos = this.productos.filter(producto => producto.id !== productoId);
    }
    getCalificacion(productoId) {
        const prod = this.productos.find(producto => producto.id === productoId);
        let sum;
        sum = 0;
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < prod.starts.length; i++) {
            sum = sum + Number(prod.starts[i]);
        }
        return sum / prod.starts.length;
    }
};
CatalogoService.ctorParameters = () => [];
CatalogoService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CatalogoService);



/***/ }),

/***/ 91852:
/*!**********************************************************************!*\
  !*** ./src/app/inicio-comprador/detalles/detalles-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallesPageRoutingModule": () => (/* binding */ DetallesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles.page */ 97637);




const routes = [
    {
        path: '',
        component: _detalles_page__WEBPACK_IMPORTED_MODULE_0__.DetallesPage
    }
];
let DetallesPageRoutingModule = class DetallesPageRoutingModule {
};
DetallesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetallesPageRoutingModule);



/***/ }),

/***/ 93280:
/*!**************************************************************!*\
  !*** ./src/app/inicio-comprador/detalles/detalles.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallesPageModule": () => (/* binding */ DetallesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _detalles_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles-routing.module */ 91852);
/* harmony import */ var _detalles_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalles.page */ 97637);







let DetallesPageModule = class DetallesPageModule {
};
DetallesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detalles_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetallesPageRoutingModule
        ],
        declarations: [_detalles_page__WEBPACK_IMPORTED_MODULE_1__.DetallesPage]
    })
], DetallesPageModule);



/***/ }),

/***/ 97637:
/*!************************************************************!*\
  !*** ./src/app/inicio-comprador/detalles/detalles.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetallesPage": () => (/* binding */ DetallesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _detalles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detalles.page.html?ngResource */ 66390);
/* harmony import */ var _detalles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detalles.page.scss?ngResource */ 7153);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _catalogo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../catalogo.service */ 46436);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 95472);







let DetallesPage = class DetallesPage {
    constructor(activatedRoute, productosService, router, alertController, navCtrl) {
        this.activatedRoute = activatedRoute;
        this.productosService = productosService;
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            //redirect
            const recipeId = paramMap.get('productoId');
            this.producto = this.productosService.getProducto(recipeId);
            this.calific = this.productosService.getCalificacion(recipeId);
            console.log(this.producto);
        });
    }
};
DetallesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _catalogo_service__WEBPACK_IMPORTED_MODULE_2__.CatalogoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController }
];
DetallesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-detalles',
        template: _detalles_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detalles_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetallesPage);



/***/ }),

/***/ 2575:
/*!***********************************************************************!*\
  !*** ./src/app/productos/producto-add/producto-add-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoAddPageRoutingModule": () => (/* binding */ ProductoAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _producto_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-add.page */ 70457);




const routes = [
    {
        path: '',
        component: _producto_add_page__WEBPACK_IMPORTED_MODULE_0__.ProductoAddPage
    }
];
let ProductoAddPageRoutingModule = class ProductoAddPageRoutingModule {
};
ProductoAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductoAddPageRoutingModule);



/***/ }),

/***/ 70457:
/*!*************************************************************!*\
  !*** ./src/app/productos/producto-add/producto-add.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoAddPage": () => (/* binding */ ProductoAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _producto_add_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-add.page.html?ngResource */ 1665);
/* harmony import */ var _producto_add_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto-add.page.scss?ngResource */ 52246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productos.service */ 72913);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);







let ProductoAddPage = class ProductoAddPage {
    constructor(activatedRoute, router, productosService, alertController, navCtrl) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.productosService = productosService;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.infoUser = JSON.parse(localStorage.getItem('usuario'));
    }
    ngOnInit() {
    }
    saveNewProducto(title, imageURL, descripcion, cantidad, unidadesRef, precio) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Estás seguro de añadir el producto?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Añadir',
                        handler: () => {
                            const precioSugerido = precio.value * 1.05;
                            const vendedor = this.infoUser.nombre;
                            // eslint-disable-next-line max-len
                            this.productosService.addProducto(title.value, descripcion.value, cantidad.value, unidadesRef.value, precio.value, precioSugerido, imageURL.value, vendedor);
                            this.router.navigate(['/menu/productos']);
                        }
                    }
                ]
            });
            yield alert.present();
            return;
        });
    }
};
ProductoAddPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _productos_service__WEBPACK_IMPORTED_MODULE_2__.ProductosService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
ProductoAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-producto-add',
        template: _producto_add_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_producto_add_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductoAddPage);



/***/ }),

/***/ 3874:
/*!*****************************************************************************!*\
  !*** ./src/app/productos/producto-detail/producto-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoDetailPageRoutingModule": () => (/* binding */ ProductoDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _producto_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-detail.page */ 2187);




const routes = [
    {
        path: '',
        component: _producto_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductoDetailPage
    }
];
let ProductoDetailPageRoutingModule = class ProductoDetailPageRoutingModule {
};
ProductoDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductoDetailPageRoutingModule);



/***/ }),

/***/ 9297:
/*!*********************************************************************!*\
  !*** ./src/app/productos/producto-detail/producto-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoDetailPageModule": () => (/* binding */ ProductoDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _producto_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-detail-routing.module */ 3874);
/* harmony import */ var _producto_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto-detail.page */ 2187);







let ProductoDetailPageModule = class ProductoDetailPageModule {
};
ProductoDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _producto_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductoDetailPageRoutingModule
        ],
        declarations: [_producto_detail_page__WEBPACK_IMPORTED_MODULE_1__.ProductoDetailPage]
    })
], ProductoDetailPageModule);



/***/ }),

/***/ 2187:
/*!*******************************************************************!*\
  !*** ./src/app/productos/producto-detail/producto-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductoDetailPage": () => (/* binding */ ProductoDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _producto_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./producto-detail.page.html?ngResource */ 97836);
/* harmony import */ var _producto_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./producto-detail.page.scss?ngResource */ 79610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _productos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../productos.service */ 72913);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);







let ProductoDetailPage = class ProductoDetailPage {
    constructor(activatedRoute, productosService, router, alertController, navCtrl) {
        this.activatedRoute = activatedRoute;
        this.productosService = productosService;
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            //redirect
            const recipeId = paramMap.get('productoId');
            this.producto = this.productosService.getProducto(recipeId);
            this.calific = this.productosService.getCalificacion(recipeId);
        });
    }
    deleteProducto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Estás seguro de querer eliminar el producto?',
                message: 'Sé cuidadoso',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Eliminar',
                        handler: () => {
                            this.productosService.deleteProducto(this.producto.id);
                            this.navCtrl.navigateRoot('/productos');
                        }
                    }
                ]
            });
            yield alert.present();
            return;
        });
    }
};
ProductoDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _productos_service__WEBPACK_IMPORTED_MODULE_2__.ProductosService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
ProductoDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-producto-detail',
        template: _producto_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_producto_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductoDetailPage);



/***/ }),

/***/ 72913:
/*!************************************************!*\
  !*** ./src/app/productos/productos.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductosService": () => (/* binding */ ProductosService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let ProductosService = class ProductosService {
    constructor() {
        this.productos = [
            {
                id: '1',
                title: 'Naranja valencia',
                descripcion: 'Naranja deliciosa del Carmen de Chucurí',
                cantidad: 10,
                unidadesRef: 'Canasta (11 kg cada una)',
                precio: 20000,
                precioSugerido: 30000,
                imageURL: 'https://aleluyamarket.com/wp-content/uploads/2021/06/Naranja-Valencia.jpg',
                comments: ['Naranjas deliciosas', 'Buen precio'],
                starts: [5, 4],
                nameVend: 'Maria'
            },
            {
                id: '2',
                title: 'Papa pastusa',
                descripcion: 'Papa pastusa deliciosa del Carmen de Chucurí',
                cantidad: 50,
                unidadesRef: 'Kilogramos',
                precio: 4000,
                precioSugerido: 4000,
                imageURL: 'https://lagranjafruver.com.co/wp-content/uploads/2020/12/papa-pastusa-pareja_1.jpg',
                comments: ['Papas deliciosas', 'Buen precio'],
                starts: [5, 5],
                nameVend: 'Maria'
            },
            {
                id: '3',
                title: 'Mandarina criolla',
                descripcion: 'Mandarina deliciosa del Carmen de Chucurí',
                cantidad: 10,
                unidadesRef: 'Canasta (13 kg cada una)',
                precio: 20000,
                precioSugerido: 32000,
                imageURL: 'https://fruvery.com.co/wp-content/uploads/2020/06/mandarina.jpg',
                comments: ['Es un poco costosa, pero vale la pena pagar por ellas'],
                starts: [5],
                nameVend: 'Juan Alberto Sanchez'
            },
            {
                id: '4',
                title: 'Cebolla junca',
                descripcion: 'Cebolla junca deliciosa del Carmen de Chucurí',
                cantidad: 50,
                unidadesRef: 'Kilogramos',
                precio: 4000,
                precioSugerido: 3500,
                imageURL: 'https://static.merqueo.com/images/products/large/fa56a8fd-b80a-4e9a-a542-fd73be0551fa.jpg',
                comments: [],
                starts: [],
                nameVend: 'Juan Alberto Sanchez'
            },
            {
                id: '5',
                title: 'Yuca',
                descripcion: 'Yuca deliciosa del Carmen de Chucurí',
                cantidad: 50,
                unidadesRef: 'Kilogramos',
                precio: 3000,
                precioSugerido: 3000,
                imageURL: 'https://vivecol.com.co/wp-content/uploads/2020/07/image165.png',
                comments: ['Deliciosa yuca'],
                starts: [4],
                nameVend: 'Juan Alberto Sanchez'
            }
        ];
    }
    getProductos() {
        return [...this.productos];
    }
    getProducto(productoId) {
        return Object.assign({}, this.productos.find(producto => producto.id === productoId));
    }
    // eslint-disable-next-line max-len
    addProducto(title, descripcion, cantidad, unidadesRef, precio, precioSugerido, imageURL, nameVend) {
        this.productos.push({
            title,
            descripcion,
            cantidad,
            unidadesRef,
            precio,
            precioSugerido,
            imageURL,
            comments: [],
            starts: [],
            nameVend,
            id: this.productos.length + 1 + ''
        });
    }
    deleteProducto(productoId) {
        this.productos = this.productos.filter(producto => producto.id !== productoId);
    }
    getCalificacion(productoId) {
        const prod = this.productos.find(producto => producto.id === productoId);
        let sum;
        sum = 0;
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < prod.starts.length; i++) {
            sum = sum + Number(prod.starts[i]);
        }
        return sum / prod.starts.length;
    }
};
ProductosService.ctorParameters = () => [];
ProductosService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ProductosService);



/***/ }),

/***/ 62178:
/*!******************************************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitud-detail/solicitud-detail-routing.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudDetailPageRoutingModule": () => (/* binding */ SolicitudDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _solicitud_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitud-detail.page */ 56801);




const routes = [
    {
        path: '',
        component: _solicitud_detail_page__WEBPACK_IMPORTED_MODULE_0__.SolicitudDetailPage
    }
];
let SolicitudDetailPageRoutingModule = class SolicitudDetailPageRoutingModule {
};
SolicitudDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SolicitudDetailPageRoutingModule);



/***/ }),

/***/ 68173:
/*!**********************************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitud-detail/solicitud-detail.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudDetailPageModule": () => (/* binding */ SolicitudDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 31777);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _solicitud_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitud-detail-routing.module */ 62178);
/* harmony import */ var _solicitud_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitud-detail.page */ 56801);







let SolicitudDetailPageModule = class SolicitudDetailPageModule {
};
SolicitudDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _solicitud_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.SolicitudDetailPageRoutingModule
        ],
        declarations: [_solicitud_detail_page__WEBPACK_IMPORTED_MODULE_1__.SolicitudDetailPage]
    })
], SolicitudDetailPageModule);



/***/ }),

/***/ 56801:
/*!********************************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitud-detail/solicitud-detail.page.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudDetailPage": () => (/* binding */ SolicitudDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _solicitud_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitud-detail.page.html?ngResource */ 16664);
/* harmony import */ var _solicitud_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./solicitud-detail.page.scss?ngResource */ 63168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 51109);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 65485);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 95472);
/* harmony import */ var _solicitudes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../solicitudes.service */ 77762);







let SolicitudDetailPage = class SolicitudDetailPage {
    constructor(solicitudesService, router, alertController, navCtrl) {
        this.solicitudesService = solicitudesService;
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    deleteSolicitud() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Estás seguro de querer eliminar la solicitud?',
                message: 'Sé cuidadoso',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Eliminar',
                        handler: () => {
                            this.solicitudesService.deleteSolicitud(this.solicitud.id);
                            this.navCtrl.navigateRoot('/productos');
                        }
                    }
                ]
            });
            yield alert.present();
            return;
        });
    }
    // eslint-disable-next-line max-len
    guardar(id, cliente, direccion, producto, cantidad, unidadesRef, precio, total, imageURL, fecha) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¿Estás seguro de aceptar solicitud?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Aceptar',
                        handler: () => {
                            this.solicitudesService.addFecha(id, fecha.toString());
                            // eslint-disable-next-line max-len
                            this.solicitudesService.guardarEntrega(cliente, direccion, producto, cantidad, unidadesRef, precio, total, imageURL, fecha.toString());
                            this.router.navigate(['/menu/solicitudes-vendedor']);
                        }
                    }
                ]
            });
            yield alert.present();
            return;
        });
    }
};
SolicitudDetailPage.ctorParameters = () => [
    { type: _solicitudes_service__WEBPACK_IMPORTED_MODULE_2__.SolicitudesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
SolicitudDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-solicitud-detail',
        template: _solicitud_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_solicitud_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SolicitudDetailPage);



/***/ }),

/***/ 77762:
/*!*************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitudes.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudesService": () => (/* binding */ SolicitudesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 48163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 51109);


let SolicitudesService = class SolicitudesService {
    constructor() {
        this.solicitudes = [
            {
                id: '1',
                cliente: 'Marta',
                direccion: 'Cra 28 C #34-56, Bucaramanga',
                producto: 'Papa pastusa',
                cantidad: 10,
                unidadesRef: 'Kilogramos',
                precio: 4000,
                total: 10 * 4000,
                imageURL: 'https://lagranjafruver.com.co/wp-content/uploads/2020/12/papa-pastusa-pareja_1.jpg',
                fechaDespacho: null,
            },
            {
                id: '3',
                cliente: 'Marta',
                direccion: 'Cra 28 C #34-56, Bucaramanga',
                producto: 'Mandarina criolla',
                cantidad: 5,
                unidadesRef: 'Canasta (13 kg cada una)',
                precio: 20000,
                total: 5 * 20000,
                imageURL: 'https://fruvery.com.co/wp-content/uploads/2020/06/mandarina.jpg',
                fechaDespacho: null,
            }
        ];
    }
    getSolicitudes() {
        return [...this.solicitudes];
    }
    getsolicitud(solicitudId) {
        return Object.assign({}, this.solicitudes.find(solicitud => solicitud.id === solicitudId));
    }
    // eslint-disable-next-line max-len
    deleteSolicitud(solicitudId) {
        this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id !== solicitudId);
    }
    addFecha(solicitudId, fecha) {
        this.fechasDespacho[solicitudId + 0] = fecha;
    }
    // eslint-disable-next-line max-len
    guardarEntrega(cliente, direccion, producto, cantidad, unidadesRef, precio, total, imageURL, fechaDespacho) {
        this.entregas.push({
            cliente,
            direccion,
            producto,
            cantidad,
            unidadesRef,
            precio,
            total,
            imageURL,
            fechaDespacho,
            id: this.solicitudes.length + 1 + ''
        });
    }
};
SolicitudesService.ctorParameters = () => [];
SolicitudesService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SolicitudesService);



/***/ }),

/***/ 7153:
/*!*************************************************************************!*\
  !*** ./src/app/inicio-comprador/detalles/detalles.page.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "ion-no-padding {\n  background: #74635B;\n  color: #ffffff;\n}\n\n.info {\n  background: #ffffff;\n}\n\n.textCatalago0 {\n  color: #311C13;\n  font-size: 13px;\n}\n\n.textCatalago1 {\n  color: #311C13;\n  font-size: 18px;\n}\n\n.textCatalago2 {\n  color: #311C13;\n  font-size: 20px;\n}\n\n.espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFsbGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJkZXRhbGxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbm8tcGFkZGluZyB7XG4gIGJhY2tncm91bmQ6ICM3NDYzNUI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW5mb3tcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLnRleHRDYXRhbGFnbzB7XG4gIGNvbG9yOiAjMzExQzEzO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50ZXh0Q2F0YWxhZ28xe1xuICBjb2xvcjogIzMxMUMxMztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGV4dENhdGFsYWdvMntcbiAgY29sb3I6ICMzMTFDMTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmVzcGFjaW81e1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuIl19 */";

/***/ }),

/***/ 52246:
/*!**************************************************************************!*\
  !*** ./src/app/productos/producto-add/producto-add.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "#esquina_t_r {\n  position: absolute;\n  right: 4px;\n  bottom: 2px;\n}\n\n.espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 60px;\n}\n\n.card {\n  background: #c9bdb6;\n  height: 100%;\n}\n\n.texto1 {\n  font-size: 20px;\n  color: #362D29;\n  margin-left: 20px;\n}\n\n.input {\n  font-size: 16px;\n  color: #362D29;\n  background: #e0dcd7;\n  border-radius: 5px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n\n.input1 {\n  font-size: 16px;\n  color: #362D29;\n  background: #e0dcd7;\n  border-radius: 5px;\n  margin-left: 18px;\n  width: 360px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLWFkZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRUYiLCJmaWxlIjoicHJvZHVjdG8tYWRkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlc3F1aW5hX3RfcntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNHB4O1xuICBib3R0b206IDJweDtcbn1cblxuLmVzcGFjaW81e1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjYzliZGI2O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50ZXh0bzF7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMzNjJEMjk7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uaW5wdXR7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzNjJEMjk7XG4gIGJhY2tncm91bmQ6ICNlMGRjZDc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaW5wdXQxe1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzYyRDI5O1xuICBiYWNrZ3JvdW5kOiAjZTBkY2Q3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICB3aWR0aDogMzYwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 79610:
/*!********************************************************************************!*\
  !*** ./src/app/productos/producto-detail/producto-detail.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".ion-no-padding {\n  background: #74635B;\n  color: #ffffff;\n}\n\n.info {\n  background: #ffffff;\n}\n\n.textCatalago0 {\n  color: #311C13;\n  font-size: 13px;\n}\n\n.textCatalago1 {\n  color: #311C13;\n  font-size: 18px;\n}\n\n.textCatalago2 {\n  color: #311C13;\n  font-size: 20px;\n}\n\n.espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3RvLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoicHJvZHVjdG8tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pb24tbm8tcGFkZGluZyB7XG4gIGJhY2tncm91bmQ6ICM3NDYzNUI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uaW5mb3tcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLnRleHRDYXRhbGFnbzB7XG4gIGNvbG9yOiAjMzExQzEzO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50ZXh0Q2F0YWxhZ28xe1xuICBjb2xvcjogIzMxMUMxMztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGV4dENhdGFsYWdvMntcbiAgY29sb3I6ICMzMTFDMTM7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmVzcGFjaW81e1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xufVxuIl19 */";

/***/ }),

/***/ 63168:
/*!*********************************************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitud-detail/solicitud-detail.page.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".ion-no-padding {\n  margin-left: 10px;\n  color: black;\n}\n\n.espacio5 {\n  margin: 0px;\n  padding: 0px;\n  font-size: 25px;\n  text-align: center;\n}\n\n.espacio2 {\n  display: inline-block;\n  margin: 0px;\n  font-size: 30px;\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbGljaXR1ZC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0oiLCJmaWxlIjoic29saWNpdHVkLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLW5vLXBhZGRpbmcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uZXNwYWNpbzV7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXNwYWNpbzJ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn0iXX0= */";

/***/ }),

/***/ 66390:
/*!*************************************************************************!*\
  !*** ./src/app/inicio-comprador/detalles/detalles.page.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/inicio-comprador\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Detalles del poducto</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteProducto()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col style=\"margin-top: 5px; margin-left: 20px; margin-bottom: 5px; font-size: 21px;\">\n        {{calific}} <ion-icon name=\"star\"></ion-icon>\n      </ion-col>\n      <ion-col style=\"margin-top: 5px; margin-bottom: 5px; font-size: 21px;\">\n        {{producto.title}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"producto.imageURL\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"info\">\n      <ion-col style=\"margin-left: 30px;\">\n        <h3 class=\"textCatalago0\">{{producto.descripcion}}</h3>\n        <h3 class=\"textCatalago1\">Cantidad disponible:</h3>\n        <h3 class=\"textCatalago2\">{{producto.cantidad}} {{producto.unidadesRef}}</h3>\n      </ion-col>\n      <ion-col>\n        <img style=\"margin-top: 30px; margin-left: 50px;\" src = \"assets/icon/bocina.png\"/>\n        <h3 class=\"textCatalago0\" style=\"text-align: center;\">Pulsa para escuchar \\n  descripción</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"info\">\n      <ion-col style=\"margin-left: 30px;\">\n        <h3 class=\"textCatalago1\">Precio:</h3>\n        <h3 class=\"textCatalago2\">${{producto.precio}}</h3>\n\n        <h3 class=\"textCatalago1\">Precio sugerido:</h3>\n        <h3 class=\"textCatalago2\">${{producto.precioSugerido}}</h3>\n      </ion-col>\n      <ion-col style=\"margin-top: 60px; text-align: center;\">\n        <ion-button color=\"dark\" [routerLink]=\"['/registro']\">Editar</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"text-align: center;\">\n      <ion-col>\n        <h2 class=\"textCatalago2\" style=\"color: white; margin:auto; margin-top: 30px; margin-bottom: 20px;\">Comentarios</h2>\n        <ion-textarea disabled style=\"margin: auto; width: 360px;\">\n          <ion-list *ngIf=\"producto.comments && producto.comments.length>0; else noComments\">\n            <ion-item *ngFor=\"let comment of producto.comments; let indexOfelement=index;\">\n              {{comment}} <ion-icon slot=\"end\" name=\"star\"></ion-icon><ion-text slot=\"end\">{{producto.starts[indexOfelement]}}</ion-text>\n            </ion-item>\n          </ion-list>\n       </ion-textarea>\n        <ng-template #noComments>\n          <ion-text>\n            <p class=\"ion-text-center\">No hay comentarios aún</p>\n          </ion-text>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 1665:
/*!**************************************************************************!*\
  !*** ./src/app/productos/producto-add/producto-add.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/productos\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Añadir poducto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row class=\"card\">\n    <ion-col style=\"margin-top: 20px;\">\n      <ion-label class=\"texto1\">Producto:</ion-label>\n      <ion-item color=\"#e0dcd7\" lines=\"none\">\n        <ion-select type=\"text\" class=\"input\" style=\"width:100%;\" placeholder=\"Seleccione un producto\" #title>\n          <ion-select-option value=\"Cebolla cabezona\">Cebolla cabezona</ion-select-option>\n          <ion-select-option value=\"Cebolla larga\">Cebolla larga</ion-select-option>\n          <ion-select-option value=\"Mandarina criolla\">Mandarina criolla</ion-select-option>\n          <ion-select-option value=\"Mandarina reina\">Mandarina reina</ion-select-option>\n          <ion-select-option value=\"Naranja valencia\">Naranja valencia</ion-select-option>\n          <ion-select-option value=\"Naranja tangelo\">Naranja tangelo</ion-select-option>\n          <ion-select-option value=\"Papa pastusa\">Papa pastusa</ion-select-option>\n          <ion-select-option value=\"Papa criolla\">Papa criolla</ion-select-option>\n          <ion-select-option value=\"Yuca\">Yuca</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-label class=\"texto1\">Imagen:</ion-label>\n      <ion-input class=\"input1\" type=\"text\" placeholder=\"http:://imagewebsite.com\" #imageURL></ion-input>\n      <ion-label class=\"texto1\">Descripción:</ion-label>\n      <ion-textarea class=\"input1\" placeholder=\"Agregar descripción\" #descripcion></ion-textarea>\n      <ion-label class=\"texto1\">Cantidad:</ion-label>\n      <ion-input class=\"input1\" type=\"number\" placeholder=\"25\" #cantidad></ion-input>\n      <ion-item color=\"#e0dcd7\" lines=\"none\">\n        <ion-select type=\"text\" class=\"input\" style=\"width:100%;\" placeholder=\"Seleccione las unidades de cantidad\" #unidadesRef>\n          <ion-select-option value=\"Kilogramos\">Kilogramos</ion-select-option>\n          <ion-select-option value=\"Canasta (11 kg cada una)\">Canasta (11 kg cada una)</ion-select-option>\n          <ion-select-option value=\"Canasta (11 kg cada una)\">Canasta (11 kg cada una)</ion-select-option>\n          <ion-select-option value=\"Bulto (50 kg cada uno)\">Bulto (50 kg cada uno)</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-label class=\"texto1\">Precio:</ion-label>\n      <ion-input class=\"input1\" type=\"number\" placeholder=\"1500\" #precio></ion-input>\n\n      <div style=\"padding-top:50px; text-align: center;\">\n        <ion-button color=\"secondary\" (click)=\"saveNewProducto(title, imageURL, descripcion, cantidad, unidadesRef, precio)\" style=\"font-family: 'Arial'; font-size:medium; width: 300px; height:50px;\">GUARDAR</ion-button>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n";

/***/ }),

/***/ 97836:
/*!********************************************************************************!*\
  !*** ./src/app/productos/producto-detail/producto-detail.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/menu/productos\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Visualizar poducto</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteProducto()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col style=\"margin-top: 5px; margin-left: 20px; margin-bottom: 5px; font-size: 21px;\">\n        {{calific}} <ion-icon name=\"star\"></ion-icon>\n      </ion-col>\n      <ion-col style=\"margin-top: 5px; margin-bottom: 5px; font-size: 21px;\">\n        {{producto.title}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"producto.imageURL\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"info\">\n      <ion-col style=\"margin-left: 30px;\">\n        <h3 class=\"textCatalago0\">{{producto.descripcion}}</h3>\n        <h3 class=\"textCatalago1\">Cantidad disponible:</h3>\n        <h3 class=\"textCatalago2\">{{producto.cantidad}} {{producto.unidadesRef}}</h3>\n      </ion-col>\n      <ion-col>\n        <img style=\"margin-top: 30px; margin-left: 50px;\" src = \"assets/icon/bocina.png\"/>\n        <h3 class=\"textCatalago0\" style=\"text-align: center;\">Pulsa para escuchar \\n  descripción</h3>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"info\">\n      <ion-col style=\"margin-left: 30px;\">\n        <h3 class=\"textCatalago1\">Precio:</h3>\n        <h3 class=\"textCatalago2\">${{producto.precio}}</h3>\n\n        <h3 class=\"textCatalago1\">Precio sugerido:</h3>\n        <h3 class=\"textCatalago2\">${{producto.precioSugerido}}</h3>\n      </ion-col>\n      <ion-col style=\"margin-top: 60px; text-align: center;\">\n        <ion-button color=\"dark\" [routerLink]=\"['/registro']\">Editar</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row style=\"text-align: center;\">\n      <ion-col>\n        <h2 class=\"textCatalago2\" style=\"color: white; margin:auto; margin-top: 30px; margin-bottom: 20px;\">Comentarios</h2>\n        <ion-textarea disabled style=\"margin: auto; width: 360px;\">\n          <ion-list *ngIf=\"producto.comments && producto.comments.length>0; else noComments\">\n            <ion-item *ngFor=\"let comment of producto.comments; let indexOfelement=index;\">\n              {{comment}} <ion-icon slot=\"end\" name=\"star\"></ion-icon><ion-text slot=\"end\">{{producto.starts[indexOfelement]}}</ion-text>\n            </ion-item>\n          </ion-list>\n       </ion-textarea>\n        <ng-template #noComments>\n          <ion-text>\n            <p class=\"ion-text-center\">No hay comentarios aún</p>\n          </ion-text>\n        </ng-template>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ }),

/***/ 16664:
/*!*********************************************************************************************!*\
  !*** ./src/app/solicitudes-vendedor/solicitud-detail/solicitud-detail.page.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-icon class=\"espacio2\" [routerLink]=\"['/menu/productos']\"  name=\"close-circle\"></ion-icon>\n    </ion-buttons>\n    <ion-title class=\"espacio5\">Visualizar solicitud</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteSolicitud()\">\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col style=\"margin-top: 5px; margin-left: 20px; margin-bottom: 5px; font-size: 21px;\">\n        <ion-icon name=\"person-circle-outline\" style=\"zoom:2.0;\"></ion-icon>\n      </ion-col>\n      <ion-col style=\"margin-top: 5px; margin-bottom: 5px; font-size: 21px;\">\n        <p>Cliente:</p>\n        <p>{{solicitud.cliente}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-icon name=\"location\"></ion-icon><ion-label>{{solicitud.direccion}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <p>PRODUCTO: {{solicitud.producto}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"solicitud.imageURL\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <p>Cantidad:</p>\n        <p>{{solicitud.cantidad}}</p>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\">\n        <p>Unidad:</p>\n        <p>{{solicitud.unidadesRef}}</p>\n      </ion-col>\n      <ion-col class=\"ion-no-padding\">\n        <p>Valor unitario:</p>\n        <p>${{solicitud.precio}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <p>TOTAL: {{solicitud.total}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <p>FECHA DESPACHO:</p>\n        <ion-datetime value=\"2012-12-15T13:47:20.789\" #fecha></ion-datetime>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <div style=\"padding-top:50px; margin-left: 40px;\">\n        <ion-button color=\"secondary\" (click)=\"guardar(solicitud.id, solicitud.cliente, solicitud.direccion, solicitud.producto,\n        solicitud.cantidad,\n        solicitud.unidadesRef,\n        solicitud.precio,\n        solicitud.total,\n        solicitud.imageURL, fecha)\" style=\"font-family: 'Arial'; font-size:medium; width: 300px; height:50px;\">ACEPTAR</ion-button>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=common.js.map