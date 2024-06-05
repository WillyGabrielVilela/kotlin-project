import { Image } from 'react-native';
import { Container, ImageLogo, Slogan, Title } from './styles';

import { Button } from '../../components/Button';
import backgroundImg from '../../assets/background.png'
import logoImg from '../../../assets/icon.png'
import googleImg from '../../assets/googlebutton.png'
import { Container as GoogleButton } from '../../components/Button/styles';
export function SignIn() {
    return (
        <Container source={backgroundImg}>
            <ImageLogo source={logoImg} />
            <Title>Pagina Trocada</Title>
            <Slogan>
                Faça login e troque experiências literárias com outras pessoas!
            </Slogan>
            <GoogleButton style={{backgroundColor: "transparent"}}>
                <Image source={googleImg}/>
            </GoogleButton>
        </Container>
    );
}


