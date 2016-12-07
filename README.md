# Mint

JavaScript helpful functions

[![Code Climate](https://codeclimate.com/github/Sufflavus/Mint/badges/gpa.svg)](https://codeclimate.com/github/Sufflavus/Mint) [![GitHub Wiki](https://img.shields.io/badge/project-wiki-ff69b4.svg)](https://github.com/Sufflavus/Mint/wiki)

## Setup & Dependencies
1. Add a file [mint-utils.js](https://github.com/Sufflavus/Mint/blob/master/src/mint-utils.js) (does not have any dependencies) on the page.

```html
<head>

</head>
<body>

    <script src="../src/mint-utils.js"></script>
</body>
```

## Browsers support
Functionality is tested in Chrome >= 46, Opera >= 33.0, Firefox >= 31.0, IE >= 11

## Tests
This library is delivered with Jasmine tests. To run tests open [SpecRunner.html](https://github.com/Sufflavus/Mint/blob/master/tests/SpecRunner.html) in your favorite browser.

## List of functions

1. Mint.utils.createGuid()
1. Mint.utils.getRandomInt(min, max)
1. Mint.utils.isArray(value)
1. Mint.utils.isFunction(value)
1. Mint.utils.isString(value)
1. Mint.utils.isInteger(value)
1. Mint.utils.isFloat(value)
1. Mint.utils.trimString(value)
1. Mint.utils.arrayFirst(array, predicate)
1. Mint.utils.arrayRemoveItem(array, itemToRemove)
1. Mint.utils.dictionaryForEach(dictionary, callback)
1. Mint.utils.clone(obj)

## Mint.utils functions 
### 1. Mint.utils.createGuid()
> The **createGuid()** method generates new random Guid.

#### Syntax
```js
var guid = Mint.utils.createGuid();
```

#### Return Value
New random **Guid** (string).

#### Examples

```js
Mint.utils.createGuid();  // "0ef73963-bea8-ebf9-af71-897958421e2e"
```

### 2. Mint.utils.getRandomInt()
> The **getRandomInt()** method returns a random number within a specified range.

#### Syntax
```js
var random = Mint.utils.getRandomInt([min[, max]]);
```

#### Parameters
* **min** - (int, optional) The inclusive lower bound of the random number returned. Default value is 0.
* **max** - (int, optional) The exclusive upper bound of the random number returned. Max must be greater than or equal to min. Default value is Number.MAX_VALUE.

#### Return Value
A signed integer greater than or equal to min and less or equal than max; that is, the range of return values includes min and max. If min equals max, min is returned. 

#### Examples

```js
Mint.utils.getRandomInt(1, 8);  // 6
Mint.utils.getRandomInt(1);     // 1.794066025907234e+308
Mint.utils.getRandomInt();      // 1.0024528559121937e+308
Mint.utils.getRandomInt("12");  // Error

```

### 3. Mint.utils.isArray()
> The **isArray()** method determines whether the tested object is Array.

#### Syntax
```js
var isArray = Mint.utils.isArray([]);
```

#### Parameters
* **value** - (object) An object for check.

#### Return Value
**true** if the tested object is Array; otherwise, **false**.

#### Examples

```js
Mint.utils.isArray([1, 2, 3]);      // true
Mint.utils.isArray(new array());    // true
Mint.utils.isArray("a");            // false
Mint.utils.isArray(null);           // false
```

### 4. Mint.utils.isFunction()
> The **isFunction()** method determines whether the tested object is Function.

#### Syntax
```js
var testedObject = new function(){};
var isFunction = Mint.utils.isFunction(testedObject);
```

#### Parameters
* **value** - (object) An object for check.

#### Return Value
**true** if the tested object is Function; otherwise, **false**.

#### Examples

```js
function test(){ };
Mint.utils.isFunction(test);       // true
Mint.utils.isFunction("a");        // false
Mint.utils.isFunction(null);       // false
Mint.utils.isFunction([1, 2, 3]);  // false
```

### 5. Mint.utils.isString()
> The **isString()** method determines whether the tested object is string.

#### Syntax
```js
var testedObject = "lorem impus";
var isString = Mint.utils.isString(testedObject);
```

#### Parameters
* **value** - (object) An object for check.

#### Return Value
**true** if the tested object is string; otherwise, **false**.

#### Examples

```js
Mint.utils.isString("lorem impus");  // true
Mint.utils.isString(12);             // false
Mint.utils.isString(function(){ });  // false
Mint.utils.isString(null);           // false
Mint.utils.isString([1, 2, 3]);      // false
```

### 6. Mint.utils.isInteger()
> The **isInteger()** method determines whether the passed value is an integer.

_For more information visit [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger)_

#### Syntax
```js
var isInteger = Mint.utils.isInteger(12);
```

#### Parameters
* **value** - The value to be tested for being an integer.

#### Return Value
**true** if the tested object is integer; otherwise, **false**.

#### Examples

```js
Mint.utils.isInteger(0.1);      // false
Mint.utils.isInteger(1);        // true
Mint.utils.isInteger(Math.PI);  // false
Mint.utils.isInteger(-100000);  // true
Mint.utils.isInteger(0);        // true
Mint.utils.isInteger("10");     // false
Mint.utils.isInteger(null);     // false
```

### 7. Mint.utils.isFloat()
> The **isFloat()** method determines whether the passed value is an float.

#### Syntax
```js
var isFloat = Mint.utils.isFloat(1.2);
```

#### Parameters
* **value** - The value to be tested for being a float.

#### Return Value
**true** if the tested object is integer; otherwise, **false**.

#### Examples

```js
Mint.utils.isFloat(0.1);      // true
Mint.utils.isFloat(-10.1);    // true
Mint.utils.isFloat(1);        // true
Mint.utils.isFloat(Math.PI);  // true
Mint.utils.isFloat(-100000);  // true
Mint.utils.isFloat(NaN);      // false
Mint.utils.isFloat(0);        // true
Mint.utils.isFloat("10");     // false
```

### 8. Mint.utils.trimString(value)
> The **trimString()** method removes spaces from the beginning and the ending of the string but not from the middle of the string.

#### Syntax
```js
var trimmedStr = Mint.utils.trimString("  Lorem impus ");
```

#### Parameters
* **value** - string for trim.

#### Return Value
The string that remains after all spaces are removed from the start and end of the inner string.

#### Examples

```js
Mint.utils.trimString("  Lorem impus ");                      // "Lorem impus"
Mint.utils.trimString("Lorem impus");                         // "Lorem impus"
Mint.utils.trimString("  Lorem   ipsum   dolor   sit amet");  // "Lorem   ipsum   dolor   sit amet"
Mint.utils.trimString("   ");                                 // ""
Mint.utils.trimString("");                                    // ""
Mint.utils.trimString(null);                                  // error
Mint.utils.trimString(12);                                    // error
```

### 9. Mint.utils.arrayFirst()
> The **arrayFirst()** method returns the first item of an array that is matched the predicate function.

#### Syntax
```js
var first = Mint.utils.arrayFirst(array, predicate);
```

#### Parameters
* **array** - array in which item is searching.
* **predicate** - (function) function that returns true for searching item.

#### Return Value
The first item of an array that is matched the predicate function; null if item is not found.

#### Examples

```js

var array = [1, 3, 8];
var first = Mint.utils.arrayFirst(array, function (item){
    return item > 2;
});
// first equal 3

first = Mint.utils.arrayFirst(array, function (item){
    return item > 10;
});
// first is null

```

### 10. Mint.utils.arrayRemoveItem()
> The **arrayRemoveItem()** method removes first accurance of item from an array.
> The arrayRemoveItem() method removes item from array that is passed as first parameter.

#### Syntax
```js
Mint.utils.arrayRemoveItem(array, itemToRemove);
```

#### Parameters
* **array** - array in which item is searching.
* **itemToRemove** - (object) item of array that should be removed.

#### Examples

```js
var array = [1, 3, 8];
Mint.utils.arrayRemoveItem(array, 3); // array == [1, 8]
```

### 11. Mint.utils.dictionaryForEach()
> The **dictionaryForEach()** method executes a provided function once per dictionary element.
> The dictionaryForEach() method executes only for own properties of an object.

#### Parameters
* **dictionary** - object that structured like a dictionary, for example, {a: 1, b: 2}.
* **callback** - function to execute for each element, taking two arguments: 
  * **key** - the current element's key being processed in the dictionary, and 
  * **value** - the current element's value.

#### Examples

```js
var dict = {a: 1, b: 2};

function logDictionaryElements(key, value) {
  console.log("key = " + key + "; value = " + value);
}

Mint.utils.dictionaryForEach(dict, logDictionaryElements);

// logs:
// key = a; value = 1
// key = b; value = 2

### 12. Mint.utils.clone()
> The **clone()** method returns a clone of the object (only data fields, not function).

#### Syntax
```js
var obj = {a: 1};
var clone = Mint.utils.clone(obj);
```

#### Return Value
**object** that is clone of the passed object.

#### Examples

```js
var value = { a: { b: 1 } };
var clone = Mint.utils.clone(); // { a: { b: 1 } }

value = { 
            a: { 
                b: 1, 
                foo: function(){}
            },
            c: "lorem"
        };

clone = Mint.utils.clone();     // { a: { b: 1 }, c: "lorem" }

value = "Lorem";
clone = Mint.utils.clone();     // "Lorem"
```


## LICENSE
[The MIT License](https://github.com/Sufflavus/Mint/blob/master/LICENSE)
