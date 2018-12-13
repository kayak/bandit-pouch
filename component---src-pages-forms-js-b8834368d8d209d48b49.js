;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8, 2],
  {
    101: function(e, a, t) {
      'use strict'
      t.d(a, 'c', function() {
        return j
      }),
        t.d(a, 'b', function() {
          return N
        }),
        t.d(a, 'a', function() {
          return O
        })
      var n = t(6),
        r = t.n(n),
        l = t(7),
        i = t.n(l),
        o = t(8),
        u = t.n(o),
        s = t(9),
        c = t.n(s),
        d = t(10),
        p = t.n(d),
        m = t(11),
        f = t.n(m),
        h = t(0),
        b = t.n(h),
        g = t(3),
        y = t.n(g),
        v = t(103),
        E = t.n(v),
        x = t(561),
        T = t(563),
        C = t(564),
        w = t(562),
        q = t(547),
        R = function(e) {
          var a = e.id,
            t = e.pages,
            n = e.examples,
            r = e.defaultActiveKey
          return b.a.createElement(
            x.a.Container,
            { id: a, defaultActiveKey: r },
            b.a.createElement(
              T.a,
              null,
              b.a.createElement(
                C.a,
                { sm: 4, md: 3, lg: 2 },
                b.a.createElement(
                  w.a,
                  { bsStyle: 'pills', stacked: !0 },
                  t.map(function(e) {
                    return b.a.createElement(
                      q.a,
                      { key: e.id, eventKey: e.id },
                      e.title
                    )
                  })
                )
              ),
              b.a.createElement(
                C.a,
                { sm: 8, md: 9, lg: 10 },
                b.a.createElement(
                  x.a.Content,
                  { animation: !0 },
                  t.map(function(e) {
                    return b.a.createElement(
                      x.a.Pane,
                      { key: e.id, eventKey: e.id, title: e.title },
                      b.a.createElement(O, {
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
      function j() {
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
      function N(e) {
        var a = e.id,
          t = e.defaultActiveKey,
          n = e.data,
          r = e.examples,
          l = j(n)
        return b.a.createElement(R, {
          id: a,
          pages: l,
          examples: r,
          defaultActiveKey: t,
        })
      }
      ;(R.propTypes = {
        id: y.a.string.isRequired,
        pages: y.a.array.isRequired,
        examples: y.a.object,
        defaultActiveKey: y.a.string.isRequired,
      }),
        (R.defaultProps = { examples: {} }),
        (N.propTypes = {
          id: y.a.string.isRequired,
          data: y.a.object.isRequired,
          examples: y.a.object,
          defaultActiveKey: y.a.string.isRequired,
        }),
        (N.defaultProps = { examples: {} })
      var O = (function(e) {
        function a(e) {
          var t
          return (
            r()(this, a),
            ((t = u()(this, c()(a).call(this, e))).element = b.a.createRef()),
            t
          )
        }
        return (
          p()(a, e),
          i()(a, [
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
                return b.a.createElement(
                  'div',
                  { ref: this.element, className: 'row markdown-container' },
                  b.a.createElement(
                    C.a,
                    { xs: 12 },
                    b.a.createElement('h1', null, a)
                  ),
                  b.a.createElement('hr', null),
                  b.a.createElement(
                    C.a,
                    { xs: 12 },
                    b.a.createElement('div', {
                      className: 'markdown-content',
                      dangerouslySetInnerHTML: { __html: t },
                    }),
                    n.map(function(e) {
                      return b.a.createElement('span', { key: e }, e)
                    })
                  )
                )
              },
            },
          ]),
          a
        )
      })(h.Component)
      ;(O.propTypes = {
        title: y.a.string.isRequired,
        html: y.a.string.isRequired,
        examples: y.a.array,
      }),
        (O.defaultProps = { examples: [] })
    },
    109: function(e, a, t) {
      'use strict'
      t.r(a)
      var n = t(11),
        r = t.n(n),
        l = t(0),
        i = t.n(l),
        o = t(3),
        u = t.n(o),
        s = t(26),
        c = t(2),
        d = function(e) {
          var a = e.location,
            t = c.default.getResourcesForPathnameSync(a.pathname)
          return i.a.createElement(
            s.a,
            r()({ location: a, pageResources: t }, t.json)
          )
        }
      ;(d.propTypes = {
        location: u.a.shape({ pathname: u.a.string.isRequired }).isRequired,
      }),
        (a.default = d)
    },
    110: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title: 'Bandit Pouch',
              description: 'Common React components and utilities',
              library: { name: 'bandit-pouch', version: '0.0.9' },
            },
          },
        },
      }
    },
    114: function(e, a, t) {},
    115: function(e, a, t) {},
    120: function(e, a, t) {
      'use strict'
      var n = {}
      t.r(n),
        t.d(n, 'formatTemplate', function() {
          return Ve
        }),
        t.d(n, 'required', function() {
          return Ke
        }),
        t.d(n, 'regex', function() {
          return Me
        }),
        t.d(n, 'url', function() {
          return Ae
        }),
        t.d(n, 'alpha', function() {
          return Le
        }),
        t.d(n, 'containing', function() {
          return ze
        }),
        t.d(n, 'excluding', function() {
          return Fe
        }),
        t.d(n, 'min', function() {
          return Ie
        }),
        t.d(n, 'max', function() {
          return Ge
        }),
        t.d(n, 'between', function() {
          return Ye
        })
      t(79)
      var r = t(81),
        l = t.n(r),
        i = t(0),
        o = t.n(i),
        u = t(3),
        s = t.n(u),
        c = t(105),
        d = t.n(c)
      var p = function(e) {
        var a = e.value,
          t = e.options,
          n = e.valueKey,
          r = e.labelKey,
          i = e.multi,
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
        return o.a.createElement(
          p,
          Object.assign({}, c, {
            multi: i,
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
        h = t.n(f),
        b = t(107),
        g = t.n(b),
        y = (t(91), t(77)),
        v = t.n(y),
        E = t(565),
        x = t(566),
        T = s.a.oneOfType([
          s.a.arrayOf(s.a.node),
          s.a.node,
          s.a.arrayOf(s.a.element),
          s.a.element,
        ]),
        C = function(e) {
          return v.a.noop
        },
        w = function(e) {
          return E.a === v.a.get(e, 'type')
            ? e
            : o.a.createElement(E.a, { id: 'tooltip' }, e)
        },
        q = function(e, a) {
          return o.a.createElement(x.a, { id: 'popover', title: e }, a)
        },
        R = C(),
        j = (C(),
        function(e) {
          var a = e.icon,
            t = e.className,
            n = e.children
          return o.a.createElement(
            'div',
            { className: h()('error-page', t) },
            a && o.a.createElement(g.a, { name: a, size: '4x' }),
            o.a.createElement('h1', { className: 'page-error' }, n)
          )
        })
      ;(j.defaultProps = { icon: null, className: null }),
        (j.propTypes = {
          icon: s.a.string,
          className: s.a.string,
          children: T.isRequired,
        })
      var N = j,
        O = function(e) {
          var a = e.label,
            t = e.type,
            n = e.tooltip,
            r = l()(e, ['label', 'type', 'tooltip'])
          return n
            ? o.a.createElement(
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
            : o.a.createElement('span', r, a)
        }
      ;(O.propTypes = {
        label: s.a.string.isRequired,
        tooltip: s.a.string,
        type: s.a.oneOf(['metric', 'dimension', 'any']),
      }),
        (O.defaultProps = { type: 'any', tooltip: null })
      var k = O,
        P = function() {
          return o.a.createElement(N, null, 'Not found')
        },
        S = t(163),
        V = t.n(S),
        K = function(e) {
          var a = e.type,
            t = e.active
          return t
            ? o.a.createElement(
                'div',
                { className: 'loader-container' },
                o.a.createElement(V.a, { active: t, type: a })
              )
            : null
        }
      ;(K.propTypes = { type: s.a.string, active: s.a.bool }),
        (K.defaultProps = { type: 'ball-scale-ripple-multiple', active: !0 })
      var M = function(e) {
        return o.a.createElement(
          'div',
          {
            style: {
              height: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
          o.a.createElement(K, e)
        )
      }
      ;(M.propTypes = { type: s.a.string, active: s.a.bool }),
        (M.defaultProps = { type: 'ball-scale-ripple-multiple', active: !0 })
      var A = function(e) {
        var a = e.component,
          t = e.loader,
          n = e.loading,
          r = e.error,
          i = e.found,
          u = l()(e, ['component', 'loader', 'loading', 'error', 'found'])
        return n
          ? o.a.createElement(t, null)
          : i
            ? r
              ? o.a.createElement(
                  N,
                  { className: 'text-danger', icon: 'exclamation' },
                  r
                )
              : o.a.createElement(a, u)
            : o.a.createElement(P, null)
      }
      ;(A.propTypes = {
        component: s.a.oneOfType([s.a.element, s.a.func]).isRequired,
        loader: s.a.oneOfType([s.a.element, s.a.func]),
        loading: s.a.bool,
        found: s.a.bool,
        error: s.a.string,
      }),
        (A.defaultProps = { loader: M, loading: !1, error: null, found: !0 })
      var L = A,
        z = t(22),
        F = t.n(z),
        W = t(563),
        U = t(564),
        B = { children: T.isRequired },
        I = (function(e) {
          function a() {
            return e.apply(this, arguments) || this
          }
          F()(a, e)
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
              return o.a.createElement('div', { className: t, style: a }, n)
            }),
            a
          )
        })(i.Component)
      ;(I.propTypes = Object.assign({}, B, {
        title: s.a.string,
        style: s.a.object,
        className: s.a.string,
      })),
        (I.defaultProps = { style: null, title: null, className: null })
      var D = function(e) {
        var a = e.style,
          t = e.className,
          n = e.children
        return o.a.createElement(
          'div',
          { className: h()('page-layout-toppanel', t), style: a },
          n
        )
      }
      ;(D.propTypes = Object.assign({}, B, {
        style: s.a.object,
        className: s.a.string,
      })),
        (D.defaultProps = { style: null, className: null })
      var G = function(e) {
        var a = e.style,
          t = e.className,
          n = e.children
        return o.a.createElement(
          W.a,
          {
            className: h()('page-layout-horizontalsplit', t),
            style: Object.assign({}, a, { display: 'flex' }),
          },
          n
        )
      }
      ;(G.propTypes = Object.assign({}, B, {
        style: s.a.object,
        className: s.a.string,
      })),
        (G.defaultProps = Object.assign({}, D.defaultProps))
      var Q = function(e) {
        var a = e.style,
          t = e.className,
          n = e.children
        return o.a.createElement(
          'div',
          { className: h()('page-layout-content', t), style: a },
          n
        )
      }
      ;(Q.propTypes = Object.assign({}, B, {
        style: s.a.object,
        className: s.a.string,
      })),
        (Q.defaultProps = Object.assign({}, D.defaultProps))
      var Y = function(e) {
        var a = e.contentWidthXs,
          t = void 0 === a ? 8 : a,
          n = e.contentWidthSm,
          r = void 0 === n ? 9 : n,
          l = e.style,
          i = e.className,
          u = e.children
        return o.a.createElement(
          U.a,
          {
            xs: 12 - t,
            md: 12 - r,
            className: h()('page-layout-horizontalsplit-left', i),
            style: l,
          },
          u
        )
      }
      ;(Y.propTypes = Object.assign({}, B, {
        style: s.a.object,
        className: s.a.string,
        contentWidthXs: s.a.number,
        contentWidthSm: s.a.number,
      })),
        (Y.defaultProps = Object.assign({}, D.defaultProps))
      var H = function(e) {
        var a = e.contentWidthXs,
          t = void 0 === a ? 8 : a,
          n = e.contentWidthSm,
          r = void 0 === n ? 9 : n,
          l = e.style,
          i = e.className,
          u = e.children
        return o.a.createElement(
          U.a,
          {
            xs: t,
            md: r,
            className: h()('page-layout-horizontalsplit-right', i),
            style: l,
          },
          u
        )
      }
      ;(H.propTypes = Object.assign({}, B, {
        style: s.a.object,
        className: s.a.string,
        contentWidthXs: s.a.number,
        contentWidthSm: s.a.number,
      })),
        (H.defaultProps = Object.assign({}, Y.defaultProps))
      var X = function(e) {
        var a = e.children
        return o.a.createElement(
          'div',
          { style: { position: 'fixed', bottom: '5em', right: '5em' } },
          a
        )
      }
      X.propTypes = Object.assign({}, B)
      t(92), t(164), t(166)
      var _ = t(575),
        J = (function(e) {
          function a() {
            return e.apply(this, arguments) || this
          }
          F()(a, e)
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
              return o.a.createElement(
                _.a,
                {
                  bsStyle: l,
                  onDismiss: function() {
                    return e.dismiss()
                  },
                },
                t && o.a.createElement('h4', null, t),
                o.a.createElement('p', null, r),
                o.a.createElement(
                  'ul',
                  null,
                  v.a.map(n, function(e) {
                    return o.a.createElement('li', { key: e }, e)
                  })
                )
              )
            }),
            a
          )
        })(i.Component)
      ;(J.propTypes = {
        header: s.a.string,
        message: s.a.string.isRequired,
        errors: s.a.arrayOf(s.a.string),
        bsStyle: s.a.oneOf(['success', 'info', 'warning', 'danger']),
        timeout: s.a.number,
        onClose: s.a.func.isRequired,
      }),
        (J.defaultProps = {
          header: null,
          errors: [],
          timeout: 30,
          bsStyle: 'info',
        })
      var Z = function(e) {
        var a = e.alerts,
          t = e.timeout,
          n = e.clearAlert
        return o.a.createElement(
          'div',
          { id: 'notification-container' },
          v.a.map(a, function(e) {
            var a = e.id,
              r = e.header,
              l = e.message,
              i = e.errors,
              u = e.bsStyle
            return o.a.createElement(J, {
              key: a,
              header: r,
              message: l,
              errors: i,
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
      var $ = t(570),
        ee = t(567),
        ae = t(568),
        te = t(569),
        ne = function(e) {
          var a = e.style,
            t = void 0 === a ? {} : a,
            n = e.children,
            r = void 0 === n ? [] : n
          return o.a.createElement(
            'strong',
            { className: 'text-danger', style: t },
            o.a.createElement(g.a, { name: 'warning' }),
            ' ',
            o.a.createElement('span', { className: 'validation-error' }, r)
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
          i = e.meta,
          u = i.touched,
          s = i.error,
          c = (function(e, a) {
            if (e) return v.a.isEmpty(a) ? 'success' : 'error'
          })(u, s),
          d = s && v.a.isString(s) ? s.split('\n') : s
        return o.a.createElement(
          ee.a,
          { controlId: a, className: l, validationState: c },
          t && o.a.createElement(ae.a, null, t),
          r,
          n &&
            o.a.createElement(te.a, null, o.a.createElement('small', null, n)),
          u &&
            !v.a.isEmpty(s) &&
            o.a.createElement(
              re,
              null,
              d.map(function(e, a) {
                return a
                  ? o.a.createElement('div', { key: 'error-' + a }, e)
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
      var ie = le,
        oe = function(e) {
          var a = e.input,
            t = e.label,
            n = e.help,
            r = e.meta,
            l = e.disabled
          return o.a.createElement(
            ie,
            { id: a.id, help: n, meta: r },
            o.a.createElement(
              $.a,
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
      ;(oe.propTypes = {
        input: s.a.any.isRequired,
        label: s.a.string,
        help: s.a.string,
        disabled: s.a.bool,
        meta: s.a.shape({
          touched: s.a.bool,
          error: s.a.oneOfType([s.a.string, s.a.array]),
        }),
      }),
        (oe.defaultProps = {
          help: null,
          label: null,
          disabled: !1,
          meta: { touched: !1, error: [] },
        })
      var ue = oe,
        se = t(573),
        ce = function(e) {
          var a = e.input,
            t = e.label,
            n = e.help,
            r = e.meta,
            i = e.onChangeValue,
            u = e.componentClass,
            s = l()(e, [
              'input',
              'label',
              'help',
              'meta',
              'onChangeValue',
              'componentClass',
            ])
          return o.a.createElement(
            ie,
            { id: a.id, label: t, help: n, meta: r },
            o.a.createElement(
              se.a,
              Object.assign({}, a, s, {
                componentClass: u,
                onChange: function(e) {
                  a.onChange(e), i(e)
                },
              })
            ),
            o.a.createElement(se.a.Feedback, null)
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
            i = e.disabled,
            u = e.onChangeValue
          return o.a.createElement(de, {
            type: 'password',
            input: a,
            label: t,
            help: r,
            meta: l,
            disabled: i,
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
        he = t.n(fe),
        be = function(e) {
          var a,
            t = e.input,
            n = e.label,
            r = e.formatLabel,
            l = e.disabled,
            i = e.help,
            u = e.min,
            s = e.max,
            c = e.step,
            d = e.meta,
            p = e.onChangeValue
          return o.a.createElement(
            ie,
            { id: t.id, label: n, help: i, meta: d },
            o.a.createElement(he.a, {
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
      ;(be.propTypes = {
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
        (be.defaultProps = {
          step: 1,
          help: null,
          label: null,
          disabled: !1,
          onChangeValue: v.a.noop,
          formatLabel: v.a.identity,
          meta: { touched: !1, error: [] },
        })
      var ge = be,
        ye = function(e) {
          var a = e.input,
            t = e.label,
            n = e.defaultValue,
            r = e.help,
            i = e.meta,
            u = e.options,
            s = e.valueKey,
            c = e.isLoading,
            d = e.clearable,
            p = e.multi,
            f = (e.creatable, e.async, e.onChangeValue),
            h = e.innerRef,
            b = e.onChangeWithValue,
            g = void 0 === b || b,
            y = e.denormalize,
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
            x = (y ? y(a.value) : a.value) || n
          return o.a.createElement(
            ie,
            { id: a.id, label: t, help: r, meta: i },
            o.a.createElement(
              m,
              Object.assign(
                {
                  value: x,
                  options: u,
                  clearable: d,
                  multi: p,
                  onChange: function(e) {
                    var t = e
                    g && (t = p ? e && v.a.map(e, s) : e && e[s]),
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
                  ref: h,
                },
                E
              )
            )
          )
        }
      ;(ye.propTypes = {
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
        (ye.defaultProps = {
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
      var ve = ye,
        Ee = function(e) {
          var a = e.input,
            t = e.label,
            n = e.placeholder,
            r = e.min,
            l = e.max,
            i = e.step,
            u = e.disabled,
            s = e.help,
            c = e.meta,
            d = e.onChangeValue
          return o.a.createElement(de, {
            componentClass: 'input',
            type: 'number',
            placeholder: n,
            input: a,
            label: t,
            min: r,
            max: l,
            step: i || 1,
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
      var xe = Ee,
        Te = t(571),
        Ce = t(516),
        we = function(e) {
          var a = e.enabled,
            t = e.pristine,
            n = e.submitting,
            r = e.submitFailed,
            l = e.error,
            i = e.valid,
            u = e.reset
          return o.a.createElement(
            W.a,
            null,
            o.a.createElement(
              U.a,
              { xs: 12 },
              o.a.createElement(
                Te.a,
                { className: 'pull-right' },
                o.a.createElement(
                  Ce.a,
                  {
                    bsStyle: 'warning',
                    bsSize: 'large',
                    disabled: t || n,
                    onClick: u,
                  },
                  'Reset'
                ),
                o.a.createElement(
                  Ce.a,
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
                ? o.a.createElement(re, null, l)
                : r &&
                  !i &&
                  o.a.createElement(
                    re,
                    null,
                    'The form is invalid. Please fix any errors.'
                  )
            )
          )
        }
      ;(we.propTypes = {
        enabled: s.a.bool,
        pristine: s.a.bool,
        submitting: s.a.bool,
        submitFailed: s.a.bool,
        valid: s.a.bool,
        error: s.a.string,
        reset: s.a.func.isRequired,
      }),
        (we.defaultProps = {
          enabled: !0,
          pristine: !0,
          submitting: !1,
          submitFailed: !1,
          valid: !0,
          error: null,
        })
      var qe = we,
        Re = function(e) {
          var a = e.input,
            t = e.label,
            n = e.placeholder,
            r = e.rows,
            l = e.cols,
            i = e.help,
            u = e.meta,
            s = e.disabled,
            c = e.onChangeValue
          return o.a.createElement(de, {
            input: a,
            label: t,
            help: i,
            meta: u,
            rows: r,
            cols: l,
            disabled: s,
            placeholder: n,
            onChange: c,
            componentClass: 'textarea',
          })
        }
      ;(Re.propTypes = {
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
        (Re.defaultProps = {
          help: null,
          label: null,
          disabled: !1,
          placeholder: null,
          cols: 6,
          rows: 4,
          onChangeValue: v.a.noop,
          meta: { touched: !1, error: [] },
        })
      var je = Re,
        Ne = function(e) {
          var a = e.input,
            t = e.label,
            n = e.placeholder,
            r = e.help,
            l = e.meta,
            i = e.disabled,
            u = e.type,
            s = e.onChangeValue
          return o.a.createElement(de, {
            type: u,
            input: a,
            label: t,
            help: r,
            meta: l,
            disabled: i,
            placeholder: n,
            onChange: s,
          })
        }
      ;(Ne.propTypes = {
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
        (Ne.defaultProps = {
          help: null,
          label: null,
          disabled: !1,
          placeholder: null,
          type: 'text',
          onChangeValue: v.a.noop,
          meta: { touched: !1, error: [] },
        })
      var Oe = Ne,
        ke = (t(171), t(172), t(173), t(174), t(175), t(176), /{(\d+)}/g),
        Pe = /^[a-zA-Z\s+\-_]*$/,
        Se = new RegExp(
          '^(?:(?:(?:https?|ftp):)?\\/\\/)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z0-9\\u00a1-\\uffff][a-z0-9\\u00a1-\\uffff_-]{0,62})?[a-z0-9\\u00a1-\\uffff]\\.)+(?:[a-z\\u00a1-\\uffff]{2,}\\.?))(?::\\d{2,5})?(?:[/?#]\\S*)?$',
          'i'
        ),
        Ve = function(e, a) {
          return e.replace(ke, function(e, t) {
            return v.a.isUndefined(a[t]) ? e : a[t]
          })
        },
        Ke = function(e) {
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
            R(v.a.isRegExp(e), 'Pattern arg must be a regex'),
            function(t) {
              if (!v.a.isNull(t) && !v.a.isUndefined(t))
                return v.a.isString(t) && t.match(e) ? void 0 : Ve(a, [e])
            }
          )
        },
        Ae = function(e) {
          return (
            void 0 === e &&
              (e = 'May contain only letters, numbers, dashes and underscores'),
            Me(Se, e)
          )
        },
        Le = function(e) {
          return (
            void 0 === e &&
              (e = 'May contain only letters, underscores, dashes and spaces'),
            Me(Pe, e)
          )
        },
        ze = function(e) {
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
        Fe = function(e) {
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
      function We(e) {
        return v.a.isInteger(e) && e >= 0
      }
      var Ue = function(e, a) {
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
        Be = {
          number: 'Must be at least {0}',
          string: 'Must contain at least {0} characters',
          object: 'Must contain at least {0} items',
        },
        Ie = function(e, a) {
          return (
            R(We(e), 'Limit arg must be a positive whole number'),
            Ue(
              function(a) {
                return e <= a
              },
              function(t) {
                return Ve(a || Be[typeof t], [e])
              }
            )
          )
        },
        De = {
          number: 'Must be at most {0}',
          string: 'Must contain at most {0} characters',
          object: 'Must contain at most {0} items',
        },
        Ge = function(e, a) {
          return (
            R(We(e), 'Limit arg must be a positive whole number'),
            Ue(
              function(a) {
                return e >= a
              },
              function(t) {
                return Ve(a || De[typeof t], [e])
              }
            )
          )
        },
        Qe = {
          number: 'Must be between {0} and {1}',
          string: 'Must contain between {0} and {1} characters',
          object: 'Must contain between {0} and {1} items',
        },
        Ye = function(e, a, t) {
          return (
            R(We(e), 'Min arg must be a positive whole number'),
            R(We(a), 'Max arg must be a positive whole number'),
            R(e < a, 'Min arg can not be larger than max arg'),
            Ue(
              function(t) {
                return e <= t && a >= t
              },
              function(n) {
                return Ve(t || Qe[typeof n], [e, a])
              }
            )
          )
        }
      t(177), t(574)
      t(178), t(134)
      var He = t(180)
      new (t.n(He)).a()
      t.d(a, 'k', function() {
        return I
      }),
        t.d(a, 'g', function() {
          return Y
        }),
        t.d(a, 'o', function() {
          return H
        }),
        t.d(a, 'h', function() {
          return K
        }),
        t.d(a, 'd', function() {
          return Q
        }),
        t.d(a, 'u', function() {
          return D
        }),
        t.d(a, 'e', function() {
          return N
        }),
        t.d(a, 'l', function() {
          return P
        }),
        t.d(a, 'a', function() {
          return k
        }),
        t.d(a, 'i', function() {
          return L
        }),
        t.d(a, 'b', function() {
          return M
        }),
        t.d(a, 'f', function() {
          return G
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
          return ge
        }),
        t.d(a, 'p', function() {
          return ve
        }),
        t.d(a, 'q', function() {
          return xe
        }),
        t.d(a, 'r', function() {
          return qe
        }),
        t.d(a, 's', function() {
          return je
        }),
        t.d(a, 't', function() {
          return Oe
        }),
        t.d(a, 'v', function() {
          return n
        }),
        t.d(a, 'w', function() {
          return q
        }),
        t.d(a, 'x', function() {
          return w
        })
    },
    150: function(e, a, t) {
      'use strict'
      var n = t(6),
        r = t.n(n),
        l = t(7),
        i = t.n(l),
        o = t(8),
        u = t.n(o),
        s = t(9),
        c = t.n(s),
        d = t(10),
        p = t.n(d),
        m = t(0),
        f = t.n(m),
        h = t(3),
        b = t.n(h),
        g = t(103),
        y = t.n(g),
        v = (function(e) {
          function a(e) {
            var t
            return (
              r()(this, a),
              ((t = u()(this, c()(a).call(this, e))).element = f.a.createRef()),
              t
            )
          }
          return (
            p()(a, e),
            i()(a, [
              {
                key: 'componentDidMount',
                value: function() {
                  this.highlight()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.highlight()
                },
              },
              {
                key: 'highlight',
                value: function() {
                  this.element.current
                    .querySelectorAll('code')
                    .forEach(function(e) {
                      return y.a.highlightBlock(e)
                    })
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    a = e.children,
                    t = e.language
                  return f.a.createElement(
                    'pre',
                    { ref: this.element },
                    f.a.createElement(
                      'code',
                      { className: 'hljs '.concat(t) },
                      a
                    )
                  )
                },
              },
            ]),
            a
          )
        })(m.Component)
      ;(v.propTypes = { children: b.a.node.isRequired, language: b.a.string }),
        (v.defaultProps = { language: 'javascript' }),
        (a.a = v)
    },
    68: function(e, a, t) {
      'use strict'
      t.r(a)
      var n = t(15),
        r = t.n(n),
        l = t(6),
        i = t.n(l),
        o = t(7),
        u = t.n(o),
        s = t(8),
        c = t.n(s),
        d = t(9),
        p = t.n(d),
        m = t(10),
        f = t.n(m),
        h = t(13),
        b = t.n(h),
        g = t(11),
        y = t.n(g),
        v = t(0),
        E = t.n(v),
        x = t(3),
        T = t.n(x),
        C = t(102),
        w = t(150),
        q = t(93),
        R = t(228),
        j = t(563),
        N = t(564),
        O = t(120),
        k = function() {
          return E.a.createElement(
            'section',
            null,
            E.a.createElement(
              j.a,
              null,
              E.a.createElement(
                N.a,
                { xs: 4 },
                E.a.createElement(R.a, {
                  autofocus: !0,
                  component: O.t,
                  name: 'text',
                  label: 'Text field label',
                  placeholder: 'Enter some text',
                  validate: [O.v.required(), O.v.min(6)],
                })
              ),
              E.a.createElement(
                N.a,
                { xs: 4 },
                E.a.createElement(R.a, {
                  component: O.m,
                  name: 'password',
                  label: 'Password field label',
                  placeholder: 'Enter your password',
                  validate: [
                    O.v.required(),
                    O.v.regex(
                      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
                      'Password should contain at least 1 lower case  character, upper case character and a digit'
                    ),
                    O.v.min(6),
                    O.v.max(12),
                  ],
                })
              ),
              E.a.createElement(
                N.a,
                { xs: 4 },
                E.a.createElement(R.a, {
                  component: O.p,
                  name: 'select',
                  label: 'Select field label',
                  placeholder: 'Select a value',
                  validate: [O.v.required(), O.v.containing(['foo'])],
                  options: [
                    { value: 'foo', label: 'Foo' },
                    { value: 'bar', label: 'Bar' },
                  ],
                })
              )
            ),
            E.a.createElement(
              j.a,
              null,
              E.a.createElement(
                N.a,
                { xs: 4 },
                E.a.createElement(R.a, {
                  component: O.c,
                  name: 'checkbox',
                  label: 'Tick me',
                })
              ),
              E.a.createElement(
                N.a,
                { xs: 4 },
                E.a.createElement(R.a, {
                  component: O.q,
                  name: 'number',
                  label: 'Number spinner',
                  min: 2,
                  max: 6,
                  validate: [O.v.between(2, 6)],
                })
              ),
              E.a.createElement(
                N.a,
                { xs: 4 },
                E.a.createElement(R.a, {
                  component: O.n,
                  name: 'range',
                  label: 'Range',
                  min: 0,
                  max: 20,
                  validate: [O.v.between(0, 20)],
                })
              )
            ),
            E.a.createElement(
              j.a,
              null,
              E.a.createElement(
                N.a,
                { xs: 12 },
                E.a.createElement(R.a, {
                  component: O.s,
                  name: 'textarea',
                  label: 'Text area field label',
                  placeholder: 'Write me a story',
                  validate: [O.v.between(10, 200)],
                })
              )
            )
          )
        },
        P = Object(R.d)({ form: 'example', anyTouched: !1 })(function(e) {
          var a = e.handleSubmit,
            t = e.pristine,
            n = e.submitting,
            r = e.error,
            l = e.reset
          return E.a.createElement(
            R.b,
            { onSubmit: a },
            E.a.createElement(k, null),
            E.a.createElement(O.r, {
              pristine: t,
              submitting: n,
              error: r,
              reset: l,
            })
          )
        }),
        S = t(101),
        V = t(126),
        K = Object(V.b)({ form: R.c }),
        M = []
      if ('undefined' != typeof window) {
        window.devToolsExtension
        0
      }
      var A = Object(V.d)(K, {}, V.c.apply(void 0, M))
      t.d(a, 'pageQuery', function() {
        return W
      })
      var L = Object(C.b)(function(e) {
          return y()({}, e.form)
        })(function(e) {
          var a = e.example,
            t = void 0 === a ? {} : a,
            n = t.registeredFields,
            r = void 0 === n ? {} : n,
            l = t.values,
            i = void 0 === l ? {} : l,
            o = t.fields,
            u = void 0 === o ? {} : o,
            s = Object.keys(r).reduce(
              function(e, a) {
                var t = y()(
                  { name: a, value: i[a] || null, active: !1, touched: !1 },
                  u[a] || {}
                )
                return y()({}, e, b()({}, a, t))
              },
              { active: t.active || !1, anyTouched: !!t.anyTouched }
            )
          return E.a.createElement(
            'div',
            null,
            E.a.createElement('p', null, 'Debug values'),
            E.a.createElement(z, { json: s })
          )
        }),
        z = function(e) {
          var a = e.json
          return E.a.createElement(
            w.a,
            { language: 'json' },
            JSON.stringify(a, null, 2)
          )
        }
      z.propTypes = { json: T.a.object.isRequired }
      var F = (function(e) {
        function a() {
          var e, t
          i()(this, a)
          for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
            r[l] = arguments[l]
          return (
            ((t = c()(
              this,
              (e = p()(a)).call.apply(e, [this].concat(r))
            )).state = { values: !1 }),
            t
          )
        }
        return (
          f()(a, e),
          u()(a, [
            {
              key: 'onSubmit',
              value: function(e) {
                this.setState({ values: e })
              },
            },
            {
              key: 'render',
              value: function() {
                var e = this,
                  a = this.props.data,
                  t = this.state.values,
                  n = Object(S.c)(a),
                  l = r()(n, 1)[0]
                return E.a.createElement(
                  C.a,
                  { store: A },
                  E.a.createElement(
                    q.a,
                    null,
                    E.a.createElement('h1', null, 'Form components'),
                    E.a.createElement('hr', null),
                    E.a.createElement(P, {
                      onSubmit: function(a) {
                        return e.onSubmit(a)
                      },
                    }),
                    t &&
                      E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement('p', null, 'Submitted values'),
                        E.a.createElement(z, { json: t })
                      ),
                    E.a.createElement(L, null),
                    E.a.createElement(S.a, { html: l.html })
                  )
                )
              },
            },
          ]),
          a
        )
      })(v.Component)
      F.propTypes = { data: T.a.object.isRequired }
      var W = '1059599421'
      a.default = F
    },
    84: function(e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'graphql', function() {
          return f
        }),
        t.d(a, 'StaticQueryContext', function() {
          return p
        }),
        t.d(a, 'StaticQuery', function() {
          return m
        })
      var n = t(0),
        r = t.n(n),
        l = t(3),
        i = t.n(l),
        o = t(80),
        u = t.n(o)
      t.d(a, 'Link', function() {
        return u.a
      }),
        t.d(a, 'withPrefix', function() {
          return o.withPrefix
        }),
        t.d(a, 'navigate', function() {
          return o.navigate
        }),
        t.d(a, 'push', function() {
          return o.push
        }),
        t.d(a, 'replace', function() {
          return o.replace
        }),
        t.d(a, 'navigateTo', function() {
          return o.navigateTo
        })
      var s = t(94),
        c = t.n(s)
      t.d(a, 'PageRenderer', function() {
        return c.a
      })
      var d = t(17)
      t.d(a, 'parsePath', function() {
        return d.a
      })
      var p = r.a.createContext({}),
        m = function(e) {
          return r.a.createElement(p.Consumer, null, function(a) {
            return e.data || (a[e.query] && a[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : a[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      m.propTypes = {
        data: i.a.object,
        query: i.a.string.isRequired,
        render: i.a.func,
        children: i.a.func,
      }
    },
    93: function(e, a, t) {
      'use strict'
      var n = t(110),
        r = t(0),
        l = t.n(r),
        i = t(3),
        o = t.n(i),
        u = t(136),
        s = t.n(u),
        c = t(84),
        d = t(270),
        p = t(563),
        m = t(564),
        f = t(24),
        h = t.n(f),
        b = t(111),
        g = t.n(b),
        y = t(72),
        v = t.n(y),
        E = t(572),
        x = t(562),
        T = function(e) {
          var a = e.active,
            t = e.disabled,
            n = e.className,
            r = g()(e, ['active', 'disabled', 'className'])
          return (
            delete r.onSelect,
            delete r.eventKey,
            delete r.activeKey,
            delete r.activeHref,
            l.a.createElement(
              'li',
              {
                role: 'presentation',
                className: v()(n, { active: a, disabled: t }),
              },
              l.a.createElement(c.Link, h()({}, r, { disabled: t }))
            )
          )
        },
        C = function(e) {
          var a = e.siteTitle
          return l.a.createElement(
            E.a,
            null,
            l.a.createElement(
              E.a.Header,
              null,
              l.a.createElement(
                E.a.Brand,
                null,
                l.a.createElement(c.Link, { to: '/' }, a)
              )
            ),
            l.a.createElement(
              E.a.Collapse,
              null,
              l.a.createElement(
                x.a,
                null,
                l.a.createElement(T, { to: '/ui' }, 'UI components'),
                l.a.createElement(T, { to: '/forms' }, 'Form'),
                l.a.createElement(T, { to: '/redux' }, 'Redux'),
                l.a.createElement(T, { to: '/utils' }, 'Utilities'),
                l.a.createElement(T, { to: '/api' }, 'API')
              )
            )
          )
        }
      C.propTypes = { siteTitle: o.a.string.isRequired }
      var w = C,
        q = t(124),
        R = t.n(q),
        j = function(e) {
          var a = e.repo,
            t = e.type
          return l.a.createElement(
            'span',
            { className: 'github-button-wrapper' },
            l.a.createElement('iframe', {
              title: t,
              src: 'https://ghbtns.com/github-btn.html?user=kayak&repo='
                .concat(a, '&type=')
                .concat(t),
              frameBorder: '0',
              scrolling: '0',
              width: '60px',
              height: '20px',
            })
          )
        },
        N = function(e) {
          var a = e.name,
            t = e.version
          return l.a.createElement(
            'footer',
            {
              style: {
                padding: '40px 0 20px',
                background: '#f8f8f8',
                borderTop: '1px solid #e7e7e7',
              },
            },
            l.a.createElement(
              d.a,
              null,
              l.a.createElement(
                p.a,
                { className: 'text-center' },
                l.a.createElement(
                  m.a,
                  { xs: 6, xsOffset: 3 },
                  l.a.createElement(j, { repo: a, type: 'star' }),
                  l.a.createElement(j, { repo: a, type: 'fork' })
                )
              ),
              l.a.createElement(
                p.a,
                { style: { marginTop: '20px' } },
                l.a.createElement(
                  m.a,
                  { xs: 12, className: 'text-center' },
                  l.a.createElement(
                    'p',
                    null,
                    'Copyright  ',
                    R()().format('YYYY'),
                    '  KAYAK Germany, GmbH'
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'Licensed under the  ',
                    l.a.createElement(
                      'a',
                      { href: 'http://www.apache.org/licenses/LICENSE-2.0' },
                      'Apache License Version 2.0'
                    ),
                    ', Documentation built using  ',
                    l.a.createElement(
                      'a',
                      { href: 'https://gatsbyjs.org' },
                      'Gatsby'
                    )
                  ),
                  l.a.createElement(
                    'p',
                    { className: 'text-right' },
                    l.a.createElement('small', null, 'v'.concat(t))
                  )
                )
              )
            )
          )
        },
        O = (t(147),
        t(148),
        t(149),
        t(114),
        t(115),
        function(e) {
          var a = e.children,
            t = e.data.site,
            n = (void 0 === t ? {} : t).siteMetadata,
            r = void 0 === n ? {} : n
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              s.a,
              {
                title: r.title,
                meta: [
                  { name: 'description', content: r.description },
                  { name: 'keywords', content: 'kayak, react, redux' },
                ],
                script: [
                  {
                    type: 'text/javascript',
                    src: 'https://buttons.github.io/buttons.js',
                  },
                ],
              },
              l.a.createElement('html', { lang: 'en' }),
              l.a.createElement('link', {
                rel: 'canonical',
                href: 'https://kayak.github.io/bandit-pouch',
              })
            ),
            l.a.createElement(w, { siteTitle: r.title }),
            l.a.createElement(
              d.a,
              null,
              l.a.createElement(
                p.a,
                null,
                l.a.createElement(m.a, { xs: 12 }, a)
              )
            ),
            l.a.createElement(N, r.library)
          )
        })
      O.propTypes = {
        data: o.a.object.isRequired,
        children: o.a.node.isRequired,
      }
      var k = function(e) {
        var a = e.children
        return l.a.createElement(c.StaticQuery, {
          query: '2212968517',
          render: function(e) {
            return l.a.createElement(O, { data: e }, a)
          },
          data: n,
        })
      }
      k.propTypes = { children: o.a.node.isRequired }
      a.a = k
    },
    94: function(e, a, t) {
      var n
      e.exports = ((n = t(109)) && n.default) || n
    },
  },
])
//# sourceMappingURL=component---src-pages-forms-js-b8834368d8d209d48b49.js.map
