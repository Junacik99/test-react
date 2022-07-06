import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";
import TextField from '@mui/material/TextField';
import { Box } from "@mui/system";


export default function Login() {
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const onSubmit = data => console.log(data)


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <TextField
                            required
                            id="username"
                            label="Username"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="pwd"
                            label="Password"
                            type="password"
                            variant="outlined"
                            autoComplete="current-password"
                        />
                    </div>

                    <input type="submit" />
                </form>
            </div>
        </Box>


    );
};