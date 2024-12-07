import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const titleVariants = cva("text-[16px] leading-22 font-semibold text-gray-1k",{
  variants: {
    variant: {
      default: "text-gray-1k",
      gray: "text-gray-400",
    }
  }
})
  

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleVariants> {
  asChild?: boolean
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className,variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h2"
    return (
      <Comp
        className={cn(titleVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Title.displayName = "Title"

export { Title, titleVariants }
