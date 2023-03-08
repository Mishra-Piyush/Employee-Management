import React, { useEffect, useState } from 'react';
import Information from './Information';
import { db, collection, getDocs, doc, deleteDoc } from "./Firebase";
function Section({ count, setcount }) {
    const [employeeList, setemployeeList] = useState([]);
    const [lookData, setlookData] = useState(null);
    useEffect(() => {
        async function retriveData() {
            const querySnapshot = await getDocs(collection(db, "users"));
            let EmployeeData = []
            querySnapshot.forEach((doc) => {
                EmployeeData.push({ ...doc.data(), id: doc.id })


            });
            setemployeeList(EmployeeData)
        }
        retriveData()
    }, [count])

    const deleteData = async (id) => {
        deleteDoc(doc(db, "users", id))
        setcount(count + 1)
        lookemployeeDetails()
    }
    const lookemployeeDetails = (data) => {
        setlookData(data)
    }

    return (
        <div className='section_content'>

            <div className='EmployeList'>
                <div className='Info_Header'>
                    Employee List
                </div>
                {
                    employeeList.map((data) => {
                        return (
                            <div className='Employe_name'>
                                <div onClick={() => lookemployeeDetails(data)}>{data.firstName} {data.lastName}</div>
                                <div className='close-window' onClick={() => deleteData(data.id)}>X</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='employee_information'>
                <Information lookData={lookData} />
            </div>
        </div>
    );
}

export default Section;