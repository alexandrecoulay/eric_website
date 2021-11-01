import React, { useEffect } from 'react';
import { useRouter } from "next/router";

import Loader from '../../Components/Loader';

function Callback() {
    
  const router = useRouter();
  const { token } = router.query;

  useEffect(() => {
    localStorage.setItem("access_token", token); 
    router.push("/")
  }, [token])

  return (
    <div>
      <Loader />
    </div>
  );
}
export default Callback;