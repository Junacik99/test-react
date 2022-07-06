import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@mui/material";

export default function Login() {
    const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    });
    const onSubmit = data => console.log(data)


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <Controller
                        name="username"
                        control={control}
                        render={({ field }) => <Input {...field} />}
                    />
                </div>
                <div>
                    <label htmlFor="pwd">Password: </label>
                    <Controller
                        name="password"
                        control={control}
                        render={({ field }) => <Input {...field} />}
                    />
                </div>

                <input type="submit" />
            </form>
        </div>

    );
};