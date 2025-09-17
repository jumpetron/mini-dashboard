'use client'

import { useParams } from 'next/navigation'
import useFetch from '@/hooks/useFetch'
import { motion } from 'framer-motion'
import Link from 'next/link'
import LoadingSpinner from '@/components/LoadingSpinner'

type Post = { id: number; title: string; body: string }

export default function PostDetailsPage() {
  const { id } = useParams()
  const {
    data: post,
    loading,
    error
  } = useFetch<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (loading) return <LoadingSpinner />
  if (error) return <p className='text-red-500'>{error}</p>
  if (!post) return <p>No post found.</p>

  return (
    <div className='bg-gray-50 flex justify-center items-center p-6'>
      <motion.div
        className='bg-white max-w-2xl w-full rounded-2xl shadow-lg p-8 border border-gray-100'
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 15 }}>
        <h1 className='text-3xl font-bold text-gray-900 mb-4 leading-snug'>
          {post.title}
        </h1>
        <div className='h-1 w-16 bg-gray-700 rounded mb-6'></div>
        <p className='text-gray-700 text-lg leading-relaxed whitespace-pre-line'>
          {post.body}
        </p>
        <div className='mt-8 flex justify-between items-center text-sm text-gray-500'>
          <span>Post ID: {post.id}</span>
          <Link href='/posts'>
            <button className='px-4 py-2 bg-gray-700 text-white cursor-pointer rounded-lg shadow hover:bg-gray-700 transition'>
              Go Back
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
