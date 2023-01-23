let Hoca = ['hoca1','hoca2','hoca3','hoca4','hoca5'];
let SinifAdiveSayisi=[['insaat muh',55],['bilgisayar muh',45],['mimarlık',65]];
let DersAdi = ['mat','fiz','geo','ing'];
let Saat= ['saat1','saat2','saat3','saat4','saat5','saat6'];
let Gun = ['gun1','gun2','gun3','gun4','gun5']
let DerslikAdiveKap = [['derslik1',56],['derslik3',66]];
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
 