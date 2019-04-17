// 点击添加单选题按钮
function simpleSubject() {
    $('#div_simpleSubject').css('display', 'block');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'none');
    $('#div_updateSimpleSubject').css('display', 'none');
    $('#div_updateMultipleSubject').css('display', 'none');
    $('#div_updateJudgeSubject').css('display', 'none');
    $('#div_doSubject').css('display', 'none');
    $('#div_findSubject').css('display', 'none');
    clearForm();
}

// 点击添加多选题按钮
function multipleSubject() {
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'block');
    $('#div_judgeSubject').css('display', 'none');
    $('#div_updateSimpleSubject').css('display', 'none');
    $('#div_updateMultipleSubject').css('display', 'none');
    $('#div_updateJudgeSubject').css('display', 'none');
    $('#div_doSubject').css('display', 'none');
    $('#div_findSubject').css('display', 'none');
    clearForm();
}

// 点击添加判断题按钮
function judgeSubject() {
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'block');
    $('#div_updateSimpleSubject').css('display', 'none');
    $('#div_updateMultipleSubject').css('display', 'none');
    $('#div_updateJudgeSubject').css('display', 'none');
    $('#div_doSubject').css('display', 'none');
    $('#div_findSubject').css('display', 'none');
    clearForm();
}

// 点击查找题目按钮
function findSubject() {
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'none');
    $('#div_updateSimpleSubject').css('display', 'none');
    $('#div_updateMultipleSubject').css('display', 'none');
    $('#div_updateJudgeSubject').css('display', 'none');
    $('#div_doSubject').css('display', 'none');
    $('#div_findSubject').css('display', 'block');
    querySubmit(1);
}

// 清空所有表单
function clearForm() {
    $('#div_simpleSubject form')[0].reset();
    $('#div_multipleSubject form')[0].reset();
    $('#div_judgeSubject form')[0].reset();
    $('#div_updateSimpleSubject form')[0].reset();
    $('#div_updateMultipleSubject form')[0].reset();
    $('#div_updateJudgeSubject form')[0].reset();
}

