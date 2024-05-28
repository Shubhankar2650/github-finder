'use client';

import { getUserDataByUsername, getUserRepos } from '@/services/api-service';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { GithubIcon, LinkIcon, Twitter } from 'lucide-react';
import { CardDemo } from '@/components/card';


const UserDetailPage = ({ params }) => {

    // console.log(params)
    const [userdata, setUserdata] = useState(null);
    const [userrepos, setUserRepos] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getUserDataByUsername(params.username);
                setUserdata(data)
                console.log(data)
                const { data: repos } = await getUserRepos(params.username);
                setUserRepos(repos);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData()

    }, [])

    if (!userdata) return <p>loading...</p>

    return (
        <>
            <section className='flex flex-col items-center gap-2 w-screen'>
                <Image
                    src={userdata.avatar_url}
                    alt='userimage'
                    width={240}
                    height={240}
                    className=' rounded-full border-8 border-blue-400 mt-8'
                />
                <p className='mt-2 text-5xl'>{userdata.name}</p>
                <p className='flex text-2xl gap-1'>
                    <Image
                        src='/github-color-svgrepo-com.svg'
                        alt='twitter'
                        width={20}
                        height={20}
                    />
                    {userdata.login}</p>
                <p className='flex text-2xl gap-1 text-yellow-400'>
                    <Image
                        src='/github-color-svgrepo-com.svg'
                        alt='twitter'
                        width={20}
                        height={20}
                    />
                    {userdata.location}</p>
                <ul className='flex gap-2 text-xl m-1'>
                    <li className='flex gap-2 p-2 border-r-2 border-white'>
                        <div className='item-center'>Total Repos <br />
                            <span className=' text-green-600'>{userdata.public_repos}</span>
                        </div>
                        <Image
                            src='/github-color-svgrepo-com.svg'
                            alt='twitter'
                            width={20}
                            height={20}
                        />

                    </li>
                    <li className='flex gap-2 p-2 border-r-2 border-white'>
                        <div>Total Repos <br />
                            <span className=' text-pink-400'>{userdata.followers}</span>
                        </div>
                        <Image
                            src='/github-color-svgrepo-com.svg'
                            alt='twitter'
                            width={20}
                            height={20}
                        />
                    </li>
                    <li className='flex gap-2 p-2'>
                        <div>Total Repos <br />
                            <span className=' text-purple-600'>{userdata.following}</span>
                        </div>
                        <Image
                            src='/github-color-svgrepo-com.svg'
                            alt='twitter'
                            width={20}
                            height={20}
                        />
                    </li>
                </ul>

                <div className='flex gap-4 text-l'>
                    <div className='flex gap-1'>
                        <Twitter />
                        <Link href={`https://x.com/${userdata.twitter_username}`}>Twitter</Link>
                    </div>
                    <div className='flex gap-1'>
                        <GithubIcon />
                        <Link href={`${userdata.html_url}`}>Github</Link>
                    </div>
                    <div className='flex gap-1'>
                        <LinkIcon className="text-cyan-700" />
                        <Link href={`https://${userdata.blog}`}>Website</Link>
                    </div>
                </div>
            </section>

            {/* repo section  */}
            <p>Showing top repos</p>
            <section className='min-h-screen w-full grid grid-cols-3 gap-6'>
                {
                    userrepos?.map((repo) => <CardDemo key={repo.id} repo={repo} username={params.username} />)
                }
            </section>
            <Footer />
        </>
    )
}

export default UserDetailPage