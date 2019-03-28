function selectSubject() {
    $('#div_selectSubject').css('display','block');
}
function judgeSubject() {
    alert("判断题");
}

function addSelectSubject() {
    console.log($('#div_selectSubject form').serialize()); // 字符串
    console.log($('#div_selectSubject form').serializeArray()); // 数组
    var formData = $('#div_selectSubject form').serializeArray();
    var subjectItems = [];
    for (var i = 1; i < formData.length-1; i++) {
        var subjectItem = {
            option:formData[i].name,
            content:formData[i].value
        };
        subjectItems.push(subjectItem);
    }
    var selectSubject = {
        title:formData[0].value,
        subjectItems:subjectItems,
        answer:formData[5].value
    };
    console.log(selectSubject);
    console.log(ajaxdata("/subject/",""));
    /*ajaxdata("/subject/testAdd",selectSubject);*/
}