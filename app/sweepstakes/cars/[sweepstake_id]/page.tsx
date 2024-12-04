import Heading from "@/components/Sweepstake/Heading";
import {FooterCustom} from "@/components/FooterCustom";
import ImageSlider from "@/components/Sweepstake/ImageSlider";
import Countdown from "@/components/Sweepstake/Countdown";
import { GridCard, GridCardProps } from "@/components/Sweepstake/GridCard";

const GridCardCarData : GridCardProps[] = [
    {
        title: "Challenger Hellcat",
        price: "1.75 $",
        image: "/hellcat.png",
        days: "12",
        sold: "45"
    }, {
        title: "Aventador SVJ",
        price: "3.25 $",
        image: "/aventador-svj.png",
        days: "3",
        sold: "23"
    }, {
        title: "Challenger Hellcat",
        price: "1.75 $",
        image: "/hellcat.png",
        days: "1",
        sold: "95"
    }
]

const image_list_bali = ["/cars/dodgeChallenger.png", "/cars/dodgeChallenger2.png", "/cars/dodgeChallenger3.png", "/cars/dodgeChallenger4.png", "/cars/dodgeChallenger.png", "/cars/dodgeChallenger2.png", "/cars/dodgeChallenger3.png", "/cars/dodgeChallenger4.png"]
export default async function Games({params} : {
    params: Promise < {
        sweepstake_id: string
    } >
}) {

    const sweepstake_id = (await params).sweepstake_id;
    console.log(sweepstake_id);
    return (
        <div className="bg-baseCardGray ">

            <div className="sticky overflow-visible top-0 z-50">
                <Heading title={"Sweepstake"} isAuthenticated={null} email={null} name={null}></Heading>
            </div>

            <div
                className="relative overflow-hidden bg-baseCardGray lg:overflow-visible text-gray-100 lg:py-5">
                <div className="px-6 mx-auto max-w-full lg:px-8">
                    <div
                        className="grid grid-cols-1 mx-auto gap-y-5 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:ml-11 lg:pl-4 ">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-orangeAttention">
                                    All-American Car
                                </h2>
                                <p
                                    className="mt-2 text-3xl  mb-2 font-bold tracking-tight text-gray-100 sm:text-4xl">
                                    2023 Dodge Challenger SRT®
                                </p>
                                <Countdown></Countdown>

                                <div className="flex items-center">

                                    <div
                                        className="py-1 px-4 text-sm rounded-full border  font-bold text-center shadow-xs border-orangeAttention bg-orangeAttention text-black w-fit">Live Draw</div>
                                    <div className="px-2 font-bold">
                                        25th December 2025, 10:00
                                    </div>
                                </div>
                                <p className="mt-6 text-lg leading-8 text-gray-400">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
                                    perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                                <dl
                                    className="max-w-xl mt-10 space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                                className="absolute w-5 h-5 text-orangeAttention left-1 top-1">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z"
                                                    clipRule="evenodd"></path>
                                            </svg >BORN POWERFUL.
                                        </dt>
                                        <dd className="inline">
                                        Leading from the front of the pack, the Dodge Challenger SRT® Super Stock flaunt the highest horsepower of any production car, coming in at a whopping 807 ponies.
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                                className="absolute w-5 h-5 text-indigo-600 left-1 top-1">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z"
                                                    clipRule="evenodd"></path>
                                            </svg >FIERCE FIVE-SEATER.
                                        </dt>
                                        <dd className="inline">
                                        With this much horsepower, everyone should come along for the ride. That’s why the Dodge Challenger offers Class-Exclusive five-passenger seating
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                                className="absolute w-5 h-5 text-indigo-600 left-1 top-1">
                                                <path
                                                    d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z"></path>
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                                                    clipRule="evenodd"></path>
                                            </svg >FLEX WITH FOUR.
                                        </dt>
                                        <dd className="inline">
                                        There’s no need to sacrifice power for versatility in the Dodge Challenger SXT, the world’s first and only muscle coupe with available all-wheel drive
                                        
                                        </dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-100">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                data-slot="icon"
                                                className="absolute w-5 h-5 text-indigo-600 left-1 top-1">
                                                <path
                                                    d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z"></path>
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z"
                                                    clipRule="evenodd"></path>
                                            </svg >KING OF THE TRACK.
                                        </dt>
                                        <dd className="inline">
                                        Staying true to our roots by displaying world-class performance and Dodge Brand muscle, the Challenger isn’t afraid to cross any line it stands in front of. Boasting incredible horsepower and speed, the 2023 Dodge Challenger Super stock is powered by a Supercharged 6.2L High-Output HEMI® V8 engine.
                                        </dd>
                                    </div>
                                </dl>
                                <div className=" py-4">Competition will close early if all entries are sold prior to end date. For terms and service <a href="#" className="underline">see here.</a></div>
                                <div className="grid grid-cols-1 gap-y-4 py-1">
                                   <div className="font-Inter font-bold text-4xl ">1.20 $</div>
                                    <button
                                        type='button'
                                        className='py-2.5 px-6 text-sm rounded-lg bg-transparent border border-white text-white cursor-pointer font-bold text-center shadow-xs  transition-all duration-500 hover:border-orangeAttention hover:bg-orangeAttention hover:text-black'>Enter Now</button>
                                </div>
                            </div>
                        </div>
                        <div
                            className="flex items-start justify-end lg:order-first lg:sticky lg:top-20 lg:self-start">
                            <div className="text-white w-full ">
                                <ImageSlider imgList={image_list_bali} bgColor="indigo-600"></ImageSlider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GridCard bgColor="baseColor" title="Related Offerings" titleColor="white" bodytext="Win Your Dream Getaway!" type="CarCard" data={GridCardCarData}></GridCard>
          

            <FooterCustom bgColor="baseColor" titleColor="white"></FooterCustom>

        </div>

    );
}
