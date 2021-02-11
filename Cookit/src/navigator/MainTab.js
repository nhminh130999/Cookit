import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../containers/LoginScreen';
import HomeScreen from '../containers/HomeScreen';
import CategoriesScreen from '../containers/CategoriesScreen';
import CategoryScreen from '../containers/CategoryScreen';
import FavoriteScreen from '../containers/FavoriteScreen';
import ShoppingScreen from '../containers/ShoppingScreen';
import InputRecipeScreen from '../containers/InputRecipeScreen';
import AccountScreen from '../containers/Account';
import MyRecipe from '../containers/MyRecipe';
import { Icon } from 'react-native-elements';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

const CategoryStack = createStackNavigator({
    CategoriesScreen: CategoriesScreen,
    CategoryScreen: CategoryScreen,
}, {
    initialRouteName: 'CategoriesScreen',
    headerMode: 'none',
})

const ShoppingStack = createStackNavigator({
    ShoppingScreen: CategoriesScreen,
}, {
    initialRouteName: 'ShoppingScreen',
    headerMode: 'none'
})

const AccountStack = createStackNavigator({
    AccountScreen: AccountScreen,
    MyRecipeScreen: MyRecipe,
}, {
    initialRouteName: 'AccountScreen',
    headerMode: 'none'
})

const HomeStack = createStackNavigator({
    HomeScreen: HomeScreen,
    InputRecipeScreen: InputRecipeScreen,
}, {
    initialRouteName: 'HomeScreen',
    headerMode: 'none'
})

const Category = createAppContainer(CategoryStack)
const Account = createAppContainer(AccountStack)


const MainTab = createMaterialTopTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor }) =>
            <Icon name={'home'}  color={tintColor}  size={24} type="font-awesome" />,
        }
    },
    Categories: {
        screen: Category,
        navigationOptions: {
            title: 'Categories',
            tabBarIcon: ({ tintColor }) =>
                <Icon name={'list'}  color={tintColor}  size={24} type="font-awesome" />,
        },
    },
    Shopping: {
        screen: ShoppingStack,
        navigationOptions: {
            title: 'Shopping',
            tabBarIcon: ({ tintColor }) =>
            <Icon name={'shopping-cart'}  color={tintColor}  size={24} type="font-awesome" />,
        },
    },
    Favorites: {
        screen: FavoriteScreen,
        navigationOptions: {
            title: 'Favorites',
            tabBarIcon: ({ tintColor }) =>
            <Icon name={'heart'}  color={tintColor}  size={24} type="font-awesome" />,
        },
    },
    Account: {
        screen: Account,
        navigationOptions: {
            title: 'Account',
            tabBarIcon: ({ tintColor }) =>
            <Icon name={'user'}  color={tintColor}  size={24} type="font-awesome" />,
        },
    }
}, {
    lazy: true,
    initialRouteName: 'Home',
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarOptions: {
        activeTintColor: '#FEADB9',
        inactiveTintColor: 'gray',
        indicatorStyle: {
            backgroundColor: '#fff',
            height: 2,
            top: 0,
        },
        style: {
            backgroundColor: '#ffffff',
            padding: 0,
        },
        tabStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 65,
        },
        showIcon: true,
        upperCaseLabel: false,
        labelStyle: {
        fontSize: 10,
        margin: 0,
        padding: 0,
        },
    },
})

export default createAppContainer(MainTab);