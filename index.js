
const express = require('express');
const app = express();
const port = 3000
const bodyParser = require('body-parser');
const db = require('./config/Database');
const response = require('./controller/response');

app.use(bodyParser.json())

app.get("/", (req, res) => {
    response(200, "Data_All", "success message", res)
})


// GET ALL DATA
app.get("/mahasiswa", (req, res) => {
    const query_core = "SELECT * FROM tb_mahasiswa";
    db.query(query_core, (error, result) =>{
        if(error) throw error
        response(200, result, "success message", res)
    })
})


// GET BY ID
app.get("/mahasiswa/:nim", (req, res) => {
    const nim = req.params.nim
    const query_core = `SELECT * FROM tb_mahasiswa WHERE nim=${nim}`;
    db.query(query_core, (error, result) =>{
        if(error) throw error
        response(200, result, `success message with nim ${nim}`, res)
    })
})


// INSERT DATA
app.post("/mahasiswa", (req, res) => {
    const { nim, name, class_room, address} = req.body
    const query_core = `INSERT INTO tb_mahasiswa (nim, name, class_room, address) VALUES (${nim} , '${name}', '${class_room }', '${address}')`;
    db.query(query_core, (error, result) => {
        if(error) response(500, "invalid", "error", res);
        if(result?.affectedRows) {
            const data = {
                isSuccess: result.affectedRows,
                id: result.insertId,
            }
            response(200, data, "success insert data", res)
            console.log("data_masuk database")
        }
    })
    
})



// PUT UPDATE
app.put("/mahasiswa", (req, res) => {
    const {nim, name, class_room, address} = req.body;
    const query_core = `UPDATE tb_mahasiswa SET name = '${name}', class_room = '${class_room}',address = '${address}' WHERE nim = ${nim}`;
    db.query(query_core, (error, result) => {
        if(error) response(500, "invalid", "error", res);
        if(result?.affectedRows){
            const data = {
                isSuccess: result.affectedRows,
                message: result.message,
            }
            response(200, data, "successfuly updated data", res)
        }else{
            response(500, "ada settingan invalid", "Ada Error", res)
        }
    })
})



// DELETE PART
app.delete("/mahasiswa", (req, res)=> {
    const {nim} = req.body;
    const query_core = `DELETE FROM tb_mahasiswa WHERE nim = ${nim}`;
    db.query(query_core, (error, result) => {
        if(error) response(500, "invalid", "error", res)
        if(result?.affectedRows){
            const data = {
                isDeleted: result.affectedRows
            }
            response(200, data, "Deleted Nais", res)
        }else{
            response(404, "user not found", "error", res)
        }

    })

})















// nais listener====================
app.listen(port, ()=>{
    console.log(`Example app listen on port http://localhost:${port}`);
})






// app.get("/", (req, res) => {
//     res.json("Oke maseh")
// })
// app.get("/mahasiswa", (req, res) => {
//     res.send("Oke maseh list mahasiswa")
// })
// app.get("/mahasiswa/:id", (req, res) => {
//     const id = req.params.id;
//     res.send(`Oke maseh list mahasiswa by id ${id}`)
// })
// app.post("/mahasiswa/post", (req, res) => {
//     res.send("mahasiswa post")
// })
// app.put("/mahasiswa/put", (req, res) => {
//     res.send("mahasiswa update")
// })
// app.delete("/mahasiswa/delete", (req, res) => {
//     res.send("mahasiswa delete")
// })
// app.get('/', (req, res) => {
//     const query_core = "SELECT * FROM tb_mahasiswa";
//     db.query(query_core, (error, result)=>{
//         console.log(result);
//         response(200, result, "get all data from mahasiswa", res);
//     })
// })
// app.get('/find', (req, res) => {
//     const query_core = `SELECT name FROM tb_mahasiswa WHERE nim = ${req.query.nim}`;
//     db.query(query_core, (error, result) => {
//         response(200, result, "Nais name tuan : ", res)
//     })
// })
// app.post('/login', (req, res) => {
//     console.log(req.body);
//     const username = req.body.username
//     if (username = usernameFromDbExist){
//         res.status(400).send("username tidak dapat digunakan")
//     } 
//     res.send('login berhasil tuan')
// })
// app.put('/username', (req, res) => {
//     console.log(req.body);
//     res.send('update berhasil')
// })










// import express from "express";
// import cors from "cors";
// import UserRoute from "./routes/UserRoute.js"

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(UserRoute);
// app.listen(5000, ()=> console.log('Server up and running!, localhost:5000'));
