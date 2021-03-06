// JavaScript helpful functions
// @author Sufflavus https://github.com/Sufflavus
// @version 1.1.0 

var Mint = {};
Mint.utils = (function() {

    /**
     * Generates random Guid (has tests)
     * @return {String} random Guid. Example: "656fa0e4-11e9-4b89-8ae5-752cfe807b8f".
     * https://en.wikipedia.org/wiki/Globally_unique_identifier
     */
    function createGuid() {
        var s4 = generateSymbolsQuartet; 
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
             s4() + "-" + s4() + s4() + s4();
    }

    /**
     * Generates random integer (has tests)
     * @param {Number} min 
     * @param {Number} max
     * @return {Number} random integer that is between min and max. 
     * If min is not specified it set to 0. If max is not specified it set to Number.MAX_VALUE.
     */
    function getRandomInt(min, max) { 
        if(min && !isInteger(min)) {
            throw new Error("If the first parameter specified it should be int.");
        }

        if(max && !isInteger(max)) {
            throw new Error("If the second parameter specified it should be int.");
        }

        min = isInteger(min) ? min : 0;
        max = isInteger(max) ? max : Number.MAX_VALUE;

        if(min > max){
            throw new Error("First parameter should be less or equal then the second one.");
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function isArray(value) {
        return Object.prototype.toString.call(value) === "[object Array]";
    }

    function isFunction(value) {
        return Object.prototype.toString.call(value) === "[object Function]";
    }

    function isString(value) {
        return Object.prototype.toString.call(value) === "[object String]";
    }

    function isInteger(value) {
        return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }

    function isFloat(value) {
        return Number(value) === value && value % 1 !== 0 || isInteger(value);
    }

    function trimString(value) {
        if(!isString(value)){
            throw new Error("First parameter should be string.");
        }

        return value.replace(/^\s+|\s+$/g, '');
    }

    /**
     * Returns the first item of an array that matched the predicate function (has tests)
     * @param {Array} array 
     * @param {function} predicate
     * @return {object} the first item of an array that matched the predicate function. 
     */
    function arrayFirst(array, predicate) {
        if(!array || !isArray(array)){
            throw new Error("First parameter should be array.");
        }

        if(!predicate || !isFunction(predicate)) {
            throw new Error("Second parameter should be a function.");
        }

        for (var i = 0, j = array.length; i < j; i++){
            if (predicate(array[i])) {
                return array[i];
            }
        }

        return null;
    }

    /**
     * Removes first accurance of item from an array. (has tests)
     * @param {Array} array 
     * @param {object} itemToRemove 
     */
    function arrayRemoveItem(array, itemToRemove) {
        if(!array || !isArray(array)){
            throw new Error("First parameter should be array.");
        }

        var index = array.indexOf(itemToRemove);
        if (index >= 0) {
            array.splice(index, 1);
        }
    }

    /**
     * Executes a provided function once per dictionary element. (has tests)
     * @param {Object} dictionary. Example: dicr = {a: 1, b: 2}
     * @param {function} callback 
     */
    function dictionaryForEach(dictionary, callback) {
        if (!dictionary) {
            throw new Error("First parameter should be defined.");
        }

        if(!callback || !isFunction(callback)) {
            throw new Error("Second parameter should be a function.");
        }

        for (var key in dictionary) {
            if (!dictionary.hasOwnProperty(key)) { 
                continue; 
            }

            var value = dictionary[key];
            callback(key, value);
        }
    }


    function clone(obj) {
        if(obj === undefined) {
            return undefined;
        }

        return JSON.parse(JSON.stringify(obj));
    }

    function generateSymbolsQuartet() {
        return Math.floor((1 + Math.random()) * 0x10000)
                 .toString(16)
                 .substring(1);
    }

    return {
        createGuid: createGuid,
        getRandomInt: getRandomInt,
        isArray: isArray,
        isFunction: isFunction,
        isString: isString,
        isInteger: isInteger,
        isFloat: isFloat,
        trimString: trimString,
        arrayFirst: arrayFirst,
        arrayRemoveItem: arrayRemoveItem,
        dictionaryForEach: dictionaryForEach,
        clone: clone
    }
})();

