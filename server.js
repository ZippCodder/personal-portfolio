const http = require("http");
const https = require("https");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");
const { exec } = require("node:child_process");
require("dotenv").config();
 const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
     user: "deon.edward.rich@gmail.com",
     pass: `${process.env.APP_PASSWORD}`
    },
  });

const protocol = (process.env.MODE === "development") ? http:https;
const server = protocol.createServer((process.env.MODE === "production") ? {key: fs.readFileSync(process.env.KEY_PATH), cert: fs.readFileSync(process.env.CERT_PATH)}:undefined);

server.on("request",(req,res) => {
 let contentType = "text/plain", file, body = "";
 
  req.on("data", (chunck) => {
    body += chunck?.toString();
  });
  req.on("end", () => {
    handleRequest();
  });

function handleRequest() {
 if (req.url === "/" || req.url === "/projects") {
 try {
  file = fs.readFileSync(__dirname + "/src/pages/index.html");
 } catch (err) {
  console.log(err);
 }
 
 res.setHeader("Content-Type", "text/html");
 res.statusCode = 200;
 res.end(file);
 
 return; 
 } else if (req.url === "/email") {
  let email = JSON.parse(body);
  let finalEmail = {
     from: "deon.edward.rich@gmail.com", 
     to: "deon.edward.rich@gmail.com", 
     subject: email.subject, 
     text: email.body
   }
  transporter.sendMail(finalEmail, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent.");
    }
  });

   return; 
 }

 switch (path.parse(req.url).ext) {
  case ".html": {
   contentType = "text/html";
  }; 
  break;
  case ".css": {
   contentType = "text/css";
  };
  break;
  case ".js": {
   contentType = "text/javascript";
  }
  break; 
  default: {
   contentType = "image/png";
  }
 }

 try {
  file = fs.readFileSync(__dirname + req.url);
 } catch (err) {
  console.log(err);
 }

 res.setHeader("Content-Type",contentType);
 res.statusCode = 200;
 res.end(file);
}
});

server.listen(process.env.PORT,function() {
 console.log("Server is active...");
});

