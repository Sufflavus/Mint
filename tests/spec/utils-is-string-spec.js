describe("utils.isString", function() {
    it("is a function Mint.utils", function() {
        var actual = Mint.utils.isString instanceof Function;
        expect(actual).toBe(true);
    }); 

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