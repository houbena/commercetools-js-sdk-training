const { getProductTypes } = require('./handson/product.js');
const log = require('./logger.js').log;

// Complete the getProductTypes function in ./handson/product.js
// https://docs.commercetools.com/http-api-projects-productTypes.html#query-producttypes

getProductTypes()
  .then(log)
  .catch(log);
