import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
        paddingTop: 40,
        paddingBottom: 100,
    },
    title: {
        marginVertical: 10,
        fontSize: 16,
        color: '#000000',
        fontWeight: '600',
        fontFamily: 'AvenirNext-UltraLight'
    },
    flatList: {
        width: '100%',
        height: 56,
        marginBottom: 8,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    category: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: 'AvenirNext-UltraLight'
    }
})

export default styles