let id = "nu";
// localStorage.clear();
selectData();
function manageData() {
  document.getElementById("msg").innerHTML = "";
  let name = document.getElementById("name").value;
  // console.log(name);
  if (name.trim() == "") {
    document.getElementById("msg").innerHTML = "please enter your name";
  } else {
    if (id == "nu") {
      let arr = getcrud();
      if (arr == null) {
        let data = [name];
        localStorage.setItem("crud", JSON.stringify(data));
      } else {
        arr.push(name);
        setData(arr);
      }
      document.getElementById("msg").innerHTML = "Data added";

     
    } 
    else {
        let arr = getcrud();
        // alert(id);
        arr[id] = name;
        setData(arr);
        document.getElementById("msg").innerHTML = "Data edited";
        // alert("chaudhary shabh");
     
    }
    document.getElementById("name").value = "";

    selectData();
  }
}
// fetching data
function selectData() {
  let arr = getcrud();
  if (arr != null) {
    let row = "";
    let sno = 1;
    for (let k in arr) {
      row = row + `<tr><td>${sno}</td><td>${arr[k]}</td><td> <a href=  "javascript:void(0)" onclick="editData(${k})">edit</a> &nbsp; <a href="javascript:void(0)" onclick="deleteData(${k})">delete</a></td></tr>`;
      sno++;
    }
    document.getElementById("tablebody").innerHTML = row;
  }
}

function editData(val) {
    id = val;
  let arr = getcrud();
  document.getElementById('name').value = arr[val];


  
}

function deleteData(val) {
  let arr = getcrud();
  arr.splice(val,1);
  setData(arr);
  selectData();

}
function getcrud(){
  let arr = JSON.parse(localStorage.getItem("crud"));
return arr;
}

function setData(arr){
    localStorage.setItem("crud", JSON.stringify(arr));

}
