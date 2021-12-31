import { SplashScreen } from "../../../screens/SplashScreen/SplashScreen";
import { BottomTabNavigation } from './../../bottom-tab/BottomTabNavigation';

const Screens = [
    {
        name: 'Splash',
        component: SplashScreen,
        headerShown: false
    },
    {
        name: 'BottomTabNavigation',
        component: BottomTabNavigation,
        headerShown: true
    }
]

export default Screens;