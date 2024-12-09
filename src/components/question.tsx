import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import Dropdown from "./custom-dropdown";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const inputTypes = [
  { label: "Short Answer", name: "shortAnswer", fill: false },
  { label: "Long Answer", name: "longAnswer", fill: false },
  { label: "Single Select", name: "singleSelect", fill: false },
  { label: "URL", name: "url", fill: false },
  { label: "Number", name: "number", fill: false },
];

const Question = ({
  questionId,
  questionType,
  title,
  subtitle,
  updateQuestion,
}) => {
  const [localType, setLocalType] = useState(questionType);
  const [localTitle, setLocalTitle] = useState(title);
  const [localSubtitle, setLocalSubtitle] = useState(subtitle);
  const [options, setOptions] = useState(["",""]); // Options for single-select

  // Notify parent whenever local state changes
  useEffect(() => {
    updateQuestion(questionId, {
      type: localType,
      title: localTitle,
      subtitle: localSubtitle,
      options: localType === "singleSelect" ? options : undefined, // Send options only for single select
    });
  }, [localType, localTitle, localSubtitle, options]);

  // Handle change in single-select options
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  // Add new option
  const addOption = () => {
    setOptions((prev) => [...prev, ""]);
  };

  return (
    <div className="border rounded-2xl space-y-1 p-4 bg-gray-00 max-w-[592px] w-full hover:bg-gray-50 transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-2 justify-between">
        <div className="flex-grow space-y-1">
          {/* Title Input */}
          <input
            type="text"
            placeholder="Write a question"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            className={`font-semibold ${
              localTitle ? "text-gray-1k" : "text-gray-400"
            } bg-transparent border-none outline-none w-full text-sm flex-grow `}
          />
          {/* Subtitle Input */}
          <input
            type="text"
            placeholder="Write a help text or caption (leave empty if not needed)"
            value={localSubtitle}
            onChange={(e) => setLocalSubtitle(e.target.value)}
            className={`font-normal text-xs ${
              localSubtitle ? "text-gray-1k" : "text-gray-400"
            } bg-transparent border-none outline-none w-full`}
          />
        </div>
        <div className="flex items-center text-gray-1k">
          {/* Dropdown for question type */}
          <Dropdown
            currentType={inputTypes.find((item) => item.name === localType)}
            triggerType="icon"
            inputTypes={inputTypes}
            setQuestionType={(item) => setLocalType(item.name)}
          />
        </div>
      </div>

      {/* Render input based on question type */}
      <div>
        {localType === "shortAnswer" && <Input disabled placeholder="" />}
        {localType === "longAnswer" && (
          <Textarea
            disabled
            placeholder=""
            rows={2}
            className="w-full p-2 border rounded resize-none"
          />
        )}
        {localType === "singleSelect" && (
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
                    onChange={(e) =>
                      handleOptionChange(index, e.target.value)
                    }
                    placeholder={`Option ${index + 1}`}
                    className="text-gray-1k placeholder:text-gray-400"
                  />
                  {index === options.length - 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={addOption}
                      className="shadow-none"
                    >
                      <Plus
                        className="w-6 h-6 text-gray-1k"
                        strokeWidth={1.5}
                      />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        {localType === "url" && <Input disabled type="url" placeholder="" />}
        
        {localType === "number" && (
          <Input disabled type="number" placeholder="" />
        )}
      </div>
    </div>
  );
};

export default Question;
