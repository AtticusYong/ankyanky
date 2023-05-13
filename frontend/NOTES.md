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

why in PlaceOrderScreen.js need const orderCreate? and why above const placeOrderHandler?

need to pass in history in prop? as in const PlaceOrderScreen

Lecture 57. at ts=10:58/15:25 --------I don't have that error that complains about order._id i.e. React Hook useEffect has a missing dependency: 'order._id'. Either include it or removethe dependency array react-hooks/exhaustive-deps. Search for the keywords to learn more about each warning. To ignore, add //eslint-disable-next-line to the line before.

Lect.58 at 2:27/5:24 in orderController.js, populate('user', 'name email') and not populate('user', 'name', 'email')

Lect. 60 whast did he mean set loading: true at start of lecture video? Also, updating qty in the cart doesn't recalculate the prices in the order screen. Reload order screen causes problem. and Name and email doesn't appear along with shipping address.

Lect 65. Profile now doesn't display currently logged in user's profile. fixed earlier....not sure why no. orderListMy->orders doesn't show items? in browser redux state. Table not supported but need to import through react-bootstrap? (BT imported Table in 16:50/18:03) and some dfference in code e.g. check ProfileScreen.js. doesn't show orderListMy->orders:[{shippingAddress...}] in browswer. i.e. order is not listed in listMyOrder....

Oh, regarding that profile showing previous user instead of current logged in user, BT noticed the bug and explains in the beginning of Lect 66.


Lect 71. Unable to send PUT request through Postman to update user info. Solution: add "isAdmin":false in the json object for the body e.g. {"name":"updatedName", "isAdmin":false}. See Q&A