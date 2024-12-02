import Heading from "@/components/Sweepstake/Heading";
import TitleJumbotron from "@/components/Sweepstake/TitleJumbotron";
import { GridCard, GridCardProps } from "@/components/Sweepstake/GridCard";
import {FAQ, questionProps} from "@/components/FAQ";
import {HalfBanner} from "@/components/Sweepstake/HalfBanner";
import {FooterCustom} from "@/components/FooterCustom";
const loremIpsum : string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in quis aut a' +
        'tque, sequi consequatur sed odio. Ex atque vitae praesentium culpa';


const data_placeholder_faq : questionProps[] = [
    {
        question: "Who are we ?",
        answer: "We are leading an innovative casino, " + loremIpsum
    }, {
        question: "Are we licensed?",
        answer: "Yes we are licensed..., " + loremIpsum
    }, {
        question: "What type of casino game I can play?",
        answer: "Slots Baccarat Blackjack, " + loremIpsum
    }, {
        question: "How do i withdraw?",
        answer: "Using our website..., " + loremIpsum
    }, {
        question: "Is Mzecna Onlince Casino Safe?",
        answer: "Yes , " + loremIpsum
    }
]
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

const GridCardVacationData : GridCardProps[] = [
    {
        title: "9D10N - Vacation in Bahamas",
        price: "1.75 $",
        image: "/GrandHyatt-Bahamas.jpg",
        days: "12",
        sold: "45"
    }, {
        title: "4D3N - Vacation in Bali",
        price: "3.25 $",
        image: "/Hotel-potatohead.webp",
        days: "3",
        sold: "23"
    }, {
        title: "13D12N - Italy",
        price: "1.75 $",
        image: "/italy-vacation.jpg",
        days: "1",
        sold: "95"
    },
    {
        title: "9D10N - Vacation in Bahamas",
        price: "1.75 $",
        image: "/GrandHyatt-Bahamas.jpg",
        days: "12",
        sold: "45"
    }, {
        title: "4D3N - Vacation in Bali",
        price: "3.25 $",
        image: "/Hotel-potatohead.webp",
        days: "3",
        sold: "23"
    }, {
        title: "13D12N - Italy",
        price: "1.75 $",
        image: "/italy-vacation.jpg",
        days: "1",
        sold: "95"
    },
    {
        title: "9D10N - Vacation in Bahamas",
        price: "1.75 $",
        image: "/GrandHyatt-Bahamas.jpg",
        days: "12",
        sold: "45"
    }, {
        title: "4D3N - Vacation in Bali",
        price: "3.25 $",
        image: "/Hotel-potatohead.webp",
        days: "3",
        sold: "23"
    }, {
        title: "13D12N - Italy",
        price: "1.75 $",
        image: "/italy-vacation.jpg",
        days: "1",
        sold: "95"
    }
]
export default async function Home() {


   

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Heading title={"SweepstakePlatform"} isAuthenticated={false} email={null} name={null}></Heading>
            </div>
            <TitleJumbotron></TitleJumbotron>
            <GridCard bgColor="white" titleColor="baseColor" type="CarCard" data={GridCardCarData}></GridCard>
            <HalfBanner></HalfBanner>
            <GridCard bgColor="baseColor" titleColor="white" bodytext="Win Your Dream Getaway!" type="VacationCard" data={GridCardVacationData}></GridCard>
            <FAQ questions={data_placeholder_faq}></FAQ>
            <FooterCustom bgColor="baseColor" titleColor="white"></FooterCustom>

        </div>

    );
}
