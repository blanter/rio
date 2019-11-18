/* THIS CODE CREATED BY WWW.IDBLANTER.COM (RHINOKAGE RIO) */
$(document).on('click','#add-list1', function(){
  var $btn = $(this);
  var count = ($btn.data("click_count") || 0) + 1;
  $btn.data("click_count", count);
  var text = $('#results code').text();
    if (count == 1){
        var new_text = text.replace(/-download1-/g,'\n<a href="-linkdownload1-" title="Download" target="_blank">-titledownload1-</a>');
        $('.tambah-opsi1').append('<input id="formbtndown1" placeholder="Button Name" value="" type="text"/><input id="formdown1" placeholder="Download Link" value="" type="text"/>');
    }
    else if (count == 2){
        var new_text = text.replace(/-download2-/g,'\n<a href="-linkdownload2-" title="Download" target="_blank">-titledownload2-</a>');
        $('.tambah-opsi1').append('<input id="formbtndown2" placeholder="Button Name" value="" type="text"/><input id="formdown2" placeholder="Download Link" value="" type="text"/>');
    }
    else if (count == 3){
        var new_text = text.replace(/-download3-/g,'\n<a href="-linkdownload3-" title="Download" target="_blank">-titledownload3-</a>');
        $('.tambah-opsi1').append('<input id="formbtndown3" placeholder="Button Name" value="" type="text"/><input id="formdown3" placeholder="Download Link" value="" type="text"/>');
    }
    else if (count == 4){
        var new_text = text.replace(/-download4-/g,'\n<a href="-linkdownload4-" title="Download" target="_blank">-titledownload4-</a>');
        $('.tambah-opsi1').append('<input id="formbtndown4" placeholder="Button Name" value="" type="text"/><input id="formdown4" placeholder="Download Link" value="" type="text"/>');
    }
    else if (count == 5){
        var new_text = text.replace(/-download5-/g,'\n<a href="-linkdownload5-" title="Download" target="_blank">-titledownload5-</a>');
        $('.tambah-opsi1').append('<input id="formbtndown5" placeholder="Button Name" value="" type="text"/><input id="formdown5" placeholder="Download Link" value="" type="text"/>');
    }
    $('#results code').text(new_text);
});

$(document).on('click','#add-list2', function(){
    var $btn = $(this);
    var count = ($btn.data("click_count") || 0) + 1;
    $btn.data("click_count", count);
    var text = $('#results code').text();
      if (count == 1){
          var new_text = text
          .replace(/-server2-/g,'\n<a id="server2" href="javascript:void" title="Watch Server">-getserver2-</a>')
          .replace(/-varserver2-/g,'\nvar server2 = "-formvideos2-";$("#server2").click(function(){$("#watch-server").attr("src",server2)});');
          $('.tambah-opsi2').append('<div class="flex-wrap"><input id="formserver2" placeholder="Watch Server" value="" type="text"/><input id="formvideos2" placeholder="Videos Iframe" value="" type="text"/></div>');
      }
      else if (count == 2){
        var new_text = text
        .replace(/-server3-/g,'\n<a id="server3" href="javascript:void" title="Watch Server">-getserver3-</a>')
        .replace(/-varserver3-/g,'\nvar server3 = "-formvideos3-";$("#server3").click(function(){$("#watch-server").attr("src",server3)});');
          $('.tambah-opsi2').append('<div class="flex-wrap"><input id="formserver3" placeholder="Watch Server" value="" type="text"/><input id="formvideos3" placeholder="Videos Iframe" value="" type="text"/></div>');
      }
      else if (count == 3){
        var new_text = text
        .replace(/-server4-/g,'\n<a id="server4" href="javascript:void" title="Watch Server">-getserver4-</a>')
        .replace(/-varserver4-/g,'\nvar server4 = "-formvideos4-";$("#server4").click(function(){$("#watch-server").attr("src",server4)});');
          $('.tambah-opsi2').append('<div class="flex-wrap"><input id="formserver4" placeholder="Watch Server" value="" type="text"/><input id="formvideos4" placeholder="Videos Iframe" value="" type="text"/></div>');
      }
      else if (count == 4){
        var new_text = text
        .replace(/-server5-/g,'\n<a id="server5" href="javascript:void" title="Watch Server">-getserver5-</a>')
        .replace(/-varserver5-/g,'\nvar server5 = "-formvideos5-";$("#server5").click(function(){$("#watch-server").attr("src",server5)});');
          $('.tambah-opsi2').append('<div class="flex-wrap"><input id="formserver5" placeholder="Watch Server" value="" type="text"/><input id="formvideos5" placeholder="Videos Iframe" value="" type="text"/></div>');
      }
      else if (count == 5){
        var new_text = text
        .replace(/-server6-/g,'\n<a id="server6" href="javascript:void" title="Watch Server">-getserver6-</a>')
        .replace(/-varserver6-/g,'\nvar server6 = "-formvideos6-";$("#server6").click(function(){$("#watch-server").attr("src",server6)});');
          $('.tambah-opsi2').append('<div class="flex-wrap"><input id="formserver6" placeholder="Watch Server" value="" type="text"/><input id="formvideos6" placeholder="Videos Iframe" value="" type="text"/></div>');
      }
      $('#results code').text(new_text);
  });

