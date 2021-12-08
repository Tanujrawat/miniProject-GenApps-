var Lname, Fname, Country,Subject;

function readForm(){
    Fname = document.getElementById("fname").value;
    Lname = document.getElementById("lname").value;
    Country = document.getElementById("country").value;
    Subject = document.getElementById("subject").value;

    // console.log(Fname);
    // console.log(Lname);
    // console.log(Country);
    // console.log(Subject);
}

document.getElementById("submit").onclick = function()
{
    readForm();

    firebase 
    .database()
    .ref("CustomerInfo/" + Fname)
    .set(
    {
        fname :Fname,
        lname:Lname,
        country:Country,
        subject:Subject,
    }
    );
    alert("Data Inserted");
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("country").value = "";
    document.getElementById("subject").value = "";
};