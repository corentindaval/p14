import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Etat from "../composants/drop_etat"
import { addList } from '../assets/list_employer'
import states from "../assets/list_etats"
import { Selector } from 'composant_p14'

function Formulaire() {
    const dispatch = useDispatch()
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [birth, setbirth] = useState("");
    const [start, setstart] = useState("");
    const [street, setstreet] = useState("");
    const [city, setcity] = useState("");
    const [etat, setetat] = useState("");
    const [zip, setzip] = useState("");
    const [department, setdepartement] = useState("");
    function changefirstname(e) {
        setfirstname(e.target.value);
    }
    function changelastname(e) {
        setlastname(e.target.value);
    }
    function changebirth(e) {
        setbirth(e.target.value);
    }
    function changestart(e) {
        setstart(e.target.value);
    }
    function changestreet(e) {
        setstreet(e.target.value);
    }
    function changecity(e) {
        setcity(e.target.value);
    }
    function changeetat(e) {
        console.log("etat:" + e.target.value)
        setetat(e.target.value);
    }
    function changezip(e) {
        setzip(e.target.value);
    }
    function changedepartement(e) {
        setdepartement(e.target.value);
    }
    function sauvegarde() {
        const data = {
            "firstname": firstname,
            "lastname": lastname,
            "birth": birth,
            "start": start,
            "street": street,
            "city": city,
            "etat": etat,
            "zip": zip,
            "department": department
        }
        console.log(data)
        if (firstname != "" & lastname != "" & birth != "" & start != "" & street != "" & city != "" & etat != "" & zip != "" & department != "" & department != "select department") {
            dispatch(addList(data));
            alert("nouvelle utilisateur enregistrer")
        } else {
            alert("veuillez remplir tous les champs")
        }

    }
    return (
        <div id="form">
            <h2>Create Employee</h2>
            <form action="#" id="create-employee" className="colone">
                <div id="p_sup" className="ligne">
                    <div id="partie_id" className="colone">
                        <label htmlFor="first-name">First Name</label>
                        <input className="input" type="text" id="first-name" onChange={changefirstname} />
                        <label htmlFor="last-name">Last Name</label>
                        <input className="input" type="text" id="last-name" onChange={changelastname} />
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <input className="input" id="date-of-birth" type="date" onChange={changebirth} />
                        <label htmlFor="start-date">Start Date</label>
                        <input className="input" id="start-date" type="date" onChange={changestart} />
                    </div>
                    <fieldset id="partie_adresse" className="colone">
                        <legend>Address</legend>
                        <label htmlFor="street">Street</label>
                        <input className="input" id="street" type="text" onChange={changestreet} />
                        <label htmlFor="city">City</label>
                        <input className="input" id="city" type="text" onChange={changecity} />
                        <label htmlFor="state">State</label>
                        <Selector onchange={changeetat} Id="state" Name="state" Options={states}></Selector>
                        <label htmlFor="zip-code" id="et">Zip Code</label>
                        <input className="input" id="zip-code" type="number" onChange={changezip} />
                    </fieldset>
                </div>
                <div id="zdepartement" className="colone">
                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" onChange={changedepartement}>
                        <option>select department</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </div>
            </form>
            <button onClick={sauvegarde} id="save_button">Save</button>
        </div>
    )
}
export default Formulaire

