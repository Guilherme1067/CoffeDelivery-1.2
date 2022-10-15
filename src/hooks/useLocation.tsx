import { useEffect, useState } from "react"
import Geocode from "react-geocode";

export const useLocation = () => {
  const [location, setLocation] = useState({ state: "", city: "" })
  useEffect(() => {
    getLocation();
  }, [])
  Geocode.setApiKey(import.meta.env.VITE_API_ACCESS_TOKEN);


  const getLocation = async () => {
    const geoSuccess = async (position: any) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      return await codeLatLng(latitude, longitude)
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess);
    }

  }


  const geoError = () => {
    alert("Geocoder failed.")
  }


  const codeLatLng = async (lat: any, lng: any) => {
    Geocode.setRegion("BR")
    Geocode.setLanguage("pt-BR")
    const response = await Geocode.fromLatLng(lat, lng)
    const address = response.results[9].formatted_address
    const [city, rest] = address.split("-")
    const [state] = rest.split(",")
    const location = {
      state,
      city
    }
    setLocation(location)
  }

  return {
    location
  }
}