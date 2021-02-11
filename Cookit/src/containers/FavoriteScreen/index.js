import React from 'react';
import {
  ScrollView
} from 'react-native';
import styles from './styles';
import { Container, Header, Left, Body, Title, Right, Button } from "native-base";
import images from '../../Themes/Images';
import { Icon } from 'react-native-elements'
import * as navigation from '../../utils/navigation'
import PreviewListItem from '../../components/PreviewListItem'

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

export default class FavoriteScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { listCategory } = this.props 
        const { navigation } = this.props;

        return (
                <Container style={{backgroundColor: '#F4F4F4'}}>
                    <Header style={{ borderBottomWidth: 0, marginTop: 10, backgroundColor: '#F4F4F4'}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" color='#000' size={32} type="material" />
                        </Button>
                    </Left>
                    <Body>
                       <Title style={styles.title}>FAVORITES</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => {}}>
                            <Icon name="search" color='#000' size={32} type="material" />
                        </Button>
                    </Right>
                    </Header>
                    <ScrollView contentContainerStyle={styles.body}
                                showsVerticalScrollIndicator={false}>
                        <PreviewListItem listItem={listItem} navigation={navigation}/>
                    </ScrollView>
                </Container>
        )
    }
}
