# Willkommen zu Echtzeitapplikationen mit HTML5
## Michael Reichart
- michael.reichart@gfu.net
- Auf Xing und LinkedIn unter Michael Reichart

## Inhalte und Zeiten
Die Kurstage gehen jeweils von 9:00 bis 16:00 Uhr. Für das Remoteseminar sind folgende Pausenzeiten geplant:

- 10:30 bis 10:45 Uhr
- 12:00 bis 13:00 Uhr
- 14:30 bis 14:45 Uhr

## Präsenz während des Remote
Ein Remoteseminar funktioniert im Großen und Ganzen wie ein Präsenzseminar auch. Die Teilnahme mit einem Live-Videobild ist dabei sehr wichtig. Das Video vermittelt Präsenz und stützt Fragen und Unterhaltungen. 

## Foliensatz
Es gibt einen Foliensatz zu unserem Seminar und Workshop im Verzeichnis `docs`: **Echtzeitanwendungen mit Websockets und Webworkern.pdf**. Dort finden Sie zum Nachlesen, was während Seminars erläutert wird plus viel Zusatzmaterial. Der Foliensatz wird ggf. aktualisiert, wenn wir bis zum Ende Seminars Inhalte umstellen. Er steht Ihnen anschließend unter der MIT Lizenz zur freien Verfügung.

## Dateien zum Download
wir werden im Laufe des Seminars HTML und CSS Dateien schreiben. Sie können während und am Ende des Seminars von https://github.com/zenbox/workshop heruntergeladen werden.

## Fundstücke
- [The Chat Example Original ist von Brad Traversy Thanks!.](https://www.youtube.com/watch?v=jD7FnbI76Hg&t=2128s)
## Links zu HTML5
- [html5Test.com](http://html5test.com/index.html)
- [Can i Use?](https://caniuse.com/)
- [MIT License](https://opensource.org/licenses/MIT)
- [Cost of Defect](http://thklein.com/de_DE/cost-of-defect/)
- [Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

- [W3C](https://www.w3.org/TR/)
- [HTML Dokumentation I](https://www.w3schools.com/)
- [HTML Dokumentation II](https://wiki.selfhtml.org/)
- [HTML Dokumentation III](http://html5doctor.com/)

- [CSS Tricks](https://css-tricks.com/)
- [CSS Nomenklatur - Block Element Modifier](http://getbem.com/introduction/)
- [Scalable and Modular CSS](http://smacss.com/)
- [Stop Using IDs in CSS](https://medium.com/@zenbox/stop-using-ids-in-css-e79a860838c6)
- [Normalize CSS](https://necolas.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [Material IO](https://material.io/)




## Snippets
### Javascript
```javascript
{
    "page documention block": {
    "prefix": "docblock",
    "description": "print the page doc block",
    "body": [
        "/** $1",
        "  *",
        "  *  @desc $2",
        "  *",
        "  * @package Webapplication",
        "  * @module $3",
        "  * @author your name <your.name@domain.org>",
        "  * @version v1.0.0",
        "  * @since $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE",
        "  * @see i.e. inspired by ... {link to}",
        "  * @license MIT {https://opensource.org/licenses/MIT}",
        "  * @copyright (c) $CURRENT_YEAR Michael Reichart, Cologne",
        "  */",
        "$4"
        ]
    }
}
```

### VS code settings for the Live Sass Extension
```json
"liveSassCompile.settings.formats": [
    {
      "extensionName": ".css",
      "format": "expanded",
      "savePath": "/public/assets/css/"
    }
  ],
  "liveSassCompile.settings.generateMap": false,
  "liveSassCompile.settings.autoprefix": [],
  "liveSassCompile.settings.excludeList": [
    "**/node_modules/**",
    ".vscode/**"
  ],
```