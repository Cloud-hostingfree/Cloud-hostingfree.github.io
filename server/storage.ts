import { profiles, type Profile, type InsertProfile } from "../shared/schema.js";
import { db } from "./db.js";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProfile(userId: string): Promise<Profile | undefined>;
  getProfileByEmail(email: string): Promise<Profile | undefined>;
  createProfile(insertProfile: InsertProfile): Promise<Profile>;
  updateProfile(userId: string, data: Partial<InsertProfile>): Promise<Profile | undefined>;
}

export class MemStorage implements IStorage {
  private profiles: Map<string, Profile> = new Map();
  private idCounter = 1;

  async getProfile(userId: string): Promise<Profile | undefined> {
    for (const profile of this.profiles.values()) {
      if (profile.userId === userId) {
        return profile;
      }
    }
    return undefined;
  }

  async getProfileByEmail(email: string): Promise<Profile | undefined> {
    for (const profile of this.profiles.values()) {
      if (profile.email === email) {
        return profile;
      }
    }
    return undefined;
  }

  async createProfile(insertProfile: InsertProfile): Promise<Profile> {
    const profile: Profile = {
      id: this.idCounter++,
      ...insertProfile,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.profiles.set(profile.userId, profile);
    return profile;
  }

  async updateProfile(userId: string, data: Partial<InsertProfile>): Promise<Profile | undefined> {
    const profile = await this.getProfile(userId);
    if (!profile) return undefined;
    
    const updated: Profile = {
      ...profile,
      ...data,
      updatedAt: new Date(),
    };
    this.profiles.set(userId, updated);
    return updated;
  }
}

export const storage = new MemStorage();
