var amount = null;
var subNum = [];
var subCount = 1;
var subNumIndex = 0;

function randNum() {
    if (amount === null) {
        amount = ajaxdata("/subject/selectSubjectCount", "").count;
    }
    if (subNum.length === 0) {
        for (var i = 1; i <= amount; i++) {
            subNum.push(i);
        }
    }
    return subList();
}

function subList() {
    var subList = [];
    if (amount - subNumIndex > 0) {
        // for (var j = 0; j < subCount; j++,subNumIndex++) {
        do {
            var selIndex = Math.floor(Math.random() * (amount - subNumIndex) + subNumIndex);
            var temp = subNum[subNumIndex];
            subNum[subNumIndex] = subNum[selIndex];
            subNum[selIndex] = temp;
            var sub = ajaxdata("/subject/selectSubject", subNum[subNumIndex]).subject;
            subNumIndex++;
        }while (sub==null);
            subList.push(sub);
        // }
    } else {
        alert("没题了！");
    }
    return subList;
}