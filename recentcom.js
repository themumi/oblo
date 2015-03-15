// ----------------------------------------
// SHOW RECENT COMMENTS
// ----------------------------------------
// This functions takes a blogger-feed in JSON
// format and displays it.
//
// Version: 2.1
// Date:    2007-02-02
// Author:  Hans Oosting
// URL:     beautifulbeta.blogspot.com
// ----------------------------------------

function showrecentcomments(json) {
  for (var i = 0; i < numcomments; i++) {
    var entry = json.feed.entry[i];
    var alturl;

    if (i == json.feed.entry.length) break;
    for (var k = 0; k < entry.link.length; k++) {
      if (entry.link[k].rel == 'alternate') {
        alturl = entry.link[k].href;
        break;
      }
    }
   alturl = alturl.replace("#", "#comment-");
   var postlink = alturl.split("#");
   postlink = postlink[0];
   var linktext = postlink.split("/");
   linktext = linktext[5];
   linktext = linktext.split(".html");
   linktext = linktext[0];
   var posttitle = linktext.replace(/-/g," ");
   posttitle = posttitle.link(postlink);
   var commentdate = entry.published.$t;
   var cdyear = commentdate.substring(0,4);
   var cdmonth = commentdate.substring(5,7);
   var cdday = commentdate.substring(8,10);
   var monthnames = new Array();
   monthnames[1] = "Jan";
   monthnames[2] = "Feb";
   monthnames[3] = "Mar";
   monthnames[4] = "Apr";
   monthnames[5] = "May";
   monthnames[6] = "Jun";
   monthnames[7] = "Jul";
   monthnames[8] = "Aug";
   monthnames[9] = "Sep";
   monthnames[10] = "Oct";
   monthnames[11] = "Nov";
   monthnames[12] = "Dec";
   if ("content" in entry) {
     var comment = entry.content.$t;}
   else
   if ("summary" in entry) {
     var comment = entry.summary.$t;}
   else var comment = "";
   var re = /<\S[^>]*>/g; 
   comment = comment.replace(re, "");
   if (!standardstyling) document.write('<div class="bbrecpost">');
   if (showcommentdate == false) document.write('On ' + monthnames[parseInt(cdmonth,10)] + ' ' + cdday + ' ');
   document.write('<a href="' + alturl + '" rel="nofollow">' + entry.author[0].name.$t + '</a>');
   if (standardstyling) document.write(' wrote: ');
   if (standardstyling) document.write('<br/>');
   if (comment.length < numchars) {
         if (standardstyling) document.write('<i>');
         document.write(comment);
         if (standardstyling) document.write('</i>');}
   else
        { 
         if (standardstyling) document.write('<i>');
         comment = comment.substring(0, numchars);
         var quoteEnd = comment.lastIndexOf(" ");
         comment = comment.substring(0, quoteEnd);
         document.write(comment + '...<a href="' + alturl + '" rel="nofollow">(more)</a>');
         if (standardstyling) document.write('</i>');}
   if (standardstyling) document.write('<br/>');
   if (!standardstyling) document.write('</div>');
   if (standardstyling) document.write('<br/>');
  }
if (!standardstyling) document.write('<div class="bbwidgetfooter">');
if (standardstyling) document.write('<br/>');
}
