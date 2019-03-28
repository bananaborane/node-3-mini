const express = require("express");
require('dotenv').config();
const massive = require('massive');
const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const controller = require('./controller')

massive(CONNECTION_STRING).then(database=>{app.set('db',database)

// database.new_planes()
// .then(planes=>console.log(planes))
// .catch(err=>console.log(err))

// database.get_planes()
// .then(planes=>console.log(planes))
// .catch(err=>console.log(err))

// the COMMENTED CODE ABOVE shows that once the connection is made, it will retrieve NEW_PLANES and GET_PLANES

})

app.use(express.json());

app.get('/api/planes', controller.getPlanes)

// get request is using an ENDPOINT

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
