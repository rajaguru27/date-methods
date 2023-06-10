let date = new Date();
document.write(`Date generated is ${date}`, "<br>", "<br>");
document.write(`GET METHODS FROM ${date}`, "<br>", "<br>")

document.write(` getDate : ${date.getDate()}`, "<br>");
document.write(` getDay : ${date.getDay()}`, "<br>");
document.write(` getFullYear : ${date.getFullYear()}`, "<br>");
document.write(` getHours : ${date.getHours()}`, "<br>");
document.write(` getMilliseconds : ${date.getMilliseconds()}`, "<br>");
document.write(` getMonth : ${date.getMonth()}`, "<br>");
document.write(` getMinutes : ${date.getMinutes()}`, "<br>");
document.write(` getTime : ${date.getTime()}`, "<br>");
document.write(` getSeconds : ${date.getSeconds()}`, "<br>");
document.write(` getTimezoneOffset : ${date.getTimezoneOffset()}`, "<br>");
document.write(` getUTCDate : ${date.getUTCDate()}`, "<br>");
document.write(` getUTCDay : ${date.getUTCDay()}`, "<br>");
document.write(` getUTCFullYear : ${date.getUTCFullYear()}`, "<br>");
document.write(` getUTCHours : ${date.getUTCHours()}`, "<br>");
document.write(` getUTCMilliseconds : ${date.getUTCMilliseconds()}`, "<br>");
document.write(` getUTCMonth : ${date.getUTCMonth()}`, "<br>");
document.write(` getUTCMinutes : ${date.getUTCMinutes()}`, "<br>", "<br>");

document.write(`NOW , PARSE METHODS`, "<br>", "<br>");

document.write(` Date.now : ${Date.now()}`, "<br>");
document.write(` Date.parse(May 28,1997) : ${Date.parse("May 28,1997")}`, "<br>");
document.write(` valueOf : ${date.valueOf()}`, "<br>", "<br>");

document.write(`CONVERSION METHODS (${date})`, "<br>", "<br>");

document.write(` toString : ${date.toString()}`, "<br>");
document.write(` toDateString : ${date.toDateString()}`, "<br>");
document.write(` toTimeString : ${date.toLocaleString()}`, "<br>");
document.write(` toISOString : ${date.toISOString()}`, "<br>");
document.write(` JSON : ${date.toJSON()}`, "<br>");
document.write(` toLocaleString : ${date.toLocaleString()}`, "<br>");
document.write(` toLocaleDateString : ${date.toLocaleDateString()}`, "<br>");
document.write(` toLocaleTimeString : ${date.toLocaleTimeString()}`, "<br>");
document.write(` toUTCString : ${date.toUTCString()}`, "<br>");
document.write(` Date.UTC : ${Date.UTC(2017, 05, 28)}`, "<br>", "<br>");

document.write(`SET METHODS (${date})`, "<br>", "<br>");
let a = new Date();
a.setDate(20);
document.write(`setDate(20): ${a}`, "<br>");

let b = new Date();
b.setMonth(10);
document.write(`setMonth(10): ${b}`, "<br>");

let c = new Date();
c.setHours(20);
document.write(`setHours(20): ${c}`, "<br>");

let d = new Date();
d.setFullYear(2001);
document.write(`setFullYear(2001): ${d}`, "<br>");

let e = new Date();
e.setMinutes(50);
document.write(`setMinutes(50): ${e}`, "<br>");

let f = new Date();
f.setSeconds(50);
document.write(`setSeconds(50): ${f}`, "<br>");

let g = new Date();
g.setMilliseconds(50);
document.write(`setMilliseconds(50): ${g}`, "<br>");

let h = new Date();
h.setTime(48778978799898);
document.write(`setTime(4877897879): ${h}`, "<br>");

let i = new Date();
i.setUTCDate(20);
document.write(`setUTCDate(20): ${i}`, "<br>");

let j = new Date();
j.setUTCMonth(10);
document.write(`setUTCMonth(10): ${j}`, "<br>");

let k = new Date();
k.setUTCHours(20);
document.write(`setUTCHours(20): ${k}`, "<br>");

let l = new Date();
l.setUTCFullYear(2001);
document.write(`setUTCFullYear(2001): ${l}`, "<br>");

let m = new Date();
m.setUTCMinutes(50);
document.write(`setUTCMinutes(50): ${m}`, "<br>");

let o = new Date();
o.setUTCSeconds(50);
document.write(`setUTCSeconds(50): ${o}`, "<br>");

let p = new Date();
p.setUTCMilliseconds(50);
document.write(`setUTCMilliseconds(50): ${p}`, "<br>");