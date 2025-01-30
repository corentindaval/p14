import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { list } from '../assets/list_employer';

function Tableau() {

    const list = useSelector((state) => state.List_employer.list_employer);

    const columns = [
        {
            name: 'firstname',
            selector: row => row.firstname,
            sortable: true,
        },
        {
            name: 'lastname',
            selector: row => row.lastname,
            sortable: true,
        },
        {
            name: 'start',
            selector: row => row.start,
            sortable: true,
        },
        {
            name: 'department',
            selector: row => row.department,
            sortable: true,
        },
        {
            name: 'birth',
            selector: row => row.birth,
            sortable: true,
        },
        {
            name: 'street',
            selector: row => row.street,
            sortable: true,
        },
        {
            name: 'city',
            selector: row => row.city,
            sortable: true,
        },
        {
            name: 'etat',
            selector: row => row.etat,
            sortable: true,
        },
        {
            name: 'zip',
            selector: row => row.zip,
            sortable: true,
        },
    ];

    const data = list
    
    return (
        <div id="tableau">
            <h2>Current Employees</h2>
            <div id="part-h">
                <div id="part-search">
                    <label htmlFor="recherche">Search: </label>
                    <input type="textbox" id="recherche"></input>
                </div>
            </div> 
            <DataTable
                columns={columns}
                data={data}
                pagination={true}
                paginationRowsPerPageOptions={[10, 25, 50, 100]}
                paginationTotalRows={data.length}
              
              
                   />
        </div>
    );


    
}

export default Tableau