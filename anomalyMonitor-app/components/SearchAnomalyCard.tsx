// Author: Nadja Müller
// Search Anomaly Card on Search Screen

import { globalStyles } from '../constants/styles';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Colors } from '../constants/colors'


interface SearchCardProps {
    image: string;
    heading: string;
    subheading: string;
    date: string;
}


export default function SearchCard({image, heading, subheading, date}: SearchCardProps) {
    return(
        <View style={styles.card}>
            <Image
                source={{ uri: image }}
                style={{ width: '20%', height: '100%' }}
                resizeMode="cover"
            />
            <View style={styles.textBox}>
                <Text style={globalStyles.h3}>
                    {heading}
                </Text>
                <Text style={globalStyles.p}>
                    {subheading}
                </Text>
                <View style={globalStyles.flexHorizontal}>
                    <Text style={globalStyles.p2}>
                        {date}
                    </Text>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create ({
    card: {
        flex: 1,
        width: "100%",
        height: 100,
        backgroundColor: Colors.primary02,
        borderColor: Colors.primary01,
        borderWidth: 0.5,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 20,
        flexDirection: 'column',

    },
    cardImage: {
        width: "100%",
        flex: 1,
    },
    textBox: {
        paddingHorizontal: 10,
        paddingVertical: 16,
        gap: 10,
    },
})