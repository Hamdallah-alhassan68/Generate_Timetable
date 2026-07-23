const server = 'http://localhost:3000';

async function fetchStudents() {
    try {
        const response = await fetch(server + '/students');
        const students = await response.json();

        applySavedTimetable(students);  
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}



async function savechange() {
    const url = server + '/students';
    const student = {id: one, name: Monday};
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(student)
    }
    const response = await fetch(url, options);
}
function saveTimetable(dayId) {
    const row = document.getElementById(dayId).parentElement;
    const cells = row.querySelectorAll(".cell:not(.time):not(.button)");
    const subjects = Array.from(cells).map(c => c.innerText);
    const entry = {
        day: document.getElementById(dayId).innerText,
        subjects: subjects
    };
    fetch(server +'/students', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(entry)
    }).then(() => {
        alert("Timetable saved successfully!");
    });
}


function applySavedTimetable(data) {
    let latest = {};
    data.forEach(entry => {
        const dayName = entry.day;
        const subjects = entry.subjects;

        if (!subjects) return;

        let rowId = "";

        switch(dayName) {
            case "Monday": rowId = "one"; break;
            case "Tuesday": rowId = "two"; break;
            case "Wednesday": rowId = "three"; break;
            case "Thursday": rowId = "four"; break;
            case "Friday": rowId = "five"; break;
            case "OverAll": rowId = "six"; break
        }

        if (!rowId) return;

        const row = document.getElementById(rowId).parentElement;
        const cells = row.querySelectorAll(".cell:not(.time):not(.button)");

        subjects.forEach((subj, index) => {
            if (cells[index]) {
                cells[index].innerText = subj;
            }
        });
    });

    console.log("Timetable restored.");
}

