import React, { useEffect, useState } from "react";

export default function Home() {
    const [data, setData] = useState([]);

    const loadData = () => {
        fetch('./MOCK_DATA.json',
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson);
            });
    };

    useEffect(() => {
        loadData();
    }, []);


    return (
        <div>
            <h1>HOME PAGE</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Age</th>
                            <th>Disease</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((patient, index) => {
                            return (
                                <tr>
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.surname}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.disease}</td>
                                </tr>
                            )
                        })}
                        {console.log(data)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}