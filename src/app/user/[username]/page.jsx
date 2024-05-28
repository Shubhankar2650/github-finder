'use client';

import { getUserDataByUsername, getUserRepos } from '@/services/api-service';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { AtSign, BookCopy, GithubIcon, LinkIcon, Loader, Loader2, LocateIcon, MapPin, Star, Twitter, UserRoundCheck, UserRoundPlus } from 'lucide-react';
import { CardDemo } from '@/components/card';


const UserDetailPage = ({ params }) => {

    // console.log(params)
    const [userdata, setUserdata] = useState(null);
    const [userrepos, setUserRepos] = useState(null);
    const [reponame, setRepoName] = useState(null);
    const [error, setError] = useState(null);

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
                setError(error?.response?.data?.message)
            }
        }

        fetchData()

    }, [])

    if (!userdata) return <div className='h-screen w-full flex flex-col items-center justify-center'>
   {error ? 
   <>
   <iframe src="https://giphy.com/embed/xEznViNmOW5D7R22Ux" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
   <p className='m-3 text-xl animate-pulse'>{error.slice(0,45)}</p>
   </>
    :<>
   <Loader2 className='h-12 w-12 animate-spin ' />
   <p className='animate-pulse'>
       Loading...
   </p>
  </>
  }
    </div>

    return (
        <>
            <section className='flex flex-col items-center gap-2 w-screen h-screen justify-center'>
                <Image
                    src={userdata.avatar_url}
                    alt='userimage'
                    width={240}
                    height={240}
                    className=' rounded-full border-8 border-blue-400 mt-8'
                />
                <p className='mt-2 text-6xl'>{userdata.name}</p>
                <p className='flex text-2xl'>
                    <AtSign className='translate-y-1' />
                    
                    {userdata.login}</p>
                <p className='flex text-3xl gap-1 text-cyan-400'>
                    <MapPin className='translate-y-1' />
                    {userdata.location}</p>
                <ul className='flex gap-2 text-xl m-4'>
                    <li className='flex gap-3 px-5 py-1 border-r-2 border-white m-auto'>
                    
                        <div className='item-center'>Total Repos <br />
                            <span className=' text-green-600'>{userdata.public_repos}</span>
                        </div>
                        <div className='p-1 mp-auto'>
                            <BookCopy size={35} className=' text-green-600'/>
                        </div>

                    </li>
                    <li className='flex gap-2 px-5 py-1 border-r-2 border-white m-auto'>
                        <div>Followers<br />
                            <span className=' text-pink-400'>{userdata.followers}</span>
                        </div>
                        <div className='p-1 mp-auto'>
                            <UserRoundPlus size={35} className=' text-pink-400' />
                        </div>
                    </li>
                    <li className='flex gap-2 px-5 py-1 border-r-2 border-white m-auto'>
                        <div>Following <br />
                            <span className=' text-purple-600'>{userdata.following}</span>
                        </div>
                        <div className='p-1 mp-auto'>
                            <UserRoundCheck size={35} className=' text-purple-600' />
                        </div>
                    </li>
                    <li className='flex gap-2 px-5 py-1 m-auto'>
                        <div>Total Stars <br />
                            <span className=' text-yellow-600'>{userdata.following}</span>
                        </div>
                        <div className='p-1 mp-auto'>
                            <Star size={35} className=' text-yellow-600' />
                        </div>
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
            <div className='mx-4 flex justify-between '>
                <p className='text-lg p-2'>Showing Top Repos:</p>
                <input
                    type="text"
                    value={reponame}
                    onChange={(e) => setRepoName(e.target.value)}
                    placeholder="search for repos"
                    className=" px-4 py-2.5 border-blue-300 border-2 rounded-full w-1/4 mr-5"
                />
            </div>
            <section className='min-h-screen w-full grid grid-cols-3 gap-4 px-4 m-2'>
                {
                    userrepos?.map((repo) => <CardDemo key={repo.id} repo={repo} username={params.username} />)
                }
            </section>
            <Footer />
        </>
    )
}

export default UserDetailPage