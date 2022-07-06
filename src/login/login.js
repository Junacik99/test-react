import React from "react";
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";
import Container from "@mui/material/Container";


export default function Login() {
    const {  register, handleSubmit } = useForm();
    
    const mocked_user = {
        username: "admin",
        pwd: "0000",
    };

    // Check with mock data
    const onSubmit = (data) => {
        console.log(data);
        if(data.username === mocked_user.username && data.pwd === mocked_user.pwd){
            console.log("LOGGED IN");
            /* TODO: transfer to other page */
        }
        else{
            console.log("Incorrect username or password");
            /* TODO: alert user about incorrect input */
        }
    };

    return (
        <Container maxWidth="xs">
            <h1>Login Page</h1>
            <Box
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '25ch' },
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
                        </div>

                        <input type="submit" />
                    </div>
                </form>
            </Box>
        </Container>

    );
};