function toMinutes(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}
const schedule = [
  // Monday
  { day: 1, start: "07:00", end: "08:00", message: "It is time for Class Mr Alex Lang 1", elementId: "Lang1", color: "red" },
  { day: 1, start: "08:00", end: "09:00", message: "It is Time for Sci 1 Mr Paul", elementId: "sci1", color: "red" },
  { day: 1, start: "09:00", end: "10:00", message: "It is time for Art Mr James", elementId: "art", color: "red" },
  { day: 1, start: "10:00", end: "10:30", message: "Tea break Time", elementId: "tea", color: "green" },
  { day: 1, start: "10:30", end: "11:30", message: "It is Time for Sci 2 Mrs Nelly", elementId: "sci2", color: "red" },
  { day: 1, start: "11:30", end: "12:30", message: "It is time for Lang 2 Mr Omondi", elementId: "lang2", color: "red" },
  { day: 1, start: "12:30", end: "14:00", message: "It is Lunch time", elementId: "lunch", color: "green" },
  { day: 1, start: "14:00", end: "15:00", message: "It is sport time", elementId: "sport", color: "red" },

  // Tuesday 
  { day: 2, start: "07:00", end: "08:00", message: "It is time for SCI 2 Mrs Nelly", elementId: "sci2t", color: "red" },
  { day: 2, start: "08:00", end: "09:00", message: "It is Time for Art Mr James", elementId: "art2", color: "red" },
  { day: 2, start: "09:00", end: "10:00", message: "It is time for LANG 1 Mr Alex", elementId: "lang1t", color: "red" },
  { day: 2, start: "10:00", end: "10:30", message: "Tea break Time", elementId: "tea2", color: "green" },
  { day: 2, start: "10:30", end: "11:30", message: "It is Time for Sci 1 Mr Paul", elementId: "sci1t", color: "red" },
  { day: 2, start: "11:30", end: "12:30", message: "It is time for Lang 2 Mr Omondi", elementId: "lang2t", color: "red" },
  { day: 2, start: "12:30", end: "14:00", message: "It is Lunch time", elementId: "lunch2", color: "green" },
  { day: 2, start: "14:00", end: "15:00", message: "It is sport time", elementId: "sport2", color: "red" },

  // Wednesday
  { day: 3, start: "07:00", end: "08:00", message: "It is time for Lang 2 Mr Omondi", elementId: "lang2w", color: "red" },
  { day: 3, start: "08:00", end: "09:00", message: "It is Time for sci 2 Mrs Nelly", elementId: "sci2w", color: "red" },
  { day: 3, start: "09:00", end: "10:00", message: "It is time for Art Mr James", elementId: "art3", color: "red" },
  { day: 3, start: "10:00", end: "10:30", message: "Tea break Time", elementId: "tea3", color: "green" },
  { day: 3, start: "10:30", end: "11:30", message: "It is Time for Sci 1 Mr Paul", elementId: "sci1w", color: "red" },
  { day: 3, start: "11:30", end: "12:30", message: "It is time for Lang 2 Mr Omondi", elementId: "lang2w", color: "red" },
  { day: 3, start: "12:30", end: "14:00", message: "It is Lunch time", elementId: "lunch3", color: "green" },
  { day: 3, start: "14:00", end: "15:00", message: "It is sport time", elementId: "sport3", color: "red" },

  // Thursday
  { day: 4, start: "07:00", end: "08:00", message: "It is time for Lang 1 Mr Alex", elementId: "lang1th", color: "red" },
  { day: 4, start: "08:00", end: "09:00", message: "It is Time for Sci 2 Mrs Nelly", elementId: "sci2th", color: "red" },
  { day: 4, start: "09:00", end: "10:00", message: "It is time for Lang 2 Mr Omondi", elementId: "lang2th", color: "red" },
  { day: 4, start: "10:00", end: "10:30", message: "Tea break Time", elementId: "tea4", color: "green" },
  { day: 4, start: "10:30", end: "11:30", message: "It is Time for Sci 1 Mr Paul", elementId: "sci1th", color: "red" },
  { day: 4, start: "11:30", end: "12:30", message: "It is time for Art Mr James", elementId: "art4", color: "red" },
  { day: 4, start: "12:30", end: "14:00", message: "It is Lunch time", elementId: "luch4", color: "green" },
  { day: 4, start: "14:00", end: "15:00", message: "It is time for Sport", elementId: "sport4", color: "red" },

  // Friday
  { day: 5, start: "07:00", end: "08:00", message: "It is time for Art Mr James", elementId: "art5", color: "red" },
  { day: 5, start: "08:00", end: "09:00", message: "It is Time for Sci 1 Mr Paul", elementId: "sci1f", color: "red" },
  { day: 5, start: "09:00", end: "10:00", message: "It is time for Lang 1 Mr Alex", elementId: "lang1f", color: "red" },
  { day: 5, start: "10:00", end: "10:30", message: "Tea break Time", elementId: "tea5", color: "green" },
  { day: 5, start: "10:30", end: "11:30", message: "It is Time for Sci 2 Mrs Nelly", elementId: "sci2f", color: "red" },
  { day: 5, start: "11:30", end: "12:30", message: "It is time for Lang 2 Mr Omondi", elementId: "lang2f", color: "red" },
  { day: 5, start: "12:30", end: "13:30", message: "It is Lunch time", elementId: "luch5", color: "green" },
  { day: 5, start: "14:00", end: "15:00", message: "It is sport time", elementId: "sport5", color: "red" }
];
function checkTime() {
  const now = new Date();
  const day = now.getDay(); 
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  document.querySelectorAll('.timetable-cell').forEach(el => {
    el.style.backgroundColor = '';
    el.style.color = '';
  });
  const entry = schedule.find(s => {
    if (s.day !== day) return false;
    const startMin = toMinutes(s.start);
    const endMin = toMinutes(s.end);
    return minutesNow >= startMin && minutesNow < endMin; 
  });

  if (entry) {
    alert(entry.message);
    const cell = document.getElementById(entry.elementId);
    if (cell) {
      cell.style.backgroundColor = entry.color;
      cell.style.color = 'white';
    } else {
      console.warn('Element with id "' + entry.elementId + '" not found.');
    }
  } else {
    alert('School is over');
  }
}


checkTime();
setInterval(checkTime, 180000);



