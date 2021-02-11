import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import styles from './styles';
import { Button } from "native-base";
import { Icon } from 'react-native-elements'
import images from '../../Themes/Images'
import { NavigationActions } from 'react-navigation';

const ingredients = [
    {
        amount: 100,
        unit: 'gr',
        name: 'butter'
    }, {
        amount: 2,
        unit: 'teaspoons',
        name: 'sugar'
    }, {
        amount: 1,
        unit: 'cup',
        name: 'lemon juice concentrate'
    }, {
        amount: 7,
        unit: 'ounce',
        name: 'rotini pasta package other pastas, cooked and drained chicken flavor instal bouillon'
    }
]

const steps = [
    'Combine mayonnaise, lemon juice, sugar and bouillon for the dressing',
    'Combine rotini, bacon, tomato, and green onion',
    'Combine all ingredients with lettuce',
]


export default class RecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1,
            like: false,
        }
        this.updateAmount = this.updateAmount.bind(this)

    }

    updateAmount(index) {
        const { amount } = this.state;
        if (amount + index >= 1)
            this.setState(state => ({amount: state.amount + index}))
    }

    render() {
        const time = '30 minutes';
        const category = 'SALAD';
        const name = 'Pasta Salad';
        const level = 'Easy';
        const amount = 3;
        const listIngredients = ingredients;
        const listSteps = steps;
        const { navigation } = this.props;
        const routeName = navigation.getParam('route');

        return (
                <View style={styles.container}>
                    <ImageBackground source={images.breakfast} style={{width: '100%', height: 180}}>
                        <View style={styles.darker}>
                            <View style={styles.header}>
                                <View style={styles.left}>
                                    <Button
                                            transparent
                                            onPress={() => navigation.navigate(routeName)}>
                                        <Icon name="arrow-back" color='#fff' size={32} type="material" />
                                    </Button>
                                </View>
                                <View style={styles.right}>
                                    <Button
                                        transparent
                                        onPress={() => this.setState(state => ({like: !state.like}))}>
                                        <Icon name="heart" color={this.state.like ? '#FEADB9' : '#fff'} size={32} type="font-awesome" />
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ScrollView contentContainerStyle={styles.body}
                                showsVerticalScrollIndicator={false}>
                        <Text style={styles.category}>{category}</Text>
                        <Text style={styles.name}>{name}</Text>
                        <View style={styles.row}>
                            <View style={styles.block}>
                                <Icon name={'query-builder'} color='#BDBDBD' type="material" size={16} />
                                <Text style={styles.blockTxt}>{time}</Text>
                            </View>
                            <View style={styles.block}>
                                <Icon name={'align-left'} color='#BDBDBD' type="font-awesome" size={16}/>
                                <Text style={styles.blockTxt}>{level}</Text>
                            </View>
                            <View style={styles.block}>
                                <Icon name={'users'} color='#BDBDBD' type="font-awesome" size={16}/>
                                <Text style={styles.blockTxt}>{amount}</Text>
                            </View>
                        </View>
                        <Text style={styles.step}>INGREDIENTS</Text>
                        <View style={styles.stepContent}>
                            {
                                listIngredients.map((ingredient, index) => (
                                    <View style={styles.rowflex1} key={index}>
                                        <View style={styles.smallBtn}/>
                                        <Text style={styles.txt}>{`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}</Text>
                                    </View>
                                ))
                            }
                        </View>
                        <Text style={styles.step}>INSTRUCTIONS</Text>
                        <View style={styles.stepContent}>
                            {
                                listSteps.map((step, index) => (
                                    <View style={styles.rowflex2} key={index}>
                                        <View style={styles.largeBtn}>
                                            <Text style={styles.index}>{index}</Text>
                                        </View>
                                        <Text style={styles.txt}>{step}</Text>
                                    </View>
                                ))
                            }
                        </View>
                        <Text style={styles.step}>SHOPPING</Text>
                        <View style={styles.update}>
                            <Text style={styles.quantity}>
                                Quantity:
                            </Text>
                            <View style={styles.updateBlock}>
                                <TouchableOpacity onPress={() => this.updateAmount(-1)} >
                                    <Icon type='font-awesome' name='chevron-down' size={13} color='#FEADB9' />
                                </TouchableOpacity>
                                <View style={styles.amountContain}>
                                    <Text style={styles.amountTxt}>{this.state.amount}</Text>
                                </View>
                                <TouchableOpacity onPress={() => this.updateAmount(1)} >
                                    <Icon type='font-awesome' name='chevron-up' size={13} color='#FEADB9' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.addCart}>
                            <Text style={styles.addTxt}>Add to cart</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
        )
    }
}
