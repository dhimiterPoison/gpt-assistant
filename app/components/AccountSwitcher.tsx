"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AccountSwitcherProps {
  isCollapsed: boolean
  account: {
    label: string
    email: string
    icon: React.ReactNode
  }
  actions: {
    id: number,
    label: string,
    icon: React.ReactNode,
  }[]
}

export function AccountSwitcher({
  isCollapsed,
  account,
  actions,
}: Readonly<AccountSwitcherProps>) {
  const [selectedAccount, setSelectedAccount] = React.useState<string>(
    account.email
  )

  return (
    <Select defaultValue={selectedAccount} onValueChange={setSelectedAccount}>
      <SelectTrigger
        className={cn(
          "flex items-center gap-2 [&>span]:line-clamp-1 [&>span]:flex [&>span]:w-full [&>span]:items-center [&>span]:gap-1 [&>span]:truncate [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0",
          isCollapsed &&
          "flex h-9 w-9 shrink-0 items-center justify-center p-0 [&>span]:w-auto [&>svg]:hidden"
        )}
        aria-label="Select account"
      >
        <SelectValue placeholder="Select an account">
          {account?.icon}
          <span className={cn("ml-2", isCollapsed && "hidden")}>
            {
              account?.label
            }
          </span>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="w-full">
        {actions.map((action) => (
          <SelectItem key={action.id} value={action.label}>
            <div className="flex items-center gap-3 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 [&_svg]:text-foreground">
              {action.icon}
              {action.label}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
