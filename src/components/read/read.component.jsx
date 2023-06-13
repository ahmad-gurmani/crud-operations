import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const baseUrl = "https://648739cbbeba6297279044cd.mockapi.io/crud-first";


const Read = () => {
    const [data, setData] = useState([]);
    const [tabledark, setTableDark] = useState(false);
    const getData = () => {
        axios
            .get(baseUrl)
            .then((res) => {
                setData(res.data);
            });
    }

    const setToLocalStorage = ({ id, name, email }) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    const handelDelete = (id) => {
        axios
            .delete(`${baseUrl}/${id}`)
            .then(() => {
                getData();
            });
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <Fragment>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" onClick={() => setTableDark(!tabledark)} />
            </div>
            <div className='d-flex justify-content-between mb-4'>
                <h1 className='fs-1 m-0'>Read operation</h1>
                <Link to="/">
                    <button className='btn btn-warning'>Go back</button>
                </Link>
            </div>
            <table className={`table ${tabledark ? "table-dark" : ""}`}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((eachData, index) => {
                        return (
                            <tr key={index}>
                                <th scope='row'>{eachData.id}</th>
                                <td>{eachData.name}</td>
                                <td>{eachData.email}</td>
                                <td>
                                    <Link to="/update">
                                        <button type="button" onClick={() => setToLocalStorage(
                                            { id: eachData.id, name: eachData.name, email: eachData.email }
                                        )} className="btn btn-success">Edit</button>
                                    </Link>

                                </td>
                                <td>
                                    <button type="button" onClick={() => handelDelete(eachData.id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Fragment>
    )
}

export default Read;
