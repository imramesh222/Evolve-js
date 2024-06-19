
const displayMsg = (msg, idname, colorname) => {
    document.getElementById(idname).innerHTML = msg;
    document.getElementById(idname).style.color = colorname;
};

const fnamevalidate = () => {
    let fname = document.getElementById('fname').value;
    if (fname === "") {
        displayMsg("First Name is compulsory", 'fnameMsg', 'red');
        return false;
    } else if (!fname.match(/^[a-zA-Z]+$/)) {
        displayMsg('Invalid first name', 'fnameMsg', 'red');
        return false;
    } else if (fname.length < 3) {
        displayMsg("First Name should be at least 3 characters", 'fnameMsg', 'red');
        return false;
    } else {
        displayMsg("Valid First Name", 'fnameMsg', 'green');
        return true;
    }
};

const lnamevalidate = () => {
    let lname = document.getElementById('lname').value;
    if (lname === "") {
        displayMsg("Last Name is compulsory", 'lnameMsg', 'red');
        return false;
    } else if (!lname.match(/^[a-zA-Z]+$/)) {
        displayMsg('Invalid Last name', 'lnameMsg', 'red');
        return false;
    } else if (lname.length < 3) {
        displayMsg("Last Name should be at least 3 characters", 'lnameMsg', 'red');
        return false;
    } else {
        displayMsg("Valid Last Name", 'lnameMsg', 'green');
        return true;
    }
};

const emailvalidate = () => {
    let email = document.getElementById('email').value;
    if (email === "") {
        displayMsg("Email is compulsory", 'emailMsg', 'red');
        return false;
    } else if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        displayMsg('Invalid email', 'emailMsg', 'red');
        return false;
    } else if (email.length < 3) {
        displayMsg("Email should be at least 3 characters", 'emailMsg', 'red');
        return false;
    } else {
        displayMsg("Valid Email", 'emailMsg', 'green');
        return true;
    }
};

const pwdvalidate = () => {
    let pwd = document.getElementById('pwd').value;
    if (pwd === "") {
        displayMsg("Password is compulsory", "pwdMsg", "red");
        return false;
    } else if (!pwd.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)) {
        displayMsg("Invalid Password", "pwdMsg", "red");
        return false;
    } else {
        displayMsg("Valid Password", "pwdMsg", "green");
        return true;
    }
};

const cpwdvalidate = () => {
    let pwd = document.getElementById('pwd').value;
    let cpwd = document.getElementById('cpwd').value;
    if (pwd === "") {
        displayMsg("Password is compulsory", "pwdMsg", "red");
        return false;
    } else if (cpwd !== pwd) {
        displayMsg("Password must be the same", "cpwdMsg", "red");
        return false;
    } else {
        displayMsg("Password matched", "cpwdMsg", "green");
        return true;
    }
};

const validForm = () => {
    if (fnamevalidate() && lnamevalidate() && emailvalidate() && pwdvalidate() && cpwdvalidate()) {
        return true;
    } else {
        return false;
    }
};
