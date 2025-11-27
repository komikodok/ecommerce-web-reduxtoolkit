import Navbar from '@/components/common/navbar'

const PurchaseLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <Navbar></Navbar>

            {children}
        </div>
    )
}

export default PurchaseLayout
