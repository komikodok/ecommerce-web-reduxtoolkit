import { BASE_FAKESTORE_API_URL } from "@/lib/base-url";
import { IProducts } from "@/lib/types/products.type";
import axios from "axios";
import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";


export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    try {
        const limit = searchParams.get("limit") || undefined
        const sort = searchParams.get("sort") || undefined

        const res = await axios.get<IProducts[]>(`${BASE_FAKESTORE_API_URL}/products`, {
            params: {
                limit: limit,
                sort: sort
            }
        })

        if (res.status !== 200) {
            logger.error("Failed fetch data", res.data)

            return NextResponse.json({ error: "Failed fetch data" }, { status: res.status })
        }
        
        return NextResponse.json(res.data)
    } catch (err) {
        logger.error("Internal server error", err)
        return NextResponse.json({ error: err }, { status: 500 })
    }
}