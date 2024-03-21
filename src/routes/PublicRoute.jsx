import React from 'react';
import {useUserContext} from '../hooks/useUserContext'
import { Navigate } from 'react-router-dom';

const PublicRoute = ({children}) => {
    const {username} = useUserContext();

    if(username){
        return <Navigate to='/' replace={true}/>;
    } else {
        return children;
    }
}

export default PublicRoute