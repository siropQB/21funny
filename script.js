function start() {
    document.body.innerHTML = `<canvas style="position:fixed;top:0px;left:0px;" width="${innerWidth}" height="${innerHeight}" id="canvas"></canvas><canvas style="position:fixed;top:0px;left:0px;" width="${innerWidth}" height="${innerHeight}" id="canvas2"></canvas><canvas style="position:fixed;top:0px;left:0px;" width="${innerWidth}" height="${innerHeight}" id="canvas3"></canvas>`;
    ctx = document.getElementById("canvas").getContext("2d");
    ctx3 = document.getElementById("canvas3").getContext("2d");
    setInterval(() => {
        if (!pause) {
            play(
                Math.floor(Math.random() * mp3s)
            );
        }
    }, 1000);
    setInterval(() => {
        if (!pause) {
            var
                i = 0,
                poopoo = Math.round(Math.random() * 10);
            while (i < poopoo) {
                var
                    a = png(
                        Math.floor(Math.random() * pngs)
                    ),
                    g = Math.random(),
                    x = g > 0.75 ? 0 : Math.floor(Math.random() * 2) / 2 * innerWidth,
                    y = g > 0.75 ? 0 : Math.floor(Math.random() * 2) / 2 * innerHeight,
                    w = g > 0.75 ? innerWidth : innerWidth / 2,
                    h = g > 0.75 ? innerHeight : innerHeight / 2;
                a.onload = () => {
                    ctx.drawImage(a, x, y, w, h);
                }
                i++;
            }
        }
    }, 250);
    ctx2 = document.getElementById("canvas2").getContext("2d");
    (anus = function() {
        if (!pause) {
            mp4(Math.floor(Math.random() * mp4s), anus);
        }
    })();
    setInterval(() => {
        if (pause) {
            ctx3.font = "Arial 20px";
            ctx3.fillStyle = "#000000";
            ctx3.fillRect(0, 0, innerWidth, innerHeight);
            ctx3.drawText("Paused", 0, innerHeight);
        } else {
            ctx3.clearRect(0, 0, innerWidth, innerHeight);
        }
    });
}


function play(id) {
    if (id != id) id = 0;
    var wav = new Audio("https://siropqb.github.io/21funny/mp3s/" + id + ".mp3");
    wav.load();
    var playPromise = wav.play();
    playPromise.then(_ => {
        wav.preservesPitch = false;
        wav.playbackRate = Math.random > 0.5 ? Math.random() * 2.5 : 1;
        var b = Math.random() * Math.min(wav.duration, 9);
        wav.currentTime = Math.random() * (wav.duration - b);
        setTimeout(() => {
            wav.pause();
            wav.src = "";
        }, 1000 + b * 1000);
    })
    .catch(error => {
        
    });
}
function mp4(id, callback) {
    var vid = document.createElement("video");
    var 
                        a = png(
                            Math.floor(Math.random() * pngs)
                        ),
                        g = 0,
                        x = g > 0.75 ? 0 : Math.floor(Math.random() * 2) / 2 * innerWidth,
                        y = g > 0.75 ? 0 : Math.floor(Math.random() * 2) / 2 * innerHeight,
                        w = g > 0.75 ? innerWidth : innerWidth / 2,
                        h = g > 0.75 ? innerHeight : innerHeight / 2,
                        poo = (Math.random() * Math.min(vid.duration, 5));
    vid.src = "https://siropqb.github.io/21funny/mp4s/" + id + ".mp4"
    vid.autoplay = false;
    vid.paused = true;
    vid.addEventListener('loadedmetadata', function() {
        poo = (Math.random() * Math.min(vid.duration, 5));
        this.preservesPitch = false;
        this.currentTime = Math.random() > 0.5? Math.random() * (this.duration - poo) : 1;
    }, false);
    var promise = vid.play();
    promise.then(_ => {
        vid.playbackRate = Math.random() * 2.5;
        vid.play = function () {
            setTimeout(() => {
                vid.pause();
                vid.src = "";
                ctx2.clearRect(0,0,innerWidth,innerHeight);
            }, poo * 1000);
            setTimeout(() => {
                callback();
            }, poo + ((Math.random() * 10000) - 5000));
            var $this = this; //cache
            (function loop() {
                if (!$this.paused && !$this.ended) {
                    ctx2.drawImage($this, x, y, w, h);
                    setTimeout(loop, 1000 / 30); // drawing at 30fps
                }
            })();
        };
        vid.play();
    })
    .catch(error => {
        console.log(error);
    });
    
}
function png(id) {
    if (id != id) id = 0;
    var a = new Image();
    c = `${id}`;
    a.src = "https://siropqb.github.io/21funny/pngs/" + c + ".png";
    return a;
}
var
    pngs = 38,
    mp3s = 32,
    mp4s = 21,
    space = 0,
    pause = false;
document.onkeypressed = (e) => {
    if (e.key == "Space") {
        pause = pause ? false : true;
    }
}
document.body.innerHTML = `
<h1>21funny: a humour generation engine (!!!Epilepsy & Earrape Warning!!!)</h1>
<p>Generates humour (21st century guranteed!) using a bunch of preset assets. It freely mixes these with no regard for anything but being as surprising as possible (to maximize funnyness)</p>
<h4>Issues:</h4>
<p>program goes silent randomly, too lazy to figure out how to solve this to be honest.</p>
<p>not enough material</p>
<button onclick="start()">Begin</button>`;
