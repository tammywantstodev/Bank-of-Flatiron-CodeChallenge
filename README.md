# Bank of Flatiron
##App.jsx
App.jsx contains majority of the functionality for this app to work. It stores all 
of the ``child components`` and the functions e.g a filter function, they need which it
passes to them as ``props``. This file is what enables all the various components to
be collected in one place to be eventually rendered on the web page.

##AddTransaction.jsx
AddTransaction.jsx is one of the child components. It's main functionality is to 
provide a form for a user to add a new transaction and when they click submit, this
component handles all the data by creating new elements that follow the same format
as the other elements already stored in the table then adding these new elements
to the existing table.

##Filter.jsx
This is the second child component. It's main functionality is to provide an input
box for users to type in a category and when they click the filter button, it uses
a function created in App.jsx passed to it as a prop to filter only the transactions
in the table under the category the user typed in.


##db.json
db.json served the role of the ``backend`` in this application. It provided the starter
data to populate the table.

##main.jsx
main .jsx is the final step in this application. It connected all the collected
components in App to the index.html file allowing the data in all these files
to be ```rendered``` on a web browser.
##Prerequisites
node.js installed on your machine
clone this repository
npm install 
npm run dev

##Author Tamara Kaka


