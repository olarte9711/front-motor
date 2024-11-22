import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar'
import UserTable from '../tables/UserTable';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const UserView = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="app">
            <SideBar { ...user } />
            <div className="main-section">
            <Header { ...user }/>
            <UserTable />
            </div>
        </div>
        )
} 

export default UserView;