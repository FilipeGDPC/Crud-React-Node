import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios"; 

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const values =  [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nasc,
    ];

    const q = "INSERT INTO usuarios (nome, email, fone, data_nasc) VALUES (?, ?, ?, ?)";

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário cadastrado com sucesso!");
    });
};