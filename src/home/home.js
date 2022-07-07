import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { IconButton } from '@mui/material';
import { DeleteOutlined } from "@mui/icons-material";


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

const dummy_record = {
    "id": 101,
    "name": "Blank",
    "surname": "Blanky",
    "age": 42,
    "disease": "Happiness"
};


export default function Home() {
    const [data, setData] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [maxId, setMaxId] = useState(0);
    const [selectionModel, setSelectionModel] = useState([]);


    const { register, handleSubmit } = useForm();


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
        console.log("MAX id " + maxId);
    }, []);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const createNewRecord = (record) => {
        var newRecord = {};

        // TODO: generate unique ID
        console.log(data.length)
        setMaxId(data.length);
        newRecord.id = maxId + 1;
        setMaxId(maxId + 1);

        newRecord.name = record.name;
        newRecord.surname = record.surname;
        newRecord.age = record.age;
        newRecord.disease = record.disease;

        setData(data.concat(newRecord));
    };

    return (
        <div>
            <h1>HOME PAGE</h1>

            <Button
                onClick={() => {
                    console.log("NEW RECORD CREATED");
                    // setData(data.concat(dummy_record));
                    handleOpenDialog();
                }}
                variant="contained"
            >
                CREATE NEW RECORD
            </Button>

            <IconButton
                onClick={() => {
                    console.log("delete selected");
                    const selectedIds = new Set(selectionModel);
                    setData((d) => d.filter((x) => !selectedIds.has(x.id)));
                }}
            >
                <DeleteOutlined>Delete selected records</DeleteOutlined>
            </IconButton>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>CREATE NEW RECORD</DialogTitle>
                <DialogContent>
                    <form
                        onSubmit={handleSubmit(createNewRecord)}
                    >
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            required
                            {...register("name")}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="surname"
                            label="Surname"
                            required
                            {...register("surname")}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="age"
                            label="Age"
                            type="number"
                            required
                            {...register("age")}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="disease"
                            label="Disease"
                            required
                            {...register("disease")}
                        />

                        <Button
                            type="submit"
                            variant="outlined"
                            fullWidth>
                            CREATE
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>

            <div>
                <Box sx={{ height: 800, width: '100%' }}>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        checkboxSelection
                        disableSelectionOnClick
                        onSelectionModelChange={(ids) => {
                            setSelectionModel(ids);
                        }}
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