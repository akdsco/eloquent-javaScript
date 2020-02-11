function loop(value, test, update, body) {
  while(test(value)) {
    body(value);
    value = update(value);
  }
}