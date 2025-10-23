import {
  __commonJS
} from "./chunk-Y2F7D3TJ.js";

// ../../../../Code/yds/xingmi-uniapp/xingyu/node_modules/tim-upload-plugin/index.js
var require_tim_upload_plugin = __commonJS({
  "../../../../Code/yds/xingmi-uniapp/xingyu/node_modules/tim-upload-plugin/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).TIMUploadPlugin = t();
    }(exports, function() {
      function e(e2, t2) {
        if (!(e2 instanceof t2))
          throw new TypeError("Cannot call a class as a function");
      }
      function t(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var o2 = t2[n2];
          o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e2, s(o2.key), o2);
        }
      }
      function n(e2, n2, o2) {
        return n2 && t(e2.prototype, n2), o2 && t(e2, o2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
      }
      function o(e2, t2, n2) {
        return (t2 = s(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
      }
      function r(e2, t2) {
        var n2 = Object.keys(e2);
        if (Object.getOwnPropertySymbols) {
          var o2 = Object.getOwnPropertySymbols(e2);
          t2 && (o2 = o2.filter(function(t3) {
            return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
          })), n2.push.apply(n2, o2);
        }
        return n2;
      }
      function a(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = null != arguments[t2] ? arguments[t2] : {};
          t2 % 2 ? r(Object(n2), true).forEach(function(t3) {
            o(e2, t3, n2[t3]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : r(Object(n2)).forEach(function(t3) {
            Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
          });
        }
        return e2;
      }
      function s(e2) {
        var t2 = function(e3, t3) {
          if ("object" != typeof e3 || !e3)
            return e3;
          var n2 = e3[Symbol.toPrimitive];
          if (void 0 !== n2) {
            var o2 = n2.call(e3, t3 || "default");
            if ("object" != typeof o2)
              return o2;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t3 ? String : Number)(e3);
        }(e2, "string");
        return "symbol" == typeof t2 ? t2 : t2 + "";
      }
      function i(e2) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      var u = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, l = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && ("mac" === wx.getSystemInfoSync().platform || "windows" === wx.getSystemInfoSync().platform), f = "undefined" != typeof wx && "function" == typeof wx.getSystemInfoSync && Boolean(wx.getSystemInfoSync().fontSizeSetting) || l, c = "undefined" != typeof qq && "function" == typeof qq.getSystemInfoSync && Boolean(qq.getSystemInfoSync().fontSizeSetting), d = "undefined" != typeof tt && "function" == typeof tt.getSystemInfoSync && Boolean(tt.getSystemInfoSync().fontSizeSetting), p = "undefined" != typeof swan && "function" == typeof swan.getSystemInfoSync && Boolean(swan.getSystemInfoSync().fontSizeSetting), y = "undefined" != typeof my && "function" == typeof my.getSystemInfoSync && Boolean(my.getSystemInfoSync().fontSizeSetting), m = "undefined" != typeof uni && "undefined" == typeof window && "function" == typeof uni.requireNativePlugin, g = m && "ios" === uni.getDeviceInfo().platform.toLocaleLowerCase(), h = (m && uni.getDeviceInfo().platform.toLocaleLowerCase(), f || c || d || p || y || m), v = void 0 !== u && (void 0 !== u.nativeModuleProxy || void 0 !== u.ReactNative), b = c ? qq : d ? tt : p ? swan : y ? my : f ? wx : m ? uni : {}, w = function(e2) {
        if ("object" !== i(e2) || null === e2)
          return false;
        var t2 = Object.getPrototypeOf(e2);
        if (null === t2)
          return true;
        for (var n2 = t2; null !== Object.getPrototypeOf(n2); )
          n2 = Object.getPrototypeOf(n2);
        return t2 === n2;
      };
      function S(e2) {
        if (null == e2)
          return true;
        if ("boolean" == typeof e2)
          return false;
        if ("number" == typeof e2)
          return 0 === e2;
        if ("string" == typeof e2)
          return 0 === e2.length;
        if ("function" == typeof e2)
          return 0 === e2.length;
        if (Array.isArray(e2))
          return 0 === e2.length;
        if (e2 instanceof Error)
          return "" === e2.message;
        if (w(e2)) {
          for (var t2 in e2)
            if (Object.prototype.hasOwnProperty.call(e2, t2))
              return false;
          return true;
        }
        return false;
      }
      var O = function() {
        return n(function t2() {
          e(this, t2), this._n = "WebRequest";
        }, [{ key: "request", value: function(e2, t2) {
          var n2 = this, o2 = "".concat(this._n, ".request"), r2 = e2.downloadUrl || "", s2 = (e2.method || "PUT").toUpperCase(), i2 = e2.url;
          if (console.log("%c tim-upload-plugin %c", "background:#0abf5b; padding:1px; border-radius:3px; color: #fff", "background:transparent", "".concat(o2, " URL:").concat(i2)), e2.qs) {
            var u2 = function(e3) {
              var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&", n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "=";
              return S(e3) ? "" : w(e3) ? Object.keys(e3).map(function(o3) {
                var r3 = encodeURIComponent(o3) + n3;
                return Array.isArray(e3[o3]) ? e3[o3].map(function(e4) {
                  return r3 + encodeURIComponent(e4);
                }).join(t3) : r3 + encodeURIComponent(e3[o3]);
              }).filter(Boolean).join(t3) : void 0;
            }(e2.qs);
            u2 && (i2 += "".concat(-1 === i2.indexOf("?") ? "?" : "&").concat(u2));
          }
          var l2 = new XMLHttpRequest();
          l2.open(s2, i2, true), l2.responseType = e2.dataType || "text";
          var f2 = e2.headers || {};
          if (e2.uploadByIP && (f2 = a(a({}, f2), {}, { host: e2.uploadIP })), !S(f2))
            for (var c2 in f2)
              f2.hasOwnProperty(c2) && "content-length" !== c2.toLowerCase() && "user-agent" !== c2.toLowerCase() && "origin" !== c2.toLowerCase() && "host" !== c2.toLowerCase() && l2.setRequestHeader(c2, f2[c2]);
          return l2.onload = function() {
            if (200 === l2.status)
              t2(null, n2._xhrRes(l2, n2._xhrBody(l2, r2, e2.uploadByIP && e2.uploadIP), f2));
            else {
              if (e2.uploadIP && -1 === e2.url.indexOf(e2.uploadIP))
                return e2.url = function(e3, t3) {
                  return e3.replace(/^http(s)?:\/\/(.*?)\//, "https://".concat(t3, "/"));
                }(e2.url, e2.uploadIP), e2.uploadByIP = true, n2.request(e2, t2);
              var o3 = { code: l2.status, message: JSON.stringify(l2.responseText) };
              t2(o3, n2._xhrRes(l2, n2._xhrBody(l2, r2, e2.uploadByIP && e2.uploadIP), f2));
            }
          }, l2.onerror = function(o3) {
            var a2 = n2._xhrBody(l2, r2, e2.uploadByIP && e2.uploadIP), s3 = { code: l2.status, message: JSON.stringify(l2.responseText) };
            a2 || l2.statusText || 0 !== l2.status || (o3.message = "CORS blocked or network error"), t2(s3, n2._xhrRes(l2, a2)), s3 = null;
          }, e2.onProgress && l2.upload && (l2.upload.onprogress = function(t3) {
            var n3 = t3.total, o3 = t3.loaded, r3 = Math.floor(100 * o3 / n3);
            e2.onProgress({ total: n3, loaded: o3, percent: (r3 >= 100 ? 100 : r3) / 100 });
          }), l2.send(e2.resources), l2;
        } }, { key: "_xhrRes", value: function(e2, t2) {
          var n2 = {};
          return e2.getAllResponseHeaders().trim().split("\n").forEach(function(e3) {
            if (e3) {
              var t3 = e3.indexOf(":"), o2 = e3.substr(0, t3).trim().toLowerCase(), r2 = e3.substr(t3 + 1).trim();
              n2[o2] = r2;
            }
          }), { statusCode: e2.status, statusMessage: e2.statusText, headers: n2, data: t2 };
        } }, { key: "_xhrBody", value: function(e2, t2, n2) {
          return 200 === e2.status && t2 ? { location: t2, uploadIP: n2 } : { response: e2.responseText, uploadIP: n2 };
        } }]);
      }(), P = ["unknown", "image", "video", "audio", "log"], I = ["name"], C = function() {
        return n(function t2() {
          e(this, t2);
        }, [{ key: "request", value: function(e2, t2) {
          var n2 = this, o2 = e2.resources, r2 = void 0 === o2 ? "" : o2, s2 = e2.headers, i2 = void 0 === s2 ? {} : s2, u2 = e2.url, l2 = e2.downloadUrl, f2 = void 0 === l2 ? "" : l2, c2 = u2, d2 = null, p2 = f2.match(/^(https?:\/\/[^/]+\/)([^/]*\/?)(.*)$/), m2 = decodeURIComponent(p2[3]), h2 = m2.indexOf("?") > -1 ? m2.split("?")[0] : m2, v2 = { key: e2.fileKey ? e2.fileKey : h2, success_action_status: 200, "Content-Type": "" }, w2 = {};
          if (g) {
            var S2 = u2.split("?sign=");
            if (S2.length > 1) {
              var O2 = S2[1];
              c2 = "".concat(S2[0], "?sign=").concat(encodeURIComponent("".concat(O2))), w2.sign = decodeURIComponent(O2), w2.signature = decodeURIComponent(O2);
            }
          }
          var C2 = { url: c2, header: i2, name: "file", filePath: r2, formData: a(a({}, v2), w2), timeout: e2.timeout || 3e5 };
          if (y) {
            var x2 = C2;
            x2.name;
            C2 = a(a({}, function(e3, t3) {
              if (null == e3)
                return {};
              var n3, o3, r3 = function(e4, t4) {
                if (null == e4)
                  return {};
                var n4 = {};
                for (var o4 in e4)
                  if ({}.hasOwnProperty.call(e4, o4)) {
                    if (t4.includes(o4))
                      continue;
                    n4[o4] = e4[o4];
                  }
                return n4;
              }(e3, t3);
              if (Object.getOwnPropertySymbols) {
                var a2 = Object.getOwnPropertySymbols(e3);
                for (o3 = 0; o3 < a2.length; o3++)
                  n3 = a2[o3], t3.includes(n3) || {}.propertyIsEnumerable.call(e3, n3) && (r3[n3] = e3[n3]);
              }
              return r3;
            }(x2, I)), {}, { fileName: "file", fileType: P[e2.fileType] });
          }
          return (d2 = b.uploadFile(a(a({}, C2), {}, { success: function(e3) {
            n2._handleResponse({ response: e3, downloadUrl: f2, callback: t2 });
          }, fail: function(e3) {
            n2._handleResponse({ response: e3, downloadUrl: f2, callback: t2 });
          } }))).onProgressUpdate && d2.onProgressUpdate(function(t3) {
            e2.onProgress && e2.onProgress({ total: t3.totalBytesExpectedToSend, loaded: t3.totalBytesSent, percent: Math.floor(t3.progress) / 100 });
          }), d2;
        } }, { key: "_handleResponse", value: function(e2) {
          var t2 = e2.downloadUrl, n2 = e2.response, o2 = e2.callback, r2 = n2.header, s2 = {};
          if (r2)
            for (var i2 in r2)
              r2.hasOwnProperty(i2) && (s2[i2.toLowerCase()] = r2[i2]);
          var u2 = +n2.statusCode;
          200 === u2 ? o2(null, { statusCode: u2, headers: s2, data: a(a({}, n2.data), {}, { location: t2 }) }) : o2({ code: u2, message: JSON.stringify(n2.data) }, { statusCode: u2, headers: s2, data: void 0 });
        } }]);
      }(), x = function() {
        return n(function t2() {
          e(this, t2);
        }, [{ key: "request", value: function(e2, t2) {
          var n2 = this, o2 = e2.resources, r2 = void 0 === o2 ? "" : o2, a2 = e2.fileKey, s2 = void 0 === a2 ? "" : a2, i2 = e2.url, u2 = e2.downloadUrl, l2 = void 0 === u2 ? "" : u2, f2 = new FormData();
          f2.append("key", s2), f2.append("success_action_status", 200), f2.append("file", { uri: r2, type: "application/octet-stream", name: "uploaded_file" }), fetch(i2, { method: "POST", headers: { "Content-Type": "multipart/form-data" }, body: f2 }).then(function(e3) {
            n2._handleResponse({ response: e3, downloadUrl: l2, callback: t2 });
          }).catch(function(e3) {
            n2._handleResponse({ response: e3, downloadUrl: l2, callback: t2 });
          });
        } }, { key: "_handleResponse", value: function(e2) {
          var t2 = e2.downloadUrl, n2 = e2.response, o2 = e2.callback, r2 = n2.headers, a2 = n2.status, s2 = r2 && r2.map || {};
          200 === a2 ? o2(null, { statusCode: 200, headers: s2, data: { location: t2 } }) : o2({ code: a2, message: JSON.stringify(n2) }, { statusCode: a2, headers: s2, data: void 0 });
        } }]);
      }();
      return function() {
        return n(function t2() {
          e(this, t2), this.retry = 1, this.tryCount = 0, this.systemClockOffset = 0, this.httpRequest = h ? new C() : v ? new x() : new O(), console.log("TIMUploadPlugin.VERSION: ".concat("1.4.3"));
        }, [{ key: "uploadFile", value: function(e2, t2) {
          var n2 = this;
          return this.httpRequest.request(e2, function(o2, r2) {
            o2 && n2.tryCount < n2.retry && n2.allowRetry(o2) ? (n2.tryCount++, n2.uploadFile(e2, t2)) : (n2.tryCount = 0, t2(o2, r2));
          });
        } }, { key: "allowRetry", value: function(e2) {
          var t2 = false, n2 = false;
          if (e2) {
            var o2 = e2.headers && (e2.headers.date || e2.headers.Date) || e2.error && e2.error.ServerTime;
            try {
              var r2 = e2.error && e2.error.Code, a2 = e2.error && e2.error.Message;
              ("RequestTimeTooSkewed" === r2 || "AccessDenied" === r2 && "Request has expired" === a2) && (n2 = true);
            } catch (u2) {
            }
            if (n2 && o2) {
              var s2 = Date.now(), i2 = Date.parse(o2);
              Math.abs(s2 + this.systemClockOffset - i2) >= 3e4 && (this.systemClockOffset = i2 - s2, t2 = true);
            } else
              5 === Math.floor(e2.statusCode / 100) && (t2 = true);
          }
          return t2;
        } }], [{ key: "getVersion", value: function() {
          return "1.4.3";
        } }]);
      }();
    });
  }
});
export default require_tim_upload_plugin();
//# sourceMappingURL=tim-upload-plugin.js.map
