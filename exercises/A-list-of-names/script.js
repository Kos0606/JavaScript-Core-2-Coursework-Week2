function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");

for(let x of arrayOfPeople) {
  let addName = document.createElement("h1");
  addName.innerText = `${x.name}`;
  content.appendChild(addName);
  let addJob = document.createElement("h2");
  addJob.innerText = `${x.job}`;
  content.appendChild(addJob);
}
}
let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
