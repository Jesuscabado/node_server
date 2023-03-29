import connection from "../../config/db.js";
import Team from "../../models/team.js";
import Player from "../../models/player.js";
import stadium from "../../models/stadium.js";

const getAll =  async (req,res) => {
    try{
        let teams = await Team.findAll({
            attributes: ['idteam', 'name', 'creation_date'],
            include: [ 
                {
                model: Player,
                attributes:['idplayer', 'name', 'last_name', 'age'],
                as: 'player'
                } ,
                {
                    model: stadium,
                    attributes:['idstadium', 'name', 'capacity'],
                    as: 'stadium'
                } ,
                {
                    model: Player,
                    attributes:['idplayer', 'name', 'last_name', 'age'],
                    as: 'captain'
                    } 
             ]  
        });
        res.send(teams);
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error ocurred while retrieving teams."
        });
    }
};

const getById = async (req, res) => {
    try {
        let id = req.params.id;
        let team = await Team.findByPk(id,{
            attributes: ['idteam', 'name', 'creation_date'],
            include: [ 
                {
                model: Player,
                attributes:['idplayer', 'name', 'last_name', 'age'],
                as: 'player'
                } ,
                {
                    model: stadium,
                    attributes:['idstadium', 'name', 'capacity'],
                    as: 'stadium'
                } ,
                {
                    model: Player,
                    attributes:['idplayer', 'name', 'last_name', 'age'],
                    as: 'captain'
                    } 
             ]  
        }); 
        if (!team) {
            res.status(404).send({
                message: `Cannot find team witch id=${id}.`
            }); 
        } else{
            res.send(team);
        }
    } catch (error) {
        res.status(500).send ({
            message: error.message || "Some error ocurred while retrieving teams."
        });
    }
    
};

const create = async (req, res) => {
    try{
        let name = req.body.name;
        let idcaptain = req.body.idcaptain;
        let creation_date = req.body.creation_date;
        let idstadium = req.body.idstadium;
        let team = await Team.create({"name":name, "creation_date":creation_date, "idcaptain":idcaptain,"idstadium":idstadium });
        res.send(team);
    } catch (error){
        res.status(500).send ({
            message: error.message || "Some error ocurred while creating a team."
        });
    }
}

const update = async(req, res) => {
    try{
        let idteam = req.body.idteam;
        let name = req.body.name;
        let creation_date = req.body.creation_date;
        let idcaptain = req.body.idcaptain;
        let idstadium = req.body.idstadium;
        let team = await Team.create({"name":name, "creation_date":creation_date, "idcaptain":idcaptain,"idstadium":idstadium },{
            where: {
                idteam:idteam
            }
        });
   
        res.send(team);
    } catch (error) {
        res.status(500).send ({
            message: error.message || "Some error ocurred while updating a team."
        });
    }
}

const borrar = async (req,res) => {
    try{
        let idteam = req.params.id;
        let team = await Team.destroy({
            where: {
                idteam:idteam
            }
        });
        console.log(team);
        if (team == 0) {
            res.status(404).send({
                message: `Team with id=${idteam} not found`
            });
        }
        else {
        res.send("team deleted");
        }
    } catch (error) {
        res.status(500).send ({
            message: error.message || "Some error occurred while deleting a team."
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