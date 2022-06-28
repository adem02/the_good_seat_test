import React from 'react'
import { Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import classes from '../../styles/Auth.module.css'
import { SignUpCreadentials } from '../../models/auth.model'
import * as Yup from 'yup'
import axios from 'axios'
import { AuthContext } from '../../store/auth-context'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const navigate = useNavigate()
    const [userCredentials, setUserCredentials] = useState<SignUpCreadentials>({
        email: "",
        password: "",
        phone_number: "",
        lastName: "",
        firstName: "",
    })

    // Methode plus rapide de gérer l'entrée dans les champs de texte grâce à l'id
    const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setUserCredentials((prevState) => {
            return { ...prevState, [e.target.id]: e.target.value }
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        axios.post<SignUpCreadentials>('http://localhost:3001/auth/signup', { ...userCredentials, isPhoneNumberVerified: true })
            .then(() => {
                navigate('/auth')
            })
            .catch(err => {
                console.log(err.response.data)
            })

    }


    return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <Typography variant="body1">
                Inscription
            </Typography>
            <div className={classes.form_control_container}>
                <TextField
                    value={userCredentials.firstName}
                    id="firstName"
                    label="Firstname"
                    type="text"
                    variant="filled"
                    onChange={handleCredentialsChange}
                />
            </div>

            <div className={classes.form_control_container}>
                <TextField
                    value={userCredentials.lastName}
                    id="lastName"
                    label="Lastname"
                    type="text"
                    variant="filled"
                    onChange={handleCredentialsChange}
                />
            </div>

            <div className={classes.form_control_container}>
                <TextField
                    value={userCredentials.phone_number}
                    id="phone_number"
                    label="Phone Number"
                    type="text"
                    variant="filled"
                    onChange={handleCredentialsChange}
                />
            </div>

            <div className={classes.form_control_container}>
                <TextField
                    value={userCredentials.email}
                    id="email"
                    label="Email"
                    type="text"
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
                S'inscrire
            </Button>
        </form>
    )
}

export default Register