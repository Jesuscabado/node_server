import connection from "../config/db.js";

const getAll =  (req,res) => {
    let sql = "SELECT *\
    FROM team"
    
    ;
    let results = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getById = (req, res) => {
    let sql = "SELECT * FROM team WHERE idteam = ?";
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const create = (req, res) => {
    let idteam = req.body.team;
    let name = req.body.name;
    let creation_date = req.body.creation_date;
    let idcapitan = req.body.idcapitan;
    let sql = "INSERT INTO stadium (idstadium, name, creation_date,idcapitan)\
    VALUES (?,?,?,?)";
    connection.query(sql, [idstadium, name, creation_date,idcapitan], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const update = (req, res) => {
    letidteam=req.body.idteam;
    let name = req.body.name;
    let creation_date = req.body.creation_date;
    let idcapitan = req.body.idcapitan;
    let idstadium = req.body.idstadium;
    let sql = "UPDATE idteam\
    SET , idteam=?, name=?, creation_date=?, idcapitan=?, idstadium=?\
    WHERE idteam=?";
    connection.query(sql, [idteam, name, creation_date, idcapitan, idstadium], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const borrar = (req, res) => {
    let idstadium = req.params.id;
    let sql = "DELETE FROM team\
    WHERE idteam=?";
    connection.query(sql, [idteam], (err, result) => {
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