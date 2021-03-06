const { queryProducts, searchProducts } = require('./handson/product.js');
const log = require('./logger.js').log;
// TODO 4.E : Implement a function that queries products by a given attribute name and value
//            Also return the productType inline in the JSON to allow a UI to render it including Attribute Labels


queryProducts({attributeName: 'authors', attributeValue: 'JK. Rowling'}).then(log).catch(log);

searchProducts({attributeName: 'authors', attributeValue: 'JK. Rowling', locale: 'en', userInput: 'JK. Rowling'}).then(log).catch(log);