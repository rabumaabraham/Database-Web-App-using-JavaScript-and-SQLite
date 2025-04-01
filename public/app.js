document.addEventListener("DOMContentLoaded", () => {
    loadStudents();
});

async function loadStudents() {
    let response = await fetch("/students");
    let students = await response.json();
    let table = document.getElementById("studentTable");
    table.innerHTML = "";
    students.forEach(student => {
        let row = `<tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
        </tr>`;
        table.innerHTML += row;
    });
}

async function addStudent() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let grade = document.getElementById("grade").value;

    await fetch("/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, age, grade })
    });

    loadStudents();
}
