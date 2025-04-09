
import Heading from "@/components/Heading";
import { FooterCustom } from "@/components/FooterCustom";
const url_gof: string = "https://demogamesfree.pragmaticplay.net/hub-demo/html5Game.do?extGame=1&symbol=vswayswildbrst&gname=Witch%20Heart%20Megaways&jurisdictionID=99&lobbyUrl=https%3A%2F%2Fclienthub.pragmaticplay.com%2Fslots%2Fgame-library%2F&mgckey=stylename@generic~SESSION@3d2acb54-2a74-48f7-b8c5-5533e28f9adc";


export default function Games() {
  return (
    <div>
      <div className="sticky top-0 z-50">
      <Heading title={"Mzeca Casino."} isAuthenticated={null} email={null} name={null} displayMoney={true}></Heading>
      </div>
      <div>
        
      </div>
      <div className=" bg-baseBackIcon grid place-items-center h-screen">
        <div className="px-5 py-5 h-5/6 w-full">
        <iframe width="100%" height="100%" src={url_gof}></iframe>
        </div>
      </div>
    
    
    <FooterCustom bgColor="baseColor" titleColor="white"></FooterCustom>

    
    </div>
    
  );
}
