'use strict';

var BAR_WIDTH = 40; //ширина столбца статистки;
var CLOUD_X = 170;
var CLOUD_Y = 30;
var STAT_X = CLOUD_X + 35;
var STAT_Y = CLOUD_Y + 250;
var BAR_STEP = 90;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + 380, y);
  ctx.lineTo(x + 400, y + 20);
  ctx.lineTo(x + 400, y + 250);
  ctx.lineTo(x + 380, y + 270);
  ctx.lineTo(x, y + 270);
  ctx.lineTo(x - 20, y + 250);
  ctx.lineTo(x - 20, y + 20);
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.fill();
};

var getMaxOfArray = function (arr) {
  var maxValue = 0;
  for (var i = 0; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return maxValue;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  ctx.translate(-10, -10);
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = '#333';
  ctx.fillText('Ура вы победили!', CLOUD_X + 120, CLOUD_Y + 20);
  ctx.fillText('Список результатов:', CLOUD_X + 100, CLOUD_Y + 40);

  var maxHeight = getMaxOfArray(times);
  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = '#110b5b';
    }
    ctx.fillText(names[i], STAT_X + BAR_STEP * i, STAT_Y);
    ctx.fillRect(STAT_X + BAR_STEP * i, STAT_Y - 20, BAR_WIDTH, -(150 / maxHeight * times[i]));
    ctx.fillText(Math.round(times[i]), STAT_X + BAR_STEP * i, STAT_Y - 180);
  }
};
