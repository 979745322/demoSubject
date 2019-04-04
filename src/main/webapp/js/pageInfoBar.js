function pageInfoBar(pageInfo, barDivId) {
    var barDiv = $("#" + barDivId);
    var context = "<span class='span_pageBar'>当前页：" + pageInfo.pageNum + "&nbsp;总页数："
        + pageInfo.pages + "&nbsp;&nbsp;总记录数："+pageInfo.total+"</span>";
    context += "<div><ul class='pagination'>";
    if (pageInfo.pageNum > 1) {
        context += "<li class='prev-next' onclick=querySubmit('"
            + pageInfo.prePage + "')><a href='#' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>";
    }
    for (var i = 0; i < pageInfo.navigatepageNums.length; i++) {
        if (pageInfo.pageNum == pageInfo.navigatepageNums[i]) {
            context += "<li class='query-content-page-cur' onclick=querySubmit('"
                + pageInfo.navigatepageNums[i]
                + "')><a href='#'>"
                + pageInfo.navigatepageNums[i] + "</a></li>"
        } else {
            context += "<li onclick=querySubmit('"
                + pageInfo.navigatepageNums[i] + "')><a href='#'>"
                + pageInfo.navigatepageNums[i] + "</a></li>"
        }

    }

    if (pageInfo.pageNum < pageInfo.pages) {
        context += "<li class='bus-border-right prev-next' onclick=querySubmit('"
            + pageInfo.nextPage + "')><a href='#' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>";
    }
    context += "</ul></div>";
    barDiv.html(context);
}