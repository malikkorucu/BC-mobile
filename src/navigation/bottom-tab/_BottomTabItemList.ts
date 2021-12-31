import { AboutScreen } from '../../screens/About/AboutScreen';
import HomeStack from './../stacks/HomeStack/index';

export const BottomTabItemList = [
    {
        label: 'Home',
        icon: 'Car',
        component:HomeStack
    },
    {
        label: 'About',
        icon: 'Car',
        component:AboutScreen
    },
]