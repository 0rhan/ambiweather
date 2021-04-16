import { BASE_URL } from "../api/constants/";

export default class Fetcher {

  constructor() {
    this.baseURL = BASE_URL
  }

  createURL(url, params) {
    const queryString = new URLSearchParams(params).toString();
    return `${this.baseURL}${url}?${queryString}`
  }

  async get(url, params) {
    try {
      //stringify params object to query string
      const requestURL = this.createURL(url, params)

      // fetch configs
      const config = {method: "GET"}

      const response = await fetch(requestURL, config);

      return response.json();

    } catch (e) {
      console.log(e);
    }
  }
}


