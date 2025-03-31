
import React from 'react'
import NewCollectionHero from '../layoutForm/Header'
import { Outlet } from 'react-router-dom'
import Footers from '../layoutForm/Footer'

const LayoutClient = () => {
    return (
        <div>
            <NewCollectionHero />
            <Outlet />
            <Footers />
        </div>
    )
}

export default LayoutClient