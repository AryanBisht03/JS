// creating objects in js
let student_details={
    name:"Aryan",
    age:23,
    student_id:20011326,
    subjects:["JAVA","C++","C","C#"],
    show_details:function()
    {
          console.table([student_details.name,student_details.age,student_details.student_id,student_details.subjects]);
    }
}
console.table([student_details.name,student_details.age,student_details.student_id,student_details.subjects])
student_details.show_details()