# nodejs Einführung

Dateien zum Seminar und Workshop Januar 2019.

## Links

https://nodejs.org
https://npmjs.com
https://js.foundation/
https://nodejs.org
https://www.ecma-international.org/
http://www.icndb.com/



## snippets
```coffeescript
# - - - - - - - - - -
# MODULE BLOCK FOR NODEJS
# - - - - - - - - - -
# - - - - - - - - - -
# JAVASCRIPT SNIPPETS
# - - - - - - - - - -
'.source.js':
    'node-pattern':
        'prefix': 'node block'
        'body': """
                /*global console, require */
                /**
                * $1
                *
                * @package nodejs
                * @author Michael [michael@zenbox.de]
                * @since $2
                * @version v1.0.0
                * @copyright (c) 2017 Michael Reichart, Cologne
                * @license MIT License [https://opensource.org/licenses/MIT]
                */
                'use strict';
                // - - - - - - - - - -
                const http = require('http');
                let $3;
                // - - - - - - - - - -
                """
```


## sql snippet

```javascript
db.query('CREATE DATABASE IF NOT EXISTS application;');
db.query('USE application;');

// Tabelle anlegen
db.query('DROP TABLE IF EXISTS user;');

sql = "CREATE TABLE user ( " +
  "userId INT(11) AUTO_INCREMENT, " +
  "username VARCHAR(50), " +
  "email VARCHAR(50), " +
  "password VARCHAR(50), " +
  "PRIMARY KEY (userId) );";
db.query(sql);

sql = "INSERT INTO user " +
  "(username, email, password) " +
  "VALUES " +
  "('Michael', 'michael@zenbox.de', 'geheim')," +
  "('Paula', 'paula@zenbox.de', 'ganzgeheim')," +
  "('Klaus', 'klaus@zenbox.de', 'auchgeheim');";
db.query(sql, function() {
  console.log('Datensätze geschrieben.');
});
```