function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function reshuffleDay(dayId) {
  let dayCell = document.getElementById(dayId);
  let startIndex = Array.from(document.querySelectorAll(".cell")).indexOf(dayCell);
  let subjectCells = [];
  for (let i = 1; i <= 8; i++) {
    subjectCells.push(document.querySelectorAll(".cell")[startIndex + i]);
  }

  let subjects = subjectCells
    .map(cell => cell.innerText)
    .filter(text => text !== "TEA BREAK" && text !== "LUNCH BREAK");
  shuffle(subjects);
  let index = 0;
  for (let i = 0; i < subjectCells.length; i++) {
    let text = subjectCells[i].innerText;

    if (text !== "TEA BREAK" && text !== "LUNCH BREAK") {
      subjectCells[i].innerText = subjects[index];
      index++;
    }
  }

  alert(dayId + " timetable reshuffled successfully!");
}


window.reshuffleDay = reshuffleDay;
window.saveTimetable = saveTimetable;
document.addEventListener("DOMContentLoaded", fetchStudents);

// Generating new timetable

const SUBJECTS = ['LANG1', 'LANG2', 'SCI1', 'SCI2', 'ART', 'SPORT'];


function Shuffle(array) {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Generating New Timetable
function generateNewTimetable() {
    const subjects = ["LANG1", "LANG2", "SCI1", "SCI2", "ART", "SPORT"];
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    fetch(server + '/generated', { method: "DELETE" })
        .then(() => {
            let week = [];

            days.forEach(day => {
                let shuffled = Shuffle(subjects);
                let dayEntry = {
                    day: day,
                    subjects: [
                        shuffled[0],
                        shuffled[1],
                        shuffled[2],
                        "TEA BREAK",
                        shuffled[3],
                        shuffled[4],
                        "LUNCH BREAK",
                        shuffled[5]
                    ]
                };

                fetch(server + '/generated', {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dayEntry)
                });

                week.push(dayEntry);
            });

            addTimetableToPage(week);
            alert("New timetable generated!");
            
            
        });
    
        
}

function addTimetableToPage(week) {
    
    if (!week || week.length === 0) return;

    const container = document.getElementById("generatedTables");
    document.getElementById('new').innerHTML="New Generated Timetable"

    let wrapper = document.createElement("div");
    wrapper.classList.add("timetable-wrapper");

    let table = document.createElement('table');
    table.classList.add('generated-table');

    let headerRow = document.createElement('tr');
   
    headerRow.innerHTML = `
       
        <th>Day</th>
        <th>7:00 - 8:00</th>
        <th>8:00 - 9:00</th>
        <th>9:00 - 10:00</th>
        <th>10:00 - 10:30</th>
        <th>10:30 - 11:30</th>
        <th>11:30 - 12:30</th>
        <th>12:30 - 2:00</th>
        <th>2:00 - 3:00</th>
    `;
    table.appendChild(headerRow);

    week.forEach(entry => {
        let row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.day}</td>
            <td>${entry.subjects[0]}</td>
            <td>${entry.subjects[1]}</td>
            <td>${entry.subjects[2]}</td>
            <td>${entry.subjects[3]}</td>
            <td>${entry.subjects[4]}</td>
            <td>${entry.subjects[5]}</td>
            <td>${entry.subjects[6]}</td>
            <td>${entry.subjects[7]}</td>
        `;
        table.appendChild(row);
    });

    wrapper.appendChild(table);
    wrapper.appendChild(table);


let deleteBtn = document.createElement("button");
deleteBtn.innerText = "Delete";
deleteBtn.classList.add("delete-generated-btn");
deleteBtn.addEventListener("click", () => {
    wrapper.remove();
    fetch(server + '/generated', { method: "DELETE" })
        .then(() => alert("Generated timetable deleted!"));
});


wrapper.appendChild(deleteBtn);
container.appendChild(wrapper);

    container.appendChild(wrapper); 
}
function fetchGeneratedTimetables() {
    fetch(server + '/generated')
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("generatedTables");
        const weeks = groupByWeeks(data);
        weeks.forEach(week => {
            addTimetableToPage(week);
        });
    })
    .catch(err => console.error("Error fetching generated timetables:", err));
}
function groupByWeeks(data) {
    let weeks = [];
    let temp = [];

    data.forEach(entry => {
        temp.push(entry);
        if (temp.length === 5) {
            weeks.push(temp);
            temp = [];
        }
    });

    return weeks;
}
document.addEventListener("DOMContentLoaded", () => {
    fetchStudents();
    fetchGeneratedTimetables();
});


