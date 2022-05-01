import React, { useContext } from "react";

import { UserContext } from "../../../Context/AppContext";

import NavBar from '../../../Views/navbar/Navbar';
import DashBoard from '../../../Views/Dashoard/Dashboard';
import { Loader } from "../../../Components/Others";
import DashBoardContainer from "../../../Views/Dashoard/Container";
import DashboardSettings from "../../../Views/Dashoard/Settings";

function Callback(props) {

  const {user} = useContext(UserContext)

  return (
    <DashBoardContainer guild_id={props?.guild_id}>
      <DashboardSettings guild_id={props?.guild_id} user={user} />
    </DashBoardContainer>
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