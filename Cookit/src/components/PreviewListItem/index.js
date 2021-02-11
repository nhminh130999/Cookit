import React from 'react';
import {
  View,
  ScrollView, 
  FlatList
} from 'react-native';
import PreviewItem from '../PreviewItem'
import styles from './styles';

export default class PreviewListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { listItem, navigation } = this.props;
        return (
            <FlatList data={listItem}
                            renderItem={({ item, index }) => (
                                <PreviewItem key={index} 
                                    imgUrl={item.url}
                                    category={item.category}
                                    title={item.title}
                                    time={item.time}
                                    level={item.level}
                                    navigation={navigation}
                                    amount={item.amount}/>
                            )}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                        />
        )
    }
}