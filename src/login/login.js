import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
import Home from "../home/home";


export default function () {
    const [user, setUser] = useState(null);

    const { register, handleSubmit } = useForm();

    const mocked_user = {
        username: "admin",
        pwd: "0000",
    };

    // Check with mock data
    const onSubmit = (data) => {
        console.log(data);
        if (data.username === mocked_user.username && data.pwd === mocked_user.pwd) {
            console.log("LOGGED IN");
            // set user for transferring to home page
            setUser(data);
        }
        else {
            console.log("Incorrect username or password");
            /* TODO: alert user about incorrect input */
        }
    };

    return (

        <Container maxWidth="xs">
            {/* After successful login transfer to home page */}
            {user && <Navigate to="/home" replace={true} />}
            <h1>Login Page</h1>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '40ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <div>
                            <TextField
                                required
                                id="username"
                                label="Username"
                                variant="outlined"
                                fullWidth
                                {...register("username")}
                            />
                            <TextField
                                required
                                id="pwd"
                                label="Password"
                                type="password"
                                variant="outlined"
                                autoComplete="current-password"
                                fullWidth
                                {...register("pwd")}
                            />

                            <Button 
                                type="submit" 
                                variant="outlined" 
                                fullWidth>
                                    LOG IN
                            </Button>
                        </div>
                    </div>
                </form>
            </Box>
        </Container>

    );
};