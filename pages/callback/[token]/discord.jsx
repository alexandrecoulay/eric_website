import React, { useContext, useEffect } from 'react';
import { useRouter } from "next/router";

import { Loader } from "../../../Components/Others";
import { UserContext } from '../../../Context/AppContext';
import { baseapiurl, discordcdnurl, oauth2url } from '../../../Service/constante';

function Callback() {
    
  const router = useRouter();
  const { token } = router.query;
  const { setUser } = useContext(UserContext)

  useEffect(() => {
    async function getData() {

      if (token) {
          const requestOptions = {
              method: "GET",
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          };

          const request = await fetch(`${baseapiurl}/userinfo/`, requestOptions);
          
          if(request.status !== 200) return router.push(oauth2url);

          const res = await request.json();

          let items = {
              avatar: `${discordcdnurl}/avatars/${res.id}/${res.avatar}.png`,
              user_id: res.id,
              username: `${res.username}`,
              access_token: token
          }

          localStorage.setItem("access_token", token);
          setUser(items);
          
          router.push("/")
      }
  }
  getData()
  }, [token])

  return (
    <div>
      <Loader />
    </div>
  );
}
export default Callback;