var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (e) {
  (typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && module.exports ? module.exports = e : e(Highcharts);
})(function (e) {
  function A(b, a, d) {
    var c;!a.rgba.length || !b.rgba.length ? b = a.input || "none" : (b = b.rgba, a = a.rgba, c = a[3] !== 1 || b[3] !== 1, b = (c ? "rgba(" : "rgb(") + Math.round(a[0] + (b[0] - a[0]) * (1 - d)) + "," + Math.round(a[1] + (b[1] - a[1]) * (1 - d)) + "," + Math.round(a[2] + (b[2] - a[2]) * (1 - d)) + (c ? "," + (a[3] + (b[3] - a[3]) * (1 - d)) : "") + ")");return b;
  }var u = function u() {},
      q = e.getOptions(),
      i = e.each,
      o = e.extend,
      B = e.format,
      C = e.merge,
      v = e.pick,
      r = e.wrap,
      l = e.Chart,
      p = e.seriesTypes,
      w = p.pie,
      m = p.column,
      x = e.Tick,
      s = e.fireEvent,
      y = e.inArray,
      z = 1;i(["fill", "stroke"], function (b) {
    e.Fx.prototype[b + "Setter"] = function () {
      this.elem.attr(b, A(e.Color(this.start), e.Color(this.end), this.pos));
    };
  });o(q.lang, { drillUpText: "\u25C1 Back to {series.name}" });q.drilldown = { activeAxisLabelStyle: { cursor: "pointer", color: "#0d233a", fontWeight: "bold", textDecoration: "underline" }, activeDataLabelStyle: { cursor: "pointer", color: "#0d233a", fontWeight: "bold", textDecoration: "underline" }, animation: { duration: 500 },
    drillUpButton: { position: { align: "right", x: -10, y: 10 } } };e.SVGRenderer.prototype.Element.prototype.fadeIn = function (b) {
    this.attr({ opacity: 0.1, visibility: "inherit" }).animate({ opacity: v(this.newOpacity, 1) }, b || { duration: 250 });
  };l.prototype.addSeriesAsDrilldown = function (b, a) {
    this.addSingleSeriesAsDrilldown(b, a);this.applyDrilldown();
  };l.prototype.addSingleSeriesAsDrilldown = function (b, a) {
    var d = b.series,
        c = d.xAxis,
        g = d.yAxis,
        f;f = b.color || d.color;var h,
        e = [],
        j = [],
        k,
        n;if (!this.drilldownLevels) this.drilldownLevels = [];k = d.options._levelNumber || 0;(n = this.drilldownLevels[this.drilldownLevels.length - 1]) && n.levelNumber !== k && (n = void 0);if (!a.color) a.color = f;a._ddSeriesId = z++;h = y(b, d.points);i(d.chart.series, function (a) {
      if (a.xAxis === c && !a.isDrilling) a.options._ddSeriesId = a.options._ddSeriesId || z++, a.options._colorIndex = a.userOptions._colorIndex, a.options._levelNumber = a.options._levelNumber || k, n ? (e = n.levelSeries, j = n.levelSeriesOptions) : (e.push(a), j.push(a.options));
    });f = { levelNumber: k, seriesOptions: d.options, levelSeriesOptions: j,
      levelSeries: e, shapeArgs: b.shapeArgs, bBox: b.graphic ? b.graphic.getBBox() : {}, color: f, lowerSeriesOptions: a, pointOptions: d.options.data[h], pointIndex: h, oldExtremes: { xMin: c && c.userMin, xMax: c && c.userMax, yMin: g && g.userMin, yMax: g && g.userMax } };this.drilldownLevels.push(f);f = f.lowerSeries = this.addSeries(a, !1);f.options._levelNumber = k + 1;if (c) c.oldPos = c.pos, c.userMin = c.userMax = null, g.userMin = g.userMax = null;if (d.type === f.type) f.animate = f.animateDrilldown || u, f.options.animation = !0;
  };l.prototype.applyDrilldown = function () {
    var b = this.drilldownLevels,
        a;if (b && b.length > 0) a = b[b.length - 1].levelNumber, i(this.drilldownLevels, function (b) {
      b.levelNumber === a && i(b.levelSeries, function (b) {
        b.options && b.options._levelNumber === a && b.remove(!1);
      });
    });this.redraw();this.showDrillUpButton();
  };l.prototype.getDrilldownBackText = function () {
    var b = this.drilldownLevels;if (b && b.length > 0) return b = b[b.length - 1], b.series = b.seriesOptions, B(this.options.lang.drillUpText, b);
  };l.prototype.showDrillUpButton = function () {
    var b = this,
        a = this.getDrilldownBackText(),
        d = b.options.drilldown.drillUpButton,
        c,
        g;this.drillUpButton ? this.drillUpButton.attr({ text: a }).align() : (g = (c = d.theme) && c.states, this.drillUpButton = this.renderer.button(a, null, null, function () {
      b.drillUp();
    }, c, g && g.hover, g && g.select).attr({ align: d.position.align, zIndex: 9 }).add().align(d.position, !1, d.relativeTo || "plotBox"));
  };l.prototype.drillUp = function () {
    for (var b = this, a = b.drilldownLevels, d = a[a.length - 1].levelNumber, c = a.length, g = b.series, f, h, e, j, k = function k(a) {
      var c;i(g, function (b) {
        b.options._ddSeriesId === a._ddSeriesId && (c = b);
      });c = c || b.addSeries(a, !1);if (c.type === e.type && c.animateDrillupTo) c.animate = c.animateDrillupTo;a === h.seriesOptions && (j = c);
    }; c--;) {
      if (h = a[c], h.levelNumber === d) {
        a.pop();e = h.lowerSeries;if (!e.chart) for (f = g.length; f--;) {
          if (g[f].options.id === h.lowerSeriesOptions.id && g[f].options._levelNumber === d + 1) {
            e = g[f];break;
          }
        }e.xData = [];i(h.levelSeriesOptions, k);s(b, "drillup", { seriesOptions: h.seriesOptions });if (j.type === e.type) j.drilldownLevel = h, j.options.animation = b.options.drilldown.animation, e.animateDrillupFrom && e.chart && e.animateDrillupFrom(h);j.options._levelNumber = d;e.remove(!1);if (j.xAxis) f = h.oldExtremes, j.xAxis.setExtremes(f.xMin, f.xMax, !1), j.yAxis.setExtremes(f.yMin, f.yMax, !1);
      }
    }s(b, "drillupall");this.redraw();this.drilldownLevels.length === 0 ? this.drillUpButton = this.drillUpButton.destroy() : this.drillUpButton.attr({ text: this.getDrilldownBackText() }).align();this.ddDupes.length = [];
  };m.prototype.supportsDrilldown = !0;m.prototype.animateDrillupTo = function (b) {
    if (!b) {
      var a = this,
          d = a.drilldownLevel;i(this.points, function (a) {
        a.graphic && a.graphic.hide();a.dataLabel && a.dataLabel.hide();a.connector && a.connector.hide();
      });setTimeout(function () {
        a.points && i(a.points, function (a, b) {
          var f = b === (d && d.pointIndex) ? "show" : "fadeIn",
              e = f === "show" ? !0 : void 0;if (a.graphic) a.graphic[f](e);if (a.dataLabel) a.dataLabel[f](e);if (a.connector) a.connector[f](e);
        });
      }, Math.max(this.chart.options.drilldown.animation.duration - 50, 0));this.animate = u;
    }
  };m.prototype.animateDrilldown = function (b) {
    var a = this,
        d = this.chart.drilldownLevels,
        c,
        g = this.chart.options.drilldown.animation,
        f = this.xAxis;if (!b) i(d, function (b) {
      if (a.options._ddSeriesId === b.lowerSeriesOptions._ddSeriesId) c = b.shapeArgs, c.fill = b.color;
    }), c.x += v(f.oldPos, f.pos) - f.pos, i(this.points, function (b) {
      b.graphic && b.graphic.attr(c).animate(o(b.shapeArgs, { fill: b.color || a.color }), g);b.dataLabel && b.dataLabel.fadeIn(g);
    }), this.animate = null;
  };m.prototype.animateDrillupFrom = function (b) {
    var a = this.chart.options.drilldown.animation,
        d = this.group,
        c = this;i(c.trackerGroups, function (a) {
      if (c[a]) c[a].on("mouseover");
    });delete this.group;
    i(this.points, function (c) {
      var f = c.graphic,
          h = function h() {
        f.destroy();d && (d = d.destroy());
      };f && (delete c.graphic, a ? f.animate(o(b.shapeArgs, { fill: b.color }), e.merge(a, { complete: h })) : (f.attr(b.shapeArgs), h()));
    });
  };w && o(w.prototype, { supportsDrilldown: !0, animateDrillupTo: m.prototype.animateDrillupTo, animateDrillupFrom: m.prototype.animateDrillupFrom, animateDrilldown: function animateDrilldown(b) {
      var a = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
          d = this.chart.options.drilldown.animation,
          c = a.shapeArgs,
          g = c.start,
          f = (c.end - g) / this.points.length;if (!b) i(this.points, function (b, i) {
        b.graphic.attr(e.merge(c, { start: g + i * f, end: g + (i + 1) * f, fill: a.color }))[d ? "animate" : "attr"](o(b.shapeArgs, { fill: b.color }), d);
      }), this.animate = null;
    } });e.Point.prototype.doDrilldown = function (b, a, d) {
    var c = this.series.chart,
        e = c.options.drilldown,
        f = (e.series || []).length,
        h;if (!c.ddDupes) c.ddDupes = [];for (; f-- && !h;) {
      e.series[f].id === this.drilldown && y(this.drilldown, c.ddDupes) === -1 && (h = e.series[f], c.ddDupes.push(this.drilldown));
    }s(c, "drilldown", { point: this,
      seriesOptions: h, category: a, originalEvent: d, points: a !== void 0 && this.series.xAxis.ddPoints[a].slice(0) }, function (a) {
      var c = a.point.series && a.point.series.chart,
          d = a.seriesOptions;c && d && (b ? c.addSingleSeriesAsDrilldown(a.point, d) : c.addSeriesAsDrilldown(a.point, d));
    });
  };e.Axis.prototype.drilldownCategory = function (b, a) {
    var d,
        c,
        e = this.ddPoints[b];for (d in e) {
      (c = e[d]) && c.series && c.series.visible && c.doDrilldown && c.doDrilldown(!0, b, a);
    }this.chart.applyDrilldown();
  };e.Axis.prototype.getDDPoints = function (b, a) {
    var d = this.ddPoints;if (!d) this.ddPoints = d = {};d[b] || (d[b] = []);if (d[b].levelNumber !== a) d[b].length = 0;return d[b];
  };x.prototype.drillable = function () {
    var b = this.pos,
        a = this.label,
        d = this.axis,
        c = d.ddPoints && d.ddPoints[b];if (a && c && c.length) {
      if (!a.basicStyles) a.basicStyles = e.merge(a.styles);a.addClass("highcharts-drilldown-axis-label").css(d.chart.options.drilldown.activeAxisLabelStyle).on("click", function (a) {
        d.drilldownCategory(b, a);
      });
    } else if (a && a.basicStyles) a.styles = {}, a.css(a.basicStyles), a.on("click", null);
  };
  r(x.prototype, "addLabel", function (b) {
    b.call(this);this.drillable();
  });r(e.Point.prototype, "init", function (b, a, d, c) {
    var g = b.call(this, a, d, c),
        b = (d = a.xAxis) && d.ticks[c],
        d = d && d.getDDPoints(c, a.options._levelNumber);if (g.drilldown && (e.addEvent(g, "click", function (b) {
      a.xAxis && a.chart.options.drilldown.allowPointDrilldown === !1 ? a.xAxis.drilldownCategory(c, b) : g.doDrilldown(void 0, void 0, b);
    }), d)) d.push(g), d.levelNumber = a.options._levelNumber;b && b.drillable();return g;
  });r(e.Series.prototype, "drawDataLabels", function (b) {
    var a = this,
        d = a.chart.options.drilldown.activeDataLabelStyle,
        c = a.chart.renderer;b.call(a);i(a.points, function (b) {
      var e = {};if (b.drilldown && b.dataLabel) {
        if (d.color === "contrast") e.color = c.getContrast(b.color || a.color);b.dataLabel.attr({ "class": "highcharts-drilldown-data-label" }).css(C(d, e));
      }
    });
  });var t,
      q = function q(b) {
    b.call(this);i(this.points, function (a) {
      a.drilldown && a.graphic && a.graphic.attr({ "class": "highcharts-drilldown-point" }).css({ cursor: "pointer" });
    });
  };for (t in p) {
    p[t].prototype.supportsDrilldown && r(p[t].prototype, "drawTracker", q);
  }
});