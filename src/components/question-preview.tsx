import React, { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Title } from "./ui/title";

type AnswerData = {
  id: number;
  title: string;
  type: string;
  subtitle: string;
  value: string;
};


type QuestionPreviewProps = {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  options?: string[] | undefined;
  onChange: (answer: AnswerData) => void; // Pass all fields
};

const QuestionPreview = ({
  id,
  title,
  type,
  subtitle,
  options = [],
  onChange,
}: QuestionPreviewProps) => {
  
  const [inputValue, setInputValue] = useState<string>(""); // For other types

  // Handle input change generically
  const handleInputChange = (value: string) => {
    setInputValue(value);
    onChange({id, title, type, subtitle, value}); // Return value to the parent with question ID
  };


  return (
    <div className="border rounded-2xl p-4 bg-gray-00 max-w-[592px] w-full hover:bg-gray-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-between">
        <div>
          {/* Title */}
          <Title className="text-sm">{title || "Untitled Question"}</Title>

          {/* Subtitle */}
          {subtitle && <Title className="font-normal text-xs text-gray-600">{subtitle}</Title>}
        </div>
      </div>

      {/* Render input based on type */}
      <div className="mt-4">
        {type === "shortAnswer" && (
          <Input
            value={inputValue}
            placeholder=""
            onChange={(e) => handleInputChange(e.target.value)}
          />
        )}
        {type === "longAnswer" && (
          <Textarea
            value={inputValue}
            placeholder=""
            rows={2}
            className="w-full p-2 border rounded resize-none"
            onChange={(e) => handleInputChange(e.target.value)}
          />
        )}
        {type === "singleSelect" && (
          <div className="space-y-2">
            {options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                {/* Radio Input */}
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={`question-${id}`} // Group radio buttons by question ID
                  value={option}
                  checked={inputValue === option}
                  onChange={() => handleInputChange(option)}
                  className="peer hidden" // Hide default radio button
                />
                <div className="w-3 h-3 rounded-full border p-1 border-gray-400 flex items-center justify-center peer-checked:border-green-300 peer-checked:bg-green-300"></div>

                <label htmlFor={`option-${index}`} className="text-gray-800 cursor-pointer">
                  {option || `Option ${index + 1}`}
                </label>
              </div>
            ))}
          </div>
        )}
        {type === "url" && (
          <Input
            type="url"
            value={inputValue}
            placeholder=""
            onChange={(e) => handleInputChange(e.target.value)}
          />
        )}
        
        {type === "number" && (
          <Input
            type="number"
            value={inputValue}
            placeholder=""
            onChange={(e) => handleInputChange(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionPreview;
