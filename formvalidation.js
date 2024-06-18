const displayMsg=(msg,idname,colorname)=>{
  document.getElementById(idname).innerHTML=msg
  document.getElementById(idname).style.color=colorname
}

const fnamevalidate = () => {
  let fname = document.getElementById('fname').value
  if (fname == "") {
      displayMsg("First Name is compulsory",'fnameMsg','red')
      return false
  }

  else if(!fname.match(/^[a-zA-z]+$/)){
    displayMsg('Invalid first name','fnameMsg','red')
    return false;
  }
  else if (fname.length < 3){
      displayMsg("First Name should be at least 3 characters",'fnameMsg','red')
      return false
  }
  else{
      displayMsg("Valid First Name",'fnameMsg','green')
      return true
  }
}
const emailvalidate = () => {
  let email = document.getElementById('email').value
  if (email == "") {
      displayMsg("Last Name is compulsory",'emailMsg','red')
      return false
  }

  else if(!email.match(/^([a-z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/)){
    displayMsg('Invalid email','emailMsg','red')
    return false;
  }
  else if (email.length < 3){
      displayMsg("Email should be at least 3 characters",'emailMsg','red')
      return false
  }
  else{
      displayMsg("Valid Last Name",'emailMsg','green')
      return true
  }
}

const lnamevalidate = () => {
  let lname = document.getElementById('lname').value
  if (lname == "") {
      displayMsg("Last Name is compulsory",'lnameMsg','red')
      return false
  }

  else if(!lname.match(/^[a-zA-z]+$/)){
    displayMsg('Invalid Last name','lnameMsg','red')
    return false;
  }
  else if (lnamename.length < 3){
      displayMsg("Last Name should be at least 3 characters",'lnameMsg','red')
      return false
  }
  else{
      displayMsg("Valid Last Name",'lnameMsg','green')
      return true
  }
}
