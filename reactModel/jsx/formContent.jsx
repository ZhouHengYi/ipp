var React = require('react');
var FormContent = React.createClass({
    render: function() {
        return(
            <div className="container" id="formDv">
                <div className="row clearfix">
                    <div className="span6">
                        <div className="clearfix">
                            <h2>表单内容</h2>
                            <hr />
                                <div id="build">
                                    <form id="target" className="form-horizontal"></form>
                                </div>
                            </div>
                        </div>
                        <div className="span6">
                            <h2>Drag  Drop components</h2>
                            <hr />
                                <div className="tabbable">
                                    <ul className="nav nav-tabs" id="formtabs">
                                    </ul>
                                    <form className="form-horizontal" id="components">
                                        <fieldset>
                                            <div className="tab-content">
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
            );
    }
});
module.exports = FormContent;
