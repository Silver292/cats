import React from 'react'
import { Modal } from './Modal'

export const CatDetail = ({ cat, onCloseClick }) => (
  <Modal onCloseClick={onCloseClick}>
    <img
      className='self-center rounded mb-8'
      style={{ maxHeight: '400px' }}
      src={cat.imageUrl}
      alt={cat.name}
    />
    <Item label={'Name'} value={cat.name} />
    <Item label={'Location'} value={cat.location} />
    <Item label={'Price'} value={`£${cat.price}`} />
    <Item label={'Description'} value={cat.description} />
    <Item label={'Breed'} value={cat.breed} />
  </Modal>
)

const Item = ({ label, value }) => (
  <div className='bg-white mx-32 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
    <dt className='text-sm font-medium text-gray-500'>{label}</dt>
    <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
      {value}
    </dd>
  </div>
)
