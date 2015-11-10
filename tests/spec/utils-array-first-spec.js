describe("utils.arrayFirst", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.arrayFirst instanceof Function;
        expect(actual).toBe(true);
    }); 

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