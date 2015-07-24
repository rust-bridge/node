var ref = require("ref");
var ffi = require("ffi");
var struct = require('ref-struct');

var rust_bridge = ffi.Library('../v8-sys/target/debug/libv8', {
  'hello_node': [ 'int', [] ]
});


module.exports = {
        hello: function() {
                console.log('hello');
                var s = libm.hello_node();
                console.log(s);
                console.log('goodbye');
        }
}
