describe("utils", function() {
    it("is a property of 'Mint'", function() {
        var actual = Mint.utils instanceof Object;
        expect(actual).toBe(true);
    });
});