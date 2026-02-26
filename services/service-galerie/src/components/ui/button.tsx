import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-sans font-bold transition-all outline-none uppercase tracking-[0.2em] active:scale-[0.98] active:opacity-80 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-none shadow-none before:absolute before:right-0 before:top-0 before:h-full before:w-[60%] before:border-r before:border-t before:border-current before:transition-all before:duration-500 hover:before:w-full after:absolute after:bottom-0 after:left-0 after:h-[40%] after:w-[60%] after:border-b after:border-l after:border-current after:transition-all after:duration-500 hover:after:h-full hover:after:w-full px-8 md:px-12",
  {
    variants: {
      variant: {
        default: "text-foreground bg-transparent hover:text-primary dark:hover:text-primary before:border-current after:border-current",
        destructive: "text-destructive hover:text-destructive/80 bg-transparent before:border-destructive after:border-destructive",
        outline: "text-foreground hover:text-primary bg-transparent before:border-current after:border-current",
        secondary: "text-secondary-foreground hover:text-foreground bg-transparent before:border-current after:border-current",
        ghost: "text-foreground hover:text-primary bg-transparent before:border-current after:border-current",
        link: "text-primary underline-offset-4 hover:underline before:hidden after:hidden rounded-none",
      },
      size: {
        default: "h-14 py-4 min-w-[200px] md:min-w-[240px]",
        xs: "h-8 gap-1 px-6 text-[10px] tracking-[0.1em]",
        sm: "h-10 gap-1.5 px-6 md:px-8",
        lg: "h-16 px-10 md:px-14 text-sm md:text-base",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
