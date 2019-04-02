// 点击添加单选题按钮
function simpleSubject() {
    $('#div_simpleSubject').css('display', 'block');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'none');
    $('#div_doSubject').css('display', 'none');
    clearForm();
}

// 点击添加多选题按钮
function multipleSubject() {
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'block');
    $('#div_judgeSubject').css('display', 'none');
    $('#div_doSubject').css('display', 'none');
    clearForm();
}

// 点击添加判断题按钮
function judgeSubject() {
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'block');
    $('#div_doSubject').css('display', 'none');
    clearForm();
}

// 清空所有表单
function clearForm() {
    $('#div_simpleSubject form')[0].reset();
    $('#div_multipleSubject form')[0].reset();
    $('#div_judgeSubject form')[0].reset();
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
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'none');
    $('#div_doSubject').css('display', 'block');
    var subList = randNum();
    if(subList.length>0){
        $('#div_doSubject').html(doSub(subList[0].subject));
    }else{

    }

    // $('#div_doSubject').html('<h1>aaa</h1>');

}

// 拼接题目
function doSub(sub) {
    var subHtml = '<form id="subject' + sub.id + '">';
    var subTitle = '<label>题目' + sub.id + ':' + sub.title + '</label><br>';
    var subItems = '';

    if (sub.subjectAnswers.length > 1) { // 多选题
        for (var i = 0; i < sub.subjectItems.length; i++) {
            subItems += '<label><input type="checkbox" name="answers" value="' + sub.subjectItems[i].options + '">' + sub.subjectItems[i].options + ':' + sub.subjectItems[i].content + '</label><br>';
        }
    } else if (sub.subjectItems.length === 2) { // 判断题
        for (var j = 0; j < sub.subjectItems.length; j++) {
            var judgeItems = sub.subjectItems[j].content === "true" ? "√" : "×";
            subItems += '<input type="radio" id="judgeAnsRadio'+sub.subjectItems[j].options+'" name="answers" value="' + sub.subjectItems[j].options + '"><label for="judgeAnsRadio'+sub.subjectItems[j].options+'">' + sub.subjectItems[j].options + ':' + judgeItems + '</label><br>';
        }
    } else { // 单选题
        for (var k = 0; k < sub.subjectItems.length; k++) {
            if (sub.subjectItems)
                subItems += '<input type="radio" id="simpAnsRadio'+sub.subjectItems[k].options+'" name="answers" value="' + sub.subjectItems[k].options + '"><label for="simpAnsRadio'+sub.subjectItems[k].options+'">' + sub.subjectItems[k].options + ':' + sub.subjectItems[k].content + '</label><br>';
        }
    }
    subItems += '<br>';
    var subAnswer = '<label id="subject' + sub.id + 'Answer"  class="displayNone">答案:';
    for (var m = 0; m < sub.subjectAnswers.length; m++) {
        subAnswer += sub.subjectAnswers[m].answer;
    }
    subAnswer += '</label><br>';
    var subAffirm = '<label><button onclick="subAnswer(\'subject' + sub.id + '\')">确认</button></label>';
    var subNext = '&nbsp;<button onclick="doSubject()">下一题</button>';
    subHtml += subTitle + subItems + subAnswer + '</form>' + subAffirm + subNext;
    return subHtml;
}

function subAnswer(id) {
    var formData = $('#' + id).serializeArray();
    var subAnswer = '';
    for (var i = 0; i < formData.length; i++) {
        subAnswer += formData[i].value;
    }
    $('#' + id + 'Answer').css('display', 'block');
    var rightAnswer = $('#' + id + 'Answer')[0].innerHTML.split("答案:")[1];
    if (subAnswer === rightAnswer) {
        $('#' + id + 'Answer').css('color', 'green');
    } else {
        $('#' + id + 'Answer').css('color', 'red');
    }
}






