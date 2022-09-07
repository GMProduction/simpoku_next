import React, { Component } from 'react'

const temptext = ({ icon, judul, isi, kelas }) => {
    return (
        <div className='h-[300px]'>
            <div className='flex justify-center mb-3'>
                <div className={kelas} >
                    {icon}
                </div>
                <div className='flex-1 flex-col flex-wrap grow'>
                    <p className='text-2xl font-bold mb-5'>{judul}</p>
                    <p className='font-light text-lg text-gray-500 '>{isi} </p>
                </div>

            </div>
        </div>
    )
}

export default temptext