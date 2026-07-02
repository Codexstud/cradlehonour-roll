// =======================================
// E-HONOUR ROLL APP
// =======================================

// Get page elements
const homePage = document.getElementById("homePage");
const classPage = document.getElementById("classPage");
const classTitle = document.getElementById("classTitle");
const studentContainer = document.getElementById("studentContainer");
const backBtn = document.getElementById("backBtn");
const classCards = document.querySelectorAll(".card");

// ===========================
// STUDENT DATA
// ===========================

const students = [

    // YEAR ONE
    {
        class: "Year One",
        name: "John David",
        average: 98,
        position: "1st",
        photo: "images/students/student1.jpg"
    },
    {
        class: "Year One",
        name: "Mary Grace",
        average: 97,
        position: "2nd",
        photo: "images/students/student2.jpg"
    },
    {
        class: "Year One",
        name: "Daniel James",
        average: 95,
        position: "3rd",
        photo: "images/students/student3.jpg"
    },

    // YEAR TWO
    {
        class: "Year Two",
        name: "Sarah Johnson",
        average: 99,
        position: "1st",
        photo: "images/students/student4.jpg"
    },
    {
        class: "Year Two",
        name: "Michael Peter",
        average: 96,
        position: "2nd",
        photo: "images/students/student5.jpg"
    },
    {
        class: "Year Two",
        name: "Grace Emmanuel",
        average: 94,
        position: "3rd",
        photo: "images/students/student6.jpg"
    },

    // YEAR THREE
    {
        class: "Year Three",
        name: "Esther Williams",
        average: 98,
        position: "1st",
        photo: "images/students/student7.jpg"
    },
    {
        class: "Year Three",
        name: "Joshua Daniel",
        average: 96,
        position: "2nd",
        photo: "images/students/student8.jpg"
    },
    {
        class: "Year Three",
        name: "Mercy Collins",
        average: 95,
        position: "3rd",
        photo: "images/students/student9.jpg"
    },

    // YEAR FOUR
    {
        class: "Year Four",
        name: "Samuel Bright",
        average: 99,
        position: "1st",
        photo: "images/students/student10.jpg"
    },
    {
        class: "Year Four",
        name: "Faith Okoro",
        average: 97,
        position: "2nd",
        photo: "images/students/student11.jpg"
    },
    {
        class: "Year Four",
        name: "David Moses",
        average: 95,
        position: "3rd",
        photo: "images/students/student12.jpg"
    },

    // YEAR FIVE
    {
        class: "Year Five",
        name: "Sophia James",
        average: 99,
        position: "1st",
        photo: "images/students/student13.jpg"
    },
    {
        class: "Year Five",
        name: "Nathaniel King",
        average: 97,
        position: "2nd",
        photo: "images/students/student14.jpg"
    },
    {
        class: "Year Five",
        name: "Peace Johnson",
        average: 95,
        position: "3rd",
        photo: "images/students/student15.jpg"
    },

    // YEAR SIX
    {
        class: "Year Six",
        name: "Deborah Adams",
        average: 100,
        position: "1st",
        photo: "images/students/student16.jpg"
    },
    {
        class: "Year Six",
        name: "Emmanuel Paul",
        average: 98,
        position: "2nd",
        photo: "images/students/student17.jpg"
    },
    {
        class: "Year Six",
        name: "Victor Simon",
        average: 96,
        position: "3rd",
        photo: "images/students/student18.jpg"
    }

];

// ===========================
// CLASS CARD CLICK
// ===========================

classCards.forEach(card => {

    card.addEventListener("click", function (e) {

        e.preventDefault();

        const selectedClass = this.dataset.class;

        showClass(selectedClass);

    });

});

// ===========================
// SHOW CLASS
// ===========================

function showClass(className) {

    homePage.style.display = "none";
    classPage.style.display = "block";

    classTitle.textContent = className + " Honour Roll";

    displayStudents(className);

}

// ===========================
// BACK BUTTON
// ===========================

backBtn.addEventListener("click", function () {

    classPage.style.display = "none";
    homePage.style.display = "block";

});

// ===========================
// DISPLAY STUDENTS
// ===========================

function displayStudents(className) {

    studentContainer.innerHTML = "";

    const filteredStudents = students.filter(student => student.class === className);

    if (filteredStudents.length === 0) {

        studentContainer.innerHTML = `
            <div class="no-students">
                No students available for ${className}.
            </div>
        `;

        return;

    }

    filteredStudents.forEach(student => {

        let badge = "blue";

        if (student.position === "1st") badge = "gold";
        else if (student.position === "2nd") badge = "silver";
        else if (student.position === "3rd") badge = "bronze";

        const card = document.createElement("div");

        card.className = "student-card";

        card.innerHTML = `
            <img src="${student.photo}" alt="${student.name}">

            <h3>${student.name}</h3>

            <div class="average">${student.average}%</div>

            <span class="position ${badge}">
                ${student.position}
            </span>
        `;

        studentContainer.appendChild(card);

    });

}