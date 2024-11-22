import React from 'react';
import Header from '../Header';
import SideBar from '../SideBar'
import DocumentTable from '../tables/DocumentsTable'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';


const DocumentsView = () => {

    const { user } = useContext(UserContext);

    return (
        <div className="app">
            <SideBar { ...user } />
            <div className="main-section">
            <Header { ...user }/>
            <DocumentTable />
            </div>
        </div>
        )
} 

export default DocumentsView;