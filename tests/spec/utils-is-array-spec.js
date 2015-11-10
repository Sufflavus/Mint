describe("utils.isArray", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.isArray instanceof Function;
        expect(actual).toBe(true);
    }); 

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
