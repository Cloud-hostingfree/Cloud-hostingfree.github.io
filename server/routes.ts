import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage.js";
import { insertProfileSchema } from "../shared/schema.js";

export function registerRoutes(app: Express): Server {
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const result = insertProfileSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid input", errors: result.error });
      }

      const existingProfile = await storage.getProfileByEmail(result.data.email);
      if (existingProfile) {
        return res.status(400).json({ message: "Email already registered" });
      }

      const profile = await storage.createProfile(result.data);
      res.json(profile);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }

      const profile = await storage.getProfileByEmail(email);
      if (!profile) {
        return res.status(404).json({ message: "User not found" });
      }

      res.json(profile);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.get("/api/profile/:userId", async (req, res) => {
    try {
      const profile = await storage.getProfile(req.params.userId);
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
      res.json(profile);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  app.patch("/api/profile/:userId", async (req, res) => {
    try {
      const profile = await storage.updateProfile(req.params.userId, req.body);
      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
      res.json(profile);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
