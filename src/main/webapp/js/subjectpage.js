// 点击添加单选题按钮
function simpleSubject() {
    $('#div_simpleSubject').css('display', 'block');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'none');
    clearForm();
}

// 点击添加多选题按钮
function multipleSubject() {
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'block');
    $('#div_judgeSubject').css('display', 'none');
    clearForm();
}

// 点击添加判断题按钮
function judgeSubject() {
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'block');
    clearForm();
}

// 清空所有表单
function clearForm() {
    $('#div_simpleSubject form').val("");
    $('#div_multipleSubject form').val("");
    $('#div_judgeSubject form').val("");
}

// 新增单选题
function addSimpleSubject() {
    var formData = $('#div_simpleSubject form').serializeArray();
    var subjectItems = [];
    var subjectAnswers = [];
    for (var i = 1; i < formData.length; i++) {
        if (i < 5) {
            var subjectItem = {
                options: formData[i].name,
                content: formData[i].value
            };
            subjectItems.push(subjectItem);
        } else {
            var answer = {
                answer: formData[i].value
            };
            subjectAnswers.push(answer);
        }
    }
    var selectSubject = {
        title: formData[0].value,
        subjectItems: subjectItems,
        subjectAnswers: subjectAnswers
    };
    console.log(JSON.stringify(selectSubject));
    var ajaxState = ajaxdata("/subject/addSubject", selectSubject);
    if (ajaxState != null) {
        alert(ajaxState.state);
    }
}

// 新增多选题
function addMultipleSubject() {
    var formData = $('#div_multipleSubject form').serializeArray();
    console.log(formData);
    var subjectItems = [];
    var subjectAnswers = [];
    for (var i = 1; i < formData.length; i++) {
        if (i < 5) {
            var subjectItem = {
                options: formData[i].name,
                content: formData[i].value
            };
            subjectItems.push(subjectItem);
        } else {
            var answer = {
                answer: formData[i].value
            };
            subjectAnswers.push(answer);
        }
    }

    var selectSubject = {
        title: formData[0].value,
        subjectItems: subjectItems,
        subjectAnswers: subjectAnswers
    };
    console.log(JSON.stringify(selectSubject));
    var ajaxState = ajaxdata("/subject/addSubject", selectSubject);
    if (ajaxState != null) {
        alert(ajaxState.state);
    }
}

// 新增判断题
function addJudgeSubject() {
    var formData = $('#div_judgeSubject form').serializeArray();
    console.log(formData);
    var subjectItems = [];
    var judgeTrue = {
        options: "A",
        content: "true"
    };
    var judgeFalse = {
        options: "B",
        content: "false"
    };
    subjectItems.push(judgeTrue);
    subjectItems.push(judgeFalse);
    var subjectAnswers = [];
    var answer = {
        answer: formData[1].value
    };
    subjectAnswers.push(answer);
    var selectSubject = {
        title: formData[0].value,
        subjectItems: subjectItems,
        subjectAnswers: subjectAnswers
    };
    console.log(JSON.stringify(selectSubject));
    var ajaxState = ajaxdata("/subject/addSubject", selectSubject);
    if (ajaxState != null) {
        alert(ajaxState.state);
    }
}

// 开始做题
function doSubject() {
    var subList = randNum();
    console.log(subList);
    $('#div_doSubject').html(doSub(subList[0].subject));
    // $('#div_doSubject').html('<h1>aaa</h1>');

}

// 拼接题目
function doSub(sub) {
    var subHtml = '<form>\n';
    var subTitle = '<label>题目' + sub.id + ':' + sub.title + '</label><br>\n';
    var subItems = '<label>\n';

    if (sub.subjectAnswers.length > 1) { // 多选题
        for (var i = 0; i < sub.subjectItems.length; i++) {
            subItems += '<input type="checkbox" name="answers" value="' + sub.subjectItems[i].options + '">' + sub.subjectItems[i].content + '<br>\n';
        }
    } else if (sub.subjectItems.length === 2) { // 判断题
        for (var j = 0; j < sub.subjectItems.length; j++) {
            var judgeItems = sub.subjectItems[j].content === "true" ? "√" : "×";
            subItems += '<input type="radio" name="answers" value="' + sub.subjectItems[j].options + '">' + judgeItems + '<br>\n';
        }
    } else { // 单选题
        for (var k = 0; k < sub.subjectItems.length; k++) {
            if (sub.subjectItems)
                subItems += '<input type="radio" name="answers" value="' + sub.subjectItems[k].options + '">' + sub.subjectItems[k].content + '<br>\n';
        }
    }
    subItems += '</label><br>';
    subHtml += subTitle + subItems + '</form>';
    return subHtml;
}




