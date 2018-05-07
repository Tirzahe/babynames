function genName() {
    var lName = document.getElementById('lname').value;
    if (!lName) {
        alert("Please, include last name for full effect.\nIf you really don't know my last name use a space or ellipsis(...) to not see this message.");
    }
    var gender = getGender();
    var first2Names = genRandName(gender);
    document.getElementById('given-name').innerText = first2Names + ' ' + lName;
}

function getGender(){
    var girlChecked = document.getElementById('female').checked;
    if(girlChecked) return 'girl';
    var boyChecked = document.getElementById('male').checked;
    if(boyChecked) return 'boy';
    return 'neutral';
}

function genRandName(gender){
    var names;
    if (gender === 'girl') {
        names = girlNames;
    }
    else if (gender === 'boy'){
        names = boyNames;
    }
    else {
        names = neutralNames;
    }

    var firstName = randElem(names);
    var midName = randFilteredElem(names,firstName);
    return firstName + ' ' + midName;
}

function randFilteredElem(arr,filter){
    var randFiltElem = randElem(arr);
    while (randFiltElem === filter) {
        randFiltElem = randElem(arr);
    }
    return randFiltElem;
}

function randElem(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}
function changeBgColor(color){
   document.body.style.backgroundColor = color;
}
function changeGender(gender){
    if(gender === 'male'){
        changeBgColor('#527ba1');
        document.getElementById('given-name').className = 'male';
    }
    else if(gender === 'female'){
        changeBgColor('#E4A3D4');
        document.getElementById('given-name').className = 'female';
    }
    else
    {
        changeBgColor('#846D74');
        document.getElementById('given-name').className = 'neutral';
    }
}