import React, { useEffect, useRef, useState } from 'react';

function Clock() {
  const canvasRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const size = Math.min(window.innerWidth, window.innerHeight) * 0.4;
    canvas.width = size;
    canvas.height = size;

    let radius = size / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;
    setInterval(drawClock, 1000);

    function drawClock() {
      const now = new Date();
      setCurrentTime(now); // Cập nhật thời gian hiện tại
      drawFace(ctx, radius);
      drawNumbers(ctx, radius);
      drawTime(ctx, radius, now);
    }

    function drawFace(ctx, radius) {
      const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
      grad.addColorStop(0, '#333');
      grad.addColorStop(0.5, 'white');
      grad.addColorStop(1, '#333');
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.strokeStyle = grad;
      ctx.lineWidth = radius * 0.1;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
      ctx.fillStyle = '#333';
      ctx.fill();
    }

    function drawNumbers(ctx, radius) {
      ctx.font = radius * 0.15 + "px arial";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      for (let num = 1; num < 13; num++) {
        let ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
    }

    function drawTime(ctx, radius, time) {
      let hour = time.getHours();
      let minute = time.getMinutes();
      let second = time.getSeconds();

      //hour
      hour = hour % 12;
      hour = (hour * Math.PI / 6) +
        (minute * Math.PI / (6 * 60)) +
        (second * Math.PI / (360 * 60));
      
      ctx.strokeStyle = "color_of_hour_hand";
      drawHand(ctx, hour, radius * 0.5, radius * 0.07);

      //minute
      minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
      
      ctx.strokeStyle = "color_of_minute_hand";
      drawHand(ctx, minute, radius * 0.8, radius * 0.07);

      // second
      second = (second * Math.PI / 30);
      
      ctx.strokeStyle = "color_of_second_hand";
      drawHand(ctx, second, radius * 0.9, radius * 0.02);
    }

    function drawHand(ctx, pos, length, width) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.lineCap = "round";
      ctx.moveTo(0, 0);
      ctx.rotate(pos);
      ctx.lineTo(0, -length);
      ctx.stroke();
      ctx.rotate(-pos);
    }
  }, []);

  return (
    <div>
      <canvas ref={canvasRef}>
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <div style={{ fontSize: '24px', color: 'black' }}>
        {currentTime.toLocaleTimeString()}
      </div>
      <h1>Ho Chi Minh City</h1>
    </div>
  );
}

export default Clock;
