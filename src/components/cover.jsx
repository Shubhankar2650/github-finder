import Image from 'next/image'
import React from 'react'

export const Cover = ({ data }) => {
    return (
        <div className="flex gap-2 mx-2 my-1 p-2  border-blue-300">
            <Image
                src={data.avatar_url}
                alt="user profile"
                width={50}
                height={50}
                className=" rounded-full border-2 border-blue-300"
            />
            <p className='justify center p-3 texl-2xl'>
                <a href={data.html_url} className=' hover:text-blue-300'>{data.login}</a>
            </p>
        </div>
    )
}