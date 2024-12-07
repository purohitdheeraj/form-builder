import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";


type InputType = {
  icon: string;
  label: string;
};

interface DropdownProps {
  inputTypes: InputType[];
}

const Dropdown = ({ inputTypes }:DropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Open</DropdownMenuTrigger>
      <DropdownMenuContent align='start' className='min-w-[300px] border-gray-200 shadow-xl rounded-[16px]'>
        <DropdownMenuLabel className='bg-gray-50 py-[10px] px-4 text-sm font-semibold text-gray-500 rounded-sm'>
          Input Types
        </DropdownMenuLabel>
        {inputTypes.map((item, index) => (
          <DropdownMenuItem key={index}>
            <Image src={item.icon} alt={`${item.label} Icon`} width={20} height={20} />
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


export default Dropdown;