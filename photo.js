const image01src = 'url("img/amedama.jpg")';
const image02src = 'url("img/hanabi.jpg")';
const image03src = 'url("img/harinezumi.jpg")';
const image04src = 'url("img/himawari.jpg")';
const image05src = 'url("img/huzisan.jpg")';
const image06src = 'url("img/illumination.jpg")';
const image07src = 'url("img/lunch.jpg")';
const image08src = 'url("img/panke-ki.jpg")';
const image09src = 'url("img/sukaiturii.jpg")';

function nextImage(){
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if(nowBg == image01src){
    //1枚め
    header.style.backgroundImage = image02src;
  }else if(nowBg == image02src){
    //2枚め
    header.style.backgroundImage = image03src;
  }else if(nowBg == image03src){
    //3枚め
    header.style.backgroundImage = image04src;
  }else if(nowBg == image04src){
    //4枚め
    header.style.backgroundImage = image05src;
  }else if(nowBg == image05src){
    //5枚め
    header.style.backgroundImage = image06src;
  }else if(nowBg == image06src){
    //6枚め
    header.style.backgroundImage = image07src;
  }else if(nowBg == image07src){
    //7枚め
    header.style.backgroundImage = image08src;
  }else if(nowBg == image08src){
    //8枚め
    header.style.backgroundImage = image09src;
  }else{
    //9枚め
    header.style.backgroundImage = image01src;
  }
}

function prevImage(){
  const header = document.getElementById('top');
  const nowBg = header.style.backgroundImage;
  console.log(nowBg);

  if(nowBg == image01src){
    //1枚め
    header.style.backgroundImage = image02src;
  }else if(nowBg == image02src){
    //2枚め
    header.style.backgroundImage = image03src;
  }else if(nowBg == image03src){
    //3枚め
    header.style.backgroundImage = image04src;
  }else if(nowBg == image04src){
    //4枚め
    header.style.backgroundImage = image05src;
  }else if(nowBg == image05src){
    //5枚め
    header.style.backgroundImage = image06src;
  }else if(nowBg == image06src){
    //6枚め
    header.style.backgroundImage = image07src;
  }else if(nowBg == image07src){
    //7枚め
    header.style.backgroundImage = image08src;
  }else if(nowBg == image08src){
    //8枚め
    header.style.backgroundImage = image09src;
  }else{
    //9枚め
    header.style.backgroundImage = image01src;
  }
}

// ページが表示されたタイミングで実行したい処理を書く
document.getElementById('top').style.backgroundImage = image01src;


// タイマーセット
setInterval(nextImage, 5000);