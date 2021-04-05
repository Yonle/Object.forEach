# Object.forEach
A simple Object.forEach with Front & Backend support

## Example
### Front-end Support

First off, Load the script

```html
<script src="https://cdn.jsdelivr.net/npm/object.foreach"></script>
```

After that, Script is Ready to use.

```js
var thisObject = {
	foo: 'bar',
	bar: 'foo'
}

thisObject.forEach((res, pyt) => console.log(res, pyt));
// bar foo
// foo bar
```

### Back-end Support

We need to load the module so it works perfectly by using `require(....)`.

```js
var thisObject = {
	foo: 'bar',
	bar: 'foo'
}

require('object.foreach');

thisObject.forEach((res, pyt) => console.log(res, pyt));
// bar foo
// foo bar
```

# Community
- [Discord](https://quickstream.yonle.repl.co/discord)
- [Telegram](https://t.me/yonlecoder)
