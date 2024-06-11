import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator, BottomTabBarProps} from '@react-navigation/bottom-tabs';
import CustomTabBar from './components/CustomTabBar';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Feed from './pages/Feed';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import Upload from './pages/Upload';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const renderTabBar = (props: BottomTabBarProps) => <CustomTabBar {...props} />;

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Upload" component={Upload} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
export default Router;
