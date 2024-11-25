import Heading from "@/components/Sweepstake/Heading";
import {Banner} from "@/components/Sweepstake/Banner";
import TitleJumbotron from "@/components/Sweepstake/TitleJumbotron";
import CarouselCustom from "@/components/Carousel/CarouselCustom";
import {CarouselCardProps} from "@/components/Carousel/CarouselCustom";
import {FAQ, questionProps} from "@/components/FAQ";
import {FooterCustom} from "@/components/FooterCustom";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { customerTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/db";
const loremIpsum : string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in quis aut a' +
        'tque, sequi consequatur sed odio. Ex atque vitae praesentium culpa';

        
const data_placeholder_carousel_big : CarouselCardProps[] = [
    {
        title: "Blackjack",
        bodytext: loremIpsum,
        image_url: "[url('../public/blackjack.png')]",
        playing: "1"
    }, {
        title: "Baccarat",
        bodytext: loremIpsum,
        image_url: "[url('../public/baccarat.jpg')]",
        playing: "1"
    }, {
        title: "Blackjack",
        bodytext: loremIpsum,
        image_url: "[url('../public/blackjack.png')]",
        playing: "1"
    }
];

const data_placeholder_carousel_small : CarouselCardProps[] = [
    {
        title: "Gate of Olympus",
        bodytext: loremIpsum,
        image_url: "/SlotGo.jpg",
        playing: "258"
    }, {
        title: "Sweet Bonanza",
        bodytext: loremIpsum,
        image_url: "/SweetBonanza.jpg",
        playing: "204"
    }, {
        title: "Sugar Rush",
        bodytext: loremIpsum,
        image_url: "/SugarRush.jpg",
        playing: "322"
    }, {
        title: "Gate of Olympus",
        bodytext: loremIpsum,
        image_url: "/SlotGo.jpg",
        playing: "258"
    }, {
        title: "Sweet Bonanza",
        bodytext: loremIpsum,
        image_url: "/SweetBonanza.jpg",
        playing: "204"
    }, {
        title: "Sugar Rush",
        bodytext: loremIpsum,
        image_url: "/SugarRush.jpg",
        playing: "322"
    }
];

const data_placeholder_carousel_small_2 : CarouselCardProps[] = [
    {
        title: "Poker",
        bodytext: loremIpsum,
        image_url: "/Poker.jpg",
        playing: "571"
    }, {
        title: "Baccarat",
        bodytext: loremIpsum,
        image_url: "/baccarat.jpg",
        playing: "190"
    }, {
        title: "Roullete",
        bodytext: loremIpsum,
        image_url: "/roullete.jpg",
        playing: "447"
    }, {
        title: "Poker",
        bodytext: loremIpsum,
        image_url: "/Poker.jpg",
        playing: "571"
    }, {
        title: "Baccarat",
        bodytext: loremIpsum,
        image_url: "/baccarat.jpg",
        playing: "190"
    }, {
        title: "Roullete",
        bodytext: loremIpsum,
        image_url: "/roullete.jpg",
        playing: "447"
    }
];

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

export default async function Home() {


   

    return (
        <div>
            <div className="sticky top-0 z-50">
                <Heading title={"SweepstakePlatform"} isAuthenticated={false} email={null} name={null}></Heading>
            </div>

            <Banner></Banner>
            <TitleJumbotron></TitleJumbotron>
            <CarouselCustom
                title="Featured this month!"
                bodytext="Popular & Exciting Games !"
                bgColor="baseColor"
                data={data_placeholder_carousel_big}
                type="BigCard"></CarouselCustom>
            <CarouselCustom
                title="Slots"
                bodytext="Popular and High RTP Slots !"
                bgColor="white"
                infinite={true}
                data={data_placeholder_carousel_small}
                titleColor={"black"}
                bodytextColor={"black"}
                type="SmallCard"></CarouselCustom>
            <CarouselCustom
                title="Tables Game"
                bodytext="Classic Games"
                bgColor="baseColor"
                data={data_placeholder_carousel_small_2}
                infinite={true}
                type="SmallCard"></CarouselCustom>
            <FAQ questions={data_placeholder_faq}></FAQ>
            <FooterCustom bgColor="baseColor" titleColor="white"></FooterCustom>

        </div>

    );
}
