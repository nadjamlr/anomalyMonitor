// Author: Nadja Müller
// Button Component


import { TouchableOpacity, Text} from "react-native";
import { useRouter } from "expo-router";
import { globalStyles } from "../constants/styles";


interface ButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
}


export default function Button({ text, href, onClick }: ButtonProps) {
    const router = useRouter();

    function handlePress() {
        if (href) {
            router.push(href as any);
        } else if (onClick) {
            onClick();
        }
    }

    return (
        <TouchableOpacity style={globalStyles.button} onPress={handlePress}>
            <Text style={globalStyles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}