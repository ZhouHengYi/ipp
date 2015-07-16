
var React = require('react');
var TopMenu = React.createClass({
    render: function() {
        return(
                <header role="banner" id="top" className="navbar navbar-static-top bs-docs-nav">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="default.html">后台模板</a>
                        </div>
                        <nav className="collapse navbar-collapse" id="bs-navbar">
                            <ul className="nav navbar-nav">
                                <li>
                                    <a href="default.html">RRliuXue</a>
                                </li>
                                <li>
                                    <a href="">ComeFromEast</a>
                                </li>
                                <li>
                                    <a href="">YY项目</a>
                                </li>
                                <li>
                                    <a href="">WilliamProject</a>
                                </li>
                                <li>
                                    <a href="moduleDesign.html">模块设计</a>
                                </li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a onclick="" href="">登录</a></li>
                                <li><a onclick="" href="">注销</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            );
    }
});
module.exports = TopMenu;
