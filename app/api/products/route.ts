import { BASE_FAKESTORE_API_URL } from "@/lib/base-url";
import { IProducts } from "@/lib/types/products.type";
import { NextResponse, NextRequest } from "next/server";
import { logger } from "@/lib/logger";


export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    try {
        const limit = searchParams.get("limit") || undefined
        const sort = searchParams.get("sort") || undefined

        const res = await fetch(`${BASE_FAKESTORE_API_URL}/products?limit=${limit}&sort=${sort}`, {
            method: "GET",
            next: {
                revalidate: 60
            }
        })

        const resData: IProducts[] = await res.json()

        if (!res.ok) {
            logger.error("Failed fetch data", resData)

            return NextResponse.json({ error: "Failed fetch data" }, { status: res.status })
        }
        
        return NextResponse.json(resData)
    } catch (err) {
        logger.error("Internal server error", err)
        return NextResponse.json({ error: err }, { status: 500 })
    }
}