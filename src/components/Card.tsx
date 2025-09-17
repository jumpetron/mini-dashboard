'use client'

import Link from 'next/link'

type CardProps = {
  id: number
  title: string
  body: string
}

const Card = ({ id, title, body }: CardProps) => {
  return (
    <Link href={`/posts/${id}`}>
      <div className=' border border-gray-200 p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer bg-white h-32'>
        <h2 className='text-lg font-semibold mb-2 line-clamp-2'>{title}</h2>
        <p className='text-gray-600 text-sm'>{body.slice(0, 80)}...</p>
      </div>
    </Link>
  )
}

export default Card
