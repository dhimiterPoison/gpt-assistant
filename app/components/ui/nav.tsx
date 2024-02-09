"use client"

import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/app/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/components/ui/tooltip"
import { useSelectedLayoutSegment } from 'next/navigation'

interface NavProps {
  className?: string,
  isCollapsed: boolean,
  title?: string,
  links: {
    title: string
    label?: string
    icon: LucideIcon
    variant: "ghost" | "link" | "default" | "destructive" | "outline" | "secondary",
    path: string,
    className?: string
  }[]
}

export function Nav({ className, links, isCollapsed, title }: Readonly<NavProps>) {

  const currentRoute = useSelectedLayoutSegment();

  return (
    <div
      data-collapsed={isCollapsed}
      className={cn('group flex flex-col py-4 data-[collapsed=true]:py-2')}
    >
      {title ? <h4 className="font-semibold text-sm px-4 pt-4 pb-2">
        {title}
      </h4> : null}
      <nav className={cn("grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2",
        className
      )}>
        {links.map((link, index) => {
          const isActive = link.path?.startsWith(`/${currentRoute}`);
          console.log('isActive', { isActive, pathLink: link.path, currentRoute })
          return isCollapsed ? (
            <Tooltip key={link.path} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.path}
                  is-active={isActive}
                  className={cn(
                    buttonVariants({ variant: link.variant, size: "icon" }),
                    "h-9 w-9",
                    "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white",
                    "[is-active]:bg-primary dark:text-white dark:hover:bg-primary dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                buttonVariants({ variant: link.variant, size: "sm" }),
                link.variant === "default" &&
                "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start",
                link.className
              )}
            >
              <link.icon className="mr-2 h-4 w-4 shrink-0" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                    "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
