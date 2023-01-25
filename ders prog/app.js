let Hoca = ['hoca1','hoca2','hoca3','hoca4','hoca5'];
let SinifAdiveSayisi=[['insaat muh',55],['bilgisayar muh',45],['mimarlık',65]];
let DersAdi = ['mat','fiz','geo','ing'];
let Saat= ['saat1','saat2','saat3','saat4','saat5','saat6'];
let Gun = ['gun1','gun2','gun3','gun4','gun5']
let DerslikAdiveKap = [['derslik1',56let Hoca = ['hoca1','hoca2','hoca3','hoca4','hoca5'];
let SinifAdiveSayisi=[['insaat muh',55],['bilgisayar muh',45],['mimarlık',65]];
let DersAdi = ['mat','fiz','geo','ing'];
let Saat= ['saat1','saat2','saat3','saat4','saat5','saat6','saat7'];
let Gun = ['gun1','gun2','gun3','gun4','gun5']
let DerslikAdiveKap = [['derslik1',56],['derslik3',66]];
let SaatDerslik=[];
let Aktivite = [];
let Program = [];
let tekProgram=[];
let EAktivite = [];
let ESaatDerslik=[];
var sd=0;
var ak=0;  
var p=0;

//saat derslik dizisi
for (let i=0;i<DerslikAdiveKap.length;i++){
  for(let j=0;j<Saat.length;j++){
   for(let k=0;k<Gun.length;k++){
    SaatDerslik[sd]=[DerslikAdiveKap[i],Saat[j],Gun[k]];
    sd+=1;
    }
  }
}

//aktivite dizisi
for(let i=0;i<Hoca.length;i++){
  for(let j=0;j<SinifAdiveSayisi.length;j++){
    for(let k=0;k<DersAdi.length;k++){
Aktivite[ak]=[Hoca[i],SinifAdiveSayisi[j],DersAdi[k]];
ak+=1;
    }
  }
}


console.log(ProgramFonk(Aktivite,SaatDerslik));
console.log(tekDizi(Program));


//program dizisi
function ProgramFonk(x,y){
  for (let i = 0; i < x.length; i++) {
    EAktivite[i] =x [i][1][1];
  }
  for (let j = 0; j < y.length; j++) {
      
    ESaatDerslik[j]=y[j][0][1];
  }
  
  
  let i=59;
  while(x.length!==0)
  { 
    enYakin(ESaatDerslik,EAktivite[i],i,x,y);
    --i;
}
 
//   for (let i = Program.length - 1; i >= 0; i--) {
//     if (Program[i][0]=== undefined) {
//         Program.splice(i, 1);
//     }
// }
  return Program;
}
function enYakin(arr, target,j,x,y) {
  let closest  ;
  let closestDiff =120;
  for (let i = 0; i < arr.length; i++) {
      let diff = Math.abs(arr[i] - target);
      if ((diff < closestDiff)&&(target<=arr[i])) {
          closest = i;
          closestDiff = diff;
          
      }

  }
  Program[p]=[x[j],y[closest]];
      p++;
      x.splice(j, 1);
      y.splice(closest, 1);
      ESaatDerslik.splice(closest, 1);
      EAktivite.splice(j, 1);
  
  
}
function tekDizi(dizi){
  var arrayString = dizi.toString();
  console.log(arrayString);
  
  
  // Convert the string to an array using the .split() method
  var array = arrayString.split(",");
  
  // Define the dimensions of the multi-dimensional array
  var numRows = dizi.length;
  var numCols = 8;
  
  // Create an empty multi-dimensional array
  var multiArray = new Array(numRows);
  for (var i = 0; i < numRows; i++) {
      multiArray[i] = new Array(numCols);
  }
  
  // Fill the multi-dimensional array with data from the 1D array
  var index = 0;
  for (var i = 0; i < numRows; i++) {
      for (var j = 0; j < numCols; j++) {
          multiArray[i][j] = array[index];
          index++;
      }
  }
  console.log(multiArray);
  tekProgram= multiArray;
}


//tablo
function makeTable(myarray){

// Create an empty table
var table = document.createElement("table");

// Add the table headers
var header = document.createElement("tr");
var th1 = document.createElement("th");
th1.innerHTML = "HOCA";
header.appendChild(th1);
var th2 = document.createElement("th");
th2.innerHTML = "BÖLÜM";
header.appendChild(th2);
var th3 = document.createElement("th");
th3.innerHTML = "SAYI";
header.appendChild(th3);
var th4 = document.createElement("th");
th4.innerHTML = "DERS";
header.appendChild(th4);
var th5 = document.createElement("th");
th5.innerHTML = "DERSLİK";
header.appendChild(th5);
var th6 = document.createElement("th");
th6.innerHTML = "KAPASİTE";
header.appendChild(th6);
var th7 = document.createElement("th");
th7.innerHTML = "SAAT";
header.appendChild(th7);
var th8 = document.createElement("th");
th8.innerHTML = "GÜN";
header.appendChild(th8);
table.appendChild(header);

// Add the table rows
for (var i = 0; i < myarray.length; i++) {
var row = document.createElement("tr");
for (var j = 0; j < 8; j++) {
var td = document.createElement("td");
td.innerHTML = myarray[i][j];
row.appendChild(td);
}
table.appendChild(row);
}

// Append the table to the HTML body
document.body.appendChild(table);

}
 ],['derslik3',66]];
