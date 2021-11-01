import React from "react";

import NavBar from "../../Components/Navbar";
import fr from "../../Language/fr.json";
import en from "../../Language/en.json";

function Commands(props) {

    var obj = props;

    const addClass = (e) => {

        const section = e.target.name;
        if(typeof document !== "undefined") {
            document.getElementById(`${section}`).classList.contains("visible") ? document.getElementById(`${section}`).classList.remove("visible") : document.getElementById(`${section}`).classList.add("visible");
        }
    }

    return (
        <div>
            <NavBar />
                <section id="helps">
                <h2>{obj.The_available_help_commands}</h2>
                <p>{obj.more_info}</p>
                <p>{obj.A_problem_with_the_bot_Join_the_support_server} :<a href="https://discord.gg/p3Sj432">https://discord.gg/p3Sj432</a></p>
                <div className="navigation">
                    <a onClick={addClass} name="level">{obj.level}</a>
                    <a onClick={addClass} name="stream">{obj.stream}</a>
                    <a onClick={addClass} name="moderation">{obj.moderation}</a>
                    <a onClick={addClass} name="various">{obj.various}</a>
                    <a onClick={addClass} name="emotes">{obj.emotes}</a>
                    <a onClick={addClass} name="fun">{obj.fun}</a>
                    <a onClick={addClass} name="ascii">ASCII</a>
                </div>
                <div className="helps-section">
                    <div className="section-commands visible" id="level">
                        <h3>{obj.commands[0].title}</h3>
                        {obj.commands[0].commands.map((e, index) =>
                            <div key={index} className="commands">
                                <div className="commands-title">
                                    <span>{obj.prefix}{e.title}</span>
                                </div>
                                <div className="commands-desc">
                                    <span>{e.desc}</span>  
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="section-commands" id="stream">
                        <h3>{obj.commands[1].title}</h3>
                    
                        {obj.commands[1].commands.map((e, index) =>
                            <div key={index} className="commands">
                                <div className="commands-title">
                                    <span>{obj.prefix}{e.title}</span>
                                </div>
                                <div className="commands-desc">
                                    <span>{e.desc}</span>  
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="section-commands" id="moderation">
                        <h3>{obj.commands[2].title}</h3>
                    
                        {obj.commands[2].commands.map((e, index) =>
                            <div key={index} className="commands">
                                <div className="commands-title">
                                    <span>{obj.prefix}{e.title}</span>
                                </div>
                                <div className="commands-desc">
                                    <span>{e.desc}</span>  
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="section-commands" id="various">
                        <h3>{obj.commands[3].title}</h3>
                    
                        {obj.commands[3].commands.map((e, index) =>
                            <div key={index} className="commands">
                                <div className="commands-title">
                                    <span>{obj.prefix}{e.title}</span>
                                </div>
                                <div className="commands-desc">
                                    <span>{e.desc}</span>  
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="section-commands" id="emotes">
                        <h3>{obj.commands[5].title}</h3>

                        {obj.commands[5].commands.map((e, index) =>
                            <div key={index} className="commands">
                                <div className="commands-title">
                                    <span>{obj.prefix}{e.title}</span>
                                </div>
                                <div className="commands-desc">
                                    <span>{e.desc}</span>  
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="section-commands" id="fun">
                        <h3>{obj.commands[4].title}</h3>
                    
                        {obj.commands[4].commands.map((e, index) =>
                            <div key={index} className="commands">
                                <div className="commands-title">
                                    <span>{obj.prefix}{e.title}</span>
                                </div>
                                <div className="commands-desc">
                                    <span>{e.desc}</span>  
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="section-commands" id="ascii">
                        <h3>Ascii Faces</h3>

                        {obj.face.map((e, index) =>
                            <div key={index} className="commands">
                                <div className="commands-title">
                                    <span>{e}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}


export const getServerSideProps = ({ query }) => {

    if(query === "fr") {
        var file = fr;
    } else {
        var file = en;
    }

    return {
        props: file
    };
}

export default Commands;