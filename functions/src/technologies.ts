import {https, HttpsFunction, Request, Response} from "firebase-functions";
import * as admin from "firebase-admin";

interface Technology {
  name: string
  link: string
}

export const technologies: HttpsFunction = https.onRequest(
    async (req: Request, res: Response) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST");
      res.setHeader("Content-Type", "application/json");

      if (req.method === "OPTIONS") {
        // stop preflight requests here
        res.status(204).send();
        return;
      }

      !admin.apps.length ? admin.initializeApp() : admin.app();
      const db = admin.firestore();

      const technologies: Technology[] = (
        await db.collection("technologies").get()
      ).docs.map((doc) => doc.data())
          .map((technology): Technology => {
            return {
              name: technology.name,
              link: technology.link,
            };
          });
      res.json(technologies);
    });
