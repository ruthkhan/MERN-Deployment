import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddStore from './views/AddStore'
import StoreDetails from './components/StoreDetails'
import UpdateStore from './views/UpdateStore'
import StoreList from './components/StoreList'

function App() {

  const [allStores, setAllStores] = useState([])

  const removeFromDom = storeId => {
    setAllStores(allStores.filter(store => store._id != storeId))
  }

  return (
    <div className="container mx-5">
      <BrowserRouter>
        <Routes>
          <Route element={<StoreList
            allStores = { allStores }
            setAllStores = { setAllStores }
            removeFromDom = { removeFromDom }
          />} path="/" default />
          <Route element={<AddStore
            allStores = { allStores }
            setAllStores = { setAllStores }
          />} path="/stores/add" />
          <Route element={<UpdateStore />} path="/stores/edit/:id" />
          <Route element={<StoreDetails />} path="/stores/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App