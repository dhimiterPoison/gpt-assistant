import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/date';
import React from 'react'
import useIcon from '../hooks/useIcon';
import HistoryCard from './HistoryCard';
import { HistoryEntry } from '@/lib/interfaces';

const history: HistoryEntry[] = [
  {
    id: 1,
    date: new Date('2024-02-18'),
    tags: ['cycling', 'rain', 'wet', 'projects'],
    title: 'Finding peace while staying focused',
    cover: 'https://source.unsplash.com/random/800x600',
    type: 'video'
  },
  {
    id: 2,
    date: new Date('2024-02-17'),
    tags: ['cycling', 'rain', 'wet', 'projects'],
    title: 'Finding peace while staying focused',
    cover: 'https://source.unsplash.com/random/800x600',
    type: 'audio'
  },
  {
    id: 3,
    date: new Date('2024-02-16'),
    tags: ['cycling', 'rain', 'wet', 'projects'],
    title: 'Finding peace while staying focused',
    cover: 'https://source.unsplash.com/random/800x600',
    type: 'text'
  },
  {
    id: 3,
    date: new Date('2024-02-15'),
    tags: ['cycling', 'rain', 'wet', 'projects'],
    title: 'Finding peace while staying focused',
    cover: 'https://source.unsplash.com/random/800x600',
    type: 'handwritten'
  }
];

const PathPage = () => {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row gap-4'>
      <div className='lg:w-1/2 rounded-lg shadow-sm border p-4 h-2/3 lg:h-full flex flex-col gap-4'>
        {history.map((entry, index) => {
          return <HistoryCard key={index} {...entry}></HistoryCard>

        })}
      </div>
      <div className='lg:w-1/2 rounded-lg shadow-sm border p-4 h-40 lg:h-full '>
        content
      </div>

    </div>
  )
}

export default PathPage