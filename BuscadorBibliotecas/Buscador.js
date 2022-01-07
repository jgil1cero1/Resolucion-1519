      
function SearchStPOL(event)
{
    var code = (event.keyCode ? event.keyCode : event.which);
        if(code == 13)
        {
            event.preventDefault();
            BuscarCobroCoactivo();
        }

}


$.extend($.expr[":"], {
"containsIN": function(elem, i, match, array) {
return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
}
});
function BuscarCobroCoactivo()
{
        $("#notificationArea55").show();
    var strurl = location.protocol + "//" + location.host + "/Ciudadanos/_api/web/lists/getbytitle('Facturacion con merito ejecutivo')/items?$select=Title,Created,FileRef,FileLeafRef&$top=2000&$filter=substringof('"+$('#txt_sboxNorma').val()+"',Title) or substringof('"+$('#txt_sboxNorma').val()+"',FileLeafRef)";
      $.ajax({
        url: strurl,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            var strHtml= "";           	
             $.each(data.d.results, function(index, item){  

                 var newTexeeet33 = "&nbsp; " + item.FileLeafRef;
                 if(item.Title != null){newTexeeet33 = "&nbsp; " + item.Title;}
                 var nombre = newTexeeet33.split(" ").join( "</span> <span>" );                                    					
                console.log(nombre);
                  strHtml+="<div id='' name='Item' data-displaytemplate='PDFItem' class='ms-srch-item' onmouseover='' onmouseout=''> <div id='ckji' class='ms-srch-item-body' onclick=''> <div class='ms-srch-item-icon'> <img id='cn' onload='' src='/_layouts/15/images/icpdf.png' style='display: inline;'> </div> <div id='ctl00_cemTitle' class='ms-srch-item-title'> <h3 class='ms-srch-ellipsis' style='font-size: 22px;'> <a clicktype='Result' id='ctl00em_itemTitleLink' href='"+item.FileRef+"' class='ms-srch-item-link' title='"+item.FileLeafRef+"' onfocus='' target='_blank'>"+nombre+" </a></h3> <h5 style='margin-top: -31px;margin-left: 233px;'> "+item.Created+"</h5></div></div></div>";				
           });
                           
             $("#notificationArea55").hide();
       
             
            if(data.d.results.length == 0)
            {
                
                $("#ResultadosDeBusquedaNoma").html("<br><br><strong class='ms-srch-item-highlightedText'>No se encontraron Resultados</strong>");
         
            }
            else
            {
        
                
                   $("#ResultadosDeBusquedaNoma2").html("<br><br><br><br><strong class='ms-srch-item-highlightedText'>"+data.d.results.length+" Resultados</strong>  <a href='javascript:void(0);' onclick='Shwed();'>Ver todo</a><br><br>");
                $("#ResultadosDeBusquedaNoma").html(strHtml);
                
                $("#ResultadosDeBusquedaNoma").jPaginate({items: 20});
                
                
        
                
                $('#ResultadosDeBusquedaNoma span:containsIN("'+$('#txt_sboxNorma').val()+'")').css({
                      "background-color": "yellow",
                      "font-weight": "bold"
                    });
            }
        },
        error: onError
    });
    
}

function Shwed()
{
$("#MSOZoneCell_WebPartWPQ1").show();
$(".pagination").remove();
}

