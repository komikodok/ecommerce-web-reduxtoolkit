"use client"

import { Check, ChevronsUpDown, Funnel } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SortType } from "@/lib/types/sort.type"
import { useState } from "react"
import { useParams, useRouter, useSearchParams } from "next/navigation"

const sortBy: SortType[] = [
  {
    value: "sortByDate",
    label: "Date",
    method: () => console.log("test")
  },
  {
    value: "sortByReview",
    label: "Review",
    method: () => console.log("test")
  },
  {
    value: "sortByStar",
    label: "Star",
    method: () => console.log("test")
  },
]

export function SortButton() {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")

  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
      
  const currentCategory = params.category ? decodeURIComponent(params.category as string) : ""
  const isDescending = searchParams.get("sort") === "desc"
  

    function handleSortById() {
        const category = currentCategory ? `/${currentCategory}` : ""
        const sort = isDescending ? "" : "?sort=desc"

        router.push(`/purchase${category}${sort}`)
    }

  return (
    <div className="flex justify-between mx-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            role="combobox"
            aria-expanded={open}
            className="w-[200px] font-normal text-stone-800 border border-stone-300 justify-between"
          >
            {value
              ? sortBy.find((framework) => framework.value === value)?.label
              : "Sort By..."}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] outline-none border-none bg-white p-0">
          <Command>
            <CommandInput placeholder="Search sort type..." className="h-9" />
            <CommandList>
              <CommandEmpty>No sort type found.</CommandEmpty>
              <CommandGroup>
                {sortBy.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {framework.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      
      <Button 
          className="bg-blue-950 text-white cursor-pointer"
          onClick={handleSortById}
      >
          <Funnel fill={searchParams.get("sort") ? "white" : "none"}/>
      </Button>
    </div>
  )
}
