import { Star } from 'lucide-react'
import React from 'react'

export const Footer = () => {
    return (
        <footer className=' h-14 w-full bg-blue-600 flex justify-center'>
            <div className="text-xs text-pretty">
                Build using Next.js,Github Rest Api and Tailwind CSS
                <br />
                <p className="flex justify-center ">Give it a star <Star className='text-xs text-yellow-300'/> <a href="###">here</a></p>
            </div>
        </footer>
    )
}
