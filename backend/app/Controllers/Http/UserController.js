"use strict";
const User = use("App/Models/User");

class UserController {
  async new({ request, response }) {
    const data = request.only(["email", "password", "access"]);
    const user = await User.create(data);
    return response.status(201).json(user);
  }
}

module.exports = UserController;
