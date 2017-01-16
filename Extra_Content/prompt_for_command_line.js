// This code is a node.js replacement for prompt.

console.log("What's your name?");
process.stdin.setEncoding('utf8');
var name;
process.stdin.on('readable', function() {
    name = process.stdin.read();
    if (name !== null) {
        console.log("Hello ".concat(name, ". How are you"));
        process.exit();
    }
});
