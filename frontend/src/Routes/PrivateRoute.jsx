import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {React} from 'react';
const PrivateRoute = ({ children }) => {

    const { loading, isAuthenticated, user } = useSelector(state => state.user);

    return (
        <>
            {loading === false && (
                isAuthenticated === false ? <Navigate to="/login" /> : children
            )}
        </>
    );
};

export default PrivateRoute;
