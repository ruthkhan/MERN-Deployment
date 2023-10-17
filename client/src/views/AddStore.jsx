import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"
import StoreForm from '../components/StoreForm'

const AddStore = (props) => {

    const { allStores, setAllStores } = props
    const [initialOpen, setInitialOpen] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const createStore = (storeParam => {
        axios.post('http://localhost:8000/api/stores', storeParam)
            .then(res => {
                console.log(res.data)
                setAllStores([...allStores, res.data])
                navigate("/stores/" + res.data._id)
            })
            .catch((err)=>{
                setErrors(err.response.data.errors)
            })
    })

    return (
        <div className="container py-3">
            <div className="d-flex flex-column flex-md-row align-items-center">
                <h1>Store Finder</h1>
                <div className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link to={`/`}>go back home</Link>
                </div>
            </div>
            <p>Add a new Store!</p>
            <StoreForm 
                onSubmitProp = { createStore }
                errors = { errors }
                initialStoreName = ""
                initialStoreNumber = ""
                initialOpen = { initialOpen }
                btnText = "Add a new Store"
            />
        </div>
    )
}

export default AddStore