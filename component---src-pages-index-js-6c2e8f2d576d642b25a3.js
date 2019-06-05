;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    131: function(e, t, n) {
      e.exports = n(167)
    },
    150: function(e, t, n) {
      'use strict'
      var a = n(6),
        r = n.n(a),
        c = n(7),
        i = n.n(c),
        l = n(8),
        o = n.n(l),
        s = n(9),
        u = n.n(s),
        p = n(10),
        m = n.n(p),
        d = n(0),
        h = n.n(d),
        f = n(3),
        b = n.n(f),
        v = n(103),
        g = n.n(v),
        E = (function(e) {
          function t(e) {
            var n
            return (
              r()(this, t),
              ((n = o()(this, u()(t).call(this, e))).element = h.a.createRef()),
              n
            )
          }
          return (
            m()(t, e),
            i()(t, [
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
                      return g.a.highlightBlock(e)
                    })
                },
              },
              {
                key: 'render',
                value: function() {
                  var e = this.props,
                    t = e.children,
                    n = e.language
                  return h.a.createElement(
                    'pre',
                    { ref: this.element },
                    h.a.createElement(
                      'code',
                      { className: 'hljs '.concat(n) },
                      t
                    )
                  )
                },
              },
            ]),
            t
          )
        })(d.Component)
      ;(E.propTypes = { children: b.a.node.isRequired, language: b.a.string }),
        (E.defaultProps = { language: 'javascript' }),
        (t.a = E)
    },
    167: function(e, t, n) {
      n(168), (e.exports = n(85).Object.values)
    },
    168: function(e, t, n) {
      var a = n(89),
        r = n(143)(!1)
      a(a.S, 'Object', {
        values: function(e) {
          return r(e)
        },
      })
    },
    71: function(e, t, n) {
      'use strict'
      n.r(t)
      var a = n(24),
        r = n.n(a),
        c = n(111),
        i = n.n(c),
        l = n(0),
        o = n.n(l),
        s = n(84),
        u = n(3),
        p = n.n(u),
        m = n(74),
        d = n(75),
        h = n(73),
        f = n(72),
        b = n.n(f),
        v = n(82),
        g = n.n(v),
        E = n(131),
        y = n.n(E),
        j = n(78),
        O = n(95),
        N = {
          active: p.a.any,
          disabled: p.a.any,
          header: p.a.node,
          listItem: p.a.bool,
          onClick: p.a.func,
          href: p.a.string,
          type: p.a.string,
        },
        C = (function(e) {
          function t() {
            return e.apply(this, arguments) || this
          }
          Object(h.a)(t, e)
          var n = t.prototype
          return (
            (n.renderHeader = function(e, t) {
              return o.a.isValidElement(e)
                ? Object(l.cloneElement)(e, {
                    className: b()(e.props.className, t),
                  })
                : o.a.createElement('h4', { className: t }, e)
            }),
            (n.render = function() {
              var e,
                t = this.props,
                n = t.active,
                a = t.disabled,
                r = t.className,
                c = t.header,
                i = t.listItem,
                l = t.children,
                s = Object(d.a)(t, [
                  'active',
                  'disabled',
                  'className',
                  'header',
                  'listItem',
                  'children',
                ]),
                u = Object(j.f)(s),
                p = u[0],
                h = u[1],
                f = Object(m.a)({}, Object(j.d)(p), { active: n, disabled: a })
              return (
                h.href
                  ? (e = 'a')
                  : h.onClick
                    ? ((e = 'button'), (h.type = h.type || 'button'))
                    : (e = i ? 'li' : 'span'),
                (h.className = b()(r, f)),
                c
                  ? o.a.createElement(
                      e,
                      h,
                      this.renderHeader(c, Object(j.e)(p, 'heading')),
                      o.a.createElement(
                        'p',
                        { className: Object(j.e)(p, 'text') },
                        l
                      )
                    )
                  : o.a.createElement(e, h, l)
              )
            }),
            t
          )
        })(o.a.Component)
      ;(C.propTypes = N), (C.defaultProps = { listItem: !1 })
      var k = Object(j.a)('list-group-item', Object(j.c)(y()(O.d), C)),
        I = n(146),
        x = { componentClass: g.a }
      var R = (function(e) {
        function t() {
          return e.apply(this, arguments) || this
        }
        return (
          Object(h.a)(t, e),
          (t.prototype.render = function() {
            var e = this.props,
              t = e.children,
              n = e.componentClass,
              a =
                void 0 === n
                  ? (function(e) {
                      return e
                        ? I.a.some(e, function(e) {
                            return (
                              e.type !== k || e.props.href || e.props.onClick
                            )
                          })
                          ? 'div'
                          : 'ul'
                        : 'div'
                    })(t)
                  : n,
              r = e.className,
              c = Object(d.a)(e, ['children', 'componentClass', 'className']),
              i = Object(j.f)(c),
              s = i[0],
              u = i[1],
              p = Object(j.d)(s),
              h =
                'ul' === a &&
                I.a.every(t, function(e) {
                  return e.type === k
                })
            return o.a.createElement(
              a,
              Object(m.a)({}, u, { className: b()(r, p) }),
              h
                ? I.a.map(t, function(e) {
                    return Object(l.cloneElement)(e, { listItem: !0 })
                  })
                : t
            )
          }),
          t
        )
      })(o.a.Component)
      R.propTypes = x
      var w = Object(j.a)('list-group', R),
        q = n(150),
        P = n(93),
        T = function(e) {
          var t = e.header,
            n = e.children,
            a = i()(e, ['header', 'children'])
          return o.a.createElement(
            s.Link,
            r()({}, a, { className: 'list-group-item' }),
            o.a.createElement(
              'h4',
              { className: 'list-group-item-heading' },
              t
            ),
            o.a.createElement('p', { className: 'list-group-item-text' }, n)
          )
        }
      T.propTypes = {
        header: p.a.string.isRequired,
        children: p.a.node.isRequired,
      }
      t.default = function() {
        return o.a.createElement(
          P.a,
          null,
          o.a.createElement('h4', null, 'Installation'),
          o.a.createElement(
            q.a,
            { language: 'bash' },
            'npm install bandit-pouch --save'
          ),
          o.a.createElement('hr', null),
          o.a.createElement(
            w,
            null,
            o.a.createElement(
              T,
              { header: 'UI components', to: '/ui' },
              'Common React components'
            ),
            o.a.createElement(
              T,
              { header: 'Forms', to: '/forms' },
              'Form input control components'
            ),
            o.a.createElement(
              T,
              { header: 'Redux', to: '/redux' },
              'Redux helper functions'
            ),
            o.a.createElement(
              T,
              { header: 'Utils', to: '/utils' },
              'Custom utility funtions'
            ),
            o.a.createElement(
              T,
              { header: 'Component API', to: '/api' },
              'Component API documentation'
            )
          )
        )
      }
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-6c2e8f2d576d642b25a3.js.map
