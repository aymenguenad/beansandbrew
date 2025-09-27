import HeroSection from "../components/homepage/heroSection"
import ProductSection from "../components/homepage/ProductSection"
import OurStory from "../components/homepage/ourStory"
import OurCoffeeShops from "../components/homepage/ourCoffeeShops"

export default function HomePage () {
    return (
        <div className="homePage">
            <HeroSection/>
            <ProductSection/>
            <OurStory />
            <OurCoffeeShops />
        </div>
    )
}