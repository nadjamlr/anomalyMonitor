import { Colors } from '../constants/colors'
import { useRef, useState } from 'react'
import { ScrollView, View, StyleSheet, ScrollViewProps } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


interface FadeScrollViewProps extends ScrollViewProps {
    children: React.ReactNode
    fadeHeight?: number
}


export default function FadeScrollView({ children, fadeHeight = 48, style, ...props }: FadeScrollViewProps) {
    const [showTopFade, setShowTopFade] = useState(false)
    const [showBottomFade, setShowBottomFade] = useState(true)

    function handleScroll(event: any) {
        const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent
        setShowTopFade(contentOffset.y > 4)
        setShowBottomFade(contentOffset.y + layoutMeasurement.height < contentSize.height - 4)
    }

    const transparent = 'transparent'
    const bg = Colors.primary03

    return (
        <View style={styles.wrapper}>
            <ScrollView
                style={[styles.scroll, style]}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                {...props}
            >
                {children}
            </ScrollView>

            {showTopFade && (
                <LinearGradient
                    colors={[bg, transparent]}
                    style={[styles.fade, styles.fadeTop, { height: fadeHeight }]}
                    pointerEvents="none"
                />
            )}

            <LinearGradient
                colors={[transparent, bg]}
                style={[styles.fade, styles.fadeBottom, { height: fadeHeight, opacity: showBottomFade ? 1 : 0 }]}
                pointerEvents="none"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        position: 'relative',
    },
    scroll: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.primary03,
    },
    fade: {
        position: 'absolute',
        left: 0,
        right: 0,
    },
    fadeTop: {
        top: 0,
    },
    fadeBottom: {
        bottom: 0,
    },
})
