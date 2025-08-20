"use client"

import React, { createContext, useContext } from "react"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"

const DialogContext = createContext()

const Dialog = ({ children, open, onOpenChange }) => {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      {children}
      {open && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg">
            {children}
          </div>
        </div>
      )}
    </DialogContext.Provider>
  )
}

const DialogTrigger = ({ children, asChild, ...props }) => {
  const { onOpenChange } = useContext(DialogContext)

  return React.cloneElement(children, {
    ...props,
    onClick: () => onOpenChange(true),
  })
}

const DialogContent = ({ className, children, ...props }) => {
  const { onOpenChange } = useContext(DialogContext)

  return (
    <div className={cn("relative", className)} {...props}>
      <button
        className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
        onClick={() => onOpenChange(false)}
      >
        <X className="h-4 w-4" />
      </button>
      {children}
    </div>
  )
}

const DialogHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
)

const DialogTitle = ({ className, ...props }) => (
  <h3 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props} />
)

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle }
