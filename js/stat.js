'use strict';

var BAR_WIDTH = 40;
var CLOUD_X = 120;
var CLOUD_Y = 10;
var STAT_X = CLOUD_X + 35;
var STAT_Y = CLOUD_Y + 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(CLOUD_X, CLOUD_Y);
  ctx.lineTo(CLOUD_X + 380, CLOUD_Y);
  ctx.lineTo(CLOUD_X + 400, CLOUD_Y + 20);
  ctx.lineTo(CLOUD_X + 400, CLOUD_Y + 250);
  ctx.lineTo(CLOUD_X + 380, CLOUD_Y + 270);
  ctx.lineTo(CLOUD_X, CLOUD_Y + 270);
  ctx.lineTo(CLOUD_X - 20, CLOUD_Y + 250);
  ctx.lineTo(CLOUD_X - 20, CLOUD_Y + 20);
  ctx.lineTo(CLOUD_X, CLOUD_Y);
  ctx.stroke();
  ctx.fill();
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.font = '16px "PT Mono"';
  ctx.fillStyle = '#333';
  ctx.fillText('Ура вы победили!', 250, 30);
  ctx.fillText('Список результатов:', 230, 50);

  ctx.fillStyle = '#333';
  ctx.fillText('Вы', STAT_X + 15, STAT_Y - 20);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(STAT_X, STAT_Y, BAR_WIDTH, 150);

  ctx.fillStyle = '#333';
  ctx.fillText('Иван', STAT_X + 75, STAT_Y - 20);
  ctx.fillStyle = '#1D19B7';
  ctx.fillRect(STAT_X + 90, STAT_Y, BAR_WIDTH, 110);

  ctx.fillStyle = '#333';
  ctx.fillText('Петр', STAT_X + 165, STAT_Y - 20);
  ctx.fillStyle = '#1D19B7';
  ctx.fillRect(STAT_X + 180, STAT_Y, BAR_WIDTH, 140);

  ctx.fillStyle = '#333';
  ctx.fillText('Стас', STAT_X + 255, STAT_Y - 20);
  ctx.fillStyle = '#1D19B7';
  ctx.fillRect(STAT_X + 270, STAT_Y, BAR_WIDTH, 120);
};
