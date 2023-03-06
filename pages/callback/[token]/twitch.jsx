import React, { useContext, useEffect } from 'react';
import { useRouter } from "next/router";

import { Loader } from "../../../Components/Others";
import { UserContext } from '../../../Context/AppContext';
import { baseapiurl, discordcdnurl, oauth2url, websitebaseurl } from '../../../Service/constante';

function Callback() {
    
  const router = useRouter();
  const {user, setUser} = useContext(UserContext)

  useEffect(() => {
    async function getData() {

      const access_token = new URL(`${websitebaseurl}/${router.asPath.replace("#", "?")}`).searchParams.get("access_token")

      if (access_token) {
        const requestOptions = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'client-id': 'zkf5e0vjda2onqkg8iydeda2hdd25r'
            }
        };

        const request = await fetch(`https://api.twitch.tv/helix/users`, requestOptions);
        
        if(request.status !== 200) return;

        const res = await request.json();

        setUser({ ...user, twitch: res.data[0] });

        console.log(user);

        setTimeout(() => {
          router.push("/dashboard/me")
        }, 1000)
        
    }
  }
  getData()
  }, [])

  return (
    <div>
      <Loader />
    </div>
  );
}
export default Callback;