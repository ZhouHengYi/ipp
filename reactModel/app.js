'use strict';

var React = require('react');
var node = document.createElement('div');
document.body.appendChild(node);

/** 默认渲染 **/
var Index = require('./jsx/indexMain.jsx')
var ModuleDesignMain = require('./jsx/moduleDesignMain.jsx')
React.render(<ModuleDesignMain />,node);

