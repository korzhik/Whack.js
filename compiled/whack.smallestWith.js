+function(g) {
  function m(a, d) {
    "#" === a.charAt(0) && (d = a, a = document.getElementById(a.substr(1)).innerHTML);
    !d && (d = "t" + r++);
    if(t[a]) {
      return t[a]
    }
    var e, h;
    h = d;
    var k, f, n = a.split("}}");
    k = 1;
    f = {0:{b:p, a:B}};
    for(var l = 0, g = n.length;l < g;l++) {
      var b = n[l].replace(/\\/g, "\\\\").split("{{");
      "" !== b[0] && (f[k++] = {b:"=", a:"'" + b[0].replace(/'/g, "\\'").replace(/\n/g, "\\n") + "'"});
      if(b = b[1]) {
        var c = C.test(b) && s.$1;
        if(c) {
          b = u[c](b, h), f[k++] = b
        }else {
          c = b.charAt(0);
          if(" " === c) {
            c = p
          }else {
            if("!" === c) {
              continue
            }else {
              "-" === c ? (c = "=", b = "WhackSmallestWith.e(" + b.substring(1) + ")") : ("=" === c && (b = b.substring(1)), /\|\s(\w+)/.test(b) && (c = s.$1, b = b.replace("| " + c, ""), b = "WhackSmallestWith.f." + c + "(" + b + ")"), c = "=")
            }
          }
          c && (f[k++] = {b:c, a:b})
        }
      }
    }
    f[k++] = {b:p, a:D};
    f.c = k;
    h = E[h] = f;
    k = h.c;
    f = Array(k);
    for(g = n = 0;g < k;g++) {
      b = h[g];
      l = b.b;
      if(e !== l || l === p) {
        f[n++] = ";"
      }
      b = b.a;
      if(l === p) {
        f[n++] = b
      }else {
        if(l === v) {
          e = b[1] || "item";
          var c = "i" + r, m = "l" + r, q = "a" + r;
          r++;
          f[n++] = "for(var " + c + "=0," + e + "," + q + "=" + b[0] + "," + m + "=" + q + ".length;" + c + "<" + m + ";" + c + "++){" + e + "=" + q + "[" + c + "]"
        }else {
          "=" !== e ? f[n++] = "_o+=(" + b + ")" : f[n++] = "+(" + b + ")"
        }
      }
      e = l
    }
    e = f.join("");
    h = new Function("data", e);
    t[a] = h;
    d && !w[d] && (w[d] = e);
    return h
  }
  var r = 0, s = g.RegExp, p = 1, v = 2, w = {}, t = {}, E = {}, B = "var _o='';with(data){", D = "} return _o", u = {end:function() {
    return{b:p, a:"}"}
  }, "else":function() {
    return{b:p, a:"}else{"}
  }, elseif:function(a) {
    return u["if"]("}else" + a)
  }, "if":function(a) {
    var d = a.lastIndexOf(":"), e = "" === a.split(":").slice(-1)[0].trim();
    -1 < d && e ? a = a.substr(0, d) + "{" : -1 === d && "" === a.split(")").slice(-1)[0].trim() && (a += "{");
    return{b:p, a:a}
  }, each:function(a) {
    a = F.test(a) && s;
    return{b:v, a:[a.$1, a.$2]}
  }};
  Object.keys || (Object.keys = function(a) {
    var d = [], e;
    for(e in a) {
      a.hasOwnProperty(e) && d.push(e)
    }
    return d
  });
  var q = {}, x = g.chrome, y = g.document;
  if(!x) {
    var z = y.createTextNode(""), A = y.createElement("span");
    A.appendChild(z)
  }
  var G = /&/g, H = /"/g, I = /'/g, J = />/g, K = /</g, L = /\//g;
  q.escapeHTML = function(a) {
    return x ? a.replace(G, "&amp;").replace(K, "&lt;").replace(J, "&gt;").replace(H, "&quot;").replace(I, "&#x27;").replace(L, "&#x2F;") : (z.nodeValue = a) && A.innerHTML
  };
  var F = /\(([\w\.\_]+),?\s*(\w+)?\)/, C = new s("^\\s*(" + Object.keys(u).join("|") + ")\\b");
  m.f = q;
  m.addFilter = function(a, d) {
    q[a] = d
  };
  m.e = function(a) {
    return m.f.escapeHTML(a)
  };
  g.WhackSmallestWith = m;
  g.WhackSmallestWith._name = "WhackSmallestWith"
}(this);

