import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/user.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";
import eventRoutes from "./routes/event.routes.js";
import committeeRoutes from "./routes/committee.routes.js";
import ihsasRoutes from "./routes/ihsas.routes.js";
import staffRoutes from "./routes/staff.routes.js";
import departmentRoutes from "./routes/department.routes.js";



import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
import bodyParser from "body-parser";


const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/committee", committeeRoutes);
app.use("/api/ihsas", ihsasRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/department", departmentRoutes);


app.use(express.static(path.join(__dirname,"/frontend/dist")))
  


app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

// app.get("/", (req, res) => {
//     // root route http://localhost:5000/
//     res.send("Hello Arif")
// });


server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)   
});
