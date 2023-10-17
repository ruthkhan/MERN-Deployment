import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from "react-router-dom"
import StoreForm from '../components/StoreForm'

const UpdateStore = (props) => {

    const { id } = useParams()
    const [storeName, setStoreName] = useState("")
    const [storeNumber, setStoreNumber] = useState("")
    const [open, setOpen] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/stores/' + id)
            .then(res => {
                setStoreName(res.data.storeName)
                setStoreNumber(res.data.storeNumber)
                setOpen(res.data.open)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const updateStore = storeParam => {
        axios.patch(`http://localhost:8000/api/stores/` + id, storeParam)
            .then(res => {
                console.log(res.data)
                navigate("/stores/" + id)
            })
            .catch((err)=>{setErrors(err.response.data.errors)})
    }

    return (
        <div className="container py-3">
            <div className="d-flex flex-column flex-md-row align-items-center">
                <h1>Store Finder</h1>
                <div className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <Link to={`/`}>go back home</Link>
                </div>
            </div>
            <p>Edit this Store!</p>
            {
                loaded && 
                <StoreForm 
                    onSubmitProp = { updateStore }
                    errors = { errors }
                    initialStoreName = { storeName }
                    initialStoreNumber = { storeNumber }
                    initialOpen = { open }
                    btnText = "Edit Store"
                />
            }
        </div>
    )
}

export default UpdateStore