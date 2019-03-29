function ajaxdata(action, datastr) {
    var adata;
    $.ajax({
        async: false, // 同步
        url: action,
        data: JSON.stringify(datastr),
        contentType: 'application/json; charset=UTF-8',
        type: "POST",
        dataType: "json",
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
