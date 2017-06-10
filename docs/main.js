var canvas1, context1 , textbox1, metrix1, canvas2, context2, textbox2, metrix2;

window.onload = function () {
    canvas1 = document.getElementById("canvas1");
    textbox1 = document.getElementById("textbox1");
    context1 = canvas1.getContext('2d');
    context1.font = '100px mplus-1p-black';
    context1.lineJoin = 'round';
    metrix1 = context1.measureText(textbox1.value);
    context1.setTransform(1,0,-0.45,1,0,0);

    canvas2 = document.getElementById("canvas2");
    textbox2 = document.getElementById("textbox2");
    context2 = canvas2.getContext('2d');
    //context2.font = '100px AozoraMinchoBlack';
    context2.font = '100px YuMin-Demibold-AlphaNum'
    context2.lineJoin = 'round';
    metrix2 = context2.measureText(textbox2.value);
    context2.setTransform(1,0,-0.45,1,0,0);

    redraw1();
    redraw2();
};

function saveImage(){
    var data = context1.getImageData(0, 0, canvas1.width, canvas1.height);
    // store the current globalCompositeOperation
    var compositeOperation = context1.globalCompositeOperation;
    // set to draw behind current content
    context1.globalCompositeOperation = "destination-over";
    //set background color
    context1.fillStyle = "#00000000";
    // draw background/rectangle on entire canvas1
    context1.fillRect(0,0,canvas1.width,canvas1.height);

    var tempCanvas = document.createElement("canvas1"),
            tCtx = tempCanvas.getContext("2d");

    tempCanvas.width = metrix1.width + 90;
    tempCanvas.height = 150;

    tCtx.drawImage(canvas1[0],0,0);

    var img = tempCanvas.toDataURL("image/png");
    var downloadLink = document.createElement("a");
    downloadLink.href = img;
    downloadLink.download = textbox1.value + textbox2.value + ".png";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function redraw() {
    redraw1();
    redraw2();
}

function redraw1() {
    var text = textbox1.value;
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
    metrix1 = context1.measureText(text);

    var posx = 70;
    var posy = 100;

    //銀色
    for (var i = 0; i < 10; i++) {
        {
            var grad = context1.createLinearGradient(0, 20, 0, 100);
            grad.addColorStop(0, 'rgb(' + 10 * i + ', ' + 10 * i + ', ' + 10 * i + ')');

            context1.strokeStyle = grad;
            context1.lineWidth = 28;
            context1.strokeText(text, posx - 3 + i, posy + 2);
        }
    }

    //黒色
    {
        context1.strokeStyle = "#000000";
        context1.lineWidth = 22;
        context1.strokeText(text, posx, posy);
    }

    //金色
    {
        var grad = context1.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0.3, 'rgb(255, 255, 255)');
        grad.addColorStop(0.5, 'rgb(240, 180, 5)');
        grad.addColorStop(0.8, 'rgb(89, 33, 0)');
        grad.addColorStop(1, 'rgb(240, 180, 5)');
        context1.strokeStyle = grad;
        context1.lineWidth = 19;
        context1.strokeText(text, posx, posy);
    }

    //白
    context1.lineWidth = 6;
    context1.strokeStyle = '#FFFFFF';
    context1.strokeText(text, posx, posy - 3);

    //赤
    {
        var grad = context1.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(230, 0, 0)');
        grad.addColorStop(0.5, 'rgb(123, 0, 0)');
        grad.addColorStop(0.51, 'rgb(240, 0, 0)');
        grad.addColorStop(1, 'rgb(5, 0, 0)');
        context1.lineWidth = 4;
        context1.strokeStyle = grad;
        context1.strokeText(text, posx, posy - 3);
    }

    //赤
    {
        var grad = context1.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(230, 0, 0)');
        grad.addColorStop(0.5, 'rgb(123, 0, 0)');
        grad.addColorStop(0.51, 'rgb(240, 0, 0)');
        grad.addColorStop(1, 'rgb(5, 0, 0)');
        context1.fillStyle = grad;
        context1.fillText(text, posx, posy - 3);
    }
}

