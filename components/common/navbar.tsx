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

const lobster = Lobster({ weight: "400", subsets: ["latin"] })

const Navbar = ({onScroll}: {onScroll: () => void}) => {
  return (
    <div className="w-full">
        <div className="w-full md:max-w-6xl flex gap-4 mx-auto">
            <Link href="/" className="cursor-pointer flex justify-center items-center">
                <Image 
                    width={60}
                    height={60}
                    src="/logo.png"
                    alt="logo"
                />
                <h2 
                    className={`text-white text-2xl hidden md:flex ${lobster.className}`}
                >
                    &phi;Shop
                </h2>
            </Link>

            <NavigationMenu className="hidden md:flex ml-20">
                <NavigationMenuList className="space-x-3">
                    <NavigationMenuItem>
                            <div onClick={onScroll} className="cursor-pointer font-medium text-sm text-stone-400 hover:text-amber-600">
                                Why &phi;Shop
                            </div>
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
                                <li className="line-clamp-3 hover:bg-stone-100 p-1 rounded-sm">
                                    <h2 className="font-semibold text-sm">Category 1</h2>
                                    <Separator className="bg-stone-400 h-1 my-2"/>
                                    <p className="text-xs text-stone-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae ipsam doloremque? Libero, placeat error? Porro expedita quibusdam explicabo blanditiis sapiente, accusantium voluptatibus consequatur numquam asperiores omnis maxime, amet a!</p>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <Link href="/" className="text-stone-400 hover:text-amber-600">
                                Purchase
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="ml-auto mr-4 md:mr-10 flex gap-5 justify-center items-center">
                <div className="relative">
                    <Heart className="size-8" fill="#d97706" />
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
        </div>
    </div>
  )
}

export default Navbar
