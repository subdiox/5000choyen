var canvas, context, textbox1, textbox2;

window.onload = function () {
    canvas = document.getElementById("canvas");
    textbox1 = document.getElementById("textbox1");
    textbox2 = document.getElementById("textbox2");
    context = canvas.getContext('2d');
    context.lineJoin = 'round';
    context.setTransform(1,0,-0.45,1,0,0);
    redraw();
};

function saveImage(){
    var inputCount = 0;
    if (textbox1.value != "") {
        inputCount += 1;
    }
    if (textbox2.value != "") {
        inputCount += 1;
    }
    if (inputCount == 0) {
        alert("文字列が入力されていないため画像を保存できません。");
        return;
    }

    context.fillStyle = "#00000000";
    context.fillRect(0,0,canvas.width,canvas.height);

    var tempCanvas = document.createElement("canvas");
    tempCanvas.id = "temp_canvas";
    var tempContext = tempCanvas.getContext("2d");

    var metrix1 = context.measureText(textbox1.value);
    var metrix2 = context.measureText(textbox2.value);
    var width = metrix2.width + 70;
    if (metrix1.width > metrix2.width) {
        width = metrix1.width + 140;
    }

    var height = 0;
    if (inputCount == 1) {
        height = 135;
    } else if (inputCount == 2) {
        height = 270;
    }

    tempCanvas.width = width;
    tempCanvas.height = height;

    tempContext.drawImage(canvas,0,0);

    var img = tempCanvas.toDataURL("image/png");

    // 画像をダウンロードする
    /*var downloadLink = document.createElement("a");
    downloadLink.href = img;
    downloadLink.download = textbox1.value + textbox2.value +  ".png";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);*/

    window.open(img)

    redraw();
}

function redraw() {
    redraw1();
    redraw2();
}

function redraw1() {
    context.font = '100px mplus-1p-black';
    var text = textbox1.value;
    context.clearRect(0, 0, canvas.width, canvas.height);

    var posx = 70;
    var posy = 100;

    //銀色
    for (var i = 0; i < 10; i++) {
        {
            var grad = context.createLinearGradient(0, 20, 0, posy);
            grad.addColorStop(0, 'rgb(' + 10 * i + ', ' + 10 * i + ', ' + 10 * i + ')');

            context.strokeStyle = grad;
            context.lineWidth = 28;
            context.strokeText(text, posx - 3 + i, posy + 2);
        }
    }

    //黒色
    {
        context.strokeStyle = "#000000";
        context.lineWidth = 22;
        context.strokeText(text, posx, posy);
    }

    //金色
    {
        var grad = context.createLinearGradient(0, 20, 0, posy);
        grad.addColorStop(0.3, 'rgb(255, 255, 255)');
        grad.addColorStop(0.5, 'rgb(240, 180, 5)');
        grad.addColorStop(0.8, 'rgb(89, 33, 0)');
        grad.addColorStop(1, 'rgb(240, 180, 5)');
        context.strokeStyle = grad;
        context.lineWidth = 19;
        context.strokeText(text, posx, posy);
    }

    //白
    context.lineWidth = 6;
    context.strokeStyle = '#FFFFFF';
    context.strokeText(text, posx, posy - 3);

    //赤
    {
        var grad = context.createLinearGradient(0, 20, 0, posy);
        grad.addColorStop(0, 'rgb(230, 0, 0)');
        grad.addColorStop(0.5, 'rgb(123, 0, 0)');
        grad.addColorStop(0.51, 'rgb(240, 0, 0)');
        grad.addColorStop(1, 'rgb(5, 0, 0)');
        context.lineWidth = 4;
        context.strokeStyle = grad;
        context.strokeText(text, posx, posy - 3);
    }

    //赤
    {
        var grad = context.createLinearGradient(0, 20, 0, posy);
        grad.addColorStop(0, 'rgb(230, 0, 0)');
        grad.addColorStop(0.5, 'rgb(123, 0, 0)');
        grad.addColorStop(0.51, 'rgb(240, 0, 0)');
        grad.addColorStop(1, 'rgb(5, 0, 0)');
        context.fillStyle = grad;
        context.fillText(text, posx, posy - 3);
    }
}

