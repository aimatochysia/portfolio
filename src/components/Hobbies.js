import React from 'react'

const hobbies = [
  'Coding',
  '3D Illustrating',
  'Managing Terrarium',
  'Leather Crafting',
  'Stock Market Analysis'
]

const Hobbies = () => {
  return (
    <div className='mb-16'>
      <h2 id='hobbies' className='text-3xl font-semibold mb-6'>
        Hobbies
      </h2>
      <ul className='flex flex-wrap gap-4'>
        {hobbies.map(hobby => (
          <li
            key={hobby}
            className='px-4 py-2 rounded-lg shadow-lg'
            style={{
              backdropFilter: 'blur(7px)',
              color: '#ffffff',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)',
              border: '1px solid',
              borderColor: 'rgba(240,255,255,0.5)',
              borderRadius: '12px'
            }}
          >
            {hobby}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Hobbies
