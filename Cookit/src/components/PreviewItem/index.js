import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';
import { Icon } from 'react-native-elements'
import styles from './styles';

export default class PreviewItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { imgUrl, category, title, time, level, amount, navigation }  = this.props; 
        const { routeName } = navigation.state;
        return (
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('RecipeScreen', {route: routeName})}>
                <Image source={imgUrl} resizeMode='cover' style={styles.img}/>
                <View style={styles.content}>
                    <Text style={styles.category}>{category}</Text>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.row}>
                        <View style={styles.block}>
                            <Icon name={'query-builder'} color='#BDBDBD' type="material" size={15} />
                            <Text style={styles.blockTxt}>{time}</Text>
                        </View>
                        <View style={styles.block}>
                            <Icon name={'align-left'} color='#BDBDBD' type="font-awesome" size={15}/>
                            <Text style={styles.blockTxt}>{level}</Text>
                        </View>
                        <View style={styles.block}>
                            <Icon name={'users'} color='#BDBDBD' type="font-awesome" size={15}/>
                            <Text style={styles.blockTxt}>{amount}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}