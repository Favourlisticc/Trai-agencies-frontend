import MapComponent from "@/components/map/map"
import Navbar from "@/components/navbar"

export function Home() {
    return(
       <>
       <Navbar />
         <div>
          <MapComponent />
        </div>
       </>
    )


}
