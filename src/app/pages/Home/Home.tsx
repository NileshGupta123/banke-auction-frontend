import AboutSection from "../../../components/about/AboutSection";
import AuctionStatusSection from "../../../components/auctions/AuctionStatusSection";
import FeaturedAuctions from "../../../components/auctions/FeaturedAuctions";
import BlogSection from "../../../components/blog/BlogSection";
import CTASection from "../../../components/cta/CTASection";
import Hero from "../../../components/hero/Hero";
import MediaGallery from "../../../components/media/MediaGallery";
import LatestProperties from "../../../components/properties/LatestProperties";
import Testimonials from "../../../components/testimonials/Testimonials";


export default function Home() {
    return (
        <>
            <Hero />
            <AuctionStatusSection />
            <LatestProperties />
            <FeaturedAuctions />
            <AboutSection />
            <MediaGallery />
            <Testimonials />
            <BlogSection />
            <CTASection />
        </>
    );
}
