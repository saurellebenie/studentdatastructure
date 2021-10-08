let student={
    Name:"name",
    age: 12,
    classe: "niveau 1",
    average: 14,
};





//ata structure to hold a not just one student but a list of students
let StudentData=[
    student1={
        Name:"benny",
        age: 20,
        classe:"niveau 1",
        average:15,
    },

    student2={
        Name:"sosso",
        age: 21,
        classe: "niveau 1",
        average: 12,
    },
    student3={
        Name:"june",
        age: 21,
        classe: "niveau 1",
        average: 13,
    },
    student4={
        Name:"mathys",
        age: 21,
        classe: "niveau 1",
        average: 10,
    },
    student5={
        Name:"khloe",
        age: 19,
        classe: "niveau 1",
        average: 5,
    },
    student6={
        Name:"gerry",
        age: 23,
        classe: "niveau 1",
        average: 11,
    },
    student7={
        Name:"noel",
        age: 28,
        classe: "niveau 1",
        average: 19,
    },
    student8={
        Name:"greg",
        age: 23,
        classe: "niveau 1",
        average: 8,
    },
    student9={
        Name:"queen",
        age: 23,
        classe: "niveau 1",
        average: 7,
    },
    student10={
        Name:"robert",
        age: 23,
        classe: "niveau 1",
        average: 9,
    }
]


//function qui class par ordre de merite
StudentData.sort((a,b)=> b.average-a.average);
/*StudentData.forEach((e)=>{
    console.log(`name=${e.Name} age=${e.age} classe=${e.classe}, average=${e.average}`);
})
*/
for(let i=0;i<StudentData.length;i++){
    console.log(`student: ${i} |`, StudentData[i]);
}
  

