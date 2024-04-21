import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../Bike';
import Login from '../Bike/Login';
import { RouterProvider } from "react-router-dom";
import BikeList from '../Bike/bikeList';
import BikeDetails from '../Bike/bikeDetails';
import { useSelector } from 'react-redux';
import Enquiry from '../Bike/enquiryModel';
import TeamDetails from '../Bike/teamDetails';
import EnquiriesList from '../Bike/enuiriesList';

const Router = () => {
    const showModel = useSelector(state => state.model.showModel);

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Home />,
        },
        {
            path:"/login",
            element: <Login />,
        },
        {
            path:"/bikeList",
            element: <BikeList />,
        },
        {
            path:"/team",
            element: <TeamDetails />,
        },
        {
            path:"/bikeDetails/:id",
            element: <BikeDetails />,
        },
        {
            path:"/team/:id",
            element: <TeamDetails />,
        },
        {
            path:"/enquirires/:id",
            element: <EnquiriesList />,
        },
    ])

    return (
        <div className='router-div'>
            {showModel && <Enquiry />}
            <RouterProvider
                router={appRouter}
            />
        </div>
    )
}

export default Router