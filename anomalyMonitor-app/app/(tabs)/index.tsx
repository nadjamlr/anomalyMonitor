// Author: Nadja Müller
// Home Screen Screen


import { globalStyles } from '../../constants/styles';
import { Text, View, Image } from 'react-native';
import CollectionOverview from '../../components/CollectionOverview';
import FadeScrollView from '../../components/FadeScrollView';


export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
        <FadeScrollView style={globalStyles.scrollContainer}>

        <View style={globalStyles.imageContainer}>
            <Image
            source={require('../../assets/galaxy-home.jpg')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
        />
        </View>
        <View style={globalStyles.heading}>
            <Text style={globalStyles.h2}>
                Nasa Anomaly Monitor
            </Text>
            <Text style={globalStyles.h1}>
                Home
            </Text>
            <Text style={globalStyles.p}>
                Review the mission status, recent activity and the most important anomaly alerts in one place.
            </Text>
        </View>
        <CollectionOverview>
        </CollectionOverview>
    </FadeScrollView>
  </View>
  );
}