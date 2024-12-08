"use client";
import Dropdown from "@/components/custom-dropdown";
import Icon from "@/components/icon";
import Question from "@/components/question";
import QuestionPreview from "@/components/question-preview";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/ui/title";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from 'react-hot-toast';

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
  options?: string[] | undefined;
};

const inputTypes: InputType[] = [
  { label: "Short Answer", name: "shortAnswer", fill: false },
  { label: "Long Answer", name: "longAnswer", fill: false },
  { label: "Single Select", name: "singleSelect", fill: false },
  { label: "URL", name: "url", fill: false },
  { label: "Number", name: "number", fill: false },
];

const CreateJob = () => {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [jobTitle, setJobTitle] = useState<string>("");
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [isFormSaved, setIsFormSaved] = useState<boolean>(false);
  const jobTitleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (jobTitleRef.current) {
      jobTitleRef.current.focus(); // Focus the input when the component loads
    }
  }, []);

  useEffect(()=>{
    console.log(questions)
  },[questions])

  type AnswerData = {
    id: number;
    title: string;
    type: string;
    subtitle: string;
    value: string;
  };

  const validateQuestions = () => {
    for (const question of questions) {
      if (!question.title.trim()) return false; // Title is required
      if (
        question.type === "singleSelect" &&
        (!question.options || question.options.some((opt) => !opt.trim()))
      ) {
        return false; // Options must not be empty
      }
    }
    return true;
  };


  // Handle answer change by updating the answers state
  const handleAnswerChange = (answer: AnswerData) => {
    setAnswers((prevAnswers: any) => {
      return {
        ...prevAnswers,
        [answer.id]: answer, // Update or add the answer for the question id
      };
    });
  };

  // Validation for answers
const validateAnswers = () => {
  for (const question of questions) {
    const answer = answers[question.id];
    if (!answer || !answer.value.trim()) {
      return false; // Answer is required and cannot be empty
    }
  }
  return true;
};


  useEffect(() => {
    console.log("Answers updated:", answers);
  }, [answers]);

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

  // Calculate the completion percentage
  const calculateCompletionPercentage = () => {
    const totalQuestions = questions.length;
  
    if (totalQuestions === 0) return 0;
  
    // Count only the questions with valid (non-empty) answers
    const answeredQuestions = questions.filter(
      (question) => answers[question.id] && answers[question.id].value.trim() !== ""
    ).length;
  
    return (answeredQuestions / totalQuestions) * 100;
  };

  const completionPercentage = calculateCompletionPercentage();

  if (showPreview) {
    return (
      <div className="flex flex-col justify-between border-x ">
        <header className="py-3 px-6 flex items-center justify-between border-b sticky top-0 z-10 backdrop-blur-sm">
          <Title>{jobTitle || "Preview"}</Title>
          <div className="flex flex-col text-gray-1k text-right gap-2 text-sm">
            <span>Form completeness — {Math.round(completionPercentage)}%</span>
            <div className="h-1 w-[240px] bg-gray-200 rounded">
              {/* dynamic form completion bar */}
              <div
                className="h-1 bg-green-300 rounded transition-all duration-500 ease-in-out"
                style={{ width: `${completionPercentage}%` }}
              ></div>
            </div>
          </div>
        </header>
        <main className="space-y-4 flex flex-col  min-h-screen">
          <div className="space-y-4 my-6 flex justify-center flex-col items-center">
            {/* Render the questions in a preview mode */}
            {questions.map((question) => (
              <QuestionPreview
                key={question.id}
                {...question}
                onChange={handleAnswerChange}
              />
            ))}
          </div>
          <div className="flex justify-end px-4">

          <Button onClick={()=>{
            if (validateAnswers()) {
              setIsFormSaved(true);
              setShowPreview(false);
              toast.success("Applied Successfully. All the best!");
            } else {
              toast.error("Please answer all the questions and ensure no field is empty.");
            }
          }} className="w-max ml-auto" size={"sm"}>
            Submit
          </Button>
            </div>
        </main>
      </div>
    );
  }else if(isFormSaved){
    return(<>
    <div className="flex flex-col justify-between border-x ">
    <header className="py-3 px-6 flex items-center justify-between border-b sticky top-0 z-10 backdrop-blur-sm">
        <Title>Application Submitted</Title>
    </header>
    <main className="space-y-4 flex flex-col p-6 min-h-screen text-center items-center">

    <svg width="80" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="40.5" cy="40" r="32" className="animate-pulse" fill="#E2F6EA"></circle><path d="M30.9299 28.9494C36.4231 24.1921 44.5769 24.1921 50.0701 28.9494C52.5499 31.0969 54.2352 34.0161 54.8552 37.2373C56.2285 44.3733 52.1516 51.4346 45.2851 53.8133C42.1854 54.887 38.8146 54.887 35.7149 53.8133C28.8484 51.4346 24.7715 44.3733 26.1448 37.2373C26.7648 34.0161 28.4502 31.0969 30.9299 28.9494Z" fill="#00AA45" stroke="#1E874B"></path><path d="M32.168 40.8334L37.168 45.8334L48.8346 34.1667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>

<p className="text-sm">
You have successfully applied for the {jobTitle} position. All the best!
</p>

      <Button href="/post-job" className="bg-gray-1k text-gray-00 hover:bg-gray-1k/90 border-gray-700" size={'sm'}>Explore more</Button>

      </main>  
    </div>
    </>)
  } else {
    return (
      <div className="flex flex-col justify-between border-x ">
        <header className="py-3 px-6 flex items-center space-x-2 justify-between border-b sticky top-0 z-10 backdrop-blur-sm ">
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

          <Button
            size={"sm"}
            onClick={() => {
              if (validateQuestions()) {
                setShowPreview(true);
              } else {
                toast.error("Please ensure all questions have titles and options (if applicable).");
              }
            }}
            variant={"outline"}
            className="shadow-xl font-semibold"
            disabled={questions.length <= 0}
          >
            <span>Preview</span>
            <ArrowUpRight size={16} />
          </Button>
        </header>

        <main className="space-y-4 flex flex-col min-h-screen ">
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
              setQuestionType={(selectedType) =>
                addQuestion(selectedType)
              } // Add question on selection
            />
          </div>
        </main>

        <footer className="py-3 border-gray-200 px-6 bg-secondary/90 backdrop-blur-sm flex items-center justify-between border-t ">
          <Button
            disabled={questions.length <= 0}
            size={"sm"}
            variant={"outline"}
            className="flex font-semibold items-center gap-1"
          >
            <span className="shrink-0 mt-1">
              <Icon name="draft" fill={false} width={16} height={16} />
            </span>
            <span>Save as Draft</span>
          </Button>

          <Button
            onClick={() => {
              if(jobTitle.trim() === ""){
                toast.error("Please add a title to publish your form");
                return;
              }
              
              if (validateQuestions()) {
                setShowPreview(true);
              } else {
                toast.error("Please ensure all questions have titles and options (if applicable).");
              }
            }}
            size={"sm"}
            disabled={questions.length <= 0}
          >
            Publish form
          </Button>
        </footer>
      </div>
    );
  }
};

export default CreateJob;
