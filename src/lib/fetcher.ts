import { BASE_URL, DEFAULT_APP_ID } from "api/constants/";

class Fetcher {
  baseURL: string = BASE_URL;
  appid: string = DEFAULT_APP_ID;

  constructor(appid?: string) {
    if (typeof appid === "string") {
      this.appid = appid;
    }
  }

  // Method for creating query url from object params
  private createRequestURL(url: string, query: any): string {
    const params = {
      ...query,
      appid: this.appid,
    };

    const queryString = new URLSearchParams(params).toString();

    return `${this.baseURL}${url}?${queryString}`;
  }

  private handleResponseError(response: Response) {
    if (!response.ok) {
      throw Error("fetching error");
    }
  }

  // Method for get request
  async get(url: string, query: any) {
      //stringify params object to query string
      const requestURL: string = this.createRequestURL(url, query);

      // fetch configs
      const config = { method: "GET" };

      const response = await fetch(requestURL, config);
      this.handleResponseError(response);
      const responseContent = await response.json();
      return responseContent;
    }
}

export default new Fetcher();
