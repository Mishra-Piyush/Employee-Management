import { async } from '@firebase/util';
import React, { useState } from 'react';
import { db, collection, addDoc } from './Firebase'
function InputData({ setshowWindow, count, setcount }) {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [Address, setAddress] = useState("");
    const [email, setemail] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [DOB, setDob] = useState("");
    const [imgurl, setimgurl] = useState("");
    const handleform = async (e) => {
        console.log("heelo")
        e.preventDefault();
        const docRef = await addDoc(collection(db, "users"), {
            firstName, lastName, Address, email, mobilenumber, DOB, imgurl
        });

        setcount(count + 1)
        setshowWindow(false)
    }

    return (
        <div className='employee-data'>
            <div className='InputData'>
                <div className='InputData_Header'>
                    <p>Add Employee</p>
                    <p onClick={() => setshowWindow(false)} className='close-window'>X</p>
                </div>
                <div className='Employee_input'>
                    <form
                        onSubmit={handleform}
                    >
                        <input type="text" placeholder='First Name' onChange={(e) => setfirstName(e.target.value)} required />
                        <input type="text" placeholder='Last Name' onChange={(e) => setlastName(e.target.value)} required />
                        <input type="text" placeholder='Image Url' onChange={(e) => setimgurl(e.target.value)} required />
                        <input type="text" placeholder='Address' onChange={(e) => setAddress(e.target.value)} required />
                        <input type="email" placeholder="E-Mail" onChange={(e) => setemail(e.target.value)} required />
                        <input type="number" placeholder="Mobile Number" onChange={(e) => setmobilenumber(e.target.value)} required />
                        <input type="date" placeholder="Date Of Birth" onChange={(e) => setDob(e.target.value)} required />
                        <button type='submit' className='submit-data' >Submit Data</button>
                    </form>
                </div>

            </div>
        </div>

    );
}

export default InputData;