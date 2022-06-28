import React, { useContext } from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import classes from '../../styles/Auth.module.css'
import { SignInCredentials } from '../../models/auth.model'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../store/auth-context'


const Login = () => {
    const navigate = useNavigate()
    const authContext = useContext(AuthContext)
    const [userCredentials, setUserCredentials] = useState<SignInCredentials>({
        email: "",
        password: "",
    })

    const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserCredentials(prevState => {
            return { ...prevState, [e.target.id]: e.target.value }
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        axios.post('http://localhost:3001/auth/signin', userCredentials)
            .then(res => {
                const { data } = res
                authContext.signUser(data.token, data.user.id);
            })
            .catch(err => {
                console.log(err.response.data)
            })
    }

    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Typography variant="body1">
                Connexion
            </Typography>
            <div className={classes.form_control_container}>
                <TextField
                    value={userCredentials.email}
                    id="email"
                    label="Email"
                    type="email"
                    variant="filled"
                    onChange={handleCredentialsChange}
                />
            </div>

            <div className={classes.form_control_container}>
                <TextField
                    value={userCredentials.password}
                    id="password"
                    label="Password"
                    type="password"
                    variant="filled"
                    onChange={handleCredentialsChange}
                />
            </div>

            <Button variant="outlined" type="submit">
                Se connecter
            </Button>
        </form>
    )
}

export default Login