{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 function setup() \{\
  createCanvas(800, 800);\
  background(255);\
  stroke(0);\
  noFill();\
\}\
\
function draw() \{\
  let x1 = random(width);\
  let y1 = random(height);\
  let x2 = x1 + random(-50, 50);\
  let y2 = y1 + random(-50, 50);\
  let cx1 = x1 + random(-30, 30);\
  let cy1 = y1 + random(-30, 30);\
  let cx2 = x2 + random(-30, 30);\
  let cy2 = y2 + random(-30, 30);\
  \
  bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);\
\
  noLoop();\
\}}