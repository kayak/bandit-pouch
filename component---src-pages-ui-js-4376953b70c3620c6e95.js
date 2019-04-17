;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    101: function(e, a, t) {
      'use strict'
      t.d(a, 'c', function() {
        return x
      }),
        t.d(a, 'b', function() {
          return k
        }),
        t.d(a, 'a', function() {
          return R
        })
      var n = t(6),
        r = t.n(n),
        l = t(7),
        o = t.n(l),
        i = t(8),
        u = t.n(i),
        s = t(9),
        c = t.n(s),
        d = t(10),
        p = t.n(d),
        m = t(11),
        f = t.n(m),
        b = t(0),
        h = t.n(b),
        y = t(3),
        g = t.n(y),
        v = t(103),
        E = t.n(v),
        C = t(561),
        T = t(563),
        j = t(564),
        O = t(562),
        w = t(547),
        N = function(e) {
          var a = e.id,
            t = e.pages,
            n = e.examples,
            r = e.defaultActiveKey
          return h.a.createElement(
            C.a.Container,
            { id: a, defaultActiveKey: r },
            h.a.createElement(
              T.a,
              null,
              h.a.createElement(
                j.a,
                { sm: 4, md: 3, lg: 2 },
                h.a.createElement(
                  O.a,
                  { bsStyle: 'pills', stacked: !0 },
                  t.map(function(e) {
                    return h.a.createElement(
                      w.a,
                      { key: e.id, eventKey: e.id },
                      e.title
                    )
                  })
                )
              ),
              h.a.createElement(
                j.a,
                { sm: 8, md: 9, lg: 10 },
                h.a.createElement(
                  C.a.Content,
                  { animation: !0 },
                  t.map(function(e) {
                    return h.a.createElement(
                      C.a.Pane,
                      { key: e.id, eventKey: e.id, title: e.title },
                      h.a.createElement(R, {
                        html: e.html,
                        title: e.title,
                        examples: n[e.id],
                      })
                    )
                  })
                )
              )
            )
          )
        }
      function x() {
        var e = (
            (arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {}) || {}
          ).allMarkdownRemark,
          a = ((void 0 === e ? {} : e) || {}).edges
        return (void 0 === a ? [] : a).map(function(e) {
          var a = e.node
          return f()({ html: a.html }, a.frontmatter)
        })
      }
      function k(e) {
        var a = e.id,
          t = e.defaultActiveKey,
          n = e.data,
          r = e.examples,
          l = x(n)
        return h.a.createElement(N, {
          id: a,
          pages: l,
          examples: r,
          defaultActiveKey: t,
        })
      }
      ;(N.propTypes = {
        id: g.a.string.isRequired,
        pages: g.a.array.isRequired,
        examples: g.a.object,
        defaultActiveKey: g.a.string.isRequired,
      }),
        (N.defaultProps = { examples: {} }),
        (k.propTypes = {
          id: g.a.string.isRequired,
          data: g.a.object.isRequired,
          examples: g.a.object,
          defaultActiveKey: g.a.string.isRequired,
        }),
        (k.defaultProps = { examples: {} })
      var R = (function(e) {
        function a(e) {
          var t
          return (
            r()(this, a),
            ((t = u()(this, c()(a).call(this, e))).element = h.a.createRef()),
            t
          )
        }
        return (
          p()(a, e),
          o()(a, [
            {
              key: 'componentDidMount',
              value: function() {
                this.element.current
                  .querySelectorAll('code')
                  .forEach(function(e) {
                    return E.a.highlightBlock(e)
                  })
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  a = e.title,
                  t = e.html,
                  n = e.examples
                return h.a.createElement(
                  'div',
                  { ref: this.element, className: 'row markdown-container' },
                  h.a.createElement(
                    j.a,
                    { xs: 12 },
                    h.a.createElement('h1', null, a)
                  ),
                  h.a.createElement('hr', null),
                  h.a.createElement(
                    j.a,
                    { xs: 12 },
                    h.a.createElement('div', {
                      className: 'markdown-content',
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    n.map(function(e) {
                      return h.a.createElement('span', { key: e }, e)
                    })
                  )
                )
              },
            },
          ]),
          a
        )
      })(b.Component)
      ;(R.propTypes = {
        title: g.a.string.isRequired,
        html: g.a.string.isRequired,
        examples: g.a.array,
      }),
        (R.defaultProps = { examples: [] })
    },
    120: function(e, a, t) {
      'use strict'
      var n = {}
      t.r(n),
        t.d(n, 'formatTemplate', function() {
          return Ve
        }),
        t.d(n, 'required', function() {
          return Ae
        }),
        t.d(n, 'regex', function() {
          return Me
        }),
        t.d(n, 'url', function() {
          return Ke
        }),
        t.d(n, 'alpha', function() {
          return ze
        }),
        t.d(n, 'containing', function() {
          return We
        }),
        t.d(n, 'excluding', function() {
          return Le
        }),
        t.d(n, 'min', function() {
          return He
        }),
        t.d(n, 'max', function() {
          return Ie
        }),
        t.d(n, 'between', function() {
          return Ye
        })
      t(79)
      var r = t(81),
        l = t.n(r),
        o = t(0),
        i = t.n(o),
        u = t(3),
        s = t.n(u),
        c = t(105),
        d = t.n(c)
      var p = function(e) {
        var a = e.value,
          t = e.options,
          n = e.valueKey,
          r = e.labelKey,
          o = e.multi,
          u = e.async,
          s = e.creatable,
          c = l()(e, [
            'value',
            'options',
            'valueKey',
            'labelKey',
            'multi',
            'async',
            'creatable',
          ]),
          p = (function(e, a) {
            return e
              ? a
                ? d.a.AsyncCreatable
                : d.a.Async
              : a
                ? d.a.Creatable
                : d.a
          })(u, s)
        return i.a.createElement(
          p,
          Object.assign({}, c, {
            multi: o,
            value: a,
            options: t,
            valueKey: n,
            labelKey: r,
          })
        )
      }
      ;(p.propTypes = {
        value: s.a.string,
        valueKey: s.a.string,
        labelKey: s.a.string,
        options: s.a.arrayOf(s.a.any),
        loadOptions: s.a.func,
        creatable: s.a.bool,
        multi: s.a.bool,
        async: s.a.bool,
      }),
        (p.defaultProps = {
          value: null,
          valueKey: 'value',
          labelKey: 'value',
          options: [],
          loadOptions: null,
          creatable: !1,
          async: !1,
          multi: !1,
        })
      var m = p,
        f = t(72),
        b = t.n(f),
        h = t(107),
        y = t.n(h),
        g = (t(91), t(77)),
        v = t.n(g),
        E = t(565),
        C = t(566),
        T = s.a.oneOfType([
          s.a.arrayOf(s.a.node),
          s.a.node,
          s.a.arrayOf(s.a.element),
          s.a.element,
        ]),
        j = function(e) {
          return v.a.noop
        },
        O = function(e) {
          return E.a === v.a.get(e, 'type')
            ? e
            : i.a.createElement(E.a, { id: 'tooltip' }, e)
        },
        w = function(e, a) {
          return i.a.createElement(C.a, { id: 'popover', title: e }, a)
        },
        N = j(),
        x = (j(),
        function(e) {
          var a = e.icon,
            t = e.className,
            n = e.children
          return i.a.createElement(
            'div',
            { className: b()('error-page', t) },
            a && i.a.createElement(y.a, { name: a, size: '4x' }),
            i.a.createElement('h1', { className: 'page-error' }, n)
          )
        })
      ;(x.defaultProps = { icon: null, className: null }),
        (x.propTypes = {
          icon: s.a.string,
          className: s.a.string,
          children: T.isRequired,
        })
      var k = x,
        R = function(e) {
          var a = e.label,
            t = e.type,
            n = e.tooltip,
            r = l()(e, ['label', 'type', 'tooltip'])
          return n
            ? i.a.createElement(
                'abbr',
                Object.assign({}, r, {
                  title: n,
                  style: {
                    borderBottom:
                      '1px dotted ' + ('metric' === t ? '#FFF' : '#777'),
                  },
                }),
                a
              )
            : i.a.createElement('span', r, a)
        }
      ;(R.propTypes = {
        label: s.a.string.isRequired,
        tooltip: s.a.string,
        type: s.a.oneOf(['metric', 'dimension', 'any']),
      }),
        (R.defaultProps = { type: 'any', tooltip: null })
      var S = R,
        P = function() {
          return i.a.createElement(k, null, 'Not found')
        },
        q = t(163),
        V = t.n(q),
        A = function(e) {
          var a = e.type,
            t = e.active
          return t
            ? i.a.createElement(
                'div',
                { className: 'loader-container' },
                i.a.createElement(V.a, { active: t, type: a })
              )
            : null
        }
      ;(A.propTypes = { type: s.a.string, active: s.a.bool }),
        (A.defaultProps = { type: 'ball-scale-ripple-multiple', active: !0 })
      var M = function(e) {
        return i.a.createElement(
          'div',
          {
            style: {
              height: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
          i.a.createElement(A, e)
        )
      }
      ;(M.propTypes = { type: s.a.string, active: s.a.bool }),
        (M.defaultProps = { type: 'ball-scale-ripple-multiple', active: !0 })
      var K = function(e) {
        var a = e.component,
          t = e.loader,
          n = e.loading,
          r = e.error,
          o = e.found,
          u = l()(e, ['component', 'loader', 'loading', 'error', 'found'])
        return n
          ? i.a.createElement(t, null)
          : o
            ? r
              ? i.a.createElement(
                  k,
                  { className: 'text-danger', icon: 'exclamation' },
                  r
                )
              : i.a.createElement(a, u)
            : i.a.createElement(P, null)
      }
      ;(K.propTypes = {
        component: s.a.oneOfType([s.a.element, s.a.func]).isRequired,
        loader: s.a.oneOfType([s.a.element, s.a.func]),
        loading: s.a.bool,
        found: s.a.bool,
        error: s.a.string,
      }),
        (K.defaultProps = { loader: M, loading: !1, error: null, found: !0 })
      var z = K,
        W = t(22),
        L = t.n(W),
        F = t(563),
        B = t(564),
        D = { children: T.isRequired },
        H = (function(e) {
          function a() {
            return e.apply(this, arguments) || this
          }
          L()(a, e)
          var t = a.prototype
          return (
            (t.componentDidMount = function() {
              var e = this.props.title
              document.title = e
            }),
            (t.componentWillReceiveProps = function(e) {
              this.props.title !== e.title && (document.title = e.title)
            }),
            (t.render = function() {
              var e = this.props,
                a = e.style,
                t = e.className,
                n = e.children
              return i.a.createElement('div', { className: t, style: a }, n)
            }),
            a
          )
        })(o.Component)
      ;(H.propTypes = Object.assign({}, D, {
        title: s.a.string,
        style: s.a.object,
        className: s.a.string,
      })),
        (H.defaultProps = { style: null, title: null, className: null })
      var U = function(e) {
        var a = e.style,
          t = e.className,
          n = e.children
        return i.a.createElement(
          'div',
          { className: b()('page-layout-toppanel', t), style: a },
          n
        )
      }
      ;(U.propTypes = Object.assign({}, D, {
        style: s.a.object,
        className: s.a.string,
      })),
        (U.defaultProps = { style: null, className: null })
      var I = function(e) {
        var a = e.style,
          t = e.className,
          n = e.children
        return i.a.createElement(
          F.a,
          {
            className: b()('page-layout-horizontalsplit', t),
            style: Object.assign({}, a, { display: 'flex' }),
          },
          n
        )
      }
      ;(I.propTypes = Object.assign({}, D, {
        style: s.a.object,
        className: s.a.string,
      })),
        (I.defaultProps = Object.assign({}, U.defaultProps))
      var X = function(e) {
        var a = e.style,
          t = e.className,
          n = e.children
        return i.a.createElement(
          'div',
          { className: b()('page-layout-content', t), style: a },
          n
        )
      }
      ;(X.propTypes = Object.assign({}, D, {
        style: s.a.object,
        className: s.a.string,
      })),
        (X.defaultProps = Object.assign({}, U.defaultProps))
      var Y = function(e) {
        var a = e.contentWidthXs,
          t = void 0 === a ? 8 : a,
          n = e.contentWidthSm,
          r = void 0 === n ? 9 : n,
          l = e.style,
          o = e.className,
          u = e.children
        return i.a.createElement(
          B.a,
          {
            xs: 12 - t,
            md: 12 - r,
            className: b()('page-layout-horizontalsplit-left', o),
            style: l,
          },
          u
        )
      }
      ;(Y.propTypes = Object.assign({}, D, {
        style: s.a.object,
        className: s.a.string,
        contentWidthXs: s.a.number,
        contentWidthSm: s.a.number,
      })),
        (Y.defaultProps = Object.assign({}, U.defaultProps))
      var _ = function(e) {
        var a = e.contentWidthXs,
          t = void 0 === a ? 8 : a,
          n = e.contentWidthSm,
          r = void 0 === n ? 9 : n,
          l = e.style,
          o = e.className,
          u = e.children
        return i.a.createElement(
          B.a,
          {
            xs: t,
            md: r,
            className: b()('page-layout-horizontalsplit-right', o),
            style: l,
          },
          u
        )
      }
      ;(_.propTypes = Object.assign({}, D, {
        style: s.a.object,
        className: s.a.string,
        contentWidthXs: s.a.number,
        contentWidthSm: s.a.number,
      })),
        (_.defaultProps = Object.assign({}, Y.defaultProps))
      var J = function(e) {
        var a = e.children
        return i.a.createElement(
          'div',
          { style: { position: 'fixed', bottom: '5em', right: '5em' } },
          a
        )
      }
      J.propTypes = Object.assign({}, D)
      t(92), t(164), t(166)
      var $ = t(575),
        Q = (function(e) {
          function a() {
            return e.apply(this, arguments) || this
          }
          L()(a, e)
          var t = a.prototype
          return (
            (t.componentWillMount = function() {
              var e = this,
                a = this.props.timeout
              a &&
                setTimeout &&
                (this.timeout = setTimeout(function() {
                  return e.dismiss()
                }, 1e3 * a))
            }),
            (t.componentWillUnmount = function() {
              this.clearTimeout()
            }),
            (t.dismiss = function() {
              ;(0, this.props.onClose)(), this.clearTimeout()
            }),
            (t.clearTimeout = (function(e) {
              function a() {
                return e.apply(this, arguments)
              }
              return (
                (a.toString = function() {
                  return e.toString()
                }),
                a
              )
            })(function() {
              clearTimeout && clearTimeout(this.timeout)
            })),
            (t.render = function() {
              var e = this,
                a = this.props,
                t = a.header,
                n = a.errors,
                r = a.message,
                l = a.bsStyle
              return i.a.createElement(
                $.a,
                {
                  bsStyle: l,
                  onDismiss: function() {
                    return e.dismiss()
                  },
                },
                t && i.a.createElement('h4', null, t),
                i.a.createElement('p', null, r),
                i.a.createElement(
                  'ul',
                  null,
                  v.a.map(n, function(e) {
                    return i.a.createElement('li', { key: e }, e)
                  })
                )
              )
            }),
            a
          )
        })(o.Component)
      ;(Q.propTypes = {
        header: s.a.string,
        message: s.a.string.isRequired,
        errors: s.a.arrayOf(s.a.string),
        bsStyle: s.a.oneOf(['success', 'info', 'warning', 'danger']),
        timeout: s.a.number,
        onClose: s.a.func.isRequired,
      }),
        (Q.defaultProps = {
          header: null,
          errors: [],
          timeout: 30,
          bsStyle: 'info',
        })
      var Z = function(e) {
        var a = e.alerts,
          t = e.timeout,
          n = e.clearAlert
        return i.a.createElement(
          'div',
          { id: 'notification-container' },
          v.a.map(a, function(e) {
            var a = e.id,
              r = e.header,
              l = e.message,
              o = e.errors,
              u = e.bsStyle
            return i.a.createElement(Q, {
              key: a,
              header: r,
              message: l,
              errors: o,
              bsStyle: u,
              timeout: t,
              onClose: function() {
                return n(a)
              },
            })
          })
        )
      }
      ;(Z.propTypes = {
        timeout: s.a.number,
        alerts: s.a.arrayOf(
          s.a.shape({
            id: s.a.oneOfType([s.a.string, s.a.number]).isRequired,
            header: s.a.string,
            message: s.a.string.isRequired,
            errors: s.a.arrayOf(s.a.string),
            bsStyle: s.a.oneOf(['success', 'info', 'warning', 'danger']),
          })
        ),
        clearAlert: s.a.func,
      }),
        (Z.defaultProps = {
          alerts: [],
          timeout: 30,
          clearAlert: function() {},
        })
      var G = t(570),
        ee = t(567),
        ae = t(568),
        te = t(569),
        ne = function(e) {
          var a = e.style,
            t = void 0 === a ? {} : a,
            n = e.children,
            r = void 0 === n ? [] : n
          return i.a.createElement(
            'strong',
            { className: 'text-danger', style: t },
            i.a.createElement(y.a, { name: 'warning' }),
            ' ',
            i.a.createElement('span', { className: 'validation-error' }, r)
          )
        }
      ;(ne.propTypes = { style: s.a.object, children: T.isRequired }),
        (ne.defaultProps = { style: null })
      var re = ne
      var le = function(e) {
        var a = e.id,
          t = e.label,
          n = e.help,
          r = e.children,
          l = e.className,
          o = e.meta,
          u = o.touched,
          s = o.error,
          c = (function(e, a) {
            if (e) return v.a.isEmpty(a) ? 'success' : 'error'
          })(u, s),
          d = s && v.a.isString(s) ? s.split('\n') : s
        return i.a.createElement(
          ee.a,
          { controlId: a, className: l, validationState: c },
          t && i.a.createElement(ae.a, null, t),
          r,
          n &&
            i.a.createElement(te.a, null, i.a.createElement('small', null, n)),
          u &&
            !v.a.isEmpty(s) &&
            i.a.createElement(
              re,
              null,
              d.map(function(e, a) {
                return a
                  ? i.a.createElement('div', { key: 'error-' + a }, e)
                  : e
              })
            )
        )
      }
      ;(le.propTypes = {
        id: s.a.any,
        label: s.a.string,
        help: s.a.string,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
        className: s.a.string,
        children: T.isRequired,
      }),
        (le.defaultProps = {
          id: null,
          help: null,
          label: null,
          className: null,
          meta: { touched: !1, error: [] },
        })
      var oe = le,
        ie = function(e) {
          var a = e.input,
            t = e.label,
            n = e.help,
            r = e.meta,
            l = e.disabled
          return i.a.createElement(
            oe,
            { id: a.id, help: n, meta: r },
            i.a.createElement(
              G.a,
              {
                checked: !!a.value,
                disabled: l,
                onChange: function(e) {
                  return a.onChange(e.target.checked)
                },
              },
              t
            )
          )
        }
      ;(ie.propTypes = {
        input: s.a.any.isRequired,
        label: s.a.string,
        help: s.a.string,
        disabled: s.a.bool,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
      }),
        (ie.defaultProps = {
          help: null,
          label: null,
          disabled: !1,
          meta: { touched: !1, error: [] },
        })
      var ue = ie,
        se = t(573),
        ce = function(e) {
          var a = e.input,
            t = e.label,
            n = e.help,
            r = e.meta,
            o = e.onChangeValue,
            u = e.componentClass,
            s = l()(e, [
              'input',
              'label',
              'help',
              'meta',
              'onChangeValue',
              'componentClass',
            ])
          return i.a.createElement(
            oe,
            { id: a.id, label: t, help: n, meta: r },
            i.a.createElement(
              se.a,
              Object.assign({}, a, s, {
                componentClass: u,
                onChange: function(e) {
                  a.onChange(e), o(e)
                },
              })
            ),
            i.a.createElement(se.a.Feedback, null)
          )
        }
      ;(ce.propTypes = {
        input: s.a.any.isRequired,
        label: s.a.string,
        help: s.a.string,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
        componentClass: se.a.propTypes.componentClass,
        onChangeValue: s.a.func,
      }),
        (ce.defaultProps = {
          help: null,
          label: null,
          meta: { touched: !1, error: [] },
          onChangeValue: v.a.noop,
          componentClass: 'input',
        })
      var de = ce,
        pe = function(e) {
          var a = e.input,
            t = e.label,
            n = e.placeholder,
            r = e.help,
            l = e.meta,
            o = e.disabled,
            u = e.onChangeValue
          return i.a.createElement(de, {
            type: 'password',
            input: a,
            label: t,
            help: r,
            meta: l,
            disabled: o,
            placeholder: n,
            onChange: u,
          })
        }
      ;(pe.propTypes = {
        input: s.a.any.isRequired,
        label: s.a.string,
        help: s.a.string,
        onChangeValue: s.a.func,
        disabled: s.a.bool,
        placeholder: s.a.string,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
      }),
        (pe.defaultProps = {
          help: null,
          label: null,
          disabled: !1,
          placeholder: null,
          onChangeValue: v.a.noop,
          meta: { touched: !1, error: [] },
        })
      var me = pe,
        fe = t(169),
        be = t.n(fe),
        he = function(e) {
          var a,
            t = e.input,
            n = e.label,
            r = e.formatLabel,
            l = e.disabled,
            o = e.help,
            u = e.min,
            s = e.max,
            c = e.step,
            d = e.meta,
            p = e.onChangeValue
          return i.a.createElement(
            oe,
            { id: t.id, label: n, help: o, meta: d },
            i.a.createElement(be.a, {
              value: ((a = t.value), v.a.toNumber(a)),
              style: { display: 'block', width: '100%' },
              min: u,
              max: s,
              step: c,
              disabled: l,
              formatLabel: r,
              onChange: function(e) {
                t.onChange(e), p(e)
              },
              onChangeComplete: function(e) {
                return t.onBlur(e)
              },
            })
          )
        }
      ;(he.propTypes = {
        input: s.a.any.isRequired,
        min: s.a.number.isRequired,
        max: s.a.number.isRequired,
        step: s.a.number,
        label: s.a.string,
        formatLabel: s.a.func,
        help: s.a.string,
        disabled: s.a.bool,
        onChangeValue: s.a.func,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
      }),
        (he.defaultProps = {
          step: 1,
          help: null,
          label: null,
          disabled: !1,
          onChangeValue: v.a.noop,
          formatLabel: v.a.identity,
          meta: { touched: !1, error: [] },
        })
      var ye = he,
        ge = function(e) {
          var a = e.input,
            t = e.label,
            n = e.defaultValue,
            r = e.help,
            o = e.meta,
            u = e.options,
            s = e.valueKey,
            c = e.isLoading,
            d = e.clearable,
            p = e.multi,
            f = (e.creatable, e.async, e.onChangeValue),
            b = e.innerRef,
            h = e.onChangeWithValue,
            y = void 0 === h || h,
            g = e.denormalize,
            E = l()(e, [
              'input',
              'label',
              'defaultValue',
              'help',
              'meta',
              'options',
              'valueKey',
              'isLoading',
              'clearable',
              'multi',
              'creatable',
              'async',
              'onChangeValue',
              'innerRef',
              'onChangeWithValue',
              'denormalize',
            ]),
            C = (g ? g(a.value) : a.value) || n
          return i.a.createElement(
            oe,
            { id: a.id, label: t, help: r, meta: o },
            i.a.createElement(
              m,
              Object.assign(
                {
                  value: C,
                  options: u,
                  clearable: d,
                  multi: p,
                  onChange: function(e) {
                    var t = e
                    y && (t = p ? e && v.a.map(e, s) : e && e[s]),
                      a.onChange(t),
                      f(t)
                  },
                  onBlur: function() {
                    return a.onBlur()
                  },
                  onFocus: function() {
                    return a.onFocus()
                  },
                  isLoading: c,
                  ref: b,
                },
                E
              )
            )
          )
        }
      ;(ge.propTypes = {
        input: s.a.any.isRequired,
        label: s.a.string,
        help: s.a.string,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
        valueKey: s.a.string,
        defaultValue: s.a.string,
        options: s.a.arrayOf(s.a.any),
        isLoading: s.a.bool,
        clearable: s.a.bool,
        creatable: s.a.bool,
        async: s.a.bool,
        denormalize: s.a.bool,
        onChangeValue: s.a.func,
        onChangeWithValue: s.a.bool,
      }),
        (ge.defaultProps = {
          help: null,
          label: null,
          meta: { touched: !1, error: [] },
          defaultValue: null,
          valueKey: 'value',
          options: [],
          isLoading: !1,
          clearable: !1,
          creatable: !1,
          async: !1,
          denormalize: !1,
          onChangeValue: function() {},
          onChangeWithValue: !0,
        })
      var ve = ge,
        Ee = function(e) {
          var a = e.input,
            t = e.label,
            n = e.placeholder,
            r = e.min,
            l = e.max,
            o = e.step,
            u = e.disabled,
            s = e.help,
            c = e.meta,
            d = e.onChangeValue
          return i.a.createElement(de, {
            componentClass: 'input',
            type: 'number',
            placeholder: n,
            input: a,
            label: t,
            min: r,
            max: l,
            step: o || 1,
            help: s,
            meta: c,
            disabled: u,
            onChange: d,
          })
        }
      ;(Ee.propTypes = {
        input: s.a.any.isRequired,
        min: s.a.number.isRequired,
        max: s.a.number.isRequired,
        step: s.a.number,
        label: s.a.string,
        help: s.a.string,
        onChangeValue: s.a.func,
        disabled: s.a.bool,
        placeholder: s.a.string,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
      }),
        (Ee.defaultProps = {
          step: 1,
          help: null,
          label: null,
          disabled: !1,
          placeholder: null,
          onChangeValue: v.a.noop,
          meta: { touched: !1, error: [] },
        })
      var Ce = Ee,
        Te = t(571),
        je = t(516),
        Oe = function(e) {
          var a = e.enabled,
            t = e.pristine,
            n = e.submitting,
            r = e.submitFailed,
            l = e.error,
            o = e.valid,
            u = e.reset
          return i.a.createElement(
            F.a,
            null,
            i.a.createElement(
              B.a,
              { xs: 12 },
              i.a.createElement(
                Te.a,
                { className: 'pull-right' },
                i.a.createElement(
                  je.a,
                  {
                    bsStyle: 'warning',
                    bsSize: 'large',
                    disabled: t || n,
                    onClick: u,
                  },
                  'Reset'
                ),
                i.a.createElement(
                  je.a,
                  {
                    bsStyle: 'primary',
                    bsSize: 'large',
                    type: 'submit',
                    disabled: !1 === a || n,
                  },
                  'Submit'
                )
              ),
              l
                ? i.a.createElement(re, null, l)
                : r &&
                  !o &&
                  i.a.createElement(
                    re,
                    null,
                    'The form is invalid. Please fix any errors.'
                  )
            )
          )
        }
      ;(Oe.propTypes = {
        enabled: s.a.bool,
        pristine: s.a.bool,
        submitting: s.a.bool,
        submitFailed: s.a.bool,
        valid: s.a.bool,
        error: s.a.string,
        reset: s.a.func.isRequired,
      }),
        (Oe.defaultProps = {
          enabled: !0,
          pristine: !0,
          submitting: !1,
          submitFailed: !1,
          valid: !0,
          error: null,
        })
      var we = Oe,
        Ne = function(e) {
          var a = e.input,
            t = e.label,
            n = e.placeholder,
            r = e.rows,
            l = e.cols,
            o = e.help,
            u = e.meta,
            s = e.disabled,
            c = e.onChangeValue
          return i.a.createElement(de, {
            input: a,
            label: t,
            help: o,
            meta: u,
            rows: r,
            cols: l,
            disabled: s,
            placeholder: n,
            onChange: c,
            componentClass: 'textarea',
          })
        }
      ;(Ne.propTypes = {
        input: s.a.any.isRequired,
        label: s.a.string,
        help: s.a.string,
        onChangeValue: s.a.func,
        disabled: s.a.bool,
        placeholder: s.a.string,
        cols: s.a.number,
        rows: s.a.number,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
      }),
        (Ne.defaultProps = {
          help: null,
          label: null,
          disabled: !1,
          placeholder: null,
          cols: 6,
          rows: 4,
          onChangeValue: v.a.noop,
          meta: { touched: !1, error: [] },
        })
      var xe = Ne,
        ke = function(e) {
          var a = e.input,
            t = e.label,
            n = e.placeholder,
            r = e.help,
            l = e.meta,
            o = e.disabled,
            u = e.type,
            s = e.onChangeValue
          return i.a.createElement(de, {
            type: u,
            input: a,
            label: t,
            help: r,
            meta: l,
            disabled: o,
            placeholder: n,
            onChange: s,
          })
        }
      ;(ke.propTypes = {
        input: s.a.any.isRequired,
        type: s.a.string,
        label: s.a.string,
        help: s.a.string,
        onChangeValue: s.a.func,
        disabled: s.a.bool,
        placeholder: s.a.string,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
      }),
        (ke.defaultProps = {
          help: null,
          label: null,
          disabled: !1,
          placeholder: null,
          type: 'text',
          onChangeValue: v.a.noop,
          meta: { touched: !1, error: [] },
        })
      var Re = ke,
        Se = (t(171), t(172), t(173), t(174), t(175), t(176), /{(\d+)}/g),
        Pe = /^[a-zA-Z\s+\-_]*$/,
        qe = new RegExp(
          '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$',
          'i'
        ),
        Ve = function(e, a) {
          return e.replace(Se, function(e, t) {
            return v.a.isUndefined(a[t]) ? e : a[t]
          })
        },
        Ae = function(e) {
          return (
            void 0 === e && (e = 'Required'),
            function(a) {
              return v.a.isNull(a) ||
                v.a.isUndefined(a) ||
                (v.a.isString(a) && !a.trim())
                ? e
                : (v.a.isArray(a) || v.a.isObject(a)) && v.a.isEmpty(a)
                  ? e
                  : void 0
            }
          )
        },
        Me = function(e, a) {
          return (
            void 0 === a && (a = 'Must match the pattern {0}'),
            N(v.a.isRegExp(e), 'Pattern arg must be a regex'),
            function(t) {
              if (!v.a.isNull(t) && !v.a.isUndefined(t))
                return v.a.isString(t) && t.match(e) ? void 0 : Ve(a, [e])
            }
          )
        },
        Ke = function(e) {
          return (
            void 0 === e &&
              (e = 'May contain only letters, numbers, dashes and underscores'),
            Me(qe, e)
          )
        },
        ze = function(e) {
          return (
            void 0 === e &&
              (e = 'May contain only letters, underscores, dashes and spaces'),
            Me(Pe, e)
          )
        },
        We = function(e) {
          return (
            void 0 === e && (e = []),
            function(a) {
              if (!v.a.includes(e, a))
                return (
                  'The following values are allowed: [' +
                  v.a.join(e, ', ') +
                  ']'
                )
            }
          )
        },
        Le = function(e) {
          return (
            void 0 === e && (e = []),
            function(a) {
              if (v.a.includes(e, a))
                return (
                  'The following values are not allowed: [' +
                  v.a.join(e, ', ') +
                  ']'
                )
            }
          )
        }
      function Fe(e) {
        return v.a.isInteger(e) && e >= 0
      }
      var Be = function(e, a) {
          return function(t) {
            if (!v.a.isNull(t) && !v.a.isUndefined(t)) {
              var n = (function(e) {
                switch (typeof e) {
                  case 'number':
                    return e
                  case 'string':
                    var a = v.a.toNumber(e)
                    return v.a.isNaN(a) ? e.length : e
                  case 'object':
                    if (v.a.isNull(e)) return
                    return v.a.size(e)
                  case 'boolean':
                    return
                  default:
                    throw new Error(
                      "Could not get length from value: '" + e + "'."
                    )
                }
              })(t)
              return v.a.isUndefined(n) || !e(n) ? a(t) : void 0
            }
          }
        },
        De = {
          number: 'Must be at least {0}',
          string: 'Must contain at least {0} characters',
          object: 'Must contain at least {0} items',
        },
        He = function(e, a) {
          return (
            N(Fe(e), 'Limit arg must be a positive whole number'),
            Be(
              function(a) {
                return e <= a
              },
              function(t) {
                return Ve(a || De[typeof t], [e])
              }
            )
          )
        },
        Ue = {
          number: 'Must be at most {0}',
          string: 'Must contain at most {0} characters',
          object: 'Must contain at most {0} items',
        },
        Ie = function(e, a) {
          return (
            N(Fe(e), 'Limit arg must be a positive whole number'),
            Be(
              function(a) {
                return e >= a
              },
              function(t) {
                return Ve(a || Ue[typeof t], [e])
              }
            )
          )
        },
        Xe = {
          number: 'Must be between {0} and {1}',
          string: 'Must contain between {0} and {1} characters',
          object: 'Must contain between {0} and {1} items',
        },
        Ye = function(e, a, t) {
          return (
            N(Fe(e), 'Min arg must be a positive whole number'),
            N(Fe(a), 'Max arg must be a positive whole number'),
            N(e < a, 'Min arg can not be larger than max arg'),
            Be(
              function(t) {
                return e <= t && a >= t
              },
              function(n) {
                return Ve(t || Xe[typeof n], [e, a])
              }
            )
          )
        }
      t(177), t(574)
      t(178), t(134)
      var _e = t(180)
      new (t.n(_e)).a()
      t.d(a, 'k', function() {
        return H
      }),
        t.d(a, 'g', function() {
          return Y
        }),
        t.d(a, 'o', function() {
          return _
        }),
        t.d(a, 'h', function() {
          return A
        }),
        t.d(a, 'd', function() {
          return X
        }),
        t.d(a, 'u', function() {
          return U
        }),
        t.d(a, 'e', function() {
          return k
        }),
        t.d(a, 'l', function() {
          return P
        }),
        t.d(a, 'a', function() {
          return S
        }),
        t.d(a, 'i', function() {
          return z
        }),
        t.d(a, 'b', function() {
          return M
        }),
        t.d(a, 'f', function() {
          return I
        }),
        t.d(a, 'j', function() {
          return Z
        }),
        t.d(a, 'c', function() {
          return ue
        }),
        t.d(a, 'm', function() {
          return me
        }),
        t.d(a, 'n', function() {
          return ye
        }),
        t.d(a, 'p', function() {
          return ve
        }),
        t.d(a, 'q', function() {
          return Ce
        }),
        t.d(a, 'r', function() {
          return we
        }),
        t.d(a, 's', function() {
          return xe
        }),
        t.d(a, 't', function() {
          return Re
        }),
        t.d(a, 'v', function() {
          return n
        }),
        t.d(a, 'w', function() {
          return w
        }),
        t.d(a, 'x', function() {
          return O
        })
    },
    69: function(e, a, t) {
      'use strict'
      t.r(a)
      var n = t(11),
        r = t.n(n),
        l = t(28),
        o = t.n(l),
        i = t(6),
        u = t.n(i),
        s = t(7),
        c = t.n(s),
        d = t(8),
        p = t.n(d),
        m = t(9),
        f = t.n(m),
        b = t(10),
        h = t.n(b),
        y = t(0),
        g = t.n(y),
        v = t(124),
        E = t.n(v),
        C = t(3),
        T = t.n(C),
        j = t(562),
        O = t(547),
        w = t(74),
        N = t(75),
        x = t(73),
        k = t(72),
        R = t.n(k),
        S = t(82),
        P = t.n(S),
        q = t(78),
        V = { componentClass: P.a },
        A = (function(e) {
          function a() {
            return e.apply(this, arguments) || this
          }
          return (
            Object(x.a)(a, e),
            (a.prototype.render = function() {
              var e = this.props,
                a = e.componentClass,
                t = e.className,
                n = Object(N.a)(e, ['componentClass', 'className']),
                r = Object(q.f)(n),
                l = r[0],
                o = r[1],
                i = Object(q.d)(l)
              return g.a.createElement(
                a,
                Object(w.a)({}, o, { className: R()(t, i) })
              )
            }),
            a
          )
        })(g.a.Component)
      ;(A.propTypes = V), (A.defaultProps = { componentClass: 'div' })
      var M = Object(q.a)('jumbotron', A),
        K = t(516),
        z = t(199),
        W = t.n(z),
        L = {
          vertical: T.a.bool,
          justified: T.a.bool,
          block: W()(T.a.bool, function(e) {
            var a = e.block,
              t = e.vertical
            return a && !t
              ? new Error(
                  '`block` requires `vertical` to be set to have any effect'
                )
              : null
          }),
        },
        F = (function(e) {
          function a() {
            return e.apply(this, arguments) || this
          }
          return (
            Object(x.a)(a, e),
            (a.prototype.render = function() {
              var e,
                a = this.props,
                t = a.block,
                n = a.justified,
                r = a.vertical,
                l = a.className,
                o = Object(N.a)(a, [
                  'block',
                  'justified',
                  'vertical',
                  'className',
                ]),
                i = Object(q.f)(o),
                u = i[0],
                s = i[1],
                c = Object(w.a)(
                  {},
                  Object(q.d)(u),
                  (((e = {})[Object(q.e)(u)] = !r),
                  (e[Object(q.e)(u, 'vertical')] = r),
                  (e[Object(q.e)(u, 'justified')] = n),
                  (e[Object(q.e)(K.a.defaultProps, 'block')] = t),
                  e)
                )
              return g.a.createElement(
                'div',
                Object(w.a)({}, s, { className: R()(l, c) })
              )
            }),
            a
          )
        })(g.a.Component)
      ;(F.propTypes = L),
        (F.defaultProps = { block: !1, justified: !1, vertical: !1 })
      var B = Object(q.a)('btn-group', F),
        D = t(563),
        H = t(564),
        U = t(120),
        I = t(93),
        X = t(101)
      t.d(a, 'pageQuery', function() {
        return ae
      })
      var Y = function() {
          var e = E()().subtract(3, 'm')
          return g.a.createElement(
            'div',
            null,
            g.a.createElement(
              'p',
              null,
              'This example was shown  ',
              g.a.createElement(U.a, {
                label: e.fromNow(),
                tooltip: e.format('YYYY-MM-DD H:mm:ss'),
              })
            )
          )
        },
        _ = function() {
          return g.a.createElement(
            'div',
            null,
            g.a.createElement(
              'p',
              null,
              'Simple loader wrapper inside a `div` container'
            ),
            g.a.createElement(
              'div',
              { style: { padding: '20px' } },
              g.a.createElement(U.h, { type: 'ball-spin-fade-loader' })
            ),
            g.a.createElement('br', null),
            g.a.createElement(
              'p',
              null,
              'Vertically and Horizontally centered loader'
            ),
            g.a.createElement(U.b, { type: 'line-scale-pulse-out' })
          )
        },
        J = function() {
          return g.a.createElement(
            U.k,
            { title: 'My awesome app' },
            g.a.createElement(
              U.u,
              null,
              g.a.createElement('h1', null, 'My awesome app')
            ),
            g.a.createElement(
              U.f,
              null,
              g.a.createElement(
                U.g,
                null,
                g.a.createElement(
                  j.a,
                  { bsStyle: 'pills', stacked: !0 },
                  g.a.createElement(O.a, { href: '#' }, 'Home'),
                  g.a.createElement(O.a, { href: '#' }, 'Orders')
                )
              ),
              g.a.createElement(
                U.o,
                null,
                g.a.createElement(
                  U.d,
                  null,
                  g.a.createElement(
                    M,
                    null,
                    g.a.createElement('h3', null, 'Hello, contents!'),
                    g.a.createElement(
                      'p',
                      null,
                      'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.'
                    ),
                    g.a.createElement(
                      'p',
                      null,
                      g.a.createElement(
                        K.a,
                        { bsStyle: 'primary' },
                        'Learn more'
                      )
                    )
                  )
                )
              )
            )
          )
        },
        $ = function(e) {
          var a = e.model
          return g.a.createElement(
            'div',
            null,
            g.a.createElement('h1', null, 'List page'),
            g.a.createElement(
              'ul',
              null,
              a.map(function(e) {
                var a = e.id,
                  t = e.title
                return g.a.createElement(
                  'li',
                  { key: a },
                  g.a.createElement('p', null, t)
                )
              })
            )
          )
        }
      ;($.propTypes = { model: T.a.array.isRequired }),
        ($.mocks = [
          { id: 1, title: 'Foo' },
          { id: 2, title: 'Bar' },
          { id: 3, title: 'Baz' },
        ])
      var Q = (function(e) {
          function a() {
            var e, t
            u()(this, a)
            for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
              r[l] = arguments[l]
            return (
              ((t = p()(
                this,
                (e = f()(a)).call.apply(e, [this].concat(r))
              )).state = {
                error: null,
                found: !0,
                loading: !1,
                model: o()($.mocks),
              }),
              t
            )
          }
          return (
            h()(a, e),
            c()(a, [
              {
                key: 'fetch',
                value: function() {
                  var e = this,
                    a =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                  this.setState(
                    { error: null, found: !0, loading: !0, model: [] },
                    function() {
                      return setTimeout(function() {
                        e.setState(function(e) {
                          return r()({}, e, a, { loading: !1 })
                        })
                      }, 2e3)
                    }
                  )
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    a = this.state,
                    t = a.loading,
                    n = a.error,
                    r = a.found,
                    l = a.model
                  return g.a.createElement(
                    'div',
                    { style: { minHeight: '460px' } },
                    g.a.createElement(
                      B,
                      null,
                      g.a.createElement(
                        K.a,
                        {
                          onClick: function() {
                            return e.fetch({ model: o()($.mocks) })
                          },
                        },
                        'Fetch data'
                      ),
                      g.a.createElement(
                        K.a,
                        {
                          onClick: function() {
                            return e.fetch({ error: 'Remote server error' })
                          },
                        },
                        'Fetch data with an error'
                      ),
                      g.a.createElement(
                        K.a,
                        {
                          onClick: function() {
                            return e.fetch({ found: !1 })
                          },
                        },
                        'Fetch data with a not find status'
                      )
                    ),
                    g.a.createElement(U.i, {
                      component: $,
                      loading: t,
                      found: r,
                      error: n,
                      model: l,
                    })
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component),
        Z = function() {
          return g.a.createElement(
            D.a,
            null,
            g.a.createElement(
              H.a,
              { xs: 12 },
              g.a.createElement(
                U.e,
                { icon: 'exclamation', className: 'text-danger' },
                g.a.createElement('p', null, 'An error message')
              )
            ),
            g.a.createElement(H.a, { xs: 12 }, g.a.createElement(U.l, null))
          )
        },
        G = (function(e) {
          function a(e) {
            var t
            return (
              u()(this, a),
              ((t = p()(this, f()(a).call(this, e))).props = e),
              (t.state = { alerts: [] }),
              t
            )
          }
          return (
            h()(a, e),
            c()(a, [
              {
                key: 'onAddAlert',
                value: function(e, a) {
                  this.setState(function(t) {
                    return {
                      alerts: o()(t.alerts).concat([
                        { id: Date.now(), bsStyle: e, message: a },
                      ]),
                    }
                  })
                },
              },
              {
                key: 'onClearAlert',
                value: function(e) {
                  this.setState(function(a) {
                    return {
                      alerts: a.alerts.filter(function(a) {
                        return a.id !== e
                      }),
                    }
                  })
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this,
                    a = this.state.alerts,
                    t = void 0 === a ? [] : a
                  return g.a.createElement(
                    'div',
                    null,
                    g.a.createElement(
                      'p',
                      null,
                      'Click the buttons bellow to create alerts'
                    ),
                    g.a.createElement(
                      B,
                      null,
                      g.a.createElement(
                        K.a,
                        {
                          bsStyle: 'info',
                          onClick: function() {
                            return e.onAddAlert('info', 'Info message')
                          },
                        },
                        'Show info alert'
                      ),
                      g.a.createElement(
                        K.a,
                        {
                          bsStyle: 'warning',
                          onClick: function() {
                            return e.onAddAlert('warning', 'Warning message')
                          },
                        },
                        'Show warning alert'
                      ),
                      g.a.createElement(
                        K.a,
                        {
                          bsStyle: 'danger',
                          onClick: function() {
                            return e.onAddAlert('danger', 'Danger message')
                          },
                        },
                        'Show danger alert'
                      )
                    ),
                    g.a.createElement(U.j, {
                      timeout: 4,
                      alerts: t,
                      clearAlert: function(a) {
                        return e.onClearAlert(a)
                      },
                    })
                  )
                },
              },
            ]),
            a
          )
        })(g.a.Component),
        ee = function(e) {
          var a = e.data
          return g.a.createElement(
            I.a,
            null,
            g.a.createElement(X.b, {
              id: 'ui-tabs',
              data: a,
              examples: {
                'ui-pages': [g.a.createElement(Z, null)],
                'ui-layout': [g.a.createElement(J, null)],
                'ui-loaders': [g.a.createElement(_, null)],
                'ui-abbreviation': [g.a.createElement(Y, null)],
                'ui-notifications': [g.a.createElement(G, null)],
                'ui-loading-wrapper': [g.a.createElement(Q, null)],
              },
              defaultActiveKey: 'ui-layout',
            })
          )
        }
      ee.propTypes = { data: T.a.object.isRequired }
      var ae = '1514183883'
      a.default = ee
    },
  },
])
//# sourceMappingURL=component---src-pages-ui-js-4376953b70c3620c6e95.js.map
