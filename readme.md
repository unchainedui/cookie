# Unchained UI

## Cookie

Simple cookie parser

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
