var React = require('react');

var TopMenu = require('./topMenu.jsx')
var LeftMenu = require('./leftMenu.jsx')
var BlueContent = require('./blueContent.jsx')
var FormContent = require('./formContent.jsx')

//首页
var Index = React.createClass({
    render:function() {
        return(
                <div className="heightFull">
                    <TopMenu />
                    <div className="content">
                        <LeftMenu />
                        <div className="mainContent">
                            <BlueContent />
                            <FormContent />
                        </div>
                    </div>
                </div>
            );
    }
});

module.exports = Index;