function redraw2() {
    var text = textbox2.value;
    context2.clearRect(0, 0, canvas2.width, canvas2.height);
    metrix2 = context2.measureText(text);

    var posx = 70
    if (metrix1.width > metrix2.width) {
        posx = metrix1.width - metrix2.width + 140;
    }
    var posy = 100;

    //銀色
    for (var i = 0; i < 8; i++) {
        {
            var grad = context2.createLinearGradient(0, 20, 0, 100);
            grad.addColorStop(0, 'rgb(' + 8 * i + ', ' + 8 * i + ', ' + 8 * i + ')');

            context2.strokeStyle = grad;
            context2.lineWidth = 27;
            context2.strokeText(text, posx - 3 + i, posy + 2);
        }
    }

    // 薄い銀
    /*{
        var grad = context2.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(0, 0, 0)');
        grad.addColorStop(0.95, 'rgb(0, 0, 0)');
        grad.addColorStop(1.0, 'rgb(161, 176, 197)');
        context2.strokeStyle = grad;
        context2.lineWidth = 25;
        context2.strokeText(text, posx, posy);
    }*/

    //黒色
    /*{
        context2.strokeStyle = "#000000";
        context2.lineWidth = 18;
        context2.strokeText(text, posx, posy);
    }*/

    //銀
    /*{
        var grad = context2.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0.1, 'rgb(161, 182, 201)');
        grad.addColorStop(0.3, 'rgb(205, 215, 225)');
        grad.addColorStop(0.5, 'rgb(240, 241, 245)');
        grad.addColorStop(0.7, 'rgb(146, 172, 197)');
        grad.addColorStop(0.9, 'rgb(32, 57, 77)');
        grad.addColorStop(1.0, 'rgb(63, 85, 108)');
        context2.strokeStyle = grad;
        context2.lineWidth = 19;
        context2.strokeText(text, posx, posy);
    }*/

    //青
    {
        var grad = context2.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(27, 38, 66)');
        grad.addColorStop(0.3, 'rgb(13, 28, 51)');
        grad.addColorStop(0.6, 'rgb(53, 62, 91)');
        grad.addColorStop(1, 'rgb(36, 55, 95)');
        context2.lineWidth = 24;
        context2.strokeStyle = grad;
        context2.strokeText(text, posx, posy);
    }

    //白
    context2.lineWidth = 20;
    context2.strokeStyle = '#FFFFFF';
    context2.strokeText(text, posx, posy);

    //青
    {
        var grad = context2.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(27, 38, 66)');
        grad.addColorStop(0.3, 'rgb(13, 28, 51)');
        grad.addColorStop(0.6, 'rgb(53, 62, 91)');
        grad.addColorStop(1, 'rgb(36, 55, 95)');
        context2.lineWidth = 19;
        context2.strokeStyle = grad;
        context2.strokeText(text, posx, posy);
    }

    // 薄い銀
    {
        var grad = context2.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0.1, 'rgb(161, 182, 201)');
        grad.addColorStop(0.3, 'rgb(205, 215, 225)');
        grad.addColorStop(0.5, 'rgb(240, 241, 245)');
        grad.addColorStop(0.7, 'rgb(146, 172, 197)');
        grad.addColorStop(0.9, 'rgb(32, 57, 77)');
        grad.addColorStop(1.0, 'rgb(63, 85, 108)');
        context2.strokeStyle = grad;
        context2.lineWidth = 15;
        context2.strokeText(text, posx, posy);
    }

    //白
    context2.lineWidth = 9;
    context2.strokeStyle = '#FFFFFF';
    context2.strokeText(text, posx, posy - 3);

    //銀
    {
        var grad = context2.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(240, 246, 244)');
        grad.addColorStop(0.5, 'rgb(160, 189, 203)');
        grad.addColorStop(0.51, 'rgb(196, 215, 222)');
        grad.addColorStop(1, 'rgb(248, 250, 249)');
        context2.lineWidth = 6;
        context2.strokeStyle = grad;
        context2.strokeText(text, posx, posy - 3);
    }

    // 銀
    {
        var grad = context2.createLinearGradient(0, 20, 0, 100);
        grad.addColorStop(0, 'rgb(240, 246, 244)');
        grad.addColorStop(0.5, 'rgb(164, 192, 204)');
        grad.addColorStop(0.51, 'rgb(196, 215, 222)');
        grad.addColorStop(1, 'rgb(248, 250, 249)');
        context2.fillStyle = grad;
        context2.fillText(text, posx, posy - 3);
    }
}
