function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (names) {var developers = names
pug_html = pug_html + "\u003Ch1 class=\"cover-heading\"\u003EAbout\u003C\u002Fh1\u003E\u003Cp class=\"lead\"\u003EAcyclic is a very interesting game, but we still have to do a lot of work to make it work.Now you can see only this sample text and some other pages in this promo site.\u003C\u002Fp\u003E\u003Cdiv classs=\"authors\"\u003E\u003Cul\u003E";
// iterate developers
;(function(){
  var $$obj = developers;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var item = $$obj[pug_index0];
pug_html = pug_html + "\u003Cli\u003E" + (pug_escape(null == (pug_interp = item) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv style=\"margin-top: 10px;\"\u003E\u003Ch3\u003Eback\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";}.call(this,"names" in locals_for_with?locals_for_with.names:typeof names!=="undefined"?names:undefined));;return pug_html;}