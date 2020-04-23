const Models = require("../../models");
const helper = require("./helper");
class User {
  async insertUser(params) {
    let payload = helper.mapPostUserData(params);
    console.log("-->", payload);
    let result = await Models.users(payload);
    return result.save();
  }
}
module.exports = User;
