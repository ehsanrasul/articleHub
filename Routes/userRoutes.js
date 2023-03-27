const User = require("../models/user");
const usersRouter = require("express").Router();

usersRouter.get("/", async (request, response) => {
    const users = await User.find({}).populate("articles", {
        _id:1,
        title: 1,
        body: 1,
        author: 1,
        published: 1,
        tags: 1,
    });
    response.json(users.map((user) => user.toJSON()));
  });


usersRouter.post("/", async (request, response) => {
    const body = request.body;
    const user = new User({
        username: body.username,
        name: body.name,
        password: body.password,
    });
    const savedUser = await user.save();
    response.json(savedUser);
});


module.exports = usersRouter;