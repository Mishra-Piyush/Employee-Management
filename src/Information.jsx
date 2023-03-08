import React from 'react';

function Information({ lookData }) {
    console.log(lookData)
    return (
        <div className='Information'>
            <div className='Info_Header'>
                Employee Information
            </div>
            {
                lookData &&
                <div className='content'>
                    <div className='userIMage'>
                        <img className='user-image' src={lookData.imgurl} />
                    </div>
                    <div className='user-name'>{lookData?.firstName} {lookData?.lastName}</div>
                    <div className='details'>Address: {lookData?.Address}</div>
                    <div className='details'>E-mail: {lookData?.email}</div>
                    <div className='details'>Mobile: {lookData?.mobilenumber}</div>
                    <div className='details'>DOB: {lookData?.DOB}</div>

                </div>
            }
        </div>
    );
}

export default Information;