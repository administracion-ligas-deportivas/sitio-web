// MERN = Mongo + Express + React + Node
//Dev= Node.js server + React server
//Prod= Node.js server + static react files

const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');

//Si se hace el import desde ./config/db.js da error de typescript, se puede, no se recomienda
const mariadb = require ('mariadb');

const pool = mariadb.createPool(
    {
        host: "localhost",
        user: "root",
        password: "da7a_Bas3",
        port: 3310,
        database: "ligas_deportivas",
    }
);

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern-stack-trial');

app.post('/api/Register', async (req, res) =>
{
    console.log(req.body);
    try{
            const createUser = await User.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.correo,
            password: req.body.password
        });
        res.json({status: 'ok'});
    }
    catch(err)
    {
        res.json({status: 'error', error: 'Duplicate email'});
    }

    //res.json({status: 'ok'});
});

app.post('/api/Login', async (req, res) =>
{
    const user = await User.findOne({email: req.body.correo, password: req.body.password});

    if(user)
    {
        return res.json({status:'ok', user: true});
    }
     else return res.json({status: 'error', user: false}); 
});


app.listen(1337, () =>
{
    console.log('Server started on port 1337');
})