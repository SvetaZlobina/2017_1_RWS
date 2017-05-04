// function PointJS(hc, da, ea, xa, vc) {
//     this._logo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABcCAYAAACYyxCUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAA10RVh0YXV0aG9yAFNrYW5lcrXlqu8AAAfJSURBVHic7Z1PaBRXHMe/M278GxW6CnalhEQMIlqUgiE2DUguha6g12Ih4sVrD70VevKUiwoKq8XFeOjBgxZ68aAXDYEKhUKpoMiaSCTR4EaINjtJ5vWQmXXcnTfz/r/ZzX7gHZKZ9/v93vvN7/ebNzM7A3To0KE9+A0AEWzfWLC37Wia2IWFBcJLtVqNc9Ata6NqMeqTVigUuCeflT179kSd84vVETfg2DYAwNcAHgGA4zjwfd+octd1QQgJ/7Q+H65F3eNYO0IfeZ4HQohxZwCA7/sghKBWqwEfo8Yato4IAiB6ZGYKx6lPi/H5MR0hBAAhhEg5o1QqwXVdOI4T21zXRalUEjfyo33WI0YXBAApl8vcBbivr0/0VLep7du3j1v/tWvXwv67TUyUiZDkTk+RlKEVQZu0GqczZf0IgIyMjDANvFKp1FOOKUJ9U1NTqfsSQjA8PAy0aAoLa0UqV65cUZaSZFupVGKyGRqdouNwZEpRvu9jw4YNGtTL4/t+aqQG25XPn2qBTM4wmZZkYByHC4URo7KGpDrj3r17LeMMYG3C79+/T90ejNUHMKZMpyI5qc5oJUfEwTC2AQB/yupRMUtt74wQhjFKD1Q2ZT0G1oczgOSxkI8rezkdkv3JenFGFJ2RIhMhZGRkhLqRxxnLy8vK2/T0NK5fv47+/n6JIfKPbWhoCLCweExc+CFh8RXXTFMsFpUsJGnAhkNonDlzJvMOicJra7SdO3cuTa4RyIkTJ2KNmJ+fV3qkmUTEbgCkWq3GyhscHBRyCm/xWQXgEkpREy3iNHmmUW2/SIHnLerKnZElRA8M2tiJwKkwj0Oogm3cC9eF7WjlihCasVm9amsSVVHC6hCqwKtXr7LqahlEo6RcLkvrZk38xPM8dHV1NQtQUDtsp4k4VBb4Wq2GzZs3AwzzzRIhowBinVGpVBi6ry9mZmaa/rdp0yalOsjx48eVnrs3Np1rB1GmpqaUjufo0aMEwK9pk80Sl8HYYzorOtWlyU+DRf+BAwfw5MkTbfLjSJmvRKFpGhcBbItToHLdodMhJuSz6mRxSFoN2VYoFISN6vAp+XweAH5I2iftENCergIlQv1aLUIiMqmCbT793iGGJIf00Ta0w3Ur3YjOUVIvQvsBjWqHtGPKoumVSlnValXKoA7NzM3NAcAXtO2JEWKioAeKhPq1YoQEcj0Ascv3TlG3w0baBm6HrKysyJnSIRFuh1y8eFGHHW3J5cuXuftwO+Tu3bvcStYrd+7c4e7D7ZCnT59yK7HJli1brOl+9uwZd5+2L+ofPnwQ6jc9Pa3YEjZyvB36+/vx5s0bHbZwE1ysa6KrqwvPnz/H1q1bhWX39PQI9w3Zv38/dx9uh5w6dQoTExPcinQwPz9v24RETp8+zd2He2G4srISeztXBtGFm050PiuQdPmEu4bkctxB1XLYvHja9kWdl/fv31vVn+iQhYUFU3Zkhu7ubq3yg4uL39O2t/Tld9WYGJfM5fefsjJRusnlcpm56dbS99RVoMsRnXvqHBSLReMvumEl9Ry2UCjg1atXJmzRgud52Lt3byYWkcGVhb+T9klNWUBicVKCrTt6OtH1oBy183op+CLIzA1TDRkcHBRWYAMSvDOREILDhw/bNgcAcOTIEWWyFkF5ortSqWTu6fcLFy4w7aerzczMJNmaCvMPdmq1GjZubL43b/MHOyk/IwMAvHjxAr29vULyRYgby9LSUnijTFnRox7JpVIpUxFis928eVMqOnjRNjGqHZK0n+d5sbJu376tbRw8DuEJIRJ4pXkDIXBd8TVmnEwWWFJWdL+kdylqfCgOAD4HMMsih2cWqRZneT0QhWan53m6VTM5AxC4dMJ6VGad7u5uOI6DfD4v/aPMlOjQ+moNB0D4QuEm3r59yynOHouLi9i5c6e0ze/evYv9/7Fjx6Tk8vAtEgrY2bNnM1vUfd+PldPb2ytUxM+fP59mmzFYzioy5xAA5PXr17GyTp48qfqs6jO9LmiGDA8Pc08Wz8DSYJUXt09ctKiweWBgwHh0hEwmGcY7QJWNZsfk5CTZsWNH/e/R0VEhexnGLIz0W0mxZiFdgYVT4kZ7QhuS7IzuxyM7pn8XAOHfbMjeMXQihsSSNglZ4dat9C/pMTjjMSScoRLWULaWssbGxqi2ra6uqkhTmTvyUg1/8OCB1RoSbfl8nmzfvj1V1sOHD406oy0/V9GoX9fLOQO5/wEQf8y+AdVPnaTWFADRr6ApI/xApAq5LHKCMf4Dhc4A9DwGxOQUYG3gN27c0GBCxBiO6BgfH2dyaCBzEUA27g8zQgCQoaGhxBwc8vLlS6m64bouU+2Ia7Tbro1EFn1f6po03YuEPwB8B/Cd/orkfMdxuNOVoE1a50z3k4tFRFIY6xtMwxxOCMHBgweZ+6Rx6NChT2SzcOnSJaufYtXJMhhOjVkol8skl8tRU1AulxP6qmgjEZnGsOHx+gBZj1LTRCIiD8DoTR4bD1s7iKQxx3HCT2dbZWlpKfoA9n9Ys9H4Hbcs5MR6mGTgA/d/AfjKqAENZOHnCGHETBBC6kfprl27tCnM5/N1PYEz3MAGq87IMrHFem5ujrswz87O0or/z5bG1haouOj4u3GrBchCDZFlN4AerBXif5HBy+AdWpj/AazZcTP7IXuyAAAAAElFTkSuQmCC";
//     var h = window
//         , u = this
//         , ya = !0
//         , cb = !0
//         , zb = !1
//         , ha = !1
//         , Ka = !0
//         , r = da
//         , t = ea
//         , O = r / 2
//         , P = t / 2
//         , f = {
//         x: 0
//         , y: 0
//     }
//         , v = {
//         fillStyle: "black"
//         , strokeStyle: "black"
//         , globalAlpha: 1
//         , font: "sans-serif"
//         , textBaseline: "top"
//     }
//         , D = function (a) {
//         console.log("[PointJS] : ", a)
//     };
//     "undefined" != typeof POINTJS_USER_LOG && (D = POINTJS_USER_LOG);
//     var La = function (a) {
//         var b = decodeURI(a.stack.toString().replace(/(@|[\(\)]|[\w]+:\/\/)/g, ""))
//             , b = b.split(/\n/)
//             , b = ("" == b[2] ? b[0] : b[1]).split("/")
//             , b = b[b.length - 1].split(":");
//         console.log('ERROR "' + a.toString() + '" \n in      ' + b[0] + " \n line :   " + b[1] + " \n symbol : " + b[2])
//     }
//         , Ab = function (a, b) {
//         D('function "' + a + '" is DEPRECATED, use a "' + b + '"')
//     };
//     this.game = {};
//     this.levels = {};
//     this.camera = {};
//     this.keyControl = {};
//     this.mouseControl = {};
//     this.touchControl = {};
//     this.actionControl = {};
//     this.system = {};
//     this.vector = {};
//     this.math = {};
//     this.colors = {};
//     this.brush = {};
//     this.audio = {};
//     this.wAudio = {};
//     this.dialogs = {};
//     this.resources = {};
//     this.tiles = {};
//     this.OOP = {};
//     this.GUI = {};
//     this.GL = {};
//     this.memory = {};
//     this.system.log = D;
//     this.system.consoleLog = function (a) {
//         this.log = !0 === a ? console.log : D
//     };
//     this.system.setTitle = function (a) {
//         h.document.title = a
//     };
//     this.system.setSettings = function (a) {
//         ya = q(a.isShowError) ? a.isShowError : !0;
//         cb = q(a.isStopForError) ? a.isStopForError : !0;
//         zb = q(a.isAutoClear) ? a.isAutoClear : !1;
//         q(a.isZBuffer)
//     };
//     this.system.setDefaultSettings = function (a) {
//         for (var b in a) v[b] = a[b];
//         g.save()
//     };
//     this.system.setSmoothing = function (a) {
//         Ka = a;
//         Bb()
//     };
//     var ic = {
//         name: "PointJS"
//         , desc: "HTML5 2D Game Engine for JavaScript"
//         , author: "Skaner (skaner0@yandex.ru)"
//         , version: "0.0.7.4"
//     };
//     this.system.getInfo = function () {
//         return ic
//     };
//     var Cb = ""
//         , Db = ""
//         , Eb = function (a, b) {
//         var c = l.createShader(a);
//         l.shaderSource(c, b);
//         l.compileShader(c);
//         return l.getShaderParameter(c, l.COMPILE_STATUS) ? c : (D("Error shader compilation : " + l.getShaderInfoLog(c)), l.deleteShader(c), null)
//     }
//         , T, l = !1
//         , w = !1
//         , jc = function () {
//         w = h.document.createElement("canvas");
//         w.width = m.width;
//         w.height = m.height;
//         w.style.position = "fixed";
//         w.style.left = 0;
//         w.style.top = 0;
//         w.style.zIndex = m.style.zIndex + 1;
//         w.id = "PointJS-canvas_1";
//         w.style.backgroundColor = xa.backgroundColor ? xa.backgroundColor : "black";
//         n.attach(w);
//         n.addEvent("onload", "hideSourceCanvas", function () {
//             m.style.display = "none"
//         });
//         l = w.getContext("webgl") || w.getContext("experimental-webgl");
//         l.viewport(0, 0, r, t);
//         l.clearColor(0, 0, 0, 1);
//         l.clear(l.COLOR_BUFFER_BIT)
//     }
//         , db, eb, Fb, Gb, fb, gb, kc = function () {
//         var a = l.createBuffer();
//         l.bindBuffer(l.ARRAY_BUFFER, a);
//         l.bufferData(l.ARRAY_BUFFER, new Float32Array([0, 0, r, 0, 0, t, 0, t, r, 0, r, t]), l.STATIC_DRAW);
//         eb = l.getAttribLocation(T, "aPosition");
//         Fb = l.getUniformLocation(T, "uResolution");
//         db = l.getAttribLocation(T, "aTextCoord");
//         fb = l.getUniformLocation(T, "uInversion");
//         gb = l.getUniformLocation(T, "uMirrorX");
//         l.uniform2f(Fb, r, t);
//         l.enableVertexAttribArray(eb);
//         l.vertexAttribPointer(eb, 2, l.FLOAT, !1, 0, 0);
//         a = l.createBuffer();
//         l.bindBuffer(l.ARRAY_BUFFER, a);
//         l.bufferData(l.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), l.STATIC_DRAW);
//         l.enableVertexAttribArray(db);
//         l.vertexAttribPointer(db, 2, l.FLOAT, !1, 0, 0);
//         Gb = l.createTexture();
//         l.bindTexture(l.TEXTURE_2D, Gb);
//         l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_S, l.CLAMP_TO_EDGE);
//         l.texParameteri(l.TEXTURE_2D, l.TEXTURE_WRAP_T, l.CLAMP_TO_EDGE);
//         l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MIN_FILTER, l.NEAREST);
//         l.texParameteri(l.TEXTURE_2D, l.TEXTURE_MAG_FILTER, l.NEAREST)
//     };
//     this.GL.filter = function (a, b) {
//         if (!l) return D("GL is not inited. Use a initGL() function.");
//         "inversion" == a && l.uniform1i(fb, 1);
//         "mirror-x" == a && l.uniform1i(gb, 1)
//     };
//     var hb = function (a, b) {
//         this.x = a || 0;
//         this.y = b || 0
//     };
//     hb.prototype = {
//         abs: function () {
//             return new hb(Math.abs(this.x), Math.abs(this.y))
//         }
//     };
//     var e = function (a, b) {
//         return new hb(a, b)
//     }
//         , A = function (a, b) {
//         return {
//             w: a
//             , h: b
//         }
//     }
//         , qa = function (a, b) {
//         return {
//             x: a.x + b.x
//             , y: a.y + b.y
//         }
//     }
//         , ib = function (a, b) {
//         return {
//             x: a.x - b.x
//             , y: a.y - b.y
//         }
//     }
//         , M = function (a, b, c) {
//         if (0 != c) {
//             var d = z(c);
//             c = a.x - b.x;
//             a = a.y - b.y;
//             var k = Math.cos(d)
//                 , d = Math.sin(d);
//             return e(c * k - a * d + b.x, c * d + a * k + b.y)
//         }
//         return e(a.x, a.y)
//     }
//         , za = function (a, b) {
//         return 180 / Math.PI * Math.atan2(b.y - a.y, b.x - a.x)
//     }
//         , ia = function (a, b) {
//         if (3 > b.length) return !1;
//         var c = 0
//             , d = b.length - 1
//             , k = b[d].y < a.y
//             , e, f;
//         e = 0;
//         for (f = b.length; e < f; ++e) {
//             var g = b[e].y < a.y
//                 , d = ib(b[d], a)
//                 , h = ib(b[e], a)
//                 , d = d.x * (h.y - d.y) - d.y * (h.x - d.x);
//             g && !k && 0 < d && (c += 1);
//             !g && k && 0 > d && (c += 1);
//             d = e;
//             k = g
//         }
//         return 0 != (c & 1)
//     };
//     this.vector.point = e;
//     this.vector.v2d = e;
//     this.vector.size = A;
//     this.vector.w2h = A;
//     this.vector.getPointAngle = M;
//     this.vector.isPointIn = ia;
//     this.vector.pointMinus = ib;
//     this.vector.pointPlus = qa;
//     this.vector.pointInc = function (a, b) {
//         return {
//             x: a.x * b.x
//             , y: a.y * b.y
//         }
//     };
//     this.vector.pointDiv = function (a, b) {
//         return {
//             x: a.x / (0 != b.x ? b.x : 1)
//             , y: a.y / (0 != b.y ? b.y : 1)
//         }
//     };
//     this.vector.pointAbs = function (a) {
//         return {
//             x: Math.abs(a.x)
//             , y: Math.abs(a.y)
//         }
//     };
//     this.vector.getMidPoint = function (a, b) {
//         return q(b) ? e((a.x + b.x) / 2, (a.y + b.y) / 2) : 0
//     };
//     this.vector.getDistance = function (a, b) {
//         return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
//     };
//     this.vector.isSame = function (a, b) {
//         return q(b) ? a.x == b.x && a.y == b.y : !1
//     };
//     this.vector.getAngle2Points = za;
//     this.vector.newStaticBox = function (a, b, c, d) {
//         return {
//             x: a
//             , y: b
//             , w: a + c
//             , h: b + d
//         }
//     };
//     this.vector.newDynamicBoxRect = function (a, b, c, d) {
//         return [e(a, b), e(a + c, b), e(a + c, b + d), e(a, b + d)]
//     };
//     var z = function (a) {
//         return Math.PI / 180 * a
//     }
//         , Z = function (a, b, c) {
//         var d = Math.floor(Math.random() * (b - a + 1) + a);
//         return c && 0 == d ? Z(a, b, c) : d
//     }
//         , jb = function (a) {
//         return 0 > a ? -1 : 1
//     };
//     this.math.limit = function (a, b) {
//         a = Math.abs(a);
//         b = Math.abs(b);
//         return a < b ? a * jb(a) : b * jb(b)
//     };
//     this.math.sign = jb;
//     this.math.a2r = z;
//     this.math.random = Z;
//     this.math.toInt = function (a) {
//         return a >> 0
//     };
//     var lc = 0
//         , n = {
//         loaded: !1
//         , events: {
//             onload: []
//             , preLoop: []
//             , postLoop: []
//             , gameBlur: []
//             , gameFocus: []
//             , gameResize: []
//         }
//         , addEvent: function (a, b, c) {
//             "onload" == a && n.loaded ? c() : n.events[a].push({
//                     id: b
//                     , func: c
//                 })
//         }
//         , delEvent: function (a, b) {
//             x(n.events[a], function (a, d, k) {
//                 a.id == b && k.splice(d, 1)
//             })
//         }
//         , runEvent: function (a) {
//             x(n.events[a], function (a) {
//                 "function" == typeof a.func && a.func()
//             })
//         }
//         , attach: function (a) {
//             var b = function () {
//                 h.document.body.appendChild(a)
//             };
//             n.loaded ? b() : n.addEvent("onload", "attachElement_PointJS" + (lc += 1), b)
//         }
//         , getWH: function () {
//             return {
//                 w: parseInt(h.document.documentElement.clientWidth || h.innerWidth || h.document.body.clientWidth)
//                 , h: parseInt(h.document.documentElement.clientHeight || h.innerHeight || h.document.body.clientHeight)
//             }
//         }
//     };
//     this.system.delEvent = function (a, b) {
//         n.delEvent(a, b)
//     };
//     this.system.addEvent = function (a, b, c) {
//         n.addEvent(a, b, c)
//     };
//     this.system.attachDOM = function (a) {
//         n.attach(a)
//     };
//     this.system.newDOM = function (a) {
//         a = h.document.createElement(a);
//         a.style.position = "fixed";
//         a.style.left = 0;
//         a.style.top = 0;
//         a.style.zIndex = m.style.zIndex + 1;
//         a.style.border = "none";
//         n.attach(a);
//         return a
//     };
//     var m = h.document.createElement("canvas");
//     m.crossOrigin = "anonymous";
//     m.width = parseInt(da);
//     m.height = parseInt(ea);
//     m.style.position = "fixed";
//     m.style.left = 0;
//     m.style.top = 0;
//     m.style.zIndex = 1E3;
//     m.id = "PointJS-canvas_0";
//     m.style.backgroundColor = "black";
//     if ("object" == typeof xa)
//         for (var kb in xa) kb.match(/margin|padding|position/) || (m.style[kb] = xa[kb]);
//     n.addEvent("onload", "Window_Hide_Scroll", function () {
//         h.document.body.style.overflow = "hidden";
//         lb = {
//             x: parseInt(m.style.left)
//             , y: parseInt(m.style.top)
//         }
//     });
//     var lb = e(0, 0)
//         , g = null
//         , l = null
//         , aa = !1
//         , g = m.getContext("2d");
//     "GL2D" == hc ? (jc(), Db = "attribute vec2 aPosition; attribute vec2 aTextCoord; uniform vec2 uResolution; uniform int uMirrorX; varying vec2 vTextureCoord; void main() {    vec2 zeroToOne = aPosition / uResolution;    vec2 zeroToTwo = zeroToOne * 2.0;    vec2 clipSpace = zeroToTwo - 1.0;    gl_Position = vec4(clipSpace * vec2((uMirrorX == 1 ? -1 : 1), -1), 0, 1);    vTextureCoord = aTextCoord; }", Cb = "precision mediump float; uniform sampler2D texture; varying vec2 vTextureCoord; uniform int uInversion; void main() { \tvec4 texColor = texture2D(texture,vTextureCoord.xy); \tvec4 finalColor; \tfinalColor = texColor; \tif (uInversion == 1) \t\tfinalColor = 1.0 - finalColor; \tgl_FragColor = finalColor; }", T = l.createProgram(), l.attachShader(T, Eb(l.VERTEX_SHADER, Db)), l.attachShader(T, Eb(l.FRAGMENT_SHADER, Cb)), l.linkProgram(T), l.getProgramParameter(T, l.LINK_STATUS) || D("Can't install shader"), l.useProgram(T), kc(), aa = !0, n.addEvent("postLoop", "drawGL", function () {
//             l ? (l.texImage2D(l.TEXTURE_2D, 0, l.RGBA, l.RGBA, l.UNSIGNED_BYTE, m), l.drawArrays(l.TRIANGLES, 0, 6), l.uniform1i(fb, 0), l.uniform1i(gb, 0)) : D("GL is not inited. Use a initGL() function.")
//         })) : (n.attach(m), g.textBaseline = v.textBaseline);
//     this.system.setStyle = function (a) {
//         if ("object" == typeof a)
//             for (var b in a) m.style[b] = a[b]
//     };
//     this.system.getContext = function () {
//         return g
//     };
//     this.system.resize = function (a, b) {
//         r = a || da;
//         t = b || ea;
//         O = r / 2;
//         P = t / 2;
//         m.width = r;
//         m.height = t;
//         aa && (w.width = m.width, w.height = m.height, l.viewport(0, 0, r, t))
//     };
//     this.system.initFullPage = function () {
//         n.addEvent("gameResize", "PointJS_resizeGame", function () {
//             r = n.getWH().w;
//             t = n.getWH().h;
//             O = r / 2;
//             P = t / 2;
//             m.width = r;
//             m.height = t;
//             aa && (w.width = m.width, w.height = m.height, l.viewport(0, 0, r, t));
//             g.textBaseline = v.textBaseline
//         });
//         n.runEvent("gameResize", "PointJS_resizeGame")
//     };
//     var U = !1
//         , mc = function () {
//         U || (this.requestFullscreen ? (this.requestFullscreen(), U = !0) : this.mozRequestFullScreen ? (this.mozRequestFullScreen(), U = !0) : this.webkitRequestFullscreen && (this.webkitRequestFullscreen(), U = !0), r = n.getWH().w, t = n.getWH().h, O = r / 2, P = t / 2, m.width = r, m.height = t, aa && (w.width = m.width, w.height = m.height, l.viewport(0, 0, r, t)))
//     }
//         , mb = function (a) {
//         U = Hb(h.document.fullscreenElement || h.document.mozFullScreenElement || h.document.webkitFullscreenElement)
//     };
//     h.document.addEventListener("webkitfullscreenchange", mb);
//     h.document.addEventListener("mozfullscreenchange", mb);
//     h.document.addEventListener("fullscreenchange", mb);
//     this.system.initFullScreen = function () {
//         U || (h.document.documentElement.onclick = mc, Ba || (n.addEvent("gameResize", "PointJS_initFullScreen", function () {
//             r = n.getWH().w;
//             t = n.getWH().h;
//             O = r / 2;
//             P = t / 2;
//             m.width = r;
//             m.height = t;
//             aa && (w.width = m.width, w.height = m.height, l.viewport(0, 0, r, t));
//             g.textBaseline = v.textBaseline
//         }), n.runEvent("gameResize", "PointJS_initFullScreen")))
//     };
//     this.system.exitFullScreen = function () {
//         U && (n.delEvent("gameResize", "PointJS_initFullScreen"), h.document.exitFullscreen ? (h.document.exitFullscreen(), U = !1) : h.document.mozCancelFullScreen ? (h.document.mozCancelFullScreen(), U = !1) : h.document.webkitExitFullscreen && (h.document.webkitExitFullscreen(), U = !1), r = da, t = ea, O = r / 2, P = t / 2, m.width = r, m.height = t, aa && (w.width = m.width, w.height = m.height, l.viewport(0, 0, r, t)), h.document.documentElement.onclick = function () {
//         })
//     };
//     this.system.isFullScreen = function () {
//         return U
//     };
//     this.system.exitFullPage = function () {
//         r = da;
//         t = ea;
//         O = r / 2;
//         P = t / 2;
//         m.width = r;
//         m.height = t;
//         aa && (w.width = m.width, w.height = m.height, l.viewport(0, 0, r, t))
//     };
//     var W = !1
//         , Ba = !1
//         , Ib = da
//         , Jb = ea
//         , Kb = !1;
//     this.system.initFullScale = function (a) {
//         Ba || (a && (Kb = !0), n.addEvent("gameResize", "PointJS_initFullScale", function () {
//             var a = Ib
//                 , c = Jb
//                 , d = n.getWH();
//             Kb ? (a = d.w, c = d.h) : d.w < d.h ? (c = d.w / r, a = d.w, c *= t) : d.h < d.w && (a = d.h / t, c = d.h, a *= r);
//             Ib = a;
//             Jb = c;
//             W = {
//                 w: a / r
//                 , h: c / t
//             };
//             m.style.width = a + "px";
//             m.style.height = c + "px";
//             aa && (w.style.width = m.style.width, w.style.height = m.style.height, l.viewport(0, 0, r, t))
//         }), n.runEvent("gameResize", "PointJS_initFullScale"), Ba = !0)
//     };
//     this.system.exitFullScale = function () {
//         Ba && (Ba = !1, n.delEvent("gameResize", "PointJS_initFullScale"), m.style.width = da + "px", m.style.height = ea + "px", aa && (w.style.width = m.style.width, w.style.height = m.style.height, l.viewport(0, 0, r, t)))
//     };
//     this.system.getWH = function () {
//         return n.getWH()
//     };
//     var nc = []
//         , oc = 0
//         , ra = function (a, b) {
//         var c = h.document.createElement(a);
//         c.style.position = "fixed";
//         c.style.zIndex = m.style.zIndex + 1;
//         c.style.outline = "none";
//         c.style.left = b.x ? b.x + "px" : 0;
//         c.style.top = b.y ? b.y + "px" : 0;
//         b.w && (c.style.width = b.w + "px");
//         b.h && (c.style.height = b.h + "px");
//         c.style.backgroundColor = b.fillColor ? b.fillColor : "";
//         c.style.color = b.color ? b.color : "black";
//         c.style.border = (b.strokeWidth || 0) + "px solid " + (b.strokeColor || "");
//         c.onmousedown = c.onmouseup = c.onmousemove = c.onclick = c.onkeydown = c.onkeypress = c.onkeyup = function (a) {
//             a.stopPropagation()
//         };
//         c.oncontextmenu = c.onselectstart = c.ondragstart = function (a) {
//             a.stopPropagation();
//             return !1
//         };
//         this.w = b.w || 0;
//         this.h = b.h || 0;
//         this.el = c;
//         this.id = oc += 1;
//         this.visible = !0;
//         if (b.events) this.onEvents(b.events);
//         b.style && this.setStyle(b.style);
//         nc.push(this)
//     };
//     ra.prototype = {
//         onEvents: function (a) {
//             "function" == typeof a.keyPress && (this.el.onkeypress = function (b) {
//                 b.stopPropagation();
//                 var c = !1;
//                 0 != b.which && 0 != b.charCode && 32 <= b.which && (c = String.fromCharCode(b.which));
//                 return a.keyPress(c)
//             });
//             "function" == typeof a.change && (this.el.oninput = function (b) {
//                 b.stopPropagation();
//                 a.change()
//             });
//             "function" == typeof a.mouseOver && (this.el.onmouseover = function (b) {
//                 b.stopPropagation();
//                 a.mouseOver()
//             });
//             "function" == typeof a.mouseOut && (this.el.onmouseleave = function (b) {
//                 b.stopPropagation();
//                 a.mouseOut()
//             });
//             "function" == typeof a.click && (this.el.onclick = function (b) {
//                 b.stopPropagation();
//                 a.click()
//             });
//             "function" == typeof a.mousePress && (this.el.onmousedown = function (b) {
//                 b.stopPropagation();
//                 a.mousePress()
//             });
//             "function" == typeof a.mouseUp && (this.el.onmouseup = function (b) {
//                 b.stopPropagation();
//                 a.mouseUp()
//             })
//         }
//         , getID: function () {
//             return this.id
//         }
//         , move: function (a) {
//             this.el.style.left = parseInt(this.el.style.left) + a.x + "px";
//             this.el.style.top = parseInt(this.el.style.top) + a.y + "px"
//         }
//         , setPosition: function (a) {
//             this.el.style.left = a.x + "px";
//             this.el.style.top = a.y + "px"
//         }
//         , setPositionC: function (a) {
//             this.el.style.left = a.x - this.w / 2 + "px";
//             this.el.style.top = a.y - this.h / 2 + "px"
//         }
//         , getPosition: function () {
//             return e(parseInt(this.el.style.left), parseInt(this.el.style.top))
//         }
//         , getPositionC: function () {
//             return e(parseInt(this.el.style.left) + this.w / 2, parseInt(this.el.style.top) + this.h / 2)
//         }
//         , setSize: function (a) {
//             this.w = a.w;
//             this.h = a.h;
//             this.el.style.width = a.w + "px";
//             this.el.style.height = a.h + "px"
//         }
//         , getSize: function () {
//             return A(this.w, this.h)
//         }
//         , setStyle: function (a) {
//             for (var b in a) this.el.style[b] = a[b]
//         }
//         , setVisible: function (a) {
//             if (this.visible = a) return this.el.style.display = "block";
//             this.el.style.display = "none"
//         }
//         , isVisible: function () {
//             return this.visible
//         }
//         , setEnabled: function (a) {
//             this.enabled = a;
//             this.el.disabled = !a
//         }
//         , setText: function (a) {
//             this.el.innerHTML && (this.el.innerHTML = a, this.w = parseInt(this.el.offsetWidth), this.h = parseInt(this.el.offsetHeight));
//             this.el.value && (this.el.value = a)
//         }
//         , getText: function () {
//             if (this.el.innerHTML) return this.el.innerHTML;
//             this.el.value && (this.el.value = text)
//         }
//     };
//     this.GUI.newButton = function (a) {
//         var b = new ra("input", a);
//         b.el.type = "button";
//         b.el.value = a.text ? a.text : "Button " + b.id;
//         n.attach(b.el);
//         return b
//     };
//     this.GUI.newInput = function (a) {
//         var b = new ra("input", a);
//         b.el.type = "text";
//         b.el.value = a.text ? a.text : "Button " + b.id;
//         b.el.oncontextmenu = b.el.onselectstart = b.el.ondragstart = function (a) {
//         };
//         n.attach(b.el);
//         return b
//     };
//     this.GUI.newPanel = function (a) {
//         var b = new ra("div", a);
//         b.el.innerHTML = a.text ? a.text : "Panel " + b.id;
//         n.attach(b.el);
//         return b
//     };
//     this.GUI.newImage = function (a) {
//         var b = new ra("img", a);
//         if (!a.file) return D("error in GUI.newImage : Where image file?");
//         b.el.src = a.file;
//         n.attach(b.el);
//         b.el.onload = function () {
//             b.w || (b.w = parseInt(this.width));
//             b.h || (b.h = parseInt(this.height))
//         };
//         return b
//     };
//     this.GUI.newHTML = function (a) {
//         var b = new ra("div", a);
//         b.el.innerHTML = a.text ? a.text.toString() : "Your HTML Text";
//         n.attach(b.el);
//         n.addEvent("onload", "getWH_HTMLPanel" + b.id, function () {
//             b.w || (b.w = parseInt(b.el.offsetWidth));
//             b.h || (b.h = parseInt(b.el.offsetHeight))
//         });
//         return b
//     };
//     var E = !1;
//     this.actionControl.initActionControl = function () {
//         u.touchControl.isTouchSupported() && (E = !0, u.touchControl.initTouchControl());
//         u.mouseControl.initMouseControl();
//         return this
//     };
//     this.actionControl.isPress = function () {
//         return E ? u.touchControl.isPress() : u.mouseControl.isPress("LEFT")
//     };
//     this.actionControl.isDown = function () {
//         return E ? u.touchControl.isDown() : u.mouseControl.isDown("LEFT")
//     };
//     this.actionControl.isUp = function () {
//         return E ? u.touchControl.isUp() : u.mouseControl.isUp("LEFT")
//     };
//     this.actionControl.isInObject = function (a) {
//         return E ? u.touchControl.isInObject(a) : u.mouseControl.isInObject(a)
//     };
//     this.actionControl.isInStatic = function (a) {
//         return E ? u.touchControl.isInStatic(a) : u.mouseControl.isInStatic(a)
//     };
//     this.actionControl.isInDynamic = function (a) {
//         return E ? u.touchControl.isInDynamic(a) : u.mouseControl.isInDynamic(a)
//     };
//     this.actionControl.isPeekObject = function (a) {
//         return E ? u.touchControl.isPeekObject(a) : u.mouseControl.isPeekObject("LEFT", a)
//     };
//     this.actionControl.isPeekStatic = function (a) {
//         return E ? u.touchControl.isPeekStatic(a) : u.mouseControl.isPeekStatic("LEFT", a)
//     };
//     this.actionControl.isPeekDynamic = function (a) {
//         return E ? u.touchControl.isPeekDynamic(a) : u.mouseControl.isPeekDynamic("LEFT", a)
//     };
//     this.actionControl.getPosition = function (a) {
//         return E ? u.touchControl.getPosition() : u.mouseControl.getPosition()
//     };
//     this.actionControl.getPositionS = function (a) {
//         return E ? u.touchControl.getPositionS() : u.mouseControl.getPositionS()
//     };
//     this.actionControl.getMouse = function () {
//         return u.mouseControl
//     };
//     this.actionControl.getTouch = function () {
//         return E ? u.touchControl : !1
//     };
//     this.actionControl.getActiveControl = function () {
//         return E ? u.touchControl : u.mouseControl
//     };
//     this.actionControl.getActiveControlName = function () {
//         return E ? "touchControl" : "mouseControl"
//     };
//     this.actionControl.getSpeed = function () {
//         if (!E) return u.mouseControl.getSpeed() || u.touchControl.getSpeed()
//     };
//     var Ma = {
//         LEFT: 37
//         , RIGHT: 39
//         , UP: 38
//         , DOWN: 40
//         , SPACE: 32
//         , CTRL: 17
//         , SHIFT: 16
//         , ALT: 18
//         , ESC: 27
//         , ENTER: 13
//         , MINUS: 189
//         , PLUS: 187
//         , CAPS_LOCK: 20
//         , BACKSPACE: 8
//         , TAB: 9
//         , Q: 81
//         , W: 87
//         , E: 69
//         , R: 82
//         , T: 84
//         , Y: 89
//         , U: 85
//         , I: 73
//         , O: 79
//         , P: 80
//         , A: 65
//         , S: 83
//         , D: 68
//         , F: 70
//         , G: 71
//         , H: 72
//         , J: 74
//         , K: 75
//         , L: 76
//         , Z: 90
//         , X: 88
//         , V: 86
//         , B: 66
//         , N: 78
//         , M: 77
//         , 0: 48
//         , 1: 49
//         , 2: 50
//         , 3: 51
//         , 4: 52
//         , 5: 53
//         , 6: 54
//         , 7: 55
//         , 8: 56
//         , C: 67
//         , 9: 57
//         , F1: 112
//         , F2: 113
//         , F3: 114
//         , F4: 115
//         , F5: 116
//         , F6: 117
//         , F7: 118
//         , F8: 119
//         , F9: 120
//         , F10: 121
//         , F11: 122
//         , F12: 123
//     }
//         , pc = {
//         37: "LEFT"
//         , 39: "RIGHT"
//         , 38: "UP"
//         , 40: "DOWN"
//         , 32: "SPACE"
//         , 17: "CTRL"
//         , 16: "SHIFT"
//         , 18: "ALT"
//         , 27: "ESC"
//         , 13: "ENTER"
//         , 189: "MINUS"
//         , 187: "PLUS"
//         , 20: "CAPS_LOCK"
//         , 8: "BACKSPACE"
//         , 9: "TAB"
//         , 81: "Q"
//         , 87: "W"
//         , 69: "E"
//         , 82: "R"
//         , 84: "T"
//         , 89: "Y"
//         , 85: "U"
//         , 73: "I"
//         , 79: "O"
//         , 80: "P"
//         , 65: "A"
//         , 83: "S"
//         , 68: "D"
//         , 70: "F"
//         , 71: "G"
//         , 72: "H"
//         , 74: "J"
//         , 75: "K"
//         , 76: "L"
//         , 90: "Z"
//         , 88: "X"
//         , 86: "V"
//         , 66: "B"
//         , 78: "N"
//         , 77: "M"
//         , 48: "0"
//         , 49: "1"
//         , 50: "2"
//         , 51: "3"
//         , 52: "4"
//         , 53: "5"
//         , 54: "6"
//         , 55: "7"
//         , 56: "8"
//         , 67: "C"
//         , 57: "9"
//         , 112: "F1"
//         , 113: "F2"
//         , 114: "F3"
//         , 115: "F4"
//         , 116: "F5"
//         , 117: "F6"
//         , 118: "F7"
//         , 119: "F8"
//         , 120: "F9"
//         , 121: "F10"
//         , 122: "F11"
//         , 123: "F12"
//     }
//         , qc = {
//         8: !0
//         , 9: !0
//         , 13: !0
//         , 18: !0
//         , 16: !0
//         , 17: !0
//         , 27: !0
//         , 112: !0
//         , 113: !0
//         , 114: !0
//         , 115: !0
//         , 116: !0
//         , 117: !0
//         , 118: !0
//         , 119: !0
//         , 120: !0
//         , 121: !0
//         , 122: !0
//         , 123: !0
//     };
//     this.keyControl.getKeyList = function () {
//         var a, b = [];
//         for (a in Ma) b.push(a);
//         return b
//     };
//     var sa = {}
//         , Ca = {}
//         , ja = {}
//         , Da = !1
//         , Ea = !1
//         , Na = !1
//         , rc = function (a) {
//         ka(ja, function (a, c, d) {
//             1 == a && (d[c] = 2)
//         })
//     };
//     this.keyControl.isDown = function (a) {
//         return 1 == sa[Ma[a]]
//     };
//     this.keyControl.isUp = function (a) {
//         return 1 == Ca[Ma[a]]
//     };
//     this.keyControl.isPress = function (a) {
//         return 1 == ja[Ma[a]]
//     };
//     this.keyControl.getInputChar = function () {
//         return Da
//     };
//     this.keyControl.getInputKey = function () {
//         return pc[Ea]
//     };
//     this.keyControl.setInputMode = function (a) {
//         Na = a
//     };
//     this.keyControl.isInputMode = function () {
//         return Na
//     };
//     this.keyControl.exitKeyControl = function () {
//         h.onkeydown = function () {
//         };
//         h.onkeypress = function () {
//         };
//         h.onkeyup = function () {
//         };
//         n.delEvent("postLoop", "PointJS_clearAllKeyUp");
//         sa = {};
//         Ca = {};
//         ja = {};
//         Na = Ea = Da = !1
//     };
//     this.keyControl.initKeyControl = function () {
//         h.onkeydown = function (a) {
//             if (Na) return Ea = a.keyCode, qc[a.keyCode] ? (a.preventDefault(), !1) : !0;
//             a.preventDefault();
//             2 != ja[a.keyCode] && (ja[a.keyCode] = 1);
//             sa[a.keyCode] = !0;
//             return !1
//         };
//         h.onkeypress = function (a) {
//             var b = !1;
//             0 != a.which && 0 != a.charCode && 32 <= a.which && (b = String.fromCharCode(a.which));
//             Da = b
//         };
//         h.onkeyup = function (a) {
//             a.preventDefault();
//             1 == sa[a.keyCode] && (Ca[a.keyCode] = !0);
//             sa[a.keyCode] = !1;
//             delete ja[a.keyCode];
//             return !1
//         };
//         n.addEvent("postLoop", "PointJS_clearAllKeyUp", function () {
//             Ca = {};
//             rc();
//             Ea = Da = !1
//         });
//         return this
//     };
//     var F = e(0, 0)
//         , Oa = e(0, 0);
//     e(0, 0);
//     var Fa = !0
//         , nb = ""
//         , Pa = !1
//         , la = e(0, 0)
//         , Qa = !1
//         , ob = {
//         LEFT: 1
//         , RIGHT: 3
//         , MIDDLE: 2
//     }
//         , Ra = {}
//         , Sa = {}
//         , Ga = {}
//         , Ha = 0
//         , Lb = function () {
//         Ra = {};
//         Sa = {};
//         Ga = {};
//         Ha = 0;
//         Qa = !1
//     }
//         , sc = function () {
//         ka(Ga, function (a, b, c) {
//             1 == a && (c[b] = 2)
//         })
//     }
//         , Ta = function (a) {
//         var b = 0
//             , c = 0;
//         a && (b = f.x, c = f.y);
//         return e(b + F.x, c + F.y)
//     };
//     this.mouseControl.getPosition = function () {
//         return Ta(1)
//     };
//     this.mouseControl.getPositionS = function () {
//         return Ta()
//     };
//     this.mouseControl.setCursorImage = function (a) {
//         nb = 'url("' + a + '"), auto';
//         h.document.body.style.cursor = nb
//     };
//     this.mouseControl.setVisible = function (a) {
//         !Fa && !a || Fa && a || (Fa = 1 == a, h.document.body.style.cursor = Fa ? nb : "none")
//     };
//     this.mouseControl.isVisible = function () {
//         return Fa
//     };
//     this.mouseControl.isDown = function (a) {
//         return Ra[ob[a]]
//     };
//     this.mouseControl.isUp = function (a) {
//         return Sa[ob[a]]
//     };
//     this.mouseControl.isPress = function (a) {
//         return 1 == Ga[ob[a]]
//     };
//     this.mouseControl.isMove = function () {
//         return Qa
//     };
//     this.mouseControl.isInStatic = function (a) {
//         var b = Ta(1);
//         return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
//     };
//     this.mouseControl.isInDynamic = function (a) {
//         return ia(Ta(1), a)
//     };
//     this.mouseControl.isInObject = function (a) {
//         return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
//     };
//     this.mouseControl.isWheel = function (a) {
//         return "UP" == a && 0 < Ha || "DOWN" == a && 0 > Ha
//     };
//     var Mb = function (a) {
//         a.preventDefault();
//         Ha = a.wheelDelta ? a.wheelDelta : -a.detail;
//         return !1
//     }
//         , Ua = !1
//         , Nb = function () {
//         Ua && (Pa = q(h.document.pointerLockElement) || q(h.document.mozPointerLockElement) ? !0 : !1)
//     };
//     this.mouseControl.initMouseLock = function () {
//         n.addEvent("onload", "initPointerLock", function () {
//             Ua = m.requestPointerLock || m.mozRequestPointerLock || !1;
//             h.document.exitPointerLock = h.document.exitPointerLock || h.document.mozExitPointerLock || !1;
//             "onpointerlockchange" in h.document ? h.document.addEventListener("pointerlockchange", Nb, !1) : "onmozpointerlockchange" in h.document && h.document.addEventListener("mozpointerlockchange", Nb, !1);
//             if (!Ua) return D("error in initMouseLock : not supported");
//             Pa || (m.onclick = Ua)
//         })
//     };
//     this.mouseControl.exitMouseLock = function () {
//         h.document.exitPointerLock();
//         m.onclick = function () {
//         };
//         la = e(0, 0)
//     };
//     this.mouseControl.unlockMouse = function () {
//         la = e(0, 0);
//         h.document.exitPointerLock()
//     };
//     this.mouseControl.isMouseLock = function () {
//         return Pa
//     };
//     this.mouseControl.getSpeed = function () {
//         return e(la.x, la.y)
//     };
//     this.mouseControl.isPeekStatic = function (a, b) {
//         return this.isPress(a) ? this.isInStatic(b) : !1
//     };
//     this.mouseControl.isPeekDynamic = function (a, b) {
//         return this.isPress(a) ? this.isInDynamic(b) : !1
//     };
//     this.mouseControl.isPeekObject = function (a, b) {
//         return this.isPress(a) && b.visible ? this.isInDynamic(b.getDynamicBox()) : !1
//     };
//     this.mouseControl.initMouseControl = function () {
//         h.onmousemove = function (a) {
//             a.preventDefault();
//             a.stopPropagation();
//             if (Pa) {
//                 var b = a.movementY || a.mozMovementY || 0;
//                 F.x += a.movementX || a.mozMovementX || 0;
//                 F.y += b;
//                 return !1
//             }
//             F.x = a.pageX - lb.x;
//             F.y = a.pageY - lb.y;
//             W && (F.x /= W.w, F.y /= W.h);
//             la.x = F.x - Oa.x;
//             la.y = F.y - Oa.y;
//             Oa.x = F.x;
//             Oa.y = F.y;
//             Qa = !0;
//             return !1
//         };
//         h.onmousedown = function (a) {
//             a.preventDefault();
//             a.stopPropagation();
//             !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
//             Ra[a.which] = !0;
//             Ga[a.which] = 1
//         };
//         h.onmouseup = function (a) {
//             a.preventDefault();
//             a.stopPropagation();
//             !a.which && a.button && (a.button & 1 ? a.which = 1 : a.button & 4 ? a.which = 2 : a.button & 2 && (a.which = 3));
//             Ra[a.which] = !1;
//             Sa[a.which] = !0;
//             delete Ga[a.which]
//         };
//         h.oncontextmenu = h.onselectstart = h.ondragstart = function () {
//             return !1
//         };
//         h.onmousewheel = Mb;
//         h.addEventListener("DOMMouseScroll", Mb, !1);
//         n.addEvent("postLoop", "PointJS_clearAllMouseUp", function () {
//             Sa = {};
//             sc();
//             Ha = 0;
//             Qa = !1;
//             la = e(0, 0)
//         });
//         return this
//     };
//     this.mouseControl.exitMouseControl = function () {
//         h.onmousemove = h.onmousedown = h.onmouseup = h.oncontextmenu = h.onselectstart = h.ondragstart = h.onmousewheel = function () {
//         };
//         n.delEvent("postLoop", "PointJS_clearAllMouseUp");
//         Lb()
//     };
//     var Va = !1
//         , Wa = 0
//         , Xa = 0
//         , H = 0
//         , I = 0
//         , y = e(0, 0)
//         , Ia = e(0, 0)
//         , Ya = e(0, 0);
//     this.touchControl.isTouchSupported = function () {
//         return !!("ontouchstart" in window)
//     };
//     this.touchControl.isMobileDevice = function () {
//         return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(h.navigator.userAgent)
//     };
//     var Ob = function () {
//         Va = !1;
//         Xa = Wa = 0;
//         y = e(0, 0);
//         I = H = 0
//     };
//     this.touchControl.getFixPositionS = function () {
//         return y.x || y.y ? e(y.x, y.y) : !1
//     };
//     this.touchControl.getFixPosition = function () {
//         return y.x || y.y ? e(y.x + f.x, y.y + f.y) : !1
//     };
//     this.touchControl.getRun = function () {
//         var a = 0
//             , b = 0;
//         y.x && y.x != H && (a = H - y.x);
//         y.y && y.y != I && (b = I - y.y);
//         return e(a, b)
//     };
//     this.touchControl.getVector = function () {
//         var a = 0
//             , b = 0;
//         y.x && y.x != H && (a = H > y.x ? 1 : -1);
//         y.y && y.y != I && (b = I > y.y ? 1 : -1);
//         return e(a, b)
//     };
//     this.touchControl.getSpeed = function () {
//         return e(Ia.x, Ia.y)
//     };
//     this.touchControl.isDown = function () {
//         return Va
//     };
//     this.touchControl.isPress = function () {
//         return 1 == Wa
//     };
//     this.touchControl.isUp = function () {
//         return 1 == Xa
//     };
//     this.touchControl.getPosition = function () {
//         return e(H + f.x, I + f.y)
//     };
//     this.touchControl.getPositionS = function () {
//         return e(H, I)
//     };
//     this.touchControl.isPeekStatic = function (a) {
//         return this.isPress() ? this.isInStatic(a) : !1
//     };
//     this.touchControl.isPeekDynamic = function (a) {
//         return this.isPress() ? this.isInDynamic(a) : !1
//     };
//     this.touchControl.isPeekObject = function (a) {
//         return this.isPress() && a.visible ? this.isInDynamic(a.getDynamicBox()) : !1
//     };
//     this.touchControl.isInStatic = function (a) {
//         var b = this.getPosition();
//         return b.x >= a.x && b.x <= a.x + a.w && b.y >= a.y && b.y <= a.y + a.h
//     };
//     this.touchControl.isInDynamic = function (a) {
//         return ia(this.getPosition(), a)
//     };
//     this.touchControl.isInObject = function (a) {
//         return a.visible ? a.angle ? this.isInDynamic(a.getDynamicBox()) : this.isInStatic(a.getStaticBox()) : !1
//     };
//     this.touchControl.getTouches = function () {
//         Ab("getTouches", "isPress, isUp, isDown")
//     };
//     this.touchControl.initTouchControl = function () {
//         h.addEventListener("touchstart", function (a) {
//             a.preventDefault();
//             H = a.targetTouches[0].pageX;
//             I = a.targetTouches[0].pageY;
//             W && (H /= W.w, I /= W.h);
//             y.x = H;
//             y.y = I;
//             Va = !0;
//             Wa = 1;
//             return !1
//         }, !1);
//         h.addEventListener("touchmove", function (a) {
//             a.preventDefault();
//             H = a.targetTouches[0].pageX;
//             I = a.targetTouches[0].pageY;
//             W && (H /= W.w, I /= W.h);
//             Ia.x = H - Ya.x;
//             Ia.y = I - Ya.y;
//             return !1
//         }, !1);
//         h.addEventListener("touchend", function (a) {
//             a.preventDefault();
//             y.x = 0;
//             y.y = 0;
//             Va = !1;
//             Xa = 1;
//             return !1
//         }, !1);
//         u.touchControl.vibrate = function (a) {
//             if (h.navigator.vibrate) return h.navigator.vibrate(a);
//             if (h.navigator.oVibrate) return h.navigator.oVibrate(a);
//             if (h.navigator.mozVibrate) return h.navigator.mozVibrate(a);
//             if (h.navigator.webkitVibrate) return h.navigator.webkitVibrate(a)
//         };
//         n.addEvent("postLoop", "PointJS_touchStopPress", function () {
//             Xa = Wa = 0;
//             Ya.x = H;
//             Ya.y = I;
//             Ia = e(0, 0)
//         });
//         return this
//     };
//     this.touchControl.exitTouchControl = function () {
//         h.ontouchstart = h.ontouchmove = h.ontouchend = function (a) {
//         };
//         n.delEvent("postLoop", "PointJS_touchStopPress");
//         Ob()
//     };
//     var Za = function (a, b, c, d) {
//         return "rgba(" + a + ", " + b + ", " + c + ", " + (d ? d : 1) + ")"
//     }
//         , Pb = function (a, b) {
//         a = "#" == a[0] ? a.substr(1, 6) : a;
//         var c = parseInt(a.substr(0, 2), 16)
//             , d = parseInt(a.substr(2, 2), 16)
//             , k = parseInt(a.substr(4, 2), 16);
//         return Za(c, d, k, b)
//     };
//     this.colors.rgb = function (a, b, c) {
//         return Za(a, b, c, 1)
//     };
//     this.colors.rgba = function (a, b, c, d) {
//         return Za(a, b, c, d)
//     };
//     this.colors.hex2rgb = function (a) {
//         return Pb(a, 1)
//     };
//     this.colors.hex2rgba = function (a, b) {
//         return Pb(a, b)
//     };
//     this.colors.randomColor = function (a, b, c) {
//         return Za(Z(a, b), Z(a, b), Z(a, b), c || 1)
//     };
//     var q = function (a) {
//         return "undefined" == typeof a || null == a ? !1 : !0
//     }
//         , Hb = function (a) {
//         return q(a) && "" !== a && 0 !== a ? !0 : !1
//     }
//         , ka = function (a, b) {
//         var c, d;
//         for (c in a)
//             if ("undefined" != typeof a[c] && (d = b(a[c], c, a)) && "break" == d) break
//     }
//         , x = function (a, b) {
//         if (a.length) {
//             var c, d, k;
//             c = 0;
//             for (d = a.length; c < d && ("undefined" == typeof a[c] || !(k = b(a[c], c, a, 0 < c ? a[c - 1] : a[a.length - 1]) || !1) || "break" != k); c += 1);
//         }
//     };
//     this.OOP.insertArrElement = function (a, b) {
//         var c = a[b];
//         a.splice(b, 1);
//         return c
//     };
//     this.OOP.insertRandArrElement = function (a) {
//         var b = Z(0, a.length - 1)
//             , c = a[b];
//         a.splice(b, 1);
//         return c
//     };
//     this.OOP.drawArr = function (a, b) {
//         var c, d;
//         c = 0;
//         for (d = a.length; c < d; c += 1) a[c] && a[c].draw && a[c].isInCamera() && (a[c].draw(), b && b(a[c], c))
//     };
//     var Qb = function (a) {
//         a.length = 0
//     };
//     this.OOP.readJSON = function (a, b) {
//         var c = {}
//             , d = new XMLHttpRequest;
//         d.open("GET", a, !0);
//         B.add();
//         d.onreadystatechange = function () {
//             4 == d.readyState && (c = d.responseText, c = JSON.parse(c), B.load(), b(c))
//         };
//         d.send()
//     };
//     this.OOP.toString = function (a, b) {
//         var c, d = 0
//             , k, e = "[";
//         for (c in a) k = a[c], "number" == typeof k && b && (k = parseInt(k)), e += (0 < d ? ", " : "") + c + " : " + k, d += 1;
//         return e + "]"
//     };
//     this.OOP.sendGET = function (a, b, c) {
//         var d = new XMLHttpRequest
//             , k = "?";
//         ka(b, function (a, b) {
//             k += b + "=" + encodeURIComponent(a) + "&"
//         });
//         d.open("GET", a + k, !0);
//         d.onreadystatechange = function () {
//             4 == d.readyState && c(d.responseText)
//         };
//         d.send()
//     };
//     this.OOP.sendPOST = function (a, b, c) {
//         var d = new XMLHttpRequest
//             , k = "";
//         ka(b, function (a, b) {
//             k += b + "=" + encodeURIComponent(a) + "&"
//         });
//         d.open("POST", a, !0);
//         d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         d.onreadystatechange = function () {
//             4 == d.readyState && c(d.responseText)
//         };
//         d.send(k)
//     };
//     this.OOP.sendPOSTScreen = function (a, b, c) {
//         var d = new XMLHttpRequest;
//         b = b + "=" + m.toDataURL("image/png");
//         d.open("POST", a, !0);
//         d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         d.onreadystatechange = function () {
//             4 == d.readyState && c(d.responseText)
//         };
//         d.send(b)
//     };
//     this.OOP.isDef = q;
//     this.OOP.isSet = Hb;
//     this.OOP.forEach = ka;
//     this.OOP.forInt = function (a, b) {
//         var c, d;
//         for (c = 0; c < a && (!(d = b(c)) || "break" != d); c += 1);
//     };
//     this.OOP.forXY = function (a, b, c) {
//         var d, k, e;
//         for (k = 0; k < b; k += 1)
//             for (d = 0; d < a && (!(e = c(d, k)) || "break" != e); d += 1);
//     };
//     this.OOP.forArr = x;
//     this.OOP.clearArr = Qb;
//     this.OOP.fillArr = function (a, b, c) {
//         a.length = 0;
//         var d;
//         for (d = 0; d < b; d += 1) a.push(c(d, 0 < d ? a[d - 1] : !1));
//         return a
//     };
//     this.OOP.delObject = function (a, b) {
//         var c, d;
//         c = 0;
//         for (d = a.length; c < d; c += 1)
//             if (a[c].id == b.id) return a.splice(c, 1), !0
//     };
//     this.OOP.randArrElement = function (a) {
//         return a[Z(0, a.length - 1)]
//     };
//     this.OOP.readJSONSync = function (a) {
//         var b = new XMLHttpRequest;
//         b.open("GET", a, !1);
//         b.send();
//         a = b.responseText;
//         return a = JSON.parse(a)
//     };
//     this.OOP.sendGETSync = function (a, b) {
//         var c = new XMLHttpRequest
//             , d = "?";
//         ka(b, function (a, b) {
//             d += b + "=" + encodeURIComponent(a) + "&"
//         });
//         c.open("GET", a + d, !1);
//         c.send();
//         return c.responseText
//     };
//     this.OOP.sendPOSTSync = function (a, b) {
//         var c = new XMLHttpRequest
//             , d = "";
//         ka(b, function (a, b) {
//             d += b + "=" + encodeURIComponent(a) + "&"
//         });
//         c.open("POST", a, !1);
//         c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//         c.send(d);
//         return c.responseText
//     };
//     this.OOP.runCode = function (a) {
//         (new Function("", a))()
//     };
//     var J = {};
//     this.OOP.includeSync = function (a, b) {
//         if (J[a]) J[a].loaded && !b && J[a].code();
//         else {
//             J[a] = {
//                 loaded: !1
//                 , code: function () {
//                     console.log(a + " is loading")
//                 }
//             };
//             var c = new XMLHttpRequest;
//             c.open("GET", a, !1);
//             c.send();
//             J[a].code = new Function("", c.responseText);
//             J[a].loaded = !0;
//             J[a].code()
//         }
//     };
//     this.OOP.include = function (a, b, c) {
//         if (J[a]) J[a].loaded && !c && J[a].code(), b && b();
//         else {
//             J[a] = {
//                 loaded: !1
//                 , code: function () {
//                     console.log(a + " is loading")
//                 }
//             };
//             var d = new XMLHttpRequest;
//             d.open("GET", a, !0);
//             d.onreadystatechange = function () {
//                 4 == d.readyState && (J[a].code = new Function("", d.responseText), J[a].loaded = !0, J[a].code(), b && b())
//             };
//             d.send()
//         }
//     };
//     var ta = 60
//         , K = Date.now()
//         , $a = 0
//         , ab = -1
//         , Rb = K
//         , fa = {};
//     this.game.setFPS = function (a) {
//         ta = 0 < a ? a : 60
//     };
//     this.game.getFPS = function () {
//         return ta
//     };
//     this.game.getDT = function (a) {
//         a || (a = 1E3);
//         return $a / a
//     };
//     this.game.getTime = function () {
//         return K
//     };
//     var Sb = function () {
//         return h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame || function (a) {
//                 h.setTimeout(a, 1E3 / ta)
//             }
//     }
//         , Ja = Sb()
//         , Tb = function () {
//         K = Date.now();
//         if (zb) {
//             var a = e(0, 0)
//                 , b = e(r, t);
//             g.clearRect(a.x, a.y, b.x, b.y)
//         }
//         n.runEvent("preLoop")
//     }
//         , Ub = function () {
//         n.runEvent("postLoop");
//         -1 != ab && ($a = K - ab);
//         ab = K
//     }
//         , G = {
//         func: function () {
//             console.log('please, use a "setLoop" function.');
//             Ja = function () {
//             }
//         }
//         , start: !1
//         , end: !1
//         , audio: !1
//         , fps: !1
//         , name: "NotLoop"
//     }
//         , Vb = function () {
//         G.audio && x(G.audio, function (a) {
//             a.stop()
//         })
//     };
//     this.game.newLoop = function (a, b, c, d) {
//         "function" == typeof b ? fa[a] = {
//                 func: b
//                 , start: c || !1
//                 , end: d || !1
//                 , audio: !1
//                 , fps: !1
//                 , name: a
//             } : ba("error in newLoop : " + b + " is not a function")
//     };
//     this.game.newLoopFromClassObject = function (a, b) {
//         if (!b.update) return ba('error in newLoopFromClassObject : function "update" not found');
//         fa[a] = {
//             func: b.update
//             , start: b.entry || !1
//             , end: b.exit || !1
//             , audio: !1
//             , fps: !1
//             , name: a
//         }
//     };
//     this.game.newLoopFromConstructor = function (a, b) {
//         var c = new b;
//         if (!c.update) return ba('error in newLoopFromConstructor : function "update" not found');
//         fa[a] = {
//             func: c.update
//             , start: c.entry || !1
//             , end: c.exit || !1
//             , audio: !1
//             , fps: !1
//             , name: a
//         }
//     };
//     this.game.setLoopSound = function (a, b) {
//         var c;
//         fa[a].audio || (fa[a].audio = []);
//         for (c = 0; c < b.length; c += 1) b[c].setNextPlay(b[c + 1 == b.length ? 0 : c + 1]), fa[a].audio.push(b[c])
//     };
//     this.game.setLoop = function (a) {
//         if (!fa[a]) return ba("setLoop : " + a + " is no a Loop");
//         Vb();
//         Lb();
//         sa = {};
//         Ca = {};
//         ja = {};
//         Ea = Da = !1;
//         Ob();
//         pb(e(0, 0));
//         G.end && G.end();
//         G = fa[a];
//         G.start && G.start();
//         G.audio && G.audio[0].play()
//     };
//     var Wb = function () {
//         if (60 > ta) {
//             var a = 1E3 / ta;
//             try {
//                 K = Date.now(), K - Rb > a && (Tb(), G.func($a), Rb = K, Ub())
//             }
//             catch (b) {
//                 ya && La(b), cb && (ya || La(b), ba())
//             }
//         }
//         else try {
//             Tb(), G.func($a), Ub()
//         }
//         catch (b) {
//             ya && La(b), cb && (ya || La(b), ba())
//         }
//         Ja(Wb)
//     }
//         , Xb = function (a) {
//         ha || (ha = !0, ta = a || 60, Ja(Wb))
//     }
//         , ba = function (a) {
//         if (!ha) return D(q(a) ? a : "game is stop");
//         ha = !1;
//         Vb();
//         Ja = function () {
//             D(q(a) ? a : "game is stop")
//         }
//     };
//     this.game.getWH = function () {
//         return {
//             w: r
//             , h: t
//             , w2: O
//             , h2: P
//         }
//     };
//     this.game.getWH2 = function () {
//         return {
//             w: r / 2
//             , h: t / 2
//         }
//     };
//     this.game.getResolution = function () {
//         return Math.min(r / da, t / ea)
//     };
//     this.game.startLoop = function (a, b) {
//         this.setLoop(a);
//         this.start(b)
//     };
//     this.game.start = Xb;
//     this.game.stop = ba;
//     this.game.resume = function (a) {
//         ha || (G.audio && G.audio[0].play(), D(a || "game is run"), Ja = Sb(), ab = -1, Xb())
//     };
//     var tc = []
//         , uc = 0
//         , ma = !1
//         , ga = function (a, b) {
//         b.prototype = Object.create(a.prototype);
//         b.prototype.constructor = b
//     }
//         , C = function (a) {
//         this.type = "BaseObject";
//         this.id = uc += 1;
//         this.x = a.x || 0;
//         this.y = a.y || 0;
//         this.w = a.w || 1;
//         this.h = a.h || 1;
//         this.ondraw = a.ondraw ? a.ondraw : !1;
//         this.parent = !1;
//         this.children = [];
//         this.fillColor = a.fillColor || !1;
//         this.strokeColor = a.strokeColor || v.strokeStyle;
//         this.strokeWidth = a.strokeWidth || 0;
//         this.angle = a.angle || 0;
//         this.alpha = q(a.alpha) ? a.alpha : 1;
//         this.center = e(0, 0);
//         this.box = {
//             x: 0
//             , y: 0
//             , w: 0
//             , h: 0
//         };
//         this.visible = q(a.visible) ? a.visible : !0;
//         this.flip = e(0, 0);
//         this.setShadow(a);
//         a.userData && this.setUserData(a.userData);
//         a.center && this.setCenter(a.center);
//         a.box && this.setBox(a.box);
//         a.size && this.setSize(a.size);
//         a.sizeC && this.setSizeC(a.sizeC);
//         a.position && this.setPosition(a.position);
//         a.positionC && this.setPositionC(a.positionC);
//         a.drawLoop && (ma || (ma = {}, n.addEvent("postLoop", "drawFrames", function () {
//             ma[G.name] && x(ma[G.name], function (a) {
//                 a.draw()
//             })
//         })), ma[a.drawLoop] || (ma[a.drawLoop] = []), ma[a.drawLoop].push(this));
//         tc.push(this)
//     };
//     C.prototype = {
//         getID: function () {
//             return this.id
//         }
//         , getType: function () {
//             return this.type
//         }
//         , getParent: function () {
//             return this.parent
//         }
//         , addChild: function (a) {
//             a && a.id != this.id && (a.parent = this, this.children.push(a), a.move(this.getPosition()), a.setPositionC(M(a.getPositionC(), this.getPositionC(), this.angle)), a.turn(this.angle))
//         }
//         , delChild: function (a) {
//             a.parent = !1;
//             var b, c;
//             b = 0;
//             for (c = this.children.length; b < c; b += 1)
//                 if (this.children[b].id == a.id) {
//                     this.children.splice(b, 1);
//                     break
//                 }
//         }
//         , delParent: function () {
//             this.parent.delChild(this)
//         }
//         , setBox: function (a) {
//             a.offset && (this.box.x = a.offset.x || 0, this.box.y = a.offset.y || 0);
//             a.size && (this.box.w = a.size.w || 0, this.box.h = a.size.h || 0)
//         }
//         , isArrIntersect: function (a) {
//             var b, c;
//             b = 0;
//             for (c = a.length; b < c; b += 1)
//                 if (a[b].id != this.id && this.isIntersect(a[b])) return a[b];
//             return !1
//         }
//         , isArrInside: function (a) {
//             var b, c;
//             b = 0;
//             for (c = a.length; b < c; b += 1)
//                 if (this.isDynamicInside(a[b].getDynamicBox())) return a[b];
//             return !1
//         }
//         , getNearest: function (a) {
//             var b, c = 0
//                 , d = !1
//                 , k;
//             b = 0;
//             for (k = a.length; b < k; b += 1)
//                 if (this.id != a[b].id) {
//                     !1 === d && (d = this.getDistanceC(a[b].getPositionC()), c = b);
//                     var e = this.getDistanceC(a[b].getPositionC());
//                     e < d && (d = e, c = b)
//                 }
//             return a[c]
//         }
//         , setFlip: function (a, b) {
//             q(a) && this.flip.x != a && (this.flip.x = a);
//             q(b) && this.flip.y != b && (this.flip.y = b)
//         }
//         , setUserData: function (a) {
//             for (var b in a) q(this[b]) || (this[b] = a[b])
//         }
//         , setShadow: function (a) {
//             this.shadowColor = a.shadowColor || !1;
//             this.shadowBlur = q(a.shadowBlur) ? a.shadowBlur : 3;
//             this.shadowX = a.shadowX || 0;
//             this.shadowY = a.shadowY || 0
//         }
//         , getDynamicBox: function () {
//             var a = this.getPosition(1);
//             return 0 == this.angle ? [e(this.x + this.box.x, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h)] : [M(e(this.x + this.box.x, this.y + this.box.y), a, this.getAngle()), M(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y), a, this.getAngle()), M(e(this.x + this.box.x + this.w + this.box.w, this.y + this.box.y + this.h + this.box.h), a, this.getAngle()), M(e(this.x + this.box.x, this.y + this.box.y + this.h + this.box.h), a, this.getAngle())]
//         }
//         , isDynamicIntersect: function (a) {
//             if (3 > a.length) return !1;
//             var b = this.getDynamicBox()
//                 , c, d;
//             c = 0;
//             for (d = b.length; c < d; c += 1)
//                 if (ia(b[c], a)) return !0;
//             c = 0;
//             for (d = a.length; c < d; c += 1)
//                 if (ia(a[c], b)) return !0;
//             return !1
//         }
//         , isIntersect: function (a) {
//             return a.visible ? this.angle || a.angle ? this.isDynamicIntersect(a.getDynamicBox()) : this.isStaticIntersect(a.getStaticBox()) : !1
//         }
//         , isDynamicInside: function (a) {
//             if (3 > a.length) return !1;
//             var b = this.getDynamicBox()
//                 , c, d, k = 0;
//             c = 0;
//             for (d = b.length; c < d; c += 1) ia(b[c], a) && (k += 1);
//             return k == b.length ? !0 : !1
//         }
//         , drawDynamicBox: function (a) {
//             N(this, 1);
//             g.shadowColor = "transparent";
//             ua(e(this.x + this.box.x, this.y + this.box.y), A(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
//             Yb(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow");
//             L()
//         }
//         , drawStaticBox: function (a) {
//             g.shadowColor = "transparent";
//             ua(e(this.x + this.box.x, this.y + this.box.y), A(this.w + this.box.w, this.h + this.box.h), !1, a || "yellow", 2);
//             Yb(e(this.x + this.w / 2 + this.center.x, this.y + this.h / 2 + this.center.y), 10, a || "yellow")
//         }
//         , isStaticIntersect: function (a) {
//             return this.y + this.box.y + this.h + this.box.h >= a.y && this.x + this.box.x + this.w + this.box.w >= a.x && this.x + this.box.x < a.x + a.w && this.y + this.box.y < a.y + a.h
//         }
//         , getStaticBox: function () {
//             return {
//                 x: this.x + this.box.x
//                 , y: this.y + this.box.y
//                 , w: this.w + this.box.w
//                 , h: this.h + this.box.h
//             }
//         }
//         , setAlpha: function (a) {
//             this.alpha != a && (this.alpha = 0 <= a ? 1 >= a ? a : 1 : 0)
//         }
//         , transparent: function (a) {
//             this.setAlpha(this.alpha + a)
//         }
//         , getAlpha: function () {
//             return this.alpha
//         }
//         , rotate: function (a) {
//             this.setAngle(Math.atan2(a.y - this.getPosition(1).y, a.x - this.getPosition(1).x) * (180 / Math.PI))
//         }
//         , setCenter: function (a) {
//             this.center = e(a.x, a.y)
//         }
//         , nullCenter: function (a) {
//             a || (a = e(0, 0));
//             this.center = e(-this.w / 2 + a.x, -this.h / 2 + a.y)
//         }
//         , getCenter: function () {
//             return e(this.center.x, this.center.y)
//         }
//         , getBox: function () {
//             return this.box
//         }
//         , move: function (a) {
//             this.prevPosition = this.getPosition();
//             this.x += a.x;
//             this.y += a.y
//         }
//         , circling: function (a, b, c) {
//             q(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
//             this.x = a.x + b * Math.cos(z(this.circlingAnglePointJS));
//             this.y = a.y + b * Math.sin(z(this.circlingAnglePointJS));
//             this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
//         }
//         , circlingC: function (a, b, c) {
//             q(this.circlingAnglePointJS) || (this.circlingAnglePointJS = 0);
//             this.setPositionC(e(a.x + b * Math.cos(z(this.circlingAnglePointJS)), a.y + b * Math.sin(z(this.circlingAnglePointJS))));
//             this.circlingAnglePointJS = 360 < this.circlingAnglePointJS ? 0 : this.circlingAnglePointJS + c
//         }
//         , motion: function (a, b, c) {
//             q(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
//             this.x = a.x + b.w * Math.cos(z(this.motionPercentPointJS));
//             this.y = a.y + b.h * Math.sin(z(this.motionPercentPointJS));
//             this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
//         }
//         , motionC: function (a, b, c) {
//             q(this.motionPercentPointJS) || (this.motionPercentPointJS = 0);
//             this.setPositionC(e(a.x + b.w * Math.cos(z(this.motionPercentPointJS)), a.y + b.h * Math.sin(z(this.motionPercentPointJS))));
//             this.motionPercentPointJS = 360 < this.motionPercentPointJS ? 0 : this.motionPercentPointJS + c
//         }
//         , scale: function (a) {
//             this.w *= a;
//             this.h *= a
//         }
//         , scaleC: function (a) {
//             var b = this.w
//                 , c = this.h;
//             this.scale(a);
//             this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
//         }
//         , getPosition: function (a) {
//             return 1 == a ? e(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y)) : 2 == a ? (a = e(this.x + this.w / 2, this.y + this.h / 2), this.angle && (a = M(a, this.getPosition(1), this.angle)), e(a.x, a.y)) : e(this.x, this.y)
//         }
//         , getPositionC: function () {
//             return e(this.x + (this.w / 2 + this.center.x), this.y + (this.h / 2 + this.center.y))
//         }
//         , getPositionS: function () {
//             return e(this.x + f.x, this.y + f.x)
//         }
//         , getPositionCS: function () {
//             return e(this.x + (this.w / 2 + this.center.x) + f.x, this.y + (this.h / 2 + this.center.y) + f.y)
//         }
//         , setPosition: function (a) {
//             this.getPosition();
//             !1 !== a.x && (this.x = a.x);
//             !1 !== a.y && (this.y = a.y)
//         }
//         , setPositionS: function (a) {
//             this.getPosition();
//             !1 !== a.x && (this.x = a.x + f.x);
//             !1 !== a.y && (this.y = a.y + f.y)
//         }
//         , setPositionC: function (a) {
//             this.getPosition();
//             !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x);
//             !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y)
//         }
//         , setPositionCS: function (a) {
//             this.getPosition();
//             !1 !== a.x && (this.x = -(this.w / 2 + this.center.x) + a.x + f.x);
//             !1 !== a.y && (this.y = -(this.h / 2 + this.center.y) + a.y + f.y)
//         }
//         , getSize: function () {
//             return A(this.w, this.h)
//         }
//         , setSize: function (a) {
//             this.w = a.w;
//             this.h = a.h
//         }
//         , setSizeC: function (a) {
//             this.w = a.w;
//             this.h = a.h;
//             this.move(e(-(a.w / 2), -(a.h / 2)))
//         }
//         , turn: function (a) {
//             this.angle += a
//         }
//         , rotateForAngle: function (a, b) {
//             0 > this.angle && (this.angle += 360);
//             0 > a && (a += 360);
//             var c = this.angle - a;
//             180 < c ? c -= 360 : -180 > c && (c += 360);
//             c >= -b - .5 && c <= b + .5 ? this.angle = a : c > b + .5 ? this.angle -= b : c < -b - .5 && (this.angle += b)
//         }
//         , rotateForPoint: function (a, b) {
//             var c = za(this.getPositionC(), a);
//             this.rotateForAngle(c, b)
//         }
//         , rotateForObject: function (a, b) {
//             var c = za(this.getPositionC(), a.getPositionC());
//             this.rotateForAngle(c, b)
//         }
//         , moveTo: function (a, b) {
//             var c = z(za(this.getPosition(), a));
//             this.prevPosition = this.getPosition();
//             this.x += b * Math.cos(c);
//             this.y += b * Math.sin(c)
//         }
//         , moveToC: function (a, b) {
//             var c = z(za(this.getPositionC(), a));
//             this.prevPosition = this.getPosition();
//             this.x += b * Math.cos(c);
//             this.y += b * Math.sin(c)
//         }
//         , moveAngle: function (a, b) {
//             b = z(q(b) ? b : this.angle);
//             this.prevPosition = this.getPosition();
//             this.x += a * Math.cos(b);
//             this.y += a * Math.sin(b)
//         }
//         , moveTime: function (a, b) {
//             b = b || 1;
//             var c = this.getPosition();
//             this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
//         }
//         , moveTimeC: function (a, b) {
//             b = b || 1;
//             var c = this.getPosition(1);
//             this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
//         }
//         , getAngle: function () {
//             return this.angle
//         }
//         , setAngle: function (a) {
//             this.angle != a && (this.angle = a % 360)
//         }
//         , getDistance: function (a) {
//             return Math.sqrt(Math.pow(a.x - this.getPosition(2).x, 2) + Math.pow(a.y - this.getPosition(2).y, 2))
//         }
//         , getDistanceC: function (a) {
//             return Math.sqrt(Math.pow(a.x - this.getPosition(1).x, 2) + Math.pow(a.y - this.getPosition(1).y, 2))
//         }
//         , setVisible: function (a) {
//             this.visible = 1 == a
//         }
//         , isVisible: function () {
//             return this.visible
//         }
//         , isInCamera: function () {
//             return this.angle ? this.isInCameraDynamic() : this.isInCameraStatic()
//         }
//         , isInCameraStatic: function () {
//             return this.x + this.w < f.x || this.x > f.x + r || this.y + this.h < f.y || this.y > f.y + t ? !1 : !0
//         }
//         , isInCameraDynamic: function () {
//             var a = this.getDynamicBox()
//                 , b = [e(f.x, f.y), e(f.x + r, f.y), e(f.x + r, f.y + t), e(f.x, f.y + t)]
//                 , c, d, k = 0;
//             c = 0;
//             for (d = a.length; c < d; c += 1) ia(a[c], b) && (k += 1);
//             return 0 < k
//         }
//         , onCollision: function (a) {
//             Ab("onCollision, onArrCollision", "isIntersect, isArrIntersect")
//         }
//         , onArrCollision: function (a) {
//             var b, c;
//             b = 0;
//             for (c = a.length; b < c; b += 1)
//                 if (this.id != a[b].id) this.onCollision(a[b])
//         }
//         , draw: function () {
//         }
//     };
//     this.game.newBaseObject = function (a) {
//         return new C(a)
//     };
//     var qb = function (a) {
//         C.call(this, a);
//         this.type = "RectObject"
//     };
//     ga(C, qb);
//     qb.prototype.draw = function () {
//         if (this.visible && this.alpha) {
//             var a = !1;
//             if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
//             ua(e(this.x, this.y), A(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
//             if (this.ondraw) this.ondraw();
//             a && L()
//         }
//     };
//     this.game.newRectObject = function (a) {
//         return new qb(a)
//     };
//     var rb = function (a) {
//         C.call(this, a);
//         this.type = "RoundRectObject";
//         this.radius = a.radius || 1
//     };
//     ga(C, rb);
//     rb.prototype.draw = function () {
//         if (this.visible && this.alpha) {
//             var a = !1;
//             if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
//             sb(e(this.x, this.y), A(this.w, this.h), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
//             if (this.ondraw) this.ondraw();
//             a && L()
//         }
//     };
//     this.game.newRoundRectObject = function (a) {
//         return new rb(a)
//     };
//     var na = function (a) {
//         C.call(this, a);
//         this.radius = a.radius || 5;
//         a.scale && (this.radius *= a.scale);
//         this.w = 2 * this.radius;
//         this.h = 2 * this.radius;
//         this.type = "CircleObject";
//         a.positionC && this.setPositionC(a.positionC)
//     };
//     ga(C, na);
//     na.prototype.draw = function () {
//         if (this.visible && this.alpha) {
//             var a = !1;
//             if (this.angle || 1 != this.alpha || this.shadowColor) N(this)
//                 , a = !0;
//             va(e(this.x, this.y), this.radius, this.fillColor, this.strokeColor, this.strokeWidth);
//             if (this.ondraw) this.ondraw();
//             a && L()
//         }
//     };
//     na.prototype.scale = function (a) {
//         this.w *= a || 0;
//         this.h *= a || 0;
//         this.radius *= a ? a / 2 : 0
//     };
//     na.prototype.scaleC = function (a) {
//         var b = this.w
//             , c = this.h;
//         this.w *= a || 0;
//         this.h *= a || 0;
//         this.radius *= a;
//         this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
//     };
//     na.prototype.getRadius = function () {
//         return this.radius
//     };
//     na.prototype.setRadius = function (a) {
//         a && this.radius != a && (this.radius = a, this.w = 2 * a, this.h = 2 * a)
//     };
//     this.game.newCircleObject = function (a) {
//         return new na(a)
//     };
//     var tb = function (a) {
//         this.file = a.file;
//         this.w = a.w;
//         this.h = a.h;
//         this.countX = a.countX;
//         this.countY = a.countY;
//         this.fullW = this.countX * this.w;
//         this.fullH = this.countY * this.h;
//         this.cnv = h.document.createElement("canvas");
//         this.cnv.width = this.w;
//         this.cnv.height = this.h;
//         this.ctx = this.cnv.getContext("2d");
//         this.loaded = !1;
//         this.x = a.x || 0;
//         this.y = a.y || 0;
//         a = h.document.createElement("img");
//         var b = this;
//         a.onload = function () {
//             b.ctx.drawImage(this, 0, 0, b.w, b.h);
//             b.loaded = !0;
//             B.load()
//         };
//         a.src = this.file;
//         B.add()
//     };
//     tb.prototype.draw = function () {
//         if (this.loaded) {
//             var a = -f.x + this.x
//                 , b = -f.y + this.y
//                 , c, d;
//             for (d = 0; d < this.countY; d += 1)
//                 if (!(this.y + d * this.h + this.h < f.y || this.y + d * this.h > f.y + t))
//                     for (c = 0; c < this.countX; c += 1) this.x + c * this.w + this.w < f.x || this.x + c * this.w > f.x + r || g.drawImage(this.cnv, a + c * this.w, b + d * this.h, this.w, this.h)
//         }
//     };
//     tb.prototype.getSize = function () {
//         return this.loaded ? A(this.fullW, this.fullH) : A()
//     };
//     this.game.newBackgroundObject = function (a) {
//         return new tb(a)
//     };
//     var ub = function (a) {
//         C.call(this, a);
//         this.type = "EllipsObject"
//     };
//     ga(C, ub);
//     ub.prototype.draw = function () {
//         if (this.visible && this.alpha) {
//             N(this);
//             va(e(this.x, this.y), this.h / 2, this.fillColor, this.strokeColor, this.strokeWidth);
//             if (this.ondraw) this.ondraw();
//             L()
//         }
//     };
//     this.game.newEllipsObject = function (a) {
//         return new ub(a)
//     };
//     var X = function (a) {
//         C.call(this, a);
//         this.type = "TextObject";
//         this.text = a.text || "TextObject";
//         this.color = a.color || "";
//         this.size = a.size || 10;
//         a.scale && (this.size *= a.scale);
//         this.font = a.font || "sans-serif";
//         this.style = a.style || "";
//         this.align = "left";
//         this.padding = a.padding || 2;
//         this.w = vb(this.text, this.style, this.size, this.font) + 2 * this.padding;
//         this.h = this.size + 2 * this.padding;
//         this.strokeColorText = a.strokeColorText || !1;
//         this.strokeWidthText = a.strokeWidthText || !1;
//         this.textDY = -this.size / 7;
//         a.positionC && this.setPositionC(a.positionC)
//     };
//     ga(C, X);
//     X.prototype.reStyle = function (a) {
//         this.text = a.text || this.text;
//         this.color = a.color || this.color;
//         this.size = a.size || this.size;
//         this.font = a.font || this.font;
//         this.style = a.style || this.style;
//         this.padding = a.padding || this.padding;
//         this.w = vb(this.text, this.style, this.size, this.font) + 2 * this.padding;
//         this.h = this.size + 2 * this.padding;
//         this.strokeColorText = a.strokeColorText || this.strokeColorText;
//         this.strokeWidthText = a.strokeWidthText || this.strokeWidthText;
//         this.strokeColor = a.strokeColor || this.strokeColor;
//         this.strokeWidth = a.strokeWidth || this.strokeWidth;
//         this.fillColor = a.fillColor || this.fillColor;
//         this.textDY = -this.size / 7
//     };
//     X.prototype.setText = function (a) {
//         this.text != a && this.reStyle({
//             text: a
//         })
//     };
//     X.prototype.getText = function () {
//         return this.text
//     };
//     X.prototype.draw = function () {
//         if (this.visible && this.alpha) {
//             var a = !1;
//             if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
//             (this.fillColor || this.strokeColor) && ua(e(this.x, this.y), A(this.w, this.h), this.fillColor, this.strokeColor, this.strokeWidth);
//             oa(e(this.x + this.padding, this.textDY + this.y + this.padding), this.text, this.color, this.size, this.font, this.style, this.align, this.strokeColorText, this.strokeWidthText);
//             if (this.ondraw) this.ondraw();
//             a && L()
//         }
//     };
//     X.prototype.scale = function (a) {
//         this.reStyle({
//             size: this.size * a
//         })
//     };
//     X.prototype.scaleC = function (a) {
//         var b = this.w
//             , c = this.h;
//         this.reStyle({
//             size: this.size * a
//         });
//         this.move(e(-((this.w - b) / 2), -((this.h - c) / 2)))
//     };
//     X.prototype.setSize = function (a) {
//         this.size != a && this.reStyle({
//             size: a
//         })
//     };
//     X.prototype.setSizeC = function (a) {
//         this.size != a && (this.reStyle({
//             size: a
//         }), this.move(e(-a / 2, -a / 2)))
//     };
//     var vb = function (a, b, c, d) {
//         var k = h.document.createElement("canvas").getContext("2d");
//         k.font = b + c + "px " + d;
//         return k.measureText(a).width
//     };
//     this.OOP.getTextWidth = function (a) {
//         return vb(a.text, a.style || "", a.size || 10, a.font || "sans-serif")
//     };
//     this.game.newTextObject = function (a) {
//         return new X(a)
//     };
//     var Q = function (a) {
//         C.call(this, a);
//         this.type = "PolygonObject";
//         this.points = [];
//         this.dX = this.dY = 0;
//         var b = this;
//         a.points && x(a.points, function (a) {
//             b.addPoint(a)
//         });
//         this.pointColor = a.pointColor || !1
//     };
//     ga(C, Q);
//     Q.prototype.addPoint = function (a) {
//         this.dY = this.dX = 0;
//         var b = this;
//         this.y + a.y < this.y && (this.dY = Math.abs(this.y + a.y - this.y), x(this.points, function (a) {
//             a.y += b.dY
//         }));
//         this.x + a.x < this.x && (this.dX = Math.abs(this.x + a.x - this.x), b = this, x(this.points, function (a) {
//             a.x += b.dX
//         }));
//         this.points.push(e(a.x + this.dX, a.y + this.dY));
//         this.h = this.w = 0;
//         b = this;
//         x(this.points, function (a) {
//             b.h += b.y + a.y > b.y + b.h ? a.y - b.h : 0;
//             b.w += b.x + a.x > b.x + b.w ? a.x - b.w : 0
//         })
//     };
//     Q.prototype.delPoint = function (a) {
//         var b, c, d = this.getPoints();
//         this.clearPoints();
//         b = 0;
//         for (c = d.length; b < c; b += 1) b != a && this.addPoint(d[b])
//     };
//     Q.prototype.clearPoints = function () {
//         this.points = [];
//         this.count = 0
//     };
//     Q.prototype.getPoints = function () {
//         return this.points
//     };
//     Q.prototype.getCount = function () {
//         return this.points.length
//     };
//     Q.prototype.getPoint = function (a) {
//         return this.points[a]
//     };
//     Q.prototype.scale = function (a) {
//     };
//     Q.prototype.drawDynamicBox = function (a) {
//         var b = !1;
//         if (this.angle || 1 != this.alpha || this.shadowColor) N(this), b = !0;
//         Zb(this.x, this.y, this.points, this.fillColor, a || "yellow", 2, "red");
//         b && L()
//     };
//     Q.prototype.getDynamicBox = function () {
//         var a = [];
//         if (this.angle) {
//             var b = this.getPosition(1)
//                 , c = this;
//             x(this.points, function (d) {
//                 a.push(M(qa(d, e(c.x, c.y)), b, c.getAngle()))
//             })
//         }
//         else {
//             var c = this;
//             x(this.points, function (b) {
//                 a.push(qa(b, e(c.x, c.y)))
//             })
//         }
//         return a
//     };
//     Q.prototype.draw = function () {
//         if (this.visible && this.alpha) {
//             var a = !1;
//             if (this.angle || 1 != this.alpha || this.shadowColor) N(this), a = !0;
//             Zb(this.x, this.y, this.points, this.fillColor, this.strokeColor, this.strokeWidth, this.pointColor);
//             if (this.ondraw) this.ondraw();
//             a && L()
//         }
//     };
//     this.game.newPolygonObject = function (a) {
//         return new Q(a)
//     };
//     var pa = function (a) {
//         C.call(this, a);
//         this.type = "ImageObject";
//         this.w = a.w || 0;
//         this.h = a.h || 0;
//         this.loaded = !1;
//         this.file = "";
//         this.forOnLoad = a.onload || !1;
//         $b(a.file, this, a.scale || 1)
//     };
//     ga(C, pa);
//     pa.prototype.draw = function () {
//         if (this.visible && this.alpha && this.loaded) {
//             var a = !1;
//             if (this.angle || 1 != this.alpha || this.shadowColor || this.flip.x || this.flip.y) N(this), a = !0;
//             ac(e(this.x, this.y), A(this.w, this.h), this.file);
//             if (this.ondraw) this.ondraw();
//             a && L()
//         }
//     };
//     pa.prototype.simpleDraw = function (a) {
//         if (this.loaded) {
//             var b = !1;
//             if (this.angle || 1 != this.alpha || this.shadowColor) N(this), b = !0;
//             ac(e(a.x, a.y), A(this.w, this.h), this.file);
//             b && L()
//         }
//     };
//     pa.prototype.setImage = function (a, b) {
//         this.file != a && (q(p[a]) ? (this.file = a, b && b()) : (this.loaded = !1, this.origHeight = this.origWidth = 0, this.forOnLoad = b || !1, $b(a, this)))
//     };
//     pa.prototype.getImage = function () {
//         return this.file
//     };
//     pa.prototype.resize = function (a) {
//         if (!1 !== a.w && !1 === a.h) {
//             var b = a.w / this.w;
//             this.w = a.w;
//             this.h *= b
//         }
//         else !1 !== a.h && !1 === a.w ? (b = a.h / this.h, this.h = a.h, this.w *= b) : !1 !== a.w && !1 !== a.h && (this.w = a.w, this.h = a.h)
//     };
//     this.game.newImageObject = function (a) {
//         return new pa(a)
//     };
//     var V = function (a) {
//         C.call(this, a);
//         this.type = "AnimationObject";
//         this.frame = 0;
//         this.anim = a.animation;
//         this.step = a.delay || 10;
//         this.toFrameStep = this.difStep = 0;
//         a.scale && (this.w *= a.scale, this.h *= a.scale)
//     };
//     ga(C, V);
//     V.prototype.draw = function () {
//         if (this.visible && this.alpha) {
//             var a = !1;
//             if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), a = !0;
//             wb(this.anim, e(this.x, this.y), A(this.w, this.h), this.frame);
//             if (this.ondraw) this.ondraw();
//             this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + 1 : 0, this.difStep = 0) : this.difStep += 1;
//             a && L()
//         }
//     };
//     V.prototype.drawFrames = function (a, b, c) {
//         if (this.visible && this.alpha) {
//             if (this.frame < a || this.frame > b) this.frame = a;
//             c = !1;
//             if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), c = !0;
//             wb(this.anim, e(this.x, this.y), A(this.w, this.h), this.frame);
//             if (this.ondraw) this.ondraw();
//             this.difStep > this.step ? (this.frame = this.frame < b ? this.frame + 1 : a, this.difStep = 0) : this.difStep += 1;
//             c && L()
//         }
//     };
//     V.prototype.drawFrame = function (a) {
//         if (this.visible && this.alpha) {
//             var b = !1;
//             if (this.angle || 1 != this.alpha || this.flip.x || this.flip.y || this.shadowColor) N(this), b = !0;
//             wb(this.anim, e(this.x, this.y), A(this.w, this.h), a);
//             if (this.ondraw) this.ondraw();
//             b && L()
//         }
//     };
//     V.prototype.drawToFrame = function (a) {
//         if (this.visible && this.alpha) {
//             if (this.frame < a) this.toFrameStep = 1;
//             else if (this.frame > a) this.toFrameStep = -1;
//             else {
//                 this.drawFrame(a);
//                 return
//             }
//             this.drawFrame(this.frame);
//             if (this.ondraw) this.ondraw();
//             this.difStep > this.step ? (this.frame = this.frame < this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep += 1
//         }
//     };
//     V.prototype.drawReverFrames = function (a, b) {
//         if (this.visible && this.alpha) {
//             this.drawFrame(this.frame);
//             if (this.ondraw) this.ondraw();
//             this.difStep > this.step ? (this.frame <= a ? this.toFrameStep = 1 : this.frame >= b && (this.toFrameStep = -1), this.frame = this.frame <= this.anim.r ? this.frame + this.toFrameStep : 0, this.difStep = 0) : this.difStep += 1
//         }
//     };
//     V.prototype.setAnimation = function (a) {
//         this.anim = a
//     };
//     V.prototype.getAnimation = function () {
//         return this.anim
//     };
//     V.prototype.setDelay = function (a) {
//         this.step = 0 < a ? a : this.step
//     };
//     V.prototype.getDelay = function () {
//         return this.step
//     };
//     this.game.newAnimationObject = function (a) {
//         return new V(a)
//     };
//     var wa = function (a) {
//         this.file = a;
//         this.loaded = !1;
//         this.h = this.w = 0;
//         this.toLoad = [];
//         var b = h.document.createElement("img")
//             , c = this;
//         b.onload = function () {
//             c.loaded = !0;
//             c.w = this.width;
//             c.h = this.height;
//             c.img = h.document.createElement("canvas");
//             c.img.width = this.width;
//             c.img.height = this.height;
//             c.context = c.img.getContext("2d");
//             c.context.drawImage(this, 0, 0);
//             c.toLoad.length && x(c.toLoad, function (a) {
//                 a.func(c.context, a.w, a.h, a.r)
//             });
//             B.load()
//         };
//         b.src = a;
//         B.add()
//     };
//     wa.prototype.onContext = function (a) {
//         this.loaded ? a(this.context, this.w, this.h, 1) : this.toLoad.push({
//                 w: this.w
//                 , h: this.h
//                 , r: 1
//                 , func: a
//             })
//     };
//     wa.prototype.getAnimation = function (a, b, c, d, k) {
//         var e = function (a, b, c, d, k, e) {
//             this.image = a;
//             this.x = b;
//             this.y = c;
//             this.w = d;
//             this.h = k;
//             this.r = e ? e - 1 : 0
//         };
//         e.prototype = {
//             onContext: function (a) {
//                 this.image.loaded ? a(this.image.context, this.w, this.h, this.r) : this.image.toLoad.push({
//                         w: this.w
//                         , h: this.h
//                         , r: this.r
//                         , func: a
//                     })
//             }
//             , getImage: function () {
//                 return this.image
//             }
//             , getCount: function () {
//                 return this.r
//             }
//         };
//         return new e(this, a, b, c, d, k)
//     };
//     var xb = function (a, b) {
//         this.loaded = !0;
//         this.w = a;
//         this.h = b;
//         this.img = h.document.createElement("canvas");
//         this.img.width = a;
//         this.img.height = b;
//         this.context = this.img.getContext("2d")
//     };
//     xb.prototype.onContext = wa.prototype.onContext;
//     xb.prototype.getAnimation = wa.prototype.getAnimation;
//     this.tiles.newDrawImage = function (a, b) {
//         return new xb(a, b)
//     };
//     this.tiles.newImage = function (a) {
//         return new wa(a)
//     };
//     this.tiles.newAnimation = function (a, b, c, d) {
//         return (new wa(a)).getAnimation(0, 0, b, c, d)
//     };
//     var wb = function (a, b, c, d) {
//         a.image.loaded && g.drawImage(a.image.img, a.x + a.w * d, a.y, a.w, a.h, b.x + -f.x, b.y + -f.y, c.w, c.h)
//     }
//         , p = {}
//         , $b = function (a, b, c) {
//         if (q(p[a])) {
//             b.loaded = !0;
//             b.file = a;
//             var d, k;
//             if (b.w && !b.h) {
//                 var e = b.w / p[a].w;
//                 d = b.w;
//                 k = p[a].h * e
//             }
//             else !b.w && b.h ? (e = b.h / p[a].h, k = b.h, d = p[a].w * e): b.w
//         &&
//             b.h ? (d = b.w, k = b.h) : (d = p[a].w, k = p[a].h);
//             c && (d *= c, k *= c);
//             b.w = d;
//             b.h = k;
//             b.forOnLoad && b.forOnLoad()
//         }
//         else d = h.document.createElement("img"), d.onload = function () {
//             p[a] = {};
//             p[a].loaded = !0;
//             p[a].img = this;
//             p[a].w = this.width;
//             p[a].h = this.height;
//             if (q(b)) {
//                 b.loaded = !0;
//                 var d, k;
//                 if (b.w && !b.h) {
//                     var e = b.w / p[a].w;
//                     d = b.w;
//                     k = p[a].h * e
//                 }
//                 else !b.w && b.h ? (e = b.h / p[a].h, k = b.h, d = p[a].w * e): b.w
//             &&
//                 b.h ? (d = b.w, k = b.h) : (d = p[a].w, k = p[a].h);
//                 c && (d *= c, k *= c);
//                 b.w = d;
//                 b.h = k;
//                 b.file = a;
//                 b.forOnLoad && b.forOnLoad()
//             }
//             B.load()
//         }, d.src = a, B.add()
//     }
//         , ac = function (a, b, c) {
//         c && g.drawImage(p[c].img, 0, 0, p[c].w, p[c].h, a.x + -f.x, a.y + -f.y, b.w, b.h)
//     }
//         , bc = function (a) {
//         this.type = "Mesh";
//         this.objs = [];
//         this.x = a.x || 0;
//         this.y = a.y || 0;
//         this.angle = a.angle || 0;
//         this.count = 0;
//         var b = this;
//         a.add && x(a.add, function (a) {
//             b.add(a)
//         });
//         this.angle && this.setAngle(this.angle)
//     };
//     bc.prototype = {
//         getCount: function () {
//             return this.count
//         }
//         , getObjects: function () {
//             return this.objs
//         }
//         , add: function (a) {
//             this.count += 1;
//             this.objs.push(a);
//             a.offsetMesh = a.getPosition(1);
//             a.turn(this.angle);
//             a.setPositionC(e(this.x + a.offsetMesh.x, this.y + a.offsetMesh.y))
//         }
//         , del: function (a) {
//             var b = this;
//             x(this.objs, function (c) {
//                 c.id == a.id && (b.objs.splice(void 0, 1), b.count--)
//             })
//         }
//         , draw: function (a) {
//             x(this.objs, function (a) {
//                 a.draw()
//             })
//         }
//         , move: function (a) {
//             this.x += a.x || 0;
//             this.y += a.y || 0;
//             var b = this;
//             x(this.objs, function (a) {
//                 a.setPositionC(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
//             })
//         }
//         , turn: function (a) {
//             if (0 != a) {
//                 this.angle %= 360;
//                 this.angle += a;
//                 var b = e(this.x, this.y)
//                     , c = this;
//                 x(this.objs, function (d) {
//                     d.turn(a);
//                     d.setPositionC(M(e(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
//                 })
//             }
//         }
//         , setAngle: function (a) {
//             if (a != this.angle) {
//                 this.angle = a %= 360;
//                 var b = e(this.x, this.y)
//                     , c = this;
//                 x(this.objs, function (d) {
//                     d.setAngle(a);
//                     d.setPositionC(M(e(c.x + d.offsetMesh.x, c.y + d.offsetMesh.y), b, c.angle))
//                 })
//             }
//         }
//         , setPosition: function (a) {
//             if (this.x != a.x || this.y != a.y) {
//                 this.x = a.x || this.x;
//                 this.y = a.y || this.y;
//                 var b = this;
//                 x(this.objs, function (a) {
//                     b.angle ? a.setPositionC(M(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y), e(b.x, b.y), b.angle)) : a.setPositionC(e(b.x + a.offsetMesh.x, b.y + a.offsetMesh.y))
//                 })
//             }
//         }
//         , isDynamicIntersect: function (a) {
//             if (3 > a.length) return !1;
//             var b = !1;
//             x(this.objs, function (c) {
//                 if (c.isDynamicIntersect(a)) return b = c
//             });
//             return b
//         }
//         , isStaticIntersect: function (a) {
//             var b = !1;
//             x(this.objs, function (c) {
//                 if (c.isStaticIntersect(a)) return b = c
//             });
//             return b
//         }
//         , isIntersect: function (a) {
//             var b = !1;
//             x(this.objs, function (c) {
//                 if (c.isIntersect(a)) return b = c
//             });
//             return b
//         }
//     };
//     this.game.newMesh = function (a) {
//         return new bc(a)
//     };
//     this.camera.circling = function (a, b, c) {
//         q(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
//         f.x = a.x + b * Math.cos(z(this.circlingAnglePointJS));
//         f.y = a.y + b * Math.sin(z(this.circlingAnglePointJS));
//         this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS + c
//     };
//     this.camera.circlingC = function (a, b, c) {
//         q(this.circlingAnglePointJS) || (this.circlingAnglePointJS = c);
//         f.x = -O + a.x + b * Math.cos(z(this.circlingAnglePointJS));
//         f.y = -P + a.y + b * Math.sin(z(this.circlingAnglePointJS));
//         this.circlingAnglePointJS = 360 <= this.circlingAnglePointJS ? c : this.circlingAnglePointJS + c
//     };
//     this.camera.motion = function (a, b, c) {
//         q(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
//         f.x = a.x + b.w * Math.cos(z(this.motionPercentPointJS));
//         f.y = a.y + b.h * Math.sin(z(this.motionPercentPointJS));
//         this.motionPercentPointJS = 360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
//     };
//     this.camera.motionC = function (a, b, c) {
//         q(this.motionPercentPointJS) || (this.motionPercentPointJS = b);
//         this.setPositionC(e(a.x + b.w * Math.cos(z(this.motionPercentPointJS)), a.y + b.h * Math.sin(z(this.motionPercentPointJS))));
//         this.motionPercentPointJS = 360 <= this.motionPercentPointJS ? b : this.motionPercentPointJS + c
//     };
//     this.camera.follow = function (a) {
//         this.moveTimeC(a.getPositionC(), 10)
//     };
//     this.camera.move = function (a) {
//         f.x += a.x || 0;
//         f.y += a.y || 0
//     };
//     this.camera.moveTime = function (a, b) {
//         b = b || 1;
//         var c = e(f.x, f.y);
//         this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
//     };
//     this.camera.moveTimeC = function (a, b) {
//         b = b || 1;
//         var c = e(f.x + O, f.y + P);
//         this.move(e((a.x - c.x) / b, (a.y - c.y) / b))
//     };
//     this.camera.setPosition = function (a) {
//         pb(e(!1 !== a.x ? a.x : f.x, !1 !== a.y ? a.y : f.y))
//     };
//     this.camera.setPositionC = function (a) {
//         pb(e(!1 !== a.x ? a.x - O : f.x, !1 !== a.y ? a.y - P : f.y))
//     };
//     this.camera.getPosition = function (a) {
//         return a ? e(f.x + O, f.y + P) : e(f.x, f.y)
//     };
//     this.camera.getPositionC = function () {
//         return e(f.x + O, f.y + P)
//     };
//     this.camera.getStaticBox = function () {
//         return {
//             x: f.x
//             , y: f.y
//             , w: f.x + r
//             , h: f.y + t
//         }
//     };
//     this.camera.getDynamicBox = function () {
//         return [e(f.x, f.y), e(f.x + r, f.y), e(f.x + r, f.y + t), e(f.x, f.y + t)]
//     };
//     var pb = function (a) {
//         f = e(a.x, a.y)
//     }
//         , Bb = function () {
//         g.mozImageSmoothingEnabled = Ka;
//         g.msImageSmoothingEnabled = Ka;
//         g.imageSmoothingEnabled = Ka
//     }
//         , L = function (a) {
//         g.restore();
//         g.globalAlpha = v.globalAlpha;
//         g.fillStyle = "black";
//         g.strokeStyle = "black";
//         Bb()
//     }
//         , N = function (a, b) {
//         g.save();
//         var c = a.getPositionC();
//         a.angle && (g.translate(-f.x + c.x, -f.y + c.y), g.rotate(z(a.angle)), g.translate(-c.x + f.x, -c.y + f.y));
//         1 != a.alpha && (g.globalAlpha = a.alpha);
//         if (a.flip.x || a.flip.y) g.translate(-f.x + c.x, -f.y + c.y), g.scale(a.flip.x ? -1 : 1, a.flip.y ? -1 : 1), g.translate(-c.x + f.x, -c.y + f.y);
//         a.shadowColor && (g.shadowBlur = a.shadowBlur, g.shadowColor = a.shadowColor, g.shadowOffsetX = a.shadowX, g.shadowOffsetY = a.shadowY);
//         if ("EllipsObject" == a.type && !b) {
//             var c = a.w / 2
//                 , d = a.h / 2
//                 , k = e(-f.x + a.x, -f.y + a.y);
//             g.translate(k.x, k.y);
//             g.scale(c / d, 1);
//             g.translate(-k.x, -k.y)
//         }
//     };
//     this.system.setContextSettings = function (a) {
//         g.save();
//         for (var b in a) g[b] = a[b]
//     };
//     this.system.defaultSettings = function () {
//         L()
//     };
//     this.game.clear = function () {
//         var a = e(0, 0)
//             , b = e(r, t);
//         g.clearRect(a.x, a.y, b.x, b.y)
//     };
//     this.game.fill = function (a) {
//         g.fillStyle = a;
//         g.fillRect(0, 0, r, t)
//     };
//     var Zb = function (a, b, c, d, k, h, l) {
//         if (!(3 > c.length)) {
//             var Aa;
//             if (d && !(3 > c.length)) {
//                 g.fillStyle = d;
//                 d = -f.x + a;
//                 Aa = -f.y + b;
//                 var m;
//                 g.beginPath();
//                 g.moveTo(d + c[0].x, Aa + c[0].y);
//                 for (m = 1; m < c.length; m += 1) g.lineTo(d + c[m].x, Aa + c[m].y);
//                 g.closePath();
//                 g.fill()
//             }
//             for (d = 0; d < c.length; d += 1) Aa = d + 1 < c.length ? d + 1 : 0, k && Y(qa(c[d], e(a, b)), qa(c[Aa], e(a, b)), k, h), l && bb(qa(c[d], e(a, b)), l)
//         }
//     };
//     this.brush.drawPolygon = function (a) {
//         var b = a.points || []
//             , c = a.fillColor || !1
//             , d = a.strokeColor || !1
//             , k = a.strokeWidth || 1;
//         a = a.pointColor || !1;
//         if (!(3 > b.length)) {
//             var e;
//             if (c && !(3 > b.length)) {
//                 g.fillStyle = c;
//                 c = -f.x;
//                 e = -f.y;
//                 var h;
//                 g.beginPath();
//                 g.moveTo(c + b[0].x, e + b[0].y);
//                 for (h = 1; h < b.length; h += 1) g.lineTo(c + b[h].x, e + b[h].y);
//                 g.closePath();
//                 g.fill()
//             }
//             for (c = 0; c < b.length; c += 1) e = c + 1 < b.length ? c + 1 : 0, d && Y(b[c], b[e], d, k), a && bb(b[c], a)
//         }
//     };
//     var oa = function (a, b, c, d, k, e, h, l, m) {
//         g.textAlign = h;
//         g.lineWidth = m;
//         g.font = (e ? e + " " : "") + d + "px " + k;
//         d = -f.x;
//         k = -f.y;
//         c && (g.fillStyle = c, g.fillText(b, d + a.x, k + a.y));
//         l && (g.strokeStyle = l, g.strokeText(b, d + a.x, k + a.y))
//     };
//     this.brush.drawMultiText = function (a) {
//         var b, c = a.text.split("\n");
//         for (b = 0; b < c.length; b += 1) oa(e(a.x, a.y + a.size * b), c[b], a.color || v.fillStyle, a.size || 10, a.font || v.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
//     };
//     this.brush.drawMultiTextS = function (a) {
//         var b, c = a.text.split("\n")
//             , d = a.size || 10;
//         for (b = 0; b < c.length; b += 1) oa(e(a.x + f.x, a.y + f.y + d * b), c[b], a.color || v.fillStyle, d || 10, a.font || v.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
//     };
//     this.brush.drawText = function (a) {
//         oa(e(a.x || 0, a.y || 0), a.text, a.color || !1, a.size || 10, a.font || v.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
//     };
//     this.brush.drawTextS = function (a) {
//         oa(e((a.x || 0) + f.x, (a.y || 0) + f.y), a.text, a.color || v.fillStyle, a.size || 10, a.font || v.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
//     };
//     this.brush.drawTextLines = function (a) {
//         if (a.lines) {
//             var b, c = a.size || 10;
//             for (b = 0; b < a.lines.length; b += 1) oa(e(a.x, a.y + c * b), a.lines[b], a.color || v.fillStyle, c, a.font || v.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
//         }
//     };
//     this.brush.drawTextLinesS = function (a) {
//         if (a.lines) {
//             var b, c = a.size || 10;
//             for (b = 0; b < a.lines.length; b += 1) oa(e(a.x + f.x, a.y + f.y + c * b), a.lines[b], a.color || v.fillStyle, c, a.font || v.font, a.style || !1, a.align || "left", a.strokeColor || !1, a.strokeWidth || 2)
//         }
//     };
//     var Yb = function (a, b, c) {
//         Y(e(a.x - b, a.y), e(a.x + b, a.y), c, 2);
//         Y(e(a.x, a.y - b), e(a.x, a.y + b), c, 2)
//     }
//         , ua = function (a, b, c, d, k) {
//         g.fillStyle = c;
//         g.strokeStyle = d;
//         g.lineWidth = k;
//         d = -f.x + (k ? k / 2 : 0);
//         var e = -f.y + (k ? k / 2 : 0);
//         c && g.fillRect(a.x + d, a.y + e, b.w, b.h);
//         k && g.strokeRect(a.x + d, a.y + e, b.w, b.h)
//     };
//     this.brush.drawRect = function (a) {
//         ua(e(a.x, a.y), A(a.w, a.h), a.fillColor || !1, a.strokeColor || v.strokeStyle, a.strokeWidth || !1)
//     };
//     this.brush.drawRectS = function (a) {
//         ua(e(a.x + f.x, a.y + f.y), A(a.w, a.h), a.fillColor || !1, a.strokeColor || v.strokeStyle, a.strokeWidth || !1)
//     };
//     var bb = function (a, b) {
//         (g.fillStyle = b) && g.fillRect(-f.x + a.x - 1, -f.y + a.y - 1, 2, 2)
//     };
//     this.brush.drawPoint = function (a) {
//         bb(e(a.x, a.y), a.fillColor || !1)
//     };
//     this.brush.drawPointS = function (a) {
//         bb(e(a.x + f.x, a.y + f.y), a.fillColor || !1)
//     };
//     var sb = function (a, b, c, d, k, e) {
//         g.fillStyle = d;
//         g.strokeStyle = k;
//         g.lineWidth = e;
//         k = -f.x + a.x + (e ? e / 2 : 0);
//         a = -f.y + a.y + (e ? e / 2 : 0);
//         g.beginPath();
//         g.moveTo(k + c, a);
//         g.lineTo(k + b.w - c, a);
//         g.quadraticCurveTo(k + b.w, a, k + b.w, a + c);
//         g.lineTo(k + b.w, a + b.h - c);
//         g.quadraticCurveTo(k + b.w, a + b.h, k + b.w - c, a + b.h);
//         g.lineTo(k + c, a + b.h);
//         g.quadraticCurveTo(k, a + b.h, k, a + b.h - c);
//         g.lineTo(k, a + c);
//         g.quadraticCurveTo(k, a, k + c, a);
//         g.closePath();
//         d && g.fill();
//         e && g.stroke()
//     };
//     this.brush.drawRoundRect = function (a) {
//         sb(e(a.x, a.y), A(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || v.strokeStyle, a.strokeWidth || !1)
//     };
//     this.brush.drawRoundRectS = function (a) {
//         sb(e(f.x + a.x, f.y + a.y), A(a.w, a.h), a.radius || 2, a.fillColor || !1, a.strokeColor || v.strokeStyle, a.strokeWidth || !1)
//     };
//     var va = function (a, b, c, d, e) {
//         g.fillStyle = c;
//         g.strokeStyle = d;
//         g.lineWidth = e;
//         d = -f.x + b + (e ? e / 2 : 0);
//         var k = -f.y + b + (e ? e / 2 : 0);
//         g.beginPath();
//         g.arc(a.x + d, a.y + k, b, 0, 2 * Math.PI, !0);
//         g.closePath();
//         c && g.fill();
//         e && g.stroke()
//     };
//     this.brush.drawCircle = function (a) {
//         va(e(a.x, a.y), a.radius, a.fillColor || !1, a.strokeColor || v.strokeStyle, a.strokeWidth || !1)
//     };
//     this.brush.drawCircleS = function (a) {
//         va(e(a.x + f.x, a.y + f.y), a.radius, a.fillColor || !1, a.strokeColor || v.strokeStyle, a.strokeWidth || !1)
//     };
//     var Y = function (a, b, c, d) {
//         g.strokeStyle = c;
//         g.lineWidth = d;
//         c = -f.x;
//         d = -f.y;
//         g.beginPath();
//         g.moveTo(c + a.x, d + a.y);
//         g.lineTo(c + b.x, d + b.y);
//         g.closePath();
//         g.stroke()
//     };
//     this.brush.drawLineAngle = function (a) {
//         var b = M(e(a.x + a.length, a.y), e(a.x, a.y), a.angle);
//         Y(e(a.x, a.y), e(b.x, b.y), a.strokeColor || v.strokeStyle, a.strokeWidth || 1)
//     };
//     this.brush.drawLineAngleS = function (a) {
//         var b = M(e(f.x + a.x + a.length, f.y + a.y), e(f.x + a.x, f.y + a.y), a.angle);
//         Y(e(f.x + a.x, f.y + a.y), e(b.x, b.y), a.strokeColor || v.strokeStyle, a.strokeWidth || 1)
//     };
//     this.brush.drawLine = function (a) {
//         Y(e(a.x1, a.y1), e(a.x1 + a.x2, a.y1 + a.y2), a.strokeColor || v.strokeStyle, a.strokeWidth || 1)
//     };
//     this.brush.drawLineS = function (a) {
//         Y(e(f.x + a.x1, f.y + a.y1), e(f.x + a.x2, f.y + a.y2), a.strokeColor || v.strokeStyle, a.strokeWidth || 1)
//     };
//     this.brush.drawLineA = function (a) {
//         Y(e(a.x1, a.y1), e(a.x2, a.y2), a.strokeColor || v.strokeStyle, a.strokeWidth || 1)
//     };
//     this.brush.drawLineAS = function (a) {
//         Y(e(a.x1 + f.x, a.y1 + f.y), e(a.x2 + f.x, a.y2 + f.y), a.strokeColor || v.strokeStyle, a.strokeWidth || 1)
//     };
//     this.brush.drawEllips = function (a) {
//         var b = a.w / 2
//             , c = a.h / 2
//             , d = e(-f.x + a.x, -f.y + a.y);
//         g.save();
//         g.translate(d.x, d.y);
//         g.scale(b / c, 1);
//         g.translate(-d.x, -d.y);
//         va(e(a.x, a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
//         g.restore()
//     };
//     this.brush.drawEllipsS = function (a) {
//         var b = a.w / 2
//             , c = a.h / 2
//             , d = e(a.x, a.y);
//         g.save();
//         g.translate(d.x, d.y);
//         g.scale(b / c, 1);
//         g.translate(-d.x, -d.y);
//         va(e(f.x + a.x, f.y + a.y), c, a.fillColor, a.strokeColor, a.strokeWidth);
//         g.restore()
//     };
//     this.brush.drawImageS = function (a) {
//         if (a.file)
//             if (q(p[a.file])) {
//                 if (p[a.file].loaded) {
//                     var b = a.x || 0
//                         , c = a.y || 0
//                         , d, e;
//                     if (a.w && !a.h) {
//                         var f = a.w / p[a.file].w;
//                         d = a.w;
//                         e = p[a.file].h * f
//                     }
//                     else !a.w && a.h ? (f = a.h / p[a.file].h, e = a.h, d = p[a.file].w * f): a.w
//                 &&
//                     a.h ? (d = a.w, e = a.h) : (d = p[a.file].w, e = p[a.file].h);
//                     a.scale && (d *= a.scale, e *= a.scale);
//                     g.drawImage(p[a.file].img, 0, 0, p[a.file].w, p[a.file].h, b, c, d, e)
//                 }
//             }
//             else p[a.file] = {
//                 loaded: !1
//             }, b = h.document.createElement("img"), b.onload = function () {
//                 p[a.file].loaded = !0;
//                 p[a.file].img = this;
//                 p[a.file].w = this.width;
//                 p[a.file].h = this.height;
//                 B.load()
//             }, b.src = a.file, B.add()
//     };
//     this.brush.drawImage = function (a) {
//         if (a.file)
//             if (q(p[a.file])) {
//                 if (p[a.file].loaded) {
//                     var b = a.x || 0
//                         , c = a.y || 0
//                         , d, e;
//                     if (a.w && !a.h) {
//                         var l = a.w / p[a.file].w;
//                         d = a.w;
//                         e = p[a.file].h * l
//                     }
//                     else !a.w && a.h ? (l = a.h / p[a.file].h, e = a.h, d = p[a.file].w * l): a.w
//                 &&
//                     a.h ? (d = a.w, e = a.h) : (d = p[a.file].w, e = p[a.file].h);
//                     a.scale && (d *= a.scale, e *= a.scale);
//                     g.drawImage(p[a.file].img, 0, 0, p[a.file].w, p[a.file].h, -f.x + b, -f.y + c, d, e)
//                 }
//             }
//             else p[a.file] = {}, p[a.file].loaded = !1, b = h.document.createElement("img"), b.onload = function () {
//                 p[a.file].loaded = !0;
//                 p[a.file].img = this;
//                 p[a.file].w = this.width;
//                 p[a.file].h = this.height;
//                 B.load()
//             }, b.src = a.file, B.add()
//     };
//     this.brush.getPixelColor = function (a, b) {
//         var c = g.getImageData(a, b, 1, 1).data;
//         return "rgb(" + c[0] + ", " + c[1] + ", " + c[2] + ")"
//     };
//     this.brush.setPixelColor = function (a, b, c) {
//         var d = g.createImageData(1, 1);
//         d.data[0] = c.r || d.data[0];
//         d.data[1] = c.g || d.data[1];
//         d.data[2] = c.b || d.data[2];
//         d.data[3] = c.a || 255;
//         g.putImageData(d, a, b)
//     };
//     this.brush.onPixel = function (a, b, c) {
//         var d = g.getImageData(a, b, 1, 1)
//             , e = {
//             r: d.data[0]
//             , g: d.data[1]
//             , b: d.data[2]
//             , a: d.data[3] ? d.data[3] : 255
//         };
//         c(e);
//         d.data[0] = e.r;
//         d.data[1] = e.g;
//         d.data[2] = e.b;
//         d.data[3] = e.a;
//         g.putImageData(d, a, b)
//     };
//     this.brush.onPixels = function (a, b, c, d, e) {
//         c = g.getImageData(a, b, c, d);
//         var k;
//         d = 0;
//         for (k = c.data.length; d < k; d += 4) {
//             var f = {
//                 r: c.data[d]
//                 , g: c.data[d + 1]
//                 , b: c.data[d + 2]
//                 , a: c.data[d + 3] ? c.data[d + 3] : 255
//             };
//             e(f);
//             c.data[d] = f.r;
//             c.data[d + 1] = f.g;
//             c.data[d + 2] = f.b;
//             c.data[d + 3] = f.a
//         }
//         g.putImageData(c, a, b)
//     };
//     this.brush.onRawPixels = function (a, b, c, d, e) {
//         c = g.getImageData(a, b, c, d);
//         e(c.data, c.data.length);
//         g.putImageData(c, a, b)
//     };
//     var R = h.AudioContext || h.webkitAudioContext || !1;
//     (R = R ? new R : !1) && R.listener.setPosition(0, 0, 0);
//     var S = function (a, b) {
//         R || D('module "wAudio" is not supported! use a "audio"');
//         this.vol = b && 1 >= b && 0 < b ? b : 1;
//         this.loadPLay = this.nextPlay = this.loaded = this.playing = !1;
//         this.pausedTime = this.duration = this.startTime = 0;
//         var c = this
//             , d = new XMLHttpRequest;
//         d.open("GET", a, !0);
//         d.responseType = "arraybuffer";
//         d.onload = function (a) {
//             R.decodeAudioData(this.response, function (a) {
//                 c.wABuffer = a;
//                 c.duration = c.wABuffer.duration;
//                 c.wAGain = R.createGain();
//                 c.wAGain.gain.value = c.vol;
//                 c.wAPanner = R.createPanner();
//                 c.wAPanner.setPosition(0, 0, 1);
//                 c.wAPanner.panningModel = "equalpower";
//                 B.load();
//                 c.loaded = !0;
//                 c.loadPlay && c.replay()
//             }, function (a) {
//                 D("error in wAudio.newAudio : error decoding file", a)
//             })
//         };
//         a ? d.send() : D("error in wAudio.newAudio : Where is file?");
//         B.add()
//     };
//     S.prototype.play = function (a) {
//         if (!this.loaded) this.loadPlay = !0;
//         else if (!this.playing) {
//             this.playing = !0;
//             this.wASource = R.createBufferSource();
//             this.wASource.buffer = this.wABuffer;
//             this.wAListener = R.destination;
//             this.wASource.connect(this.wAGain);
//             this.wAGain.connect(this.wAPanner);
//             this.wAPanner.connect(this.wAListener);
//             this.wASource.start(0, this.pausedTime, this.duration);
//             this.startTime = R.currentTime;
//             var b = this;
//             this.wASource.onended = function () {
//                 b.playing = !1;
//                 b.startTime = 0;
//                 b.pausedTime = 0;
//                 b.nextPlay && b.nextPlay.replay()
//             }
//         }
//     };
//     S.prototype.replay = function (a) {
//         this.loaded ? (this.stop(), this.play()) : this.loadPlay = !0
//     };
//     S.prototype.stop = function () {
//         this.pause();
//         this.pausedTime = this.startTime = 0
//     };
//     S.prototype.pause = function () {
//         if (this.playing) {
//             this.pausedTime = this.getProgress();
//             this.playing = !1;
//             this.wASource.stop(0);
//             var a = this;
//             this.wASource.onended = function () {
//                 a.playing = !1
//             }
//         }
//     };
//     S.prototype.getProgress = function () {
//         return this.playing ? R.currentTime - this.startTime + this.pausedTime : this.pausedTime
//     };
//     S.prototype.playPause = function () {
//         this.playing ? this.pause() : this.play()
//     };
//     S.prototype.setNextPlay = function (a) {
//         this.nextPlay = a
//     };
//     S.prototype.setVolume = function (a) {
//         this.vol = a && 1 >= a && 0 < a ? a : this.vol;
//         this.wAGain.gain.value = this.vol
//     };
//     S.prototype.getVolume = function () {
//         return this.vol
//     };
//     S.prototype.setSide = function (a) {
//         this.side = a;
//         this.wAPanner && this.wAPanner.setPosition(this.side, 0, 1 - Math.abs(this.side))
//     };
//     S.prototype.getSide = function () {
//         return this.side
//     };
//     this.wAudio.newAudio = function (a, b) {
//         return new S(a, b)
//     };
//     var ca = function (a, b) {
//         var c, d, e = h.document.createElement("audio");
//         if ("string" == typeof a) {
//             var f = h.document.createElement("source");
//             f.src = a;
//             e.appendChild(f)
//         }
//         else
//             for (c = 0, d = a.length; c < d; c += 1) f = h.document.createElement("source"), f.src = a[c], e.appendChild(f);
//         this.vol = b && 1 >= b && 0 < b ? b : 1;
//         this.playing = 0;
//         this.audio = e;
//         this.nextPlay = this.loaded = !1;
//         this.audio.volume = this.vol;
//         var g = this;
//         this.audio.onloadeddata = function () {
//             g.loaded = !0;
//             B.load()
//         };
//         this.audio.onended = function () {
//             g.playing = !1;
//             g.nextPlay && g.nextPlay.play()
//         };
//         this.audio.load();
//         B.add()
//     };
//     ca.prototype.play = function (a) {
//         this.playing || (a && (this.vol = a && 1 >= a && 0 < a ? a : this.vol, this.audio.volume = this.vol), this.playing = !0, this.audio.play())
//     };
//     ca.prototype.replay = function (a) {
//         a && this.setVolume(a);
//         this.playing = !0;
//         this.audio.currentTime = 0;
//         this.audio.play()
//     };
//     ca.prototype.stop = function () {
//         this.playing && (this.playing = !1, this.audio.pause(), this.audio.currentTime = 0)
//     };
//     ca.prototype.pause = function () {
//         this.playing && (this.playing = !1, this.audio.pause())
//     };
//     ca.prototype.playPause = function () {
//         this.playing ? this.pause() : this.play()
//     };
//     ca.prototype.setNextPlay = function (a) {
//         this.nextPlay = a
//     };
//     ca.prototype.setVolume = function (a) {
//         this.vol = a && 1 >= a && 0 < a ? a : this.vol;
//         this.audio.volume = this.vol
//     };
//     ca.prototype.getVolume = function () {
//         return this.vol
//     };
//     this.audio.newAudio = function (a, b) {
//         return new ca(a, b)
//     };
//     this.dialogs.openLine = function (a, b) {
//         u.game.stop();
//         var c = h.document.createElement("input");
//         c.type = "text";
//         c.style.position = "fixed";
//         c.style.border = "none";
//         c.style.zIndex = m.style.zIndex + 1;
//         c.style.outline = "none";
//         c.style.backgroundColor = a.fillColor || "white";
//         c.style.color = a.color || "black";
//         c.style.top = (a.y ? a.y >> 0 : 0) + "px";
//         c.style.left = (a.x ? a.x >> 0 : 0) + "px";
//         c.style.width = (a.w ? a.w >> 0 : 0) + "px";
//         c.style.fontSize = (a.size ? a.size >> 0 : 10) + "px";
//         c.onclick = function (a) {
//             a.stopPropagation()
//         };
//         c.onkeydown = function (a) {
//             a.stopPropagation();
//             if (27 == a.keyCode || 13 == a.keyCode) a = c.value.trim(), "function" == typeof b && b("" != a ? a : !1), h.document.body.removeChild(c), u.game.resume()
//         };
//         n.attach(c);
//         c.focus()
//     };
//     this.dialogs.openArea = function (a, b) {
//         u.game.stop();
//         var c = h.document.createElement("textarea");
//         c.style.position = "fixed";
//         c.style.border = "none";
//         c.style.zIndex = m.style.zIndex + 1;
//         c.style.overflowY = "scroll";
//         c.style.outline = "none";
//         c.style.backgroundColor = a.fillColor || "white";
//         c.style.color = a.color || "black";
//         c.style.top = (a.y ? a.y >> 0 : 0) + "px";
//         c.style.left = (a.x ? a.x >> 0 : 0) + "px";
//         c.style.width = (a.w ? a.w >> 0 : 0) + "px";
//         c.style.height = (a.h ? a.h >> 0 : 0) + "px";
//         c.style.fontSize = (a.size ? a.size >> 0 : 10) + "px";
//         c.style.maxWidth = (a.w ? a.w >> 0 : 0) + "px";
//         c.style.maxHeight = (a.h ? a.h >> 0 : 0) + "px";
//         c.onclick = function (a) {
//             a.stopPropagation()
//         };
//         c.onkeydown = function (a) {
//             a.stopPropagation();
//             27 == a.keyCode && (a = c.value.trim(), "function" == typeof b && b("" != a ? a : !1), h.document.body.removeChild(c), u.game.resume())
//         };
//         n.attach(c);
//         c.focus()
//     };
//     this.dialogs.openTouchLine = function (a, b, c) {
//         u.game.stop();
//         u.touchControl.exitTouchControl();
//         var d = h.document.createElement("input");
//         d.type = "text";
//         d.style.position = "fixed";
//         d.style.border = "none";
//         d.style.zIndex = m.style.zIndex + 1;
//         d.style.outline = "none";
//         d.style.backgroundColor = a.fillColor || "white";
//         d.style.color = a.color || "black";
//         d.style.top = (a.y ? a.y >> 0 : 0) + "px";
//         d.style.left = (a.x ? a.x >> 0 : 0) + "px";
//         d.style.width = (a.w ? a.w >> 0 : 0) + "px";
//         d.style.fontSize = (a.size ? a.size >> 0 : 10) + "px";
//         var e = h.document.createElement("div");
//         e.style.padding = (b.padding || 10) + "px";
//         e.align = "center";
//         e.style.position = "fixed";
//         e.style.border = "none";
//         e.style.zIndex = m.style.zIndex + 1;
//         e.style.backgroundColor = b.fillColor || "white";
//         e.style.color = b.color || "black";
//         e.innerHTML = b.text || "OK";
//         e.style.top = (b.y ? b.y >> 0 : 0) + "px";
//         e.style.left = (b.x ? b.x >> 0 : 0) + "px";
//         b.w && (e.style.width = (b.w >> 0) + "px");
//         b.h && (e.style.height = (b.h >> 0) + "px");
//         e.style.fontSize = (b.size ? b.size >> 0 : 10) + "px";
//         e.addEventListener("touchstart", function (a) {
//             a.preventDefault();
//             a.stopPropagation();
//             u.touchControl.initTouchControl();
//             a = d.value.trim();
//             "function" == typeof c && c("" != a ? a : !1);
//             h.document.body.removeChild(d);
//             h.document.body.removeChild(e);
//             u.game.resume()
//         }, !0);
//         n.attach(d);
//         n.attach(e);
//         d.focus()
//     };
//     var B = {
//         count: 0
//         , loaded: 0
//         , errored: 0
//         , add: function () {
//             this.count += 1
//         }
//         , load: function () {
//             this.loaded += 1
//         }
//         , error: function () {
//             this.errored += 1
//         }
//     };
//     this.resources.isLoaded = function () {
//         return B.count == B.loaded
//     };
//     this.resources.getProgress = function () {
//         return Math.ceil(B.loaded / B.count * 100)
//     };
//     this.levels.forStringArray = function (a) {
//         var b = a.offset || e(0, 0);
//         x(a.source, function (c, d) {
//             x(c, function (c, f) {
//                 if (" " != c) {
//                     var k = a.onsymbol(c, e(a.size.w * f, a.size.h * d)) || !1;
//                     k && (k.setSize(a.size), a.grid ? k.setPosition(e(b.x + f * a.grid.w, b.y + d * a.grid.h)) : k.setPosition(e(b.x + f * k.w, b.y + d * k.h)), a.oncreate(k, c))
//                 }
//             })
//         })
//     };
//     var cc = function (a) {
//         var b = [];
//         a = JSON.parse(a);
//         x(a, function (a) {
//             var c;
//             "RectObject" == a.type ? c = u.game.newRectObject : "CircleObject" == a.type ? c = u.game.newCircleObject : "RoundRectObject" == a.type ? c = u.game.newRoundRectObject : "TextObject" == a.type ? c = u.game.newTextObject : "EllipsObject" == a.type ? c = u.game.newEllipsObject : "ImageObject" == a.type && (c = u.game.newImageObject);
//             c = c({
//                 fillColor: a.fillColor
//                 , x: a.position[0]
//                 , y: a.position[1]
//                 , w: q(a.size) ? a.size[0] : 0
//                 , h: q(a.size) ? a.size[1] : 0
//                 , angle: a.angle
//                 , radius: q(a.radius) ? a.radius : 0
//                 , text: q(a.text) ? a.text : ""
//                 , size: "TextObject" == a.type && a.sizeText ? a.sizeText : 0
//                 , color: q(a.color) ? a.color : 0
//                 , file: q(a.file) ? a.file : ""
//                 , scale: q(a.scale) ? a.scale : 1
//                 , strokeColor: q(a.strokeColor) ? a.strokeColor : ""
//                 , strokeWidth: q(a.strokeWidth) ? a.strokeWidth : 0
//                 , strokeColorText: q(a.strokeColorText) ? a.strokeColorText : ""
//                 , strokeWidthText: q(a.strokeWidthText) ? a.strokeWidthText : 0
//                 , alpha: q(a.alpha) ? a.alpha : 1
//                 , padding: q(a.padding) ? a.padding : 0
//                 , visible: q(a.visible) ? a.visible : !0
//                 , center: q(a.center) ? a.center : !1
//                 , box: q(a.box) ? a.box : !1
//                 , pointColor: q(a.pointColor) ? a.pointColor : !1
//             });
//             c.name = a.name;
//             b.push(c)
//         });
//         return b
//     }
//         , dc = function (a, b) {
//         var c = []
//             , d;
//         a && "json" == b && (c = cc(a), d = a);
//         this.reload = function () {
//             c = cc(d)
//         };
//         this.clear = function () {
//             Qb(c)
//         };
//         this.add = function (a) {
//             c.push(a)
//         };
//         this.del = function (a) {
//             x(c, function (b, d) {
//                 if (a.id == b.id) return c.splice(d, 1), "break"
//             })
//         };
//         this.delById = function (a) {
//             c.splice(a, 1)
//         };
//         this.getObjects = function () {
//             return c
//         };
//         this.getObjectByName = function (a) {
//             var b, d;
//             b = 0;
//             for (d = c.length; b < d; b += 1)
//                 if (c[b].name == a) return c[b];
//             return !1
//         };
//         this.getObjectById = function (a) {
//             var b, d;
//             b = 0;
//             for (d = c.length; b < d; b += 1)
//                 if (c[b].id == a) return c[b];
//             return !1
//         };
//         this.draw = function () {
//             x(c, function (a) {
//                 a.draw()
//             })
//         };
//         this.getLevelAsJSON = function () {
//             if (!c.length) return "";
//             var a = "[";
//             x(c, function (b, c) {
//                 a += "{";
//                 a += '"type":"' + b.type + '",';
//                 a += '"name":"' + (b.name || "") + '",';
//                 a += '"position":[' + b.x + "," + b.y + "],";
//                 a += '"size":[' + b.w + "," + b.h + "],";
//                 a += '"angle":' + b.angle + ",";
//                 b.fillColor && (a += '"fillColor":"' + b.fillColor + '",');
//                 b.strokeColor && (a += '"strokeColor":"' + b.strokeColor + '",');
//                 b.strokeWidth && (a += '"strokeWidth":' + b.strokeWidth + ",");
//                 b.radius && (a += '"radius":' + b.radius + ",");
//                 b.size && (a += '"sizeText":' + b.size + ",");
//                 b.color && (a += '"color":"' + b.color + '",');
//                 b.strokeWidthText && (a += '"strokeWidthText":' + b.strokeWidthText + ",");
//                 b.strokeColorText && (a += '"strokeColorText":"' + b.strokeColorText + '",');
//                 a += '"alpha":' + b.alpha + ",";
//                 a += '"visible":' + b.visible + ",";
//                 b.text && (a += '"text":"' + b.text + '",');
//                 b.padding && (a += '"padding":' + b.padding + ",");
//                 b.points && (a += '"points":' + JSON.stringify(b.points) + ",");
//                 a += '"center":' + JSON.stringify(b.center) + ",";
//                 a += '"box":' + JSON.stringify(b.box) + ",";
//                 b.pointColor && (a += '"pointColor":"' + b.pointColor + '",');
//                 b.file && (a += '"file":"' + b.file + '",');
//                 a = a.substr(0, a.length - 1) + "},"
//             });
//             a = a.substr(0, a.length - 1);
//             return a + "]"
//         }
//     };
//     this.levels.newLevelFromJSON = function (a) {
//         return new dc(a, "json")
//     };
//     this.levels.newEmptyLevel = function (a) {
//         return new dc(!1)
//     };
//     var ec = 0
//         , fc = 0
//         , yb = 0;
//     this.system.initFPSCheck = function () {
//         n.addEvent("postLoop", "fpsCheckUpdate", function () {
//             yb += 1;
//             1E3 <= K - fc && (ec = yb, yb = 0, fc = K)
//         })
//     };
//     this.system.getFPS = function () {
//         return ec
//     };
//     this.OOP.newRever = function (a, b, c) {
//         var d = function (a, b, c) {
//             this.min = a;
//             this.max = b;
//             this.step = c;
//             this.value = a;
//             this.to = c
//         };
//         d.prototype = {
//             update: function () {
//                 var a = this.value;
//                 this.value <= this.min ? this.to = this.step : this.value >= this.max && (this.to = -this.step);
//                 this.value += this.to;
//                 return a
//             }
//             , getValue: function () {
//                 return this.value
//             }
//             , setValue: function (a) {
//                 this.value = parseFloat(a)
//             }
//             , setStep: function (a) {
//                 this.step = a
//             }
//             , getStep: function () {
//                 return this.step
//             }
//         };
//         return new d(a, b, c)
//     };
//     var gc = {};
//     this.OOP.once = function (a, b) {
//         gc[a] || (gc[a] = !0, b())
//     };
//     this.OOP.newTimer = function (a, b) {
//         if (0 >= a) return ba("error in system.newTimer : variable < 0, Timer is not created");
//         var c = {
//             time: 0 < a ? a : 1E3
//             , func: b
//             , startTime: !1
//             , ending: !1
//             , start: function () {
//                 this.ending || this.startTime || (this.startTime = K)
//             }
//             , run: function () {
//                 !this.ending && this.startTime && K - this.startTime >= this.time && (this.func(), this.ending = !0)
//             }
//             , end: function () {
//                 this.ending || (this.ending = !0, this.func())
//             }
//             , restart: function (a) {
//                 this.startTime || this.start();
//                 if (this.ending) {
//                     if (a && 0 >= a) return ba("error in Timer.restart : variable < 0");
//                     a && (this.time = a);
//                     this.ending = !1;
//                     this.startTime = K
//                 }
//             }
//             , stop: function () {
//                 this.ending || (this.ending = !0)
//             }
//         };
//         n.addEvent("postLoop", "timer" + Z(-100, 100) * Z(-100, 100) + K, function () {
//             c.run()
//         });
//         return c
//     };
//     this.memory.local = {
//         storage: h.localStorage
//         , clear: function () {
//             this.storage.clear()
//         }
//         , save: function (a, b) {
//             this.storage.setItem(a, b)
//         }
//         , saveAsObject: function (a, b) {
//             var c = JSON.stringify(b);
//             this.storage.setItem(a, c)
//         }
//         , loadAsObject: function (a) {
//             return JSON.parse(this.storage.getItem(a))
//         }
//         , load: function (a) {
//             return this.storage.getItem(a)
//         }
//         , loadAsNumber: function (a) {
//             return parseFloat(this.storage.getItem(a))
//         }
//     };
//     this.memory.temp = {
//         values: {}
//         , save: function (a, b) {
//             this.values[a] = b
//         }
//         , load: function (a) {
//             return this.values[a]
//         }
//         , loadAsNumber: function (a) {
//             return parseFloat(this.values[a])
//         }
//     };
//     h.onload = function () {
//         for (var a in v) g[a] = v[a];
//         g.save();
//         n.runEvent("onload");
//         n.loaded = !0;
//         return !1
//     };
//     h.onblur = function () {
//         if (ha) return n.runEvent("gameBlur"), !1
//     };
//     h.onfocus = function () {
//         if (!ha) return h.document.activeElement.blur()
//             , h.focus(), n.runEvent("gameFocus"), !1
//     };
//     h.onresize = function () {
//         n.runEvent("gameResize");
//         g.textBaseline = v.textBaseline;
//         return !1
//     };
//     h.onclick = function () {
//         h.document.activeElement.blur();
//         h.focus()
//     };
//     if ("undefined" !== typeof POINTJS_LOADED_DOM_IGNORE) h.onload()
// };