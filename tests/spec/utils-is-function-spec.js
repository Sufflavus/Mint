describe("utils.isFunction", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.isFunction instanceof Function;
        expect(actual).toBe(true);
    }); 

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
