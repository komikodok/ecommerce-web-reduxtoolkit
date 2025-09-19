import { IProducts } from "./products.type"

type searchParams = {
    [key: string]: string | string[] | undefined
}

export type PurchasePageProps = {
    searchParams: searchParams
}

export type PurchaseCategoryPageProps = {
    params: {
        category: string
    }
    searchParams: searchParams
}

export type PurchaseContentProps = {
    categoryParam?: string
    searchParams?: searchParams
}

export type FilterCategoryProps = {
    isDescending?: boolean
    categories?: string[]
}

export type PurchaseListProductProps = {
    products: IProducts[]
}