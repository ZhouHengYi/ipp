'use strict';

var React = require('react');
var node = document.createElement('div');
document.body.appendChild(node);

/** 默认渲染 **/
var Index = require('./jsx/indexMain')
React.render(<Index />,node);



var DefaultRoute = ReactRouter.DefaultRoute;

var routes = (  
  <Routes location="hash">
      <Route path="/" handler={Index}>
      <DefaultRoute handler={Index}/>
    </Route>
  </Routes>
);