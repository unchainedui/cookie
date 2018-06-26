# Unchained UI

## Cookie

[![NPM Version](https://img.shields.io/npm/v/uc-cookie.svg?style=flat-square)](https://www.npmjs.com/package/uc-cookie)
[![NPM Downloads](https://img.shields.io/npm/dt/uc-cookie.svg?style=flat-square)](https://www.npmjs.com/package/uc-cookie)

Cookie parser

### Usage

```js
import cookie from 'uc-cookie'

cookie.set('name', 'value', new Date())
console.log(cookie.get('name'))
cookie.remove('name')

```

### Methods

#### set(name, value[, expires])

Sets the cookie. `expires` should be a `Date` instance

#### get(name)

Return cookie value or `null`

#### remove(name)

Removes cookie

License MIT

© velocityzen
