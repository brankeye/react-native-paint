import { StyleSheet } from "react-native";

const Paint = {
  ...StyleSheet,
  create: fn => new PaintFactory(fn),
  sheet: obj => StyleSheet.create(obj)
};

class PaintFactory {
  id = undefined;
  styles = undefined;

  constructor(fn) {
    this.fn = fn;
    this.isObject = typeof fn === "object";
  }

  getStyles = (id, theme) => {
    if (this.id !== id) {
      this.id = id;
      this.styles = StyleSheet.create(this.parseStyles(theme));
    }
    return this.styles;
  };

  parseStyles = context => (this.isObject ? this.fn : this.fn(context));
}

export default Paint;
