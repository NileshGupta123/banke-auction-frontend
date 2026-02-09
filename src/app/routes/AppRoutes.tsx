import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Auth/Login';
import CommingSoon from "../pages/ComingSoon";
import Register from '../pages/Auth/Register';
import PropertyListing from '../pages/Properties/PropertyListing';
import EAuctionListing from '../pages/EAuction/EAuctionListing';
import AuctionDetails from '../pages/Auctions/AuctionDetails';
import AuctionNotice from '../pages/Auctions/AuctionNotice';
import PropertyDetails from '../pages/Properties/PropertyDetails';


export default function AppRoutes() {
    return (
        <Routes>
            {/* Public Website */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<PropertyListing />} />
                <Route path="/properties/:id" element={<PropertyDetails />} />
                <Route path="/eauction" element={<EAuctionListing />} />
                <Route path="/auctions/:id" element={<AuctionDetails />} />
                <Route path="/auction-notice/:id" element={<AuctionNotice />} />
                <Route path="/coming-soon" element={<CommingSoon />} />
            </Route>


            {/* Auth Pages */}
            <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
            <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />

        </Routes>
    );
}
