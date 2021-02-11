import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import { Container, Header, Left, Body, Title, Right, Button } from "native-base";
import { Icon } from 'react-native-elements'
import * as navigation from '../../utils/navigation'
import { recipeCategory } from '../../utils/global-constant'

export default class CategoriesScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { listCategory } = this.props 
        return (
                <Container style={{backgroundColor: '#F4F4F4'}}>
                    <Header style={{ borderBottomWidth: 0, marginTop: 10, backgroundColor: '#F4F4F4'}}>
                    <Left/>
                    <Body>
                       <Title style={styles.title}>CATEGORIES</Title>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={() => {}}>
                            <Icon name="search" color='#000' size={32} type="material" />
                        </Button>
                    </Right>
                    </Header>
                        <View style={styles.container}>
                            <FlatList data={recipeCategory}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen', {category: item})} style={styles.flatList}>
                                        <Text style={styles.category}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item, index) => index}
                            />
                        </View>
                </Container>
        )
    }
}
