import { Fullpage, FullpageNavigation, FullpageSection, FullPageSections } from "@ap.cx/react-fullpage";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
import FourthBanner from "./FourthBanner";
import FiveBanner from "./FiveBanner";
import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

const MainPage = () => {
    return (
        <div>
            <MyHeader />
            <Fullpage transitionTiming={1500}>
                {
                    window.matchMedia("(min-width: 860px)").matches &&
                    <FullpageNavigation />
                }
                <FullPageSections>
                    <FullpageSection ><FirstBanner /></FullpageSection>
                    <FullpageSection><SecondBanner /></FullpageSection>
                    <FullpageSection><FourthBanner /></FullpageSection>
                    <FullpageSection><FiveBanner /></FullpageSection>
                </FullPageSections>
            </Fullpage>
            <MyFooter />
        </div>
    );
};

export default MainPage;