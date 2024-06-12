import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';
import { Container } from './styles';
import RoundedButton  from '../../components/RoundedButton';

export function Home() {

  const { navigate } = useNavigation();

  function handleRegisterMoviment() {
    navigate('addbook')
  }

  return (
    <Container>
      <Header />
      <RoundedButton onPress={handleRegisterMoviment} />
    </Container>
  );
}