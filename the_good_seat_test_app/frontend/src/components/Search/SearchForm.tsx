import { TextField } from "@mui/material"
import { useState } from "react"
import classes from '../../styles/Search.module.css'

const Search = () => {

    const [departureAddress, setDepartureAddress] = useState("")
    const [arrivalAddress, setArrivalAddress] = useState("")

    const handleDepartureAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDepartureAddress(e.target.value)
    }

    const handleArrivalAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setArrivalAddress(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log();

    }

    return (
        <form onSubmit={handleSubmit} className={classes['search-ride-form']}>
            <div className={classes.form_control}>
                <TextField
                    value={departureAddress}
                    id="departure"
                    label="Departure Adress"
                    type="text"
                    variant="filled"
                    onChange={handleDepartureAddressChange}
                />
            </div>

            <div className={classes.form_control}>
                <TextField
                    value={arrivalAddress}
                    id="arrival"
                    label="Arrival Address"
                    type="text"
                    variant="filled"
                    onChange={handleArrivalAddressChange}
                />
            </div>
        </form>
    )
}

export default Search