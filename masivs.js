let masivs = [];
​function iegutPecIndeksa(i) {//getIndex(i)
  return masivs[i];
}
​
function mainitPecIndeksa(i, vertiba) {//setIndex
  masivs[i] = vertiba;
}
​
function dzestPecIndeksa(i) {//removeIndex
  masivs = masivs.splice(i, 1);//mēģina izņemt vienu elementu vai mainīt vienu elementu... masīvā vieta n vērtība
}

function print(){
    console.log(masivs);
}


function atrastVertibasIndeksu(vertiba) {
    for (let i = 0; i < masivs.length; i++) {
      if ( vertiba === masivs[i]) {
        return i;
      }
    }
    return -1;
  }



