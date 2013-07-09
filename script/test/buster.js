var config = module.exports;
config["example"] = {
    environment: "browser",
    rootPath: "..",
    resources: [
        "example/**/*.js"
    ],
    tests: [
        "test/**/*-test.js"
    ],
    libs: [
        "test/require-config.js",
        "require-jquery.js"
    ],
    extensions: [
        require("buster-amd")
    ]
};
