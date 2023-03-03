import Footer from "@/features/common/modules/Footer"
import Mobile from "@/features/common/modules/Navigation/components/Mobile"

function MobileLayout({children}) {
  return (
    <>
    {children}
    <Mobile/>
    <Footer/>
    </>
  )
}

export default MobileLayout