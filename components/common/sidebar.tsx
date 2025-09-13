"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"

import { 
    ShoppingCart, 
    Heart, 
    X, 
    CircleQuestionMark, 
    HandCoins ,
    ChartBarBig,
    AlignJustify,
} from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import Link from "next/link"
import axios from "axios"
import { BASE_API_URL } from "@/lib/base-api-url"


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [categories, setCategories] = useState<string[]>([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(`${BASE_API_URL}/products/categories`)
            const categoriesData = res.data ?? []

            setCategories(categoriesData)
        }

        fetchData()
    }, [])
    
    return (
        <>
            <Button 
                className="ml-auto my-2 mr-3 cursor-pointer md:hidden flex justify-center items-center"
                onClick={() => setIsOpen(true)}
            >
                <AlignJustify className="stroke-white size-5" />
            </Button>

            <div 
                className={`
                    overlay
                    fixed inset-0 bg-black/60 z-40
                    ${isOpen ? "block" : "hidden"}
                `}
                onClick={() => setIsOpen(false)} 
            />
            
            <div 
                className={`
                    fixed md:hidden w-60 h-screen bg-white z-50 transition-all duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                `}
            >
                <header className="relative shadow-sm h-20 flex flex-col justify-end">
                    <Button onClick={() => setIsOpen(false)} className="absolute top-0 right-0">
                        <X className="size-5" strokeWidth={2}/>
                    </Button>
                    <div className="flex justify-center items-center space-x-6">
                        <p className="flex gap-2 items-center text-sm rounded-md p-2">
                            <Heart className="size-4"/>
                            Wishlist
                        </p>
                        <p className="flex gap-2 items-center text-sm rounded-md p-2">
                            <ShoppingCart className="size-4"/>
                            Cart
                        </p>
                    </div>
                </header>

                <main className="p-3 bg-stone-50 w-full h-full overflow-y-scroll">
                    <div className="space-y-2">
                        <h2 className="text-sm text-stone-400">@menu</h2>
                        <div className="space-y-3">
                            <Link href="#why" className="flex gap-2 px-3 py-2 items-center text-sm">
                                <CircleQuestionMark className="size-4"/>
                                Why &phi;Shop
                            </Link>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className="flex items-center">
                                        <ChartBarBig className="size-4"/>
                                        Categories
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <ul className="px-6 overflow-y-scroll max-h-28">
                                            {categories.map((category) => (
                                                <li key={category} className="py-1">
                                                    <Link href="/" className="text-sm">
                                                        {category}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Link href="/" className="flex gap-2 px-3 py-2 items-center text-sm">
                                <HandCoins className="size-4"/>
                                Purchase
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Sidebar
