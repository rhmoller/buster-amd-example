require(["jquery", "greeter", "modulea/calc"], function($, greeter, calc) {
    var msg = greeter.greet("World");
    var result = calc.add(2, 3);
    $("#main").html(msg + " 2 + 3 is " + result);
});