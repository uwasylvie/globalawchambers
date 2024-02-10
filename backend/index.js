import express from "express"
import mysql from "mysql"
import cors from "cors";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from "cookie-parser";
const salt = 10;

const app = express()
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "fullstack#2023",
    database: "globallawchamber" ,
    DB_PORT: 3306
    
  });

  app.get("/", (req, res) => {
    res.json("hello World");
  });

  app.get("/messages", (req, res) => {
    const q = "SELECT * FROM messages";
    db.query(q, (err, data) => {
      if (err) {
        console.log(err);
        return res.json(err);
      }
      return res.json(data);
    });
  });

  app.post("/messages", (req, res) => {
    const q = "INSERT INTO messages(`title`, `description`) VALUES (?)";
  
    const values = [
      req.body.title,
      req.body.desc,
      
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.delete("/messages/:id", (req, res) => {
    const messageId = req.params.id;
    const q = " DELETE FROM messages WHERE id = ? ";
  
    db.query(q, [messageId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });

  app.post('/register', (req, res) =>{
    const q = "INSERT INTO users (`name`,`email`,`password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
      if(err) return res.json({Error: "Error for hassing password"});
      const values = [
        req.body.name,
        req.body.email,
        hash
      ]
      db.query(q, [values], (err, result) => {
        if (err) return res.send({Error: "Inserting data Error in server"});
        return res.json({status: "Success"});
      })
    })
  })

  app.post('/login', (req, res) => {
    const q = "SELECT * FROM users WHERE email = ?";
    db.query(q, [req.body.email], (err, data) => {
      if(err) return res.json({Error: "Login error in server"});
      if(data.length > 0) {
        bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
          if(err) return res.json({Error: "Password compare Error"});
          if(response) {
            return res.json({status: "Success"});
          } else {
              return res.json({Error: "Password not matched"});
          }  

          
        })
      } else {
        return res.json({Error: "No email existed"});

      }
      })
    })
    
      
      
       
  

  

  
  

  const PORT = 8800
app.listen(process.env.PORT || PORT, ()=> console.log('Connected to backend' + PORT ))
    