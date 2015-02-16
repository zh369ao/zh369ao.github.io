// 导航栏添加 cur 类
var nav = document.getElementById("nav");
var nava = nav.getElementsByTagName("a");
var winurl = window.location.href;
nava[0].className = "cur";
for (var i=0; i<nava.length; i++){
  if (winurl.indexOf(nava[i].getAttribute("href"))!=-1){
    nava[i].className = "cur";
    nava[0].className = "";
  }
  if (winurl.indexOf("index")!=-1){
    nava[0].className = "cur";
  }
}

// 换肤

function SetCookie(name,value){
     var argv=SetCookie.arguments;
     var argc=SetCookie.arguments.length;
     var expires=(2<argc)?argv[2]:null;
     var path=(3<argc)?argv[3]:null;
     var domain=(4<argc)?argv[4]:null;
     var secure=(5<argc)?argv[5]:false;
     document.cookie=name+"="+escape(value)+((expires==null)?"":("; expires="+expires.toGMTString()))+((path==null)?"":("; path="+path))+((domain==null)?"":("; domain="+domain))+((secure==true)?"; secure":"");
}
function GetCookie(Name) {
     var search = Name + "=";
     var returnvalue = "";
     if (document.cookie.length > 0) {
           offset = document.cookie.indexOf(search);
           if (offset != -1) {      
                 offset += search.length;
                 end = document.cookie.indexOf(";", offset);                        
                 if (end == -1)
                       end = document.cookie.length;
                 returnvalue=unescape(document.cookie.substring(offset,end));
           }
     }
     return returnvalue;
}

var thisskin;
thisskin=GetCookie("nowskin");
if(thisskin!="")
     skin.href=thisskin;
else
     skin.href="/theme/pink.css";

function changecss(url){
     if(url!=""){
           skin.href=url;
           var expdate=new Date();
           expdate.setTime(expdate.getTime()+(24*60*60*1000*30));
           SetCookie("nowskin",url,expdate,"/",null,false);
     }
}

pinklink = document.getElementById("pink");
cyanlink = document.getElementById("cyan");

pinkstyle="/theme/pink.css";
cyanstyle="/theme/cyan.css";

cyanlink.onclick = function(){
    changecss(cyanstyle);
    return false;
    
}

pinklink.onclick = function(){
    changecss(pinkstyle);
    return false;
}