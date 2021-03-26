import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const EditPet = props => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.petID}`)
            .then(res => {
                console.log("response after trying to get ONE pet", res)
                setFormInfo(res.data.results)
            })
            .catch(err => console.log(err))
    }, [props.petID])

    const changeHandler = e => {
        // console.log("changing form...")
        // console.log(e.target)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/${props.petID}`, formInfo)
            .then(res => {
                console.log("response after submitting the post request!", res)
                if (res.data.errors) {
                    console.log("validation errors")
                    setErrors(res.data.errors)
                }
                else {
                    navigate("/")
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="mt-4">
            <div>
                <Link to="/" className="btn btn-primary">Return to Home</Link>
            </div><br/>
            <h2>Edit {formInfo.name}</h2>
            <form onSubmit={submitHandler} className="col-6 mx-auto">
                <div className="form-group">
                    <label htmlFor=""><h3>Pet Name</h3></label>
                    <input type="text" name="name" id="" className="form-control" onChange={changeHandler} defaultValue={formInfo.name} />
                    <p className="text-danger">{errors.name ? errors.name.properties.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor=""><h3>Pet Type</h3></label>
                    <input type="text" name="type" id="" className="form-control" onChange={changeHandler} defaultValue={formInfo.type}/>
                    <p className="text-danger">{errors.type ? errors.type.properties.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor=""><h3>Pet Description</h3></label>
                    <input type="text" name="description" id="" className="form-control" onChange={changeHandler} defaultValue={formInfo.description}/>
                    <p className="text-danger">{errors.description ? errors.description.properties.message : ""}</p>
                </div>
                <div className="form-group">
                    <label htmlFor=""><h3>Skills (optional)</h3></label>
                    <p>Skill One</p>
                    <input type="text" name="skill1" id="" className="form-control" onChange={changeHandler} defaultValue={formInfo.skill1}/>
                    <br/><p>Skill Two</p>
                    <input type="text" name="skill2" id="" className="form-control" onChange={changeHandler} defaultValue={formInfo.skill2}/>
                    <br/><p>Skill Three</p>
                    <input type="text" name="skill3" id="" className="form-control" onChange={changeHandler} defaultValue={formInfo.skill3}/>
                </div>
                <input type="submit" value="Edit Pet" className="btn btn-success" />

            </form>
        </div>
    );
};

export default EditPet;