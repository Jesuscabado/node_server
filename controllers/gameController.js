import connection from "../config/db.js";

const getAll =  (req,res) => {
    let sql = "SELECT *\
    FROM game"
    
    ;
    let results = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getById = (req, res) => {
    let sql = "SELECT * FROM game WHERE idgame = ?";
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const create = (req, res) => {
    let idgame = req.body.idgame;
    let name = req.body.name;
    let datetime = req.body.datetime;
    let idstadium = req.body.idstadium;
    let idtournament = req.body.idtournament;
    let sql = "INSERT INTO game (idgame, name, datetime, idstadium, idtournament)\
    VALUES (?,?,?,?,?)";
    connection.query(sql, [idgame, name, datetime, idstadium, idtournament], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const update = (req, res) => {
    let idgame = req.body.idgame;
    let name = req.body.name;
    let datetime = req.body.datetime;
    let idstadium = req.body.idstadium;
    let idtournament = req.body.idtournament;
    let sql = "UPDATE game\
    SET idgame=?, name=?, datetime=?, idstadium=?, idtournament=?\
    WHERE idgame=?";
    connection.query(sql, [idgame,name,datetime,idstadium,idtournament], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const borrar = (req, res) => {
    let idplayer = req.params.id;
    let sql = "DELETE FROM game\
    WHERE idgame=?";
    connection.query(sql, [idplayer], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};


export default {
    getAll,
    getById,
    create,
    update,
    borrar
} 