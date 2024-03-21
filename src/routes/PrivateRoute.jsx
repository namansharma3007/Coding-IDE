import React from 'react';
import {useUserContext} from '../hooks/useUserContext'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {username} = useUserContext();
    
    if(username===null){
        return <Navigate to='/login' replace={true}/>;
    } else {
        return children;
    }
}

export default PrivateRoute