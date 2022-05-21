const receivesAFunction = function(cb) {
    return cb();
};
const returnsANamedFunction = () => {
    return function namedFunction() {
        console.log('named function')
    };
};
function returnsAnAnonymousFunction() {
    return () => console.log('this is an anonymous return')
};