describe("utils.arrayRemoveItem", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.arrayRemoveItem instanceof Function;
        expect(actual).toBe(true);
    }); 

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
