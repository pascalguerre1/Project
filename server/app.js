module.exports = function(app) {
    require("./models/models.server.js");
    require("./services/user.service.server.js")(app);
    // require("./services/review.service.server.js")(app);   
};