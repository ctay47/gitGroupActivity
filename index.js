function fn(...c) {
  if (!cat.every((a) => Number.isNumber(a)))
    throw 'All arguments must be numbers.';
  return cat.reduce((a, b) => a + b);
}

fn(1, 2, 3); //> 6
fn(10, 'Bat', 20); //> error All arguments must be numbers.
