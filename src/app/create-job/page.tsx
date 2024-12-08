"use client";

import Dropdown from "@/components/custom-dropdown";
import Icon from "@/components/icon";
import Question from "@/components/question";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Define the type for input types
type InputType = {
  label: string;
  name: string;
  fill: boolean;
};

// Define the type for a single question
type QuestionType = {
  id: number;
  type: string;
  title: string;
  subtitle: string;
};

const inputTypes: InputType[] = [
  { label: "Short Answer", name: "shortAnswer", fill: false },
  { label: "Long Answer", name: "longAnswer", fill: false },
  { label: "Single Select", name: "singleSelect", fill: false },
  { label: "URL", name: "url", fill: false },
  { label: "Date", name: "date", fill: false },
  { label: "Number", name: "number", fill: false },
];

const CreateJob = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [jobTitle, setJobTitle] = useState<string>("");
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const jobTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (jobTitleRef.current) {
      jobTitleRef.current.focus(); // Focus the input when the component loads
    }
  }, []);

  // Function to add a new question
  const addQuestion = (questionType: InputType) => {
    const newQuestion: QuestionType = {
      id: Date.now(),
      type: questionType.name,
      title: "",
      subtitle: "",
    };
    setQuestions((prev) => [...prev, newQuestion]);
  };

  // Function to update an existing question's details
  const updateQuestion = (id: number, updatedFields: Partial<QuestionType>) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === id ? { ...question, ...updatedFields } : question
      )
    );
  };

  useEffect(() => {
    console.log("Questions updated:", questions);
  }, [questions]);

  if(showPreview){
    return <>
       <header className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-semibold">{jobTitle || "Submit form"}</h1>
          <div className="flex items-center gap-2 text-sm">
            <span>Form completeness — 80%</span>
            <div className="h-2 w-20 bg-gray-200 rounded">
              <div className="h-2 w-[80%] bg-green-500 rounded"></div>
            </div>
          </div>
        </header>
    </>
  }else{
    return (
      <div className="flex flex-col justify-between border-x ">
      <header className="py-3 px-6 flex items-center justify-between border-b sticky top-0 z-10 backdrop-blur-sm ">
    
            <input
              type="text"
              placeholder="Untitled form"
              value={jobTitle}
              ref={jobTitleRef}
              onChange={(e) => setJobTitle(e.target.value)}
              className={`font-semibold ${
                jobTitle ? "text-gray-1k" : "text-gray-400"
              } bg-transparent border-none outline-none w-full`}
            />
        
        <Button size={"sm"}  variant={'outline'} className="shadow-xl font-semibold"  disabled={questions.length <=0 } >
        <span>
            Preview
        </span>
        <ArrowUpRight size={16} />
        </Button>
      </header>
        
        <main className="space-y-4 flex flex-col  min-h-screen  ">
        {/* Dropdown for adding a question */}
      
            
        <div className="space-y-4 my-6 flex justify-center flex-col items-center">
          {questions.map((question) => (
            <Question
            key={question.id}
              questionId={question.id}
              questionType={question.type}
              title={question.title}
              subtitle={question.subtitle}
              updateQuestion={updateQuestion} // Pass update function
            />
          ))}
        </div>
  
        <div className="flex justify-center pb-6">
  
        <Dropdown
          inputTypes={inputTypes}
          triggerType="button"
          setQuestionType={(selectedType) => addQuestion(selectedType)} // Add question on selection
          />
          </div>
        
  
        </main>
  
      <footer className="py-3  border-gray-200 px-6 bg-secondary/90 backdrop-blur-sm flex items-center justify-between  border-t ">
          <Button disabled={questions.length <= 0} size={'sm'} variant={'outline'} className="flex font-semibold  items-center gap-1">
            <span className="shrink-0 mt-1">
            <Icon name="draft" fill={false} width={16} height={16}/>
            </span>
            <span>
  
            Save as Draft
            </span>
            </Button>
  
            <Button onClick={()=>{
              setShowPreview(true);
            }} size={"sm"} disabled={questions.length <= 0}>
              Publish form
            </Button>
      </footer>
      </div>
    );
  }

  
};

export default CreateJob;
