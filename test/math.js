assert = require("chai").assert;
var math = require("../src/math.js")
var fMath = math.floatMath;

let tolerance = 0.00001;

describe("floatMath", () => {
    it("fAdd, fSub, fMul, fDiv", () => {
    });
});

describe("math.js", () => {
    it("working exact", () => {
        // Weight ratio 1
        assert.equal(1, fMath.swapImath(2, 2, 2, 1, 1, 0));
        // Weight ratio 1
        assert.equal(10, fMath.swapImath(20, 20, 20, 10, 10, 0));
        // Weight ratio 2
        assert.equal(15, fMath.swapImath(20, 20, 20, 2, 1, 0));
        // Weight ratio 3
        assert.equal(14, fMath.swapImath(16, 16, 16, 3, 1, 0));
    });
    it("should be working exact", () => {
        // Weight ratio 1/2
        assert.closeTo(10, fMath.swapImath(30, 4, 5, 1, 2, 0), tolerance);
    });
    it("should be working exact", () => {
        // Weight ratio 1/3
        assert.closeTo(30, fMath.swapImath(90, 8, 19, 1, 3, 0), tolerance); 
    });
    it("working _Approx", () => {
        assert.closeTo(1, fMath.swapImath_Approx(2, 2, 2, 1, 1, 0), tolerance);
        assert.closeTo(10, fMath.swapImath_Approx(20, 20, 20, 10, 10, 0), tolerance);
         // Weight ratio 2
        assert.closeTo(15, fMath.swapImath_Approx(20, 20, 20, 2, 1, 0), tolerance);
         // Weight ratio 3
        assert.closeTo(14, fMath.swapImath_Approx(16, 16, 16, 3, 1, 0), tolerance);
    });
     it("working _Approx2", () => {
        assert.closeTo(1, fMath.swapImath_Approx2(2, 2, 2, 1, 1, 0), tolerance);
        assert.closeTo(10, fMath.swapImath_Approx2(20, 20, 20, 10, 10, 0), tolerance);
    });
    it("broken _Approx2 - ratio > 1", () => {
         // These don't work because the approx formula is still
         // only the <1 case
         // Weight ratio 2
        assert.closeTo(15, fMath.swapImath_Approx2(20, 20, 20, 2, 1, 0), tolerance);
         // Weight ratio 3
        assert.closeTo(14, fMath.swapImath_Approx2(16, 16, 16, 3, 1, 0), tolerance);
    });
    

    it("should throw for bad arguments", () => {
        assert.throws(() => {
            fMath.swapImath(10, 10, 11, 1, 0);
        });
        assert.throws(() => {
            fMath.swapImath(0, 0, 1, 1, 1);
        });
    });
});
