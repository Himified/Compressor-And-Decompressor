document.getElementById('copy').addEventListener("click",function(){
		let copyTextarea = document.querySelector('#comment');
        copyTextarea.focus();
        copyTextarea.select();
        try {
          let successful = document.execCommand('copy');
          let msg = successful ? 'successful' : 'unsuccessful';
          if(msg==='successful'){
          	    document.getElementById('copy').innerHTML="copied!";
          	    setTimeout(function () {
				document.getElementById('copy').innerHTML="COPY";
				}, 2000);
          }
		} catch(err) {
          alert('Unable to copy');
        }
});

function fun() {
  var selectedvalue= document.getElementById("drop").value;
  if(selectedvalue=="one")
  {
  var text1 = document.getElementById('comment').value;
  var text3=text1;
  text3=text3.replace(/\t/ig, "").replace(/\n/ig, "").replace(/\s\s+/ig, "")/*.replace(/<!--.*-->/ig,"").replace(/[/][*](.*)[*][/]/ig,"")*/;
  document.getElementById('comment').value=text3;
  document.getElementById('comment').value=text3;
  }
  else if(selectedvalue="two")
  {
var text1 = document.getElementById('comment').value;
var text3=text1.replace(/,/ig,",\n\t").replace(/{/g,"{\n\t").replace(/}/g,"\n\t}").replace(/}}/g,"}\n}");
document.getElementById('comment').value=text3;
  }
  // body...
}

//document.getElementById('buts').addEventListener("click",function(){
  

//});

document.getElementById('reset').addEventListener("click",function(){
  document.getElementById('comment').value="";
});

