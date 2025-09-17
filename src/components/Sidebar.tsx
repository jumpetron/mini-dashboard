'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../../public/logo.png'
import logoTwo from '../../public/logo-two.png'
import Link from 'next/link'
import {
  Home,
  FileText,
  Users,
  CircleArrowLeft,
  CircleArrowRight
} from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)
  const pathname = usePathname()
  return (
    <motion.div
      initial={{ width: 64 }}
      animate={{ width: isOpen ? 200 : 64 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className='relative h-screen bg-gray-50 text-black flex flex-col border border-r-2 border-gray-200'>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='absolute -right-3 top-4 focus:outline-none cursor-pointer'>
        {isOpen ? (
          <CircleArrowLeft color='gray' />
        ) : (
          <CircleArrowRight color='gray' />
        )}
      </button>

      {/* Nav Items */}
      <div className='flex-1 px-2'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className='my-2 mx-auto block'>
          <a href=''>
            <Image
              src={isOpen ? logo : logoTwo}
              width={isOpen ? 150 : 200}
              alt='logo'
            />
          </a>
        </motion.div>

        <nav>
          {[
            { icon: <Home size={20} />, label: 'Dashboard', href: '/' },
            { icon: <FileText size={20} />, label: 'Posts', href: '/posts' },
            { icon: <Users size={20} />, label: 'Users', href: '/users' }
          ].map((item) => {
            const isActive = pathname === item.href
            return (
              <Link key={item.label} href={item.href}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className={`${
                    !isOpen && 'justify-center'
                  } flex items-center gap-3 px-2 py-2 rounded-md transition-colors mb-1 
                  ${
                    isActive
                      ? 'bg-gray-700 text-white'
                      : 'hover:bg-gray-700 hover:text-white'
                  }`}>
                  {item.icon}
                  {isOpen && (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className='text-sm'>
                      {item.label}
                    </motion.span>
                  )}
                </motion.div>
              </Link>
            )
          })}
        </nav>
      </div>
    </motion.div>
  )
}
