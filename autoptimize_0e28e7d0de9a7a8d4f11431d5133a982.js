! function(a, e) {
    a.gaTrackingId && (a.ga = a.ga || function() {
        (ga.q = ga.q || []).push(arguments)
    }, ga.l = +new Date, ga("create", a.gaTrackingId, "auto"), ga("require", "eventTracker", {
        attributePrefix: "data-ga-"
    }), ga("require", "outboundLinkTracker"), ga("require", "cleanUrlTracker", {
        trailingSlash: "remove"
    }), ga("require", "vimeoTracker", {
        debug: !1
    }), ga("send", "pageview"))
}(window);
! function() {
    function t() {
        t = function() {}, E.Symbol || (E.Symbol = e)
    }

    function e(t) {
        return "jscomp_symbol_" + (t || "") + L++
    }

    function n() {
        t();
        var e = E.Symbol.iterator;
        e || (e = E.Symbol.iterator = E.Symbol("iterator")), "function" != typeof Array.prototype[e] && A(Array.prototype, e, {
            configurable: !0,
            writable: !0,
            value: function() {
                return i(this)
            }
        }), n = function() {}
    }

    function i(t) {
        var e = 0;
        return r(function() {
            return e < t.length ? {
                done: !1,
                value: t[e++]
            } : {
                done: !0
            }
        })
    }

    function r(t) {
        return n(), t = {
            next: t
        }, t[E.Symbol.iterator] = function() {
            return this
        }, t
    }

    function o(t) {
        n();
        var e = t[Symbol.iterator];
        return e ? e.call(t) : i(t)
    }

    function a(t) {
        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
        return n
    }

    function s(t, e) {
        if (t && 1 == t.nodeType && e) {
            if ("string" == typeof e || 1 == e.nodeType) return t == e || c(t, e);
            if ("length" in e)
                for (var n, i = 0; n = e[i]; i++)
                    if (t == n || c(t, n)) return !0
        }
        return !1
    }

    function c(t, e) {
        if ("string" != typeof e) return !1;
        if (F) return F.call(t, e);
        e = t.parentNode.querySelectorAll(e);
        for (var n, i = 0; n = e[i]; i++)
            if (n == t) return !0;
        return !1
    }

    function u(t) {
        for (var e = []; t && t.parentNode && 1 == t.parentNode.nodeType;) t = t.parentNode, e.push(t);
        return e
    }

    function h(t, e, n) {
        function i(t) {
            var i;
            if (o.composed && "function" == typeof t.composedPath)
                for (var r, a = t.composedPath(), c = 0; r = a[c]; c++) 1 == r.nodeType && s(r, e) && (i = r);
            else t: {
                if ((i = t.target) && 1 == i.nodeType && e)
                    for (i = [i].concat(u(i)), a = 0; c = i[a]; a++)
                        if (s(c, e)) {
                            i = c;
                            break t
                        }
                i = void 0
            }
            i && n.call(i, t, i)
        }
        var r = document,
            o = {
                composed: !0,
                j: !0
            },
            o = void 0 === o ? {} : o;
        return r.addEventListener(t, i, o.j), {
            h: function() {
                r.removeEventListener(t, i, o.j)
            }
        }
    }

    function f(t) {
        var e = {};
        if (!t || 1 != t.nodeType) return e;
        if (t = t.attributes, !t.length) return {};
        for (var n, i = 0; n = t[i]; i++) e[n.name] = n.value;
        return e
    }

    function l(t) {
        if (t = t && "." != t ? t : location.href, _[t]) return _[t];
        if (D.href = t, "." == t.charAt(0) || "/" == t.charAt(0)) return l(D.href);
        var e = "80" == D.port || "443" == D.port ? "" : D.port,
            e = "0" == e ? "" : e,
            n = D.host.replace(I, "");
        return _[t] = {
            hash: D.hash,
            host: n,
            hostname: D.hostname,
            href: D.href,
            origin: D.origin ? D.origin : D.protocol + "//" + n,
            pathname: "/" == D.pathname.charAt(0) ? D.pathname : "/" + D.pathname,
            port: e,
            protocol: D.protocol,
            search: D.search
        }
    }

    function p(t, e, n, i, r) {
        if ("function" == typeof i) {
            var o = n.get("buildHitTask");
            return {
                buildHitTask: function(n) {
                    n.set(t, null, !0), n.set(e, null, !0), i(n, r), o(n)
                }
            }
        }
        return q({}, t, e)
    }

    function d(t, e) {
        var n = f(t),
            i = {};
        return Object.keys(n).forEach(function(t) {
            if (!t.indexOf(e) && t != e + "on") {
                var r = n[t];
                "true" == r && (r = !0), "false" == r && (r = !1), t = v(t.slice(e.length)), i[t] = r
            }
        }), i
    }

    function b(t) {
        function e() {
            n || (n = !0, t())
        }
        var n = !1;
        return setTimeout(e, 2e3), e
    }

    function v(t) {
        return t.replace(/[\-\_]+(\w?)/g, function(t, e) {
            return e.toUpperCase()
        })
    }

    function g(t, e) {
        var n = window.GoogleAnalyticsObject || "ga";
        window[n] = window[n] || function(t) {
            for (var e = [], i = 0; i < arguments.length; ++i) e[i - 0] = arguments[i];
            (window[n].q = window[n].q || []).push(e)
        }, window.gaDevIds = window.gaDevIds || [], 0 > window.gaDevIds.indexOf("i5iSjo") && window.gaDevIds.push("i5iSjo"), window[n]("provide", t, e), window.gaplugins = window.gaplugins || {}, window.gaplugins[t.charAt(0).toUpperCase() + t.slice(1)] = e
    }

    function y(t, e) {
        t.set("&_av", "2.1.1");
        var n = t.get("&_au"),
            n = parseInt(n || "0", 16).toString(2);
        if (n.length < H)
            for (var i = H - n.length; i;) n = "0" + n, i--;
        e = H - e, n = n.substr(0, e) + 1 + n.substr(e + 1), t.set("&_au", parseInt(n || "0", 2).toString(16))
    }

    function w(t, e) {
        var n = this;
        if (y(t, C.m), window.addEventListener) {
            this.a = q({
                events: ["click"],
                fieldsObj: {},
                attributePrefix: "ga-"
            }, e), this.f = t, this.c = this.c.bind(this);
            var i = "[" + this.a.attributePrefix + "on]";
            this.b = {}, this.a.events.forEach(function(t) {
                n.b[t] = h(t, i, n.c)
            })
        }
    }

    function m(t, e) {
        var n = this;
        this.context = t, this.i = e, this.f = (this.c = /Task$/.test(e)) ? t.get(e) : t[e], this.a = [], this.b = [], this.g = function(t) {
            for (var e = [], i = 0; i < arguments.length; ++i) e[i - 0] = arguments[i];
            return n.b[n.b.length - 1].apply(null, [].concat(e instanceof Array ? e : a(o(e))))
        }, this.c ? t.set(e, this.g) : t[e] = this.g
    }

    function k(t, e) {
        -1 < (e = t.a.indexOf(e)) && (t.a.splice(e, 1), 0 < t.a.length ? O(t) : t.h())
    }

    function O(t) {
        t.b = [];
        for (var e, n = 0; e = t.a[n]; n++) {
            var i = t.b[n - 1] || t.f.bind(t.context);
            t.b.push(e(i))
        }
    }

    function j(t, e) {
        var n = K.filter(function(n) {
            return n.context == t && n.i == e
        })[0];
        return n || (n = new m(t, e), K.push(n)), n
    }

    function x(t, e) {
        y(t, C.l), this.a = q({}, e), this.g = t, this.b = this.a.stripQuery && this.a.queryDimensionIndex ? "dimension" + this.a.queryDimensionIndex : null, this.f = this.f.bind(this), this.c = this.c.bind(this), e = this.f;
        var n = j(t, "get");
        n.a.push(e), O(n), e = this.c, t = j(t, "buildHitTask"), t.a.push(e), O(t)
    }

    function S(t, e) {
        var n = l(e.page || e.location),
            i = n.pathname;
        if (t.a.indexFilename) {
            var r = i.split("/");
            t.a.indexFilename == r[r.length - 1] && (r[r.length - 1] = "", i = r.join("/"))
        }
        return "remove" == t.a.trailingSlash ? i = i.replace(/\/+$/, "") : "add" == t.a.trailingSlash && (/\.\w+$/.test(i) || "/" == i.substr(-1) || (i += "/")), i = {
            page: i + (t.a.stripQuery ? "" : n.search)
        }, e.location && (i.location = e.location), t.b && (i[t.b] = n.search.slice(1) || "(not set)"), "function" == typeof t.a.urlFieldsFilter ? (e = t.a.urlFieldsFilter(i, l), n = {}, n.page = e.page, n.location = e.location, n[t.b] = e[t.b], n) : i
    }

    function T(t, e) {
        var n = this;
        y(t, C.o), window.addEventListener && (this.a = q({
            events: ["click"],
            linkSelector: "a, area",
            shouldTrackOutboundLink: this.shouldTrackOutboundLink,
            fieldsObj: {},
            attributePrefix: "ga-"
        }, e), this.f = t, this.c = this.c.bind(this), this.b = {}, this.a.events.forEach(function(t) {
            n.b[t] = h(t, n.a.linkSelector, n.c)
        }))
    }
    var A = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) {
            if (n.get || n.set) throw new TypeError("ES3 does not support getters and setters.");
            t != Array.prototype && t != Object.prototype && (t[e] = n.value)
        },
        E = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        L = 0,
        P = window.Element.prototype,
        F = P.matches || P.matchesSelector || P.webkitMatchesSelector || P.mozMatchesSelector || P.msMatchesSelector || P.oMatchesSelector,
        I = /:(80|443)$/,
        D = document.createElement("a"),
        _ = {},
        q = Object.assign || function(t, e) {
            for (var n = [], i = 1; i < arguments.length; ++i) n[i - 1] = arguments[i];
            for (var i = 0, r = n.length; i < r; i++) {
                var o, a = Object(n[i]);
                for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o])
            }
            return t
        },
        C = {
            l: 1,
            m: 2,
            s: 3,
            v: 4,
            w: 5,
            o: 6,
            A: 7,
            B: 8,
            C: 9,
            u: 10
        },
        H = Object.keys(C).length;
    w.prototype.c = function(t, e) {
        var n = this.a.attributePrefix;
        t.type == e.getAttribute(n + "on") && (t = d(e, n), n = q({}, this.a.fieldsObj, t), this.f.send(t.hitType || "event", p({
            transport: "beacon"
        }, n, this.f, this.a.hitFilter, e)))
    }, w.prototype.remove = function() {
        var t = this;
        Object.keys(this.b).forEach(function(e) {
            t.b[e].h()
        })
    }, g("eventTracker", w);
    var K = [];
    m.prototype.h = function() {
        var t = K.indexOf(this); - 1 < t && (K.splice(t, 1), this.c ? this.context.set(this.i, this.f) : this.context[this.i] = this.f)
    }, x.prototype.f = function(t) {
        var e = this;
        return function(n) {
            if ("page" == n || n == e.b) {
                var i = {
                    location: t("location"),
                    page: t("page")
                };
                return S(e, i)[n]
            }
            return t(n)
        }
    }, x.prototype.c = function(t) {
        var e = this;
        return function(n) {
            var i = S(e, {
                location: n.get("location"),
                page: n.get("page")
            });
            n.set(i, null, !0), t(n)
        }
    }, x.prototype.remove = function() {
        var t = this.f;
        k(j(this.g, "get"), t), t = this.c, k(j(this.g, "buildHitTask"), t)
    }, g("cleanUrlTracker", x), T.prototype.c = function(t, e) {
        if (this.a.shouldTrackOutboundLink(e, l)) {
            var n = e.getAttribute("href") || e.getAttribute("xlink:href"),
                i = l(n),
                r = {
                    transport: "beacon",
                    eventCategory: "Outbound Link",
                    eventAction: t.type,
                    eventLabel: i.href
                };
            navigator.sendBeacon || "click" != t.type || "_blank" == e.target || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || 1 < t.which || window.addEventListener("click", function(t) {
                t.defaultPrevented || (t.preventDefault(), r.hitCallback = b(function() {
                    location.href = n
                }))
            }), t = q({}, this.a.fieldsObj, d(e, this.a.attributePrefix)), this.f.send("event", p(r, t, this.f, this.a.hitFilter, e))
        }
    }, T.prototype.shouldTrackOutboundLink = function(t, e) {
        return t = t.getAttribute("href") || t.getAttribute("xlink:href"), e = e(t), e.hostname != location.hostname && "http" == e.protocol.slice(0, 4)
    }, T.prototype.remove = function() {
        var t = this;
        Object.keys(this.b).forEach(function(e) {
            t.b[e].h()
        })
    }, g("outboundLinkTracker", T)
}();

