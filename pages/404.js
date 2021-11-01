import React from "react";
import NavBar from "../Components/Navbar";

function NotFoundPage() {

    return (
        <div>
            <NavBar />
            <div className="main">
                <div className="not-found">
                <h1>Can&apos;t find this page</h1>
                <section className="error-container">
                    <span>4</span>
                    <span><span className="screen-reader-text">0</span></span>
                    <span>4</span>
                </section>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;