describe("utils.clone", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.clone instanceof Function;
        expect(actual).toBe(true);
    }); 

    it("returns correct result for empty object", function() {
        var testedObject = {};

        var actual = Mint.utils.clone(testedObject);

        var numberOfProperties = Object.getOwnPropertyNames(actual).length;
        expect(numberOfProperties).toEqual(0);
    });

    it("returns correct result for one-level object", function() {
        var testedObject = { a: 1, b: "lorem", "t": 5};
        var testedObjectProperties = Object.getOwnPropertyNames(testedObject);

        var actual = Mint.utils.clone(testedObject);

        var actualObjectProperties = Object.getOwnPropertyNames(actual);
        expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

        testedObjectProperties.forEach(function(prop){
            expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual[prop]).toEqual(testedObject[prop]);
        });
    });

    it("returns correct result for one-level object with function", function() {
        var testedObject = { a: 1, b: "lorem", "t": 5, foo: function(){}};
        var testedObjectProperties = Object.getOwnPropertyNames(testedObject).filter(function(prop){ return prop!="foo"; });

        var actual = Mint.utils.clone(testedObject);
        
        var actualObjectProperties = Object.getOwnPropertyNames(actual);
        expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

        testedObjectProperties.forEach(function(prop){
            expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual[prop]).toEqual(testedObject[prop]);
        });

        expect(!actual.foo).toBe(true);
    });

    it("returns correct result for one-level object with array", function() {
        var testedObject = { a: 1, b: "lorem", "t": 5, array: [1, 2]};
        var testedObjectProperties = Object.getOwnPropertyNames(testedObject);

        var actual = Mint.utils.clone(testedObject);

        var actualObjectProperties = Object.getOwnPropertyNames(actual);
        expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

        testedObjectProperties.forEach(function(prop){
            expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual[prop]).toEqual(testedObject[prop]);
        }); 
    });

    it("returns correct result for two-level object", function() {
        var testedInnerObject = { a: { b: 1, "t": 5 } };
        var testedObject = { a: testedInnerObject, c: "lorem" };
        var testedObjectProperties = Object.getOwnPropertyNames(testedObject);
        var testedInnerObjectProperties = Object.getOwnPropertyNames(testedInnerObject);

        var actual = Mint.utils.clone(testedObject);

        var actualObjectProperties = Object.getOwnPropertyNames(actual);
        expect(actualObjectProperties.length).toEqual(testedObjectProperties.length);

        testedObjectProperties.forEach(function(prop){
            expect(actualObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual[prop]).toEqual(testedObject[prop]);
        });

        var actualInnerObjectProperties = Object.getOwnPropertyNames(actual.a);
        expect(actualInnerObjectProperties.length).toEqual(testedInnerObjectProperties.length);

        testedInnerObjectProperties.forEach(function(prop){
            expect(actualInnerObjectProperties.indexOf(prop)).toBeGreaterThan(-1);
            expect(actual.a[prop]).toEqual(testedInnerObject[prop]);
        });
    });

    it("returns the same string for non-empty string", function() {
        var testedObject = "lorem";
        var actual = Mint.utils.clone(testedObject);
        expect(actual).toEqual(testedObject);
    });

    it("returns the same string for empty string", function() {
        var testedObject = "";
        var actual = Mint.utils.clone(testedObject);
        expect(actual).toEqual(testedObject);
    });

    it("returns the same int for int", function() {
        var testedObject = 1;
        var actual = Mint.utils.clone(testedObject);
        expect(actual).toEqual(testedObject);
    });

    it("returns the same float for float", function() {
        var testedObject = 1.786;
        var actual = Mint.utils.clone(testedObject);
        expect(actual).toEqual(testedObject);
    });

    it("returns the same array for array", function() {
        var testedObject = [1, 2, 3];
        var actual = Mint.utils.clone(testedObject);
        expect(actual).toEqual(testedObject);
    });

    it("returns null for null", function() {
        var testedObject = null;
        var actual = Mint.utils.clone(testedObject);
        expect(actual).toBeNull();
    });

    it("returns undefined for undefined", function() {
        var testedObject = undefined;
        var actual = Mint.utils.clone(testedObject);
        expect(actual).toBeUndefined();
    });
});
