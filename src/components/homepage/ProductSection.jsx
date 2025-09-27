import background from '../../assets/backgroundProductSection.png'
import product from '../../assets/product.png'

export default function ProductSection (){
    return (
        <div className="productSection">
            <img src={background} id='psBackground' alt="psBackground" />
            <div className='psBoxes'>
                <div className='psBox'>
                    <div className='psBoxImg'>
                        <img src={product} alt="product" />
                    </div>
                    <div className='card'>
                        <h1>Black Moon</h1>
                        <p>Strong, bold, mysterious, dark and elegant.</p>
                        <div>
                            <h2>15,90$</h2>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className='psBox'>
                    <div className='psBoxImg'>
                        <img src={product} alt="product" />
                    </div>
                    <div className='card'>
                        <h1>Northern Lights</h1>
                        <p>Light roast, bright, fresh fruity aroma.</p>
                        <div>
                            <h2>14,90$</h2>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className='psBox'>
                    <div className='psBoxImg'>
                        <img src={product} alt="product" />
                    </div>
                    <div className='card'>
                        <h1>Sapphire Glow</h1>
                        <p>Rich balance, smooth finish, rare treasure.</p>
                        <div>
                            <h2>16,50$</h2>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}