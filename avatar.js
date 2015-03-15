if(typeof(myLayer)!='function'){
function myLayer (x){
//individuo l'oggetto
if(document.layers){ // browser="NN4";
lay=document.layers[x];
}
if(document.all){ // browser="IE";
lay=eval("document.all." + x);
}
if(!document.all && document.getElementById){ // browser="NN6+ or IE5+ if you're willing to dump the !document.all stuff";
lay=document.getElementById(x);
}
return lay;
}
}

//lo prendo da blogger
function myBlogAvatar(codiceCommento,autore,stile){
//scrivo lo span
//var myBlogSpan = "myBlog-" + codiceCommento;
//document.write("<span id='" + myBlogSpan + "'><i>myBlogLog...</i></span>");

//metto tutto minuscolo perchè indexOf è case sensitive

if (autore != ""){
alt="MyBlogLog: " + autore;

myBlog = "<a href=\"http://www.mybloglog.com/buzz/co_redir.php?href=" + autore + "\" rel='nofollow'><img src=\"http://pub.mybloglog.com/coiserv.php?href=" + autore + "\" alt=\"" + alt + "\" title=\"" + alt + "\" border=\"1\" class=\"myBlogAvatar\"></a>";
//myLayer(myBlogSpan).innerHTML = myBlog + myLayer(myBlogSpan).innerHTML;
//myLayer(myBlogSpan).innerHTML = myBlog;
document.write(myBlog);
}
}
