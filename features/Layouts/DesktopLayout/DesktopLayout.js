import Footer from "@/features/common/modules/Footer"
import Desktop from "@/features/common/modules/Navigation/components/Desktop"

function DesktopLayout({children}) {
  return (
    <>
    <Desktop/>
    {children}
    <Footer/>
    </>

  )
}

export default DesktopLayout