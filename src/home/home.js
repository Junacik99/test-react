import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

// Table columns
const columns = [
    {
        field: 'id',
        headerName: 'ID',
        width: 90,
    },
    {
        field: 'name',
        headerName: 'Name',
        width: 150,
        editable: true,
    },
    {
        field: 'surname',
        headerName: 'Surname',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'disease',
        headerName: 'Disease',
        editable: true,
        width: 700
    },
];

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
            <Button
                onClick={() => console.log("NEW RECORD CREATED")}
                variant="contained"
            >
                CREATE NEW RECORD
            </Button>
            <div>
                <Box sx={{ height: 800, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        checkboxSelection
                        disableSelectionOnClick
                    >
                    </DataGrid>
                </Box>
                {/* <table>
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
                                <tr
                                    key={patient.id}
                                    onClick={() => console.log(patient.id)}
                                >
                                    <td>{patient.id}</td>
                                    <td>{patient.name}</td>
                                    <td>{patient.surname}</td>
                                    <td>{patient.age}</td>
                                    <td>{patient.disease}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}