// get the form
var filterBugsForm = document.getElementById('filter-bugs-form');
// get the details of the bugs of the project in json
var bugsJson = document.getElementById('bugs-data').getAttribute('data');
// parse the data
var bugs = JSON.parse(bugsJson);
// get table body where filtered bugs will be shown
var tableBody = document.getElementById('table-body-id');

filterBugsForm.addEventListener('submit', function (e) {
    e.preventDefault();

    //create empty array where bugs will be stored
    let filteredBugs = [];

    //get all the form data
    let labelsList = filterBugsForm.querySelectorAll('input[type=checkbox]');

    let labelsElements = [...labelsList].filter((Element) => Element.checked);

    let reportedByVal = filterBugsForm.querySelector(
        'input[type=radio][name=reportedBy]:checked'
    ).value;

    let [...labelsArr] = labelsElements.map((Element) => Element.value);

    //add bugs to filtered bugs array

    bugs.map((bug) => {
        if (bug.reported_by == reportedByVal) {
            if (!filteredBugs.includes(bug)) {
                filteredBugs.push(bug);
            }
        }
        labelsArr.map((label) => {
            if (bug.labels.includes(label)) {
                if (!filteredBugs.includes(bug)) {
                    filteredBugs.push(bug);
                }
            }
        });
    });


    tableBody.innerHTML = ''; // empty the current table body
    for (let bug of filteredBugs) {
        let tableRow = document.createElement('tr'); //create a table row  and add details of the filtered bugs

        tableRow.innerHTML = `
        <th scope="row">${bug.title}
          <div class="d-flex justify-content-start" id="labels-div-${bug._id}">
          </div>
        </th>
        <td> ${bug.description}</td>
        <td> ${bug.reported_by}</td>
        <td> ${bug.due_date}</td>
        <td> ${bug.status}</td>
        <td> ${bug.severity}</td>
  `;
        tableBody.appendChild(tableRow);
        var labelsDiv = document.getElementById(`labels-div-${bug._id}`);

        for (let label of bug.labels) {
            let labelsHeader = document.createElement('h6');
            labelsHeader.classList.add('badge', 'text-bg-info', 'm-1');
            labelsHeader.innerHTML = `${label}`;
            labelsDiv.appendChild(labelsHeader);
        }
    }
});

function flashMessageForFilter() {
    new Noty({  // flash message
        theme: 'relax',
        text: "Bugs Filtered!",
        type: 'success',
        layout: 'topRight',
        timeout: 1500

    }).show();
}


