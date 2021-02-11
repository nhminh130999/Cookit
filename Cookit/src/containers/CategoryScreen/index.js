import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import styles from './styles';
import { Container, Header, Left, Body, Title, Right, Button } from "native-base";
import { Icon } from 'react-native-elements'
import images from '../../Themes/Images'
import PreviewList from '../../components/PreviewListItem'

const listItem = [
    {
        url: images.salad,
        title: 'Pancakes', 
        category: "BREAKFAST & BRUNCH",
        time: '15 minutes',
        amount: 3,
        level: 'Easy',
    }, {
        url: images.pancake,
        title: 'Pancakes', 
        category: "BREAKFAST & BRUNCH",
        time: '15 minutes',
        amount: 3,
        level: 'Easy'
    }, {
        url: images.pancake,
        title: 'Pancakes', 
        category: "BREAKFAST & BRUNCH",
        time: '15 minutes',
        amount: 3,
        level: 'Easy'
    }, {
        url: images.pancake,
        title: 'Pancakes', 
        category: "BREAKFAST & BRUNCH",
        time: '15 minutes',
        amount: 3,
        level: 'Easy'
    }, {
        url: images.pancake,
        title: 'Pancakes', 
        category: "BREAKFAST & BRUNCH",
        time: '15 minutes',
        amount: 3,
        level: 'Easy'
    }
]

export default class CategoryScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { listCategory } = this.props 
        const category = this.props.navigation.getParam('category')
        const { navigation } = this.props;

        return (
                <View style={styles.container}>
                    <ImageBackground source={images.breakfast} style={{width: '100%', height: 180}}>
                        <View style={styles.darker}>
                            <View style={styles.header}>
                                <View style={styles.left}>
                                    <Button
                                            transparent
                                            onPress={() => this.props.navigation.goBack()}>
                                        <Icon name="arrow-back" color='#fff' size={32} type="material" />
                                    </Button>
                                </View>
                                <View style={styles.right}>
                                    <Button
                                        transparent
                                        onPress={() => {}}>
                                        <Icon name="search" color='#fff' size={32} type="material" />
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <ScrollView contentContainerStyle={styles.body}
                                showsVerticalScrollIndicator={false}>
                        <Text style={styles.title}>CATEGORY</Text>
                        <Text style={styles.category}>{category}</Text>
                        <Text style={styles.amount}>418 Recipres</Text>
                        <View style={{width: '100%', height: '100%'}}>
                            <PreviewList listItem={listItem} navigation={navigation}/>
                        </View>
                    </ScrollView>
                </View>
        )
    }
}
