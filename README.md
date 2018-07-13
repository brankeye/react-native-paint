# React Native Paint

A themeable abstraction over React Native [StyleSheet](https://facebook.github.io/react-native/docs/stylesheet.html).

## Usage

#### Step 1

Install [`react-native-paint`](https://www.npmjs.com/package/react-native-paint) using [yarn](https://yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/get-npm).

```
yarn add react-native-paint
```

```
npm install react-native-paint
```

#### Step 2

Wrap your root-level component with a provider.

```jsx
import React from "react";
import { StylesProvider } from "react-native-paint";

const themes = {
  light: {
    name: "light"
    // some light theme properties
  },
  dark: {
    name: "dark"
    // some dark theme properties
  }
};

class App extends React.Component {
  state = {
    currentTheme: themes.light
  };

  toggleTheme = () => {
    const { name } = this.state.currentTheme;
    const nextTheme = name === "light" ? themes.dark : themes.light;
    this.setState({
      currentTheme: nextTheme
    });
  };

  render() {
    const { currentTheme } = this.state;
    return (
      <StylesProvider id={currentTheme.name} theme={currentTheme}>
        <MySuperCoolAwesomeApp onToggleTheme={this.toggleTheme} />
      </StylesProvider>
    );
  }
}
```

#### Step 3

Use it in your components.

```jsx
import Paint, { StylesConsumer, withStyles } from "react-native-paint";

// with theme
const paint = Paint.create((theme) => ({
  color: theme.textColor,
  container: {
    // Paint inherits all properties from StyleSheet
    ...Paint.absoluteFillObject,
  }
}));

// or without theme
const paint = Paint.create({
  color: "blue",
});

// or create a stylesheet directly
// but do not pass this to paint prop on consumer/hoc
const stylesheet = Paint.sheet({
  color: "blue",
})

// as consumer
const ThemedText = (props) => (
  <StylesConsumer paint={paint}>
    {(styles) => (
      <Text {...props} styles={styles} />
    )}
  </StylesConsumer>
);

export default ThemedText;

// or as hoc
const ThemedText = (({ styles, ...props }) => (
  <Text {...props} styles={styles} />
));

export default withStyles(paint)(ThemedText);
```

## Try it

Check it out [here](https://exp.host/@brankeye/themed-app) with [Expo](https://expo.io/).

Have a look at the sample code [here](https://github.com/brankeye/react-native-paint/tree/master/samples/themed-app).

See the changelog [here](https://github.com/brankeye/react-native-paint/blob/master/changelog.md).
