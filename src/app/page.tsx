'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const stats = [
  { id: '1', label: 'Active Users', value: '1.2k' },
  { id: '2', label: 'Open Posts', value: '320' },
  { id: '3', label: 'Revenue (M)', value: '$4.5k' }
]

export default function Home() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ]

  return (
    <div className='flex-1 bg-gray-50'>
      <motion.div
        className='mb-6'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.45 } }
        }}>
        <h1 className='text-2xl font-bold text-slate-800'>Welcome back!</h1>
        <p className='text-sm text-slate-500 mt-1'>
          Here's a quick snapshot of your app.
        </p>
      </motion.div>

      {/* Header Card */}
      <motion.div
        className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.12 }
          }
        }}>
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className='bg-white rounded-lg p-4 shadow-sm border'
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.06, duration: 0.35 }}>
            <div className='text-xs text-slate-400'>{stat.label}</div>
            <div className='mt-2 text-2xl font-semibold text-slate-800'>
              {stat.value}
            </div>
            <div className='text-xs text-slate-400 mt-1'>placeholder</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart */}
      <div className='w-full h-80 flex bg-white p-4 rounded-lg shadow-sm text-black'>
        <ResponsiveContainer width='100%' height='100%'>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Area
              type='monotone'
              dataKey='uv'
              stackId='1'
              stroke='#8884d8'
              fill='#8884d8'
            />
            <Area
              type='monotone'
              dataKey='pv'
              stackId='1'
              stroke='#82ca9d'
              fill='#82ca9d'
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
