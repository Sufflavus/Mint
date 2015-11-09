describe("utils.getRandomInt", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.getRandomInt instanceof Function;
        expect(actual).toBe(true);
    }); 

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