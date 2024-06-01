import { Star } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    return (
        <footer className=' h-14 w-full bg-gray-900 flex justify-center p-2 mt-2'>
            <div className="text-xs text-pretty">
                Build using Next.js,Github Rest Api and Tailwind CSS
                <br />
                <p className="flex justify-center ">Give it a star <Star className='text-xs text-yellow-300 h-4' /> <a href="https://github.com/Shubhankar2650/github-finder">here &gt;&gt;</a></p>
            </div>
        </footer>
    )
}
