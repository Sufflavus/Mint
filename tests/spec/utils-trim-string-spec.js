describe("utils.trimString", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.trimString instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("returns empty string for empty string", function() {
        var str = "";
        var actual = Mint.utils.trimString(str);
        
        expect(actual).toEqual(str);
    }); 

    it("returns empty string for string of spaces", function() {
        var str = "     ";
        var actual = Mint.utils.trimString(str);

        expect(actual).toEqual("");
    }); 

    it("returns correct result for string with letters and spaces 1", function() {
        var sentence = "Lorem"
        var str = "     " + sentence + "   ";
        var actual = Mint.utils.trimString(str);

        expect(actual).toEqual(sentence);
    }); 

    it("returns correct result for string with letters and spaces 2", function() {
        var sentence = "Lorem ipsum dolor sit amet"
        var str = "     " + sentence + "   ";
        var actual = Mint.utils.trimString(str);

        expect(actual).toEqual(sentence);
    }); 

    it("returns correct result for string with letters and spaces 3", function() {
        var sentence = "Lorem   ipsum   dolor   sit amet"
        var str = "     " + sentence + "   ";
        var actual = Mint.utils.trimString(str);

        expect(actual).toEqual(sentence);
    }); 

    it("throws an exception when the first parameter is array", function() {
        var str = [1, 2];

        expect(function() {
            Mint.utils.trimString(str);
        }).toThrowError("First parameter should be string.");
    }); 

    it("throws an exception when the first parameter is int", function() {
        var str = 2;

        expect(function() {
            Mint.utils.trimString(str);
        }).toThrowError("First parameter should be string.");
    });

    it("throws an exception when the first parameter is null", function() { 
        var str = null;

        expect(function() {
            Mint.utils.trimString(str);
        }).toThrowError("First parameter should be string.");
    });

    it("throws an exception when the first parameter is undefined", function() { 
        var str = undefined;

        expect(function() {
            Mint.utils.trimString(str);
        }).toThrowError("First parameter should be string.");
    });

    it("throws an exception when the first parameter is NaN", function() { 
        var str = NaN;

        expect(function() {
            Mint.utils.trimString(str);
        }).toThrowError("First parameter should be string.");
    });
});