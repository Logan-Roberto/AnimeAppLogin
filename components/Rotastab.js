
import{createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import{MaterialCommunityIcons} from "@expo/vector-icons";

import Baki from "./Baki"
import Home from "./home"
import HxH from "./HxH"

const Tab = createBottomTabNavigator();

export default function Rotastab(){
  return(
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>

      <Tab.Screen name="Baki" component={Baki} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="altimeter" color={'#cc0000'} size={35}/>}}/>
      <Tab.Screen name="Home" component={Home} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="altimeter" color={'#cc0000'} size={35}/>}}/>
      <Tab.Screen name="Hunter X Hunter" component={HxH} options={{tabBarIcon:({color,size})=><MaterialCommunityIcons name="altimeter" color={'#cc0000'} size={35}/>}}/>

    </Tab.Navigator>
  );
}

