describe("utils.isInteger", function() {
    it("is a function Mint.utils", function() {
        var actual = Mint.utils.isInteger instanceof Function;
        expect(actual).toBe(true);
    });

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
