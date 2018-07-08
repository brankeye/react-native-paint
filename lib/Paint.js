import { StyleSheet } from "react-native";

const Paint = {
  create: fn => new PaintFactory(fn)
};

class PaintFactory {
  id = "";
  styles = {};

  constructor(fn) {
    this.fn = fn;
    this.isFunction = typeof fn === "function";
  }

  getStyles = (id, context) => {
    if (this.id !== id) {
      this.id = id;
      this.styles = StyleSheet.create(this.parseStyles(context));
    }
    return this.styles;
  };

  parseStyles = context => (this.isFunction ? this.fn(context) : this.fn);
}

export default Paint;
