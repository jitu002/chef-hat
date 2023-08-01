import "./winestyles.css";
import vineyard from "../Resources/wine/vineyard.png" 
import beef from "../Resources/wine/beef.png"    
import chops from "../Resources/wine/chops.png"
import potato from "../Resources/wine/potato.png"
import sauce from "../Resources/wine/sauce.png"


import { Image, Center } from "@chakra-ui/react";
export const Wine=()=>{
    return(
        <div>
            <div className="discover">
                <div className="discover-text">
                    <h1>
                        Discover
                        <br />
                        dinnertime pairings
                    </h1>
                    <h2>
                        (and get all juicy details)
                    </h2>
                    <button className="btn" onClick={()=>{
                        window.location="http://localhost:3001/WineMenu"
                    }}>
                        Get Started
                    </button>
                </div>
            </div>
                <div className="how">
                    <div className="how-text">
                        <h2>
                            How It Works
                        </h2>
                    </div>
                    <div className="incredible">
                        <Center>
                        <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrgOyo6frZQXMrwB64-vA5R2GhBCRJcFzhX8zuwxcdnkjVIjYq'
                        alt='Dan Abramov'
                        />
                        </Center>
                        <p className="heading">
                            <b>INCREDIBLE WINES</b>
                        </p>
                        <p className="content">
                            Get exclusive access to <br />delicious wines from <br />renowned winemakers.
                        </p>
                    </div>
                    <div className="monthly">
                        <Center>
                        <Image
                        borderRadius='full'
                        boxSize='150px'
                        src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQlktxpvSAXHFf5xcrnydRphKyJWZ3TLKl6puIKI-hxOThEsa7w'
                        alt='Dan Abramov'
                        />
                        </Center>
                        <p className="heading">
                            <b>MONTHLY DELIVERY</b>
                        </p>
                        <p className="content">
                            Select the wines you love. <br />No commitment. Skipping <br />or canceling is easy.
                        </p>
                    </div>
                    <div className="sized">
                        <Center>
                            <Image
                            borderRadius='full'
                            boxSize='150px'
                            src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRByzEfL6eMXX_ft4zsrPIGnLV8tGvOKsmQjBVNji_pxISscI-A'
                            alt='Wine glasses'
                            />
                        </Center>
                        <p className="heading">
                            <b>SIZED FOR TWO</b>
                            
                        </p>
                        <p className="content">
                            Enjoy pairing-sized wines <br />(500ml), perfect for two <br />to share, or upgrade to <br />standard-sized bottles <br />(750ml).
                        </p>
                    </div>
                </div>
                <div className="inside">
                    <div className="insidepart">
                        <h2><b>Inside Your Monthly Delivery</b></h2>
                        <ul>
                            <li>
                                6 x 500 mL wines or upgrade to standard-sized 750 mL bottles!
                            </li>
                            <li>
                                Select all reds, all whites, or mix and match your favorites!
                            </li>
                            <li>
                                pWe'll include tasting notes, pairing tips, plus stories behind the wines.
                            </li>
                        </ul>
                        <h3>
                            Starting at $11 per bottle
                        </h3>
                        <h4>
                            $75.99/month, incl. shipping*
                        </h4>
                        <h5>
                            *tax applied at checkout
                        </h5>
                        <button className="btn"  onClick={()=>{
                        window.location="http://localhost:3001/WineMenu"
                    }}>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className="vineyard">
        <h2>
            <b>
                From Our Vineyard to Your <br />Doorstep
            </b>
        </h2>
        <p>
            <p>By cutting out the middleman, we’re able to offer you high-quality wines at great <br />prices.</p>
        </p>
        <img className="pic imgeffect" src={vineyard} alt="wine cycle" />
    </div>
    <div className="favourites">
        <h2>
            <b>
                Discover Your <br />
                Favorites
            </b>
        </h2>
        <p>
            Don’t know your Pinot Noir from your <br />Pinotage? Our wines come with tasting <br />notes, flavor profiles, and the story behind <br />the bottle to give you the confidence to <br />select the right wine for any occasion – <br />and inspire a lifelong love of wine.
        </p>
    </div>
    <div className="elevate">
        <div className="elev-text">
            <h2>
                Elevate Every Meal With
                <br />
                The Perfect Pairing
            </h2>
            <p>
                Our wines are specially chosen to complement your Blue <br />Apron recipes, so all you have to do is uncork, pour and enjoy.
            </p>
            <h6>
                hiii
            </h6>

        </div>
        <div className="elev-bottle">
            <div className="beef">
                <img className="pics imgeffect" src={beef} alt="beef" />
                <h5>
                    Calabrian Beef & Gnocchi
                </h5>
                <p className="about">
                    Complement the richness of this <br /> hearty beef gnocchi dish with a <br /> warming, spicy grenache.

                </p>

            </div>
            <div className="chops">
                <img className="pics imgeffect" src={chops} alt="chops" />
                <h5>
                    Hoisin-Glazed Pork Chops
                </h5>
                <p className="about">
                    Amplify the umami-rich sweetness of <br /> the soy glaze with a fruit-forward red.
                </p>
            </div>
            <div className="potato">
                <img className="pics imgeffect" src={potato} alt="potato" />
                <h5>
                    Pork Chorizo, Potato & Fig Bake
                </h5>
                <p className="about">
                    Complement the peppery flavors of <br /> the chorizo with the notes of baking spices in this wine.
                </p>
            </div>
            <div className="sauce">
                <img className="pics imgeffect" src={sauce} alt="sauce" />
                <h5>
                    Sheet Pan Pork & Sour Cherry Sauce
                </h5>
                <p className="about">
                    Notes of stone fruit in this grenache <br /> bring out the cherry flavors in this sauce.
                </p>
            </div>
            </div>
            </div>
            <div className="glass">
                <h1>
                Let’s Raise  A Glass
                </h1>
                <button class="btn1" onClick={()=>{
                        window.location="http://localhost:3001/WineMenu"
                    }}>
                    <b>TRY OUR WINE</b> 
                </button>
            </div>
        </div>
    )
}   