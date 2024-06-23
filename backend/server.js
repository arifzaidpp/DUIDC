import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import authRoutes from "./routes/auth.routes.js";
import usersRoutes from "./routes/user.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";
import eventRoutes from "./routes/event.routes.js";
import committeeRoutes from "./routes/committee.routes.js";
import ihsasRoutes from "./routes/ihsas.routes.js";
import staffRoutes from "./routes/staff.routes.js";
import departmentRoutes from "./routes/department.routes.js";
import subscribeRoutes from "./routes/subscribe.routes.js";
import pageViewRoutes from "./routes/pageView.routes.js";
import contactRoutes from "./routes/contact.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (assuming frontend build output is in /frontend/dist)
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/committee", committeeRoutes);
app.use("/api/ihsas", ihsasRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/department", departmentRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/views", pageViewRoutes);
app.use("/api/contact", contactRoutes);

// Serve index.html for any other route (React SPA fallback)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
