import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

const AllPets = () => {
    const [allPets, setAllPets] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log("making axios get the pets...")
                console.log(res)
                setAllPets(res.data.results)
            })
            .catch(err => console.log("errors retrieving all pets", err))
    }, [])

    return (
        <div>
            <div>
                <br /><Link to="/pets/new" className="btn btn-primary">Add a new pet</Link>
            </div>
            <br />
            <h2>These pets are looking for a good home!</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allPets.sort((petz,index) => (petz.type.toLowerCase() > index.type.toLowerCase()) ? 1 : -1).map((pet, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td><Link to={`/pets/${pet._id}`} className="btn btn-secondary">details</Link> <Link to={`/pets/${pet._id}/edit`} className="btn btn-secondary">edit</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AllPets;