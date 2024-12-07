import React from 'react'
import { Title } from './ui/title'
import { Input } from './ui/input'
import Dropdown from './custom-dropdown'

import { icons } from '@/assets/icons';
import { GripVertical } from 'lucide-react';
import Image from 'next/image';


const inputTypes = [
  { icon: icons.ShortAnswerIcon, label: 'Short Answer' },
  { icon: icons.LongAnswerIcon, label: 'Long Answer' },
  { icon: icons.SingleSelectIcon, label: 'Single Select' },
  { icon: icons.UrlIcon, label: 'URL' },
  { icon: icons.DateIcon, label: 'Date' },
];



const question = () => {
  return (
    <div className='border rounded-2xl p-4 bg-gray-00 max-w-[592px] w-full'>
        
      <div className='flex items-center justify-between'>

        <div>
          <Title variant={'gray'}>
            Write a question
          </Title>
          <Title variant={"gray"} className='text-xs font-normal'>
            Write a help text or caption (leave empty if not needed).
          </Title>
        </div>

          <div className='flex items-center gap-2 text-gray-1k'>
            <Dropdown inputTypes={inputTypes}/>
            <Image src={icons.GripVerticalIcon} className='cursor-move' alt='Grip Vertical Icon' width={20} height={20} />
          </div>
        
      </div>
        
        <Input disabled className='mt-2' />
    </div>
  )
}

export default question