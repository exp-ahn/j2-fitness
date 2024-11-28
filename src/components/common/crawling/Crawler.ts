import axios from "axios";
// import { Cheerio, CheerioAPI, CheerioOptions, CheerioRequestOptions } from "cheerio";

export default class WebCrawler {
    public static async scrapeWithCheerio(): Promise<string[]> {
        const url = '/api/dmfmtm?categoryNo=0&listStyle=post&tab=1';
        const response = await axios.get(url);

        console.log("HTML :: ", response.data);
        return [];
    }
}