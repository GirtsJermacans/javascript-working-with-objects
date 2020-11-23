// IIFE
(function(){
    // start
    var staff =
 []

 var rebuildList = function(){

    document.getElementById('staffTable').innerHTML = "";
staff.forEach(function(element) {
    var newStaffRow = document.createElement("tr");
    var newStaffName = document.createElement("td");
    newStaffName.innerHTML = element.name;
    var newStaffEmail = document.createElement("td");
    newStaffEmail.innerHTML = element.email;
    newStaffRow.appendChild(newStaffName);
    newStaffRow.appendChild(newStaffEmail);
    document.getElementById('staffTable').appendChild(newStaffRow);
    });
}

    if(localStorage.getItem("count") === null){
        localStorage.setItem("count", 1);
        }else{
        localStorage.setItem("count", parseInt(localStorage.getItem("count"))+1);
        }


        document.getElementById('addStaffForm').addEventListener('submit',
        function(ev){
        ev.preventDefault();
        let newStaffName = document.getElementById('staffName').value;
        let newStaffEmail= document.getElementById('staffEmail').value;
        staff.push({name: newStaffName, email: newStaffEmail});
        console.dir(staff)
        rebuildList();
        })    

    /*console.info("Hello");
    var myObject = {
        name : "Girts",
        surname : "Jermacans",
        email: "girts.jermacans@gmail.com",
        qualifications: {
            gcse: true,
            beng: false,
            ielts: true
        },
        getInfo : function(){
            return this.name + " " + this.surname;
        }
    };
    console.dir(myObject);
    console.info(myObject.qualifications.gcse);
    console.info(myObject.getInfo());
    var qualifications = [
        {
        subject : "Maths",
        grade : "A"
        },
        {
        subject : "English",
        grade : "B"
        },
        {
        subject : "French",
        grade : "C"
        },
        {
        subject : "Physics",
        grade : "B"
        }
        ];
        console.info(qualifications[1].grade);

        qualifications.forEach(function(qual) {
            console.dir(qual);
            console.info(qual.subject);
            console.info(qual.grade);
            });*/
    // end
})()