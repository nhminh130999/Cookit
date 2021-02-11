import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image, 
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import PreviewItem from '../../components/PreviewItem'
import images from '../../Themes/Images'
import PreviewListItem from '../../components/PreviewListItem'
import { Container, Header, Left, Body, Title, Card, CardItem, Content, Right, Button } from "native-base";
import { Icon } from 'react-native-elements'

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

const listPopular = [
    {
        url: images.soup,
    },
    {
        url: images.tea,
    },
    {
        url: images.pancake,
    }
]
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigation } = this.props;

        return (
                <Container>
                    <Header style={{backgroundColor: '#fff', borderBottomWidth: 0, marginTop: 10}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => navigation.navigate("RecipeStack")}>
                            <Icon name="menu" color='#000' size={32} type="material" />
                        </Button>
                    </Left>
                    <Body>
                        <Image source={images.logo4}/>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("InputRecipeScreen")}>
                            <Icon name="arrow-upward" color='#000' size={32} type="material" />
                        </Button>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="search" color='#000' size={32} type="material" />
                        </Button>
                    </Right>
                    </Header>
                        <View style={styles.container}>
                        <Text style={styles.txt}>POPULAR</Text>
                        <FlatList data={listPopular}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => {}} style={styles.flatList}>
                                    <Image source={item.url} resizeMode='stretch' style={styles.img}/>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item, index) => index}
                        />
                        <Text style={styles.txt}>LASTEST</Text>
                        <PreviewListItem listItem={listItem} navigation={navigation}/>
                        </View>
                </Container>
        )
    }
}
