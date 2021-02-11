import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './styles';
import { Container, Header, Left, Body, Title, Right, Button } from "native-base";
import { Icon } from 'react-native-elements'
import * as navigation from '../../utils/navigation'


class RecipeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: this.props.recipe.amount
        }
        this.updateAmount = this.updateAmount.bind(this)
    }

    updateAmount(index) {
        const { amount } = this.state;
        if (amount + index >= 1)
            this.setState(state => ({amount: state.amount + index}))
    }


    render() {
        const { name } = this.props.name;
        return (
            <View style={styles.recipeItem}>
                <Text style={styles.recipeName}>{name}</Text>
                <View style={styles.recipeAmount}>
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
                <View style={styles.recipeRemove}>
                    <TouchableOpacity>
                        <Icon type='font-awesome' name='times' size={13} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

class IngredientItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, amount, unit } = this.props.ingredient;
        return (
            <View style={styles.recipeItem}>
                <Text style={styles.ingreName}>{name}</Text>
                <Text style={styles.ingreAmount}>{amount}</Text>
                <Text style={styles.ingreUnit}>{unit}</Text>
            </View>
        )
    }
}


export default class ShoppingScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { recipes, ingredients } = this.props;
        return (
                <Container style={{backgroundColor: '#F4F4F4'}}>
                    <Header style={{ borderBottomWidth: 0, marginTop: 10, backgroundColor: '#F4F4F4'}}>
                    <Left/>
                    <Body>
                       <Title style={styles.title}>SHOPPING</Title>
                    </Body>
                    <Right/>
                    </Header>
                    <ScrollView style={styles.container}>
                        <View style={styles.recipe}>
                            <View style={styles.headerRecipe}>
                                <Text style={styles.items}>items</Text>
                                <Text style={styles.quantity}>quantity</Text>
                            </View>
                            {
                                recipes.map((recipe, index) => (
                                    <RecipeItem key={index} recipe={recipe} />
                                ))
                            }
                        </View>
                        <View style={styles.recipe}>
                            <View style={styles.headerRecipe}>
                                <Text style={style.items}>items</Text>
                                <Text style={styles.quantity}>quantity</Text>
                                <Text style={styles.unit}>unit</Text>
                            </View>
                            {
                                ingredients.map((ingredient, index) => (
                                    <IngredientItem key={index} ingredient={ingredient} />
                                ))
                            }
                        </View>
                        <TouchableOpacity style={styles.shoppingBtn}>
                            <Text style={styles.shoppingTxt}>SHOP NOW</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </Container>
        )
    }
}
