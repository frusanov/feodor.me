import * as React from "react"

import { cn } from "@/lib/utils"

export interface MessageProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('message-wrapper flex gap-4 w-[512px] p-4 bg-white bg-opacity-90 rounded-2xl shadow-2xl', className)}
        {...props}
      >
        <div className="user aspect-square bg-slate-500 w-[64px] h-[64px] rounded-xl"></div>
        <div className="message text-wrap" ref={ref}>
          { children }
        </div>
      </div>
    )
  }
)
Message.displayName = "Message"

export { Message }
