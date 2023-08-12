$(function(){
$("body").append("<div class=\"newPerson\" id=\"newPerson\">");
$("body").append("<div class=\"person\" id=\"person\">");

$(".newPerson").append("<label for=\"\">نام: </label><input type=\"text\" name=\"\" id=\"name\"><td><label for=\"\">نام خانوادگی: </label><input type=\"text\" name=\"\" id=\"family\"><label for=\"\">سمت: </label><input type=\"text\" name=\"\" id=\"role\"><label for=\"\">کد پرسنلی: </label><input type=\"text\" name=\"\" id=\"pcode\"><div><button onclick=\"AddNewPerson()\">افزودن</button></div>");

$("#person").append("<table class=\"paginated\">");
$("table.paginated").append("<tbody>");

$(".paginated").append("<tr><th>نام</th><th>نام خانوادگی</th><th>سمت</th><th>کد رسنلی</th><th>تلفن</th><th>عملیات</th></tr>");
$(".paginated").append("<tr><td class=\"data\">محمد</td><td class=\"data\">حسینی</td><td class=\"data\">کارشناس ارشد استقرار و پشتیبانی</td><td class=\"data\">448</td><td><a class=\"OpenCotactDialog\" href=\"#\" >افزودن</a></td><td><button class=\"save\">ذخیره</button><button class=\"edit\">ویرایش</button><button class=\"delete\">حذف</button></td></tr>");
$(".paginated").append("<tr><td class=\"data\">راحیل</td><td class=\"data\">عبدی</td><td class=\"data\">کارشناس استقرار و پشتیبانی</td><td class=\"data\">453</td><td><a class=\"OpenCotactDialog\" href=\"#\" >افزودن</a></td><td><button class=\"save\">ذخیره</button><button class=\"edit\">ویرایش</button><button class=\"delete\">حذف</button></td></tr>"); 
$(".paginated").append("<tr><td class=\"data\">مهسا</td><td class=\"data\">کشانی</td><td class=\"data\">کارشناس استقرار و پشتیبانی</td><td class=\"data\">456</td><td><a class=\"OpenCotactDialog\" href=\"#\" >افزودن</a></td><td><button class=\"save\">ذخیره</button><button class=\"edit\">ویرایش</button><button class=\"delete\">حذف</button></td></tr>");
$(".paginated").append("<tr><td class=\"data\">علی</td><td class=\"data\">خلیلیان</td><td class=\"data\">کارشناس استقرار و پشتیبانی</td><td class=\"data\">460</td><td><a class=\"OpenCotactDialog\" href=\"#\" >افزودن</a></td><td><button class=\"save\">ذخیره</button><button class=\"edit\">ویرایش</button><button class=\"delete\">حذف</button></td></tr>");
return;
});

function AddContact(){
    $(function() {
      $(".OpenCotactDialog").click(function () {
          var w = window.open("", "popupWindow", "width=600, height=400, scrollbars=yes");
          var $w = $(w.document.body);
          $w.html('<div class="contact">\
          <Table>\
              <tr>\
                  <td>\
                      شماره تماس ثابت: <input type="text" name="" id="Home">\
                  </td>\
              </tr>\
              <tr>\
                  <td>\
                      شماره فکس: <input type="text" name="" id="">\
                  </td>\
              </tr>\
              <tr>\
                  <td>\
                      شماره همراه: <input type="text" name="" id="">\
                  </td>\
              </tr>\
              <tr>\
                  <td>\
                  <button class="cotactAdd" onclick="AddContact()">افزودن</button>\
                  </td>\
              </tr>\
          </Table>\
      </div>\
      <script type="text/javascript">\
      function AddContact(){\
            window.close(); \
        }\
      </script>\
      ');
      
      $w.css({
        fontFamily: "tahoma",
        fontSize: "10px",
        direction: "rtl",
    })
      });
    
    });
}

$(function(){
    AddContact();
    return;
});

