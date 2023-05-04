1. browser doesn't render the js unlike Brad's. Instead need to refresh browser. maybe the react-router-dom (react-router-bootstrap) version 5 which is not the latest. next time try with version 6.

WARNING in [eslint] 
src/screens/ProductScreen.js
  Line 16:10:  React Hook useEffect has a missing dependency: 'match.params.id'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
2. useEffect dependency add [match] - see lesson 14?



to use es2015 module instead of CommonJS
type: module
import
.js
export

throw new Error() instead of res.json .... no need to use next(error)? see chapter 25

you can pass {id, name, email} to user object in a function...doesn't have to be matching?

history?
history.push('/path')   // go to '/path'

import {Link} from rect-redux-dom ? some info/warning message about module...

how to display 2 decimal places again? Number? to?
