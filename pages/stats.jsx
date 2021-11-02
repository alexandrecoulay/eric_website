import React, { useEffect, useState } from "react";
import { LabelList, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Line, ComposedChart } from 'recharts';
import dayjs from "dayjs";

import NavBar from "../Views/navbar/Navbar";
import { baseapiurl } from "../Service/constante";
import Seo from "../Components/Seo";

function Charts(){
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await fetch(`${baseapiurl}/stats/commands`);
            const response = await request.json();
            const result = response.map(item => {
                const container = {};
                container.date = dayjs(`${item.year}-${item.month}-${item.day}`).format('DD-MM-YYYY');
                container.count = item.total;
                
                return container;
            });

            setData(result);
        }

        fetchData();
    }, [])

    return (
        <div>
            <Seo title="Statitics of Eric" description="Eric Discord bot statistics"/>
            <NavBar />
            <section className="Hero">
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart width={1800} height={800} data={data}>
                        <Line dataKey="count" fill="#37B729">
                            <LabelList dataKey="count" position="top" fill="#fff" />
                        </Line>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" />
                    </ComposedChart>
                </ResponsiveContainer>
            </section>
        </div>
    );
}

export default Charts;