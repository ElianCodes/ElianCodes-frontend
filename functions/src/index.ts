import {https, HttpsFunction, Request, Response} from "firebase-functions";
import * as admin from "firebase-admin";

interface Technology {
  name: string
  link: string
}

export const technologies: HttpsFunction = https.onRequest(
    async (_req: Request, res: Response) => {
      admin.initializeApp({
        projectId: "eliancodes-1632771244788",
      });
      const db = admin.firestore();

      const technologies: Technology[] = await (
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
