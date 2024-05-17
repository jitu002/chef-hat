import { Text,Divider, Center } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter,faPinterest } from '@fortawesome/free-brands-svg-icons';
import "./styles.css"


export const FootInfo=()=>{
    return(
        <div className="divider">
            <div className='icons'>
                <FontAwesomeIcon icon={faFacebook} size="1x" />
                <FontAwesomeIcon icon={faInstagram} size="1x" />
                <FontAwesomeIcon icon={faTwitter} size="1x" />
                <FontAwesomeIcon icon={faPinterest} size="1x" />
            </div>
            <Center height='50px'>
                <Divider orientation='vertical' />
            </Center>
            <div className='search'>
                <Text fontFamily="caveat"  fontSize={{lg:"4xl",md:"2xl",base:"xl"}}>
                    Discover What's Cooking
                </Text>
                <input type="email" placeholder='Enter your @ email' />
            </div>
                <Center height='50px'>
                    <Divider orientation='vertical' />
                </Center>
            <div className='search'>
                <Text  fontFamily="caveat"  fontSize={{lg:"4xl",md:"2xl",base:"xl"}}>
                    Taste the best
                </Text>
            </div>
        </div>
    )
}