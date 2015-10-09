var file1 = require('./file1.jsx');
var file2 = require('./file2.jsx');

var React = require('react');
var Hello = require('./hello.jsx');

$( document ).ready(function() {
  React.render(<Hello />, document.getElementById('an-id'))
});

