import React from "react";

const { Provider, Consumer } = React.createContext();

class StylesProvider extends React.Component {
  static defaultProps = {
    id: undefined,
    theme: undefined,
    context: undefined
  };

  render() {
    const { id, theme, context, children } = this.props;
    return (
      <Provider
        value={{
          id,
          theme: theme || context || {}
        }}
      >
        {children}
      </Provider>
    );
  }
}

const StylesConsumer = ({ paint, children }) => (
  <Consumer>{({ id, theme }) => children(paint.getStyles(id, theme))}</Consumer>
);

const withStyles = paint => WrappedComponent => props => (
  <StylesConsumer paint={paint}>
    {styles => <WrappedComponent {...props} styles={styles} />}
  </StylesConsumer>
);

export { StylesProvider, StylesConsumer, withStyles };
