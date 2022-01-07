$(document).ready(function(){
    LoadGaleriaVideosYoutube();           
});

function LoadGaleriaVideosYoutube() {
    $.ajax({
        url: location.protocol + "//" + location.host + "/Transparencia/_api/web/lists/getbytitle('GaleriaDeVideos')/items?$orderby=ID%20desc",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: onSuccessLoadGaleriaVideos,
        error: onError
    });
}

function onSuccessLoadGaleriaVideosYoutube(data) {

    var resultados = data.d.results;
    var strhtml = "";

    for (var i = 0; i < resultados.length; i++) {
        var strdes = "";
        if (resultados[i].Descripcion != null) {
            strdes = resultados[i].Descripcion;
        }

        strhtml += '<div class="col-md-6"><div class "videospot"><iframe width="500px" height="315" src="https://www.youtube.com/embed/'+ resultados[i].IdVideo +'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div></div>';
    }

    $("#video-gallery").html(strhtml);

    $('#video-gallery').lightGallery({
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 1,
            rel: 0,
            controls: 0
        },
        vimeoPlayerParams: {
            byline: 0,
            portrait: 0,
            color: 'A90707'
        }
    });
    $("#video-gallery").jPaginate({ items: 4 });
}
