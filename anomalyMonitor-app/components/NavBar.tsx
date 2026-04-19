import { StyleSheet, Text, View } from 'react-native';
import NavButton from './NavButton';


export default function NavBar() {
    return (
        <View style={styles.navBar}>
            <NavButton  
                text='Home'
                icon={require('../assets/icons/home.png')}
                href='/index'
            />
            <NavButton  
                text='New'
                icon={require('../assets/icons/add.png')}
                href='/add'
            />
            <NavButton  
                text='Anomalies'
                icon={require('../assets/icons/list.png')}
                href='/anomalies'
            />
            <NavButton  
                text='Search'
                icon={require('../assets/icons/search.png')}
                href='/search'
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    navBar: {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "transparent"
    },
})