function providePlugin(e, t) {
    var i = window[window.GoogleAnalyticsObject || "ga"];
    "function" == typeof i && i("provide", e, t)
}
var VimeoTracker = function(e, t) {
    this.tracker = e, this.iframes = [], this.eventMarker = {}, this.isDebug = t.debug, this.loadIframes(), window.addEventListener ? window.addEventListener("message", this.onMessageReceived.bind(this), !1) : window.attachEvent("onmessage", this.onMessageReceived.bind(this), !1)
};
VimeoTracker.prototype.getIframeUniqueId = function(e) {
    var t = e.getAttribute("id");
    return t || (t = e.parentNode.getAttribute("id")), t
}, VimeoTracker.prototype.getIframeElementData = function(e) {
    var t, i = document.getElementById(e);
    if (i) t = i.getAttribute("id");
    else {
        var r = document.querySelector('[data-iframe-id="' + e + '"]');
        r && (i = r.querySelector("iframe"), t = r.getAttribute("id"))
    }
    return {
        el: i,
        id: t
    }
}, VimeoTracker.prototype.loadIframes = function() {
    this.iframes = [].filter.call(document.querySelectorAll('iframe[src*="vimeo"]'), function(e) {
        var t = this.getIframeUniqueId(e),
            i = e.getAttribute("data-no-tracking");
        if (void 0 !== t && "true" !== i) return this.eventMarker[t] || (this.eventMarker[t] = {
            progress25: !1,
            progress50: !1,
            progress75: !1,
            videoPlayed: !1,
            videoPaused: !1,
            videoResumed: !1,
            videoSeeking: !1,
            videoCompleted: !1,
            timePercentComplete: 0
        }), !0
    }, this)
}, VimeoTracker.prototype.onReady = function() {
    this.iframes.forEach(function(e) {
        this.postMessage("addEventListener", "play", e), this.postMessage("addEventListener", "pause", e), this.postMessage("addEventListener", "finish", e), this.postMessage("addEventListener", "playProgress", e)
    }, this)
}, VimeoTracker.prototype.onPlay = function(e) {
    this.eventMarker[e.id] && (this.eventMarker[e.id].videoPlayed ? !this.eventMarker[e.id].videoResumed && this.eventMarker[e.id].videoPaused && (this.sendEvent(e.el, "Resume"), this.eventMarker[e.id].videoResumed = !0) : (this.sendEvent(e.el, "Play"), this.eventMarker[e.id].videoPlayed = !0))
}, VimeoTracker.prototype.onPause = function(e) {
    this.eventMarker[e.id] && this.eventMarker[e.id].timePercentComplete < 99 && !this.eventMarker[e.id].videoPaused && (this.sendEvent(e.el, "Pause"), this.eventMarker[e.id].videoPaused = !0)
}, VimeoTracker.prototype.onFinish = function(e) {
    this.eventMarker[e.id] && (this.eventMarker[e.id].videoCompleted || (this.sendEvent(e.el, "Watch to End"), this.eventMarker[e.id].videoCompleted = !0))
}, VimeoTracker.prototype.onPlayProgress = function(e, t) {
    if (this.eventMarker[t.id]) {
        var i;
        this.eventMarker[t.id].timePercentComplete = Math.round(100 * e.percent), this.eventMarker[t.id].timePercentComplete > 24 && !this.eventMarker[t.id].progress25 && (i = "25%", this.eventMarker[t.id].progress25 = !0), this.eventMarker[t.id].timePercentComplete > 49 && !this.eventMarker[t.id].progress50 && (i = "50%", this.eventMarker[t.id].progress50 = !0), this.eventMarker[t.id].timePercentComplete > 74 && !this.eventMarker[t.id].progress75 && (i = "75%", this.eventMarker[t.id].progress75 = !0), i && this.sendEvent(t.el, i)
    }
}, VimeoTracker.prototype.onMessageReceived = function(e) {
    if ("http://player.vimeo.com" !== e.origin.replace("https:", "http:")) return void this.debugMessage("Received message was not from Vimeo!");
    if ("string" != typeof e.data && "object" != typeof e.data) return void this.debugMessage("Event data cannot be parsed!");
    var t = "string" == typeof e.data ? JSON.parse(e.data) : e.data;
    if (void 0 === t.player_id) return void this.debugMessage("Couldn't retrieve 'player_id'!");
    var i = this.getIframeElementData(t.player_id);
    if (!i.id) return void this.debugMessage("Couldn't determine unique ID for <iframe> element!");
    switch (t.event) {
        case "ready":
            this.onReady();
            break;
        case "playProgress":
            this.onPlayProgress(t.data, i);
            break;
        case "play":
            this.onPlay(i);
            break;
        case "pause":
            this.onPause(i);
            break;
        case "finish":
            this.onFinish(i)
    }
}, VimeoTracker.prototype.reload = function() {
    this.debugMessage("Reloading VimeoTracker!"), this.loadIframes()
}, VimeoTracker.prototype.getLabel = function(e) {
    var t = e.getAttribute("src").split("?")[0],
        i = t,
        r = e.getAttribute("title"),
        s = e.getAttribute("data-title");
    return s ? i += " (" + s + ")" : r && (i += " (" + r + ")"), i
}, VimeoTracker.prototype.postMessage = function(e, t, i) {
    var r = {
        method: e
    };
    t && (r.value = t);
    var s = i.getAttribute("src").split("?")[0];
    i.contentWindow.postMessage(JSON.stringify(r), s)
}, VimeoTracker.prototype.sendEvent = function(e, t) {
    var i = {
        eventCategory: "Videos",
        eventAction: t,
        eventLabel: this.getLabel(e),
        transport: "beacon"
    };
    this.debugMessage("event: " + JSON.stringify(i, null, 4)), this.tracker.send("event", i)
}, VimeoTracker.prototype.debugMessage = function(e) {
    this.isDebug && console && console.debug && console.debug(e)
}, providePlugin("vimeoTracker", VimeoTracker);
! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            t = t || [];
            for (var s = this._onceEvents && this._onceEvents[e]; o;) {
                var r = s && s[o];
                r && (this.off(e, o), delete s[o]), o.apply(this, t), n += r ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t.allOff = t.removeAllListeners = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        var t = [];
        if (Array.isArray(e)) t = e;
        else if ("number" == typeof e.length)
            for (var i = 0; i < e.length; i++) t.push(e[i]);
        else t.push(e);
        return t
    }

    function o(e, t, s) {
        return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? s = t : i(this.options, t), s && this.on("always", s), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(e, t, s)
    }

    function s(e) {
        this.img = e
    }

    function r(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var h = e.jQuery,
        a = e.console;
    o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var s = e.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var r = s[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
            }
    }, o.prototype.addImage = function(e) {
        var t = new s(e);
        this.images.push(t)
    }, o.prototype.addBackground = function(e, t) {
        var i = new r(e, t);
        this.images.push(i)
    }, o.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, o.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
    }, o.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, s.prototype = Object.create(t.prototype), s.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, s.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, s.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, s.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, s.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, s.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype = Object.create(s.prototype), r.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, r.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, r.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, o.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && (h = t, h.fn.imagesLoaded = function(e, t) {
            return new o(this, e, t).jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i
    }
    return Array.from(e)
}! function(e, t) {
    e.easing.jswing = e.easing.swing, e.extend(e.easing, {
        def: "easeOutQuad",
        swing: function(t, i, s, n, o) {
            return e.easing[e.easing.def](t, i, s, n, o)
        },
        easeInQuad: function(e, t, i, s, n) {
            return s * (t /= n) * t + i
        },
        easeOutQuad: function(e, t, i, s, n) {
            return -s * (t /= n) * (t - 2) + i
        },
        easeInOutQuad: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? s / 2 * t * t + i : -s / 2 * (--t * (t - 2) - 1) + i
        },
        easeInCubic: function(e, t, i, s, n) {
            return s * (t /= n) * t * t + i
        },
        easeOutCubic: function(e, t, i, s, n) {
            return s * ((t = t / n - 1) * t * t + 1) + i
        },
        easeInOutCubic: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? s / 2 * t * t * t + i : s / 2 * ((t -= 2) * t * t + 2) + i
        },
        easeInQuart: function(e, t, i, s, n) {
            return s * (t /= n) * t * t * t + i
        },
        easeOutQuart: function(e, t, i, s, n) {
            return -s * ((t = t / n - 1) * t * t * t - 1) + i
        },
        easeInOutQuart: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? s / 2 * t * t * t * t + i : -s / 2 * ((t -= 2) * t * t * t - 2) + i
        },
        easeInQuint: function(e, t, i, s, n) {
            return s * (t /= n) * t * t * t * t + i
        },
        easeOutQuint: function(e, t, i, s, n) {
            return s * ((t = t / n - 1) * t * t * t * t + 1) + i
        },
        easeInOutQuint: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? s / 2 * t * t * t * t * t + i : s / 2 * ((t -= 2) * t * t * t * t + 2) + i
        },
        easeInSine: function(e, t, i, s, n) {
            return -s * Math.cos(t / n * (Math.PI / 2)) + s + i
        },
        easeOutSine: function(e, t, i, s, n) {
            return s * Math.sin(t / n * (Math.PI / 2)) + i
        },
        easeInOutSine: function(e, t, i, s, n) {
            return -s / 2 * (Math.cos(Math.PI * t / n) - 1) + i
        },
        easeInExpo: function(e, t, i, s, n) {
            return 0 == t ? i : s * Math.pow(2, 10 * (t / n - 1)) + i
        },
        easeOutExpo: function(e, t, i, s, n) {
            return t == n ? i + s : s * (1 - Math.pow(2, -10 * t / n)) + i
        },
        easeInOutExpo: function(e, t, i, s, n) {
            return 0 == t ? i : t == n ? i + s : (t /= n / 2) < 1 ? s / 2 * Math.pow(2, 10 * (t - 1)) + i : s / 2 * (2 - Math.pow(2, -10 * --t)) + i
        },
        easeInCirc: function(e, t, i, s, n) {
            return -s * (Math.sqrt(1 - (t /= n) * t) - 1) + i
        },
        easeOutCirc: function(e, t, i, s, n) {
            return s * Math.sqrt(1 - (t = t / n - 1) * t) + i
        },
        easeInOutCirc: function(e, t, i, s, n) {
            return (t /= n / 2) < 1 ? -s / 2 * (Math.sqrt(1 - t * t) - 1) + i : s / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
        },
        easeInElastic: function(e, t, i, s, n) {
            var o = 1.70158,
                r = 0,
                a = s;
            if (0 == t) return i;
            if (1 == (t /= n)) return i + s;
            if (r || (r = .3 * n), a < Math.abs(s)) {
                a = s;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(s / a);
            return -a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / r) + i
        },
        easeOutElastic: function(e, t, i, s, n) {
            var o = 1.70158,
                r = 0,
                a = s;
            if (0 == t) return i;
            if (1 == (t /= n)) return i + s;
            if (r || (r = .3 * n), a < Math.abs(s)) {
                a = s;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(s / a);
            return a * Math.pow(2, -10 * t) * Math.sin((t * n - o) * (2 * Math.PI) / r) + s + i
        },
        easeInOutElastic: function(e, t, i, s, n) {
            var o = 1.70158,
                r = 0,
                a = s;
            if (0 == t) return i;
            if (2 == (t /= n / 2)) return i + s;
            if (r || (r = n * (.3 * 1.5)), a < Math.abs(s)) {
                a = s;
                var o = r / 4
            } else var o = r / (2 * Math.PI) * Math.asin(s / a);
            return t < 1 ? a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / r) * -.5 + i : a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * n - o) * (2 * Math.PI) / r) * .5 + s + i
        },
        easeInBack: function(e, t, i, s, n, o) {
            return void 0 == o && (o = 1.70158), s * (t /= n) * t * ((o + 1) * t - o) + i
        },
        easeOutBack: function(e, t, i, s, n, o) {
            return void 0 == o && (o = 1.70158), s * ((t = t / n - 1) * t * ((o + 1) * t + o) + 1) + i
        },
        easeInOutBack: function(e, t, i, s, n, o) {
            return void 0 == o && (o = 1.70158), (t /= n / 2) < 1 ? s / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + i : s / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + i
        },
        easeInBounce: function(t, i, s, n, o) {
            return n - e.easing.easeOutBounce(t, o - i, 0, n, o) + s
        },
        easeOutBounce: function(e, t, i, s, n) {
            return (t /= n) < 1 / 2.75 ? s * (7.5625 * t * t) + i : t < 2 / 2.75 ? s * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? s * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : s * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
        },
        easeInOutBounce: function(t, i, s, n, o) {
            return i < o / 2 ? .5 * e.easing.easeInBounce(t, 2 * i, 0, n, o) + s : .5 * e.easing.easeOutBounce(t, 2 * i - o, 0, n, o) + .5 * n + s
        }
    })
}(jQuery),
function(e) {
    e.Package ? Materialize = {} : e.Materialize = {}
}(window),
function(e) {
    for (var t = 0, i = ["webkit", "moz"], s = e.requestAnimationFrame, n = e.cancelAnimationFrame, o = i.length; --o >= 0 && !s;) s = e[i[o] + "RequestAnimationFrame"], n = e[i[o] + "CancelRequestAnimationFrame"];
    s && n || (s = function(e) {
        var i = +Date.now(),
            s = Math.max(t + 16, i);
        return setTimeout(function() {
            e(t = s)
        }, s - i)
    }, n = clearTimeout), e.requestAnimationFrame = s, e.cancelAnimationFrame = n
}(window), Materialize.objectSelectorString = function(e) {
    return ((e.prop("tagName") || "") + (e.attr("id") || "") + (e.attr("class") || "")).replace(/\s/g, "")
}, Materialize.guid = function() {
    function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
}(), Materialize.escapeHash = function(e) {
    return e.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
}, Materialize.elementOrParentIsFixed = function(e) {
    var t = $(e),
        i = t.add(t.parents()),
        s = !1;
    return i.each(function() {
        if ("fixed" === $(this).css("position")) return s = !0, !1
    }), s
};
var getTime = Date.now || function() {
    return (new Date).getTime()
};
Materialize.throttle = function(e, t, i) {
    var s, n, o, r = null,
        a = 0;
    i || (i = {});
    var l = function() {
        a = !1 === i.leading ? 0 : getTime(), r = null, o = e.apply(s, n), s = n = null
    };
    return function() {
        var d = getTime();
        a || !1 !== i.leading || (a = d);
        var u = t - (d - a);
        return s = this, n = arguments, u <= 0 ? (clearTimeout(r), r = null, a = d, o = e.apply(s, n), s = n = null) : r || !1 === i.trailing || (r = setTimeout(l, u)), o
    }
};
var Vel;
Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity,
    function(e) {
        e.fn.scrollTo = function(t) {
            return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top), this
        }, e.fn.dropdown = function(t) {
            var i = {
                inDuration: 300,
                outDuration: 225,
                constrainWidth: !0,
                hover: !1,
                gutter: 0,
                belowOrigin: !1,
                alignment: "left",
                stopPropagation: !1
            };
            return "open" === t ? (this.each(function() {
                e(this).trigger("open")
            }), !1) : "close" === t ? (this.each(function() {
                e(this).trigger("close")
            }), !1) : void this.each(function() {
                function s() {
                    void 0 !== r.data("induration") && (a.inDuration = r.data("induration")), void 0 !== r.data("outduration") && (a.outDuration = r.data("outduration")), void 0 !== r.data("constrainwidth") && (a.constrainWidth = r.data("constrainwidth")), void 0 !== r.data("hover") && (a.hover = r.data("hover")), void 0 !== r.data("gutter") && (a.gutter = r.data("gutter")), void 0 !== r.data("beloworigin") && (a.belowOrigin = r.data("beloworigin")), void 0 !== r.data("alignment") && (a.alignment = r.data("alignment")), void 0 !== r.data("stoppropagation") && (a.stopPropagation = r.data("stoppropagation"))
                }

                function n(t) {
                    "focus" === t && (l = !0), s(), d.addClass("active"), r.addClass("active"), !0 === a.constrainWidth ? d.css("width", r.outerWidth()) : d.css("white-space", "nowrap");
                    var i = window.innerHeight,
                        n = r.innerHeight(),
                        u = r.offset().left,
                        c = r.offset().top - e(window).scrollTop(),
                        p = a.alignment,
                        h = 0,
                        f = 0,
                        v = 0;
                    !0 === a.belowOrigin && (v = n);
                    var g = 0,
                        m = 0,
                        y = r.parent();
                    if (y.is("body") || (y[0].scrollHeight > y[0].clientHeight && (g = y[0].scrollTop), y[0].scrollWidth > y[0].clientWidth && (m = y[0].scrollLeft)), u + d.innerWidth() > e(window).width() ? p = "right" : u - d.innerWidth() + r.innerWidth() < 0 && (p = "left"), c + d.innerHeight() > i)
                        if (c + n - d.innerHeight() < 0) {
                            var w = i - c - v;
                            d.css("max-height", w)
                        } else v || (v += n), v -= d.innerHeight();
                    if ("left" === p) h = a.gutter, f = r.position().left + h;
                    else if ("right" === p) {
                        var b = r.position().left + r.outerWidth() - d.outerWidth();
                        h = -a.gutter, f = b + h
                    }
                    d.css({
                        position: "absolute",
                        top: r.position().top + v + g,
                        left: f + m
                    }), d.stop(!0, !0).css("opacity", 0).slideDown({
                        queue: !1,
                        duration: a.inDuration,
                        easing: "easeOutCubic",
                        complete: function() {
                            e(this).css("height", "")
                        }
                    }).animate({
                        opacity: 1
                    }, {
                        queue: !1,
                        duration: a.inDuration,
                        easing: "easeOutSine"
                    }), setTimeout(function() {
                        e(document).bind("click." + d.attr("id"), function(t) {
                            o(), e(document).unbind("click." + d.attr("id"))
                        })
                    }, 0)
                }

                function o() {
                    l = !1, d.fadeOut(a.outDuration), d.removeClass("active"), r.removeClass("active"), e(document).unbind("click." + d.attr("id")), setTimeout(function() {
                        d.css("max-height", "")
                    }, a.outDuration)
                }
                var r = e(this),
                    a = e.extend({}, i, t),
                    l = !1,
                    d = e("#" + r.attr("data-activates"));
                if (s(), r.after(d), a.hover) {
                    var u = !1;
                    r.unbind("click." + r.attr("id")), r.on("mouseenter", function(e) {
                        !1 === u && (n(), u = !0)
                    }), r.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-content").is(d) || (d.stop(!0, !0), o(), u = !1)
                    }), d.on("mouseleave", function(t) {
                        var i = t.toElement || t.relatedTarget;
                        e(i).closest(".dropdown-button").is(r) || (d.stop(!0, !0), o(), u = !1)
                    })
                } else r.unbind("click." + r.attr("id")), r.bind("click." + r.attr("id"), function(t) {
                    l || (r[0] != t.currentTarget || r.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? r.hasClass("active") && (o(), e(document).unbind("click." + d.attr("id"))) : (t.preventDefault(), a.stopPropagation && t.stopPropagation(), n("click")))
                });
                r.on("open", function(e, t) {
                    n(t)
                }), r.on("close", o)
            })
        }, e(document).ready(function() {
            e(".dropdown-button").dropdown()
        })
    }(jQuery),
    function(e) {
        e(document).ready(function() {
            function t(t) {
                var i = t.css("font-family"),
                    n = t.css("font-size"),
                    o = t.css("line-height");
                n && s.css("font-size", n), i && s.css("font-family", i), o && s.css("line-height", o), "off" === t.attr("wrap") && s.css("overflow-wrap", "normal").css("white-space", "pre"), s.text(t.val() + "\n");
                var r = s.html().replace(/\n/g, "<br>");
                s.html(r), t.is(":visible") ? s.css("width", t.width()) : s.css("width", e(window).width() / 2), t.data("original-height") <= s.height() ? t.css("height", s.height()) : t.val().length < t.data("previous-length") && t.css("height", t.data("original-height")), t.data("previous-length", t.val().length)
            }
            Materialize.updateTextFields = function() {
                e("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(t, i) {
                    var s = e(this);
                    e(i).val().length > 0 || i.autofocus || void 0 !== s.attr("placeholder") ? s.siblings("label").addClass("active") : e(i)[0].validity ? s.siblings("label").toggleClass("active", !0 === e(i)[0].validity.badInput) : s.siblings("label").removeClass("active")
                })
            };
            var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
            e(document).on("change", i, function() {
                0 === e(this).val().length && void 0 === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"), validate_field(e(this))
            }), e(document).ready(function() {
                Materialize.updateTextFields()
            }), e(document).on("reset", function(t) {
                var s = e(t.target);
                s.is("form") && (s.find(i).removeClass("valid").removeClass("invalid"), s.find(i).each(function() {
                    "" === e(this).attr("value") && e(this).siblings("label").removeClass("active")
                }), s.find("select.initialized").each(function() {
                    var e = s.find("option[selected]").text();
                    s.siblings("input.select-dropdown").val(e)
                }))
            }), e(document).on("focus", i, function() {
                e(this).siblings("label, .prefix").addClass("active")
            }), e(document).on("blur", i, function() {
                var t = e(this),
                    i = ".prefix";
                0 === t.val().length && !0 !== t[0].validity.badInput && void 0 === t.attr("placeholder") && (i += ", label"), t.siblings(i).removeClass("active"), validate_field(t)
            }), window.validate_field = function(e) {
                var t = void 0 !== e.attr("data-length"),
                    i = parseInt(e.attr("data-length")),
                    s = e.val().length;
                0 === e.val().length && !1 === e[0].validity.badInput ? e.hasClass("validate") && (e.removeClass("valid"), e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && s <= i || e.is(":valid") && !t ? (e.removeClass("invalid"), e.addClass("valid")) : (e.removeClass("valid"), e.addClass("invalid")))
            };
            e(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", function(t) {
                if (9 === t.which) {
                    e(this).addClass("tabbed");
                    return void e(this).one("blur", function(t) {
                        e(this).removeClass("tabbed")
                    })
                }
            });
            var s = e(".hiddendiv").first();
            s.length || (s = e('<div class="hiddendiv common"></div>'), e("body").append(s));
            e(".materialize-textarea").each(function() {
                var t = e(this);
                t.data("original-height", t.height()), t.data("previous-length", t.val().length)
            }), e("body").on("keyup keydown autoresize", ".materialize-textarea", function() {
                t(e(this))
            }), e(document).on("change", '.file-field input[type="file"]', function() {
                for (var t = e(this).closest(".file-field"), i = t.find("input.file-path"), s = e(this)[0].files, n = [], o = 0; o < s.length; o++) n.push(s[o].name);
                i.val(n.join(", ")), i.trigger("change")
            });
            var n = "input[type=range]",
                o = !1;
            e(n).each(function() {
                var t = e('<span class="thumb"><span class="value"></span></span>');
                e(this).after(t)
            });
            var r = function(e) {
                    var t = parseInt(e.parent().css("padding-left")),
                        i = -7 + t + "px";
                    e.velocity({
                        height: "30px",
                        width: "30px",
                        top: "-30px",
                        marginLeft: i
                    }, {
                        duration: 300,
                        easing: "easeOutExpo"
                    })
                },
                a = function(e) {
                    var t = e.width() - 15,
                        i = parseFloat(e.attr("max")),
                        s = parseFloat(e.attr("min"));
                    return (parseFloat(e.val()) - s) / (i - s) * t
                };
            e(document).on("change", n, function(t) {
                var i = e(this).siblings(".thumb");
                i.find(".value").html(e(this).val()), i.hasClass("active") || r(i);
                var s = a(e(this));
                i.addClass("active").css("left", s)
            }), e(document).on("mousedown touchstart", n, function(t) {
                var i = e(this).siblings(".thumb");
                if (i.length <= 0 && (i = e('<span class="thumb"><span class="value"></span></span>'), e(this).after(i)), i.find(".value").html(e(this).val()), o = !0, e(this).addClass("active"), i.hasClass("active") || r(i), "input" !== t.type) {
                    var s = a(e(this));
                    i.addClass("active").css("left", s)
                }
            }), e(document).on("mouseup touchend", ".range-field", function() {
                o = !1, e(this).removeClass("active")
            }), e(document).on("input mousemove touchmove", ".range-field", function(t) {
                var i = e(this).children(".thumb"),
                    s = e(this).find(n);
                if (o) {
                    i.hasClass("active") || r(i);
                    var l = a(s);
                    i.addClass("active").css("left", l), i.find(".value").html(i.siblings(n).val())
                }
            }), e(document).on("mouseout touchleave", ".range-field", function() {
                if (!o) {
                    var t = e(this).children(".thumb"),
                        i = parseInt(e(this).css("padding-left")),
                        s = 7 + i + "px";
                    t.hasClass("active") && t.velocity({
                        height: "0",
                        width: "0",
                        top: "10px",
                        marginLeft: s
                    }, {
                        duration: 100
                    }), t.removeClass("active")
                }
            }), e.fn.autocomplete = function(t) {
                var i = {
                    data: {},
                    limit: 1 / 0,
                    onAutocomplete: null,
                    minLength: 1
                };
                return t = e.extend(i, t), this.each(function() {
                    var i, s = e(this),
                        n = t.data,
                        o = 0,
                        r = -1,
                        a = s.closest(".input-field");
                    if (!e.isEmptyObject(n)) {
                        var l, d = e('<ul class="autocomplete-content dropdown-content"></ul>');
                        a.length ? (l = a.children(".autocomplete-content.dropdown-content").first(), l.length || a.append(d)) : (l = s.next(".autocomplete-content.dropdown-content"), l.length || s.after(d)), l.length && (d = l);
                        var u = function(e, t) {
                                var i = t.find("img"),
                                    s = t.text().toLowerCase().indexOf("" + e.toLowerCase()),
                                    n = s + e.length - 1,
                                    o = t.text().slice(0, s),
                                    r = t.text().slice(s, n + 1),
                                    a = t.text().slice(n + 1);
                                t.html("<span>" + o + "<span class='highlight'>" + r + "</span>" + a + "</span>"), i.length && t.prepend(i)
                            },
                            c = function() {
                                r = -1, d.find(".active").removeClass("active")
                            },
                            p = function() {
                                d.empty(), c(), i = void 0
                            };
                        s.off("blur.autocomplete").on("blur.autocomplete", function() {
                            p()
                        }), s.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function(r) {
                            o = 0;
                            var a = s.val().toLowerCase();
                            if (13 !== r.which && 38 !== r.which && 40 !== r.which) {
                                if (i !== a && (p(), a.length >= t.minLength))
                                    for (var l in n)
                                        if (n.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(a) && l.toLowerCase() !== a) {
                                            if (o >= t.limit) break;
                                            var c = e("<li></li>");
                                            n[l] ? c.append('<img src="' + n[l] + '" class="right circle"><span>' + l + "</span>") : c.append("<span>" + l + "</span>"), d.append(c), u(a, c), o++
                                        }
                                i = a
                            }
                        }), s.off("keydown.autocomplete").on("keydown.autocomplete", function(e) {
                            var t, i = e.which,
                                s = d.children("li").length,
                                n = d.children(".active").first();
                            if (13 === i && r >= 0) return t = d.children("li").eq(r), void(t.length && (t.trigger("mousedown.autocomplete"), e.preventDefault()));
                            38 !== i && 40 !== i || (e.preventDefault(), 38 === i && r > 0 && r--, 40 === i && r < s - 1 && r++, n.removeClass("active"), r >= 0 && d.children("li").eq(r).addClass("active"))
                        }), d.on("mousedown.autocomplete touchstart.autocomplete", "li", function() {
                            var i = e(this).text().trim();
                            s.val(i), s.trigger("change"), p(), "function" == typeof t.onAutocomplete && t.onAutocomplete.call(this, i)
                        })
                    }
                })
            }
        }), e.fn.material_select = function(t) {
            function i(e, t, i) {
                var n = e.indexOf(t),
                    o = -1 === n;
                return o ? e.push(t) : e.splice(n, 1), i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"), i.find("option").eq(t).prop("selected", o), s(e, i), o
            }

            function s(e, t) {
                for (var i = "", s = 0, n = e.length; s < n; s++) {
                    var o = t.find("option").eq(e[s]).text();
                    i += 0 === s ? o : ", " + o
                }
                "" === i && (i = t.find("option:disabled").eq(0).text()), t.siblings("input.select-dropdown").val(i)
            }
            e(this).each(function() {
                var s = e(this);
                if (!s.hasClass("browser-default")) {
                    var n = !!s.attr("multiple"),
                        o = s.data("select-id");
                    if (o && (s.parent().find("span.caret").remove(), s.parent().find("input").remove(), s.unwrap(), e("ul#select-options-" + o).remove()), "destroy" === t) return void s.data("select-id", null).removeClass("initialized");
                    var r = Materialize.guid();
                    s.data("select-id", r);
                    var a = e('<div class="select-wrapper"></div>');
                    a.addClass(s.attr("class"));
                    var l = e('<ul id="select-options-' + r + '" class="dropdown-content select-dropdown ' + (n ? "multiple-select-dropdown" : "") + '"></ul>'),
                        d = s.children("option, optgroup"),
                        u = [],
                        c = !1,
                        p = s.find("option:selected").html() || s.find("option:first").html() || "",
                        h = function(t, i, s) {
                            var o = i.is(":disabled") ? "disabled " : "",
                                r = "optgroup-option" === s ? "optgroup-option " : "",
                                a = n ? '<input type="checkbox"' + o + "/><label></label>" : "",
                                d = i.data("icon"),
                                u = i.attr("class");
                            if (d) {
                                var c = "";
                                return u && (c = ' class="' + u + '"'), l.append(e('<li class="' + o + r + '"><img alt="" src="' + d + '"' + c + "><span>" + a + i.html() + "</span></li>")), !0
                            }
                            l.append(e('<li class="' + o + r + '"><span>' + a + i.html() + "</span></li>"))
                        };
                    d.length && d.each(function() {
                        if (e(this).is("option")) n ? h(0, e(this), "multiple") : h(0, e(this));
                        else if (e(this).is("optgroup")) {
                            var t = e(this).children("option");
                            l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")), t.each(function() {
                                h(0, e(this), "optgroup-option")
                            })
                        }
                    }), l.find("li:not(.optgroup)").each(function(o) {
                        e(this).click(function(r) {
                            if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                                var a = !0;
                                n ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                    return !t
                                }), a = i(u, o, s), g.trigger("focus")) : (l.find("li").removeClass("active"), e(this).toggleClass("active"), g.val(e(this).text())), m(l, e(this)), s.find("option").eq(o).prop("selected", a), s.trigger("change"), void 0 !== t && t()
                            }
                            r.stopPropagation()
                        })
                    }), s.wrap(a);
                    var f = e('<span class="caret">&#9660;</span>');
                    s.is(":disabled") && f.addClass("disabled");
                    var v = p.replace(/"/g, "&quot;"),
                        g = e('<input type="text" class="select-dropdown" readonly="true" ' + (s.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + r + '" value="' + v + '"/>');
                    s.before(g), g.before(f), g.after(l), s.is(":disabled") || g.dropdown({
                        hover: !1
                    }), s.attr("tabindex") && e(g[0]).attr("tabindex", s.attr("tabindex")), s.addClass("initialized"), g.on({
                        focus: function() {
                            if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"), !l.is(":visible")) {
                                e(this).trigger("open", ["focus"]);
                                var t = e(this).val();
                                n && t.indexOf(",") >= 0 && (t = t.split(",")[0]);
                                var i = l.find("li").filter(function() {
                                    return e(this).text().toLowerCase() === t.toLowerCase()
                                })[0];
                                m(l, i, !0)
                            }
                        },
                        click: function(e) {
                            e.stopPropagation()
                        }
                    }), g.on("blur", function() {
                        n || e(this).trigger("close"), l.find("li.selected").removeClass("selected")
                    }), l.hover(function() {
                        c = !0
                    }, function() {
                        c = !1
                    }), e(window).on({
                        click: function() {
                            n && (c || g.trigger("close"))
                        }
                    }), n && s.find("option:selected:not(:disabled)").each(function() {
                        var t = e(this).index();
                        i(u, t, s), l.find("li").eq(t).find(":checkbox").prop("checked", !0)
                    });
                    var m = function(t, i, s) {
                            if (i) {
                                t.find("li.selected").removeClass("selected");
                                var o = e(i);
                                o.addClass("selected"), n && !s || l.scrollTo(o)
                            }
                        },
                        y = [],
                        w = function(t) {
                            if (9 == t.which) return void g.trigger("close");
                            if (40 == t.which && !l.is(":visible")) return void g.trigger("open");
                            if (13 != t.which || l.is(":visible")) {
                                t.preventDefault();
                                var i = String.fromCharCode(t.which).toLowerCase(),
                                    s = [9, 13, 27, 38, 40];
                                if (i && -1 === s.indexOf(t.which)) {
                                    y.push(i);
                                    var o = y.join(""),
                                        r = l.find("li").filter(function() {
                                            return 0 === e(this).text().toLowerCase().indexOf(o)
                                        })[0];
                                    r && m(l, r)
                                }
                                if (13 == t.which) {
                                    var a = l.find("li.selected:not(.disabled)")[0];
                                    a && (e(a).trigger("click"), n || g.trigger("close"))
                                }
                                40 == t.which && (r = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0], m(l, r)), 27 == t.which && g.trigger("close"), 38 == t.which && (r = l.find("li.selected").prev("li:not(.disabled)")[0]) && m(l, r), setTimeout(function() {
                                    y = []
                                }, 1e3)
                            }
                        };
                    g.on("keydown", w)
                }
            })
        }
    }(jQuery);
