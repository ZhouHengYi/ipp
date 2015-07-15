var React = require('react');
//列表页
var App = React.createClass({
    render:function() {
        return(
                <div className="heightFull">
                    <TopMenu />
                    <div className="content">
                        <LeftMenu />
                        <div className="mainContent">
                            <BlueContent />
                            <List />
                        </div>
                    </div>
                </div>
            );
    }
});
module.exports = App;
