require(["jquery", "greeter"], function($, greeter) {
    var msg = greeter.greet("World");
    $("#main").html(msg);
});