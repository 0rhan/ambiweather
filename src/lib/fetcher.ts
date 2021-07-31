import { BASE_URL, DEFAULT_APP_ID } from "api/constants/";

class Fetcher {
  baseURL: string = BASE_URL;
  appid: string = DEFAULT_APP_ID;

  constructor(appid?: string) {

    if(typeof appid === "string") {
      this.appid = appid;
    }
  }

  // Method for creating query url from object params
  private createRequestURL(url: string, query: any):string {

    const params = {
      ...query,
      appid: this.appid,
    };

    const queryString = new URLSearchParams(params).toString();

    return `${this.baseURL}${url}?${queryString}`;
  }

  // Method for get request
  async get(url: string, query: any) {
    try {
      //stringify params object to query string
      const requestURL:string = this.createRequestURL(url, query);

      // fetch configs
      const config = { method: "GET" };

      const response = await fetch(requestURL, config);

      return response.json();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new Fetcher();
