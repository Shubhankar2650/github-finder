import Image from 'next/image'
import React from 'react'

export const Cover = ({ data }) => {
    return (
        <div className="flex gap-2 m-3 p-2  border-blue-300">
            <Image
                src={data.avatar_url}
                alt="user profile"
                width={50}
                height={50}
                className=" rounded-full"
            />
            <p className='justify center p-3 texl-2xl'>
                <a href={data.html_url}>{data.login}</a>
            </p>
        </div>
    )
}