import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Icon from "./icon";
import { ChevronDown, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

type InputType = {
  name: string;
  label?: string;
  fill?: boolean;
};

interface DropdownProps {
  inputTypes: InputType[];
  setQuestionType: (item: InputType) => void;
  triggerType: 'icon' | 'button';
  currentType?: InputType;
}

const Dropdown = ({ inputTypes,setQuestionType, triggerType = 'icon', currentType }: DropdownProps) => {
  // State to track the selected item
  const [selectedItem, setSelectedItem] = useState<InputType | null>(currentType || inputTypes[0]);

  const handleSelect = (item: InputType) => {
    setSelectedItem(()=>item); 
    setQuestionType(item); 
  };


  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-400 outline-none">
        {triggerType === 'icon' ? (<>
          <Icon
          name={selectedItem?.name || "shortAnswer"} // Default icon if no item is selected
          fill={selectedItem?.fill !== undefined ? selectedItem.fill : false}
          width={20}
          height={20}
        />
        <ChevronDown className="w-5 h-5" strokeWidth={1.5} />
        </>):(<>
        
            <div className="text-gray-1k font-semibold  border border-gray-200 bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0 shadow-sm h-9 rounded-md px-[14px] py-2">
            <Plus size={16} />
            Add Question
            </div>
        </>)}
        
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="min-w-[300px] border-gray-200 shadow-xl rounded-[16px]"
      >
        <DropdownMenuLabel className="bg-gray-50 py-[10px] px-4 text-sm font-semibold text-gray-500 rounded-sm">
          Input Types
        </DropdownMenuLabel>
        {inputTypes.map((item, index) => (
          <DropdownMenuItem
            className="shrink-0 flex items-center gap-2"
            key={index}
            onClick={() => handleSelect(item)}
          >
            <Icon name={item.name} fill={item.fill} width={20} height={20} />
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
