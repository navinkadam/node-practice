let validPostData = ["name", "userName", "email", "phone"];
function mapPostUserData(params) {
  let payload = {};
  Object.keys(params).forEach((key) => {
    if (!validPostData.includes(key)) {
      throw { msg: `${key} is field required.`, status: 400 };
    }
    payload[key] = params[key];
  });
  return payload;
}

module.exports = {
  mapPostUserData,
};
