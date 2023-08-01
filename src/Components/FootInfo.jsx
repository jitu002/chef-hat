import { Text,Divider, Center } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter,faPinterest } from '@fortawesome/free-brands-svg-icons';

export const FootInfo=()=>{
    return(
        <div className="divider">
            <div className='icons'>
                <FontAwesomeIcon icon={faFacebook} size='2xl' />
                <FontAwesomeIcon icon={faInstagram} size="2xl" />
                <FontAwesomeIcon icon={faTwitter} size="2xl" />
                <FontAwesomeIcon icon={faPinterest} size="2xl" />
            </div>
            <Center height='50px'>
                <Divider orientation='vertical' />
            </Center>
            <div className='search'>
                <Text  fontSize="2xl">
                    Discover What's Cooking
                </Text>
                <input type="email" placeholder='Enter your @ email' />
            </div>
                <Center height='50px'>
                    <Divider orientation='vertical' />
                </Center>
            <div className='search'>
                <Text  fontSize="3xl">
                    Taste the best
                </Text>
            </div>
        </div>
    )
}