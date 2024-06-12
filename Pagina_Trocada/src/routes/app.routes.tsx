import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { AddBook } from "../screens/AddBook";
import { Profile } from "../screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
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
        </Navigator>
    )
}