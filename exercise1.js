const { getProject } = require('./handson/project.js');
const log = require('./logger.js').log;

// Complete the functions in
// ./handson/client.js
// ./handson/project.js

// So this code displays the project configuration
// https://docs.commercetools.com/http-api-projects-project.html
getProject()
    .then(log)
    .catch(log);
