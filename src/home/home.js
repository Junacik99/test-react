import React, { useEffect } from "react";

export default function Home() {
    const loadData = () => {
        fetch('./MOCK_DATA.json',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
        });
    };

    useEffect(() => {
        loadData();
    },[]);

    return (
        <h1>HOME PAGE</h1>

    )
}