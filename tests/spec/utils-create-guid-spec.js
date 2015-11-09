describe("utils.createGuid", function() {
    it("is a function of Mint.utils", function() {
        var actual = Mint.utils.createGuid instanceof Function;
        expect(actual).toBe(true);
    });

    it("returns correct Guid", function() {
        var actual = Mint.utils.createGuid();

        var resultParts = actual.split('-');
        expect(actual.length).toEqual(36);
        expect(resultParts.length).toEqual(5);
        expect(resultParts[0].length).toEqual(8);
        expect(resultParts[1].length).toEqual(4);
        expect(resultParts[2].length).toEqual(4);
        expect(resultParts[3].length).toEqual(4);
        expect(resultParts[4].length).toEqual(12);
    });

    it("returns new Guid each time", function() {
        var guid1 = Mint.utils.createGuid();
        var guid2 = Mint.utils.createGuid();
        
        expect(guid1).not.toEqual(guid2);
    });
});