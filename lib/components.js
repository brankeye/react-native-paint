import React from "react";
import { StyleSheet } from "react-native";

const { Provider, Consumer } = React.createContext();

class StylesProvider extends React.Component {
  static defaultProps = {
    id: undefined,
    context: {}
  };

  render() {
    const { id, context, children } = this.props;
    return (
      <Provider
        value={{
          id,
          context
        }}
      >
        {children}
      </Provider>
    );
  }
}

const StylesConsumer = ({ paint, children }) => (
  <Consumer>
    {({ id, context }) => children(paint.getStyles(id, context))}
  </Consumer>
);

const withStyles = paint => WrappedComponent => props => (
  <StylesConsumer paint={paint}>
    {styles => <WrappedComponent {...props} styles={styles} />}
  </StylesConsumer>
);

export { StylesProvider, StylesConsumer, withStyles };
