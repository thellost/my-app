
import Heading from "@/components/Heading";
import { FooterCustom } from "@/components/FooterCustom";
const url_gof: string = "https://demogamesfree.pragmaticplay.net/gs2c/html5Game.do?extGame=1&symbol=vs20olympgate&gname=Gates%20of%20Olympus&jurisdictionID=99&lobbyUrl=https%3A%2F%2Fwww.pragmaticplay.com&mgckey=stylename@generic~SESSION@cf51c888-5796-46b8-8075-34546d21aabc";


export default function Games() {
  return (
    <div>
      <div className="sticky top-0 z-50">
      <Heading title={"Mzeca Casino."} isAuthenticated={null} email={null} name={null} displayMoney={true}></Heading>
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
