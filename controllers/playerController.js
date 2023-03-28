import connection from "../config/db.js";
import Player from "../models/player.js";
import Team from "../models/team.js";
const getAll =  async (req,res) => {
    try{
        let players = await Player.findAll({
            attributes: ['idplayer', 'name', 'last_name', 'age'],
            include: {
                model: Team,
                attributes:['name', 'idteam'],
                as: 'team'
            }
        });
        res.send(players);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error ocurred while retrieving players."
        });
    }
};
    
const getById = async (req, res) => {
    try {
        let id = req.params.id;
        let player = await Player.findByPk(id,{
            attributes: ['idplayer', 'name', 'last_name', 'age'],
            include: {
                model: Team,
                attributes:['name', 'idteam'],
                as: 'team'
            }
        }); 
        if (!player) {
            res.status(404).send({
                message: `Cannot find player witch id=${id}.`
            }); 
        } else{
            res.send(player);
        }
    } catch (error) {
        res.status(500).send ({
            message: error.message || "Some error ocurred while retrieving players."
        });
    }
    
};
    const create = async (req, res) => {
        try{
            let name = req.body.name;
            let last_name = req.body.last_name;
            let age = req.body.age;
            let idteam = req.body.idteam;
            let player = await Player.create({"name":name, "last_name":last_name, "age":age, "idteam":idteam});
            res.send(player);
        } catch (error){
            res.status(500).send ({
                message: error.message || "Some error ocurred while creating a player."
            });
        }
    }
    const update = async(req, res) => {
        try{
            let name = req.body.name;
            let last_name = req.body.last_name;
            let age = req.body.age;
            let idteam = req.body.idteam;
            let idplayer = req.params.id;
            let player = await Player.update({"name":name, "last_name":last_name, "age":age, "idteam":idteam},{
                where: {
                    idplayer:idplayer
                }
            });
            /*opcion 2 se desprende totalmente de la base de datos y es mas progamacion orientada a objetos
            let player = Player.findByPk8idplayer);
            player.name = name;
            player.last_name = last_name;
            player.age = age;
            player.idteam = idteam;
            player.save();
            */
            res.send(player);
        } catch (error) {
            res.status(500).send ({
                message: error.message || "Some error ocurred while creating a player."
        });
    }
}
const borrar = async (req,res) => {
    try{
        let idplayer = req.params.id;
        let player = await Player.destroy({
            where: {
                idplayer:idplayer
            }
        });
        console.log(player);
        if (player == 0) {
            res.status(404).send({
                message: `Player with id=${idplayer} not found`
            });
        }
        else {
        res.send("player deleted");
        }
    } catch (error) {
        res.status(500).send ({
            message: error.message || "Some error occurred while deleting a player."
         });
    }
}
/* const borrar = (req, res) => {
    let idplayer = req.params.id;
    let sql = "DELETE FROM player\
    WHERE idplayer=?";
    connection.query(sql, [idplayer], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}; */


export default {
    getAll,
    getById,
    create,
    update,
    borrar
} 