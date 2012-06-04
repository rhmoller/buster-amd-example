define(function() {
    buster.testCase("calculator tests with embedded require", {

        setUp: function(done) {
            var self = this;
            require(['modulea/calc'], function(calc) {
                self.calc = calc;
                done();
            });
        },

        "calculates sum" : function() {
            assert.equals(5, this.calc.add(2, 3));
        }
    });
});