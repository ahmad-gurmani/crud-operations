import React, { useState } from 'react'
import { Fragment } from 'react';
import axios from 'axios';

const baseUrl = "https://648739cbbeba6297279044cd.mockapi.io/crud-first";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const header = { "Access-Control-Allow-Origin": "*" }

    const onChangeHandlerForName = (e) => {
        setName(e.target.value);
    };

    const onChangeHandlerForEmail = (e) => {
        setEmail(e.target.value);
    };

    const HandleSubmit = (e) => {
        e.preventDefault();
        axios.post(baseUrl, {
            name: name,
            email: email,
        },
            header,

        )
    }

    return (
        <Fragment>
            <h1>Create</h1>
            <form>
                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={onChangeHandlerForName} />
                    </div>

                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={onChangeHandlerForEmail} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" onClick={HandleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </Fragment>

    )
}

export default Create;
