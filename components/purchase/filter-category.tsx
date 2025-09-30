"use client"

import { useParams, useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FilterCategoryProps } from "@/lib/types/purchase.type"
import { useMemo } from "react"
import { Funnel } from "lucide-react"


const FilterCategory = ({ categories }: FilterCategoryProps) => {
    const router = useRouter()
    const params = useParams()
    const searchParams = useSearchParams()
    
    const currentCategory = params.category ? decodeURIComponent(params.category as string) : ""
    const isDescending = searchParams.get("sort") === "desc"
    
    const queryParams = useMemo(() => {
        return new URLSearchParams(searchParams)
    }, [searchParams])

    function handleSort() {
        const category = currentCategory ? `/${currentCategory}` : ""
        const sort = isDescending ? "" : "?sort=desc"

        router.push(`/purchase${category}${sort}`)

    }

    function handleFilterCategory(category: string) {

        if (category === "All") {
            router.push(`/purchase${queryParams.toString() ? `?${queryParams.toString()}` : ""}`)
        } else {
            router.push(`/purchase/${category}${queryParams.toString() ? `?${queryParams.toString()}` : ""}`)
        }
    }

    return (
        <>
            <Button 
                className="bg-blue-950 text-white cursor-pointer"
                onClick={handleSort}
            >
                <h2>Sorted</h2>
                <Funnel fill={searchParams.get("sort") ? "white" : "none"}/>
            </Button>
            
            <ul className="w-fit mx-auto grid grid-cols-3 md:grid-cols-5 gap-3 text-xs justify-center items-center">
                <li 
                    key={-1}
                    className={`
                        rounded-md w-20 p-2 text-center cursor-pointer
                        ${!currentCategory ? "bg-blue-900 text-white" : "bg-slate-100"}
                    `}
                    onClick={() => handleFilterCategory("All")}
                >
                    All
                </li>
                {(categories ?? []).map((cat, index) => (
                    <li 
                    key={index}
                    className={`
                        rounded-md w-20 p-2 text-center cursor-pointer bg-blue-900
                        ${currentCategory === cat ? "bg-blue-900 text-white" : "bg-slate-100"}
                        `}
                        onClick={() => handleFilterCategory(cat)}
                        >
                        {cat}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FilterCategory
