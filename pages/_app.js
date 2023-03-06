import { useEffect, useState } from "react";

import Alert from "../Components/Others/Alert";

import { UserContextProvider, AlertContextProvider } from "../Context/AppContext";
import { baseapiurl, discordcdnurl } from "../Service/constante";

import "../Style/dashboard.scss";
import "../Style/error.scss";
import "../Style/loader.scss";
import "../Style/style.scss";
import "../Style/alert.scss";
import { LanguageProvider } from "../Context/Localization";

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState({
    display: false,
    type: "",
    message: ""
  })
  
  useEffect(() => {
    async function getData() {
        const access_token = localStorage.getItem("access_token");

        if (access_token) {
            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${access_token}`
                }
            };

            const request = await fetch(`${baseapiurl}/discord/userinfo/`, requestOptions);
            if(request.status !== 200) {
              localStorage.clear()
              return setAlert({ display: true, type: "error", message: "Se reconnecter" })
            };
            const res = await request.json();

            let items = {
                avatar: `${discordcdnurl}/avatars/${res.id}/${res.avatar}.png`,
                user_id: res.id,
                username: `${res.username}`,
                access_token: access_token
            }

            setUser(items)
        }
    }
    
    getData()
  }, [])
  
  return (
    <AlertContextProvider value={{alert, setAlert}}>
      <UserContextProvider value={{user, setUser}}>
        <LanguageProvider>
          <Alert />
          <Component {...pageProps} />
        </LanguageProvider>
      </UserContextProvider>
    </AlertContextProvider>
  )
}

export default MyApp
