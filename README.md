# React Native Paint

A themeable abstraction over React Native StyleSheet.

## How?

1.  Install `react-native-paint` using yarn or npm:

```
yarn add react-native-paint
```

```
npm install react-native-paint
```

2.  Wrap your root-level component with a provider:

```jsx
import { StylesProvider } from "react-native-paint";

const App = () => (
  <StylesProvider id={theme.name} context={theme}>
    <MySuperCoolAwesomeApp />
  </StylesProvider>
);
```

3.  Use it in your components:

```jsx
import Paint, { StylesConsumer, withStyles } from "react-native-paint";

const paint = Paint.create(theme => ({
  color: theme.textColor
}));

const ThemedText = props => (
  <StylesConsumer paint={paint}>
    {styles => <Text {...props} styles={styles} />}
  </StylesConsumer>
);

const ThemedText = withStyles(paint)(({ styles, ...props }) => (
  <Text {...props} styles={styles} />
));
```
