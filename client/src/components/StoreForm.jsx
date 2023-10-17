import React, { useState } from 'react'

const StoreForm = (props) => {

    const { initialStoreName, initialStoreNumber, initialOpen, onSubmitProp, errors, btnText } = props
    const [storeName, setStoreName] = useState(initialStoreName)
    const [storeNumber, setStoreNumber] = useState(initialStoreNumber)
    const [open, setOpen] = useState(initialOpen)

    const onSubmitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({storeName, storeNumber, open})
    }

    return (
        <form onSubmit={onSubmitHandler} className="border border-solid p-3">
            <div className="mb-3">
                <div className="d-flex flex-column flex-md-row">
                    <label htmlFor="storeName" className="form-label">Store Name</label>
                    { errors.storeName ? 
                        <p className="text-danger mx-3">{errors.storeName.message}</p>
                        : null
                    }
                </div>
                <input 
                    type="text" 
                    name="storeName"
                    id="storeName"
                    value={ storeName }
                    className="form-control"
                    onChange = {(e)=>setStoreName(e.target.value)}/>
            </div>
            <div className="mb-3">
                <div className="d-flex flex-column flex-md-row">
                    <label htmlFor="storeNumber" className="form-label">Store Number</label>
                    { errors.storeNumber ?
                        <p className="text-danger mx-3">{errors.storeNumber.message}</p>
                        : null
                    }
                </div>
                <input 
                    type="number" 
                    name="storeNumber"
                    id="storeNumber"
                    value={ storeNumber }
                    className="form-control"
                    onChange = {(e)=>setStoreNumber(e.target.value)}/>
            </div>
            <div className="form-check mb-3">
                <input 
                    type="checkbox" 
                    id="open"
                    name="open"
                    className="form-check-input" 
                    checked={ open }
                    onChange = {(e)=>setOpen(e.target.checked)} />
                <label htmlFor="open" className="form-check-label">Open? </label>
            </div>
            <button className="btn btn-secondary mt-2" type="submit">{ btnText }</button>
        </form>
    )
}

export default StoreForm