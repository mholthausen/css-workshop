/* global console, window, document */
/**
 * A Login Component
 * @desc generates a login form with email, password for an user account login.
 *       Includes event listener and handler.
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/11/19
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */


!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let componentElementsList = [{
      element: 'form',
      context: 'aside',
      attributes: {
        id: 'form-login',
        method: 'get',
        action: 'login.php'
      }
    }, {
      element: 'fieldset',
      context: 'form'
    }, {
      element: 'legend',
      content: 'enter your account',
      context: 'fieldset'
    }, {
      element: 'label',
      content: 'Email',
      context: 'fieldset',
      attributes: {
        for: 'login-email'
      }
    }, {
      element: 'input',
      context: 'fieldset',
      attributes: {
        type: 'email',
        id: 'login-email'
      }
    },
    {
      element: 'label',
      context: 'fieldset',
      content: 'Password',
      attributes: {
        for: 'login-password'
      }
    },
    {
      element: 'input',
      context: 'fieldset',
      attributes: {
        type: 'password',
        id: 'login-password'
      }
    },
    {
      element: 'input',
      context: 'fieldset',
      attributes: {
        type: 'checkbox',
        id: 'login-keep-password',
        class: 'checkbox'
      }
    },
    {
      element: 'label',
      content: 'keep password',
      context: 'fieldset',
      attributes: {
        for: 'login-keep-password'
      }
    },
    {
      context: 'fieldset',
      element: 'button',
      content: 'log in',
      attributes: {
        type: 'submit'
      }
    }
  ];

  // METHODS
  function createElement(element) {
    let
      _element = document.createElement(element);
    return _element;
  }

  function setContext(context) {
    let _context = document.querySelector(context);
    return _context;
  }

  function appendChild(element, context) {
    let
      _element = element || undefined,
      _context = context || undefined;

    try {
      _context.appendChild(_element);
    } catch (error) {
      console.log(error);
    }
  }

  function setAttributes(element, attributes) {
    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }
  }

  function setContent(element, content) {
    let
      _element = element || undefined,
      _content = document.createTextNode(content) || undefined;

    if (!content || !element) return false;

    element.appendChild(_content);
    return true;
  }

  /* TODO use local scope namespaces */
  function createComponent() {
    for (let i = 0; i < componentElementsList.length; i += 1) {
      let
        _element, _context,
        element = componentElementsList[i].element,
        context = componentElementsList[i].context,
        attributes = componentElementsList[i].attributes,
        content = componentElementsList[i].content;

      _element = createElement(element);
      _context = setContext(context);

      if (attributes) {
        setAttributes(_element, attributes);
      }


      setContent(_element, content);

      try {
        appendChild(_element, _context);
      } catch (error) {
        console.log(error);
      }

    }
  };

  function main() {
    createComponent();
  };

  // CONTROL
  // window.onload = function () {}
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());