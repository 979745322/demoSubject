function ajaxdata(action, datastr) {
    var adata;
    $.ajax({
        async: false, // 同步
        url: action,
        data: datastr,
        type: "POST",
        dataType: "",
        success: function (data) {
            console.log(data);
            adata = data;
        },
        error: function (data) {
            alert("ajax error");
        }
    });
    return adata;
}
