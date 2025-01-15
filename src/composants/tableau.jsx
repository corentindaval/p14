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
        <DataTable
            columns={columns}
            data={data}
            />
        </div>
    );


    /*
    const [select_tri, settri] = useState("");
    const list = useSelector((state) => state.List_employer.list_employer);

    function gen_lignes() {
      
        console.log(list)
        if (select_tri == "") {
            if (list != "") {
                const list_emploi = list.map(employer =>
                    <tr >
                        <td>{employer.firstname}</td>
                        <td>{employer.lastname}</td>
                        <td>{employer.start}</td>
                        <td>{employer.department}</td>
                        <td>{employer.birth}</td>
                        <td>{employer.street}</td>
                        <td>{employer.city}</td>
                        <td>{employer.etat}</td>
                        <td>{employer.zip}</td>
                    </tr>
                );
                return (
                    <tbody>
                        {list_emploi}
                    </tbody>
                )
            } else {
                return (
                    <tbody>
                        <tr>
                            <th scope="row" colSpan="9" id="no_data">no data</th>
                        </tr>
                    </tbody>
                )
            }

        } else {
            return tri(select_tri)
        }
    }

    function change_tri(e) {
       settri(e.target.value);
    }

    function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    function tri(critere) {
        var list_tri = []
        var element = ""
        var emp = ""
        if (list != "") {
            if (critere == "first_name") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.firstname < element) {
                                    element = employer.firstname
                                    emp = employer
                                }
                            } else {
                                element = employer.firstname
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.firstname < element) {
                                    element = employer.firstname
                                    emp = employer
                                }
                            } else {
                                element = employer.firstname
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }
                console.log(list_tri)
                console.log("test first name")*/
                /* console.log("test first_name")
                 const sortedArray = Array.from(list).sort((a, b) => a.firstname - b.firstname);
                 console.log(sortedArray)
                 const sortedMap = new Map(sortedArray);
                 console.log(sortedMap);*/
           /* }
            if (critere == "last_name") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.lastname < element) {
                                    element = employer.lastname
                                    emp = employer
                                }
                            } else {
                                element = employer.lastname
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.lastname < element) {
                                    element = employer.lastname
                                    emp = employer
                                }
                            } else {
                                element = employer.lastname
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }
                console.log(list_tri)
                console.log("test last_name")
            }
            if (critere == "start_date") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.start < element) {
                                    element = employer.start
                                    emp = employer
                                }
                            } else {
                                element = employer.start
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.start < element) {
                                    element = employer.start
                                    emp = employer
                                }
                            } else {
                                element = employer.start
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }

                console.log("test start_date")
            }
            if (critere == "department") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.department < element) {
                                    element = employer.department
                                    emp = employer
                                }
                            } else {
                                element = employer.department
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.department < element) {
                                    element = employer.department
                                    emp = employer
                                }
                            } else {
                                element = employer.department
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }

                console.log("test department")
            }
            if (critere == "birth") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.birth < element) {
                                    element = employer.birth
                                    emp = employer
                                }
                            } else {
                                element = employer.birth
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.birth < element) {
                                    element = employer.birth
                                    emp = employer
                                }
                            } else {
                                element = employer.birth
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }

                console.log("test birth")
            }
            if (critere == "street") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.street < element) {
                                    element = employer.street
                                    emp = employer
                                }
                            } else {
                                element = employer.street
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.street < element) {
                                    element = employer.street
                                    emp = employer
                                }
                            } else {
                                element = employer.street
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }

                console.log("test street")
            }
            if (critere == "city") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.city < element) {
                                    element = employer.city
                                    emp = employer
                                }
                            } else {
                                element = employer.city
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.city < element) {
                                    element = employer.city
                                    emp = employer
                                }
                            } else {
                                element = employer.city
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }

                console.log("test city")
            }
            if (critere == "state") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.state < element) {
                                    element = employer.state
                                    emp = employer
                                }
                            } else {
                                element = employer.state
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.state < element) {
                                    element = employer.state
                                    emp = employer
                                }
                            } else {
                                element = employer.state
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }

                console.log("test state")
            }
            if (critere == "zip") {

                //remplissage list_tri
                while (list_tri.length != list.length) {
                    if (list_tri == "") {
                        list.map(employer => {
                            if (element != "") {
                                if (employer.zip < element) {
                                    element = employer.zip
                                    emp = employer
                                }
                            } else {
                                element = employer.zip
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    } else {
                        var list_rest = []
                        list.map(employer => {
                            var dejapresent = false
                            list_tri.forEach(function (element) {
                                if (employer == element) {
                                    dejapresent = true
                                }
                            })
                            if (dejapresent == false) {
                                list_rest.push(employer)
                            }
                        })
                        list_rest.map(employer => {
                            if (element != "") {
                                if (employer.zip < element) {
                                    element = employer.zip
                                    emp = employer
                                }
                            } else {
                                element = employer.zip
                                emp = employer
                            }
                        })
                        list_tri.push(emp)
                        element = ""
                        emp = ""
                    }

                }

                console.log("test zip")
            }

            var nvlist_tri = list_tri.map(employer =>
                <tr >
                    <td>{employer.firstname}</td>
                    <td>{employer.lastname}</td>
                    <td>{employer.start}</td>
                    <td>{employer.department}</td>
                    <td>{employer.birth}</td>
                    <td>{employer.street}</td>
                    <td>{employer.city}</td>
                    <td>{employer.etat}</td>
                    <td>{employer.zip}</td>
                </tr>
            )

            return (
                <tbody>
                    {nvlist_tri}
                </tbody>
            )
        }
    }

    return (
        <div id="tableau">
            <h2>Current Employees</h2>
            <div id="part-h">
                <div id="part-show">
                    <p>Show </p>
                    <select>
                        <option value="10" selected>10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <p> entries</p>
                </div>
                <div id="part-search">
                    <label htmlFor="recherche">Search: </label>
                    <input type="textbox" id="recherche"></input>
                </div>
            </div>
            <div id="part_tri">
                <label htmlFor="select_tri" >tri par:</label>
                <select id="select_tri" onChange={change_tri}>
                    <option value="first_name" selected>first name</option>
                    <option value="last_name" >last name</option>
                    <option value="start_date" >start date</option>
                    <option value="department" >department</option>
                    <option value="birth" >birth</option>
                    <option value="street" >street</option>
                    <option value="city" >city</option>
                    <option value="state" >state</option>
                    <option value="zip" >zip</option>
                </select>
            </div>
            <table>
               
                <thead>
                    <tr>
                        <th scope="col" >First name</th>
                        <th scope="col" >Last name</th>
                        <th scope="col" >Start date</th>
                        <th scope="col" >Department</th>
                        <th scope="col" >Date of birth</th>
                        <th scope="col" >Street</th>
                        <th scope="col" >City</th>
                        <th scope="col" >State</th>
                        <th scope="col" >Zip code</th>
                    </tr>
                </thead>
               
                { 
                    gen_lignes()
                }
               


            </table>


        </div>
        )*/
    /*  <tr>
                        <th scope="row">Chris</th>
                        <td>HTML tables</td>
                        <td>22</td>
                    </tr>
                    <tr>
                        <th scope="row">Dennis</th>
                        <td>Web accessibility</td>
                        <td>45</td>
                    </tr>
                    <tr>
                        <th scope="row">Sarah</th>
                        <td>JavaScript frameworks</td>
                        <td>29</td>
                    </tr>
                    <tr>
                        <th scope="row">Karen</th>
                        <td>Web performance</td>
                        <td>36</td>
                    </tr> */
}

export default Tableau