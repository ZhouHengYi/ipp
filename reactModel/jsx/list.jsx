var React = require('react');
var List = React.createClass({

    //先定义一个数组
    componentWillMount : function() {
        var array = [
            {"sysno":"1","checkboxFlag":"checkboxA","firstName":"AAA","lastName":"Mr","userName":"@AAAA"},
            {"sysno":"2","checkboxFlag":"checkboxB","firstName":"BBB","lastName":"Mr","userName":"@BBB"},
            {"sysno":"3","checkboxFlag":"checkboxC","firstName":"CCC","lastName":"Mis","userName":"@CCC"},
            {"sysno":"4","checkboxFlag":"checkboxD","firstName":"DDD","lastName":"Mr","userName":"@DDD"},
        ];

        //存储值
        this.setState({ "employees": array });
    }, 

    render: function() {

        var items = this.state.employees.map(function (item) {
            return (
                <Item sysno={item.sysno} checkboxFlag={item.checkboxFlag} firstName={item.firstName} lastName={item.lastName} userName={item.userName} />
                );
        });


        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Sysno</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
            );
}

    
});
module.exports = List;
