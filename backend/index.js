const express = require("express");
const cors = require("cors");
const axios = require('axios')

/** with cors we can call server from any other origin */
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
      const r = await axios.put(
        "https://api.chatengine.io/users/",
        { username: username, secret: username, first_name: username },
        { headers: { "Private-Key": "acc73ed8-33da-479a-a54a-85eb39ecbbfb" } }
      );
   
    return res.status(r.status).json(r.data);

    //return res.status(response.status).json(response.data)
  } catch (e) {
    return res.json("error") 
  }

});

app.listen(3001);
