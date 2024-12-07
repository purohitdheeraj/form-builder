"use client";
import { Button } from '@/components/ui/button';

import Dropdown from '@/components/custom-dropdown';

import Question from '@/components/question';


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

        <Question/>
      </div>
    </>
  );
};

export default CreateJob;
