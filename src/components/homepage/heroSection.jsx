import cupOfCoffee from '../../assets/CupOfCofee.png'
import backgroundImg from '../../assets/backgroundImg1.png'
export default function HeroSection () {
    return (
        <div className="heroSection">
            <div className="cta">
                <div className="ctaText">
                    <h1>Every morning deserves a perfect cup awaken your senses with our freshly roasted coffee. </h1>
                    <button>Taste The Magic</button>
                </div>
                <div>
                    <img id='cupofcoffee' src={cupOfCoffee} alt="cupofcoffee" />
                </div>
            </div>
        </div>
    )
}