import React from "react";
import Expo from "expo";
import { Text, View, TouchableOpacity } from "react-native";
import themes from "./themes";
import Paint, { StylesProvider, StylesConsumer } from "react-native-paint";

const paint = Paint.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.primaryColor,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: theme.textColor,
    padding: 20
  }
}));

class App extends React.Component {
  state = {
    currentTheme: themes.light
  };

  changeTheme = nextTheme => {
    if (this.state.currentTheme !== nextTheme) {
      this.setState({
        currentTheme: nextTheme
      });
    }
  };

  render() {
    const { currentTheme } = this.state;
    return (
      <StylesProvider id={currentTheme.name} context={currentTheme}>
        <StylesConsumer paint={paint}>
          {styles => (
            <View style={styles.container}>
              <Text style={styles.text}>
                <Text>Current theme is {currentTheme.name + "\n"}</Text>
                <Text>ID of container style is {styles.container + "\n"}</Text>
                <Text>ID of text style is {styles.text}</Text>
              </Text>
              <TextButton
                title={"Light"}
                onPress={() => this.changeTheme(themes.light)}
                style={styles.text}
              />
              <TextButton
                title={"Dark"}
                onPress={() => this.changeTheme(themes.dark)}
                style={styles.text}
              />
              <TextButton
                title={"Silly"}
                onPress={() => this.changeTheme(themes.silly)}
                style={styles.text}
              />
            </View>
          )}
        </StylesConsumer>
      </StylesProvider>
    );
  }
}

const TextButton = ({ title, onPress, ...props }) => (
  <TouchableOpacity onPress={onPress}>
    <Text {...props}>{title}</Text>
  </TouchableOpacity>
);

Expo.registerRootComponent(App);
