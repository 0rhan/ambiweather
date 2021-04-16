import Fetcher from "../utils/fetcher"

const fetcher = new Fetcher()

// API resource for search locations
const GEOCODE_RESOURCE = "/geo/1.0/direct"

const appid = "cc0c362b45f7692013877d839f17c4fd"



export const requestLocationsByName = async (name) => {

    const params = {
      q: name,
      appid,
    }

    const data = await fetcher.get(GEOCODE_RESOURCE, params)

    console.log(data)

    return data
  }
