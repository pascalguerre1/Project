module.exports = function(app) {
    require("./models/models.server.js");
    require("./services/user.service.server.js")(app);
};