var AccessSniff = require('access-sniff');

var options = {
  reportLevels: {
    notice: false,
    warning: true,
    error: true
  }
};

AccessSniff
.default(['dist/*.html'], options);
