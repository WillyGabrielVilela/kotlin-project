import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { AddBook } from "../screens/AddBook";
import { Profile } from "../screens/Profile";
import { BookDetails } from "../screens/BookDetails"; // Certifique-se de importar o componente BookDetails


type AppStackParamList = {
    home: undefined;
    addbook: undefined;
    profile: undefined;
    book: { bookId: string };
};
const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="addbook"
                component={AddBook}
            />
            <Screen
                name="profile"
                component={Profile}
            />
            <Screen
                name="book"
                component={BookDetails}
            />
        </Navigator>
    );
}