// 开始做题
function doSubject() {
    $('#div_simpleSubject').css('display', 'none');
    $('#div_multipleSubject').css('display', 'none');
    $('#div_judgeSubject').css('display', 'none');
    $('#div_updateSimpleSubject').css('display', 'none');
    $('#div_updateMultipleSubject').css('display', 'none');
    $('#div_updateJudgeSubject').css('display', 'none');
    $('#div_doSubject').css('display', 'block');
    $('#div_findSubject').css('display', 'none');
    var subList = randNum();
    if (subList.length > 0) {
        $('#div_doSubject').html(doSub(subList[0]));
    }
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

// 拼接题目
function doSub(sub) {
    var subHtml = '<form id="subject' + sub.id + '">';
    var subTitle = '<label>题目' + sub.id + ':' + sub.title + '</label><br>';
    var subItems = [];

    if (sub.subjectAnswers.length > 1) { // 多选题
        for (var i = 0; i < sub.subjectItems.length; i++) {
            subItems.push('<label><input type="checkbox" name="answers" value="' + sub.subjectItems[i].options + '">' + sub.subjectItems[i].options + ':' + sub.subjectItems[i].content + '</label><br>');
        }
    } else if (sub.subjectItems.length === 2) { // 判断题
        for (var j = 0; j < sub.subjectItems.length; j++) {
            var judgeItems = sub.subjectItems[j].content === "true" ? "√" : "×";
            subItems.push('<input type="radio" id="judgeAnsRadio' + sub.subjectItems[j].options + '" name="answers" value="' + sub.subjectItems[j].options + '"><label for="judgeAnsRadio' + sub.subjectItems[j].options + '">' + sub.subjectItems[j].options + ':' + judgeItems + '</label><br>');
        }
    } else { // 单选题
        for (var k = 0; k < sub.subjectItems.length; k++) {
            if (sub.subjectItems)
                subItems.push('<input type="radio" id="simpAnsRadio' + sub.subjectItems[k].options + '" name="answers" value="' + sub.subjectItems[k].options + '"><label for="simpAnsRadio' + sub.subjectItems[k].options + '">' + sub.subjectItems[k].options + ':' + sub.subjectItems[k].content + '</label><br>');
        }
    }
    subItems.push('<br>');
    var subAnswer = [];
    subAnswer.push('<label id="subject' + sub.id + 'Answer"  class="displayNone">答案:');
    for (var m = 0; m < sub.subjectAnswers.length; m++) {
        subAnswer.push(sub.subjectAnswers[m].answer);
    }
    subAnswer.push('</label><br>');
    var subAffirm = '<label><button class="btn btn-success" onclick="subAnswer(\'subject' + sub.id + '\')">确认</button></label>';
    var subNext = '&nbsp;<button class="btn btn-primary" onclick="doSubject()">下一题</button>';
    subHtml += subTitle + subItems.join("") + subAnswer.join("") + '</form>' + subAffirm + subNext;
    return subHtml;
}

// 答题确认按钮(显示答案并校验)
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

// 根据题目查询分页
function querySubmit(pageNum) {
    var pageData = {
        pageNum: pageNum,
        title: $("#searchTitle")[0].value
    };
    var pageInfo = ajaxdata("/subject/findSubject", pageData).pageInfo;
    $('#selectSubTable').html(selectTable(pageInfo));
    pageInfoBar(pageInfo, "div_pageBar");
}

// 拼接查询的题目
function selectTable(pageInfo) {
    var list = pageInfo.list;
    var table = [];
    table.push("<table class=\"table table-striped table_searchSub\">");
    var tableFirstTr = "<tr class=\"table_tr_title\">\n" +
        "                    <td>序号</td>\n" +
        "                    <td>题目</td>\n" +
        "                    <td>选项</td>\n" +
        "                    <td>答案</td>\n" +
        "                    <td>操作</td>\n" +
        "                </tr>";
    table.push(tableFirstTr);
    for (var i = 0; i < list.length; i++) {
        var num = (pageInfo.pageNum - 1) * pageInfo.pageSize + i + 1;
        var tableTr = [];
        tableTr.push("<tr>");
        // 序号
        tableTr.push("<td>" + num + "</td>");
        // 题目
        tableTr.push("<td>" + list[i].title + "</td>");
        // 选项
        var items = [];
        items.push("<td>");
        for (var j = 0; j < list[i].subjectItems.length; j++) {
            var subOptions = list[i].subjectItems[j].options;
            var subContent;
            if (list[i].subjectItems.length === 2) {
                subContent = list[i].subjectItems[j].content === "true" ? "√" : "×";
            } else {
                subContent = list[i].subjectItems[j].content;
            }
            items.push(subOptions + ":" + subContent + "<br>");
        }
        items.push("</td>");
        tableTr.push(items.join(""));
        // 答案
        var answers = [];
        answers.push("<td>");
        for (var k = 0; k < list[i].subjectAnswers.length; k++) {
            answers.push(list[i].subjectAnswers[k].answer);
        }
        answers.push("</td>");
        tableTr.push(answers.join(""));
        // 操作
        tableTr.push("<td><button data-toggle=\"modal\" data-target=\"#myModal\" onclick=\"updateSub(" + list[i].id + "," + pageInfo.pageNum + ")\" class=\"btn btn-info\">编辑</button>&nbsp;&nbsp;<button onclick=\"deleteSub(" + list[i].id + "," + pageInfo.pageNum + ")\" class=\"btn btn-danger\">删除</button></td>");

        tableTr.push("</tr>");
        table.push(tableTr.join(""));
    }
    table.push("</table>");
    return table.join("");
}

// 点击编辑按钮
function updateSub(id, pageNum) {
    clearForm();
    updateSubject(id);
    $('#myModal').on('hide.bs.modal', function () {
        querySubmit(pageNum);
    });
}

// 点击删除按钮
function deleteSub(id, pageNum) {
    confirm("确认删除该题目？") ? alert(ajaxdata("/subject/deleteSubject", id).state) : false;
    querySubmit(pageNum);
}

function updateSubject(id) {
    var sub = ajaxdata("/subject/selectSubject", id).subject;
    $('#div_updateSimpleSubject').css('display', 'none');
    $('#div_updateMultipleSubject').css('display', 'none');
    $('#div_updateJudgeSubject').css('display', 'none');
    if (sub.subjectAnswers.length > 1) { // 多选题
        $("#div_updateMultipleSubject form input[name='subId']").attr('value', sub.id);
        $("#div_updateMultipleSubject form textarea[name='title']").html(sub.title);
        for (var i = 0; i < sub.subjectItems.length; i++) {
            $("#div_updateMultipleSubject form input[name='" + sub.subjectItems[i].options + "']").attr('value', sub.subjectItems[i].content);
        }
        for (var j = 0; j < sub.subjectAnswers.length; j++) {
            $("#div_updateMultipleSubject form input[value='" + sub.subjectAnswers[j].answer + "']").prop("checked", true);
        }
        $('#div_updateMultipleSubject').css('display', 'block');
    } else if (sub.subjectItems.length === 2) { // 判断题
        $("#div_updateJudgeSubject form input[name='subId']").attr('value', sub.id);
        $("#div_updateJudgeSubject form textarea[name='title']").html(sub.title);
        for (var j = 0; j < sub.subjectAnswers.length; j++) {
            $("#div_updateJudgeSubject form input[value='" + sub.subjectAnswers[j].answer + "']").prop("checked", true);
        }
        $('#div_updateJudgeSubject').css('display', 'block');
    } else { // 单选题
        $("#div_updateSimpleSubject form input[name='subId']").attr('value', sub.id);
        $("#div_updateSimpleSubject form textarea[name='title']").html(sub.title);
        for (var i = 0; i < sub.subjectItems.length; i++) {
            $("#div_updateSimpleSubject form input[name='" + sub.subjectItems[i].options + "']").attr('value', sub.subjectItems[i].content);
        }
        for (var j = 0; j < sub.subjectAnswers.length; j++) {
            $("#div_updateSimpleSubject form input[value='" + sub.subjectAnswers[j].answer + "']").prop("checked", true);
        }
        $('#div_updateSimpleSubject').css('display', 'block');
    }
}

// 修改单选题
function updateSimpleSubject() {
    var formData = $('#div_updateSimpleSubject form').serializeArray();
    var subjectItems = [];
    var subjectAnswers = [];
    for (var i = 2; i < formData.length; i++) {
        if (i < 6) {
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
        id: formData[0].value,
        title: formData[1].value,
        subjectItems: subjectItems,
        subjectAnswers: subjectAnswers
    };
    console.log(JSON.stringify(selectSubject));
    var ajaxState = ajaxdata("/subject/addSubject", selectSubject);
    if (ajaxState != null) {
        alert(ajaxState.state);
    }
}

// 修改多选题
function updateMultipleSubject() {
    var formData = $('#div_updateMultipleSubject form').serializeArray();
    var subjectItems = [];
    var subjectAnswers = [];
    for (var i = 2; i < formData.length; i++) {
        if (i < 6) {
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
        id: formData[0].value,
        title: formData[1].value,
        subjectItems: subjectItems,
        subjectAnswers: subjectAnswers
    };
    console.log(JSON.stringify(selectSubject));
    var ajaxState = ajaxdata("/subject/addSubject", selectSubject);
    if (ajaxState != null) {
        alert(ajaxState.state);
    }
}

// 修改判断题
function updateJudgeSubject() {
    var formData = $('#div_updateJudgeSubject form').serializeArray();
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
        answer: formData[2].value
    };
    subjectAnswers.push(answer);
    var selectSubject = {
        id: formData[0].value,
        title: formData[1].value,
        subjectItems: subjectItems,
        subjectAnswers: subjectAnswers
    };
    console.log(JSON.stringify(selectSubject));
    var ajaxState = ajaxdata("/subject/addSubject", selectSubject);
    if (ajaxState != null) {
        alert(ajaxState.state);
    }
}








