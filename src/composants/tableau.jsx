import React, { useState } from 'react'
import { useSelector} from 'react-redux'


function Tableau() {
    const [select_tri, settri] = useState("");
    const list = useSelector((state) => state.List_employer.list_employer);

    function gen_lignes() {
      
        console.log(list)
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
                        {list_emploi }
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
    }

    function change_tri(e) {
       settri(e.target.value);
       tri()
    }

    function compareStrings(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();

        return (a < b) ? -1 : (a > b) ? 1 : 0;
    }

    function tri(critere) {





        if (critere == "first_name") {
            var list_tri = []
            var element = ""
            var emp=""

            while (list_tri.length != list.length) {
                if (list_tri == "") {
                    list.map(employer => {
                        if (element != "") {
                            if (employer.firstname < element) {
                                element = employer.firstname
                                emp=employer
                            }
                        } else {
                            element = employer.firstname
                            emp=employer
                        }
                    })
                    list_tri.push(emp)
                    element = ""
                    emp=""
                } else {

                }
                list.map(employer =>
                
                
                
                );
            }
          








           /* console.log("test first_name")
            const sortedArray = Array.from(list).sort((a, b) => a.firstname - b.firstname);
            console.log(sortedArray)
            const sortedMap = new Map(sortedArray);
            console.log(sortedMap);*/
        }
        if (critere == "last_name") {
            console.log("test last_name")
        }
        if (critere == "start_date") {
            console.log("test start_date")
        }
        if (critere == "department") {
            console.log("test department")
        }
        if (critere == "birth") {
            console.log("test birth")
        }
        if (critere == "street") {
            console.log("test street")
        }
        if (critere == "city") {
            console.log("test city")
        }
        if (critere == "state") {
            console.log("test state")
        }
        if (critere == "zip") {
            console.log("test zip")
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
               
                {gen_lignes()}
               


            </table>


        </div>
        )
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