import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { baseUrl } from '../create/create.component';
import axios from 'axios';

function Update() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    useEffect(() => {
        axios.
            get(`${baseUrl}/${id}`)
            .then(
                (res) => {
                    const { email, name } = res.data;
                    setName(name);
                    setEmail(email);
                }
            )
    }, []);

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`${baseUrl}/${id}`,
            {
                name: name,
                email: email
            })
            .then(() => {
                navigate("/read");
            });
    };

    const handleUpdateName = (e) => {
        setName(e.target.value);
    }

    const handleUpdateEmail = (e) => {
        setEmail(e.target.value);
    }


    return (
        <Fragment>
            <h1 className='mb-4 fs-1 text-center'>Update operation</h1>
            <form>
                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={handleUpdateName} />
                    </div>

                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={handleUpdateEmail} />
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className='d-flex justify-content-between'>
                    <Link to="/read">
                        <button className='btn btn-info'>Go Back</button>
                    </Link>
                    <button type="submit" onClick={handleUpdate} className="btn btn-primary">Update</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Update;
