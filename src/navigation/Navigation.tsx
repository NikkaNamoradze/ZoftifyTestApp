import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import React from 'react';
import { Platform } from 'react-native';
import { colors } from '../../assets/colors/colors';
import ContactsIcon from '../../assets/icons/tabBarIcon/Contacts';
import ExploreIcon from '../../assets/icons/tabBarIcon/ExploreIcon';
import InformationIcon from '../../assets/icons/tabBarIcon/InformationIcon';
import StadiumsIcon from '../../assets/icons/tabBarIcon/StadiumsIcon';
import ContactsScreen from '../screens/contacts/ContactsScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import HotelDetailsScreen from '../screens/hotelDetails/HotelDetailedScreen';
import InformationScreen from '../screens/information/InformationScreen';
import StadiumsScreen from '../screens/stadiums/StadiumsScreen';
import ZoftifyWebViewScreen from '../screens/zoftify/ZoftifyWebViewScreen';
import TabBarLabel from '../components/tabBarLabel/TabBarLabel';
import { AuthorizedStackParamList } from '../types/AuthorizedStackParamList';

const AuthorizedStackNavigator =
  createNativeStackNavigator<AuthorizedStackParamList>();
const TabBar = createBottomTabNavigator();

const ExploreStack = () => (
  <AuthorizedStackNavigator.Navigator
    screenOptions={getScreenOptions('Explore')}>
    <AuthorizedStackNavigator.Screen
      name="ExploreScreen"
      component={ExploreScreen}
    />
    <AuthorizedStackNavigator.Screen
      name="HotelDetailsScreen"
      component={HotelDetailsScreen}
    />
    <AuthorizedStackNavigator.Screen
      name="ZoftifyWebViewScreen"
      component={ZoftifyWebViewScreen}
      options={{presentation: 'modal', headerShown: false}}
    />
  </AuthorizedStackNavigator.Navigator>
);

const StadiumsStack = () => (
  <AuthorizedStackNavigator.Navigator
    screenOptions={getScreenOptions('Stadiums')}>
    <AuthorizedStackNavigator.Screen
      name="StadiumsScreen"
      component={StadiumsScreen}
    />
  </AuthorizedStackNavigator.Navigator>
);

const InformationStack = () => (
  <AuthorizedStackNavigator.Navigator
    screenOptions={getScreenOptions('Information')}>
    <AuthorizedStackNavigator.Screen
      name="InformationScreen"
      component={InformationScreen}
    />
  </AuthorizedStackNavigator.Navigator>
);

const ContactsStack = () => (
  <AuthorizedStackNavigator.Navigator
    screenOptions={getScreenOptions('Contacts')}>
    <AuthorizedStackNavigator.Screen
      name="ContactsScreen"
      component={ContactsScreen}
    />
  </AuthorizedStackNavigator.Navigator>
);

const getScreenOptions = (title: string): NativeStackNavigationOptions => ({
  headerShadowVisible: false,
  headerBackVisible: false,
  headerShown: false,
});

const Navigation = () => {
  return (
    <TabBar.Navigator
      screenOptions={({route}) => ({
        unmountOnBlur: true,
        headerShown: false,
        tabBarLabel: ({focused}) => (
          <TabBarLabel focused={focused} name={route.name} />
        ),
        tabBarHideOnKeyboard: Platform.OS === 'android',
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colors.grey[10],
        },
      })}>
      <TabBar.Screen
        name="Explore"
        component={ExploreStack}
        options={({route}) => ({
          tabBarIcon: ({focused}) => (
            <ExploreIcon
              color={focused ? colors.primary[120] : colors.grey[60]}
            />
          ),
          tabBarStyle: (route => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? '';
            if (routeName === 'HotelDetailsScreen') {
              return {display: 'none'};
            } else {
              return {
                borderTopWidth: 1,
                borderTopColor: colors.grey[10],
              };
            }
          })(route),
        })}
      />
      <TabBar.Screen
        name="Stadiums"
        component={StadiumsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <StadiumsIcon
              color={focused ? colors.primary[120] : colors.grey[60]}
            />
          ),
        }}
      />
      <TabBar.Screen
        name="Information"
        component={InformationStack}
        options={{
          tabBarIcon: ({focused}) => (
            <InformationIcon
              color={focused ? colors.primary[120] : colors.grey[60]}
            />
          ),
        }}
      />
      <TabBar.Screen
        name="Contacts"
        component={ContactsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <ContactsIcon
              color={focused ? colors.primary[120] : colors.grey[60]}
            />
          ),
        }}
      />
    </TabBar.Navigator>
  );
};

export default Navigation;
