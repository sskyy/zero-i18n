# zero-i18n #

This module describes its name.

## Usage ##

1. Add dependency to your module package.json file like:

```
{
	"name" : "YOUR_MODULE_NAME",
	"zero" : {
		"dependencies" : {
			"i18n" : "^0.0.1"
		}
	}
}
```

2. Declare `dict` in module.exports like:

```
module.exports = {
	dict : {
		"en-us" : {
			"welcome" : "welcome"
		}
	}
}
```

3. Get language dict from client:

```
http://localhost:3000/i18n/dict/en-us
```