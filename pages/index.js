import React from "react";

import NavBar from "../Components/Navbar";
import Seo from "../Components/Seo";
import { cdnbaseurl } from "../Service/constante";

function Home() {

    const fonctionalities = () => {
      if(typeof window !== "undefined") {
        window.location.href = "/#fonctionalities";
      }
        
    }
    
    const add_bot = () => {
      if(typeof window !== "undefined") {
        window.location.href = "https://discord.com/oauth2/authorize?client_id=474924489545875456&scope=bot&permissions=8";
      }
    }

    return(
        <div className="body">
            <Seo />
            <NavBar />
            <div className="home">
                <section className="Hero">
                    <div className="Hero-text">
                        <h1>Eric</h1>
                        <p>More than 60 availables commands in french or english</p>
                    </div>
                    
                    <div className="HeroButtons">
                        <div className="HeroButtonWrapper">
                            <button className="btn_index" onClick={add_bot}>Add it to your server</button>
                            <button className="btn_index" onClick={fonctionalities}>Browse fonctionalities</button>
                        </div>
                    </div>
                </section>
                <section className="Section" id="fonctionalities">
                    <div className="SectionInner">
                        <div className="SectionText">
                            <h2>Complete Level System</h2>
                            <p>The level system allows you to identify and reward the most active members of your community! Give them the opportunity to show off their XP card and reach the first place in the leaderboard.</p>
                            <p>Rewards the most active members of your server with roles.</p>
                        </div>
                        <div className="SectionImg">
                            <img src={`${cdnbaseurl}/assets/home/level.png`} alt="Leveling system" />
                        </div>
                    </div>
                </section>
                <section className="Section">
                    <div className="SectionInner reverse">
                        <div className="SectionText">
                            <h2>Protect Your Server From Bad Guys</h2>
                            <p>You can add a raid-protect to prevent for spam. Just setup the role with the channel and Eric will send a message for each member who join your server to give the role if the member react with the good emote</p>
                            <p>You can also setup the warn command and use more than 10 moderation commands.</p>
                        </div>
                        <div className="SectionImg">
                            <img src={`${cdnbaseurl}/assets/home/moderation.png`} alt="Raid protect" />
                        </div>
                    </div>
                </section>
                <section className="Section">
                    <div className="SectionInner">
                        <div className="SectionText">
                            <h2>Streamer Dream</h2>
                            <p>Get a notification when you or your friends start a stream. Each minute Eric will watch if you stream and will send a special notification.</p>
                            <p>In few days, it will be able to display your statistics in all of your server.</p>
                        </div>
                        <div className="SectionImg">
                            <img src={`${cdnbaseurl}/assets/home/stream_2.png`} alt="twitch notifications" />
                        </div>
                    </div>
                </section>
                <section className="Section">
                    <div className="SectionInner reverse">
                        <div className="SectionText">
                            <h2>All lot of fun and various commands</h2>
                            <p>Google search link creator, Emote collector, Users/Server informations and custom poll are a little options of the availables various commands.</p>
                            <p>You can display all availables command with the help command</p>
                        </div>
                        <div className="SectionImg">
                            <img src={`${cdnbaseurl}/assets/home/various.png`} alt="various commands" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;