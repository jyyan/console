// Avoid `console` errors in environments that lack a console.
var method;
var noop = function () {};
var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeStamp', 'trace', 'warn'
];
var length = methods.length;

while (length--) {
  method = methods[length];

  // Only stub undefined methods. and in the production env will stub all method
  if (!console[method] || process.env.NODE_ENV === 'production' ) {
    console[method] = noop;
  }
}

if ((typeof module !== "undefined" && module !== null) && module.exports) {
  exports = module.exports = console;
} else {
  window.console = console;
}
