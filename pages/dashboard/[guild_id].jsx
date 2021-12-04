import React, { useContext } from "react";

import { UserContext } from "../../Context/AppContext";

import NavBar from '../../Views/navbar/Navbar';
import DashBoard from '../../Views/Dashoard/Dashboard';
import Loader from "../../Components/Others/Loader";

function Callback(props) {

  const [user, setUser] = useContext(UserContext)

  return (
    <div>
        <NavBar />
        { user ? <DashBoard user={user} guild_id={props.guild_id} /> : <Loader /> }
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {

  const { guild_id } = query;

  return {
    props: {
      guild_id: guild_id
    }
  };
}

export default Callback;