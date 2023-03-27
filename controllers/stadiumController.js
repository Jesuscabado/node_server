import connection from "../config/db.js";

const getAll =  (req,res) => {
    let sql = "SELECT *\
    FROM stadium"
    
    ;
    let results = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const getById = (req, res) => {
    let sql = "SELECT * FROM stadium WHERE idstadium = ?";
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const create = (req, res) => {
    let idstadium = req.body.idstadium;
    let name = req.body.name;
    let address = req.body.address;
    let capacity = req.body.capacity;
    let sql = "INSERT INTO stadium (idstadium, name, address,capacity)\
    VALUES (?,?,?,?)";
    connection.query(sql, [idstadium, name, address,capacity], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const update = (req, res) => {
    let idstadium = req.body.idstadium;
    let name = req.body.name;
    let address = req.body.address;
    let capacity = req.body.capacity;
    let sql = "UPDATE stadium\
    SET idstadium=?, name=?, address=?, capacity=?\
    WHERE idstadium=?";
    connection.query(sql, [idstadium, name, address,capacity], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
};

const borrar = (req, res) => {
    let idstadium = req.params.id;
    let sql = "DELETE FROM stadium\
    WHERE idstadium=?";
    connection.query(sql, [idstadium], (err, result) => {
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