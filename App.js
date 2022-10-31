import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableNativeFeedback} from 'react-native';

export default function App() {
  let x;
  const handlePress = () => console.log("Text Clicked")

  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text numberOfLines={1} onPress = {handlePress}>Hello World. How to make a text even longer for it last. So this is a long text.
        For the record.
      </Text>
      <TouchableHighlight onPress={() => console.log("Pressed")}>
        <Image 
        blurRadius = {20}
        fadeDuration = {1000}
        source={{
          uri: "https://thispersondoesnotexist.com/image"
        }} style = {styles.img} />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View style = {{width: 300, height: 200, backgroundColor: "blue", display: "flex", 
        flexDirection: "row", justifyContent: "center"}}>
          <Text style = {{color: "white"}}> Some text</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 90,
    height: 60,
    borderRadius: 40
  }
});
