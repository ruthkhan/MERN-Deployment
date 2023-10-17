import React, { useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StoreList = (props) => {

    const { removeFromDom, allStores, setAllStores } = props

    useEffect(()=>{
        axios.get("http://localhost:8000/api/stores")
            .then((res)=>{
                console.log(res.data);
                setAllStores(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])

    const deleteStore = (storeId) => {
        axios.delete('http://localhost:8000/api/stores/' + storeId)
            .then(res => {removeFromDom(storeId)})
            .catch(err => console.log(err))
    }

    return (
        <div className="container py-3">
            <h1>Store Finder</h1>
            <table className="table table-striped table-bordered align-middle mt-4">
                <thead>
                    <tr>
                        <th>Store</th>
                        <th>Store Number</th>
                        <th>Open</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                {
                    allStores.map((store, index) => {
                    return (
                        <tr key={index}>
                            <td><Link to={`/stores/${store._id}`}>{store.storeName}</Link></td>
                            <td>{store.storeNumber}</td>
                            <td>{store.open ? "True" : "False"}</td>
                            <td>
                            {
                                store.open ? 
                                <button onClick={(e)=>{deleteStore(store._id)}} className="btn btn-danger btn-sm col-12">Delete</button>
                                : null
                            }
                            </td>
                        </tr>
                    )})
                }
                </tbody>
            </table>
            <a href="/stores/add" className="btn btn-outline-dark" role="button">Can't find your store?</a>
        </div>
    )
}

export default StoreList