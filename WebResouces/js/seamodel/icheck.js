define(function (require, exports, module) {
    exports.init = function () {
        //$("body").on("click", function () {
        //    $('.icheck').iCheck({
        //        checkboxClass: 'icheckbox_square-grey',
        //        radioClass: 'iradio_minimal',
        //        increaseArea: '20%' // optional
        //    });
        //});

        $(function() {
            $('.icheck').iCheck({
                checkboxClass: 'icheckbox_square-grey',
                radioClass: 'iradio_minimal',
                increaseArea: '20%' // optional
            });
        });
    };
});