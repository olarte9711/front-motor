import React from 'react';
import Header from './Header';
import SideBar from './SideBar'
import MainContent from './MainContent';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Motor = () => {

    const location = useLocation();
    const { user } = useContext(UserContext);
   
    return (
    <div className="app">
        <SideBar { ...user } />
        <div className="main-section">
        <Header { ...user }/>
        <MainContent/>
        </div>
    </div>
    )
}

export default Motor;