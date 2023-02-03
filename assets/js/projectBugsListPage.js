var statusSpanList = document.getElementsByClassName('status');
for (statusSpan of statusSpanList) {
    if (statusSpan.innerText == "Open") {
        statusSpan.classList.add("text-bg-light");
    } else if (statusSpan.innerText == "In Progress") {
        statusSpan.classList.add("text-bg-info");
    }else {
        statusSpan.classList.add("text-bg-secondary");
    }
}


var severitySpanList = document.getElementsByClassName('severity');
for (severitySpan of severitySpanList) {
    if (severitySpan.innerText == "High") {
        severitySpan.classList.add("text-bg-danger");
    } else if (severitySpan.innerText == "Medium") {
        severitySpan.classList.add("text-bg-warning");
    }else {
        severitySpan.classList.add("text-bg-success");
    }
}