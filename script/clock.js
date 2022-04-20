// var canvas = document.getElementById("clock");
// var ctx = canvas.getContext("2d");
// var radius = canvas.height / 2;
// ctx.translate(radius, radius);

// radius = radius * 0.90;
// console.log(radius);

// setInterval(drawClock, 1000);


// function drawClock() {
//     //chamar as tres func
//   drawFace(ctx, radius);
//   drawNumbers(ctx, radius);
//   drawTime(ctx, radius);
// }

// // 1 funcao 
// function drawFace(ctx, radius){
//   var grad;  
//     ctx.beginPath();
//     ctx.arc(0, 0, radius, 0, 2*Math.PI);
//     ctx.fillStyle = 'gold';
//     ctx.fill();

//     grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
//     grad.addColorStop(0, '#333');
//     grad.addColorStop(0.5, 'blue');
//     grad.addColorStop(1, 'red');
//     ctx.strokeStyle = grad;
//     ctx.lineWidth = radius*0.1;
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
//     ctx.fillStyle = '#333';
//     ctx.fill();
//  }

// // 2 funcao
// function drawNumbers(ctx, radius){
//   var ang;
//   var num;
//     ctx.font = radius*0.15 + "px arial";
//     ctx.textBaseline="middle";
//     ctx.textAlign="center";
    
//     for(num = 1; num < 13; num++){
//       ang = num * Math.PI / 6;
//       ctx.rotate(ang);
//       ctx.translate(0, -radius*0.85);
//       ctx.rotate(-ang);
//       ctx.fillText(num.toString(), 0, 0);
//       ctx.rotate(ang);
//       ctx.translate(0, radius*0.85);
//       ctx.rotate(-ang);
//     }
//  }

// //3 funcao
// function drawTime(ctx,radius){
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     //hora
//     hour = hour % 12;
//     hour = (hour * Math.PI / 6)+
//             (minute * Math.PI / (6 * 60))+
//             (second * Math.PI / (360 * 60));
//     drawHand(ctx, hour, radius*0.5, radius*0.07);

//     //minuto
//     minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
//     drawHand(ctx, minute, radius*0.8, radius*0.07);

//     //segundo
//     second = (second * Math.PI / 30);
//     drawHand(ctx, second, radius*0.9, radius*0.02);

//     //centro
//     ctx.beginPath();
//     ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
//     ctx.fillStyle = '#333';
//     ctx.fill();

//     //relogio
//     ctx.beginPath();
//     ctx.arc(0, 0, radius*0.07, 0, 2*Math.PI);
//     ctx.fillStyle = '#333';
//     ctx.fill();

//     //ponteiro
//     ctx.beginPath();
//     ctx.moveTo(-2, -radius*0.1);
//     ctx.lineTo(2, -radius*0.1);
//     ctx.lineTo(1, -radius*0.05);
//     ctx.lineTo(-1, -radius*0.05);
//     ctx.fillStyle = '#333';
//     ctx.fill();
//     }
    
//  //4 funcao
// function drawHand(ctx, pos, length, width) {
//     ctx.beginPath();
//     ctx.lineWidth = width;
//     ctx.lineCap = "round";
//     ctx.moveTo(0,0);
//     ctx.rotate(pos);
//     ctx.lineTo(0, -length);
//     ctx.stroke();
//     ctx.rotate(-pos);
// }
