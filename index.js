'use strict';

const fs = require('fs');
const serveFavicon = require('serve-favicon');

const isProduction = process.env.NODE_ENV !== 'production';

module.exports = (path, { debug = isProduction } = {}) => {
  const exists = fs.existsSync(path);
  if (exists) return serveFavicon(path);
  if (debug) console.error(new Error('SERVE_FAVICON_SAFE_MISSING_FILE'));
  return (req, res, next) => next();
};
