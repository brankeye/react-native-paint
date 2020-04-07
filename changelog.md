# Changelog

## 2.0.0 (on the way)

- Added `useStyles` that takes a function to generate styles as the first argument, and a dependencies array as the second argument.
  - `useStyles` will always update when the theme changes, but you may declare additional dependencies to change on.

#### BREAKING CHANGES

- `Paint` no longer exists as a utility.
  - Old way: `Paint.create((theme) => ({...}))` or `Paint.create({...})`
  - New way: `(theme) => ({...})` or `() => ({...})`

## 1.1.0 (latest)

- `context` prop on `StylesProvider` deprecated in favor of `theme`.
- `Paint` now inherits all properties from StyleSheet.
- Can create a `StyleSheet` directly with `Paint.sheet` method.

## 1.0.0

- `StylesProvider` takes `id` and `context` props.
