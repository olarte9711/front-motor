import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar'
import UserTable from '../tables/UserTable';

const UserView = () => {
    return (
        <div className="app">
            <SideBar />
            <div className="main-section">
            <Header />
            <UserTable />
            </div>
        </div>
        )
} 

export default UserView;