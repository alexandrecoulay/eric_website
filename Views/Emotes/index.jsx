import React, { useState } from "react";
import { Loader } from "../../Components/Others";
import CreateLink from "../../Components/Text/Link";
import { baseapiurl } from "../../Service/constante";
import Icon from "../../Components/Assets/RoundedIcon";
import styles from "../../Style/Global.module.scss";
import Svg from "../../Components/Svg/Svg";

function EmotesHome() {
    
    const [list, setList] = useState([]);
    const [name, setName] = useState("")
    
    /*useEffect(() => {
        async function getData() {
            const request = await fetch(`${baseapiurl}/emotes`);
            const response = await request.json();

            setList(response);
        }

        getData()
    }, [])*/
    
    // La liste filtree se calcule au rendu : un state et un effet supplementaires
    // n'apportaient rien et declenchaient un rendu en cascade a chaque frappe.
    const searchList = name.trim() === "" ? list : list.filter(e => e.name.match(name));

    const searchEmote = (e) => {
        e.preventDefault()
        setName(e.target.value)
    }
    return (
        <div className="main">
            <div className="searchsection">
                <input type="search" onChange={searchEmote} value={name} placeholder="Search"/>
                <button><Svg name="magnify" className="fa-primary" size={20} /></button>
            </div>
            {
                list.length > 0 ? 
                searchList.map(emote => 
                    <div key={emote.name} style={{
                        marginBottom: 10
                    }} className={`${styles.full_width} ${styles.radius_5} ${styles.second_background} ${styles.column} ${styles.align_start} ${styles.padding_5}`}>
                        <div className={`${styles.row} ${styles.no_wrap} ${styles.space_between}`}>
                            <CreateLink href={emote.url} text={
                            <p className={`${styles.row}`} style={{
                                fontWeight: 700,
                                fontSize: "18px"
                            }}><Icon src={emote.url} notRounded /> {emote.name} :</p>}/>
                        </div>
                        <div className={`${styles.row} ${styles.no_wrap}`}>  
                            <Icon size={25} src={emote.guild.url} />
                            <span>{emote.guild.name}</span>
                        </div>
                    </div> 
                )
                : <div>
                    <h1>Comming soon</h1>
                    <Loader />
                </div>
            }
        </div>
    )
}

export default EmotesHome;