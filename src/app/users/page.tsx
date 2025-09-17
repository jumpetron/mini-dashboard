'use client'

import { useState } from 'react'
import useFetch from '@/hooks/useFetch'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import userImage from '../../../public/user.png'
import {
  Building2,
  CircleX,
  Globe,
  Mail,
  MapPin,
  Phone,
  Users
} from 'lucide-react'
import LoadingSpinner from '@/components/LoadingSpinner'

type User = {
  id: number
  name: string
  email: string
  company: { name: string }
  phone: string
  website: string
  address: { city: string }
}

export default function UsersPage() {
  const {
    data: users,
    loading,
    error
  } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)

  if (loading) return <LoadingSpinner />
  if (error) return <p className='text-red-500'>{error}</p>

  return (
    <div className='text-black'>
      <h1 className='flex items-center gap-2 text-3xl font-bold mb-6'>
        <Users size={26} />
        Users
      </h1>

      {/* Table */}
      <div className='overflow-x-auto shadow rounded-lg border border-gray-200'>
        <table className='w-full border-collapse'>
          <thead className='bg-gray-100 text-gray-700'>
            <tr>
              <th className='px-4 py-3 text-left'>Name</th>
              <th className='px-4 py-3 text-left'>Email</th>
              <th className='px-4 py-3 text-left'>Company</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className='cursor-pointer hover:bg-gray-50 transition border-t border-gray-200'>
                <td className='px-4 py-3 font-medium'>{user.name}</td>
                <td className='px-4 py-3'>{user.email}</td>
                <td className='px-4 py-3'>{user.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedUser && (
          <motion.div
            className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedUser(null)}>
            <motion.div
              className='bg-white rounded-xl shadow-2xl w-96 relative overflow-hidden'
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}>
              <div className='bg-gradient-to-r from-gray-700 to-gray-200 h-28 flex items-center justify-center'>
                <Image
                  src={userImage}
                  alt={selectedUser.name}
                  width={80}
                  height={80}
                  className='rounded-full border-4 border-white shadow-lg'
                />
              </div>
              {/* User Details */}
              <div className='p-6'>
                <h2 className='text-xl font-bold text-gray-900 text-center mb-4'>
                  {selectedUser.name}
                </h2>
                <div className='space-y-2 text-gray-700'>
                  <p className='flex items-center gap-2'>
                    <span className='font-semibold flex items-center gap-1'>
                      <Mail size={15} />
                      Email:
                    </span>
                    {selectedUser.email}
                  </p>
                  <p className='flex items-center gap-2'>
                    <span className='font-semibold flex items-center gap-1'>
                      <Phone size={15} />
                      Phone:
                    </span>
                    {selectedUser.phone}
                  </p>
                  <p className='flex items-center gap-2'>
                    <span className='font-semibold flex items-center gap-1'>
                      <Building2 size={15} />
                      Company:
                    </span>
                    {selectedUser.company?.name}
                  </p>
                  <p className='flex items-center gap-2'>
                    <span className='font-semibold flex items-center gap-1'>
                      <Globe size={15} /> Website:
                    </span>
                    {selectedUser.website}
                  </p>
                  <p className='flex items-center gap-2'>
                    <span className='font-semibold flex items-center gap-1'>
                      <MapPin size={15} /> City:
                    </span>
                    {selectedUser.address?.city}
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedUser(null)}
                className='absolute top-2 right-2 text-black  rounded-full cursor-pointer'>
                <CircleX size={22} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
