
import { Outlet } from 'react-router-dom'
import Header from '../../pages/clients/Header'
import Footer from '../../pages/clients/Footer'

const LayoutClient = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutClient