'use strict';

var React = require('react');
var ReactRouter = require('react-router');
var node = document.createElement('div');
document.body.appendChild(node);

/** 默认渲染 **/
var Index = require('./jsx/indexMain')
React.render(<Index/>, document.getElementById("formContent"));
var ModuleDesign = require('./jsx/moduleDesignMain')


React.render((
  <Router history={history}>
    <Route path="/" component={Index}>
      <Route path="ModuleDesign" component={ModuleDesign}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.body);
 
new Router();