var React = require('react');
var Item = React.createClass({
    checkboxClick: function() {
        console.log(this.props.sysno);
    },
    render: function() {
        return(
                <tr>
                    <th scope="row">
                        <label for={this.props.checkboxFlag}>
                            <div>
                                <input type="checkbox" name="quux[1]" className="icheck" id={this.props.checkboxFlag} onClick={ this.checkboxClick } value={this.props.sysno} />
                                {this.props.sysno}
                            </div>
                        </label>
                    </th>
                    <td>{this.props.firstName}</td>
                    <td>{this.props.lastName}</td>
                    <td>{this.props.userName}</td>
                    <td>
                        <div className="btn-group" aria-label="First group" role="group">
                            <button className="btn btn-default" type="button">编辑</button>
                            <button className="btn btn-default" type="button">删除</button>
                        </div>
                    </td>
                </tr>
                );
    },
    //componentDidMount:function() {
    //    seajs.use('seamodel/icheck.js', function (icheck) {
    //        icheck.init();
    //    });       
    //}
});
module.exports = Item;
