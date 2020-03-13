# Willkommen zu Javascript für Fortgeschrittene
## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Foliensatz
Es gibt mehrere Foliensätze zu unserem Seminar und Workshop im Verzeichnis `docs`: **HTML kompakt.pdf**, **CSS - kompakt.pdf**, **Javascript kompakt.pdf**. Dort finden Sie zum Nachlesen, was während Seminars erläutert wird plus viel Zusatzmaterial. Der Foliensatz wird ggf. aktualisiert, wenn wir bis zum Ende Seminars Inhalte umstellen. Er steht Ihnen anschließend unter der MIT Lizenz zur freien Verfügung.

## Inhalte für heute
### Details
- this
- immutables, Absichern von Objekten und Properties
- Arrow-Function
- indexDb (@see links)
- Erstellen von Objekten mit Object.create()
- Neue Array-Methoden

### Patterns
- Method-Chaining
- Closures (@see links)
- Factory Pattern (@see links)
- Singleton richtig erstellen (@see links)
- Observer-Pattern verstehen (@see links)
- 
### Meta
- Projekt-Initialisierung mit npm
- Module: import / export
- Packaging und Deployment mit npm und Webpack
- Debugging im Browser
- Wiederverwendbarkeit
- Cross-Browser-Applikationen mit Polyfills
- Automatisieren von Aufgaben (Grunt)
  
## Content Table
### JavaScript Roundup -  Der richtige Start
- :white_check_mark: Datentypen und Operatoren
- :white_check_mark: Scoping und Context
- :white_check_mark: Hoisting vermeiden
- :white_check_mark: Code Kapselung mit IIFE
- :white_check_mark: Funktionsweise der JS-Interpreter
### Besseren JavaScript-Code entwerfen
- :white_check_mark: Konventionen einhalten mit JSLint und ESLint
- :white_check_mark: Dokumentieren mit JSDoc
- :white_check_mark: Einführung in Unit Tests
### Objekt Orientiertes JavaScript (OOJS)
- :white_check_mark: Constructor Pattern
- :white_check_mark: Methoden hinzufügen mit dem Protoype Pattern
- :white_check_mark: Vererbung durch Combination Inheritance
### ECMAScript 5 - neue Möglichkeiten
### ES 6/7 bzw. ECMAScript 2015/2016
- :white_check_mark: Sichtbarkeit von Variablen in ES6
- :white_check_mark: Class-Begriff
### Asynchrones JavaScript
- :white_check_mark: Promises
- ~~Observables mit ReactiveX~~
### Moderne Architektur für JavaScript Applikationen
- :white_check_mark: Modul erstellen 
### Modulare JavaScript Patterns
- :white_check_mark: Modernes JavaScript in älteren Browsern mit Babel und TypeScript

## Links

### Links zu Javascript
#### Allgemein
- [Javascript Referenz von Mozilla](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference)
- [ES Spezifikation](https://tc39.es/ecma262/)
- [Eloquent JS](https://eloquentjavascript.net/)
- [You don't know JS](https://github.com/getify/You-Dont-Know-JS)

#### Tools
- [Kompatibilitätsliste für ES6](https://kangax.github.io/compat-table/es6/)
- [require.js](https://requirejs.org/)

#### Spotlights
- [indexDb](https://javascript.info/indexeddb)
- [AJAX mit formData](https://thoughtbot.com/blog/ridiculously-simple-ajax-uploads-with-formdata)
- [Promises verwenden](https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Using_promises)
- [Syncron oder asyncron?](https://stackoverflow.com/questions/15141118/are-javascript-functions-asynchronous)
- [Immutable](https://dev.to/glebec/four-ways-to-immutability-in-javascript-3b3l)
- [this, bind, call, apply](https://www.digitalocean.com/community/conceptual_articles/understanding-this-bind-call-and-apply-in-javascript)
- [singleton](https://www.sitepoint.com/javascript-design-patterns-singleton/)
- [factory pattern](https://medium.com/@SntsDev/the-factory-pattern-in-js-es6-78f0afad17e9)
- [observer pattern](https://www.sitepoint.com/javascript-design-patterns-observer-pattern/)
- [closures](https://developer.mozilla.org/de/docs/Web/JavaScript/Closures)

#### Events
- [Touch Events mit hammer.js](https://hammerjs.github.io/)
- [Touch events mit JS](https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/touches)
- [Ambient Light API](https://developer.mozilla.org/en-US/docs/Web/API/Ambient_Light_Events)

### Weiteres
- [html5Test.com](http://html5test.com/index.html)
- [Can i Use?](https://caniuse.com/)
- [MIT License](https://opensource.org/licenses/MIT)
- [Cost of Defect](http://thklein.com/de_DE/cost-of-defect/)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

## Visual Studio Code Snippets
### Javascript Snippets

- The Function Comment
- The JS Docblock Comment
- The IIFE Pattern
- The Module Block Pattern
  
```json
{
	"function documentation block": {
		"prefix": "function comment",
		"description": "A comment block for functions",
		"body": [
			"/** $1",
			" *",
			" * @version v1.0.0",
			" * @since $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
			" * @callback namepath",
			" * @param {type} desc",
			" * @returns {void}",
			" */",
			"$2"
		]
	},
	"page documention block": {
		"prefix": "docblock",
		"description": "The docblock comment for Javascript",
		"body": [
			"/** $1",
			"  *",
			"  *  @desc $2",
			"  *",
			"  * @package Webapplication",
			"  * @module $3",
			"  * @author Michael <michael.reichart@gfu.net>",
			"  * @version v1.0.0",
			"  * @since $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
			"  * @see i.e. inspired by ... {link to}",
			"  * @license MIT {https://opensource.org/licenses/MIT}",
			"  * @copyright (c) $CURRENT_YEAR Michael Reichart, Cologne",
			"  */",
			"$4"
		]
	},
	"IIFE Pattern": {
        "prefix": "iife",
        "description": "Immediate invoked function expression",
		"body": [
			"!(function () {",
			"'use strict';",
			"//- - - - - - - - - -",
			"$1",
			"//- - - - - - - - - -",
			"}());"
		]
	},
	"Module Block Pattern": {
        "prefix": "module block pattern",
        "description": "Immediate invoked function expression with publishing in window",
		"body": [
			"!(function () {",
			"'use strict';",
			"// - - - - - - - - - -",
			"// DECLARATION",
			"// - - - - -",
			"$1",
			"",
			"// - - - - -",
			"// FUNCTIONS",
			"// - - - - -",
			"function _double(a) {",
			"   var _a = a || 0;",
			"",
			"   if (typeof (_a) !== 'number') return NaN;",
			"",
			"   return _a + _a;",
			"};",
			"",
			"function _main() {",
			"   // publish module and a function",
			"   window.module = window.module || {};",
			"   window.module.double = _double;",
			"}",
			"",
			"// - - - - -",
			"// CONTROL",
			"// - - - - -",
			"_main();",
			"// - - - - - - - - - -",
			"}())"
		]
    }
}
```