function redraw2() {
    context.font = '100px YuMin-Demibold-AlphaNum'
    var text = textbox2.value;
    context.clearRect(0, 150, canvas.width, canvas.height);

    var posx = 130
    var metrix1 = context.measureText(textbox1.value);
    var metrix2 = context.measureText(textbox2.value);
    if (metrix1.width > metrix2.width) {
        posx = metrix1.width - metrix2.width + 200;
    }
    var posy = 230;

    //銀色
    for (var i = 0; i < 8; i++) {
        {
            var grad = context.createLinearGradient(0, 20, 0, posy);
            grad.addColorStop(0, 'rgb(' + 10 * i + ', ' + 10 * i + ', ' + 10 * i + ')');

            context.strokeStyle = grad;
            context.lineWidth = 27;
            context.strokeText(text, posx - 3 + i, posy + 2);
        }
    }

    //青
    {
        var grad = context.createLinearGradient(0, 20, 0, posy);
        grad.addColorStop(0, 'rgb(27, 38, 66)');
        grad.addColorStop(0.3, 'rgb(13, 28, 51)');
        grad.addColorStop(0.6, 'rgb(53, 62, 91)');
        grad.addColorStop(1, 'rgb(36, 55, 95)');
        context.lineWidth = 24;
        context.strokeStyle = grad;
        context.strokeText(text, posx, posy);
    }

    //白
    context.lineWidth = 20;
    context.strokeStyle = '#FFFFFF';
    context.strokeText(text, posx, posy);

    //青
    {
        var grad = context.createLinearGradient(0, 20, 0, posy);
        grad.addColorStop(0, 'rgb(27, 38, 66)');
        grad.addColorStop(0.3, 'rgb(13, 28, 51)');
        grad.addColorStop(0.6, 'rgb(53, 62, 91)');
        grad.addColorStop(1, 'rgb(36, 55, 95)');
        context.lineWidth = 19;
        context.strokeStyle = grad;
        context.strokeText(text, posx, posy);
    }

    // 薄い銀
    {
        var grad = context.createLinearGradient(0, 20, 0, posy);
        grad.addColorStop(0.1, 'rgb(161, 182, 201)');
        grad.addColorStop(0.3, 'rgb(205, 215, 225)');
        grad.addColorStop(0.5, 'rgb(240, 241, 245)');
        grad.addColorStop(0.7, 'rgb(146, 172, 197)');
        grad.addColorStop(0.9, 'rgb(32, 57, 77)');
        grad.addColorStop(1.0, 'rgb(63, 85, 108)');
        context.strokeStyle = grad;
        context.lineWidth = 15;
        context.strokeText(text, posx, posy);
    }

    //白
    context.lineWidth = 9;
    context.strokeStyle = '#FFFFFF';
    context.strokeText(text, posx, posy - 3);

    //銀
    {
        var grad = context.createLinearGradient(0, 20, 0, posy);
        grad.addColorStop(0, 'rgb(240, 246, 244)');
        grad.addColorStop(0.5, 'rgb(160, 189, 203)');
        grad.addColorStop(0.51, 'rgb(196, 215, 222)');
        grad.addColorStop(1, 'rgb(248, 250, 249)');
        context.lineWidth = 6;
        context.strokeStyle = grad;
        context.strokeText(text, posx, posy - 3);
    }

    // 銀
    {
        var grad = context.createLinearGradient(0, 20, 0, posy);
        grad.addColorStop(0, 'rgb(240, 246, 244)');
        grad.addColorStop(0.5, 'rgb(164, 192, 204)');
        grad.addColorStop(0.51, 'rgb(196, 215, 222)');
        grad.addColorStop(1, 'rgb(248, 250, 249)');
        context.fillStyle = grad;
        context.fillText(text, posx, posy - 3);
    }
}
