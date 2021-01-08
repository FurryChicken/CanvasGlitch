document.body.onload = function() {

   var text = 'Hello 2021'

   var globalWidth = 800
   var globalHeight = 400

   var canvasMain = document.createElement('canvas')
   canvasMain.width = globalWidth
   canvasMain.height = globalHeight
   var ctxTop = canvasMain.getContext('2d')
   var canvasRed = document.createElement('canvas')
   canvasRed.width = globalWidth
   canvasRed.height = globalHeight
   var ctxRed = canvasRed.getContext('2d')
   var canvasBlue = document.createElement('canvas')
   canvasBlue.width = globalWidth
   canvasBlue.height = globalHeight
   var ctxBlue = canvasBlue.getContext('2d')

   var canvasShown = document.querySelector('canvas')
   canvasShown.width = globalWidth
   canvasShown.height = globalHeight
   var ctxShown = canvasShown.getContext('2d')

   ctxShown.globalCompositeOperation="destination-over"

   function init() {
      
      ctxTop.clearRect(0, 0, ctxTop.width, ctxTop.height)
      ctxTop.textAlign = 'center'
      ctxTop.textBaseline = 'middle'
      ctxTop.font = 'bold 6rem "Teko"'
      ctxTop.fillStyle = '#fefefe'
      ctxTop.fillText(text, canvasMain.width/2, canvasMain.height/2)

      ctxRed.clearRect(0, 0, ctxRed.width, ctxRed.height)
      ctxRed.textAlign = 'center'
      ctxRed.textBaseline = 'middle'
      ctxRed.font = 'bold 6rem "Teko"'
      ctxRed.fillStyle = '#ff0000'
      ctxRed.fillText(text, canvasRed.width/2, canvasRed.height/2)

      ctxBlue.clearRect(0, 0, ctxBlue.width, ctxBlue.height)
      ctxBlue.textAlign = 'center'
      ctxBlue.textBaseline = 'middle'
      ctxBlue.font = 'bold 6rem "Teko"'
      ctxBlue.fillStyle = '#7afeff'
      ctxBlue.fillText(text, canvasBlue.width/2, canvasBlue.height/2)
   

      ctxShown.clearRect(0, 0, canvasShown.width, canvasShown.height)
      ctxShown.drawImage(canvasMain, 0, 0)
      ctxShown.drawImage(canvasRed, 0, 0)
      ctxShown.drawImage(canvasBlue, 0, 0)

      var i = 130
      while(i--) {
         if (i == 10 || i == 20 || i == 30) { tear() }
         else { glitch() }
      }
   }

   function glitch() {
      var width = 100 + Math.random()*100
      var height = 50 + Math.random()*50

      var x = Math.random()*canvasMain.width
      var y = Math.random()*canvasMain.height

      var dx = x + (Math.random() * 6 - 3)
      var dy = y + (Math.random() * 4.5 - 2.25)

      var dxx = x - (Math.random() * 6 - 3)
      var dyy = y - (Math.random() * 4.5 - 2.25)

      ctxShown.clearRect(x, y, width, height)
      ctxShown.fillStyle = '#4a6';
      ctxShown.drawImage(canvasMain, 0, 0)
      ctxShown.drawImage(canvasRed, x, y, width, height, dx, dy, width, height)
      ctxShown.drawImage(canvasBlue, x, y, width, height, dxx, dyy, width, height)
   }

   function tear() {
      var width = 100 + Math.random()*100
      var height = 50 + Math.random()*50

      var x = Math.random()*canvasMain.width
      var y = Math.random()*canvasMain.height

      var dx = x + (Math.random() * 16 - 8)
      var dy = y + (Math.random() * 12 - 6)

      ctxShown.clearRect(x, y, width, height)
      ctxShown.fillStyle = '#4a6';
      // ctxShown.fillRect(x, y, width, height)
      ctxShown.drawImage(canvasMain, x, y, width, height, dx, dy, width, height)
      // 懒得再用 random 给偏移量赋值了，直接单纯地用 +2/-2 了，不过效果也不错？
      ctxShown.drawImage(canvasRed, x, y, width, height, dx+2, dy+2, width, height)
      ctxShown.drawImage(canvasBlue, x, y, width, height, dx-2, dy-2, width, height)
   }

   setInterval(function() {
      init()
   }, Math.random() * 100 + 50)
}