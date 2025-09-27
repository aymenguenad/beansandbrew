import myCoffeeShop from '../../assets/coffee-shop-1569716_1280.jpg'

export default function OurCoffeeShops () {
    return (
        <div className="ourCoffeeShops">
            <img id='myCoffeeShop' src={myCoffeeShop} alt="ourCoffeeShops" />
            <div className='coffeeShopInfos'>
                <div>
                    <h1>Come Visit Us</h1>
                    <p>Step into the heart of our coffee shop, where the aroma of freshly brewed coffee meets a welcoming atmosphere. Whether you’re looking for a quiet corner to work, a cozy spot to catch up with friends, or just your daily caffeine fix, our doors are always open for you. Come enjoy the perfect cup, crafted with care, and stay for the warmth of our community.</p>
                    <p>We’re located in the heart of the city, just a short walk from the main square.</p>
                </div>
                <div>
                    <h1>Working Hours</h1>
                    <p>We’re here to serve you every day of the week.</p>
                    <ul>
                        <li>Monday – Friday: 7:00 AM – 7:00 PM</li>
                        <li>Saturday: 8:00 AM – 6:00 PM</li>
                        <li>Sunday: 8:00 AM – 4:00 PM</li>
                    </ul>
                    <p>Start your day with us, or wind down with a warm cup before heading home.</p>
                    <p>📍 123 Brew Street, Downtown, YourCity</p>
                </div>
            </div>
        </div>
    )
}