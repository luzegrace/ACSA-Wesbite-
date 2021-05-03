var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'arrow-line.png';

imgArray[1] = new Image(width=50 height =50);
imgArray[1].src = 'arrow-line.png';

/* ... more images ... */

imgArray[5] = new Image();
imgArray[5].src = 'arrow-line.png';

/*------------------------------------*/

function nextImage(element)
{
    var img = document.getElementById(element);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === imgArray.length){
                document.getElementById(element).src = imgArray[0].src;
                break;
            }
            document.getElementById(element).src = imgArray[i+1].src;
            break;
        }
    }
}

