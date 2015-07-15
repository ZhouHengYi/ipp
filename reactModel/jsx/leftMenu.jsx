var React = require('react');
var LeftMenu = React.createClass({
    render: function() {
        return(
            <ul className="nav nav-list left">
            <li><a href="#"><i className="icon-home"></i>首页</a></li>
            <li className="active">
                <a href="#"><i className="icon-earth"></i>web</a>
                <ul className="nav navDeatil">
                    <li>
                        <a href="#"><i></i>Quickstart</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Guide</a>
                    </li>

                    <li>
                        <a href="#"><i></i>API Reference</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Libraries</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i className="icon-apple"></i>IOS</a>
                <ul className="nav navDeatil">
                    <li>
                        <a href="#"><i></i>Quickstart</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Guide</a>
                    </li>

                    <li>
                        <a href="#"><i></i>API Reference</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Libraries</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i className="icon-android"></i>IOS</a>
                <ul className="nav navDeatil">
                    <li>
                        <a href="#"><i></i>Quickstart</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Guide</a>
                    </li>

                    <li>
                        <a href="#"><i></i>API Reference</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Libraries</a>
                    </li>
                </ul>
            </li>

            <li>
                <a href="#"><i className="icon-console"></i> reset</a>
                <ul className="nav navDeatil">
                    <li>
                        <a href="#"><i></i>Quickstart</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Guide</a>
                    </li>

                    <li>
                        <a href="#"><i></i>API Reference</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Libraries</a>
                    </li>
                </ul>
            </li>


            <li>
                <a href="#"><i className="icon-database2"></i>Mongon DB</a>
                <ul className="nav navDeatil">
                    <li>
                        <a href="#"><i></i>Quickstart</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Guide</a>
                    </li>

                    <li>
                        <a href="#"><i></i>API Reference</a>
                    </li>

                    <li>
                        <a href="#"><i></i>Libraries</a>
                    </li>
                </ul>
            </li>
        </ul>
            );
    }
});
module.exports = LeftMenu;
