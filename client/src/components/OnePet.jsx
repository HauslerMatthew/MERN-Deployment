import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { navigate, Link } from '@reach/router';

const OnePet = props => {
    const [indyPet, setIndyPet] = useState({})

    const adoptPet = e => {
        console.log("trying to adopt pet")
        axios.delete(`http://localhost:8000/api/pets/${props.petID}`)
            .then(res => {
                console.log("delete request sent")
                console.log(res)
                navigate("/")
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.petID}`)
            .then(res => {
                console.log("response after trying to get ONE pet", res)
                setIndyPet(res.data.results)
            })
            .catch(err => console.log(err))
    }, [props.petID])

    return (
        <div>
            <div>
                <br /><Link to="/" className="btn btn-primary">Return to Home</Link>
            </div>
            <br />
            <div className="d-flex justify-content-between">
                <h2>Details about: {indyPet.name}</h2>
                <button className="btn btn-danger" onClick={adoptPet}>Adopt Pet</button>
            </div>
            <div className="card">
                <div className="card-body">
                    <p className="card-text">Pet Type: {indyPet.type}</p>
                    <p className="card-text">Description: {indyPet.description}</p>
                    <p className="card-text">Skills: {indyPet.skill1} / {indyPet.skill2} / {indyPet.skill3}</p>
                </div>
            </div>
        </div>
    );
};

export default OnePet;