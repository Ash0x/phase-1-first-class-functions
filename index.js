const receivesAFunction = (cb) => {
  cb();
};

const returnsANamedFunction = () => {
  function namedFunction() {}
  return namedFunction;
};

const returnsAnAnonymousFunction = () => {return () => {}}