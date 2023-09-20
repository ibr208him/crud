var courseName=document.getElementById('courseName');
var courseCategory=document.getElementById('courseCategory');
var coursePrice=document.getElementById('coursePrice');
var courseDescription=document.getElementById('courseDescription');
var courseCapacity=document.getElementById('courseCapacity');
console.log(courseDescription.value);
var courses=[];
var addCourse=document.getElementById('click');
addCourse.addEventListener('click',function(e) {
    e.preventDefault();
    addCourse();
    displayData();
    reset();
});



var addCourse=function(){
    var course={
        name:courseName.value,
        category:courseCategory.value,
        price:coursePrice.value,
        descreption:courseDescription.value,
        capacity:courseCapacity.value,


    }
    courses.push(course);
    console.log(courses);
    
}

var reset=function(){
    var inputs = document.querySelectorAll('.inputs');
for (var i=0; i<inputs.length; i++) {
    inputs[i].value = '';
}
}

var displayData=function(){
    var data='';
    for (var i=0;i<courses.length;i++) {
        data=data+`
        <tr>
        <th>${i}</th>
                        <th>${courses[i].name}</th>
                        <th>${courses[i].category}</th>
                        <th>${courses[i].price}</th>
                        <th>${courses[i].descreption}</th>
                        <th>${courses[i].capacity}</th>
                        <th><button class="btn btn-outline-info mt-3" >update</button></th>
                        <th><button onclick="deleteCourse(${i})"  class="btn btn-outline-danger mt-3" >delete</button></th>

                        </tr>
        `

    }
    document.getElementById('data').innerHTML=data;
}

var deleteCourse=function(i){
    console.log(i);
    courses.splice(i,1);
    displayData();
}

var deleteAllbtn=document.getElementById('deleteBtn');
deleteAllbtn.addEventListener('click',function(){
    deleteAll();
})
var deleteAll=function(){
    courses=[];
    displayData();
}