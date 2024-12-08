import React, { useState } from 'react';
import { Title } from './ui/title';
import { Input } from './ui/input';
import Dropdown from './custom-dropdown';
import Icon from './icon';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';

const inputTypes = [
  { label: 'Short Answer', name: 'shortAnswer', fill: false },
  { label: 'Long Answer', name: 'longAnswer', fill: false },
  { label: 'Single Select', name: 'singleSelect', fill: false },
  { label: 'URL', name: 'url', fill: false },
  { label: 'Date', name: 'date', fill: false },
  { label: 'Number', name: 'number', fill: false },
];

const Question = () => {
  const [questionType, setQuestionType] = useState(inputTypes[0]); 
  const [options, setOptions] = useState([""]); 
  const [title, setTitle] = useState("");
  const [helpText, setHelpText] = useState("");

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ``]);
  };

  return (
    <div className="border rounded-2xl p-4 bg-gray-00 max-w-[592px] w-full hover:bg-gray-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          {/* <Title variant={"gray"}>Write a question</Title> */}
          <input
            type="text"
            placeholder="Write a question"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`font-semibold ${title ? 'text-gray-1k': 'text-gray-400'}  bg-transparent border-none outline-none w-full`}
          />
          <input
            type="text"
            value={helpText}
            onChange={(e) => setHelpText(e.target.value)}
            placeholder="Write a help text or caption (leave empty if not needed)."
            className={`font-normal text-xs ${helpText ? 'text-gray-1k': 'text-gray-400'}  bg-transparent border-none outline-none w-full`}
          />
          {/* <Title variant={"gray"} className="text-xs font-normal">
            Write a help text or caption (leave empty if not needed).
          </Title> */}
        </div>

        <div className="flex items-center gap-2 text-gray-1k">
          {/* Pass the setter function to Dropdown */}
          <Dropdown inputTypes={inputTypes} setQuestionType={setQuestionType} />
          <div className="text-gray-400 cursor-move">
            <Icon name="gripVertical" width={20} height={20} />
          </div>
        </div>
      </div>

      <div className="mt-1">
        {questionType.name === 'shortAnswer' && <Input disabled  />}
        
        {questionType.name === 'longAnswer' && (
          <Textarea disabled placeholder="" rows={2} className="w-full p-2 border rounded resize-none" />
        )}

        {questionType.name === 'singleSelect' && (
          <div>
            <div className="flex flex-col space-y-2 flex-grow">
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div
                    id={`option-${index}`}
                    className="w-4 h-4 shrink-0 rounded-full border border-gray-500 flex items-center justify-center"
                  ></div>
                  <Input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    placeholder={`Option ${index + 1}`}
                    className='text-gray-400 placeholder:text-gray-400'
                  />
                  {index === options.length - 1 && (<>
                    <Button variant={'ghost'} size={'icon'} onClick={addOption} className="shadow-none">
              <Plus className="w-6 h-6 text-gray-1k " strokeWidth={1.5}  />
            </Button>
                  </>)}
                </div>
              ))}
            </div>
            
          </div>
        )}

        {questionType.name === 'url' && <Input disabled type="url" placeholder="" />}

        {questionType.name === 'date' && (
        <div className="relative">
          <Input
            type="text"
            placeholder="MM-DD-YYYY"            
            pattern="\d{2}-\d{2}-\d{4}" // To match MM-DD-YYYY format
            disabled
          />
          {/* Date Icon */}
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {/* <Icon name='date' width={20} fill={false} height={20} /> */}
          </div>
        </div>
      )}

        {questionType.name === 'number' && <Input disabled type="number" placeholder="" />}
      </div>
    </div>
  );
};

export default Question;
