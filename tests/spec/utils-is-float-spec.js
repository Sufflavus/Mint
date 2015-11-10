describe("utils.isFloat", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.isFloat instanceof Function;
        expect(actual).toBe(true);
    });

    it("returns true for float", function() {
        var value = 0.1;
        var actual = Mint.utils.isFloat(value);
        expect(actual).toBe(true);
    }); 

    it("returns true for Math.PI", function() {
        var value = Math.PI;
        var actual = Mint.utils.isFloat(value);
        expect(actual).toBe(true);
    }); 

    it("returns true for integer", function() {
        var value = 5;
        var actual = Mint.utils.isFloat(value); 
        expect(actual).toBe(true);
    }); 

    it("returns true for 0", function() {
        var value = 0;
        var actual = Mint.utils.isFloat(value); 
        expect(actual).toBe(true);
    }); 

    it("returns true for negative float", function() {
        var value = -100000.345;
        var actual = Mint.utils.isFloat(value);
        expect(actual).toBe(true);
    }); 

    it("returns true for negative integer", function() {
        var value = -100000;
        var actual = Mint.utils.isFloat(value);
        expect(actual).toBe(true);
    });

    it("returns false for string", function() {
        var value = "5";
        var actual = Mint.utils.isFloat(value);
        expect(actual).toBe(false);
    });

    it("returns false for NaN", function() {
        var value = NaN;
        var actual = Mint.utils.isFloat(value);
        expect(actual).toBe(false);
    }); 

    it("returns false for null", function() {
        var value = null;
        var actual = Mint.utils.isFloat(value);
        expect(actual).toBe(false);
    });

    it("returns false for undefined", function() {
        var value = undefined;
        var actual = Mint.utils.isFloat(value);
        expect(actual).toBe(false);
    });
});