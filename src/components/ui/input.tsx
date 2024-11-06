import * as React from "react"
import { cn } from "@/lib/utils"

// Define the interface for InputProps that extends the native input attributes
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  type = "text",  // Default to "text" if no type is provided
  ...props
}, ref) => {
  return (
    <input
      type={type}  // Ensures that type is always set
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}  // Spread the remaining props to the native <input>
    />
  )
})

// Ensure display name is set for better debugging and React DevTools
Input.displayName = "Input"

export { Input }
