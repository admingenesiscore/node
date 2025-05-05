const { usersModel } = require("../models/usersModel");
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
  const getAll = await usersModel.find({});
  try {
    res.status(200).json({ message: "success getAllUsers", data: getAll });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUsersById = async (req, res) => {
  const id = req.params.id;
  const getAllById = await usersModel.findById(id);
  try {
    res.status(200).json({ message: "success getUsersById", data: getAllById });
  } catch (error) {
    console.log(error.message);
  }
};

exports.createUsers = async (req, res) => {
  let body = req.body;

  body.password = await bcrypt.hash(body.password, 10);
  const createNewUser = await usersModel.insertOne(body);
  try {
    createNewUser.password = "******";
    res
      .status(200)
      .json({ message: "success createUsers", data: createNewUser });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteUsers = async (req, res) => {
  const id = req.params.id;
  const deleteUser = await usersModel.findByIdAndDelete(id);
  try {
    res.status(200).json({ message: "success deleteUsers", data: deleteUser });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateUsers = async (req, res) => {
  const id = req.params.id;
  const updateUser = await usersModel.findByIdAndUpdate(id, req.body);
  try {
    res.status(200).json({ message: "success updateUsers", data: updateUser });
  } catch (error) {
    console.log(error.message);
  }
};
