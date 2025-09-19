"use client"

import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { ShoppingCart, Heart } from "lucide-react"
import { Lobster } from "next/font/google"
import { useEffect, useState } from "react"
import { BASE_FAKESTORE_API_URL } from "@/lib/base-url"
import axios from "axios"
import Sidebar from "./sidebar"
import { IProducts } from "@/lib/types/products.type"
import { useRouter } from "next/navigation"

const lobster = Lobster({ weight: "400", subsets: ["latin"] })

const Navbar = () => {
    const [productsData, setProductsData] = useState<{ category: string, description: string }[]>([])

    const router = useRouter()

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get<IProducts[]>(`${BASE_FAKESTORE_API_URL}/products`)

            const data = res.data?.map((product: IProducts) => (
                {
                    category: product.category, 
                    description: product.description
                }
            ))

            const uniqueData = Array.from(
                new Map(data.map((item) => [item.category, item])).values()
            )

            setProductsData(uniqueData ?? [])
        }

        fetchData()
    }, [])

    function handleRedirect(e: React.MouseEvent) {
        e.preventDefault()

        const target = e.currentTarget
        const category = target.children?.[0].innerHTML

        router.push(`/purchase/${category}`)
    }
    
    return (
        <div className="w-full">
            <div className="w-full md:max-w-6xl flex gap-4 mx-auto">
                <Link href="/" className="cursor-pointer ml-4 flex justify-center items-center">
                    <Image 
                        width={40}
                        height={40}
                        src="/logo.png"
                        alt="logo"
                    />
                    <h2 
                        className={`text-amber-600 text-2xl flex ${lobster.className}`}
                    >
                        &phi;Shop
                    </h2>
                </Link>

                <NavigationMenu className="hidden md:flex ml-20">
                    <NavigationMenuList className="space-x-3">
                        <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="/#why" className="text-stone-400 hover:text-amber-600">
                                        Why &phi;Shop
                                    </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuTrigger className="text-stone-400 hover:text-amber-600">
                                Category
                            </NavigationMenuTrigger>
                            <NavigationMenuContent 
                                className="bg-white min-w-[400px] max-h-[340px] overflow-y-scroll"
                                style={{ scrollbarWidth: 'none' }}
                            >
                                <ul className="grid grid-cols-2 gap-1 p-2 place-items-center">
                                    {productsData.map((product, index) => (
                                        <li 
                                            key={index} 
                                            className=" hover:bg-stone-100 cursor-pointer max-w-42 p-1 rounded-sm"
                                            onClick={handleRedirect}
                                        >
                                            <h2 className="font-semibold text-sm">{product.category}</h2>
                                            <Separator className="bg-stone-400 h-1 my-2"/>
                                            <p className="text-xs line-clamp-2 text-stone-600">{product.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/purchase" className="text-stone-400 hover:text-amber-600">
                                    Purchase
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden md:flex my-2 ml-auto mr-10 gap-5 justify-center items-center">
                    <div className="relative">
                        <Heart className="size-8" strokeWidth={0} fill="#d97706" />
                        <div className="absolute -top-1 -right-1 rounded-full p-2 w-3 h-3 flex justify-center items-center bg-red-500">
                            <p className=" text-xs text-white font-bold">+1</p>
                        </div>
                    </div>
                    <div className="bg-amber-600 rounded-full p-2 relative">
                        <ShoppingCart className="text-white"></ShoppingCart>
                        <div className="absolute -top-1 -right-1 rounded-full p-2 w-5 h-5 flex justify-center items-center bg-red-500">
                            <p className="text-xs text-white font-bold">+1</p>
                        </div>
                    </div>
                </div>
                
                <Sidebar />
            </div>
        </div>
    )
}

export default Navbar
