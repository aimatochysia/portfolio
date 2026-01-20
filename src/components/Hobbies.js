import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaCube, FaLeaf, FaTools, FaChartLine } from 'react-icons/fa'

const hobbies = [
  { name: 'Coding', icon: FaCode, color: 'from-blue-500 to-cyan-400' },
  { name: '3D Illustrating', icon: FaCube, color: 'from-orange-500 to-yellow-400' },
  { name: 'Managing Terrarium', icon: FaLeaf, color: 'from-green-500 to-emerald-400' },
  { name: 'Leather Crafting', icon: FaTools, color: 'from-amber-700 to-orange-500' },
  { name: 'Stock Market Analysis', icon: FaChartLine, color: 'from-purple-500 to-pink-400' }
]

const Hobbies = () => {
  return (
    <div className='mb-16'>
      <h2 id='hobbies' className='text-3xl font-semibold mb-6'>
        Hobbies
      </h2>
      <ul className='flex flex-wrap gap-4'>
        {hobbies.map((hobby, index) => (
          <motion.li
            key={hobby.name}
            className='px-5 py-3 rounded-xl shadow-lg cursor-default'
            style={{
              backdropFilter: 'blur(7px)',
              color: '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              border: '1px solid',
              borderColor: 'rgba(240,255,255,0.3)',
            }}
            whileHover={{ 
              scale: 1.08,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.5)',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className='flex items-center gap-3'>
              <hobby.icon className={`text-xl`} />
              <span className='font-medium'>{hobby.name}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}

export default Hobbies
