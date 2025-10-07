import express, {
  type Express,
  type Request,
  type Response,
  static as expressStatic,
} from "express";
import fs from "fs";
import type { Server } from "http";
import { createServer as createViteServer } from "vite";

export function log(message: string) {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [express] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const vite = await createViteServer({
    server: {
      middlewareMode: true,
      hmr: { server },
    },
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req: Request, res: Response, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = fs.readFileSync("index.html", "utf-8");
      const template = await vite.transformIndexHtml(url, clientTemplate);

      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath = "./dist/public";

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(expressStatic(distPath));

  app.use("*", (_req, res) => {
    res.sendFile("index.html", { root: distPath });
  });
}
