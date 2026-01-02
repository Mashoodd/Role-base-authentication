import express from 'express'

import bcrypt, { genSalt, hash } from 'bcryptjs'

const app = express()

app.use(express.json());

app.post("/register", async (req, res) => {

    const { username , useremail , userpassword  } = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashedpass = await bcrypt.hash(userpassword, salt);

    const userData = {

        username,
        useremail,
        userpassword: hashedpass

    }

    return res.send(userData);
})


app.listen(5000, ()=> {
    console.log("Server is running successfully");
})