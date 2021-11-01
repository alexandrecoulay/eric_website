import React from 'react';
import { useRouter } from "next/router";

import Loader from '../../Components/Loader';
import Navbar from '../../Components/Navbar';
import DashBoard from '../../Components/Dashoard/Dashboard';

function Callback() {

  const router = useRouter();
  const { guild_id } = router.query;

  return (
    <div>
        <Navbar />
        <DashBoard guild_id={guild_id} />
    </div>
  );
}
export default Callback;