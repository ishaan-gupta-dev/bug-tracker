// get the form
var searchBugsForm = document.getElementById('search-bugs-form');
// get the details of the bugs of the project in json
var bugsJson = document.getElementById('bugs-data').getAttribute('data');
// parse the data
var bugs = JSON.parse(bugsJson);
// get table body where filtered bugs will be shown
var tableBody = document.getElementById('table-body-id');

searchBugsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //create empty array where bugs will be stored
    let searchedBugs = [];

    //get all the form data
    let titleTobeSearched = searchBugsForm.querySelector('input[name="title"]').value;
    let descriptionTobeSearched = searchBugsForm.querySelector('textarea[name="description"]').value;


    //add bugs to searched bugs array
    bugs.map((bug) => {
        if (bug.title.toLowerCase() == titleTobeSearched.toLowerCase() || bug.description.toLowerCase() == descriptionTobeSearched.toLowerCase()) {
            if (!searchedBugs.includes(bug)) {
                searchedBugs.push(bug);
            }
        }
    });
    tableBody.innerHTML = '';   // empty the current table body
    for (let bug of searchedBugs) {
        let tableRow = document.createElement('tr'); //create a table row and add details of the searched bugs

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

function flashMessageForSearch() {
    new Noty({  // flash message
        theme: 'relax',
        text: "Bugs Searched!",
        type: 'success',
        layout: 'topRight',
        timeout: 1500

    }).show();
}



