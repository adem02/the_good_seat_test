import axios from "axios"
import { Offer } from "../models/offer.model"

const OffersRequestBody = {
    "startLat": 48.842072,
    "startLong": 2.617001,
    "startAddress": "The Business Centre 61 Wellfield Road Roath Cardiff CF24 3DG",
    "startCountry": "FR",
    "endLat": 48.877963,
    "endLong": 2.322385,
    "endAddress": "The Business Centre 61 Wellfield Road Roath Cardiff CF24 3DG",
    "endCountry": "FR",
    "distance": "The driving distance between the two locations in meter",
    "userId": localStorage.getItem('uid'),
    "providerList": [
        "mysam"
    ],
    "nbrOfPassenger": 1,
    "startLocality": "Paris",
    "startNeighborhood": "Izmaylovskaya ",
    "startPostcode": "105011",
    "startPlace": "France",
    "startRegion": "Paris",
    "startStreetNumber": "Paris",
    "endNeighborhood": "Izmaylovskaya ",
    "endLocality": "Paris",
    "endPostcode": "105011",
    "endPlace": "France",
    "endRegion": "Paris",
    "endStreetNumber": "Paris",
    "startDate": "2021-12-19T07:41:47.506Z",
    "nbrOfBagages": 1,
    "flightNumber": "FX112",
    "trainNumber": "FX112",
    "stops": [
        {
            "latitude": 48.877963,
            "longitude": 2.617001,
            "address": "The Business Centre 61 Wellfield Road Roath Cardiff CF24 3DG"
        }
    ],
    "additionalUsers": [
        1
    ]
}

export const getOffers = async () => {
    const res = await axios.post<Offer[]>('http://localhost:3001/offer/getOffersByPartner', OffersRequestBody, {
        headers: {
            'Authorizarion': `Bearer ${localStorage.getItem('token')}`
        }
    })

    return res.data
} 