import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"

import NavBar from "../../Components/Navbar";
import Loader from "../../Components/Loader";
import { apibaseurl } from "../../Service/constante";
import Seo from "../../Components/Seo";

function Leaderboard(props) {

    const [users, SetUsers] = useState([]);

    const { guild_id } = useRouter().query;    

    useEffect(() => {
        async function data() {
            const requestOptions = {
                method: "GET"
            };
            
            let response = await fetch(`${apibaseurl}/leaderboard/${guild_id}/users`, requestOptions)
            let res = await response.json();

            SetUsers(res);
        }
        data()
    }, [guild_id]);

    let i = 1;

    var leaderboard_render = (
        
        users.map((user, index) =>
            <div key={index} className="userInfo">
                <div className="users_informations_left">
                    <span className="number">{i++}</span>
                    <span><img className="pdp-40 avatar" src={user.avatar} alt={user.avatar} /></span>
                    <span className="username">{user.username}</span>
                </div>
                <div className="users_informations_right">
                    <span className="experience">Experience : </span>        
                    <span className="nlvl avatar">{user.xp}/{user.nlvl}</span>
                    <span className="level avatar">Level : {user.lvl}</span>
                </div>
            </div>
            
        )
    )
    return (
        <div>
            <Seo title={`${props.name} - Leaderboard`} description={`Leaderboard for the guild ${props.name}`} image={`${props.icon}`} url={`https://boteric.fr/leaderboard/${guild_id}`}/>
            <NavBar />
            <section className="leaderboard">
                <div className="leaderboardContainer">
                    <div className="guildInfo">
                        <span><img className="pdp-100" src={props.icon} alt={props.icon} /></span>
                        <span><h1>{props.name}</h1></span>
                    </div>
                    <div className="users_informations">
                        { users.length > 0 ? leaderboard_render : <Loader /> }    
                    </div>
                </div>

            </section>
        </div>
    );
}

export const getServerSideProps = async ({ query }) => {

    const guild_id = query.guild_id;
    
    const request = await fetch(`${apibaseurl}/leaderboard/${guild_id}/guild`)
    const response = await request.json();

    return {
        props: response
    };
}

export default Leaderboard;