import {https, Request, Response} from "firebase-functions";
import * as admin from "firebase-admin";
import * as cors from "cors";

interface events {
  abstract: string;
  date: Date;
  link: string;
  name: string;
  title: string;
}

admin.initializeApp();

const events = https.onRequest(async (req: Request, res: Response) => {
  const db = admin.firestore();
  const corsHandler = cors({origin: true});
  corsHandler(req, res, async () => {
    const collection = await db.collection("events").get();
    console.log(collection);
    const data: any[] = [];
    collection.forEach((doc) => data.push(doc.data()));
    return res.status(200).json(data);
  });
});

export {events};
