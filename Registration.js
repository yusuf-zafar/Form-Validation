let flag = false
let names = document.getElementById('name')
let age = document.getElementById('age')
let city = document.getElementById('city')
let password = document.getElementById('password')
let confirmpassword = document.getElementById('confirmpassword')
let email = document.getElementById('email')
let checkbox = document.getElementById('checkbx')

function validation(){
if(names.value.length<3){
    document.getElementById('nameerror').innerHTML = 'name should be atleast 3 letters'
    flag = false
}
if(names.value==''){
    document.getElementById('nameerror').innerHTML = 'name cannot be empty'
    flag = false
}
if(names.value.length>=3){
    document.getElementById('nameerror').innerHTML = ''
}
if(age.value<12){
    document.getElementById('ageerror').innerHTML = 'your age should be 12 or above'
    flag = false
}
if(age.value=='' ){
    document.getElementById('ageerror').innerHTML = 'age cannot be empty'
    flag = false
}
if(age.value>=12){
    document.getElementById('ageerror').innerHTML = ''
}
if(city.value.length<3){
    document.getElementById('cityerror').innerHTML = 'enter a valid city name'
    flag = false
}
if(city.value.length>=3){
    document.getElementById('cityerror').innerHTML = ''
}
if(email.value.length<=0){
    document.getElementById('emailerror').innerHTML = 'enter a valid email id'
}
if(email.value.length>0){
    document.getElementById('emailerror').innerHTML = ''
}
if(password.value.length == '' && confirmpassword.value.length == ''){
    document.getElementById('passworderror').innerHTML = 'password cannot be empty'
    flag = false
}
if(password.value !== confirmpassword.value){
    document.getElementById('passworderror').innerHTML = 'passwords do not match'
    flag = false
}
if(password.value.length !='' && confirmpassword.value.length !='' && password.value === confirmpassword.value){
    document.getElementById('passworderror').innerHTML = ''

}
if(names.value.length>=3 && age.value>=12 && password.value.length>0 && confirmpassword.value.length>0 && password.value === confirmpassword.value ){
    flag = true
}
if(checkbox.checked == false){
    document.getElementById('checkerror').innerHTML = 'You must accept Terms and Conditions before proceeding'
    flag = false;
    }
if(checkbox.checked == true){
document.getElementById('checkerror').innerHTML = ''
}

return flag === true
}

function show(){
    alert('Name: '+names.value+', Age: '+age.value+', City: '+city.value+', Email: '+email.value+', Password: '+password.value)
}