let SaatDerslik=[];
let Aktivite = [];
let Program = [];
let EAktivite = [];
let ESaatDerslik=[];
var sd=0;
var ak=0;  
var p=0;

//saat derslik dizisi
for (let i=0;i<DerslikAdiveKap.length;i++){
  for(let j=0;j<Saat.length;j++){
   for(let k=0;k<Gun.length;k++){
    SaatDerslik[sd]=[DerslikAdiveKap[i],Saat[j],Gun[k]];
    sd+=1;
    }
  }
}

//aktivite dizisi
for(let i=0;i<Hoca.length;i++){
  for(let j=0;j<SinifAdiveSayisi.length;j++){
    for(let k=0;k<DersAdi.length;k++){
Aktivite[ak]=[Hoca[i],SinifAdiveSayisi[j],DersAdi[k]];
ak+=1;
    }
  }
}


console.log(ProgramFonk(Aktivite,SaatDerslik));


//program dizisi
function ProgramFonk(x,y){
  for (let i = 0; i < x.length; i++) {
    EAktivite[i] =x [i][1][1];
  }
  for (let j = 0; j < y.length; j++) {
      
    ESaatDerslik[j]=y[j][0][1];
  }
  
  console.log(EAktivite);
  console.log(ESaatDerslik);
  let i=59;
  while(x.length!==0)
  { 
    enYakin(ESaatDerslik,EAktivite[i],i,x,y);
    --i;
}
 
//   for (let i = Program.length - 1; i >= 0; i--) {
//     if (Program[i][0]=== undefined) {
//         Program.splice(i, 1);
//     }
// }
  return Program;
}
function enYakin(arr, target,j,x,y) {
  let closest  ;
  let closestDiff =120;
  for (let i = 0; i < arr.length; i++) {
      let diff = Math.abs(arr[i] - target);
      if ((diff < closestDiff)&&(target<=arr[i])) {
          closest = i;
          closestDiff = diff;
          
      }

  }
  Program[p]=[x[j],y[closest]];
      p++;
      x.splice(j, 1);
      y.splice(closest, 1);
      ESaatDerslik.splice(closest, 1);
      EAktivite.splice(j, 1);
  
  
}

//tablo
function makeTable(myarray){

  var result 
  for(var i =0;i<myarray.length;i++){
    result +="</tr>";
    for(var j =0; j<myarray[i].length;j++){
      result +="<td>"+myarray[i][j]+"/<td>";}
      result +="/<tr>";}
      
     
      document.getElementById("tablo").innerHTML=result;
}
 
