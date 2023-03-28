import connection from "../config/db.js";

const getAll =  (req,res) => {
    let sql = "SELECT *\
    FROM tournament"
    
    ;
    let results = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getById = (req, res) => {
    let sql = "SELECT * FROM tournament WHERE idtournament = ?";
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const create = (req, res) => {
    let idtournament = req.body.tournament;
    let name = req.body.name;
    
    let sql = "INSERT INTO tournament (idtournament, name)\
    VALUES (?,?)";
    connection.query(sql, [idtournament, name], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const update = (req, res) => {
    let idtournament=req.body.idtournament;
    let name = req.body.name;
    
    let sql = "UPDATE idtournament\
    SET , idtournament=?, name=?\
    WHERE idtournament=?";
    connection.query(sql, [idtournament, name], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const borrar = (req, res) => {
    let idtournament = req.params.id;
    let sql = "DELETE FROM tournament\
    WHERE idtournament=?";
    connection.query(sql, [idtournament], (err, result) => {
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