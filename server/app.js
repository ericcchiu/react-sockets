const express = require("express"); 
const http = require("http"); 
const socketIo = require("scoket.io"); 
const axios = require("axios"); 

const port = process.env.PORT || 4001; 
const index = require("./routes/index"); 

const app = express(); 
app.use(index); 

const server = http.createServer(app);

// Connect ExpressJS to Socket.IO
const io = socketIo(server); 

const getApiAndEmit = "TODO";