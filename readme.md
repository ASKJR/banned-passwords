# banned-passwords

> Verify if a password is in the Twitter's List Of Banned Passwords.

## Install

```
$ npm install banned-passwords --save
```


## Usage

```js
const banned = require('banned-passwords');

banned.all();
//=> ['123456', ...]

banned.contains('123456');
//=> 'true'

banned.contains('2e8a6*2p7~Lu;_LWs&Ef');
//=> 'false'

```

## License

MIT © [Alberto Kato]
