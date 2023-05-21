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


Lect 71. Unable to send PUT request through Postman to update user info. Solution: add "isAdmin":false in the json object for the body e.g. {"name":"updatedName", "isAdmin":false}. See Q&A for more details.

Lect. 70 replace mongoose function remove() with deleteOne(). remove() is deprecated.

Lect. 72. Clean up unused variables:

./src/screens/RegisterScreen.js
[1]   Line 14:   'Loader' is defined but never used            no-unused-vars
[1]   Line 28:  'loading' is assigned a value but never used  no-unused-vars
[1] 
[1] ./src/screens/PaymentScreen.js
[1]   Line 2:  'FormControl' is defined but never used  no-unused-vars
[1] 
[1] ./src/screens/LoginScreen.js
[1]   Line 6:    'Loader' is defined but never used            no-unused-vars
[1]   Line 17:  'loading' is assigned a value but never used  no-unused-vars
[1] 
[1] ./src/screens/CartScreen.js
[1]   Line 9:  'Form' is defined but never used  no-unused-vars

but no missing dependency about 'userInfo' that BT had in UserListScreen.js useEffect

add in RegisterScreen.js (was missing) in return statement     {loading && <Loader />}

Lect 72. In UserEditScreen.js, forgot to replace setName with setEmail and setIsAdmin for those line statements in useEffect else block. Funny useEffect missing dependency warnig for dispatch, user, userId doesn't show in browser console but in my vscode console. something to do with react_devtools_backend.js setup in FF...maybe

Lect 73. no need to pass history into useEffect? i.e. useEffect((history) => {}) e.g. in UserEditScreen.js?

Lect 75. delete....getById().delete()? for the same route? what if the route for getting and not for delete? can share same route? how does middleware behave?

Lect. 79. After you create new product and then fill in the edit form and click update button and it goes back to product list page again....when you press edit button again, the form is not filled with the product details but with sample etc. the fix is mentioned in the Q&A @Serdar

Lect. 81. Form.File in ProductEditScreen.js not supported with newer version of react-dom (see Q&A Dora). Using FormControl element with type="file" instead

Lect. 82 Admin Order List (tried myself before seeing solution....)

    Issue: in React tools, state shows orders to be an empty list (mentioned earlier but not fixed yet). hence going to details page shows order is not there and returns error.

    also though paid already, page shows not paid. there is a XORS message in browser console too. try to fix later.....


Lect. 83
        OrderScreen.js
        // another bug see Q&A Kurt (Reset order detail) added order._id != orderId because order detail page shows previous detail page even though different order detail selected

        OrderActions.js
        // another bug - see Q&A Othman (video 82...I keep getting unauthorized error)  add {} inside put method because unauthorized 401 returned

Lect. 86 Search bar and search button not laid out inline. add class="d-flex" to Form component instead on inline in SearchBar.js (see Q&A Fahad) and 
https://stackoverflow.com/questions/67674208/form-inline-not-working-as-expected-with-react-bootstrap. It seems react-bootstrap is meant to be used with Bootstrap V4.

npm i bootstrap@4.6.0

    in productActions.js: // missing '/' in front of api/....of GET mehod - this fixed the product search / PRODUCT_LIST_FAIL error

    add search and paginate in App.js i.e. "/search/:keyword/page/:pageNumber"



Lect. 90 note the directories when running the npm commands:
        cd frontend; npm run build; cd ..; npm start

        read the Q&A for using render.com since heroku has stopped free tier


Lect. 91 Deployed on render.com

1. Connect to GitHub

2. edit the following....

environment variables:
    NODE_ENV = development
    PORT = 5000
    MONGO_URI = mongodb+srv://blackbean:password@cluster0.nqat0.gcp.mongodb.net/proshop?retryWrites=true&w=majority
    JWT_SECRET =  abc123
    PAYPAL_CLIENT_ID = *************************************************************

settings: 

build and deploy (npm install from all package.jsons i.e. root(hmmm...maybe don't need from root), frontend, no need from backend since build i.e. follow what BT said
in package.json:
"heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix frontend")
----------------
{"name": "papaShop", "build command":"npm install && npm install --prefix frontend && npm run build --prefix frontend", "start command":"npm start"}


