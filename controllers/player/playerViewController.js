import playerController from "./playerController.js";

import Team from "../../models/team.js";

const getAll = async (req, res) => {
  let result = await playerController.getAll();
  if (result[0] === 0) {
    res.render("player/list", { players: result[1] });
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "Some error ocurred while retrieving players.",
    });
  }
};

const getById = async (req, res) => {
  let id = req.params.id;
  let result = await playerController.getById(id);
  if (result[0] === 0) {
    let player = result[1];
    if (!player) {
      res.status(404).send({
        message: `Cannot find player with id=${id}.`,
      });
    } else {
      res.send(player);
    }
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "Some error ocurred while retrieving players",
    });
  }
};

const createForm = async (req,res) => {
  let teams = await Team.findAll({
    attributes: ['idteam', 'name', 'creation_date']
    
});
  res.render("player/new",{teams:teams});
}
const create = async (req, res) => {
  let data = {
    name: req.body.name,
    last_name: req.body.last_name,
    age: req.body.age,
    idteam: req.body.idteam,
  };

  let result = await playerController.create(data);
  if (result[0] === 0) {
    res.send(result[1]);
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "Some error ocurred while retrieving players.",
    });
  }
};

const update = async (req, res) => {
  let data = {
    name: req.body.name,
    last_name: req.body.last_name,
    age: req.body.age,
    idteam: req.body.idteam,
  };

  let idplayer = req.params.id;
  let result = await playerController.update(data, idplayer);

  if (result[0] === 0) {
    res.send(result[1]);
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "Some error ocurred while retrieving players.",
    });
  }
};

const borrar = async (req, res) => {
  let idplayer = req.params.id;
  let result = await playerController.borrar(idplayer);
  if (result === 0) {
    if (result[1] === 0) {
      res.status(404).send({
        message: `Player with id=${id} not found`,
      });
    } else {
      res.send("Player deleted");
    }
  } else {
    let error = result[1];
    res.status(500).send({
      message: error.message || "Some error ocurred while retrieving players.",
    });
  }
};

export default {
  getAll,
  getById,
  createForm,
  create,
  update,
  borrar,
};
