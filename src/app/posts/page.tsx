'use client'

import Card from '@/components/Card'
import LoadingSpinner from '@/components/LoadingSpinner'
import useFetch from '@/hooks/useFetch'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

type Post = { id: number; title: string; body: string }

export default function PostsPage() {
  const {
    data: posts,
    loading,
    error
  } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts')

  if (loading) return <LoadingSpinner />
  if (error) return <p className='text-red-500'>{error}</p>

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80 }
    }
  }

  return (
    <div className='text-black'>
      <h1 className='text-2xl font-bold mb-4'>All Posts</h1>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 xl:grid-cols-4 gap-4'>
        {posts?.map((post) => (
          <motion.div key={post.id} variants={item}>
            <Card id={post.id} title={post.title} body={post.body} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
