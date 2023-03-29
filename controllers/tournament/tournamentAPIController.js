import Tournament from "../../models/tournament.js";
import Game from "../../models/game.js";
import Team from "../../models/team.js";
import Stadium from "../../models/stadium.js";

const getAll =  async (req,res) => {
    try{
        let tournaments = await Tournament.findAll({
            attributes: ['idtournament', 'name'],
            include: [
                {
                model: Team,
                attributes:['name', 'idteam'],
                as: 'team'
            },
            {
                model: Game,
                attributes:['idgame', 'name',],
                as: 'Game'
            },
            {
                model: Stadium,
                attributes:['idstadium', 'name','address', 'capacity'],
                as: 'Stadium'
            }]
        });
        res.send(tournaments);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error ocurred while retrieving tournaments."
        });
    }
};
    
const getById = async (req, res) => {
    try {
        let tournament = await Tournament.findAll({
            attributes: ['idtournament', 'name'],
            include: [
                {
                model: Team,
                attributes:['name', 'idteam'],
                as: 'team'
            },
            {
                model: Game,
                attributes:['idgame', 'name', 'capacity'],
                as: 'Game'
            }]
        });
        if (!tournament) {
            res.status(404).send({
                message: `Cannot find tournament witch id=${id}.`
            }); 
        } else{
            res.send(tournament);
        }
    } catch (error) {
        res.status(500).send ({
            message: error.message || "Some error ocurred while retrieving tournaments."
        });
    }
    
};
    const create = async (req, res) => {
        try{
            let name = req.body.name;
            let last_name = req.body.last_name;
            let age = req.body.age;
            let idteam = req.body.idteam;
            let tournament = await Tournament.create({"name":name, "last_name":last_name, "age":age, "idteam":idteam});
            res.send(tournament);
        } catch (error){
            res.status(500).send ({
                message: error.message || "Some error ocurred while creating a tournament."
            });
        }
    }
    const update = async(req, res) => {
        try{
            let name = req.body.name;
            let last_name = req.body.last_name;
            let age = req.body.age;
            let idteam = req.body.idteam;
            let idtournament = req.params.id;
            let tournament = await Tournament.update({"name":name, "last_name":last_name, "age":age, "idteam":idteam},{
                where: {
                    idtournament:idtournament
                }
            });
       
            res.send(tournament);
        } catch (error) {
            res.status(500).send ({
                message: error.message || "Some error ocurred while updating a tournament."
        });
    }
}
const borrar = async (req,res) => {
    try{
        let idtournament = req.params.id;
        let tournament = await Tournament.destroy({
            where: {
                idtournament:idtournament
            }
        });
        console.log(tournament);
        if (tournament == 0) {
            res.status(404).send({
                message: `Tournament with id=${idtournament} not found`
            });
        }
        else {
        res.send("tournament deleted");
        }
    } catch (error) {
        res.status(500).send ({
            message: error.message || "Some error occurred while deleting a tournament."
         });
    }
}


export default {
    getAll,
    getById,
    create,
    update,
    borrar
} 