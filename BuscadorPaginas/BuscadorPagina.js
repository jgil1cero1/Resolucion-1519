function SearchStPOL(event) {
    var code = (event.keyCode ? event.keyCode : event.which);
    if (code == 13) {
        event.preventDefault();
        BuscarNormatividad();
    }
}

$.extend($.expr[":"], {
    "containsIN": function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});

function BuscarNormatividad() {
    $("#notificationArea55").show();
    var strurl = location.protocol + "//" + location.host + "/Dependencias/SecretariaGeneral/_api/web/lists/getbytitle('PÃ¡ginas')/items?$select=Title,LinkFilename,Comments,ID&$top=10&$filter=(substringof('" + $('#txt_sboxNorma').val() + "',Title) or substringof('" + $('#txt_sboxNorma').val() + "',FileLeafRef) or substringof('" + $('#txt_sboxNorma').val() + "',Comments) )and (ID eq 45 or ID eq 44 or ID eq 46 or ID eq 54 or ID eq 47 or ID eq 42 or ID eq 52 or ID eq 53or ID eq 51 or ID eq 50 or ID eq 49) ";
    $.ajax({
        url: strurl,
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: function (data) {
            var strHtml = "";
            $.each(data.d.results, function (index, item) {

                var identification = "&nbsp; " + item.ID;
                var aidi = identification.split(" ").join("</span> <span>");

                var comentario = "&nbsp; " + item.Comments;
                var commit = comentario.split(" ").join("</span> <span>");

                var titulo = "&nbsp; " + item.Title + "&nbsp; ";
                var ttl = titulo.split(" ").join("</span> <span>");

                var Nombre = item.FileLeafRef;

                strHtml += "<div id='' name='Item' data-displaytemplate='PDFItem' class='ms-srch-item' onmouseover='' onmouseout=''><div id='ckji' class='ms-srch-item-body' onclick=''><div class='ms-srch-item-icon'><img id='cn' onload='' src='/_layouts/15/images/icpdf.png' style='display: inline;'></div><div id='ctl00_cemTitle' class='ms-srch-item-title'><h3 class='ms-srch-ellipsis' style='font-size: 22px;'><a clicktype='Result' id='ctl00em_itemTitleLink' href='/Dependencias/SecretariaGeneral/" + item.LinkFilename + "' class='ms-srch-item-link' title='" + ttl + "' onfocus='' target='_blank'>" + ttl + "</a><h3></div><div id='ctSummary' class='ms-srch-item-summary'></div><div id='ctl00_ctl6Path' tabindex='0' class='ms-srch-item-path' title='' onblur='' onclick='' onkeydown=''> " + commit + " </div></div></div>";
            });

            $("#notificationArea55").hide();
            $("#MSOZoneCell_WebPartWPQ1").hide();

            if (data.d.results.length == 0) {

                $("#ResultadosDeBusquedaNoma").html("<br><br><strong class='ms-srch-item-highlightedText'>No se encontraron Resultados</strong>");
                $(".pagination").remove();
            }
            else {
                $(".pagination").remove();

                $("#ResultadosDeBusquedaNoma2").html("<br><br><br><br><strong class='ms-srch-item-highlightedText'>" + data.d.results.length + " Resultados</strong>  <a href='javascript:void(0);' onclick='Shwed();'>Ver todo</a><br><br>");
                $("#ResultadosDeBusquedaNoma").html(strHtml);

                $("#ResultadosDeBusquedaNoma").jPaginate({ items: 20 });

                $('#ResultadosDeBusquedaNoma span:containsIN("' + $('#txt_sboxNorma').val() + '")').css({
                    "background-color": "yellow",
                    "font-weight": "bold"
                });
            }
        },
        error: onError
    });
}

function Shwed() {
    $("#MSOZoneCell_WebPartWPQ1").show();
    $("#ResultadosDeBusquedaNoma").hide();
    $("#ResultadosDeBusquedaNoma2").hide();
    $(".pagination").remove();
}