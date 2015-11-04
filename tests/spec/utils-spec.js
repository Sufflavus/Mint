describe("utils", function() {
    it("is a property of 'Mint'", function() {
        var actual = Mint.utils instanceof Object;
        expect(actual).toBe(true);
    }); 

    it("has function createGuid", function() {
        var actual = Mint.utils.createGuid instanceof Function;
        expect(actual).toBe(true);
    });

    it("has function getRandomInt", function() {
        var actual = Mint.utils.getRandomInt instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("has function isArray", function() {
        var actual = Mint.utils.isArray instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("has function isFunction", function() {
        var actual = Mint.utils.isFunction instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("has function isString", function() {
        var actual = Mint.utils.isString instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("has function isInteger", function() {
        var actual = Mint.utils.isInteger instanceof Function;
        expect(actual).toBe(true);
    });     

    it("has function arrayFirst", function() {
        var actual = Mint.utils.arrayFirst instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("has function arrayRemoveItem", function() {
        var actual = Mint.utils.arrayRemoveItem instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("has function dictionaryForEach", function() {
        var actual = Mint.utils.dictionaryForEach instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("has function clone", function() {
        var actual = Mint.utils.clone instanceof Function;
        expect(actual).toBe(true);
    }); 
});

describe("utils.createGuid", function() {
    it("returns correct Guid", function() {
        var actual = Mint.utils.createGuid();

        var resultParts = actual.split('-');
        expect(actual.length).toEqual(36);
        expect(resultParts.length).toEqual(5);
        expect(resultParts[0].length).toEqual(8);
        expect(resultParts[1].length).toEqual(4);
        expect(resultParts[2].length).toEqual(4);
        expect(resultParts[3].length).toEqual(4);
        expect(resultParts[4].length).toEqual(12);
    });

    it("returns new Guid each time", function() {
        var guid1 = Mint.utils.createGuid();
        var guid2 = Mint.utils.createGuid();
        
        expect(guid1).not.toEqual(guid2);
    });
});

describe("utils.getRandomInt", function() {
    it("returns positive int when called without parameters", function() {
        var actual = Mint.utils.getRandomInt();

        expect(Mint.utils.isInteger(actual)).toBe(true);
        expect(actual).not.toBeLessThan(0);
    });

    it("returns int that greater than parameter when called with one parameter", function() {
        var min = 5;
        var actual = Mint.utils.getRandomInt(min);

        expect(Mint.utils.isInteger(actual)).toBe(true);
        expect(actual).not.toBeLessThan(min);
    }); 

    it("returns correct int when called with negative parameter", function() {
        var min = -15;
        var max = -5;

        var actual = Mint.utils.getRandomInt(min, max);

        expect(Mint.utils.isInteger(actual)).toBe(true);
        expect(actual).not.toBeLessThan(min);
        expect(actual).not.toBeGreaterThan(max);
    });

    it("returns correct int when called with 2 parameter", function() { 
        var min = -15;
        var max = 5;

        var actual = Mint.utils.getRandomInt(min, max);

        expect(Mint.utils.isInteger(actual)).toBe(true);
        expect(actual).not.toBeLessThan(min);
        expect(actual).not.toBeGreaterThan(max);
    }); 

    it("returns correct int when called with 2 equal parameter", function() {
        var min = 5;
        var max = 5;

        var actual = Mint.utils.getRandomInt(min, max);

        expect(Mint.utils.isInteger(actual)).toBe(true);
        expect(actual).toEqual(min);
    }); 

    it("throws an exception when the first parameter greater then the second one", function() { 
        var min = 15;
        var max = -5;

        expect(function() {
            Mint.utils.getRandomInt(min, max);
        }).toThrowError("First parameter should be less or equal then the second one.");
    }); 

    it("throws an exception the first parameter is not int", function() {
        var min = "1";

        expect(function() {
            Mint.utils.getRandomInt(min);
        }).toThrowError("If the first parameter specified it should be int.");
    }); 

    it("throws an exception the second parameter is not int", function() {
        var min = 1;
        var max = new Date();

        expect(function() {
            Mint.utils.getRandomInt(min, max);
        }).toThrowError("If the second parameter specified it should be int.");
    }); 
});

describe("utils.arrayFirst", function() {
    it("returns correct result 1", function() { 
        var  array = [1, 3, 8];
        var actual = Mint.utils.arrayFirst(array, function (item) {
            return item > 2;
        });

        expect(actual).toEqual(3);
    }); 

    it("returns correct result 2", function() { 
        var  array = ["lorem", "impus", 8];
        var actual = Mint.utils.arrayFirst(array, function (item) {
            return item === "impus";
        });

        expect(actual).toEqual("impus");
    });

    it("returns null for empty array", function() { 
        var  array = [];
        var actual = Mint.utils.arrayFirst(array, function (item) {
            return item === 1;
        });

        expect(actual).toEqual(null);
    }); 

    it("returns null if search item does not exist", function() {
        var  array = [2, 8];
        var actual = Mint.utils.arrayFirst(array, function (item) {
            return item === 1;
        });

        expect(actual).toEqual(null);
    }); 

    it("throws an exception when the first parameter is string", function() {
        var array = "array";

        expect(function() {
            Mint.utils.arrayFirst(array, function () {
                return true;
            });
        }).toThrowError("First parameter should be array.");
    }); 

    it("throws an exception when the first parameter is int", function() {
        var array = 2;

        expect(function() {
            Mint.utils.arrayFirst(array, function () {
                return true;
            });
        }).toThrowError("First parameter should be array.");
    });

    it("throws an exception when the first parameter is null", function() { 
        var array = null;

        expect(function() {
            Mint.utils.arrayFirst(array, function () {
                return true;
            });
        }).toThrowError("First parameter should be array.");
    });     

    it("throws an exception the second parameter is string", function() {
        var array = [];

        expect(function() {
            Mint.utils.arrayFirst(array, "");
        }).toThrowError("Second parameter should be a function.");
    }); 

    it("throws an exception the second parameter is int", function() {
        var array = [];

        expect(function() {
            Mint.utils.arrayFirst(array, 1);
        }).toThrowError("Second parameter should be a function.");
    }); 

    it("throws an exception the second parameter is not defined", function() {
        var array = [];

        expect(function() {
            Mint.utils.arrayFirst(array);
        }).toThrowError("Second parameter should be a function.");
    }); 
});

describe("utils.arrayRemoveItem", function() {
    it("returns correct result 1", function() {
        var array = [1, 3, 8];
        var arrayLength = array.length;
        var itemToRemove = array[arrayLength - 2];

        Mint.utils.arrayRemoveItem(array, itemToRemove);

        expect(array.length).toEqual(arrayLength - 1);
        expect(array.indexOf(itemToRemove)).toEqual(-1);
    }); 

    it("returns correct result 2", function() { 
        var array = [{a: "Lorem"}, 3, {b: 5}];  
        var arrayLength = array.length;     
        var itemToRemove = array[arrayLength - 1];

        Mint.utils.arrayRemoveItem(array, itemToRemove);

        expect(array.length).toEqual(arrayLength - 1);
        expect(array.indexOf(itemToRemove)).toEqual(-1);
    });

    it("returns correct result 3", function() { 
        var array = [{a: "Lorem"}, null, {b: 5}];
        var arrayLength = array.length;
        var itemToRemove = null;

        Mint.utils.arrayRemoveItem(array, itemToRemove);

        expect(array.length).toEqual(arrayLength - 1);
        expect(array.indexOf(itemToRemove)).toEqual(-1);
    }); 

    it("returns empty array for empty array", function() {  
        var  array = [];

        Mint.utils.arrayRemoveItem(array, 1);
                
        expect(array.length).toEqual(0);
    }); 

    it("returns the same array if search item does not exist", function() { 
        var  array = [2, 8];
        var itemToRemove = 1;

        Mint.utils.arrayRemoveItem(array, itemToRemove);
                
        expect(array.length).toEqual(2);
        expect(array[0]).toEqual(2);
        expect(array[1]).toEqual(8);
    }); 

    it("throws an exception when the first parameter is string", function() {
        var array = "array";
        
        expect(function() {
            Mint.utils.arrayRemoveItem(array);
        }).toThrowError("First parameter should be array.");
    }); 

    it("throws an exception when the first parameter is int", function() {  
        var array = 2;

        expect(function() {
            Mint.utils.arrayRemoveItem(array);
        }).toThrowError("First parameter should be array.");
    });

    it("throws an exception when the first parameter is null", function() { 
        var array = null;
        
        expect(function() {
            Mint.utils.arrayRemoveItem(array);
        }).toThrowError("First parameter should be array.");
    });
});

describe("utils.dictionaryForEach", function() {
    it("executes a provided function once per dictionary element (test 1)", function() {
        var dictionary = { a: 1, b: 2 };
        var dictionaryItemsCount = 2;
        var counter = 0;
        var keys = [];
        var values = [];

        var callback = function(key, value){
            counter++;
            keys.push(key);
            values.push(value);
        }

        Mint.utils.dictionaryForEach(dictionary, callback);

        expect(counter).toEqual(dictionaryItemsCount);
        expect(keys.length).toEqual(dictionaryItemsCount);
        expect(values.length).toEqual(dictionaryItemsCount); 
        expect(keys[0]).toEqual("a");
        expect(keys[1]).toEqual("b");
    }); 

    it("executes a provided function once per dictionary element (test 2)", function() {
        var dictionary = { };
        var dictionaryItemsCount = 0;
        var counter = 0;
        var keys = [];
        var values = [];

        var callback = function(key, value){
            counter++;
            keys.push(key);
            values.push(value);
        }

        Mint.utils.dictionaryForEach(dictionary, callback);

        expect(counter).toEqual(dictionaryItemsCount);
        expect(keys.length).toEqual(dictionaryItemsCount);
        expect(values.length).toEqual(dictionaryItemsCount);
    }); 

    it("throws an exception when the first parameter is null", function() {
        expect(function() {
            Mint.utils.dictionaryForEach(null, function(){});
        }).toThrowError("First parameter should be defined.");
    }); 

    it("throws an exception when the first parameter is undefined", function() {
        expect(function() {
            Mint.utils.dictionaryForEach(undefined, function(){});
        }).toThrowError("First parameter should be defined.");
    });     

    it("throws an exception when the second parameter is null", function() { 
        expect(function() {
            Mint.utils.dictionaryForEach({}, null);
        }).toThrowError("Second parameter should be a function.");
    });     

    it("throws an exception when the second parameter is undefined", function() { 
        expect(function() {
            Mint.utils.dictionaryForEach({}, undefined);
        }).toThrowError("Second parameter should be a function.");
    });    

    it("throws an exception when the second parameter is int", function() { 
        expect(function() {
            Mint.utils.dictionaryForEach({}, 1);
        }).toThrowError("Second parameter should be a function.");
    });   

    it("throws an exception when the second parameter is string", function() { 
        expect(function() {
            Mint.utils.dictionaryForEach({}, "a");
        }).toThrowError("Second parameter should be a function.");
    });   

    it("throws an exception when the second parameter is array", function() { 
        expect(function() {
            Mint.utils.dictionaryForEach({}, [1, 2]);
        }).toThrowError("Second parameter should be a function.");
    });   
});

describe("utils.isArray", function() {
    it("returns true for array", function() {
        var testedArray = [1, 2];
        var actual = Mint.utils.isArray(testedArray);
        expect(actual).toBe(true);
    });

    it("returns true for Array", function() {
        var testedArray = new Array();
        var actual = Mint.utils.isArray(testedArray);
        expect(actual).toBe(true);
    });

    it("returns true for empty array", function() {
        var testedArray = [];
        var actual = Mint.utils.isArray(testedArray);
        expect(actual).toBe(true);
    });

    it("returns false for string", function() {
        var testedValue = "test";
        var actual = Mint.utils.isArray(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for int", function() {
        var testedValue = 12;
        var actual = Mint.utils.isArray(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for float", function() {
        var testedValue = 12.56;
        var actual = Mint.utils.isArray(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for object", function() {
        var testedValue = {a: 1};
        var actual = Mint.utils.isArray(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for Date", function() {
        var testedValue = new Date();
        var actual = Mint.utils.isArray(testedValue);
        expect(actual).toBe(false);
    });
    
    it("returns false for function", function() {
        var testedFunction = function(){};
        var actual = Mint.utils.isArray(testedFunction);
        expect(actual).toBe(false);
    }); 

    it("returns false for null", function() {
        var actual = Mint.utils.isArray(null);
        expect(actual).toBe(false);
    }); 

    it("returns false for undefined", function() {
        var actual = Mint.utils.isArray(undefined);
        expect(actual).toBe(false);
    }); 

    it("returns false for NaN", function() {
        var actual = Mint.utils.isArray(NaN);
        expect(actual).toBe(false);
    }); 
});

describe("utils.isFunction", function() {
    it("returns true for function (test 1)", function() {
        var testedFunction = function(){};
        var actual = Mint.utils.isFunction(testedFunction);
        expect(actual).toBe(true);
    }); 

    it("returns true for function (test 2)", function() {
        function testedFunction(){};
        var actual = Mint.utils.isFunction(testedFunction);
        expect(actual).toBe(true);
    }); 
        
    it("returns false for array", function() {
        var testedArray = [1, 2];
        var actual = Mint.utils.isFunction(testedArray);
        expect(actual).toBe(false);
    });
        
    it("returns false for string", function() {
        var testedValue = new Date();
        var actual = Mint.utils.isFunction(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for int", function() {
        var testedValue = 12;
        var actual = Mint.utils.isFunction(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for float", function() {
        var testedValue = 12.56;
        var actual = Mint.utils.isFunction(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for object", function() {
        var testedValue = {a: 1};
        var actual = Mint.utils.isFunction(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for Date", function() {
        var testedValue = new Date();
        var actual = Mint.utils.isFunction(testedValue);
        expect(actual).toBe(false);
    }); 

    it("returns false for null", function() {
        var actual = Mint.utils.isFunction(null);
        expect(actual).toBe(false);
    }); 

    it("returns false for undefined", function() {
        var actual = Mint.utils.isFunction(undefined);
        expect(actual).toBe(false);
    }); 

    it("returns false for NaN", function() {
        var actual = Mint.utils.isFunction(NaN);
        expect(actual).toBe(false);
    }); 
});

describe("utils.isString", function() {
    it("returns true for tring", function() {
        var testedObj = "test";
        var actual = Mint.utils.isString(testedObj);
        expect(actual).toBe(true);
    });

    it("returns false for array", function() {
        var testedObj = [1, 2];
        var actual = Mint.utils.isString(testedObj);
        expect(actual).toBe(false);
    });

    it("returns false for Array", function() {
        var testedObj = new Array();
        var actual = Mint.utils.isString(testedObj);
        expect(actual).toBe(false);
    });

    it("returns false for empty array", function() {
        var testedObj = [];
        var actual = Mint.utils.isString(testedObj);
        expect(actual).toBe(false);
    });

    it("returns false for int", function() {
        var testedValue = 12;
        var actual = Mint.utils.isString(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for float", function() {
        var testedValue = 12.56;
        var actual = Mint.utils.isString(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for object", function() {
        var testedValue = {a: 1};
        var actual = Mint.utils.isString(testedValue);
        expect(actual).toBe(false);
    });

    it("returns false for Date", function() {
        var testedValue = new Date();
        var actual = Mint.utils.isString(testedValue);
        expect(actual).toBe(false);
    });
    
    it("returns false for function", function() {
        var testedFunction = function(){};
        var actual = Mint.utils.isString(testedFunction);
        expect(actual).toBe(false);
    }); 

    it("returns false for null", function() {
        var actual = Mint.utils.isString(null);
        expect(actual).toBe(false);
    }); 

    it("returns false for undefined", function() {
        var actual = Mint.utils.isString(undefined);
        expect(actual).toBe(false);
    }); 

    it("returns false for NaN", function() {
        var actual = Mint.utils.isString(NaN);
        expect(actual).toBe(false);
    }); 
});

describe("utils.clone", function() {
    it("returns correct result for empty object", function() {      
        var testedObject = {};

        var actual = Mint.utils.clone(testedObject);  

        var numberOfProperties = Object.getOwnPropertyNames(actual).length;
        expect(numberOfProperties).toEqual(0);
    });

    it("returns correct result for one-level object", function() {      
        var testedObject = { a: 1, b: "lorem", "t": 5};
        var testedObjectProperties = Object.getOwnPropertyNames(testedObject);

        var actual = Mint.utils.clone(testedObject);  

        var actualObjectProperties = Object.getOwnPropertyNames(actual);
        expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

        testedObjectProperties.forEach(function(prop){
            expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual[prop]).toEqual(testedObject[prop]);
        });     
    });

    it("returns correct result for one-level object with function", function() {        
        var testedObject = { a: 1, b: "lorem", "t": 5, foo: function(){}};
        var testedObjectProperties = Object.getOwnPropertyNames(testedObject).filter(function(prop){ return prop!="foo"; });

        var actual = Mint.utils.clone(testedObject);  
        
        var actualObjectProperties = Object.getOwnPropertyNames(actual);
        expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

        testedObjectProperties.forEach(function(prop){
            expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual[prop]).toEqual(testedObject[prop]);
        });     

        expect(!actual.foo).toBe(true);
    });

    it("returns correct result for one-level object with array", function() {       
        var testedObject = { a: 1, b: "lorem", "t": 5, array: [1, 2]};
        var testedObjectProperties = Object.getOwnPropertyNames(testedObject);

        var actual = Mint.utils.clone(testedObject);  
        
        var actualObjectProperties = Object.getOwnPropertyNames(actual);
        expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

        testedObjectProperties.forEach(function(prop){
            expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual[prop]).toEqual(testedObject[prop]);
        }); 
    });

    it("returns correct result for two-level object", function() {
        var testedInnerObject = { a: { b: 1, "t": 5 } };
        var testedObject = { a: testedInnerObject, c: "lorem" };            
        var testedObjectProperties = Object.getOwnPropertyNames(testedObject);
        var testedInnerObjectProperties = Object.getOwnPropertyNames(testedInnerObject);

        var actual = Mint.utils.clone(testedObject);  

        var actualObjectProperties = Object.getOwnPropertyNames(actual);
        expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

        testedObjectProperties.forEach(function(prop){
            expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual[prop]).toEqual(testedObject[prop]);
        });     

        var actualInnerObjectProperties = Object.getOwnPropertyNames(actual.a);
        expect(actualInnerObjectProperties.length).toEqual(testedInnerObjectProperties.length);

        testedInnerObjectProperties.forEach(function(prop){
            expect(actualInnerObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual.a[prop]).toEqual(testedInnerObject[prop]);
        });     
    });

    it("returns the same string for non-empty string", function() {     
        var testedObject = "lorem";
        var actual = Mint.utils.clone(testedObject);  
        expect(actual).toEqual(testedObject);
    });

    it("returns the same string for empty string", function() {     
        var testedObject = "";
        var actual = Mint.utils.clone(testedObject);  
        expect(actual).toEqual(testedObject);
    });

    it("returns the same int for int", function() {     
        var testedObject = 1;
        var actual = Mint.utils.clone(testedObject);  
        expect(actual).toEqual(testedObject);
    });

    it("returns the same float for float", function() {     
        var testedObject = 1.786;
        var actual = Mint.utils.clone(testedObject);  
        expect(actual).toEqual(testedObject);
    });

    it("returns the same array for array", function() {     
        var testedObject = [1, 2, 3];
        var actual = Mint.utils.clone(testedObject);  
        expect(actual).toEqual(testedObject);
    });

    it("returns null for null", function() {
        var testedObject = null;
        var actual = Mint.utils.clone(testedObject);  
        expect(actual).toBeNull();
    });

    it("returns undefined for undefined", function() {
        var testedObject = undefined;
        var actual = Mint.utils.clone(testedObject);  
        expect(actual).toBeUndefined();
    });
});

describe("utils.isInteger", function() {
    it("returns true for integer", function() {     
        var value = 5;              
        var actual = Mint.utils.isInteger(value);   
        expect(actual).toBe(true);      
    }); 

    it("returns true for 0", function() {               
        var value = 0;              
        var actual = Mint.utils.isInteger(value);   
        expect(actual).toBe(true);      
    }); 

    it("returns true for negative integer", function() {    
        var value = -100000;                
        var actual = Mint.utils.isInteger(value);                       
        expect(actual).toBe(true);      
    }); 

    it("returns false for string", function() {     
        var value = "5";                
        var actual = Mint.utils.isInteger(value);               
        expect(actual).toBe(false);     
    }); 
        
    it("returns false for float", function() {      
        var value = 0.1;                
        var actual = Mint.utils.isInteger(value);           
        expect(actual).toBe(false);     
    }); 
    
    it("returns false for Math.PI", function() {        
        var value = Math.PI;                
        var actual = Mint.utils.isInteger(value);                       
        expect(actual).toBe(false);     
    }); 

    it("returns false for NaN", function() {        
        var value = NaN;                
        var actual = Mint.utils.isInteger(value);               
        expect(actual).toBe(false);     
    }); 

    it("returns false for null", function() {       
        var value = null;               
        var actual = Mint.utils.isInteger(value);               
        expect(actual).toBe(false);     
    });

    it("returns false for undefined", function() {      
        var value = undefined;              
        var actual = Mint.utils.isInteger(value);               
        expect(actual).toBe(false);     
    });
});