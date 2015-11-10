describe("utils.dictionaryForEach", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.dictionaryForEach instanceof Function;
        expect(actual).toBe(true);
    }); 

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