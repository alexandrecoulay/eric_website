import React, { useState, useEffect } from "react";

import { apibaseurl, cdnbaseurl } from "../Service/constante";
import Loader from "../Components/Loader";
import NavBar from "../Components/Navbar";

function Premium() {

    const [premium, setPremium] = useState({
        premium: false,
        images: []
    })
    const [{ alt, src }, setProfilePicture] = useState({
        src: ".",
        alt: "Envoyer une image"
    });

    const [loading, setLoading] = useState(false);

    if(typeof window !== "undefined") {
        var user = JSON.parse(localStorage.getItem('user')) || [];
        var access_token = localStorage.getItem("access_token");
    }

    useEffect(() => {
        async function fetchData(){
            const access_token = localStorage.getItem("access_token");
            const user = JSON.parse(localStorage.getItem('user')) || [];
            
            if (access_token) {
                const requestOptions = {
                    method: "GET"
                };
    
                const res = await fetch(`${apibaseurl}/premium/${user.id}`, requestOptions);
                const res_1 = await res.json();
                if (res_1.premium === true) {
                    if (res_1.images) {
                        setPremium({ premium: true, images: res_1.images });
                        setProfilePicture({ src: `${cdnbaseurl}/${res_1.current}` });
                    }
                    else
                        return setPremium({ premium: true });
                }
            }
        }
        fetchData()
    }, []);

    if(typeof window !== "undefined") {
        var uploadProfilePicture = async (e) => {
            document.getElementById("input-preview-image").click();
        }
    
        var handleChange = async (e) => {
            e.preventDefault();
    
            if (e.target.files[0]) {
                setProfilePicture({
                    src: URL.createObjectURL(e.target.files[0]),
                    alt: e.target.files[0].name
                });
    
                let fileReader = new FileReader();
                let file = "";
                fileReader.onload = async function (fileLoadedEvent) {
                    file = fileLoadedEvent.target.result;
    
                    const requestOptions = {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            image: file.toString()
                        })
                    };
            
                    setLoading(true);
                    
                    await fetch("https://api.boteric.fr/api/premium/"+user.id, requestOptions);
                    
                    setLoading(false);
                    window.location.reload();
                };
                // Convert data to base64
                fileReader.readAsDataURL(e.target.files[0]);
            }
        }
        var change_it = async (e) => {
            e.preventDefault();
    
            const image = e.target.id;
    
            const requestOptions = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    image: image 
                })
            };
    
            setLoading(true);
    
            await fetch("https://api.boteric.fr/api/premium/"+user.id, requestOptions);
            
            setLoading(false);
            window.location.reload();
        }
    
        var delete_it = async (e) => {
            e.preventDefault();
    
            const image = e.target.id;
    
            const requestOptions = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ 
                    image: image 
                })
            };
            setLoading(true);
            
            await fetch("https://api.boteric.fr/api/premium/"+user.id, requestOptions);
            
            setLoading(false);
            window.location.reload();
        }
    }

    return (
        <div>
            <NavBar />
            <section className="premium">
                { access_token ? 
                    <div>
                        <p className="titre">Choose a file with the size 841x238 (recommended) and less than 8Mb with one of these extension : jpeg, jpg, png.</p>
                        { loading ? <Loader /> : "" }
                        <form className="form">
                            <div className="premium-image-tochange" style={{ backgroundImage: `url(${src})` }} id="preview-image" onClick={uploadProfilePicture} alt={alt} />
                            <input type="file" accept=".png, .jpg, .jpeg" id="input-preview-image" onChange={handleChange} />
                        </form>
                        <p className="titre">Or select an old one</p>
                        {
                            premium.premium ? 
                                premium.images.map((fn) => 
                                    <form className="form" key={fn}>
                                        <img className="image_tableau" src={fn} alt={fn} />
                                        <input defaultValue={fn} className="non" name="image_name" />
                                        <button className="change_it" id={fn} onClick={change_it}>Change for this one</button>
                                        <button className="delete_it" id={fn} onClick={delete_it}>Delete it</button>
                                    </form>
                                )
                            : "The premium system is actualy in way to become better. If don't want to wait, send a direct message to the bot or ask all you questions in the support server."
                        }
                    </div>
                    : <div><h1>Please login first</h1>{<Loader />}</div>
                }
            </section>
        </div>
    );
}

export default Premium;