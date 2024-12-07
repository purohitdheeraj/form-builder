"use client";
import { Button } from '@/components/ui/button';

import Dropdown from '@/components/custom-dropdown';

import { icons } from '@/assets/icons';

const inputTypes = [
  { icon: icons.ShortAnswerIcon, label: 'Short Answer' },
  { icon: icons.LongAnswerIcon, label: 'Long Answer' },
  { icon: icons.SingleSelectIcon, label: 'Single Select' },
  { icon: icons.UrlIcon, label: 'URL' },
  { icon: icons.DateIcon, label: 'Date' },
];



const CreateJob = () => {
  return (
    <>
      <div className='py-3'>
        <Button variant={'outline'} size={'sm'} className='font-semibold'>
          Add Question
        </Button>

        <br />
        <br />

        <Button variant={'outline'} size={'sm'} className='font-semibold' disabled>
          Preview
        </Button>

        <br />
        <br />

        <Dropdown inputTypes={inputTypes} />
      </div>
    </>
  );
};

export default CreateJob;
