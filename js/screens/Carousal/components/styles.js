import { StyleSheet, Dimensions } from 'react-native';

export const windowWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    fill: {
        flex: 1
    },
    slideContainer: {
        flex: 1,
        width: windowWidth,
        paddingHorizontal: 16,
    },
    flex_row: {
        flexDirection:'row'
    },
    titleText: {
        color: '#101217',
        fontSize: 16
    },
    releaseDateContainer: {
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8
    },
    charText: {
        color: '#101217',
        fontSize: 16,
        paddingTop: 8
    },
    charNamesContainer: {
        paddingLeft: 24,
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },
    charNameBoxContainer: {
        marginVertical: 8,
        marginRight: 8,
        backgroundColor: 'rgba(55, 154, 255, 0.1)',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'rgba(55, 154, 255, 0.5)',
        marginRight: 10,
        paddingHorizontal: 8,
        height: 25,
        minWidth: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    charName: {
        fontSize: 14,
        color: '#379AFF'
    }
});