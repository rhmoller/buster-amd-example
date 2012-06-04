define(["modulea/calc"], function(calc) {

    buster.testCase("calculator tests", {
        "calculates sum" : function() {
            assert.equals(5, calc.add(2, 3));
        }
    });

});