import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"

const StoreDetails = (props) => {

    const {id} = useParams()
    const [store, setStore] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/stores/" + id)
            .then( res => {
                console.log(res.data)
                setStore(res.data)
            })
            .catch( err => console.log(err) );
    }, [])

    return (
        <div className="container py-3">
            <div className="d-flex flex-column flex-md-row align-items-center mb-3">
                <h1>Store Finder</h1>
                <div className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link to={"/"}>go back home</Link>
                </div>
            </div>
            <div className="mb-5">
                <h3>{ store.storeName }</h3>
                <h3>Store Number { store.storeNumber }</h3>
                <h3>{ store.open ? "Open" : "Closed" } </h3>
            </div>
            <a href={`/stores/edit/${store._id}`} className="btn btn-outline-dark" role="button">Edit Store Details</a>
        </div>
    )
}

export default StoreDetails
