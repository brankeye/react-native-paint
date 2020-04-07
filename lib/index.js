import React, { useContext, useState, useMemo } from "react";
import { StyleSheet } from "react-native";

const Context = React.createContext();

export const StylesProvider = ({ createStyles, initialTheme, children }) => {
  const [theme, setTheme] = useState(initialTheme);

  return (
    <Context.Provider
      value={{
        createStyles,
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
};

StylesProvider.defaultProps = {
  createStyles: StyleSheet.create,
};

export const useTheme = () => {
  const { theme, setTheme } = useContext(Context);
  return [theme, setTheme];
};

export const useStyles = (callback, dependencies) => {
  const { createStyles, theme } = useContext(Context);

  const styles = useMemo(() => {
    return createStyles(callback(theme));
  }, [theme, ...dependencies]);

  return styles;
};

export const StylesConsumer = ({ paint, children }) => {
  const styles = useStyles(paint);
  return children(styles);
};

export const withStyles = (paint) => (WrappedComponent) => (props) => {
  const styles = useStyles(paint);
  return <WrappedComponent {...props} styles={styles} />;
};
