$('#input-form').on('submit',function(event){
    event.preventDefault();
    var dateformat = $('#inputbox')[0].value;
    if(dateformat==="")
    {
        alert("Please fill the fields");
    }
    $.ajax({
        url:'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos',
        method:'GET',
        success:function(data){
            if(data.photos.length===0)
            {   
                alert("NO Photos Available for this date");
            }else{
                $('#seeimg img').remove();
                for(var pho in data.photos)
                {
                    $('<img>',{
                        src: data.photos[pho].img_src,
                        height:'400px',
                        widht:'400px'
                    }).appendTo('#seeimg');
                }
            }
        },
        data:{
            api_key :'5F1W3d6BKjMk0HwVkCCVEhM7uCzj4aRyAPKFmiFI' ,
            earth_date: dateformat
        }
    })
});