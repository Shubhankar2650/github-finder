'use client';

import { getUserDataByUsername, getUserRepos } from '@/services/api-service';
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { AtSign, BookCopy, GithubIcon, LinkIcon, Loader, Loader2, LocateIcon, MapPin, Star, Twitter, UserRoundCheck, UserRoundPlus } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { MeteorsCard } from '@/components/meteorscard';
import { Meteors } from '@/components/ui/meteors';
import { SheetDemo } from '@/components/sheet';



const UserDetailPage = ({ params }) => {

    const [userdata, setUserdata] = useState(null);
    const [userrepos, setUserRepos] = useState(null);
    const [reponame, setRepoName] = useState(null);
    const [error, setError] = useState(null);
    const [countRepo, setCountRepo] = useState(9);
    const [filtered, setFiltererd] = useState(userrepos);

    function handleOnClick() {
        setCountRepo(userrepos?.length)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await getUserDataByUsername(params.username);
                setUserdata(data)
                console.log(data)
                const { data: repos } = await getUserRepos(params.username);
                setUserRepos(repos);
                setFiltererd(repos)

            } catch (error) {
                console.log(error);
                setError(error?.response?.data?.message)
            }
        }

        fetchData()

    }, [])

    console.log(filtered)

    const handleFilter = (e) => {

        setFiltererd(userrepos.filter((a) => a.name.includes(e.target.value)))
    }

    if (!userdata) return <div className='h-screen w-full flex flex-col items-center justify-center'>
        {error ?
            <>
                <Image
                    src="/skelton.webp"
                    alt='image'
                    width={280}
                    height={280}
                />
                <p className='m-3 text-xl animate-pulse'>{error.slice(0, 45)}</p>
            </>
            : <>
                <Loader2 className='h-12 w-12 animate-spin ' />
                <p className='animate-pulse'>
                    Loading...
                </p>
            </>
        }
    </div>

    return (
        <>
            <div className='max-w-screen overflow-hidden'>
                <section className='flex flex-col items-center gap-2 w-screen h-screen justify-center mb-3 relative'>
                    <Image
                        src={userdata.avatar_url}
                        alt='userimage'
                        width={240}
                        height={240}
                        className=' rounded-full border-4 border-blue-300 mt-8 z-10'
                    />
                    <p className='mt-2 text-6xl max-md:text-4xl'>{userdata.name}</p>
                    <p className='flex text-2xl'>
                        <AtSign className='translate-y-1' />

                        {userdata.login}</p>
                    <p className='flex text-3xl gap-1 text-cyan-400'>
                        <MapPin className='translate-y-1' />
                        {userdata.location}</p>
                    <ul className='flex gap-2 text-xl m-4 max-md:hidden'>
                        <li className='flex gap-3 px-5 py-1 border-r-2 border-white m-auto'>

                            <div className='item-center'>
                                Total Repos <br />
                                <p className=' text-green-600 text-2xl text-center'>{userdata.public_repos}</p>
                            </div>
                            <div className='p-1 m-auto'>
                                <BookCopy size={35} className=' text-green-600' />
                            </div>

                        </li>
                        <li className='flex gap-2 px-5 py-1 border-r-2 border-white m-auto'>
                            <div>
                                <SheetDemo title="Followers" params={userdata.login} /><br />
                                <p className=' text-pink-400 text-2xl text-center'>{userdata.followers}</p>
                            </div>
                            <div className='p-1 m-auto'>
                                <UserRoundPlus size={35} className=' text-pink-400' />
                            </div>
                        </li>
                        <li className='flex gap-2 px-5 py-1 border-r-2 border-white m-auto'>
                            <div>
                                <SheetDemo title="Following" params={userdata.login} /><br />
                                <p className=' text-purple-600 text-2xl text-center'>{userdata.following}</p>
                            </div>
                            <div className='p-1 m-auto'>
                                <UserRoundCheck size={35} className=' text-purple-600' />
                            </div>
                        </li>

                        <li className='flex gap-2 px-5 py-1 m-auto'>
                            <div>
                                Total Stars <br />
                                <p className=' text-yellow-600 text-2xl text-center'>{userdata.following}</p>
                            </div>
                            <div className='p-1 m-auto'>
                                <Star size={35} className=' text-yellow-600' />
                            </div>
                        </li>
                    </ul>
                    <ul className='flex gap-2 text-xl m-4 md:hidden'>
                        <li className='flex flex-col gap-3 px-5 py-1 border-r-2 border-white m-auto'>
                            <div className='p-1 m-auto'>
                                <BookCopy size={35} className=' text-green-600' />
                            </div>
                            <div className='item-center'>
                                Total Repos <br />
                                <p className=' text-green-600 text-2xl w-full text-center'>{userdata.public_repos}</p>
                            </div>
                        </li>

                        <li className='flex flex-col gap-2 px-5 py-1 border-r-2 border-white m-auto'>
                            <div className='p-1 m-auto'>
                                <UserRoundPlus size={35} className=' text-pink-400' />
                            </div>
                            <div>Followers<br />
                                <p className=' text-pink-400 text-2xl w-full text-center'>{userdata.followers}</p>
                            </div>
                        </li>

                        <li className='flex flex-col gap-2 px-5 py-1 border-r-2 border-white m-auto'>
                            <div className='p-1 m-auto'>
                                <UserRoundCheck size={35} className=' text-purple-600' />
                            </div>
                            <div className='m-auto'>Following <br />
                                <p className=' text-purple-600 text-2xl w-full text-center'>{userdata.following}</p>
                            </div>
                        </li>

                        <li className='flex flex-col gap-2 px-5 py-1 m-auto'>
                            <div className='p-1 m-auto'>
                                <Star size={35} className=' text-yellow-600' />
                            </div>
                            <div>Total Stars
                                <p className=' text-yellow-600 text-2xl w-full text-center'>{userdata.following}</p>
                            </div>
                        </li>
                    </ul>

                    <div className='flex gap-4 text-l mb-1'>
                        <div className='flex gap-1'>
                            <Twitter />
                            <Link href={`https://x.com/${userdata.twitter_username}`}>Twitter</Link>
                        </div>
                        <div className='flex gap-1'>
                            <GithubIcon />
                            <Link href={`${userdata.html_url}`}>Github</Link>
                        </div>
                        {
                            userdata.blog ? <div className='flex gap-1'>
                                <LinkIcon className="text-cyan-700" />
                                <Link href={`https://${userdata.blog}`}>Website</Link>
                            </div>
                                : <></>
                        }
                    </div>
                    <Meteors number={40} />
                </section>

                {/* repo section  */}
                <div className='relative px-4 my-2 flex justify-between max-w-5xl mx-auto max-lg:max-w-3xl'>
                    <p className='text-xl p-2'>Showing Top Repos:</p>
                    <input
                        type="text"
                        onChange={handleFilter}
                        placeholder="search for repos"
                        className=" px-4 py-2.5 border-blue-300 border-2 rounded-full w-1/4 mr-5"
                    />
                </div>
                <section className='max-w-5xl mx-auto min-h-screen w-full grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5 p-4 m-2 place-items-center max-lg:max-w-3xl'>
                    {
                        filtered && filtered.sort((a, b) => b.stargazers_count - a.stargazers_count)?.filter((e, index) => index < countRepo)?.map((repo) => <MeteorsCard key={repo.id} repo={repo} />)
                    }
                </section>
                <div className='w-full flex justify-center'>
                    {
                        countRepo <= 9 ? <Button variant="outline" onClick={handleOnClick} >Show All</Button> : <></>
                    }
                </div>

                <Footer />
            </div>
        </>
    )
}

export default UserDetailPage