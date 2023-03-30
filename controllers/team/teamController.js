import Team from "../../models/team.js";
import Player from "../../models/player.js";
import stadium from "../../models/stadium.js";

const getAll =  async () => {
    try{
        let teams = await Team.findAll({
            attributes: ['idteam', 'name', 'creation_date'],
            include: [ 
                {
                model: Player,
                attributes:['idplayer', 'name', 'last_name', 'age'],
                as: 'players'
                } ,
                {
                    model: stadium,
                    attributes:['idstadium', 'name', 'capacity'],
                    as: 'stadium'
                } 
             ]  
        });
        return [0, teams];
  } catch (error) {
    return [1, error];
  }
};

const getById = async (id) => {
    try {
        let team = await Team.findByPk(id,{
            attributes: ['idteam', 'name', 'creation_date'],
            include: [ 
                {
                model: Player,
                attributes:['idplayer', 'name', 'last_name', 'age'],
                as: 'players'
                },
                {
                    model: stadium,
                    attributes:['idstadium', 'name', 'capacity'],
                    as: 'stadium'
                }
             ]  
        }); 
        return [0, team];
    } catch (error) {
      return [1, error];
    }
  };

  const create = async (data) => {
    try {
      let team = await Team.create(data);// en las constantes crear update y borrar obtenemos un resultado numerico seria ideal cambiarlo por let results
      return [0, team];
    } catch (error) {
      return [1, error];
    }
  };

const update = async(data, idteam) => {
    try{
        /* 
        opción 2 (llama dos veces) más orientada a objetos, 
        más programación menos basededatos, 
        si elegimos un id que no existe nos daría error directamentelet team = Team.findByPk(idteam);
        
        idteam  = req.body.idteam;
         name  = req.body.name;
         creation_date = req.body.creation_date;
         idcaptain = req.body.idcaptain;
         idstadium = req.body.idstadium; */
        let team = await Team.update(data,{
            where: {
                idteam:idteam,
            },
        });
        return [0, team];
    } catch (error) {
      return [1, error];
    }
  };

  const borrar = async (idteam) => {
    try {
      let team = await Team.destroy({
        where: {
          idteam: idteam,
        },
      });
      return [0, team];
    } catch (error) {
      return [1, error];
    }
  };


export default {
    getAll,
    getById,
    create,
    update,
    borrar
} 