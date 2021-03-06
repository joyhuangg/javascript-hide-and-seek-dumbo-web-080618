
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById("nested").querySelector("div.target");
}

function increaseRankBy(n){
  const lis = document.getElementById("app").querySelectorAll("ul.ranked-list li");
  for (let i = 0; i < lis.length; i++){
    lis[i].innerHTML = n + parseInt(lis[i].innerHTML);
  }
}

function deepestChild(){
  return document.querySelector('div#grand-node div div div div')
}
