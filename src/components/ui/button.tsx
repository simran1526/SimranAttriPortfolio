import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-cyber",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-red",
        outline:
          "border border-matrix-green/50 bg-background/10 hover:bg-matrix-green/10 hover:border-matrix-green text-matrix-green hover:shadow-cyber",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-matrix-green/10 hover:text-matrix-green",
        link: "text-matrix-green underline-offset-4 hover:underline hover:text-neon-cyan",
        hero: "bg-gradient-to-r from-matrix-green via-neon-cyan to-matrix-green bg-size-200 bg-pos-0 text-black font-bold hover:bg-pos-100 shadow-cyber hover:shadow-neon transition-all duration-500 hover:scale-105 animate-glow-pulse",
        cyber: "bg-transparent border-2 border-matrix-green text-matrix-green hover:bg-matrix-green/20 hover:text-hacker-white transition-all duration-300 hover:shadow-cyber hover:animate-neon-flicker",
        "cyber-purple": "bg-transparent border-2 border-electric-blue text-electric-blue hover:bg-electric-blue/20 hover:text-hacker-white transition-all duration-300 hover:shadow-neon",
        matrix: "bg-black/80 border border-matrix-green/50 text-matrix-green hover:bg-matrix-green/10 hover:border-matrix-green transition-all duration-300 shadow-cyber",
        danger: "bg-gradient-to-r from-danger-red to-warning-orange text-black font-bold hover:from-warning-orange hover:to-danger-red shadow-red hover:scale-105 transition-all duration-300",
        terminal: "bg-black/90 border border-matrix-green text-matrix-green font-mono hover:bg-matrix-green/10 transition-all duration-300 hover:shadow-cyber"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
