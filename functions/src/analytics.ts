import {
  https, HttpsFunction, Request, Response,
} from "firebase-functions";
import {
  MostVisitedPages, Page, Credentials,
} from "@elianvancutsem/mostvisitedpages";

interface AnalyticsPage {
  type: string
  title: string
  link: string
  views: number | undefined
}

export const analytics: HttpsFunction = https.onRequest(
    async (req: Request, res: Response) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST");
      res.setHeader("Content-Type", "application/json");

      if (req.method === "OPTIONS") {
        // stop preflight requests here
        res.status(204).send();
        return;
      }

      const credentials: Credentials = {
        client_email: process.env.GA_EMAIL ?? "",
        private_key: process.env.GA_KEY ?? "",
      };

      const mostVisitedPages = new MostVisitedPages(
          credentials, process.env.GA_PROPERTY ?? "",
          {excludeUrls: [
            "www.elian.codes/",
          ]},
      );
      const rawPages: Page[] = await mostVisitedPages.getPageViews(5);
      const result = rawPages.map((page: Page) => {
        const newPage: AnalyticsPage = {
          type: "blogpost",
          title: page.title.replace("Elian Codes | ", ""),
          link: `https://${page.url}`,
          views: page.views,
        };
        return newPage;
      });
      res.status(200).send(result);
    });