var _slice = Array.prototype.slice,
    _slicedToArray = function() {
        function e(e, t) {
            var i = [],
                s = !0,
                n = !1,
                o = void 0;
            try {
                for (var r, a = e[Symbol.iterator](); !(s = (r = a.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
            } catch (e) {
                n = !0, o = e
            } finally {
                try {
                    !s && a.return && a.return()
                } finally {
                    if (n) throw o
                }
            }
            return i
        }
        return function(t, i) {
            if (Array.isArray(t)) return t;
            if (Symbol.iterator in Object(t)) return e(t, i);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }(),
    _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
    };
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.parsley = t(e.jQuery)
}(this, function(e) {
    "use strict";

    function t(e, t) {
        return e.parsleyAdaptedCallback || (e.parsleyAdaptedCallback = function() {
            var i = Array.prototype.slice.call(arguments, 0);
            i.unshift(this), e.apply(t || M, i)
        }), e.parsleyAdaptedCallback
    }

    function i(e) {
        return 0 === e.lastIndexOf(I, 0) ? e.substr(I.length) : e
    }

    function s() {
        var t = this,
            i = window || global;
        _extends(this, {
            isNativeEvent: function(e) {
                return e.originalEvent && !1 !== e.originalEvent.isTrusted
            },
            fakeInputEvent: function(i) {
                t.isNativeEvent(i) && e(i.target).trigger("input")
            },
            misbehaves: function(i) {
                t.isNativeEvent(i) && (t.behavesOk(i), e(document).on("change.inputevent", i.data.selector, t.fakeInputEvent), t.fakeInputEvent(i))
            },
            behavesOk: function(i) {
                t.isNativeEvent(i) && e(document).off("input.inputevent", i.data.selector, t.behavesOk).off("change.inputevent", i.data.selector, t.misbehaves)
            },
            install: function() {
                if (!i.inputEventPatched) {
                    i.inputEventPatched = "0.0.3";
                    for (var s = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], n = 0; n < s.length; n++) {
                        var o = s[n];
                        e(document).on("input.inputevent", o, {
                            selector: o
                        }, t.behavesOk).on("change.inputevent", o, {
                            selector: o
                        }, t.misbehaves)
                    }
                }
            },
            uninstall: function() {
                delete i.inputEventPatched, e(document).off(".inputevent")
            }
        })
    }
    var n = 1,
        o = {},
        r = {
            attr: function(e, t, i) {
                var s, n, o, r = new RegExp("^" + t, "i");
                if (void 0 === i) i = {};
                else
                    for (s in i) i.hasOwnProperty(s) && delete i[s];
                if (!e) return i;
                for (o = e.attributes, s = o.length; s--;)(n = o[s]) && n.specified && r.test(n.name) && (i[this.camelize(n.name.slice(t.length))] = this.deserializeValue(n.value));
                return i
            },
            checkAttr: function(e, t, i) {
                return e.hasAttribute(t + i)
            },
            setAttr: function(e, t, i, s) {
                e.setAttribute(this.dasherize(t + i), String(s))
            },
            getType: function(e) {
                return e.getAttribute("type") || "text"
            },
            generateID: function() {
                return "" + n++
            },
            deserializeValue: function(e) {
                var t;
                try {
                    return e ? "true" == e || "false" != e && ("null" == e ? null : isNaN(t = Number(e)) ? /^[\[\{]/.test(e) ? JSON.parse(e) : e : t) : e
                } catch (t) {
                    return e
                }
            },
            camelize: function(e) {
                return e.replace(/-+(.)?/g, function(e, t) {
                    return t ? t.toUpperCase() : ""
                })
            },
            dasherize: function(e) {
                return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            },
            warn: function() {
                var e;
                window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
            },
            warnOnce: function(e) {
                o[e] || (o[e] = !0, this.warn.apply(this, arguments))
            },
            _resetWarnings: function() {
                o = {}
            },
            trimString: function(e) {
                return e.replace(/^\s+|\s+$/g, "")
            },
            parse: {
                date: function(e) {
                    var t = e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                    if (!t) return null;
                    var i = t.map(function(e) {
                            return parseInt(e, 10)
                        }),
                        s = _slicedToArray(i, 4),
                        n = (s[0], s[1]),
                        o = s[2],
                        r = s[3],
                        a = new Date(n, o - 1, r);
                    return a.getFullYear() !== n || a.getMonth() + 1 !== o || a.getDate() !== r ? null : a
                },
                string: function(e) {
                    return e
                },
                integer: function(e) {
                    return isNaN(e) ? null : parseInt(e, 10)
                },
                number: function(e) {
                    if (isNaN(e)) throw null;
                    return parseFloat(e)
                },
                boolean: function(e) {
                    return !/^\s*false\s*$/i.test(e)
                },
                object: function(e) {
                    return r.deserializeValue(e)
                },
                regexp: function(e) {
                    var t = "";
                    return /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e = e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : e = "^" + e + "$", new RegExp(e, t)
                }
            },
            parseRequirement: function(e, t) {
                var i = this.parse[e || "string"];
                if (!i) throw 'Unknown requirement specification: "' + e + '"';
                var s = i(t);
                if (null === s) throw "Requirement is not a " + e + ': "' + t + '"';
                return s
            },
            namespaceEvents: function(t, i) {
                return t = this.trimString(t || "").split(/\s+/), t[0] ? e.map(t, function(e) {
                    return e + "." + i
                }).join(" ") : ""
            },
            difference: function(t, i) {
                var s = [];
                return e.each(t, function(e, t) {
                    -1 == i.indexOf(t) && s.push(t)
                }), s
            },
            all: function(t) {
                return e.when.apply(e, _toConsumableArray(t).concat([42, 42]))
            },
            objectCreate: Object.create || function() {
                var e = function() {};
                return function(t) {
                    if (arguments.length > 1) throw Error("Second argument not supported");
                    if ("object" != typeof t) throw TypeError("Argument must be an object");
                    e.prototype = t;
                    var i = new e;
                    return e.prototype = null, i
                }
            }(),
            _SubmitSelector: 'input[type="submit"], button:submit'
        },
        a = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            multiple: null,
            group: null,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            triggerAfterFailure: "input",
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function(e) {},
            errorsContainer: function(e) {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>"
        },
        l = function() {
            this.__id__ = r.generateID()
        };
    l.prototype = {
        asyncSupport: !0,
        _pipeAccordingToValidationResult: function() {
            var t = this,
                i = function() {
                    var i = e.Deferred();
                    return !0 !== t.validationResult && i.reject(), i.resolve().promise()
                };
            return [i, i]
        },
        actualizeOptions: function() {
            return r.attr(this.element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
        },
        _resetOptions: function(e) {
            this.domOptions = r.objectCreate(this.parent.options), this.options = r.objectCreate(this.domOptions);
            for (var t in e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
            this.actualizeOptions()
        },
        _listeners: null,
        on: function(e, t) {
            return this._listeners = this._listeners || {}, (this._listeners[e] = this._listeners[e] || []).push(t), this
        },
        subscribe: function(t, i) {
            e.listenTo(this, t.toLowerCase(), i)
        },
        off: function(e, t) {
            var i = this._listeners && this._listeners[e];
            if (i)
                if (t)
                    for (var s = i.length; s--;) i[s] === t && i.splice(s, 1);
                else delete this._listeners[e];
            return this
        },
        unsubscribe: function(t, i) {
            e.unsubscribeTo(this, t.toLowerCase())
        },
        trigger: function(e, t, i) {
            t = t || this;
            var s, n = this._listeners && this._listeners[e];
            if (n)
                for (var o = n.length; o--;)
                    if (!1 === (s = n[o].call(t, t, i))) return s;
            return !this.parent || this.parent.trigger(e, t, i)
        },
        asyncIsValid: function(e, t) {
            return r.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
                group: e,
                force: t
            })
        },
        _findRelated: function() {
            return this.options.multiple ? e(this.parent.element.querySelectorAll("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element
        }
    };
    var d = function(e, t) {
            var i = e.match(/^\s*\[(.*)\]\s*$/);
            if (!i) throw 'Requirement is not an array: "' + e + '"';
            var s = i[1].split(",").map(r.trimString);
            if (s.length !== t) throw "Requirement has " + s.length + " values when " + t + " are needed";
            return s
        },
        u = function(e, t, i) {
            var s = null,
                n = {};
            for (var o in e)
                if (o) {
                    var a = i(o);
                    "string" == typeof a && (a = r.parseRequirement(e[o], a)), n[o] = a
                } else s = r.parseRequirement(e[o], t);
            return [s, n]
        },
        c = function(t) {
            e.extend(!0, this, t)
        };
    c.prototype = {
        validate: function(e, t) {
            if (this.fn) return arguments.length > 3 && (t = [].slice.call(arguments, 1, -1)), this.fn(e, t);
            if (Array.isArray(e)) {
                if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments)
            }
            var i = arguments[arguments.length - 1];
            if (this.validateDate && i._isDateInput()) return arguments[0] = r.parse.date(arguments[0]), null !== arguments[0] && this.validateDate.apply(this, arguments);
            if (this.validateNumber) return !isNaN(e) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
            if (this.validateString) return this.validateString.apply(this, arguments);
            throw "Validator `" + this.name + "` only handles multiple values"
        },
        parseRequirements: function(t, i) {
            if ("string" != typeof t) return Array.isArray(t) ? t : [t];
            var s = this.requirementType;
            if (Array.isArray(s)) {
                for (var n = d(t, s.length), o = 0; o < n.length; o++) n[o] = r.parseRequirement(s[o], n[o]);
                return n
            }
            return e.isPlainObject(s) ? u(s, t, i) : [r.parseRequirement(s, t)]
        },
        requirementType: "string",
        priority: 2
    };
    var p = function(e, t) {
            this.__class__ = "ValidatorRegistry", this.locale = "en", this.init(e || {}, t || {})
        },
        h = {
            email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
            number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
            integer: /^-?\d+$/,
            digits: /^\d+$/,
            alphanum: /^\w+$/i,
            date: {
                test: function(e) {
                    return null !== r.parse.date(e)
                }
            },
            url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i")
        };
    h.range = h.number;
    var f = function(e) {
            var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
            return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
        },
        v = function(e, t) {
            return t.map(r.parse[e])
        },
        g = function(e, t) {
            return function(i) {
                for (var s = arguments.length, n = Array(s > 1 ? s - 1 : 0), o = 1; o < s; o++) n[o - 1] = arguments[o];
                return n.pop(), t.apply(void 0, [i].concat(_toConsumableArray(v(e, n))))
            }
        },
        m = function(e) {
            return {
                validateDate: g("date", e),
                validateNumber: g("number", e),
                requirementType: e.length <= 2 ? "string" : ["string", "string"],
                priority: 30
            }
        };
    p.prototype = {
        init: function(e, t) {
            this.catalog = t, this.validators = _extends({}, this.validators);
            for (var i in e) this.addValidator(i, e[i].fn, e[i].priority);
            window.Parsley.trigger("parsley:validator:init")
        },
        setLocale: function(e) {
            if (void 0 === this.catalog[e]) throw new Error(e + " is not available in the catalog");
            return this.locale = e, this
        },
        addCatalog: function(e, t, i) {
            return "object" == typeof t && (this.catalog[e] = t), !0 === i ? this.setLocale(e) : this
        },
        addMessage: function(e, t, i) {
            return void 0 === this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = i, this
        },
        addMessages: function(e, t) {
            for (var i in t) this.addMessage(e, i, t[i]);
            return this
        },
        addValidator: function(e, t, i) {
            if (this.validators[e]) r.warn('Validator "' + e + '" is already defined.');
            else if (a.hasOwnProperty(e)) return void r.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments)
        },
        hasValidator: function(e) {
            return !!this.validators[e]
        },
        updateValidator: function(e, t, i) {
            return this.validators[e] ? this._setValidator.apply(this, arguments) : (r.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments))
        },
        removeValidator: function(e) {
            return this.validators[e] || r.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this
        },
        _setValidator: function(e, t, i) {
            "object" != typeof t && (t = {
                fn: t,
                priority: i
            }), t.validate || (t = new c(t)), this.validators[e] = t;
            for (var s in t.messages || {}) this.addMessage(s, e, t.messages[s]);
            return this
        },
        getErrorMessage: function(e) {
            var t;
            if ("type" === e.name) {
                t = (this.catalog[this.locale][e.name] || {})[e.requirements]
            } else t = this.formatMessage(this.catalog[this.locale][e.name], e.requirements);
            return t || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
        },
        formatMessage: function(e, t) {
            if ("object" == typeof t) {
                for (var i in t) e = this.formatMessage(e, t[i]);
                return e
            }
            return "string" == typeof e ? e.replace(/%s/i, t) : ""
        },
        validators: {
            notblank: {
                validateString: function(e) {
                    return /\S/.test(e)
                },
                priority: 2
            },
            required: {
                validateMultiple: function(e) {
                    return e.length > 0
                },
                validateString: function(e) {
                    return /\S/.test(e)
                },
                priority: 512
            },
            type: {
                validateString: function(e, t) {
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                        s = i.step,
                        n = void 0 === s ? "any" : s,
                        o = i.base,
                        r = void 0 === o ? 0 : o,
                        a = h[t];
                    if (!a) throw new Error("validator type `" + t + "` is not supported");
                    if (!a.test(e)) return !1;
                    if ("number" === t && !/^any$/i.test(n || "")) {
                        var l = Number(e),
                            d = Math.max(f(n), f(r));
                        if (f(l) > d) return !1;
                        var u = function(e) {
                            return Math.round(e * Math.pow(10, d))
                        };
                        if ((u(l) - u(r)) % u(n) != 0) return !1
                    }
                    return !0
                },
                requirementType: {
                    "": "string",
                    step: "string",
                    base: "number"
                },
                priority: 256
            },
            pattern: {
                validateString: function(e, t) {
                    return t.test(e)
                },
                requirementType: "regexp",
                priority: 64
            },
            minlength: {
                validateString: function(e, t) {
                    return e.length >= t
                },
                requirementType: "integer",
                priority: 30
            },
            maxlength: {
                validateString: function(e, t) {
                    return e.length <= t
                },
                requirementType: "integer",
                priority: 30
            },
            length: {
                validateString: function(e, t, i) {
                    return e.length >= t && e.length <= i
                },
                requirementType: ["integer", "integer"],
                priority: 30
            },
            mincheck: {
                validateMultiple: function(e, t) {
                    return e.length >= t
                },
                requirementType: "integer",
                priority: 30
            },
            maxcheck: {
                validateMultiple: function(e, t) {
                    return e.length <= t
                },
                requirementType: "integer",
                priority: 30
            },
            check: {
                validateMultiple: function(e, t, i) {
                    return e.length >= t && e.length <= i
                },
                requirementType: ["integer", "integer"],
                priority: 30
            },
            min: m(function(e, t) {
                return e >= t
            }),
            max: m(function(e, t) {
                return e <= t
            }),
            range: m(function(e, t, i) {
                return e >= t && e <= i
            }),
            equalto: {
                validateString: function(t, i) {
                    var s = e(i);
                    return s.length ? t === s.val() : t === i
                },
                priority: 256
            }
        }
    };
    var y = {},
        w = function e(t, i, s) {
            for (var n = [], o = [], r = 0; r < t.length; r++) {
                for (var a = !1, l = 0; l < i.length; l++)
                    if (t[r].assert.name === i[l].assert.name) {
                        a = !0;
                        break
                    }
                a ? o.push(t[r]) : n.push(t[r])
            }
            return {
                kept: o,
                added: n,
                removed: s ? [] : e(i, t, !0).added
            }
        };
    y.Form = {
        _actualizeTriggers: function() {
            var e = this;
            this.$element.on("submit.Parsley", function(t) {
                e.onSubmitValidate(t)
            }), this.$element.on("click.Parsley", r._SubmitSelector, function(t) {
                e.onSubmitButton(t)
            }), !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "")
        },
        focus: function() {
            if (this._focusedField = null, !0 === this.validationResult || "none" === this.options.focus) return null;
            for (var e = 0; e < this.fields.length; e++) {
                var t = this.fields[e];
                if (!0 !== t.validationResult && t.validationResult.length > 0 && void 0 === t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break
            }
            return null === this._focusedField ? null : this._focusedField.focus()
        },
        _destroyUI: function() {
            this.$element.off(".Parsley")
        }
    }, y.Field = {
        _reflowUI: function() {
            if (this._buildUI(), this._ui) {
                var e = w(this.validationResult, this._ui.lastValidationResult);
                this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers())
            }
        },
        getErrorsMessages: function() {
            if (!0 === this.validationResult) return [];
            for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
            return e
        },
        addError: function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.message,
                s = t.assert,
                n = t.updateClass,
                o = void 0 === n || n;
            this._buildUI(), this._addError(e, {
                message: i,
                assert: s
            }), o && this._errorClass()
        },
        updateError: function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.message,
                s = t.assert,
                n = t.updateClass,
                o = void 0 === n || n;
            this._buildUI(), this._updateError(e, {
                message: i,
                assert: s
            }), o && this._errorClass()
        },
        removeError: function(e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
                i = t.updateClass,
                s = void 0 === i || i;
            this._buildUI(), this._removeError(e), s && this._manageStatusClass()
        },
        _manageStatusClass: function() {
            this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : this.validationResult.length > 0 ? this._errorClass() : this._resetClass()
        },
        _manageErrorsMessages: function(t) {
            if (void 0 === this.options.errorsMessagesDisabled) {
                if (void 0 !== this.options.errorMessage) return t.added.length || t.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(e(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var i = 0; i < t.removed.length; i++) this._removeError(t.removed[i].assert.name);
                for (i = 0; i < t.added.length; i++) this._addError(t.added[i].assert.name, {
                    message: t.added[i].errorMessage,
                    assert: t.added[i].assert
                });
                for (i = 0; i < t.kept.length; i++) this._updateError(t.kept[i].assert.name, {
                    message: t.kept[i].errorMessage,
                    assert: t.kept[i].assert
                })
            }
        },
        _addError: function(t, i) {
            var s = i.message,
                n = i.assert;
            this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(e(this.options.errorTemplate).addClass("parsley-" + t).html(s || this._getErrorMessage(n)))
        },
        _updateError: function(e, t) {
            var i = t.message,
                s = t.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(s))
        },
        _removeError: function(e) {
            this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove()
        },
        _getErrorMessage: function(e) {
            var t = e.name + "Message";
            return void 0 !== this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
        },
        _buildUI: function() {
            if (!this._ui && !1 !== this.options.uiEnabled) {
                var t = {};
                this.element.setAttribute(this.options.namespace + "id", this.__id__), t.$errorClassHandler = this._manageClassHandler(), t.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), t.$errorsWrapper = e(this.options.errorsWrapper).attr("id", t.errorsWrapperId), t.lastValidationResult = [], t.validationInformationVisible = !1, this._ui = t
            }
        },
        _manageClassHandler: function() {
            if ("string" == typeof this.options.classHandler && e(this.options.classHandler).length) return e(this.options.classHandler);
            var t = this.options.classHandler;
            if ("string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] && (t = window[this.options.classHandler]), "function" == typeof t) {
                var i = t.call(this, this);
                if (void 0 !== i && i.length) return i
            } else {
                if ("object" == typeof t && t instanceof jQuery && t.length) return t;
                t && r.warn("The class handler `" + t + "` does not exist in DOM nor as a global JS function")
            }
            return this._inputHolder()
        },
        _inputHolder: function() {
            return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element
        },
        _insertErrorWrapper: function() {
            var t = this.options.errorsContainer;
            if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
            if ("string" == typeof t) {
                if (e(t).length) return e(t).append(this._ui.$errorsWrapper);
                "function" == typeof window[t] ? t = window[t] : r.warn("The errors container `" + t + "` does not exist in DOM nor as a global JS function")
            }
            return "function" == typeof t && (t = t.call(this, this)), "object" == typeof t && t.length ? t.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
        },
        _actualizeTriggers: function() {
            var e, t = this,
                i = this._findRelated();
            i.off(".Parsley"), this._failedOnce ? i.on(r.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
                t._validateIfNeeded()
            }) : (e = r.namespaceEvents(this.options.trigger, "Parsley")) && i.on(e, function(e) {
                t._validateIfNeeded(e)
            })
        },
        _validateIfNeeded: function(e) {
            var t = this;
            e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced), this._debounced = window.setTimeout(function() {
                return t.validate()
            }, this.options.debounce)) : this.validate())
        },
        _resetUI: function() {
            this._failedOnce = !1, this._actualizeTriggers(), void 0 !== this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
        },
        _destroyUI: function() {
            this._resetUI(), void 0 !== this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
        },
        _successClass: function() {
            this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
        },
        _errorClass: function() {
            this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
        },
        _resetClass: function() {
            this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
        }
    };
    var b = function(t, i, s) {
            this.__class__ = "Form", this.element = t, this.$element = e(t), this.domOptions = i, this.options = s, this.parent = window.Parsley, this.fields = [], this.validationResult = null
        },
        k = {
            pending: null,
            resolved: !0,
            rejected: !1
        };
    b.prototype = {
        onSubmitValidate: function(e) {
            var t = this;
            if (!0 !== e.parsley) {
                var i = this._submitSource || this.$element.find(r._SubmitSelector)[0];
                if (this._submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !i || null === i.getAttribute("formnovalidate")) {
                    window.Parsley._remoteCache = {};
                    var s = this.whenValidate({
                        event: e
                    });
                    "resolved" === s.state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === s.state() && s.done(function() {
                        t._submit(i)
                    }))
                }
            }
        },
        onSubmitButton: function(e) {
            this._submitSource = e.currentTarget
        },
        _submit: function(t) {
            if (!1 !== this._trigger("submit")) {
                if (t) {
                    var i = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                    0 === i.length && (i = e('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), i.attr({
                        name: t.getAttribute("name"),
                        value: t.getAttribute("value")
                    })
                }
                this.$element.trigger(_extends(e.Event("submit"), {
                    parsley: !0
                }))
            }
        },
        validate: function(t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                r.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments);
                t = {
                    group: i[0],
                    force: i[1],
                    event: i[2]
                }
            }
            return k[this.whenValidate(t).state()]
        },
        whenValidate: function() {
            var t, i = this,
                s = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                n = s.group,
                o = s.force,
                a = s.event;
            this.submitEvent = a, a && (this.submitEvent = _extends({}, a, {
                preventDefault: function() {
                    r.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), i.validationResult = !1
                }
            })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
            var l = this._withoutReactualizingFormOptions(function() {
                return e.map(i.fields, function(e) {
                    return e.whenValidate({
                        force: o,
                        group: n
                    })
                })
            });
            return (t = r.all(l).done(function() {
                i._trigger("success")
            }).fail(function() {
                i.validationResult = !1, i.focus(), i._trigger("error")
            }).always(function() {
                i._trigger("validated")
            })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult()))
        },
        isValid: function(t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                r.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments);
                t = {
                    group: i[0],
                    force: i[1]
                }
            }
            return k[this.whenValid(t).state()]
        },
        whenValid: function() {
            var t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                s = i.group,
                n = i.force;
            this._refreshFields();
            var o = this._withoutReactualizingFormOptions(function() {
                return e.map(t.fields, function(e) {
                    return e.whenValid({
                        group: s,
                        force: n
                    })
                })
            });
            return r.all(o)
        },
        refresh: function() {
            return this._refreshFields(), this
        },
        reset: function() {
            for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
            this._trigger("reset")
        },
        destroy: function() {
            this._destroyUI();
            for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy")
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var t = this,
                i = this.fields;
            return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
                t.$element.find(t.options.inputs).not(t.options.excluded).each(function(e, i) {
                    var s = new window.Parsley.Factory(i, {}, t);
                    if (("Field" === s.__class__ || "FieldMultiple" === s.__class__) && !0 !== s.options.excluded) {
                        var n = s.__class__ + "-" + s.__id__;
                        void 0 === t.fieldsMappedById[n] && (t.fieldsMappedById[n] = s, t.fields.push(s))
                    }
                }), e.each(r.difference(i, t.fields), function(e, t) {
                    t.reset()
                })
            }), this
        },
        _withoutReactualizingFormOptions: function(e) {
            var t = this.actualizeOptions;
            this.actualizeOptions = function() {
                return this
            };
            var i = e();
            return this.actualizeOptions = t, i
        },
        _trigger: function(e) {
            return this.trigger("form:" + e)
        }
    };
    var C = function(e, t, i, s, n) {
            var o = window.Parsley._validatorRegistry.validators[t],
                r = new c(o);
            s = s || e.options[t + "Priority"] || r.priority, n = !0 === n, _extends(this, {
                validator: r,
                name: t,
                requirements: i,
                priority: s,
                isDomConstraint: n
            }), this._parseRequirements(e.options)
        },
        T = function(e) {
            return e[0].toUpperCase() + e.slice(1)
        };
    C.prototype = {
        validate: function(e, t) {
            var i;
            return (i = this.validator).validate.apply(i, [e].concat(_toConsumableArray(this.requirementList), [t]))
        },
        _parseRequirements: function(e) {
            var t = this;
            this.requirementList = this.validator.parseRequirements(this.requirements, function(i) {
                return e[t.name + T(i)]
            })
        }
    };
    var S = function(t, i, s, n) {
            this.__class__ = "Field", this.element = t, this.$element = e(t), void 0 !== n && (this.parent = n), this.options = s, this.domOptions = i, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints()
        },
        $ = {
            pending: null,
            resolved: !0,
            rejected: !1
        };
    S.prototype = {
        validate: function(t) {
            arguments.length >= 1 && !e.isPlainObject(t) && (r.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), t = {
                options: t
            });
            var i = this.whenValidate(t);
            if (!i) return !0;
            switch (i.state()) {
                case "pending":
                    return null;
                case "resolved":
                    return !0;
                case "rejected":
                    return this.validationResult
            }
        },
        whenValidate: function() {
            var e, t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                s = i.force,
                n = i.group;
            if (this.refresh(), !n || this._isInGroup(n)) return this.value = this.getValue(), this._trigger("validate"), (e = this.whenValid({
                force: s,
                value: this.value,
                _refreshed: !0
            }).always(function() {
                t._reflowUI()
            }).done(function() {
                t._trigger("success")
            }).fail(function() {
                t._trigger("error")
            }).always(function() {
                t._trigger("validated")
            })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult()))
        },
        hasConstraints: function() {
            return 0 !== this.constraints.length
        },
        needsValidation: function(e) {
            return void 0 === e && (e = this.getValue()), !(!e.length && !this._isRequired() && void 0 === this.options.validateIfEmpty)
        },
        _isInGroup: function(t) {
            return Array.isArray(this.options.group) ? -1 !== e.inArray(t, this.options.group) : this.options.group === t
        },
        isValid: function(t) {
            if (arguments.length >= 1 && !e.isPlainObject(t)) {
                r.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
                var i = _slice.call(arguments);
                t = {
                    force: i[0],
                    value: i[1]
                }
            }
            var s = this.whenValid(t);
            return !s || $[s.state()]
        },
        whenValid: function() {
            var t = this,
                i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                s = i.force,
                n = void 0 !== s && s,
                o = i.value,
                a = i.group;
            if (i._refreshed || this.refresh(), !a || this._isInGroup(a)) {
                if (this.validationResult = !0, !this.hasConstraints()) return e.when();
                if (void 0 !== o && null !== o || (o = this.getValue()), !this.needsValidation(o) && !0 !== n) return e.when();
                var l = this._getGroupedConstraints(),
                    d = [];
                return e.each(l, function(i, s) {
                    var n = r.all(e.map(s, function(e) {
                        return t._validateConstraint(o, e)
                    }));
                    if (d.push(n), "rejected" === n.state()) return !1
                }), r.all(d)
            }
        },
        _validateConstraint: function(t, i) {
            var s = this,
                n = i.validate(t, this);
            return !1 === n && (n = e.Deferred().reject()), r.all([n]).fail(function(e) {
                s.validationResult instanceof Array || (s.validationResult = []), s.validationResult.push({
                    assert: i,
                    errorMessage: "string" == typeof e && e
                })
            })
        },
        getValue: function() {
            var e;
            return e = "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.val(), void 0 === e || null === e ? "" : this._handleWhitespace(e)
        },
        reset: function() {
            return this._resetUI(), this._trigger("reset")
        },
        destroy: function() {
            this._destroyUI(), this.$element.removeData("Parsley"), this.$element.removeData("FieldMultiple"), this._trigger("destroy")
        },
        refresh: function() {
            return this._refreshConstraints(), this
        },
        _refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        refreshConstraints: function() {
            return r.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"), this.refresh()
        },
        addConstraint: function(e, t, i, s) {
            if (window.Parsley._validatorRegistry.validators[e]) {
                var n = new C(this, e, t, i, s);
                "undefined" !== this.constraintsByName[n.name] && this.removeConstraint(n.name), this.constraints.push(n), this.constraintsByName[n.name] = n
            }
            return this
        },
        removeConstraint: function(e) {
            for (var t = 0; t < this.constraints.length; t++)
                if (e === this.constraints[t].name) {
                    this.constraints.splice(t, 1);
                    break
                }
            return delete this.constraintsByName[e], this
        },
        updateConstraint: function(e, t, i) {
            return this.removeConstraint(e).addConstraint(e, t, i)
        },
        _bindConstraints: function() {
            for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (e.push(this.constraints[i]), t[this.constraints[i].name] = this.constraints[i]);
            this.constraints = e, this.constraintsByName = t;
            for (var s in this.options) this.addConstraint(s, this.options[s], void 0, !0);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0), null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
            var e = this.element.getAttribute("min"),
                t = this.element.getAttribute("max");
            null !== e && null !== t ? this.addConstraint("range", [e, t], void 0, !0) : null !== e ? this.addConstraint("min", e, void 0, !0) : null !== t && this.addConstraint("max", t, void 0, !0), null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength") ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0) : null !== this.element.getAttribute("minlength") ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0) : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
            var i = r.getType(this.element);
            return "number" === i ? this.addConstraint("type", ["number", {
                step: this.element.getAttribute("step") || "1",
                base: e || this.element.getAttribute("value")
            }], void 0, !0) : /^(email|url|range|date)$/i.test(i) ? this.addConstraint("type", i, void 0, !0) : this
        },
        _isRequired: function() {
            return void 0 !== this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
        },
        _trigger: function(e) {
            return this.trigger("field:" + e)
        },
        _handleWhitespace: function(e) {
            return !0 === this.options.trimValue && r.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (e = r.trimString(e)), e
        },
        _isDateInput: function() {
            var e = this.constraintsByName.type;
            return e && "date" === e.requirements
        },
        _getGroupedConstraints: function() {
            if (!1 === this.options.priorityEnabled) return [this.constraints];
            for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
                var s = this.constraints[i].priority;
                t[s] || e.push(t[s] = []), t[s].push(this.constraints[i])
            }
            return e.sort(function(e, t) {
                return t[0].priority - e[0].priority
            }), e
        }
    };
    var x = S,
        _ = function() {
            this.__class__ = "FieldMultiple"
        };
    _.prototype = {
        addElement: function(e) {
            return this.$elements.push(e), this
        },
        _refreshConstraints: function() {
            var t;
            if (this.constraints = [], "SELECT" === this.element.nodeName) return this.actualizeOptions()._bindConstraints(), this;
            for (var i = 0; i < this.$elements.length; i++)
                if (e("html").has(this.$elements[i]).length) {
                    t = this.$elements[i].data("FieldMultiple")._refreshConstraints().constraints;
                    for (var s = 0; s < t.length; s++) this.addConstraint(t[s].name, t[s].requirements, t[s].priority, t[s].isDomConstraint)
                } else this.$elements.splice(i, 1);
            return this
        },
        getValue: function() {
            if ("function" == typeof this.options.value) return this.options.value(this);
            if (void 0 !== this.options.value) return this.options.value;
            if ("INPUT" === this.element.nodeName) {
                var t = r.getType(this.element);
                if ("radio" === t) return this._findRelated().filter(":checked").val() || "";
                if ("checkbox" === t) {
                    var i = [];
                    return this._findRelated().filter(":checked").each(function() {
                        i.push(e(this).val())
                    }), i
                }
            }
            return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function() {
            return this.$elements = [this.$element], this
        }
    };
    var A = function(t, i, s) {
        this.element = t, this.$element = e(t);
        var n = this.$element.data("Parsley");
        if (n) return void 0 !== s && n.parent === window.Parsley && (n.parent = s, n._resetOptions(n.options)), "object" == typeof i && _extends(n.options, i), n;
        if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
        if (void 0 !== s && "Form" !== s.__class__) throw new Error("Parent instance must be a Form instance");
        return this.parent = s || window.Parsley, this.init(i)
    };
    A.prototype = {
        init: function(e) {
            return this.__class__ = "Parsley", this.__version__ = "2.8.0", this.__id__ = r.generateID(), this._resetOptions(e), "FORM" === this.element.nodeName || r.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
        },
        isMultiple: function() {
            var e = r.getType(this.element);
            return "radio" === e || "checkbox" === e || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")
        },
        handleMultiple: function() {
            var t, i, s = this;
            if (this.options.multiple = this.options.multiple || (t = this.element.getAttribute("name")) || this.element.getAttribute("id"), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return r.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), t && e('input[name="' + t + '"]').each(function(e, t) {
                var i = r.getType(t);
                "radio" !== i && "checkbox" !== i || t.setAttribute(s.options.namespace + "multiple", s.options.multiple)
            });
            for (var n = this._findRelated(), o = 0; o < n.length; o++)
                if (void 0 !== (i = e(n.get(o)).data("Parsley"))) {
                    this.$element.data("FieldMultiple") || i.addElement(this.$element);
                    break
                }
            return this.bind("parsleyField", !0), i || this.bind("parsleyFieldMultiple")
        },
        bind: function(t, i) {
            var s;
            switch (t) {
                case "parsleyForm":
                    s = e.extend(new b(this.element, this.domOptions, this.options), new l, window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    s = e.extend(new x(this.element, this.domOptions, this.options, this.parent), new l, window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    s = e.extend(new x(this.element, this.domOptions, this.options, this.parent), new _, new l, window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(t + "is not a supported Parsley type")
            }
            return this.options.multiple && r.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple), void 0 !== i ? (this.$element.data("FieldMultiple", s), s) : (this.$element.data("Parsley", s), s._actualizeTriggers(), s._trigger("init"), s)
        }
    };
    var F = e.fn.jquery.split(".");
    if (parseInt(F[0]) <= 1 && parseInt(F[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    F.forEach || r.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var O = _extends(new l, {
        element: document,
        $element: e(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: A,
        version: "2.8.0"
    });
    _extends(x.prototype, y.Field, l.prototype), _extends(b.prototype, y.Form, l.prototype), _extends(A.prototype, l.prototype), e.fn.parsley = e.fn.psly = function(t) {
        if (this.length > 1) {
            var i = [];
            return this.each(function() {
                i.push(e(this).parsley(t))
            }), i
        }
        if (0 != this.length) return new A(this[0], t)
    }, void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}), O.options = _extends(r.objectCreate(a), window.ParsleyConfig), window.ParsleyConfig = O.options, window.Parsley = window.psly = O, O.Utils = r, window.ParsleyUtils = {}, e.each(r, function(e, t) {
        "function" == typeof t && (window.ParsleyUtils[e] = function() {
            return r.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."), r[e].apply(r, arguments)
        })
    });
    var P = window.Parsley._validatorRegistry = new p(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {}, e.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function(e, t) {
        window.Parsley[t] = function() {
            return P[t].apply(P, arguments)
        }, window.ParsleyValidator[t] = function() {
            var e;
            return r.warnOnce("Accessing the method '" + t + "' through Validator is deprecated. Simply call 'window.Parsley." + t + "(...)'"), (e = window.Parsley)[t].apply(e, arguments)
        }
    }), window.Parsley.UI = y, window.ParsleyUI = {
        removeError: function(e, t, i) {
            var s = !0 !== i;
            return r.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, {
                updateClass: s
            })
        },
        getErrorsMessages: function(e) {
            return r.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages()
        }
    }, e.each("addError updateError".split(" "), function(e, t) {
        window.ParsleyUI[t] = function(e, i, s, n, o) {
            var a = !0 !== o;
            return r.warnOnce("Accessing UI is deprecated. Call '" + t + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[t](i, {
                message: s,
                assert: n,
                updateClass: a
            })
        }
    }), !1 !== window.ParsleyConfig.autoBind && e(function() {
        e("[data-parsley-validate]").length && e("[data-parsley-validate]").parsley()
    });
    var M = e({}),
        E = function() {
            r.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
        },
        I = "parsley:";
    return e.listen = function(e, s) {
        var n;
        if (E(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (n = arguments[1], s = arguments[2]), "function" != typeof s) throw new Error("Wrong parameters");
        window.Parsley.on(i(e), t(s, n))
    }, e.listenTo = function(e, s, n) {
        if (E(), !(e instanceof x || e instanceof b)) throw new Error("Must give Parsley instance");
        if ("string" != typeof s || "function" != typeof n) throw new Error("Wrong parameters");
        e.on(i(s), t(n))
    }, e.unsubscribe = function(e, t) {
        if (E(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
        window.Parsley.off(i(e), t.parsleyAdaptedCallback)
    }, e.unsubscribeTo = function(e, t) {
        if (E(), !(e instanceof x || e instanceof b)) throw new Error("Must give Parsley instance");
        e.off(i(t))
    }, e.unsubscribeAll = function(t) {
        E(), window.Parsley.off(i(t)), e("form,input,textarea,select").each(function() {
            var s = e(this).data("Parsley");
            s && s.off(i(t))
        })
    }, e.emit = function(e, t) {
        var s;
        E();
        var n = t instanceof x || t instanceof b,
            o = Array.prototype.slice.call(arguments, n ? 2 : 1);
        o.unshift(i(e)), n || (t = window.Parsley), (s = t).trigger.apply(s, _toConsumableArray(o))
    }, e.extend(!0, O, {
        asyncValidators: {
            default: {
                fn: function(e) {
                    return e.status >= 200 && e.status < 300
                },
                url: !1
            },
            reverse: {
                fn: function(e) {
                    return e.status < 200 || e.status >= 300
                },
                url: !1
            }
        },
        addAsyncValidator: function(e, t, i, s) {
            return O.asyncValidators[e] = {
                fn: t,
                url: i || !1,
                options: s || {}
            }, this
        }
    }), O.addValidator("remote", {
        requirementType: {
            "": "string",
            validator: "string",
            reverse: "boolean",
            options: "object"
        },
        validateString: function(t, i, s, n) {
            var o, r, a = {},
                l = s.validator || (!0 === s.reverse ? "reverse" : "default");
            if (void 0 === O.asyncValidators[l]) throw new Error("Calling an undefined async validator: `" + l + "`");
            i = O.asyncValidators[l].url || i, i.indexOf("{value}") > -1 ? i = i.replace("{value}", encodeURIComponent(t)) : a[n.element.getAttribute("name") || n.element.getAttribute("id")] = t;
            var d = e.extend(!0, s.options || {}, O.asyncValidators[l].options);
            o = e.extend(!0, {}, {
                url: i,
                data: a,
                type: "GET"
            }, d), n.trigger("field:ajaxoptions", n, o), r = e.param(o), void 0 === O._remoteCache && (O._remoteCache = {});
            var u = O._remoteCache[r] = O._remoteCache[r] || e.ajax(o),
                c = function() {
                    var t = O.asyncValidators[l].fn.call(n, u, i, s);
                    return t || (t = e.Deferred().reject()), e.when(t)
                };
            return u.then(c, c)
        },
        priority: -1
    }), O.on("form:submit", function() {
        O._remoteCache = {}
    }), l.prototype.addAsyncValidator = function() {
        return r.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), O.addAsyncValidator.apply(O, arguments)
    }, O.addMessages("en", {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }), O.setLocale("en"), (new s).install(), O
}),
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    "use strict";
    var t = window.Slick || {};
    (t = function() {
        var t = 0;
        return function(i, s) {
            var n, o = this;
            o.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(i),
                appendDots: e(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(t, i) {
                    return e('<button type="button" />').text(i + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, o.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, e.extend(o, o.initials), o.activeBreakpoint = null, o.animType = null, o.animProp = null, o.breakpoints = [], o.breakpointSettings = [], o.cssTransitions = !1, o.focussed = !1, o.interrupted = !1, o.hidden = "hidden", o.paused = !0, o.positionProp = null, o.respondTo = null, o.rowCount = 1, o.shouldClick = !0, o.$slider = e(i), o.$slidesCache = null, o.transformType = null, o.transitionType = null, o.visibilityChange = "visibilitychange", o.windowWidth = 0, o.windowTimer = null, n = e(i).data("slick") || {}, o.options = e.extend({}, o.defaults, s, n), o.currentSlide = o.options.initialSlide, o.originalSettings = o.options, void 0 !== document.mozHidden ? (o.hidden = "mozHidden", o.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (o.hidden = "webkitHidden", o.visibilityChange = "webkitvisibilitychange"), o.autoPlay = e.proxy(o.autoPlay, o), o.autoPlayClear = e.proxy(o.autoPlayClear, o), o.autoPlayIterator = e.proxy(o.autoPlayIterator, o), o.changeSlide = e.proxy(o.changeSlide, o), o.clickHandler = e.proxy(o.clickHandler, o), o.selectHandler = e.proxy(o.selectHandler, o), o.setPosition = e.proxy(o.setPosition, o), o.swipeHandler = e.proxy(o.swipeHandler, o), o.dragHandler = e.proxy(o.dragHandler, o), o.keyHandler = e.proxy(o.keyHandler, o), o.instanceUid = t++, o.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, o.registerBreakpoints(), o.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, s) {
        var n = this;
        if ("boolean" == typeof i) s = i, i = null;
        else if (i < 0 || i >= n.slideCount) return !1;
        n.unload(), "number" == typeof i ? 0 === i && 0 === n.$slides.length ? e(t).appendTo(n.$slideTrack) : s ? e(t).insertBefore(n.$slides.eq(i)) : e(t).insertAfter(n.$slides.eq(i)) : !0 === s ? e(t).prependTo(n.$slideTrack) : e(t).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t)
        }), n.$slidesCache = n.$slides, n.reinit()
    }, t.prototype.animateHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: t
            }, e.options.speed)
        }
    }, t.prototype.animateSlide = function(t, i) {
        var s = {},
            n = this;
        n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (t = -t), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
            left: t
        }, n.options.speed, n.options.easing, i) : n.$slideTrack.animate({
            top: t
        }, n.options.speed, n.options.easing, i) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), e({
            animStart: n.currentLeft
        }).animate({
            animStart: t
        }, {
            duration: n.options.speed,
            easing: n.options.easing,
            step: function(e) {
                e = Math.ceil(e), !1 === n.options.vertical ? (s[n.animType] = "translate(" + e + "px, 0px)", n.$slideTrack.css(s)) : (s[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(s))
            },
            complete: function() {
                i && i.call()
            }
        })) : (n.applyTransition(), t = Math.ceil(t), !1 === n.options.vertical ? s[n.animType] = "translate3d(" + t + "px, 0px, 0px)" : s[n.animType] = "translate3d(0px," + t + "px, 0px)", n.$slideTrack.css(s), i && setTimeout(function() {
            n.disableTransition(), i.call()
        }, n.options.speed))
    }, t.prototype.getNavTarget = function() {
        var t = this,
            i = t.options.asNavFor;
        return i && null !== i && (i = e(i).not(t.$slider)), i
    }, t.prototype.asNavFor = function(t) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function() {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0)
        })
    }, t.prototype.applyTransition = function(e) {
        var t = this,
            i = {};
        !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.autoPlay = function() {
        var e = this;
        e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
    }, t.prototype.autoPlayClear = function() {
        var e = this;
        e.autoPlayTimer && clearInterval(e.autoPlayTimer)
    }, t.prototype.autoPlayIterator = function() {
        var e = this,
            t = e.currentSlide + e.options.slidesToScroll;
        e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
    }, t.prototype.buildArrows = function() {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, t.prototype.buildDots = function() {
        var t, i, s = this;
        if (!0 === s.options.dots) {
            for (s.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(s.options.dotsClass), t = 0; t <= s.getDotCount(); t += 1) i.append(e("<li />").append(s.options.customPaging.call(this, s, t)));
            s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active")
        }
    }, t.prototype.buildOut = function() {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
            e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, t.prototype.buildRows = function() {
        var e, t, i, s, n, o, r, a = this;
        if (s = document.createDocumentFragment(), o = a.$slider.children(), a.options.rows > 1) {
            for (r = a.options.slidesPerRow * a.options.rows, n = Math.ceil(o.length / r), e = 0; e < n; e++) {
                var l = document.createElement("div");
                for (t = 0; t < a.options.rows; t++) {
                    var d = document.createElement("div");
                    for (i = 0; i < a.options.slidesPerRow; i++) {
                        var u = e * r + (t * a.options.slidesPerRow + i);
                        o.get(u) && d.appendChild(o.get(u))
                    }
                    l.appendChild(d)
                }
                s.appendChild(l)
            }
            a.$slider.empty().append(s), a.$slider.children().children().children().css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, t.prototype.checkResponsive = function(t, i) {
        var s, n, o, r = this,
            a = !1,
            l = r.$slider.width(),
            d = window.innerWidth || e(window).width();
        if ("window" === r.respondTo ? o = d : "slider" === r.respondTo ? o = l : "min" === r.respondTo && (o = Math.min(d, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            n = null;
            for (s in r.breakpoints) r.breakpoints.hasOwnProperty(s) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[s] && (n = r.breakpoints[s]) : o > r.breakpoints[s] && (n = r.breakpoints[s]));
            null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || i) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t)), a = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === t && (r.currentSlide = r.options.initialSlide), r.refresh(t), a = n), t || !1 === a || r.$slider.trigger("breakpoint", [r, a])
        }
    }, t.prototype.changeSlide = function(t, i) {
        var s, n, o, r = this,
            a = e(t.currentTarget);
        switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), o = r.slideCount % r.options.slidesToScroll != 0, s = o ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, t.data.message) {
            case "previous":
                n = 0 === s ? r.options.slidesToScroll : r.options.slidesToShow - s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - n, !1, i);
                break;
            case "next":
                n = 0 === s ? r.options.slidesToScroll : s, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + n, !1, i);
                break;
            case "index":
                var l = 0 === t.data.index ? 0 : t.data.index || a.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(l), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, t.prototype.checkNavigable = function(e) {
        var t, i;
        if (t = this.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1];
        else
            for (var s in t) {
                if (e < t[s]) {
                    e = i;
                    break
                }
                i = t[s]
            }
        return e
    }, t.prototype.cleanUpEvents = function() {
        var t = this;
        t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, t.prototype.cleanUpSlideEvents = function() {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
    }, t.prototype.clickHandler = function(e) {
        !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
    }, t.prototype.destroy = function(t) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            e(this).attr("style", e(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
    }, t.prototype.disableTransition = function(e) {
        var t = this,
            i = {};
        i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
    }, t.prototype.fadeSlide = function(e, t) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(e).css({
            zIndex: i.options.zIndex
        }), i.$slides.eq(e).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), t && setTimeout(function() {
            i.disableTransition(e), t.call()
        }, i.options.speed))
    }, t.prototype.fadeSlideOut = function(e) {
        var t = this;
        !1 === t.cssTransitions ? t.$slides.eq(e).animate({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
            opacity: 0,
            zIndex: t.options.zIndex - 2
        }))
    }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
        var t = this;
        null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
    }, t.prototype.focusHandler = function() {
        var t = this;
        t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(i) {
            i.stopImmediatePropagation();
            var s = e(this);
            setTimeout(function() {
                t.options.pauseOnFocus && (t.focussed = s.is(":focus"), t.autoPlay())
            }, 0)
        })
    }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, t.prototype.getDotCount = function() {
        var e = this,
            t = 0,
            i = 0,
            s = 0;
        if (!0 === e.options.infinite)
            if (e.slideCount <= e.options.slidesToShow) ++s;
            else
                for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else if (!0 === e.options.centerMode) s = e.slideCount;
        else if (e.options.asNavFor)
            for (; t < e.slideCount;) ++s, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        else s = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
        return s - 1
    }, t.prototype.getLeft = function(e) {
        var t, i, s, n, o = this,
            r = 0;
        return o.slideOffset = 0, i = o.$slides.first().outerHeight(!0), !0 === o.options.infinite ? (o.slideCount > o.options.slidesToShow && (o.slideOffset = o.slideWidth * o.options.slidesToShow * -1, n = -1, !0 === o.options.vertical && !0 === o.options.centerMode && (2 === o.options.slidesToShow ? n = -1.5 : 1 === o.options.slidesToShow && (n = -2)), r = i * o.options.slidesToShow * n), o.slideCount % o.options.slidesToScroll != 0 && e + o.options.slidesToScroll > o.slideCount && o.slideCount > o.options.slidesToShow && (e > o.slideCount ? (o.slideOffset = (o.options.slidesToShow - (e - o.slideCount)) * o.slideWidth * -1, r = (o.options.slidesToShow - (e - o.slideCount)) * i * -1) : (o.slideOffset = o.slideCount % o.options.slidesToScroll * o.slideWidth * -1, r = o.slideCount % o.options.slidesToScroll * i * -1))) : e + o.options.slidesToShow > o.slideCount && (o.slideOffset = (e + o.options.slidesToShow - o.slideCount) * o.slideWidth, r = (e + o.options.slidesToShow - o.slideCount) * i), o.slideCount <= o.options.slidesToShow && (o.slideOffset = 0, r = 0), !0 === o.options.centerMode && o.slideCount <= o.options.slidesToShow ? o.slideOffset = o.slideWidth * Math.floor(o.options.slidesToShow) / 2 - o.slideWidth * o.slideCount / 2 : !0 === o.options.centerMode && !0 === o.options.infinite ? o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2) - o.slideWidth : !0 === o.options.centerMode && (o.slideOffset = 0, o.slideOffset += o.slideWidth * Math.floor(o.options.slidesToShow / 2)), t = !1 === o.options.vertical ? e * o.slideWidth * -1 + o.slideOffset : e * i * -1 + r, !0 === o.options.variableWidth && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow), t = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === o.options.centerMode && (s = o.slideCount <= o.options.slidesToShow || !1 === o.options.infinite ? o.$slideTrack.children(".slick-slide").eq(e) : o.$slideTrack.children(".slick-slide").eq(e + o.options.slidesToShow + 1), t = !0 === o.options.rtl ? s[0] ? -1 * (o.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, t += (o.$list.width() - s.outerWidth()) / 2)), t
    }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
        return this.options[e]
    }, t.prototype.getNavigableIndexes = function() {
        var e, t = this,
            i = 0,
            s = 0,
            n = [];
        for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, s = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); i < e;) n.push(i), i = s + t.options.slidesToScroll, s += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return n
    }, t.prototype.getSlick = function() {
        return this
    }, t.prototype.getSlideCount = function() {
        var t, i, s = this;
        return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(n, o) {
            if (o.offsetLeft - i + e(o).outerWidth() / 2 > -1 * s.swipeLeft) return t = o, !1
        }), Math.abs(e(t).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(e)
            }
        }, t)
    }, t.prototype.init = function(t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, t.prototype.initADA = function() {
        var t = this,
            i = Math.ceil(t.slideCount / t.options.slidesToShow),
            s = t.getNavigableIndexes().filter(function(e) {
                return e >= 0 && e < t.slideCount
            });
        t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
            var n = s.indexOf(i);
            e(this).attr({
                role: "tabpanel",
                id: "slick-slide" + t.instanceUid + i,
                tabindex: -1
            }), -1 !== n && e(this).attr({
                "aria-describedby": "slick-slide-control" + t.instanceUid + n
            })
        }), t.$dots.attr("role", "tablist").find("li").each(function(n) {
            var o = s[n];
            e(this).attr({
                role: "presentation"
            }), e(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + t.instanceUid + n,
                "aria-controls": "slick-slide" + t.instanceUid + o,
                "aria-label": n + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(t.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var n = t.currentSlide, o = n + t.options.slidesToShow; n < o; n++) t.$slides.eq(n).attr("tabindex", 0);
        t.activateADA()
    }, t.prototype.initArrowEvents = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)))
    }, t.prototype.initDotEvents = function() {
        var t = this;
        !0 === t.options.dots && (e("li", t.$dots).on("click.slick", {
            message: "index"
        }, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
    }, t.prototype.initSlideEvents = function() {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
    }, t.prototype.initializeEvents = function() {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(t.setPosition)
    }, t.prototype.initUI = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
    }, t.prototype.keyHandler = function(e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "next" : "previous"
            }
        }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
            data: {
                message: !0 === t.options.rtl ? "previous" : "next"
            }
        }))
    }, t.prototype.lazyLoad = function() {
        function t(t) {
            e("img[data-lazy]", t).each(function() {
                var t = e(this),
                    i = e(this).attr("data-lazy"),
                    s = e(this).attr("data-srcset"),
                    n = e(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    t.animate({
                        opacity: 0
                    }, 100, function() {
                        s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", i).animate({
                            opacity: 1
                        }, 200, function() {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), o.$slider.trigger("lazyLoaded", [o, t, i])
                    })
                }, r.onerror = function() {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, t, i])
                }, r.src = i
            })
        }
        var i, s, n, o = this;
        if (!0 === o.options.centerMode ? !0 === o.options.infinite ? n = (s = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2 : (s = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide) : (s = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide, n = Math.ceil(s + o.options.slidesToShow), !0 === o.options.fade && (s > 0 && s--, n <= o.slideCount && n++)), i = o.$slider.find(".slick-slide").slice(s, n), "anticipated" === o.options.lazyLoad)
            for (var r = s - 1, a = n, l = o.$slider.find(".slick-slide"), d = 0; d < o.options.slidesToScroll; d++) r < 0 && (r = o.slideCount - 1), i = (i = i.add(l.eq(r))).add(l.eq(a)), r--, a++;
        t(i), o.slideCount <= o.options.slidesToShow ? t(o.$slider.find(".slick-slide")) : o.currentSlide >= o.slideCount - o.options.slidesToShow ? t(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow)) : 0 === o.currentSlide && t(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow))
    }, t.prototype.loadSlider = function() {
        var e = this;
        e.setPosition(), e.$slideTrack.css({
            opacity: 1
        }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
    }, t.prototype.next = t.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, t.prototype.orientationChange = function() {
        var e = this;
        e.checkResponsive(), e.setPosition()
    }, t.prototype.pause = t.prototype.slickPause = function() {
        var e = this;
        e.autoPlayClear(), e.paused = !0
    }, t.prototype.play = t.prototype.slickPlay = function() {
        var e = this;
        e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
    }, t.prototype.postSlide = function(t) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, t]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, t.prototype.prev = t.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, t.prototype.preventDefault = function(e) {
        e.preventDefault()
    }, t.prototype.progressiveLazyLoad = function(t) {
        t = t || 1;
        var i, s, n, o, r, a = this,
            l = e("img[data-lazy]", a.$slider);
        l.length ? (i = l.first(), s = i.attr("data-lazy"), n = i.attr("data-srcset"), o = i.attr("data-sizes") || a.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            n && (i.attr("srcset", n), o && i.attr("sizes", o)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === a.options.adaptiveHeight && a.setPosition(), a.$slider.trigger("lazyLoaded", [a, i, s]), a.progressiveLazyLoad()
        }, r.onerror = function() {
            t < 3 ? setTimeout(function() {
                a.progressiveLazyLoad(t + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, s]), a.progressiveLazyLoad())
        }, r.src = s) : a.$slider.trigger("allImagesLoaded", [a])
    }, t.prototype.refresh = function(t) {
        var i, s, n = this;
        s = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > s && (n.currentSlide = s), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), i = n.currentSlide, n.destroy(!0), e.extend(n, n.initials, {
            currentSlide: i
        }), n.init(), t || n.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, t.prototype.registerBreakpoints = function() {
        var t, i, s, n = this,
            o = n.options.responsive || null;
        if ("array" === e.type(o) && o.length) {
            n.respondTo = n.options.respondTo || "window";
            for (t in o)
                if (s = n.breakpoints.length - 1, o.hasOwnProperty(t)) {
                    for (i = o[t].breakpoint; s >= 0;) n.breakpoints[s] && n.breakpoints[s] === i && n.breakpoints.splice(s, 1), s--;
                    n.breakpoints.push(i), n.breakpointSettings[i] = o[t].settings
                }
            n.breakpoints.sort(function(e, t) {
                return n.options.mobileFirst ? e - t : t - e
            })
        }
    }, t.prototype.reinit = function() {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, t.prototype.resize = function() {
        var t = this;
        e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
            t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
        var s = this;
        if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : s.slideCount - 1 : !0 === t ? --e : e, s.slideCount < 1 || e < 0 || e > s.slideCount - 1) return !1;
        s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(e).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
    }, t.prototype.setCSS = function(e) {
        var t, i, s = this,
            n = {};
        !0 === s.options.rtl && (e = -e), t = "left" == s.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(e) + "px" : "0px", n[s.positionProp] = e, !1 === s.transformsEnabled ? s.$slideTrack.css(n) : (n = {}, !1 === s.cssTransitions ? (n[s.animType] = "translate(" + t + ", " + i + ")", s.$slideTrack.css(n)) : (n[s.animType] = "translate3d(" + t + ", " + i + ", 0px)", s.$slideTrack.css(n)))
    }, t.prototype.setDimensions = function() {
        var e = this;
        !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
            padding: "0px " + e.options.centerPadding
        }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
            padding: e.options.centerPadding + " 0px"
        })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
    }, t.prototype.setFade = function() {
        var t, i = this;
        i.$slides.each(function(s, n) {
            t = i.slideWidth * s * -1, !0 === i.options.rtl ? e(n).css({
                position: "relative",
                right: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : e(n).css({
                position: "relative",
                left: t,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            })
        }), i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    }, t.prototype.setHeight = function() {
        var e = this;
        if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
            var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css("height", t)
        }
    }, t.prototype.setOption = t.prototype.slickSetOption = function() {
        var t, i, s, n, o, r = this,
            a = !1;
        if ("object" === e.type(arguments[0]) ? (s = arguments[0], a = arguments[1], o = "multiple") : "string" === e.type(arguments[0]) && (s = arguments[0], n = arguments[1], a = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? o = "responsive" : void 0 !== arguments[1] && (o = "single")), "single" === o) r.options[s] = n;
        else if ("multiple" === o) e.each(s, function(e, t) {
            r.options[e] = t
        });
        else if ("responsive" === o)
            for (i in n)
                if ("array" !== e.type(r.options.responsive)) r.options.responsive = [n[i]];
                else {
                    for (t = r.options.responsive.length - 1; t >= 0;) r.options.responsive[t].breakpoint === n[i].breakpoint && r.options.responsive.splice(t, 1), t--;
                    r.options.responsive.push(n[i])
                }
        a && (r.unload(), r.reinit())
    }, t.prototype.setPosition = function() {
        var e = this;
        e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
    }, t.prototype.setProps = function() {
        var e = this,
            t = document.body.style;
        e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
    }, t.prototype.setSlideClasses = function(e) {
        var t, i, s, n, o = this;
        if (i = o.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), o.$slides.eq(e).addClass("slick-current"), !0 === o.options.centerMode) {
            var r = o.options.slidesToShow % 2 == 0 ? 1 : 0;
            t = Math.floor(o.options.slidesToShow / 2), !0 === o.options.infinite && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = o.options.slidesToShow + e, i.slice(s - t + 1 + r, s + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") : e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")
        } else e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (n = o.slideCount % o.options.slidesToShow, s = !0 === o.options.infinite ? o.options.slidesToShow + e : e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(s - (o.options.slidesToShow - n), s + n).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== o.options.lazyLoad && "anticipated" !== o.options.lazyLoad || o.lazyLoad()
    }, t.prototype.setupInfinite = function() {
        var t, i, s, n = this;
        if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (i = null, n.slideCount > n.options.slidesToShow)) {
            for (s = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, t = n.slideCount; t > n.slideCount - s; t -= 1) i = t - 1, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < s + n.slideCount; t += 1) i = t, e(n.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
            n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                e(this).attr("id", "")
            })
        }
    }, t.prototype.interrupt = function(e) {
        var t = this;
        e || t.autoPlay(), t.interrupted = e
    }, t.prototype.selectHandler = function(t) {
        var i = this,
            s = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
            n = parseInt(s.attr("data-slick-index"));
        n || (n = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(n, !1, !0) : i.slideHandler(n)
    }, t.prototype.slideHandler = function(e, t, i) {
        var s, n, o, r, a, l = null,
            d = this;
        if (t = t || !1, !(!0 === d.animating && !0 === d.options.waitForAnimate || !0 === d.options.fade && d.currentSlide === e))
            if (!1 === t && d.asNavFor(e), s = e, l = d.getLeft(s), r = d.getLeft(d.currentSlide), d.currentLeft = null === d.swipeLeft ? r : d.swipeLeft, !1 === d.options.infinite && !1 === d.options.centerMode && (e < 0 || e > d.getDotCount() * d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
                d.postSlide(s)
            }) : d.postSlide(s));
            else if (!1 === d.options.infinite && !0 === d.options.centerMode && (e < 0 || e > d.slideCount - d.options.slidesToScroll)) !1 === d.options.fade && (s = d.currentSlide, !0 !== i ? d.animateSlide(r, function() {
            d.postSlide(s)
        }) : d.postSlide(s));
        else {
            if (d.options.autoplay && clearInterval(d.autoPlayTimer), n = s < 0 ? d.slideCount % d.options.slidesToScroll != 0 ? d.slideCount - d.slideCount % d.options.slidesToScroll : d.slideCount + s : s >= d.slideCount ? d.slideCount % d.options.slidesToScroll != 0 ? 0 : s - d.slideCount : s, d.animating = !0, d.$slider.trigger("beforeChange", [d, d.currentSlide, n]), o = d.currentSlide, d.currentSlide = n, d.setSlideClasses(d.currentSlide), d.options.asNavFor && (a = (a = d.getNavTarget()).slick("getSlick")).slideCount <= a.options.slidesToShow && a.setSlideClasses(d.currentSlide), d.updateDots(), d.updateArrows(), !0 === d.options.fade) return !0 !== i ? (d.fadeSlideOut(o), d.fadeSlide(n, function() {
                d.postSlide(n)
            })) : d.postSlide(n), void d.animateHeight();
            !0 !== i ? d.animateSlide(l, function() {
                d.postSlide(n)
            }) : d.postSlide(n)
        }
    }, t.prototype.startLoad = function() {
        var e = this;
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
    }, t.prototype.swipeDirection = function() {
        var e, t, i, s, n = this;
        return e = n.touchObject.startX - n.touchObject.curX, t = n.touchObject.startY - n.touchObject.curY, i = Math.atan2(t, e), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? !1 === n.options.rtl ? "left" : "right" : s <= 360 && s >= 315 ? !1 === n.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === n.options.rtl ? "right" : "left" : !0 === n.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
    }, t.prototype.swipeEnd = function(e) {
        var t, i, s = this;
        if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1, !1;
        if (s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), void 0 === s.touchObject.curX) return !1;
        if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
                case "left":
                case "down":
                    t = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    t = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
            }
            "vertical" != i && (s.slideHandler(t), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
        } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, t.prototype.swipeHandler = function(e) {
        var t = this;
        if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
            case "start":
                t.swipeStart(e);
                break;
            case "move":
                t.swipeMove(e);
                break;
            case "end":
                t.swipeEnd(e)
        }
    }, t.prototype.swipeMove = function(e) {
        var t, i, s, n, o, r, a = this;
        return o = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || a.scrolling || o && 1 !== o.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX : e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))), !a.options.verticalSwiping && !a.swiping && r > 4 ? (a.scrolling = !0, !1) : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r), i = a.swipeDirection(), void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && (a.swiping = !0, e.preventDefault()), n = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (n = a.touchObject.curY > a.touchObject.startY ? 1 : -1), s = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (s = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + s * n : a.swipeLeft = t + s * (a.$list.height() / a.listWidth) * n, !0 === a.options.verticalSwiping && (a.swipeLeft = t + s * n), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))))
    }, t.prototype.swipeStart = function(e) {
        var t, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
    }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
        var e = this;
        null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
    }, t.prototype.unload = function() {
        var t = this;
        e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, t.prototype.unslick = function(e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy()
    }, t.prototype.updateArrows = function() {
        var e = this;
        Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, t.prototype.updateDots = function() {
        var e = this;
        null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
    }, t.prototype.visibility = function() {
        var e = this;
        e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
    }, e.fn.slick = function() {
        var e, i, s = this,
            n = arguments[0],
            o = Array.prototype.slice.call(arguments, 1),
            r = s.length;
        for (e = 0; e < r; e++)
            if ("object" == typeof n || void 0 === n ? s[e].slick = new t(s[e], n) : i = s[e].slick[n].apply(s[e].slick, o), void 0 !== i) return i;
        return s
    }
}),
function(e, t, i) {
    var s = e("html, body"),
        n = function(t) {
            var i = e('[data-behavior="scroll-to-on-success"]');
            i.length && s.stop().animate({
                scrollTop: i.offset().top - 150
            }, 300, "swing")
        };
    t.Parsley.addValidator("requiredIfInterest", {
        requirementType: "string",
        validateString: function(t, i) {
            var s = e("#interest");
            return !s.length || s.val() !== i || !!t
        }
    });
    var o = {
        init: function() {
            e("#interest").material_select();
            var i = e('[data-behavior="connect-form"]'),
                s = i.find('[type="submit"]'),
                o = i.find('[name="company"] + label'),
                r = e('[data-behavior="connect-form-message"]'),
                a = i.parent(),
                l = r.find("button"),
                d = i.parsley({
                    errorsMessagesDisabled: !0,
                    successClass: "valid",
                    errorClass: "invalid",
                    trigger: "focusout keyup"
                });
            d.on("field:validated", function() {
                s.prop("disabled", !d.isValid())
            }), i.on("submit", function(o) {
                return o.preventDefault(), d.isValid() && (s.text("Sending..."), e.ajax({
                    url: t.connect.ajax_url,
                    type: "POST",
                    dataType: "json",
                    data: {
                        action: "handle_connect_form",
                        _wpnonce: i.find('[name="_wpnonce"]').val(),
                        name: i.find('[name="name"]').val(),
                        message: i.find('[name="message"]').val(),
                        company: i.find('[name="company"]').val(),
                        email: i.find('[name="email"]').val(),
                        interest: i.find('[name="interest"]').val()
                    },
                    success: function(e) {
                        e.status && "ok" === e.status ? (a.height(a.height()), i.delay(100).fadeOut(200, function() {
                            r.fadeIn(300), n()
                        }), "function" == typeof ga && ga("send", "event", {
                            eventCategory: "Contact",
                            eventAction: "Submit",
                            eventLabel: "Connect"
                        }), "function" == typeof fbq && fbq("track", "Lead", {
                            content_name: "Connect",
                            content_category: "Contact",
                            value: 10,
                            currency: "USD"
                        }), "function" == typeof hj && hj("formSubmitSuccessful")) : ("function" == typeof hj && hj("formSubmitFailed"), s.addClass("btn-error").text("Oops, unable to send.").prop("disabled", "disabled"))
                    }
                })), !1
            }), l.on("click", function() {
                d.reset(), s.text("Send").prop("disabled", "disabled"), i.find('[name="name"]').val(""), i.find('[name="message"]').val(""), i.find('[name="company"]').val(""), i.find('[name="email"]').val(""), r.fadeOut(200, function() {
                    i.fadeIn(200, function() {
                        a.height("auto")
                    })
                })
            });
            var u = i.find('[name="company"]').parsley();
            i.find('[name="interest"]').on("change", function() {
                var t = "New Business" === e(this).val() ? "Company" : "Company (Optional)";
                o.text(t), u.reset()
            }).trigger("change")
        },
        finalize: function() {
            var t = function(t, i) {
                var s = i.$slides,
                    n = 0;
                s.each(function(t, i) {
                    var s = e(i).outerHeight();
                    s > n && (n = s)
                }), i.$slideTrack.height(n + 20)
            };
            e('[data-behavior="events-carousel"]').on("init", t).on("reInit", t).slick({
                dots: !0,
                arrows: !1,
                centerMode: !0,
                centerPadding: "calc((100vw - 950px) / 4 + 45px)",
                adaptiveHeight: !1,
                infinite: !1,
                responsive: [{
                    breakpoint: 1440,
                    settings: {
                        centerPadding: "calc((100vw - 740px) / 4 + 30px)"
                    }
                }, {
                    breakpoint: 1024,
                    settings: {
                        centerPadding: "calc((100vw - 465px) / 4 + 25px)"
                    }
                }, {
                    breakpoint: 700,
                    settings: "unslick"
                }]
            })
        }
    };
    t.pageConnect = o
}(jQuery, window);
! function(e, n, i) {
    var o = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        a = {
            pageLoadFadeIn: function() {
                var n = e('[data-fade="first"]'),
                    i = e('[data-fade="last"]').addClass("fadeIn"),
                    a = e('[data-fade="load-images"]'),
                    t = function() {
                        i.css("opacity", 1).removeClass("fadeIn")
                    },
                    l = function() {
                        a.length ? a.imagesLoaded(function() {
                            a.addClass("fadeIn").one(o, t)
                        }) : t()
                    };
                n.length ? n.addClass("fadeInLeft").one(o, l) : l()
            },
            pageUnloadFadeOut: function() {
                var i = e(n),
                    a = !1;
                e("a[href^=mailto]").on("click", function() {
                    a = !0
                }), i.on("beforeunload", function() {
                    a || e("html").addClass("fadeOut").one(o, function() {
                        i.scrollTop(0)
                    }), a = !1
                })
            },
            loadVideoPopin: function() {
                var n = e("body"),
                    i = e("[data-video-popin]"),
                    o = location.hash.replace("#", "") || null,
                    t = function(i) {
                        var o = e('[data-popin-id="' + i + '"]').data("popin");
                        o && (n.append(o).addClass("video-open"), "function" == typeof ga && setTimeout(function() {
                            ga("vimeoTracker:reload")
                        }, 150), e(".video-popin, .video-popin-inner, .video-popin .icon-close-white").one("click", function() {
                            e(".video-popin").remove(), n.removeClass("video-open")
                        }))
                    },
                    l = function(n) {
                        var i = e(this).data("video-popin");
                        t(i)
                    };
                o && e(function() {
                    t(o)
                }), i.on("click", l), e.fn.almComplete = function() {
                    i.off("click", l), a.loadVideoPopin()
                }
            },
            clearAjaxLoadMoreWhenDone: function() {
                e.fn.almDone = function() {
                    e(".alm-btn-wrap").remove()
                }, e.fn.almEmpty = function() {
                    e("#ajax-load-more").remove()
                }
            },
            debounce: function(e, n, i) {
                var o;
                return function() {
                    var a = this,
                        t = arguments,
                        l = function() {
                            o = null, i || e.apply(a, t)
                        },
                        d = i && !o;
                    clearTimeout(o), o = setTimeout(l, n), d && e.apply(a, t)
                }
            },
            throttle: function(e, n, i) {
                var o, a, t = n || 250;
                return function() {
                    var n = i || this,
                        l = +new Date,
                        d = arguments;
                    o && l < o + t ? (clearTimeout(a), a = setTimeout(function() {
                        o = l, e.apply(n, d)
                    }, t)) : (o = l, e.apply(n, d))
                }
            }
        };
    n.helpers = a
}(jQuery, window),
function(e, n, i) {
    var o = {
        init: function() {
            var i = e(n),
                o = e("body"),
                a = e(".header-tertiary"),
                t = e(".nav-primary"),
                l = "",
                d = function() {
                    o.hasClass("header-open") || o.hasClass("category-list-open") ? o.on("touchmove", function(e) {
                        e.preventDefault()
                    }) : o.off("touchmove")
                };
            e(".burger-link").on("click", function() {
                o.removeClass("category-list-open").toggleClass("header-open"), d()
            }), e(".secondary-context #menu-primary .menu-ideas a, .secondary-context .nav-category-list .active-category a").on("click", function(i) {
                if (e(n).width() < 1440) {
                    i.preventDefault();
                    var a = e(this);
                    o.hasClass("category-list-open") || (l = a.html()), o.removeClass("header-open").toggleClass("category-list-open"), a.html(o.hasClass("category-list-open") ? "Ideas" : l), d()
                }
            });
            var r = 0;
            i.width(), e(".header");
            if (i.on("scroll", function() {
                    var e = i.scrollTop(),
                        n = e <= r,
                        a = e > 400 && n;
                    o.toggleClass("scrolled", a), i.trigger("scrolled.prolific", {
                        scrolled: a
                    }), r = e
                }), a.length && t.length) {
                var s = function() {
                        var e = a.width(),
                            n = a.offset().left;
                        return t.offset().left - (e + n) < 120
                    },
                    c = function(e, n) {
                        i.width() > 1023 ? n && !n.scrolled ? o.removeClass("collapsed-nav") : o.toggleClass("collapsed-nav", s()) : (o.removeClass("collapsed-nav"), i.off("scrolled.prolific resize", c))
                    };
                i.on("scrolled.prolific resize", c).trigger("resize")
            }
        }
    };
    n.nav = o
}(jQuery, window),
function(e, n, i) {
    var o = n.helpers && n.helpers.throttle,
        a = {
            init: function() {
                var i = e(n),
                    a = e("body"),
                    t = function() {
                        a.toggleClass("scrolled-into-page", i.scrollTop() > 400)
                    };
                i.on("scroll", o(t, 200)).trigger("scroll")
            }
        };
    n.scrolledIntoPage = a
}(jQuery, window),
function(e, n, i) {
    var o = {
        init: function() {
            n.nav && n.nav.init(), n.scrolledIntoPage && n.scrolledIntoPage.init(), n.helpers && (n.helpers.pageLoadFadeIn(), n.helpers.pageUnloadFadeOut(), n.helpers.loadVideoPopin(), n.helpers.clearAjaxLoadMoreWhenDone())
        },
        finalize: function() {}
    };
    n.all = o
}(jQuery, window),
function(e) {
    var n = {
            all: {
                init: window.all && window.all.init,
                finalize: window.all && window.all.finalize
            },
            page_template_ams: {
                init: window.pageAMS && window.pageAMS.init,
                finalize: window.pageAMS && window.pageAMS.finalize
            },
            page_template_ideas: {
                init: window.pageIdeas && window.pageIdeas.init,
                finalize: window.pageIdeas && window.pageIdeas.finalize
            },
            page_template_approach: {
                init: window.pageApproach && window.pageApproach.init,
                finalize: window.pageApproach && window.pageApproach.finalize
            },
            page_template_team: {
                init: window.pageTeam && window.pageTeam.init,
                finalize: window.pageTeam && window.pageTeam.finalize
            },
            page_template_careers: {
                init: window.pageCareers && window.pageCareers.init,
                finalize: window.pageCareers && window.pageCareers.finalize
            },
            connect: {
                init: window.pageConnect && window.pageConnect.init,
                finalize: window.pageConnect && window.pageConnect.finalize
            },
            single_post: {
                init: window.singlePost && window.singlePost.init,
                finalize: window.singlePost && window.singlePost.finalize
            },
            single_work: {
                init: window.singleWork && window.singleWork.init,
                finalize: window.singleWork && window.singleWork.finalize
            },
            single_job: {
                init: window.singleJob && window.singleJob.init,
                finalize: window.singleJob && window.singleJob.finalize
            }
        },
        i = {
            fire: function(e, i, o) {
                var a, t = n;
                i = void 0 === i ? "init" : i, a = "" !== e, a = a && t[e], (a = a && "function" == typeof t[e][i]) && t[e][i](o)
            },
            loadEvents: function() {
                i.fire("all"), e.each(document.body.className.replace(/-/g, "_").split(/\s+/), function(e, n) {
                    i.fire(n), i.fire(n, "finalize")
                }), i.fire("all", "finalize")
            }
        };
    e(document).ready(i.loadEvents)
}(jQuery);