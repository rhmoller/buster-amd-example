define(["greeter"], function(greeter) {
    buster.testCase("greeter tests", {
        "greets by name" : function() {
            var name = "John Doe";
            var msg = greeter.greet(name);
            assert.equals("Hello, John Doe!", msg);
        }
    });
});