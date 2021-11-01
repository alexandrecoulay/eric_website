import React from 'react';
import { useRouter } from "next/router";

import NavBar from '../../Views/navbar/Navbar';
import DashBoard from '../../Views/Dashoard/Dashboard';

function Callback() {

  const router = useRouter();
  const { guild_id } = router.query;

  return (
    <div>
        <NavBar />
        <DashBoard guild_id={guild_id} />
    </div>
  );
}
export default Callback;