import { Box, Container, Grid, Paper } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Search from '../Search/SearchForm'
import { styled } from '@mui/material/styles';
import axios from 'axios';
import { getOffers } from '../../services/getOffers';
import { Offer } from '../../models/offer.model';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    height: '80vh',
    overflow: 'auto'
}));

const Main = () => {

    const [offers, setOffers] = useState<Offer[]>([])

    useEffect(() => {
        getOffers()
            .then(res => setOffers(res))
            .catch(err => console.log(err.response.data))
    }, [])


    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sx={{ height: "100%" }} container spacing={1} xs={8}>
                        <Grid item xs={12}>
                            <Search />
                        </Grid>
                        <Grid sx={{ height: "100%" }} item container xs={6}>
                            <Grid item xs={12}>
                                <div>Display Ride Details</div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs={4}>
                        <Item>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellat aliquid praesentium at beatae facilis ipsa perferendis optio quisquam vero! Est consequuntur maiores ullam eos totam debitis eligendi nulla accusamus.</p>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Main