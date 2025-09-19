"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FilterCategoryProps } from "@/lib/types/purchase.type"


const FilterCategory = ({ categories }: FilterCategoryProps) => {
    const router = useRouter()

    const params = useParams()
    const currentCategory = params.category ? decodeURIComponent(params.category as string) : ""

    function handleFilterCategory(e: React.MouseEvent<HTMLLIElement>) {
        e.preventDefault() 

        const category = e.currentTarget.innerText
        
        if (category === "All") {
            router.push(`/purchase`)
        } else {
            router.push(`/purchase/${category}`)
        }
    }

    return (
        <>
            <Button 
                className="bg-blue-950 text-white cursor-pointer"
                // onClick={() => setIsDescending(!isDescending) }
            >
                <h2>Sorted</h2>
                {/* <Funnel fill={isDescending ? "white" : "none"}/> */}
            </Button>
            
            <ul className="w-fit mx-auto grid grid-cols-3 md:grid-cols-5 gap-3 text-xs justify-center items-center">
                <li 
                    key={-1}
                    className={`
                        rounded-md w-20 p-2 text-center cursor-pointer
                        ${!currentCategory ? "bg-blue-900 text-white" : "bg-slate-100"}
                    `}
                    onClick={handleFilterCategory}
                >
                    All
                </li>
                {(categories ?? []).map((category, index) => (
                    <li 
                    key={index}
                    className={`
                        rounded-md w-20 p-2 text-center cursor-pointer bg-blue-900
                        ${currentCategory === category ? "bg-blue-900 text-white" : "bg-slate-100"}
                        `}
                        onClick={handleFilterCategory}
                        >
                        {category}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FilterCategory
