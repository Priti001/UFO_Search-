// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');

var $dateInput = document.querySelector('#date');
var $cityInput = document.querySelector('#city');
var $stateInput2 = document.querySelector('#state2');
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

var $searchBtnDate = document.querySelector('#searchDate');
var $searchBtnCity = document.querySelector('#searchCity');
var $searchBtnState = document.querySelector('#searchState');
var $searchBtnCountry = document.querySelector('#searchCountry');
var $searchBtnShape = document.querySelector('#searchShape');

var $stateInput = document.querySelector('#state');
var $searchBtn = document.querySelector('#search');

//pagination
// var current_page = 1;
// var records_per_page = 10;

// $searchBtn.addEventListener('click', handleSearchButtonClick);

// //Add an event listener to the searchButton, call handleSearchButtonClick when clicked
// $searchBtnDate.addEventListener('click', handleDateSearchButtonClick);
// $searchBtnCity.addEventListener('click', handleCitySearchButtonClick);
// $searchBtnState.addEventListener('click', handleStateSearchButtonClick);
// $searchBtnCountry.addEventListener('click', handleCountrySearchButtonClick);
// $searchBtnShape.addEventListener('click', handleShapeSearchButtonClick);

// Set filteredAddresses to addressData initially
// addressData comes from the addressData.js file
var filteredAddresses = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredAddresses.length; i++) {
    // Get get the current address object and its fields
    var address = filteredAddresses[i];
    var fields = Object.keys(address);
    console.log(fields.length);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
};

// function handleShapeSearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
//   //var filterState = $stateInput.value.trim().toLowerCase();
//   var filterShape = $shapeInput.value.trim().toLowerCase();
//   // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredAddresses = dataSet.filter(function(address) {
//   //var addressState = address.state.toLowerCase();
//   var addressShape= address.shape.toLowerCase();
//     // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//    // return addressState === filterState;
//     return addressShape === filterShape;
//   });
//   renderTable();
// };

// function handleStateSearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
//    var filterState = $stateInput.value.trim().toLowerCase();
//  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredAddresses = dataSet.filter(function(address) {
//   var addressState = address.state.toLowerCase();
//   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//    return addressState === filterState;
//   });
//   renderTable();
// };

// function handleCitySearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
//    var filterCity = $cityInput.value.trim().toLowerCase();
//  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredAddresses = dataSet.filter(function(address) {
//   var addressCity = address.city.toLowerCase();
//   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//    return addressCity === filterCity;
//   });
//   renderTable();
// };

// function handleCountrySearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
//    var filterCountry = $countryInput.value.trim().toLowerCase();
//  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredAddresses = dataSet.filter(function(address) {
//   var addressCountry = address.country.toLowerCase();
//   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//    return addressCountry === filterCountry;
//   });
//   renderTable();
// };

// function handleDateSearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
//    var filterDate = $dateInput.value.trim().toLowerCase();
//  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredAddresses = dataSet.filter(function(address) {
//   var addressDate = address.date.toLowerCase();
//   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//    return addressDate === filterDate;
//   });
//   renderTable();
// };

// function handleSearchButtonClick() {
//   // Format the user's search by removing leading and trailing whitespace, lowercase the string
//    var filterState = $stateInput.value.trim().toLowerCase();
//  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
//   filteredAddresses = dataSet.filter(function(address) {
//   var addressState = address.state.toLowerCase();
//   // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//    return addressState === filterState;
//   });
//   renderTable();
// };

function myFunction1() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInputDate");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function myFunction2() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInputCity");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function myFunction3() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInputState");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function myFunction4() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInputCountry");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

function myFunction5() {
  var input, filter, table, tr, td, i;
  input = document.getElementById("myInputShape");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
};

// Render the table for the first time on page load
renderTable();

// get the table element
var $table = document.getElementById("myTable"),
// number of rows per page
$n = 500,
// number of rows of the table
$rowCount = $table.rows.length,
// get the first cell's tag name (in the first row)
$firstRow = $table.rows[0].firstElementChild.tagName,
// boolean var to check if table has a head row
$hasHead = ($firstRow === "TH"),
// an array to hold each row
$tr = [],
// loop counters, to start count from rows[1] (2nd row) if the first row has a head tag
$i,$ii,$j = ($hasHead)?1:0,
// holds the first row if it has a (<TH>) & nothing if (<TD>)
$th = ($hasHead?$table.rows[(0)].outerHTML:"");
// count the number of pages
var $pageCount = Math.ceil($rowCount / $n);
// if we had one page only, then we have nothing to do ..
if ($pageCount > 1) {
  // assign each row outHTML (tag name & innerHTML) to the array
  for ($i = $j,$ii = 0; $i < $rowCount; $i++, $ii++)
    $tr[$ii] = $table.rows[$i].outerHTML;
  // create a div block to hold the buttons
  $table.insertAdjacentHTML("afterend","<div id='buttons'></div");
  // the first sort, default page is the first one
  sort(1);
}

// ($p) is the selected page number. it will be generated when a user clicks a button
function sort($p) {
  /* create ($rows) a variable to hold the group of rows
  ** to be displayed on the selected page,
  ** ($s) the start point .. the first row in each page, Do The Math
  */
  var $rows = $th,$s = (($n * $p)-$n);
  for ($i = $s; $i < ($s+$n) && $i < $tr.length; $i++)
    $rows += $tr[$i];
  
  // now the table has a processed group of rows ..
  $table.innerHTML = $rows;
  // create the pagination buttons
  document.getElementById("buttons").innerHTML = pageButtons($pageCount,$p);
  // CSS Stuff
  document.getElementById("id"+$p).setAttribute("class","active");
}


// ($pCount) : number of pages,($cur) : current page, the selected one ..
function pageButtons($pCount,$cur) {
  /* this variables will disable the "Prev" button on 1st page
     and "next" button on the last one */
  var $prevDis = ($cur == 1)?"disabled":"",
    $nextDis = ($cur == $pCount)?"disabled":"",
    /* this ($buttons) will hold every single button needed
    ** it will creates each button and sets the onclick attribute
    ** to the "sort" function with a special ($p) number..
    */
    $buttons = "<input type='button' value='&lt;&lt; Prev' onclick='sort("+($cur - 1)+")' "+$prevDis+">";
  for ($i=1; $i<=$pCount;$i++)
    $buttons += "<input type='button' id='id"+$i+"'value='"+$i+"' onclick='sort("+$i+")'>";
  $buttons += "<input type='button' value='Next &gt;&gt;' onclick='sort("+($cur + 1)+")' "+$nextDis+">";
  return $buttons;
};