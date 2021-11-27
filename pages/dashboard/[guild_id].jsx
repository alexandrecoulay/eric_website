import React from 'react';

import NavBar from '../../Views/navbar/Navbar';
import DashBoard from '../../Views/Dashoard/Dashboard';

function Callback(props) {

  return (
    <div>
        <NavBar />
        <DashBoard guild_id={props.guild_id} />
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