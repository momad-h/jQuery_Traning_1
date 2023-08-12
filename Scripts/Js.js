  
/////////////////////////////////
  $(document).on('click', '.edit', function() {
      $(this).parent().siblings('td.data').each(function() {
        var content = $(this).html();
        $(this).html('<input class="e" type="text" value="' + content + '"/>');
      });
      
      $(this).siblings('.save').show();
      $(this).siblings('.delete').hide();
      $(this).hide();
    });

   
    $(document).on('click', '.save', function() {
      
      $('input.e').each(function() {
        var content = $(this).val().replace('',' ');
        $(this).html(content);
        $(this).contents().unwrap();
      });
      $(this).siblings('.edit').show();
      $(this).siblings('.delete').show();
      $(this).hide();
    });


    $(document).on('click', '.delete', function() {
        $(this).parents('tr').remove();
      });
         
/////////////////////////////////////////////////////
function AddNewPerson(){
    $("tbody").append("<tr><td class=\"data\">"+$("#name").val()+"</td><td class=\"data\">"+$("#family").val()+"</td><td class=\"data\">"+$("#role").val()+"</td><td class=\"data\">"+$("#pcode").val()+"</td><td><a class=\"OpenCotactDialog\" href=\"#\" >افزودن</a></td><td><button class=\"save\">ذخیره</button><button class=\"edit\">ویرایش</button><button class=\"delete\">حذف</button></td></tr></tr>");
    AddContact();
    SetStyle();
    pagtb();
}
  
/////////////////////////////////////////////////////
function pagtb(){
  $('table.paginated').each(function () {
        var $table = $(this);
        var itemsPerPage = 5;
        var currentPage = 0;
        var pages = Math.ceil($table.find("tr:not(:has(th))").length / itemsPerPage);
        $table.bind('repaginate', function () {
          if (pages > 1) {
          var pager;
          if ($table.next().hasClass("pager"))
            pager = $table.next().empty();  else
          pager = $('<div class="pager" style="padding-top: 20px; direction:ltr; " align="center"></div>');

          $('<button class="pg-goto"></button>').text(' « اولین ').bind('click', function () {
            currentPage = 0;
            $table.trigger('repaginate');
          }).appendTo(pager);

          $('<button class="pg-goto"> « قبلی </button>').bind('click', function () {
            if (currentPage > 0)
              currentPage--;
            $table.trigger('repaginate');
          }).appendTo(pager);

          var startPager = currentPage > 2 ? currentPage - 2 : 0;
          var endPager = startPager > 0 ? currentPage + 3 : 5;
          if (endPager > pages) {
            endPager = pages;
            startPager = pages - 5;    if (startPager < 0)
              startPager = 0;
          }

          for (var page = startPager; page < endPager; page++) {
            $('<button id="pg' + page + '" class="' + (page == currentPage ? 'pg-selected' : 'pg-normal') + '"></button>').text(page + 1).bind('click', {
                newPage: page
              }, function (event) {
                currentPage = event.data['newPage'];
                $table.trigger('repaginate');
            }).appendTo(pager);
          }

          $('<button class="pg-goto"> بعدی » </button>').bind('click', function () {
            if (currentPage < pages - 1)
            currentPage++;
            $table.trigger('repaginate');
          }).appendTo(pager);
          $('<button class="pg-goto"> آخرین » </button>').bind('click', function () {
            currentPage = pages - 1;
            $table.trigger('repaginate');
          }).appendTo(pager);

          if (!$table.next().hasClass("pager"))
            pager.insertAfter($table);
            //pager.insertBefore($table);

        }// end $table.bind('repaginate', function () { ...

        $table.find('tbody tr:not(:has(th))').hide().slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).show();
        });

        $table.trigger('repaginate');
      });     
    };
    
    $(function(){
      pagtb();
      return;
    })
    