$(document).on('click','#request-code', function(){
var text = $('#results code').text();

var the_title = $('#formtitle').val();
var the_images = $('#formimage').val();

var title_img = $('#formbtndown').val();
var title_img1 = $('#formbtndown1').val();
var title_img2 = $('#formbtndown2').val();
var title_img3 = $('#formbtndown3').val();
var title_img4 = $('#formbtndown4').val();
var title_img5 = $('#formbtndown5').val();

var link_img = $('#formdown').val();
var link_img1 = $('#formdown1').val();
var link_img2 = $('#formdown2').val();
var link_img3 = $('#formdown3').val();
var link_img4 = $('#formdown4').val();
var link_img5 = $('#formdown5').val();

var server_1 = $('#formserver1').val();
var server_2 = $('#formserver2').val();
var server_3 = $('#formserver3').val();
var server_4 = $('#formserver4').val();
var server_5 = $('#formserver5').val();
var server_6 = $('#formserver6').val();

var videos_1 = $('#formvideos1').val();
var videos_2 = $('#formvideos2').val();
var videos_3 = $('#formvideos3').val();
var videos_4 = $('#formvideos4').val();
var videos_5 = $('#formvideos5').val();
var videos_6 = $('#formvideos6').val();

var rating = $('#xrating').val();
var country = $('#xcountry').val();
var status = $('#xstatus').val();
var language = $('#xlanguage').val();
var timing = $('#xtiming').val();
var age = $('#xage').val();
var episode = $('#xepisode').val();
var year = $('#xyear').val();
var resolution = $('#xresolution').val();

var kontendesc = document.getElementById("formstory").value;

var replaced = text
.replace(/-thisjudul-/g, the_title)
.replace(/-imagelink-/g, the_images)

.replace(/-rating-/g, rating)
.replace(/-country-/g, country)
.replace(/-status-/g, status)
.replace(/-language-/g, language)
.replace(/-timing-/g, timing)
.replace(/-age-/g, age)
.replace(/-episode-/g, episode)
.replace(/-year-/g, year)
.replace(/-resolution-/g, resolution)

.replace(/-linkdownload-/g, link_img)
.replace(/-linkdownload1-/g, link_img1)
.replace(/-linkdownload2-/g, link_img2)
.replace(/-linkdownload3-/g, link_img3)
.replace(/-linkdownload4-/g, link_img4)
.replace(/-linkdownload5-/g, link_img5)
.replace(/-titledownload-/g, title_img)
.replace(/-titledownload1-/g, title_img1)
.replace(/-titledownload2-/g, title_img2)
.replace(/-titledownload3-/g, title_img3)
.replace(/-titledownload4-/g, title_img4)
.replace(/-titledownload5-/g, title_img5)
.replace(/-download1-/g, '')
.replace(/-download2-/g, '')
.replace(/-download3-/g, '')
.replace(/-download4-/g, '')
.replace(/-download5-/g, '')

.replace(/-getserver1-/g, server_1)
.replace(/-getserver2-/g, server_2)
.replace(/-getserver3-/g, server_3)
.replace(/-getserver4-/g, server_4)
.replace(/-getserver5-/g, server_5)
.replace(/-getserver6-/g, server_6)

.replace(/-formvideos1-/g, videos_1)
.replace(/-formvideos2-/g, videos_2)
.replace(/-formvideos3-/g, videos_3)
.replace(/-formvideos4-/g, videos_4)
.replace(/-formvideos5-/g, videos_5)
.replace(/-formvideos6-/g, videos_6)

.replace(/-varserver2-/g, '')
.replace(/-varserver3-/g, '')
.replace(/-varserver4-/g, '')
.replace(/-varserver5-/g, '')
.replace(/-varserver6-/g, '')
.replace(/-server2-/g, '')
.replace(/-server3-/g, '')
.replace(/-server4-/g, '')
.replace(/-server5-/g, '')
.replace(/-server6-/g, '')

.replace(/-story-/g, kontendesc);

$('#results code').text(replaced);
$('#results').slideToggle('normal');
});

//Pre Auto Selection
$('i[rel="pre"]').replaceWith(function() {
    return $('<pre><code>' + $(this).html() + '</code></pre>');
});
var pres = document.querySelectorAll('pre,kbd,blockquote');
for (var i = 0; i < pres.length; i++) {
  pres[i].addEventListener("dblclick", function () {
    var selection = getSelection();
    var range = document.createRange();
    range.selectNodeContents(this);
    selection.removeAllRanges();
    selection.addRange(range);
  }, false);
}