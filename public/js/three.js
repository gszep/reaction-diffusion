// threejs.org/license
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.THREE = t.THREE || {})
}(this, function(t) {
    "use strict";
    function e() {}
    function r(t, e) {
        this.x = t || 0,
        this.y = e || 0
    }
    function n(e, a, o, s, c, h, l, u, p, d) {
        Object.defineProperty(this, "id", {
            value: i()
        }),
        this.uuid = t.Math.generateUUID(),
        this.name = "",
        this.sourceFile = "",
        this.image = void 0 !== e ? e : n.DEFAULT_IMAGE,
        this.mipmaps = [],
        this.mapping = void 0 !== a ? a : n.DEFAULT_MAPPING,
        this.wrapS = void 0 !== o ? o : Ma,
        this.wrapT = void 0 !== s ? s : Ma,
        this.magFilter = void 0 !== c ? c : Ra,
        this.minFilter = void 0 !== h ? h : Ca,
        this.anisotropy = void 0 !== p ? p : 1,
        this.format = void 0 !== l ? l : qa,
        this.type = void 0 !== u ? u : Ia,
        this.offset = new r(0,0),
        this.repeat = new r(1,1),
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.encoding = void 0 !== d ? d : bo,
        this.version = 0,
        this.onUpdate = null
    }
    function i() {
        return Co++
    }
    function a(t, e, r, n) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = r || 0,
        this.w = void 0 !== n ? n : 1
    }
    function o(e, r, i) {
        this.uuid = t.Math.generateUUID(),
        this.width = e,
        this.height = r,
        this.scissor = new a(0,0,e,r),
        this.scissorTest = !1,
        this.viewport = new a(0,0,e,r),
        i = i || {},
        void 0 === i.minFilter && (i.minFilter = Ra),
        this.texture = new n((void 0),(void 0),i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),
        this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer,
        this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer,
        this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
    }
    function s(t, e, r) {
        o.call(this, t, e, r),
        this.attachments = [this.texture]
    }
    function c(t, e, r) {
        o.call(this, t, e, r),
        this.activeCubeFace = 0,
        this.activeMipMapLevel = 0
    }
    function h(t, e, r, n) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = r || 0,
        this._w = void 0 !== n ? n : 1
    }
    function l(t, e, r) {
        this.x = t || 0,
        this.y = e || 0,
        this.z = r || 0
    }
    function u() {
        this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
        arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }
    function p(t, e, r, i, a, o, s, c, h, l) {
        t = void 0 !== t ? t : [],
        e = void 0 !== e ? e : fa,
        n.call(this, t, e, r, i, a, o, s, c, h, l),
        this.flipY = !1
    }
    function d() {
        this.seq = [],
        this.map = {}
    }
    function f(t, e, r) {
        var n = t[0];
        if (n <= 0 || n > 0)
            return t;
        var i = e * r
          , a = Do[i];
        if (void 0 === a && (a = new Float32Array(i),
        Do[i] = a),
        0 !== e) {
            n.toArray(a, 0);
            for (var o = 1, s = 0; o !== e; ++o)
                s += r,
                t[o].toArray(a, s)
        }
        return a
    }
    function m(t, e) {
        var r = No[e];
        void 0 === r && (r = new Int32Array(e),
        No[e] = r);
        for (var n = 0; n !== e; ++n)
            r[n] = t.allocTextureUnit();
        return r
    }
    function g(t, e) {
        t.uniform1f(this.addr, e)
    }
    function v(t, e) {
        t.uniform1i(this.addr, e)
    }
    function y(t, e) {
        void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
    }
    function x(t, e) {
        void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
    }
    function _(t, e) {
        void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
    }
    function b(t, e) {
        t.uniformMatrix2fv(this.addr, !1, e.elements || e)
    }
    function w(t, e) {
        t.uniformMatrix3fv(this.addr, !1, e.elements || e)
    }
    function M(t, e) {
        t.uniformMatrix4fv(this.addr, !1, e.elements || e)
    }
    function E(t, e, r) {
        var n = r.allocTextureUnit();
        t.uniform1i(this.addr, n),
        r.setTexture2D(e || Uo, n)
    }
    function T(t, e, r) {
        var n = r.allocTextureUnit();
        t.uniform1i(this.addr, n),
        r.setTextureCube(e || Io, n)
    }
    function S(t, e) {
        t.uniform2iv(this.addr, e)
    }
    function A(t, e) {
        t.uniform3iv(this.addr, e)
    }
    function L(t, e) {
        t.uniform4iv(this.addr, e)
    }
    function R(t) {
        switch (t) {
        case 5126:
            return g;
        case 35664:
            return y;
        case 35665:
            return x;
        case 35666:
            return _;
        case 35674:
            return b;
        case 35675:
            return w;
        case 35676:
            return M;
        case 35678:
            return E;
        case 35680:
            return T;
        case 5124:
        case 35670:
            return v;
        case 35667:
        case 35671:
            return S;
        case 35668:
        case 35672:
            return A;
        case 35669:
        case 35673:
            return L
        }
    }
    function P(t, e) {
        t.uniform1fv(this.addr, e)
    }
    function C(t, e) {
        t.uniform1iv(this.addr, e)
    }
    function U(t, e) {
        t.uniform2fv(this.addr, f(e, this.size, 2))
    }
    function I(t, e) {
        t.uniform3fv(this.addr, f(e, this.size, 3))
    }
    function D(t, e) {
        t.uniform4fv(this.addr, f(e, this.size, 4))
    }
    function N(t, e) {
        t.uniformMatrix2fv(this.addr, !1, f(e, this.size, 4))
    }
    function O(t, e) {
        t.uniformMatrix3fv(this.addr, !1, f(e, this.size, 9))
    }
    function F(t, e) {
        t.uniformMatrix4fv(this.addr, !1, f(e, this.size, 16))
    }
    function z(t, e, r) {
        var n = e.length
          , i = m(r, n);
        t.uniform1iv(this.addr, i);
        for (var a = 0; a !== n; ++a)
            r.setTexture2D(e[a] || Uo, i[a])
    }
    function B(t, e, r) {
        var n = e.length
          , i = m(r, n);
        t.uniform1iv(this.addr, i);
        for (var a = 0; a !== n; ++a)
            r.setTextureCube(e[a] || Io, i[a])
    }
    function G(t) {
        switch (t) {
        case 5126:
            return P;
        case 35664:
            return U;
        case 35665:
            return I;
        case 35666:
            return D;
        case 35674:
            return N;
        case 35675:
            return O;
        case 35676:
            return F;
        case 35678:
            return z;
        case 35680:
            return B;
        case 5124:
        case 35670:
            return C;
        case 35667:
        case 35671:
            return S;
        case 35668:
        case 35672:
            return A;
        case 35669:
        case 35673:
            return L
        }
    }
    function H(t, e, r) {
        this.id = t,
        this.addr = r,
        this.setValue = R(e.type)
    }
    function V(t, e, r) {
        this.id = t,
        this.addr = r,
        this.size = e.size,
        this.setValue = G(e.type)
    }
    function k(t) {
        this.id = t,
        d.call(this)
    }
    function j(t, e) {
        t.seq.push(e),
        t.map[e.id] = e
    }
    function W(t, e, r) {
        var n = t.name
          , i = n.length;
        for (Oo.lastIndex = 0; ; ) {
            var a = Oo.exec(n)
              , o = Oo.lastIndex
              , s = a[1]
              , c = "]" === a[2]
              , h = a[3];
            if (c && (s = 0 | s),
            void 0 === h || "[" === h && o + 2 === i) {
                j(r, void 0 === h ? new H(s,t,e) : new V(s,t,e));
                break
            }
            var l = r.map
              , u = l[s];
            void 0 === u && (u = new k(s),
            j(r, u)),
            r = u
        }
    }
    function X(t, e, r) {
        d.call(this),
        this.renderer = r;
        for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), i = 0; i !== n; ++i) {
            var a = t.getActiveUniform(e, i)
              , o = a.name
              , s = t.getUniformLocation(e, o);
            W(a, s, this)
        }
    }
    function q(t, e, r) {
        return void 0 === e && void 0 === r ? this.set(t) : this.setRGB(t, e, r)
    }
    function Y(t, e) {
        this.min = void 0 !== t ? t : new r((+(1 / 0)),(+(1 / 0))),
        this.max = void 0 !== e ? e : new r((-(1 / 0)),(-(1 / 0)))
    }
    function Z(t, e) {
        function n() {
            var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1])
              , e = new Uint16Array([0, 1, 2, 0, 2, 3]);
            a = f.createBuffer(),
            o = f.createBuffer(),
            f.bindBuffer(f.ARRAY_BUFFER, a),
            f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW),
            f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, o),
            f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW),
            p = f.createTexture(),
            d = f.createTexture(),
            m.bindTexture(f.TEXTURE_2D, p),
            f.texImage2D(f.TEXTURE_2D, 0, f.RGB, 16, 16, 0, f.RGB, f.UNSIGNED_BYTE, null),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST),
            m.bindTexture(f.TEXTURE_2D, d),
            f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, 16, 16, 0, f.RGBA, f.UNSIGNED_BYTE, null),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST),
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST),
            s = {
                vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
                fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
            },
            c = i(s),
            h = {
                vertex: f.getAttribLocation(c, "position"),
                uv: f.getAttribLocation(c, "uv")
            },
            u = {
                renderType: f.getUniformLocation(c, "renderType"),
                map: f.getUniformLocation(c, "map"),
                occlusionMap: f.getUniformLocation(c, "occlusionMap"),
                opacity: f.getUniformLocation(c, "opacity"),
                color: f.getUniformLocation(c, "color"),
                scale: f.getUniformLocation(c, "scale"),
                rotation: f.getUniformLocation(c, "rotation"),
                screenPosition: f.getUniformLocation(c, "screenPosition")
            }
        }
        function i(e) {
            var r = f.createProgram()
              , n = f.createShader(f.FRAGMENT_SHADER)
              , i = f.createShader(f.VERTEX_SHADER)
              , a = "precision " + t.getPrecision() + " float;\n";
            return f.shaderSource(n, a + e.fragmentShader),
            f.shaderSource(i, a + e.vertexShader),
            f.compileShader(n),
            f.compileShader(i),
            f.attachShader(r, n),
            f.attachShader(r, i),
            f.linkProgram(r),
            r
        }
        var a, o, s, c, h, u, p, d, f = t.context, m = t.state;
        this.render = function(i, s, g) {
            if (0 !== e.length) {
                var v = new l
                  , y = g.w / g.z
                  , x = .5 * g.z
                  , _ = .5 * g.w
                  , b = 16 / g.w
                  , w = new r(b * y,b)
                  , M = new l(1,1,0)
                  , E = new r(1,1)
                  , T = new Y;
                T.min.set(0, 0),
                T.max.set(g.z - 16, g.w - 16),
                void 0 === c && n(),
                f.useProgram(c),
                m.initAttributes(),
                m.enableAttribute(h.vertex),
                m.enableAttribute(h.uv),
                m.disableUnusedAttributes(),
                f.uniform1i(u.occlusionMap, 0),
                f.uniform1i(u.map, 1),
                f.bindBuffer(f.ARRAY_BUFFER, a),
                f.vertexAttribPointer(h.vertex, 2, f.FLOAT, !1, 16, 0),
                f.vertexAttribPointer(h.uv, 2, f.FLOAT, !1, 16, 8),
                f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, o),
                m.disable(f.CULL_FACE),
                m.setDepthWrite(!1);
                for (var S = 0, A = e.length; S < A; S++) {
                    b = 16 / g.w,
                    w.set(b * y, b);
                    var L = e[S];
                    if (v.set(L.matrixWorld.elements[12], L.matrixWorld.elements[13], L.matrixWorld.elements[14]),
                    v.applyMatrix4(s.matrixWorldInverse),
                    v.applyProjection(s.projectionMatrix),
                    M.copy(v),
                    E.x = g.x + M.x * x + x - 8,
                    E.y = g.y + M.y * _ + _ - 8,
                    T.containsPoint(E) === !0) {
                        m.activeTexture(f.TEXTURE0),
                        m.bindTexture(f.TEXTURE_2D, null),
                        m.activeTexture(f.TEXTURE1),
                        m.bindTexture(f.TEXTURE_2D, p),
                        f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGB, E.x, E.y, 16, 16, 0),
                        f.uniform1i(u.renderType, 0),
                        f.uniform2f(u.scale, w.x, w.y),
                        f.uniform3f(u.screenPosition, M.x, M.y, M.z),
                        m.disable(f.BLEND),
                        m.enable(f.DEPTH_TEST),
                        f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0),
                        m.activeTexture(f.TEXTURE0),
                        m.bindTexture(f.TEXTURE_2D, d),
                        f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGBA, E.x, E.y, 16, 16, 0),
                        f.uniform1i(u.renderType, 1),
                        m.disable(f.DEPTH_TEST),
                        m.activeTexture(f.TEXTURE1),
                        m.bindTexture(f.TEXTURE_2D, p),
                        f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0),
                        L.positionScreen.copy(M),
                        L.customUpdateCallback ? L.customUpdateCallback(L) : L.updateLensFlares(),
                        f.uniform1i(u.renderType, 2),
                        m.enable(f.BLEND);
                        for (var R = 0, P = L.lensFlares.length; R < P; R++) {
                            var C = L.lensFlares[R];
                            C.opacity > .001 && C.scale > .001 && (M.x = C.x,
                            M.y = C.y,
                            M.z = C.z,
                            b = C.size * C.scale / g.w,
                            w.x = b * y,
                            w.y = b,
                            f.uniform3f(u.screenPosition, M.x, M.y, M.z),
                            f.uniform2f(u.scale, w.x, w.y),
                            f.uniform1f(u.rotation, C.rotation),
                            f.uniform1f(u.opacity, C.opacity),
                            f.uniform3f(u.color, C.color.r, C.color.g, C.color.b),
                            m.setBlending(C.blending, C.blendEquation, C.blendSrc, C.blendDst),
                            t.setTexture2D(C.texture, 1),
                            f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0))
                        }
                    }
                }
                m.enable(f.CULL_FACE),
                m.enable(f.DEPTH_TEST),
                m.setDepthWrite(!0),
                t.resetGLState()
            }
        }
    }
    function J(t, e) {
        function r() {
            var t = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1])
              , e = new Uint16Array([0, 1, 2, 0, 2, 3]);
            o = f.createBuffer(),
            s = f.createBuffer(),
            f.bindBuffer(f.ARRAY_BUFFER, o),
            f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW),
            f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, s),
            f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW),
            c = i(),
            u = {
                position: f.getAttribLocation(c, "position"),
                uv: f.getAttribLocation(c, "uv")
            },
            p = {
                uvOffset: f.getUniformLocation(c, "uvOffset"),
                uvScale: f.getUniformLocation(c, "uvScale"),
                rotation: f.getUniformLocation(c, "rotation"),
                scale: f.getUniformLocation(c, "scale"),
                color: f.getUniformLocation(c, "color"),
                map: f.getUniformLocation(c, "map"),
                opacity: f.getUniformLocation(c, "opacity"),
                modelViewMatrix: f.getUniformLocation(c, "modelViewMatrix"),
                projectionMatrix: f.getUniformLocation(c, "projectionMatrix"),
                fogType: f.getUniformLocation(c, "fogType"),
                fogDensity: f.getUniformLocation(c, "fogDensity"),
                fogNear: f.getUniformLocation(c, "fogNear"),
                fogFar: f.getUniformLocation(c, "fogFar"),
                fogColor: f.getUniformLocation(c, "fogColor"),
                alphaTest: f.getUniformLocation(c, "alphaTest")
            };
            var r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
            r.width = 8,
            r.height = 8;
            var a = r.getContext("2d");
            a.fillStyle = "white",
            a.fillRect(0, 0, 8, 8),
            d = new n(r),
            d.needsUpdate = !0
        }
        function i() {
            var e = f.createProgram()
              , r = f.createShader(f.VERTEX_SHADER)
              , n = f.createShader(f.FRAGMENT_SHADER);
            return f.shaderSource(r, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")),
            f.shaderSource(n, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")),
            f.compileShader(r),
            f.compileShader(n),
            f.attachShader(e, r),
            f.attachShader(e, n),
            f.linkProgram(e),
            e
        }
        function a(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
        }
        var o, s, c, u, p, d, f = t.context, m = t.state, g = new l, v = new h, y = new l;
        this.render = function(n, i) {
            if (0 !== e.length) {
                void 0 === c && r(),
                f.useProgram(c),
                m.initAttributes(),
                m.enableAttribute(u.position),
                m.enableAttribute(u.uv),
                m.disableUnusedAttributes(),
                m.disable(f.CULL_FACE),
                m.enable(f.BLEND),
                f.bindBuffer(f.ARRAY_BUFFER, o),
                f.vertexAttribPointer(u.position, 2, f.FLOAT, !1, 16, 0),
                f.vertexAttribPointer(u.uv, 2, f.FLOAT, !1, 16, 8),
                f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, s),
                f.uniformMatrix4fv(p.projectionMatrix, !1, i.projectionMatrix.elements),
                m.activeTexture(f.TEXTURE0),
                f.uniform1i(p.map, 0);
                var h = 0
                  , l = 0
                  , x = n.fog;
                x ? (f.uniform3f(p.fogColor, x.color.r, x.color.g, x.color.b),
                x && x.isFog ? (f.uniform1f(p.fogNear, x.near),
                f.uniform1f(p.fogFar, x.far),
                f.uniform1i(p.fogType, 1),
                h = 1,
                l = 1) : x && x.isFogExp2 && (f.uniform1f(p.fogDensity, x.density),
                f.uniform1i(p.fogType, 2),
                h = 2,
                l = 2)) : (f.uniform1i(p.fogType, 0),
                h = 0,
                l = 0);
                for (var _ = 0, b = e.length; _ < b; _++) {
                    var w = e[_];
                    w.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, w.matrixWorld),
                    w.z = -w.modelViewMatrix.elements[14]
                }
                e.sort(a);
                for (var M = [], _ = 0, b = e.length; _ < b; _++) {
                    var w = e[_]
                      , E = w.material;
                    if (E.visible !== !1) {
                        f.uniform1f(p.alphaTest, E.alphaTest),
                        f.uniformMatrix4fv(p.modelViewMatrix, !1, w.modelViewMatrix.elements),
                        w.matrixWorld.decompose(g, v, y),
                        M[0] = y.x,
                        M[1] = y.y;
                        var T = 0;
                        n.fog && E.fog && (T = l),
                        h !== T && (f.uniform1i(p.fogType, T),
                        h = T),
                        null !== E.map ? (f.uniform2f(p.uvOffset, E.map.offset.x, E.map.offset.y),
                        f.uniform2f(p.uvScale, E.map.repeat.x, E.map.repeat.y)) : (f.uniform2f(p.uvOffset, 0, 0),
                        f.uniform2f(p.uvScale, 1, 1)),
                        f.uniform1f(p.opacity, E.opacity),
                        f.uniform3f(p.color, E.color.r, E.color.g, E.color.b),
                        f.uniform1f(p.rotation, E.rotation),
                        f.uniform2fv(p.scale, M),
                        m.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst),
                        m.setDepthTest(E.depthTest),
                        m.setDepthWrite(E.depthWrite),
                        E.map ? t.setTexture2D(E.map, 0) : t.setTexture2D(d, 0),
                        f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0)
                    }
                }
                m.enable(f.CULL_FACE),
                t.resetGLState()
            }
        }
    }
    function Q() {
        Object.defineProperty(this, "id", {
            value: K()
        }),
        this.uuid = t.Math.generateUUID(),
        this.name = "",
        this.type = "Material",
        this.fog = !0,
        this.lights = !0,
        this.blending = Ri,
        this.side = _i,
        this.shading = Ei,
        this.vertexColors = Ti,
        this.opacity = 1,
        this.transparent = !1,
        this.blendSrc = ji,
        this.blendDst = Wi,
        this.blendEquation = Ni,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.depthFunc = ta,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.clippingPlanes = null,
        this.clipShadows = !1,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.alphaTest = 0,
        this.premultipliedAlpha = !1,
        this.overdraw = 0,
        this.visible = !0,
        this._needsUpdate = !0
    }
    function K() {
        return Fc++
    }
    function $(t) {
        Q.call(this),
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        },
        this.index0AttributeName = void 0,
        void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
        this.setValues(t))
    }
    function tt(t) {
        Q.call(this),
        this.type = "MeshDepthMaterial",
        this.depthPacking = Ro,
        this.skinning = !1,
        this.morphTargets = !1,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function et(t, e) {
        this.min = void 0 !== t ? t : new l((+(1 / 0)),(+(1 / 0)),(+(1 / 0))),
        this.max = void 0 !== e ? e : new l((-(1 / 0)),(-(1 / 0)),(-(1 / 0)))
    }
    function rt(t, e) {
        this.center = void 0 !== t ? t : new l,
        this.radius = void 0 !== e ? e : 0
    }
    function nt() {
        this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
        arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }
    function it(t, e) {
        this.normal = void 0 !== t ? t : new l(1,0,0),
        this.constant = void 0 !== e ? e : 0
    }
    function at(t, e, r, n, i, a) {
        this.planes = [void 0 !== t ? t : new it, void 0 !== e ? e : new it, void 0 !== r ? r : new it, void 0 !== n ? n : new it, void 0 !== i ? i : new it, void 0 !== a ? a : new it]
    }
    function ot(e, n, i, s) {
        function c(t, r, n, i) {
            var a = t.geometry
              , o = null
              , s = T
              , c = t.customDepthMaterial;
            if (n && (s = S,
            c = t.customDistanceMaterial),
            c)
                o = c;
            else {
                var h = !1;
                r.morphTargets && (a && a.isBufferGeometry ? h = a.morphAttributes && a.morphAttributes.position && a.morphAttributes.position.length > 0 : a && a.isGeometry && (h = a.morphTargets && a.morphTargets.length > 0));
                var l = t.isSkinnedMesh && r.skinning
                  , u = 0;
                h && (u |= w),
                l && (u |= M),
                o = s[u]
            }
            if (e.localClippingEnabled && r.clipShadows === !0 && 0 !== r.clippingPlanes.length) {
                var p = o.uuid
                  , d = r.uuid
                  , f = A[p];
                void 0 === f && (f = {},
                A[p] = f);
                var m = f[d];
                void 0 === m && (m = o.clone(),
                f[d] = m),
                o = m
            }
            o.visible = r.visible,
            o.wireframe = r.wireframe;
            var g = r.side;
            return B.renderSingleSided && g == wi && (g = _i),
            B.renderReverseSided && (g === _i ? g = bi : g === bi && (g = _i)),
            o.side = g,
            o.clipShadows = r.clipShadows,
            o.clippingPlanes = r.clippingPlanes,
            o.wireframeLinewidth = r.wireframeLinewidth,
            o.linewidth = r.linewidth,
            n && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(i),
            o
        }
        function h(t, e, r) {
            if (t.visible !== !1) {
                var n = 0 !== (t.layers.mask & e.layers.mask);
                if (n && (t.isMesh || t.isLine || t.isPoints) && t.castShadow && (t.frustumCulled === !1 || f.intersectsObject(t) === !0)) {
                    var i = t.material;
                    i.visible === !0 && (t.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, t.matrixWorld),
                    b.push(t))
                }
                for (var a = t.children, o = 0, s = a.length; o < s; o++)
                    h(a[o], e, r)
            }
        }
        var p = e.context
          , d = e.state
          , f = new at
          , m = new u
          , g = n.shadows
          , v = new r
          , y = new r(s.maxTextureSize,s.maxTextureSize)
          , x = new l
          , _ = new l
          , b = []
          , w = 1
          , M = 2
          , E = (w | M) + 1
          , T = new Array(E)
          , S = new Array(E)
          , A = {}
          , L = [new l(1,0,0), new l((-1),0,0), new l(0,0,1), new l(0,0,(-1)), new l(0,1,0), new l(0,(-1),0)]
          , R = [new l(0,1,0), new l(0,1,0), new l(0,1,0), new l(0,1,0), new l(0,0,1), new l(0,0,(-1))]
          , P = [new a, new a, new a, new a, new a, new a]
          , C = new tt;
        C.depthPacking = Po,
        C.clipping = !0;
        for (var U = Oc.distanceRGBA, I = t.UniformsUtils.clone(U.uniforms), D = 0; D !== E; ++D) {
            var N = 0 !== (D & w)
              , O = 0 !== (D & M)
              , F = C.clone();
            F.morphTargets = N,
            F.skinning = O,
            T[D] = F;
            var z = new $({
                defines: {
                    USE_SHADOWMAP: ""
                },
                uniforms: I,
                vertexShader: U.vertexShader,
                fragmentShader: U.fragmentShader,
                morphTargets: N,
                skinning: O,
                clipping: !0
            });
            S[D] = z
        }
        var B = this;
        this.enabled = !1,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this.type = yi,
        this.renderReverseSided = !0,
        this.renderSingleSided = !0,
        this.render = function(t, r) {
            if (B.enabled !== !1 && (B.autoUpdate !== !1 || B.needsUpdate !== !1) && 0 !== g.length) {
                d.clearColor(1, 1, 1, 1),
                d.disable(p.BLEND),
                d.setDepthTest(!0),
                d.setScissorTest(!1);
                for (var n, a, s = 0, l = g.length; s < l; s++) {
                    var u = g[s]
                      , w = u.shadow;
                    if (void 0 !== w) {
                        var M = w.camera;
                        if (v.copy(w.mapSize),
                        v.min(y),
                        u && u.isPointLight) {
                            n = 6,
                            a = !0;
                            var E = v.x
                              , T = v.y;
                            P[0].set(2 * E, T, E, T),
                            P[1].set(0, T, E, T),
                            P[2].set(3 * E, T, E, T),
                            P[3].set(E, T, E, T),
                            P[4].set(3 * E, 0, E, T),
                            P[5].set(E, 0, E, T),
                            v.x *= 4,
                            v.y *= 2
                        } else
                            n = 1,
                            a = !1;
                        if (null === w.map) {
                            var S = {
                                minFilter: Sa,
                                magFilter: Sa,
                                format: qa
                            };
                            w.map = new o(v.x,v.y,S),
                            M.updateProjectionMatrix()
                        }
                        w && w.isSpotLightShadow && w.update(u);
                        var A = w.map
                          , C = w.matrix;
                        _.setFromMatrixPosition(u.matrixWorld),
                        M.position.copy(_),
                        e.setRenderTarget(A),
                        e.clear();
                        for (var U = 0; U < n; U++) {
                            if (a) {
                                x.copy(M.position),
                                x.add(L[U]),
                                M.up.copy(R[U]),
                                M.lookAt(x);
                                var I = P[U];
                                d.viewport(I)
                            } else
                                x.setFromMatrixPosition(u.target.matrixWorld),
                                M.lookAt(x);
                            M.updateMatrixWorld(),
                            M.matrixWorldInverse.getInverse(M.matrixWorld),
                            C.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
                            C.multiply(M.projectionMatrix),
                            C.multiply(M.matrixWorldInverse),
                            m.multiplyMatrices(M.projectionMatrix, M.matrixWorldInverse),
                            f.setFromMatrix(m),
                            b.length = 0,
                            h(t, r, M);
                            for (var D = 0, N = b.length; D < N; D++) {
                                var O = b[D]
                                  , F = i.update(O)
                                  , z = O.material;
                                if (z && z.isMultiMaterial)
                                    for (var G = F.groups, H = z.materials, V = 0, k = G.length; V < k; V++) {
                                        var j = G[V]
                                          , W = H[j.materialIndex];
                                        if (W.visible === !0) {
                                            var X = c(O, W, a, _);
                                            e.renderBufferDirect(M, null, F, X, O, j)
                                        }
                                    }
                                else {
                                    var X = c(O, z, a, _);
                                    e.renderBufferDirect(M, null, F, X, O, null)
                                }
                            }
                        }
                    } else
                        console.warn("THREE.WebGLShadowMap:", u, "has no shadow.")
                }
                var q = e.getClearColor()
                  , Y = e.getClearAlpha();
                e.setClearColor(q, Y),
                B.needsUpdate = !1
            }
        }
    }
    function st(t, e) {
        this.origin = void 0 !== t ? t : new l,
        this.direction = void 0 !== e ? e : new l
    }
    function ct(t, e, r, n) {
        this._x = t || 0,
        this._y = e || 0,
        this._z = r || 0,
        this._order = n || ct.DefaultOrder
    }
    function ht() {
        this.mask = 1
    }
    function lt() {
        function e() {
            a.setFromEuler(i, !1)
        }
        function r() {
            i.setFromQuaternion(a, void 0, !1)
        }
        Object.defineProperty(this, "id", {
            value: ut()
        }),
        this.uuid = t.Math.generateUUID(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = lt.DefaultUp.clone();
        var n = new l
          , i = new ct
          , a = new h
          , o = new l(1,1,1);
        i.onChange(e),
        a.onChange(r),
        Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: n
            },
            rotation: {
                enumerable: !0,
                value: i
            },
            quaternion: {
                enumerable: !0,
                value: a
            },
            scale: {
                enumerable: !0,
                value: o
            },
            modelViewMatrix: {
                value: new u
            },
            normalMatrix: {
                value: new nt
            }
        }),
        this.matrix = new u,
        this.matrixWorld = new u,
        this.matrixAutoUpdate = lt.DefaultMatrixAutoUpdate,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new ht,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.userData = {}
    }
    function ut() {
        return zc++
    }
    function pt(t, e) {
        this.start = void 0 !== t ? t : new l,
        this.end = void 0 !== e ? e : new l
    }
    function dt(t, e, r) {
        this.a = void 0 !== t ? t : new l,
        this.b = void 0 !== e ? e : new l,
        this.c = void 0 !== r ? r : new l
    }
    function ft(t, e, r, n, i, a) {
        this.a = t,
        this.b = e,
        this.c = r,
        this.normal = n && n.isVector3 ? n : new l,
        this.vertexNormals = Array.isArray(n) ? n : [],
        this.color = i && i.isColor ? i : new q,
        this.vertexColors = Array.isArray(i) ? i : [],
        this.materialIndex = void 0 !== a ? a : 0
    }
    function mt(t) {
        Q.call(this),
        this.type = "MeshBasicMaterial",
        this.color = new q(16777215),
        this.map = null,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = aa,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function gt(e, r, n) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = t.Math.generateUUID(),
        this.array = e,
        this.itemSize = r,
        this.count = void 0 !== e ? e.length / r : 0,
        this.normalized = n === !0,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function vt(t, e) {
        return new gt(new Int8Array(t),e)
    }
    function yt(t, e) {
        return new gt(new Uint8Array(t),e)
    }
    function xt(t, e) {
        return new gt(new Uint8ClampedArray(t),e)
    }
    function _t(t, e) {
        return new gt(new Int16Array(t),e)
    }
    function bt(t, e) {
        return new gt(new Uint16Array(t),e)
    }
    function wt(t, e) {
        return new gt(new Int32Array(t),e)
    }
    function Mt(t, e) {
        return new gt(new Uint32Array(t),e)
    }
    function Et(t, e) {
        return new gt(new Float32Array(t),e)
    }
    function Tt(t, e) {
        return new gt(new Float64Array(t),e)
    }
    function St(t, e) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
        new gt(t,e).setDynamic(!0)
    }
    function At() {
        Object.defineProperty(this, "id", {
            value: Lt()
        }),
        this.uuid = t.Math.generateUUID(),
        this.name = "",
        this.type = "Geometry",
        this.vertices = [],
        this.colors = [],
        this.faces = [],
        this.faceVertexUvs = [[]],
        this.morphTargets = [],
        this.morphNormals = [],
        this.skinWeights = [],
        this.skinIndices = [],
        this.lineDistances = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.elementsNeedUpdate = !1,
        this.verticesNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.lineDistancesNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    function Lt() {
        return Bc++
    }
    function Rt() {
        Object.defineProperty(this, "id", {
            value: Lt()
        }),
        this.uuid = t.Math.generateUUID(),
        this.name = "",
        this.type = "DirectGeometry",
        this.indices = [],
        this.vertices = [],
        this.normals = [],
        this.colors = [],
        this.uvs = [],
        this.uvs2 = [],
        this.groups = [],
        this.morphTargets = {},
        this.skinWeights = [],
        this.skinIndices = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.verticesNeedUpdate = !1,
        this.normalsNeedUpdate = !1,
        this.colorsNeedUpdate = !1,
        this.uvsNeedUpdate = !1,
        this.groupsNeedUpdate = !1
    }
    function Pt() {
        Object.defineProperty(this, "id", {
            value: Lt()
        }),
        this.uuid = t.Math.generateUUID(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }
    function Ct(t, e) {
        lt.call(this),
        this.type = "Mesh",
        this.geometry = void 0 !== t ? t : new Pt,
        this.material = void 0 !== e ? e : new mt({
            color: 16777215 * Math.random()
        }),
        this.drawMode = yo,
        this.updateMorphTargets()
    }
    function Ut(t, e, r, n, i, a) {
        function o(t, e, r) {
            var n = 0;
            return n += (t + 1) * (e + 1) * 2,
            n += (t + 1) * (r + 1) * 2,
            n += (r + 1) * (e + 1) * 2
        }
        function s(t, e, r) {
            var n = 0;
            return n += t * e * 2,
            n += t * r * 2,
            n += r * e * 2,
            6 * n
        }
        function c(t, e, r, n, i, a, o, s, c, u, p) {
            for (var w = a / c, M = o / u, E = a / 2, T = o / 2, S = s / 2, A = c + 1, L = u + 1, R = 0, P = 0, C = new l, U = 0; U < L; U++)
                for (var I = U * M - T, D = 0; D < A; D++) {
                    var N = D * w - E;
                    C[t] = N * n,
                    C[e] = I * i,
                    C[r] = S,
                    f[v] = C.x,
                    f[v + 1] = C.y,
                    f[v + 2] = C.z,
                    C[t] = 0,
                    C[e] = 0,
                    C[r] = s > 0 ? 1 : -1,
                    m[v] = C.x,
                    m[v + 1] = C.y,
                    m[v + 2] = C.z,
                    g[y] = D / c,
                    g[y + 1] = 1 - U / u,
                    v += 3,
                    y += 2,
                    R += 1
                }
            for (U = 0; U < u; U++)
                for (D = 0; D < c; D++) {
                    var O = _ + D + A * U
                      , F = _ + D + A * (U + 1)
                      , z = _ + (D + 1) + A * (U + 1)
                      , B = _ + (D + 1) + A * U;
                    d[x] = O,
                    d[x + 1] = F,
                    d[x + 2] = B,
                    d[x + 3] = F,
                    d[x + 4] = z,
                    d[x + 5] = B,
                    x += 6,
                    P += 6
                }
            h.addGroup(b, P, p),
            b += P,
            _ += R
        }
        Pt.call(this),
        this.type = "BoxBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: r,
            widthSegments: n,
            heightSegments: i,
            depthSegments: a
        };
        var h = this;
        n = Math.floor(n) || 1,
        i = Math.floor(i) || 1,
        a = Math.floor(a) || 1;
        var u = o(n, i, a)
          , p = s(n, i, a)
          , d = new (p > 65535 ? Uint32Array : Uint16Array)(p)
          , f = new Float32Array(3 * u)
          , m = new Float32Array(3 * u)
          , g = new Float32Array(2 * u)
          , v = 0
          , y = 0
          , x = 0
          , _ = 0
          , b = 0;
        c("z", "y", "x", -1, -1, r, e, t, a, i, 0),
        c("z", "y", "x", 1, -1, r, e, -t, a, i, 1),
        c("x", "z", "y", 1, 1, t, r, e, n, a, 2),
        c("x", "z", "y", 1, -1, t, r, -e, n, a, 3),
        c("x", "y", "z", 1, -1, t, e, r, n, i, 4),
        c("x", "y", "z", -1, -1, t, e, -r, n, i, 5),
        this.setIndex(new gt(d,1)),
        this.addAttribute("position", new gt(f,3)),
        this.addAttribute("normal", new gt(m,3)),
        this.addAttribute("uv", new gt(g,2))
    }
    function It(t, e, r, n) {
        Pt.call(this),
        this.type = "PlaneBufferGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: r,
            heightSegments: n
        };
        for (var i = t / 2, a = e / 2, o = Math.floor(r) || 1, s = Math.floor(n) || 1, c = o + 1, h = s + 1, l = t / o, u = e / s, p = new Float32Array(c * h * 3), d = new Float32Array(c * h * 3), f = new Float32Array(c * h * 2), m = 0, g = 0, v = 0; v < h; v++)
            for (var y = v * u - a, x = 0; x < c; x++) {
                var _ = x * l - i;
                p[m] = _,
                p[m + 1] = -y,
                d[m + 2] = 1,
                f[g] = x / o,
                f[g + 1] = 1 - v / s,
                m += 3,
                g += 2
            }
        m = 0;
        for (var b = new (p.length / 3 > 65535 ? Uint32Array : Uint16Array)(o * s * 6), v = 0; v < s; v++)
            for (var x = 0; x < o; x++) {
                var w = x + c * v
                  , M = x + c * (v + 1)
                  , E = x + 1 + c * (v + 1)
                  , T = x + 1 + c * v;
                b[m] = w,
                b[m + 1] = M,
                b[m + 2] = T,
                b[m + 3] = M,
                b[m + 4] = E,
                b[m + 5] = T,
                m += 6
            }
        this.setIndex(new gt(b,1)),
        this.addAttribute("position", new gt(p,3)),
        this.addAttribute("normal", new gt(d,3)),
        this.addAttribute("uv", new gt(f,2))
    }
    function Dt() {
        lt.call(this),
        this.type = "Camera",
        this.matrixWorldInverse = new u,
        this.projectionMatrix = new u
    }
    function Nt(t, e, r, n) {
        Dt.call(this),
        this.type = "PerspectiveCamera",
        this.fov = void 0 !== t ? t : 50,
        this.zoom = 1,
        this.near = void 0 !== r ? r : .1,
        this.far = void 0 !== n ? n : 2e3,
        this.focus = 10,
        this.aspect = void 0 !== e ? e : 1,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    function Ot(t, e, r, n, i, a) {
        Dt.call(this),
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = t,
        this.right = e,
        this.top = r,
        this.bottom = n,
        this.near = void 0 !== i ? i : .1,
        this.far = void 0 !== a ? a : 2e3,
        this.updateProjectionMatrix()
    }
    function Ft(t, e, r) {
        function n(t) {
            s = t
        }
        function i(r) {
            r.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (c = t.UNSIGNED_INT,
            h = 4) : (c = t.UNSIGNED_SHORT,
            h = 2)
        }
        function a(e, n) {
            t.drawElements(s, n, c, e * h),
            r.calls++,
            r.vertices += n,
            s === t.TRIANGLES && (r.faces += n / 3)
        }
        function o(n, i, a) {
            var o = e.get("ANGLE_instanced_arrays");
            return null === o ? void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (o.drawElementsInstancedANGLE(s, a, c, i * h, n.maxInstancedCount),
            r.calls++,
            r.vertices += a * n.maxInstancedCount,
            void (s === t.TRIANGLES && (r.faces += n.maxInstancedCount * a / 3)))
        }
        var s, c, h;
        return {
            setMode: n,
            setIndex: i,
            render: a,
            renderInstances: o
        }
    }
    function zt(t, e, r) {
        function n(t) {
            o = t
        }
        function i(e, n) {
            t.drawArrays(o, e, n),
            r.calls++,
            r.vertices += n,
            o === t.TRIANGLES && (r.faces += n / 3)
        }
        function a(n) {
            var i = e.get("ANGLE_instanced_arrays");
            if (null === i)
                return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            var a = n.attributes.position
              , s = 0;
            a && a.isInterleavedBufferAttribute ? (s = a.data.count,
            i.drawArraysInstancedANGLE(o, 0, s, n.maxInstancedCount)) : (s = a.count,
            i.drawArraysInstancedANGLE(o, 0, s, n.maxInstancedCount)),
            r.calls++,
            r.vertices += s * n.maxInstancedCount,
            o === t.TRIANGLES && (r.faces += n.maxInstancedCount * s / 3)
        }
        var o;
        return {
            setMode: n,
            render: i,
            renderInstances: a
        }
    }
    function Bt() {
        var t = {};
        return {
            get: function(e) {
                if (void 0 !== t[e.id])
                    return t[e.id];
                var n;
                switch (e.type) {
                case "DirectionalLight":
                    n = {
                        direction: new l,
                        color: new q,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new r
                    };
                    break;
                case "SpotLight":
                    n = {
                        position: new l,
                        direction: new l,
                        color: new q,
                        distance: 0,
                        coneCos: 0,
                        penumbraCos: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new r
                    };
                    break;
                case "PointLight":
                    n = {
                        position: new l,
                        color: new q,
                        distance: 0,
                        decay: 0,
                        shadow: !1,
                        shadowBias: 0,
                        shadowRadius: 1,
                        shadowMapSize: new r
                    };
                    break;
                case "HemisphereLight":
                    n = {
                        direction: new l,
                        skyColor: new q,
                        groundColor: new q
                    }
                }
                return t[e.id] = n,
                n
            }
        }
    }
    function Gt(t) {
        for (var e = t.split("\n"), r = 0; r < e.length; r++)
            e[r] = r + 1 + ": " + e[r];
        return e.join("\n")
    }
    function Ht(t, e, r) {
        var n = t.createShader(e);
        return t.shaderSource(n, r),
        t.compileShader(n),
        t.getShaderParameter(n, t.COMPILE_STATUS) === !1 && console.error("THREE.WebGLShader: Shader couldn't compile."),
        "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), Gt(r)),
        n
    }
    function Vt(t) {
        switch (t) {
        case bo:
            return ["Linear", "( value )"];
        case wo:
            return ["sRGB", "( value )"];
        case Eo:
            return ["RGBE", "( value )"];
        case So:
            return ["RGBM", "( value, 7.0 )"];
        case Ao:
            return ["RGBM", "( value, 16.0 )"];
        case Lo:
            return ["RGBD", "( value, 256.0 )"];
        case Mo:
            return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
        default:
            throw new Error("unsupported encoding: " + t)
        }
    }
    function kt(t, e) {
        var r = Vt(e);
        return "vec4 " + t + "( vec4 value ) { return " + r[0] + "ToLinear" + r[1] + "; }"
    }
    function jt(t, e) {
        var r = Vt(e);
        return "vec4 " + t + "( vec4 value ) { return LinearTo" + r[0] + r[1] + "; }"
    }
    function Wt(t, e) {
        var r;
        switch (e) {
        case ha:
            r = "Linear";
            break;
        case la:
            r = "Reinhard";
            break;
        case ua:
            r = "Uncharted2";
            break;
        case pa:
            r = "OptimizedCineon";
            break;
        default:
            throw new Error("unsupported toneMapping: " + e)
        }
        return "vec3 " + t + "( vec3 color ) { return " + r + "ToneMapping( color ); }"
    }
    function Xt(t, e, r) {
        t = t || {};
        var n = [t.derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && r.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && r.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && r.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""];
        return n.filter(Zt).join("\n")
    }
    function qt(t) {
        var e = [];
        for (var r in t) {
            var n = t[r];
            n !== !1 && e.push("#define " + r + " " + n)
        }
        return e.join("\n")
    }
    function Yt(t, e, r) {
        for (var n = {}, i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < i; a++) {
            var o = t.getActiveAttrib(e, a)
              , s = o.name;
            n[s] = t.getAttribLocation(e, s)
        }
        return n
    }
    function Zt(t) {
        return "" !== t
    }
    function Jt(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }
    function Qt(t) {
        function e(t, e) {
            var r = Dc[e];
            if (void 0 === r)
                throw new Error("Can not resolve #include <" + e + ">");
            return Qt(r)
        }
        var r = /#include +<([\w\d.]+)>/g;
        return t.replace(r, e)
    }
    function Kt(t) {
        function e(t, e, r, n) {
            for (var i = "", a = parseInt(e); a < parseInt(r); a++)
                i += n.replace(/\[ i \]/g, "[ " + a + " ]");
            return i
        }
        var r = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
        return t.replace(r, e)
    }
    function $t(t, e, r, n) {
        var i = t.context
          , a = r.extensions
          , o = r.defines
          , s = r.__webglShader.vertexShader
          , c = r.__webglShader.fragmentShader
          , h = "SHADOWMAP_TYPE_BASIC";
        n.shadowMapType === yi ? h = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === xi && (h = "SHADOWMAP_TYPE_PCF_SOFT");
        var l = "ENVMAP_TYPE_CUBE"
          , u = "ENVMAP_MODE_REFLECTION"
          , p = "ENVMAP_BLENDING_MULTIPLY";
        if (n.envMap) {
            switch (r.envMap.mapping) {
            case fa:
            case ma:
                l = "ENVMAP_TYPE_CUBE";
                break;
            case xa:
            case _a:
                l = "ENVMAP_TYPE_CUBE_UV";
                break;
            case ga:
            case va:
                l = "ENVMAP_TYPE_EQUIREC";
                break;
            case ya:
                l = "ENVMAP_TYPE_SPHERE"
            }
            switch (r.envMap.mapping) {
            case ma:
            case va:
                u = "ENVMAP_MODE_REFRACTION"
            }
            switch (r.combine) {
            case aa:
                p = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case oa:
                p = "ENVMAP_BLENDING_MIX";
                break;
            case sa:
                p = "ENVMAP_BLENDING_ADD"
            }
        }
        var d, f, m = t.gammaFactor > 0 ? t.gammaFactor : 1, g = Xt(a, n, t.extensions), v = qt(o), y = i.createProgram();
        r.isRawShaderMaterial ? (d = [v, "\n"].filter(Zt).join("\n"),
        f = [g, v, "\n"].filter(Zt).join("\n")) : (d = ["precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + r.__webglShader.name, v, n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + m, "#define MAX_BONES " + n.maxBones, n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Zt).join("\n"),
        f = [g, "precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + r.__webglShader.name, v, n.alphaTest ? "#define ALPHATEST " + n.alphaTest : "", "#define GAMMA_FACTOR " + m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + p : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", n.envMap && t.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", n.toneMapping !== ca ? "#define TONE_MAPPING" : "", n.toneMapping !== ca ? Dc.tonemapping_pars_fragment : "", n.toneMapping !== ca ? Wt("toneMapping", n.toneMapping) : "", n.outputEncoding || n.mapEncoding || n.envMapEncoding || n.emissiveMapEncoding ? Dc.encodings_pars_fragment : "", n.mapEncoding ? kt("mapTexelToLinear", n.mapEncoding) : "", n.envMapEncoding ? kt("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMapEncoding ? kt("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.outputEncoding ? jt("linearToOutputTexel", n.outputEncoding) : "", n.depthPacking ? "#define DEPTH_PACKING " + r.depthPacking : "", "\n"].filter(Zt).join("\n")),
        s = Qt(s, n),
        s = Jt(s, n),
        c = Qt(c, n),
        c = Jt(c, n),
        r.isShaderMaterial || (s = Kt(s),
        c = Kt(c));
        var x = d + s
          , _ = f + c
          , b = Ht(i, i.VERTEX_SHADER, x)
          , w = Ht(i, i.FRAGMENT_SHADER, _);
        i.attachShader(y, b),
        i.attachShader(y, w),
        void 0 !== r.index0AttributeName ? i.bindAttribLocation(y, 0, r.index0AttributeName) : n.morphTargets === !0 && i.bindAttribLocation(y, 0, "position"),
        i.linkProgram(y);
        var M = i.getProgramInfoLog(y)
          , E = i.getShaderInfoLog(b)
          , T = i.getShaderInfoLog(w)
          , S = !0
          , A = !0;
        i.getProgramParameter(y, i.LINK_STATUS) === !1 ? (S = !1,
        console.error("THREE.WebGLProgram: shader error: ", i.getError(), "gl.VALIDATE_STATUS", i.getProgramParameter(y, i.VALIDATE_STATUS), "gl.getProgramInfoLog", M, E, T)) : "" !== M ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", M) : "" !== E && "" !== T || (A = !1),
        A && (this.diagnostics = {
            runnable: S,
            material: r,
            programLog: M,
            vertexShader: {
                log: E,
                prefix: d
            },
            fragmentShader: {
                log: T,
                prefix: f
            }
        }),
        i.deleteShader(b),
        i.deleteShader(w);
        var L;
        this.getUniforms = function() {
            return void 0 === L && (L = new X(i,y,t)),
            L
        }
        ;
        var R;
        return this.getAttributes = function() {
            return void 0 === R && (R = Yt(i, y)),
            R
        }
        ,
        this.destroy = function() {
            i.deleteProgram(y),
            this.program = void 0
        }
        ,
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                    this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                    this.getAttributes()
                }
            }
        }),
        this.id = Gc++,
        this.code = e,
        this.usedTimes = 1,
        this.program = y,
        this.vertexShader = b,
        this.fragmentShader = w,
        this
    }
    function te(t, e) {
        function r(t) {
            if (e.floatVertexTextures && t && t.skeleton && t.skeleton.useVertexTexture)
                return 1024;
            var r = e.maxVertexUniforms
              , n = Math.floor((r - 20) / 4)
              , i = n;
            return void 0 !== t && t && t.isSkinnedMesh && (i = Math.min(t.skeleton.bones.length, i),
            i < t.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + t.skeleton.bones.length + ", this GPU supports just " + i + " (try OpenGL instead of ANGLE)")),
            i
        }
        function n(t, e) {
            var r;
            return t ? t && t.isTexture ? r = t.encoding : t && t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
            r = t.texture.encoding) : r = bo,
            r === bo && e && (r = Mo),
            r
        }
        var i = []
          , a = {
            MeshDepthMaterial: "depth",
            MeshNormalMaterial: "normal",
            MeshBasicMaterial: "basic",
            MeshLambertMaterial: "lambert",
            MeshPhongMaterial: "phong",
            MeshStandardMaterial: "physical",
            MeshPhysicalMaterial: "physical",
            LineBasicMaterial: "basic",
            LineDashedMaterial: "dashed",
            PointsMaterial: "points"
        }
          , o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "depthPacking"];
        this.getParameters = function(i, o, s, c, h) {
            var l = a[i.type]
              , u = r(h)
              , p = t.getPrecision();
            null !== i.precision && (p = e.getMaxPrecision(i.precision),
            p !== i.precision && console.warn("THREE.WebGLProgram.getParameters:", i.precision, "not supported, using", p, "instead."));
            var d = t.getCurrentRenderTarget()
              , f = {
                shaderID: l,
                precision: p,
                supportsVertexTextures: e.vertexTextures,
                outputEncoding: n(d ? d.texture : null, t.gammaOutput),
                map: !!i.map,
                mapEncoding: n(i.map, t.gammaInput),
                envMap: !!i.envMap,
                envMapMode: i.envMap && i.envMap.mapping,
                envMapEncoding: n(i.envMap, t.gammaInput),
                envMapCubeUV: !!i.envMap && (i.envMap.mapping === xa || i.envMap.mapping === _a),
                lightMap: !!i.lightMap,
                aoMap: !!i.aoMap,
                emissiveMap: !!i.emissiveMap,
                emissiveMapEncoding: n(i.emissiveMap, t.gammaInput),
                bumpMap: !!i.bumpMap,
                normalMap: !!i.normalMap,
                displacementMap: !!i.displacementMap,
                roughnessMap: !!i.roughnessMap,
                metalnessMap: !!i.metalnessMap,
                specularMap: !!i.specularMap,
                alphaMap: !!i.alphaMap,
                combine: i.combine,
                vertexColors: i.vertexColors,
                fog: !!s,
                useFog: i.fog,
                fogExp: s && s.isFogExp2,
                flatShading: i.shading === Mi,
                sizeAttenuation: i.sizeAttenuation,
                logarithmicDepthBuffer: e.logarithmicDepthBuffer,
                skinning: i.skinning,
                maxBones: u,
                useVertexTexture: e.floatVertexTextures && h && h.skeleton && h.skeleton.useVertexTexture,
                morphTargets: i.morphTargets,
                morphNormals: i.morphNormals,
                maxMorphTargets: t.maxMorphTargets,
                maxMorphNormals: t.maxMorphNormals,
                numDirLights: o.directional.length,
                numPointLights: o.point.length,
                numSpotLights: o.spot.length,
                numHemiLights: o.hemi.length,
                numClippingPlanes: c,
                shadowMapEnabled: t.shadowMap.enabled && h.receiveShadow && o.shadows.length > 0,
                shadowMapType: t.shadowMap.type,
                toneMapping: t.toneMapping,
                physicallyCorrectLights: t.physicallyCorrectLights,
                premultipliedAlpha: i.premultipliedAlpha,
                alphaTest: i.alphaTest,
                doubleSided: i.side === wi,
                flipSided: i.side === bi,
                depthPacking: void 0 !== i.depthPacking && i.depthPacking
            };
            return f
        }
        ,
        this.getProgramCode = function(t, e) {
            var r = [];
            if (e.shaderID ? r.push(e.shaderID) : (r.push(t.fragmentShader),
            r.push(t.vertexShader)),
            void 0 !== t.defines)
                for (var n in t.defines)
                    r.push(n),
                    r.push(t.defines[n]);
            for (var i = 0; i < o.length; i++)
                r.push(e[o[i]]);
            return r.join()
        }
        ,
        this.acquireProgram = function(e, r, n) {
            for (var a, o = 0, s = i.length; o < s; o++) {
                var c = i[o];
                if (c.code === n) {
                    a = c,
                    ++a.usedTimes;
                    break
                }
            }
            return void 0 === a && (a = new $t(t,n,e,r),
            i.push(a)),
            a
        }
        ,
        this.releaseProgram = function(t) {
            if (0 === --t.usedTimes) {
                var e = i.indexOf(t);
                i[e] = i[i.length - 1],
                i.pop(),
                t.destroy()
            }
        }
        ,
        this.programs = i
    }
    function ee(t, e, r) {
        function n(t) {
            var i = t.target
              , s = c[i.id];
            null !== s.index && a(s.index),
            o(s.attributes),
            i.removeEventListener("dispose", n),
            delete c[i.id];
            var h = e.get(i);
            h.wireframe && a(h.wireframe),
            e.delete(i);
            var l = e.get(s);
            l.wireframe && a(l.wireframe),
            e.delete(s),
            r.memory.geometries--
        }
        function i(t) {
            return t.isInterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
        }
        function a(e) {
            var r = i(e);
            void 0 !== r && (t.deleteBuffer(r),
            s(e))
        }
        function o(t) {
            for (var e in t)
                a(t[e])
        }
        function s(t) {
            t.isInterleavedBufferAttribute ? e.delete(t.data) : e.delete(t)
        }
        var c = {};
        return {
            get: function(t) {
                var e = t.geometry;
                if (void 0 !== c[e.id])
                    return c[e.id];
                e.addEventListener("dispose", n);
                var i;
                return e.isBufferGeometry ? i = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new Pt).setFromObject(t)),
                i = e._bufferGeometry),
                c[e.id] = i,
                r.memory.geometries++,
                i
            }
        }
    }
    function re(t, e, r) {
        function n(e) {
            var r = l.get(e);
            e.geometry.isGeometry && r.updateFromObject(e);
            var n = r.index
              , a = r.attributes;
            null !== n && i(n, t.ELEMENT_ARRAY_BUFFER);
            for (var o in a)
                i(a[o], t.ARRAY_BUFFER);
            var s = r.morphAttributes;
            for (var o in s)
                for (var c = s[o], h = 0, u = c.length; h < u; h++)
                    i(c[h], t.ARRAY_BUFFER);
            return r
        }
        function i(t, r) {
            var n = t.isInterleavedBufferAttribute ? t.data : t
              , i = e.get(n);
            void 0 === i.__webglBuffer ? a(i, n, r) : i.version !== n.version && o(i, n, r)
        }
        function a(e, r, n) {
            e.__webglBuffer = t.createBuffer(),
            t.bindBuffer(n, e.__webglBuffer);
            var i = r.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW;
            t.bufferData(n, r.array, i),
            e.version = r.version
        }
        function o(e, r, n) {
            t.bindBuffer(n, e.__webglBuffer),
            r.dynamic === !1 || r.updateRange.count === -1 ? t.bufferSubData(n, 0, r.array) : 0 === r.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, r.updateRange.offset * r.array.BYTES_PER_ELEMENT, r.array.subarray(r.updateRange.offset, r.updateRange.offset + r.updateRange.count)),
            r.updateRange.count = 0),
            e.version = r.version
        }
        function s(t) {
            return t.isInterleavedBufferAttribute ? e.get(t.data).__webglBuffer : e.get(t).__webglBuffer
        }
        function c(r) {
            var n = e.get(r);
            if (void 0 !== n.wireframe)
                return n.wireframe;
            var a = []
              , o = r.index
              , s = r.attributes
              , c = s.position;
            if (null !== o)
                for (var l = {}, u = o.array, p = 0, d = u.length; p < d; p += 3) {
                    var f = u[p + 0]
                      , m = u[p + 1]
                      , g = u[p + 2];
                    h(l, f, m) && a.push(f, m),
                    h(l, m, g) && a.push(m, g),
                    h(l, g, f) && a.push(g, f)
                }
            else
                for (var u = s.position.array, p = 0, d = u.length / 3 - 1; p < d; p += 3) {
                    var f = p + 0
                      , m = p + 1
                      , g = p + 2;
                    a.push(f, m, m, g, g, f)
                }
            var v = c.count > 65535 ? Uint32Array : Uint16Array
              , y = new gt(new v(a),1);
            return i(y, t.ELEMENT_ARRAY_BUFFER),
            n.wireframe = y,
            y
        }
        function h(t, e, r) {
            if (e > r) {
                var n = e;
                e = r,
                r = n
            }
            var i = t[e];
            return void 0 === i ? (t[e] = [r],
            !0) : i.indexOf(r) === -1 && (i.push(r),
            !0)
        }
        var l = new ee(t,e,r);
        return {
            getAttributeBuffer: s,
            getWireframeAttribute: c,
            update: n
        }
    }
    function ne(e, r, n, i, a, o, s) {
        function c(t, e) {
            if (t.width > e || t.height > e) {
                var r = e / Math.max(t.width, t.height)
                  , n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                n.width = Math.floor(t.width * r),
                n.height = Math.floor(t.height * r);
                var i = n.getContext("2d");
                return i.drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height),
                console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n.width + "x" + n.height, t),
                n
            }
            return t
        }
        function h(e) {
            return t.Math.isPowerOfTwo(e.width) && t.Math.isPowerOfTwo(e.height)
        }
        function l(e) {
            if (e instanceof HTMLImageElement || e instanceof HTMLCanvasElement) {
                var r = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                r.width = t.Math.nearestPowerOfTwo(e.width),
                r.height = t.Math.nearestPowerOfTwo(e.height);
                var n = r.getContext("2d");
                return n.drawImage(e, 0, 0, r.width, r.height),
                console.warn("THREE.WebGLRenderer: image is not power of two (" + e.width + "x" + e.height + "). Resized to " + r.width + "x" + r.height, e),
                r
            }
            return e
        }
        function u(t) {
            return t.wrapS !== Ma || t.wrapT !== Ma || t.minFilter !== Sa && t.minFilter !== Ra
        }
        function p(t) {
            return t === Sa || t === Aa || t === La ? e.NEAREST : e.LINEAR
        }
        function d(t) {
            var e = t.target;
            e.removeEventListener("dispose", d),
            m(e),
            L.textures--
        }
        function f(t) {
            var e = t.target;
            e.removeEventListener("dispose", f),
            g(e),
            L.textures--
        }
        function m(t) {
            var r = i.get(t);
            if (t.image && r.__image__webglTextureCube)
                e.deleteTexture(r.__image__webglTextureCube);
            else {
                if (void 0 === r.__webglInit)
                    return;
                e.deleteTexture(r.__webglTexture)
            }
            i.delete(t)
        }
        function g(t) {
            var r = i.get(t)
              , n = i.get(t.texture);
            if (t) {
                if (void 0 !== n.__webglTexture && e.deleteTexture(n.__webglTexture),
                t.depthTexture && t.depthTexture.dispose(),
                t && t.isWebGLMultiRenderTarget && r.__webglAttachments)
                    for (var a = 0; a < t.attachments.length; a++) {
                        var o = i.get(t.attachments[a]);
                        e.deleteTexture(o.__webglTexture)
                    }
                if (t && t.isWebGLRenderTargetCube)
                    for (var a = 0; a < 6; a++)
                        e.deleteFramebuffer(r.__webglFramebuffer[a]),
                        r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer[a]);
                else
                    e.deleteFramebuffer(r.__webglFramebuffer),
                    r.__webglDepthbuffer && e.deleteRenderbuffer(r.__webglDepthbuffer);
                i.delete(t.texture),
                i.delete(t)
            }
        }
        function v(t, r) {
            var a = i.get(t);
            if (t.version > 0 && a.__version !== t.version) {
                var o = t.image;
                if (void 0 === o)
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", t);
                else {
                    if (o.complete !== !1)
                        return void b(a, t, r);
                    console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", t)
                }
            }
            n.activeTexture(e.TEXTURE0 + r),
            n.bindTexture(e.TEXTURE_2D, a.__webglTexture)
        }
        function y(t, r) {
            var s = i.get(t);
            if (6 === t.image.length)
                if (t.version > 0 && s.__version !== t.version) {
                    s.__image__webglTextureCube || (t.addEventListener("dispose", d),
                    s.__image__webglTextureCube = e.createTexture(),
                    L.textures++),
                    n.activeTexture(e.TEXTURE0 + r),
                    n.bindTexture(e.TEXTURE_CUBE_MAP, s.__image__webglTextureCube),
                    e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, t.flipY);
                    for (var l = t && t.isCompressedTexture, u = t.image[0] && t.image[0].isDataTexture, p = [], f = 0; f < 6; f++)
                        l || u ? p[f] = u ? t.image[f].image : t.image[f] : p[f] = c(t.image[f], a.maxCubemapSize);
                    var m = p[0]
                      , g = h(m)
                      , v = o(t.format)
                      , y = o(t.type);
                    _(e.TEXTURE_CUBE_MAP, t, g);
                    for (var f = 0; f < 6; f++)
                        if (l)
                            for (var x, b = p[f].mipmaps, w = 0, M = b.length; w < M; w++)
                                x = b[w],
                                t.format !== qa && t.format !== Xa ? n.getCompressedTextureFormats().indexOf(v) > -1 ? n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, w, v, x.width, x.height, 0, x.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, w, v, x.width, x.height, 0, v, y, x.data);
                        else
                            u ? n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, v, p[f].width, p[f].height, 0, v, y, p[f].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + f, 0, v, v, y, p[f]);
                    t.generateMipmaps && g && e.generateMipmap(e.TEXTURE_CUBE_MAP),
                    s.__version = t.version,
                    t.onUpdate && t.onUpdate(t)
                } else
                    n.activeTexture(e.TEXTURE0 + r),
                    n.bindTexture(e.TEXTURE_CUBE_MAP, s.__image__webglTextureCube)
        }
        function x(t, r) {
            n.activeTexture(e.TEXTURE0 + r),
            n.bindTexture(e.TEXTURE_CUBE_MAP, i.get(t).__webglTexture)
        }
        function _(t, n, s) {
            var c;
            if (s ? (e.texParameteri(t, e.TEXTURE_WRAP_S, o(n.wrapS)),
            e.texParameteri(t, e.TEXTURE_WRAP_T, o(n.wrapT)),
            e.texParameteri(t, e.TEXTURE_MAG_FILTER, o(n.magFilter)),
            e.texParameteri(t, e.TEXTURE_MIN_FILTER, o(n.minFilter))) : (e.texParameteri(t, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
            e.texParameteri(t, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
            n.wrapS === Ma && n.wrapT === Ma || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", n),
            e.texParameteri(t, e.TEXTURE_MAG_FILTER, p(n.magFilter)),
            e.texParameteri(t, e.TEXTURE_MIN_FILTER, p(n.minFilter)),
            n.minFilter !== Sa && n.minFilter !== Ra && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", n)),
            c = r.get("EXT_texture_filter_anisotropic")) {
                if (n.type === Ba && null === r.get("OES_texture_float_linear"))
                    return;
                if (n.type === Ga && null === r.get("OES_texture_half_float_linear"))
                    return;
                (n.anisotropy > 1 || i.get(n).__currentAnisotropy) && (e.texParameterf(t, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(n.anisotropy, a.getMaxAnisotropy())),
                i.get(n).__currentAnisotropy = n.anisotropy)
            }
        }
        function b(t, r, i) {
            void 0 === t.__webglInit && (t.__webglInit = !0,
            r.addEventListener("dispose", d),
            t.__webglTexture = e.createTexture(),
            L.textures++),
            n.activeTexture(e.TEXTURE0 + i),
            n.bindTexture(e.TEXTURE_2D, t.__webglTexture),
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, r.flipY),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha),
            e.pixelStorei(e.UNPACK_ALIGNMENT, r.unpackAlignment);
            var s = c(r.image, a.maxTextureSize);
            u(r) && h(s) === !1 && (s = l(s));
            var p = h(s)
              , f = o(r.format)
              , m = o(r.type);
            _(e.TEXTURE_2D, r, p);
            var g, v = r.mipmaps;
            if (r && r.isDepthTexture) {
                var y = e.DEPTH_COMPONENT;
                if (r.type === Ba) {
                    if (!R)
                        throw new Error("Float Depth Texture only supported in WebGL2.0");
                    y = e.DEPTH_COMPONENT32F
                } else
                    R && (y = e.DEPTH_COMPONENT16);
                r.format === Ka && (y = e.DEPTH_STENCIL),
                n.texImage2D(e.TEXTURE_2D, 0, y, s.width, s.height, 0, f, m, null)
            } else if (r && r.isDataTexture)
                if (v.length > 0 && p) {
                    for (var x = 0, b = v.length; x < b; x++)
                        g = v[x],
                        n.texImage2D(e.TEXTURE_2D, x, f, g.width, g.height, 0, f, m, g.data);
                    r.generateMipmaps = !1
                } else
                    n.texImage2D(e.TEXTURE_2D, 0, f, s.width, s.height, 0, f, m, s.data);
            else if (r && r.isCompressedTexture)
                for (var x = 0, b = v.length; x < b; x++)
                    g = v[x],
                    r.format !== qa && r.format !== Xa ? n.getCompressedTextureFormats().indexOf(f) > -1 ? n.compressedTexImage2D(e.TEXTURE_2D, x, f, g.width, g.height, 0, g.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : n.texImage2D(e.TEXTURE_2D, x, f, g.width, g.height, 0, f, m, g.data);
            else if (v.length > 0 && p) {
                for (var x = 0, b = v.length; x < b; x++)
                    g = v[x],
                    n.texImage2D(e.TEXTURE_2D, x, f, f, m, g);
                r.generateMipmaps = !1
            } else
                n.texImage2D(e.TEXTURE_2D, 0, f, f, m, s);
            r.generateMipmaps && p && e.generateMipmap(e.TEXTURE_2D),
            t.__version = r.version,
            r.onUpdate && r.onUpdate(r)
        }
        function w(t, r, a, s, c, h) {
            var l = o(s.format)
              , u = o(s.type);
            n.texImage2D(h, 0, l, r, a, 0, l, u, null),
            e.bindFramebuffer(e.FRAMEBUFFER, t),
            e.framebufferTexture2D(e.FRAMEBUFFER, c, h, i.get(s).__webglTexture, 0),
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
        function M(t, r) {
            e.bindRenderbuffer(e.RENDERBUFFER, t),
            r.depthBuffer && !r.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, r.width, r.height),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, t)) : r.depthBuffer && r.stencilBuffer ? (e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, r.width, r.height),
            e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, t)) : e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, r.width, r.height),
            e.bindRenderbuffer(e.RENDERBUFFER, null)
        }
        function E(t, r) {
            var n = r && r.isWebGLRenderTargetCube;
            if (n)
                throw new Error("Depth Texture with cube render targets is not supported!");
            if (e.bindFramebuffer(e.FRAMEBUFFER, t),
            !r.depthTexture || !r.depthTexture.isDepthTexture)
                throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
            i.get(r.depthTexture).__webglTexture && r.depthTexture.image.width === r.width && r.depthTexture.image.height === r.height || (r.depthTexture.image.width = r.width,
            r.depthTexture.image.height = r.height,
            r.depthTexture.needsUpdate = !0),
            v(r.depthTexture, 0);
            var a = i.get(r.depthTexture).__webglTexture;
            if (r.depthTexture.format === Qa)
                e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.TEXTURE_2D, a, 0);
            else {
                if (r.depthTexture.format !== Ka)
                    throw new Error("Unknown depthTexture format");
                e.framebufferTexture2D(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.TEXTURE_2D, a, 0)
            }
        }
        function T(t) {
            var r = i.get(t)
              , n = t && t.isWebGLRenderTargetCube;
            if (t.depthTexture) {
                if (n)
                    throw new Error("target.depthTexture not supported in Cube render targets");
                E(r.__webglFramebuffer, t)
            } else if (n) {
                r.__webglDepthbuffer = [];
                for (var a = 0; a < 6; a++)
                    e.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer[a]),
                    r.__webglDepthbuffer[a] = e.createRenderbuffer(),
                    M(r.__webglDepthbuffer[a], t)
            } else
                e.bindFramebuffer(e.FRAMEBUFFER, r.__webglFramebuffer),
                r.__webglDepthbuffer = e.createRenderbuffer(),
                M(r.__webglDepthbuffer, t);
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
        function S(t) {
            var r = i.get(t)
              , a = i.get(t.texture);
            if (t.addEventListener("dispose", f),
            t.isWebGLMultiRenderTarget) {
                r.__webglAttachmentTextures = [],
                r.__webglAttachments = [];
                for (var o = 0; o < t.attachments.length; o++) {
                    var s = i.get(t.attachments[o]);
                    s.__webglTexture = e.createTexture(),
                    r.__webglAttachments[o] = e.COLOR_ATTACHMENT0 + o,
                    L.textures++
                }
            } else
                a.__webglTexture = e.createTexture(),
                L.textures++;
            var c = t && t.isWebGLRenderTargetCube
              , l = h(t);
            if (c) {
                r.__webglFramebuffer = [];
                for (var o = 0; o < 6; o++)
                    r.__webglFramebuffer[o] = e.createFramebuffer()
            } else
                r.__webglFramebuffer = e.createFramebuffer();
            if (c) {
                n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture),
                _(e.TEXTURE_CUBE_MAP, t.texture, l);
                for (var o = 0; o < 6; o++)
                    w(r.__webglFramebuffer[o], t.width, t.height, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + o);
                t.texture.generateMipmaps && l && e.generateMipmap(e.TEXTURE_CUBE_MAP),
                n.bindTexture(e.TEXTURE_CUBE_MAP, null)
            } else {
                if (t.isWebGLMultiRenderTarget)
                    for (var o = 0; o < t.attachments.length; o++) {
                        var u = t.attachments[o]
                          , s = i.get(u);
                        n.bindTexture(e.TEXTURE_2D, s.__webglTexture),
                        _(e.TEXTURE_2D, u, l),
                        w(r.__webglFramebuffer, t.width, t.height, u, e.COLOR_ATTACHMENT0 + o, e.TEXTURE_2D),
                        u.generateMipmaps && l && e.generateMipmap(e.TEXTURE_2D)
                    }
                else
                    n.bindTexture(e.TEXTURE_2D, a.__webglTexture),
                    _(e.TEXTURE_2D, t.texture, l),
                    w(r.__webglFramebuffer, t.width, t.height, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D),
                    t.texture.generateMipmaps && l && e.generateMipmap(e.TEXTURE_2D);
                n.bindTexture(e.TEXTURE_2D, null)
            }
            t.depthBuffer && T(t)
        }
        function A(t) {
            var r = t && t.isWebGLRenderTargetCube ? e.TEXTURE_CUBE_MAP : e.TEXTURE_2D
              , a = t.texture;
            if (t.isWebGLMultiRenderTarget)
                for (var o = 0; o < t.attachments.length; o++)
                    a = i.get(t.attachments[o]).__webglTexture,
                    a.generateMipmaps && h(t) && a.minFilter !== Sa && a.minFilter !== Ra && (n.bindTexture(r, a),
                    e.generateMipmap(r));
            else if (a.generateMipmaps && h(t) && a.minFilter !== Sa && a.minFilter !== Ra) {
                var s = i.get(a).__webglTexture;
                n.bindTexture(r, s),
                e.generateMipmap(r)
            }
            n.bindTexture(r, null)
        }
        var L = s.memory
          , R = "undefined" != typeof WebGL2RenderingContext && e instanceof WebGL2RenderingContext;
        this.setTexture2D = v,
        this.setTextureCube = y,
        this.setTextureCubeDynamic = x,
        this.setupRenderTarget = S,
        this.updateRenderTargetMipmap = A
    }
    function ie() {
        var t = {};
        return {
            get: function(e) {
                var r = e.uuid
                  , n = t[r];
                return void 0 === n && (n = {},
                t[r] = n),
                n
            },
            delete: function(e) {
                delete t[e.uuid]
            },
            clear: function() {
                t = {}
            }
        }
    }
    function ae(t, e, r) {
        function n() {
            var e = !1
              , r = new a
              , n = null
              , i = new a;
            return {
                setMask: function(r) {
                    n === r || e || (t.colorMask(r, r, r, r),
                    n = r)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e, n, a, o) {
                    r.set(e, n, a, o),
                    i.equals(r) === !1 && (t.clearColor(e, n, a, o),
                    i.copy(r))
                },
                reset: function() {
                    e = !1,
                    n = null,
                    i.set(0, 0, 0, 1)
                }
            }
        }
        function i() {
            var e = !1
              , r = null
              , n = null
              , i = null;
            return {
                setTest: function(e) {
                    e ? d(t.DEPTH_TEST) : f(t.DEPTH_TEST)
                },
                setMask: function(n) {
                    r === n || e || (t.depthMask(n),
                    r = n)
                },
                setFunc: function(e) {
                    if (n !== e) {
                        if (e)
                            switch (e) {
                            case Qi:
                                t.depthFunc(t.NEVER);
                                break;
                            case Ki:
                                t.depthFunc(t.ALWAYS);
                                break;
                            case $i:
                                t.depthFunc(t.LESS);
                                break;
                            case ta:
                                t.depthFunc(t.LEQUAL);
                                break;
                            case ea:
                                t.depthFunc(t.EQUAL);
                                break;
                            case ra:
                                t.depthFunc(t.GEQUAL);
                                break;
                            case na:
                                t.depthFunc(t.GREATER);
                                break;
                            case ia:
                                t.depthFunc(t.NOTEQUAL);
                                break;
                            default:
                                t.depthFunc(t.LEQUAL)
                            }
                        else
                            t.depthFunc(t.LEQUAL);
                        n = e
                    }
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    i !== e && (t.clearDepth(e),
                    i = e)
                },
                reset: function() {
                    e = !1,
                    r = null,
                    n = null,
                    i = null
                }
            }
        }
        function o() {
            var e = !1
              , r = null
              , n = null
              , i = null
              , a = null
              , o = null
              , s = null
              , c = null
              , h = null;
            return {
                setTest: function(e) {
                    e ? d(t.STENCIL_TEST) : f(t.STENCIL_TEST)
                },
                setMask: function(n) {
                    r === n || e || (t.stencilMask(n),
                    r = n)
                },
                setFunc: function(e, r, o) {
                    n === e && i === r && a === o || (t.stencilFunc(e, r, o),
                    n = e,
                    i = r,
                    a = o)
                },
                setOp: function(e, r, n) {
                    o === e && s === r && c === n || (t.stencilOp(e, r, n),
                    o = e,
                    s = r,
                    c = n)
                },
                setLocked: function(t) {
                    e = t
                },
                setClear: function(e) {
                    h !== e && (t.clearStencil(e),
                    h = e)
                },
                reset: function() {
                    e = !1,
                    r = null,
                    n = null,
                    i = null,
                    a = null,
                    o = null,
                    s = null,
                    c = null,
                    h = null
                }
            }
        }
        function s(e, r, n) {
            var i = new Uint8Array(4)
              , a = t.createTexture();
            t.bindTexture(e, a),
            t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
            for (var o = 0; o < n; o++)
                t.texImage2D(r + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, i);
            return a
        }
        function c() {
            N(0, 0, 0, 1),
            O(1),
            F(0),
            d(t.DEPTH_TEST),
            _(ta),
            T(!1),
            S(pi),
            d(t.CULL_FACE),
            d(t.BLEND),
            g(Ri)
        }
        function h() {
            for (var t = 0, e = W.length; t < e; t++)
                W[t] = 0
        }
        function l(r) {
            if (W[r] = 1,
            0 === X[r] && (t.enableVertexAttribArray(r),
            X[r] = 1),
            0 !== q[r]) {
                var n = e.get("ANGLE_instanced_arrays");
                n.vertexAttribDivisorANGLE(r, 0),
                q[r] = 0
            }
        }
        function u(e, r, n) {
            W[e] = 1,
            0 === X[e] && (t.enableVertexAttribArray(e),
            X[e] = 1),
            q[e] !== r && (n.vertexAttribDivisorANGLE(e, r),
            q[e] = r)
        }
        function p() {
            for (var e = 0, r = X.length; e !== r; ++e)
                X[e] !== W[e] && (t.disableVertexAttribArray(e),
                X[e] = 0)
        }
        function d(e) {
            Y[e] !== !0 && (t.enable(e),
            Y[e] = !0)
        }
        function f(e) {
            Y[e] !== !1 && (t.disable(e),
            Y[e] = !1)
        }
        function m() {
            if (null === Z && (Z = [],
            e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
                for (var r = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < r.length; n++)
                    Z.push(r[n]);
            return Z
        }
        function g(e, n, i, a, o, s, c, h) {
            return e === Li ? (f(t.BLEND),
            void (J = e)) : (d(t.BLEND),
            e === J && h === nt || (e === Pi ? h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD),
            t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === Ci ? h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD),
            t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === Ui ? h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD),
            t.blendFunc(t.ZERO, t.SRC_COLOR)) : h ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD),
            t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)),
            J = e,
            nt = h),
            void (e === Ii ? (o = o || n,
            s = s || i,
            c = c || a,
            n === Q && o === tt || (t.blendEquationSeparate(r(n), r(o)),
            Q = n,
            tt = o),
            i === K && a === $ && s === et && c === rt || (t.blendFuncSeparate(r(i), r(a), r(s), r(c)),
            K = i,
            $ = a,
            et = s,
            rt = c)) : (Q = null,
            K = null,
            $ = null,
            tt = null,
            et = null,
            rt = null)))
        }
        function v(t) {
            H.setMask(t)
        }
        function y(t) {
            V.setTest(t)
        }
        function x(t) {
            V.setMask(t)
        }
        function _(t) {
            V.setFunc(t)
        }
        function b(t) {
            k.setTest(t)
        }
        function w(t) {
            k.setMask(t)
        }
        function M(t, e, r) {
            k.setFunc(t, e, r)
        }
        function E(t, e, r) {
            k.setOp(t, e, r)
        }
        function T(e) {
            it !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW),
            it = e)
        }
        function S(e) {
            e !== ui ? (d(t.CULL_FACE),
            e !== at && (e === pi ? t.cullFace(t.BACK) : e === di ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : f(t.CULL_FACE),
            at = e
        }
        function A(e) {
            e !== ot && (t.lineWidth(e),
            ot = e)
        }
        function L(e, r, n) {
            e ? (d(t.POLYGON_OFFSET_FILL),
            st === r && ct === n || (t.polygonOffset(r, n),
            st = r,
            ct = n)) : f(t.POLYGON_OFFSET_FILL)
        }
        function R() {
            return ht
        }
        function P(e) {
            ht = e,
            e ? d(t.SCISSOR_TEST) : f(t.SCISSOR_TEST)
        }
        function C(e) {
            void 0 === e && (e = t.TEXTURE0 + lt - 1),
            ut !== e && (t.activeTexture(e),
            ut = e)
        }
        function U(e, r) {
            null === ut && C();
            var n = pt[ut];
            void 0 === n && (n = {
                type: void 0,
                texture: void 0
            },
            pt[ut] = n),
            n.type === e && n.texture === r || (t.bindTexture(e, r || mt[e]),
            n.type = e,
            n.texture = r)
        }
        function I() {
            try {
                t.compressedTexImage2D.apply(t, arguments)
            } catch (t) {
                console.error(t)
            }
        }
        function D() {
            try {
                t.texImage2D.apply(t, arguments)
            } catch (t) {
                console.error(t)
            }
        }
        function N(t, e, r, n) {
            H.setClear(t, e, r, n)
        }
        function O(t) {
            V.setClear(t)
        }
        function F(t) {
            k.setClear(t)
        }
        function z(e) {
            dt.equals(e) === !1 && (t.scissor(e.x, e.y, e.z, e.w),
            dt.copy(e))
        }
        function B(e) {
            ft.equals(e) === !1 && (t.viewport(e.x, e.y, e.z, e.w),
            ft.copy(e))
        }
        function G() {
            for (var e = 0; e < X.length; e++)
                1 === X[e] && (t.disableVertexAttribArray(e),
                X[e] = 0);
            Y = {},
            Z = null,
            ut = null,
            pt = {},
            J = null,
            it = null,
            at = null,
            H.reset(),
            V.reset(),
            k.reset()
        }
        var H = new n
          , V = new i
          , k = new o
          , j = t.getParameter(t.MAX_VERTEX_ATTRIBS)
          , W = new Uint8Array(j)
          , X = new Uint8Array(j)
          , q = new Uint8Array(j)
          , Y = {}
          , Z = null
          , J = null
          , Q = null
          , K = null
          , $ = null
          , tt = null
          , et = null
          , rt = null
          , nt = !1
          , it = null
          , at = null
          , ot = null
          , st = null
          , ct = null
          , ht = null
          , lt = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)
          , ut = null
          , pt = {}
          , dt = new a
          , ft = new a
          , mt = {};
        return mt[t.TEXTURE_2D] = s(t.TEXTURE_2D, t.TEXTURE_2D, 1),
        mt[t.TEXTURE_CUBE_MAP] = s(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
        {
            buffers: {
                color: H,
                depth: V,
                stencil: k
            },
            init: c,
            initAttributes: h,
            enableAttribute: l,
            enableAttributeAndDivisor: u,
            disableUnusedAttributes: p,
            enable: d,
            disable: f,
            getCompressedTextureFormats: m,
            setBlending: g,
            setColorWrite: v,
            setDepthTest: y,
            setDepthWrite: x,
            setDepthFunc: _,
            setStencilTest: b,
            setStencilWrite: w,
            setStencilFunc: M,
            setStencilOp: E,
            setFlipSided: T,
            setCullFace: S,
            setLineWidth: A,
            setPolygonOffset: L,
            getScissorTest: R,
            setScissorTest: P,
            activeTexture: C,
            bindTexture: U,
            compressedTexImage2D: I,
            texImage2D: D,
            clearColor: N,
            clearDepth: O,
            clearStencil: F,
            scissor: z,
            viewport: B,
            reset: G
        }
    }
    function oe(t, e, r) {
        function n() {
            if (void 0 !== a)
                return a;
            var r = e.get("EXT_texture_filter_anisotropic");
            return a = null !== r ? t.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
        }
        function i(e) {
            if ("highp" === e) {
                if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0)
                    return "highp";
                e = "mediump"
            }
            return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
        }
        var a, o = void 0 !== r.precision ? r.precision : "highp", s = i(o);
        s !== o && (console.warn("THREE.WebGLRenderer:", o, "not supported, using", s, "instead."),
        o = s);
        var c = r.logarithmicDepthBuffer === !0 && !!e.get("EXT_frag_depth")
          , h = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)
          , l = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
          , u = t.getParameter(t.MAX_TEXTURE_SIZE)
          , p = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE)
          , d = t.getParameter(t.MAX_VERTEX_ATTRIBS)
          , f = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS)
          , m = t.getParameter(t.MAX_VARYING_VECTORS)
          , g = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS)
          , v = l > 0
          , y = !!e.get("OES_texture_float")
          , x = v && y;
        return {
            getMaxAnisotropy: n,
            getMaxPrecision: i,
            precision: o,
            logarithmicDepthBuffer: c,
            maxTextures: h,
            maxVertexTextures: l,
            maxTextureSize: u,
            maxCubemapSize: p,
            maxAttributes: d,
            maxVertexUniforms: f,
            maxVaryings: m,
            maxFragmentUniforms: g,
            vertexTextures: v,
            floatFragmentTextures: y,
            floatVertexTextures: x
        }
    }
    function se(t) {
        var e = {};
        return {
            get: function(r) {
                if (void 0 !== e[r])
                    return e[r];
                var n;
                switch (r) {
                case "WEBGL_depth_texture":
                    n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                    break;
                case "EXT_texture_filter_anisotropic":
                    n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                    break;
                case "WEBGL_compressed_texture_s3tc":
                    n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                    break;
                case "WEBGL_compressed_texture_pvrtc":
                    n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                    break;
                case "WEBGL_compressed_texture_etc1":
                    n = t.getExtension("WEBGL_compressed_texture_etc1");
                    break;
                default:
                    n = t.getExtension(r)
                }
                return null === n && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."),
                e[r] = n,
                n
            }
        }
    }
    function ce() {
        function t() {
            h.value !== n && (h.value = n,
            h.needsUpdate = i > 0),
            r.numPlanes = i
        }
        function e(t, e, n, i) {
            var a = null !== t ? t.length : 0
              , o = null;
            if (0 !== a) {
                if (o = h.value,
                i !== !0 || null === o) {
                    var l = n + 4 * a
                      , u = e.matrixWorldInverse;
                    c.getNormalMatrix(u),
                    (null === o || o.length < l) && (o = new Float32Array(l));
                    for (var p = 0, d = n; p !== a; ++p,
                    d += 4)
                        s.copy(t[p]).applyMatrix4(u, c),
                        s.normal.toArray(o, d),
                        o[d + 3] = s.constant
                }
                h.value = o,
                h.needsUpdate = !0
            }
            return r.numPlanes = a,
            o
        }
        var r = this
          , n = null
          , i = 0
          , a = !1
          , o = !1
          , s = new it
          , c = new nt
          , h = {
            value: null,
            needsUpdate: !1
        };
        this.uniform = h,
        this.numPlanes = 0,
        this.init = function(t, r, o) {
            var s = 0 !== t.length || r || 0 !== i || a;
            return a = r,
            n = e(t, o, 0),
            i = t.length,
            s
        }
        ,
        this.beginShadows = function() {
            o = !0,
            e(null)
        }
        ,
        this.endShadows = function() {
            o = !1,
            t()
        }
        ,
        this.setState = function(r, s, c, l, u) {
            if (!a || null === r || 0 === r.length || o && !s)
                o ? e(null) : t();
            else {
                var p = o ? 0 : i
                  , d = 4 * p
                  , f = l.clippingState || null;
                h.value = f,
                f = e(r, c, d, u);
                for (var m = 0; m !== d; ++m)
                    f[m] = n[m];
                l.clippingState = f,
                this.numPlanes += p
            }
        }
    }
    function he(e) {
        function r() {
            return null === pt ? St : 1
        }
        function n(t, e, r, n) {
            Y === !0 && (t *= n,
            e *= n,
            r *= n),
            $t.clearColor(t, e, r, n)
        }
        function i() {
            $t.init(),
            $t.scissor(yt.copy(At).multiplyScalar(St)),
            $t.viewport(_t.copy(Rt).multiplyScalar(St)),
            n(wt.r, wt.g, wt.b, Mt)
        }
        function o() {
            ut = null,
            vt = null,
            gt = "",
            ft = -1,
            $t.reset()
        }
        function s(t) {
            t.preventDefault(),
            o(),
            i(),
            ee.clear()
        }
        function c(t) {
            var e = t.target;
            e.removeEventListener("dispose", c),
            h(e)
        }
        function h(t) {
            p(t),
            ee.delete(t)
        }
        function p(t) {
            var e = ee.get(t).program;
            t.program = void 0,
            void 0 !== e && ue.releaseProgram(e)
        }
        function d(t, e, r, n) {
            var i;
            if (r && r.isInstancedBufferGeometry && (i = Jt.get("ANGLE_instanced_arrays"),
            null === i))
                return void console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            void 0 === n && (n = 0),
            $t.initAttributes();
            var a = r.attributes
              , o = e.getAttributes()
              , s = t.defaultAttributeValues;
            for (var c in o) {
                var h = o[c];
                if (h >= 0) {
                    var l = a[c];
                    if (void 0 !== l) {
                        var u = Yt.FLOAT
                          , p = l.array
                          , d = l.normalized;
                        p instanceof Float32Array ? u = Yt.FLOAT : p instanceof Float64Array ? console.warn("Unsupported data buffer format: Float64Array") : p instanceof Uint16Array ? u = Yt.UNSIGNED_SHORT : p instanceof Int16Array ? u = Yt.SHORT : p instanceof Uint32Array ? u = Yt.UNSIGNED_INT : p instanceof Int32Array ? u = Yt.INT : p instanceof Int8Array ? u = Yt.BYTE : p instanceof Uint8Array && (u = Yt.UNSIGNED_BYTE);
                        var f = l.itemSize
                          , m = le.getAttributeBuffer(l);
                        if (l && l.isInterleavedBufferAttribute) {
                            var g = l.data
                              , v = g.stride
                              , y = l.offset;
                            g && g.isInstancedInterleavedBuffer ? ($t.enableAttributeAndDivisor(h, g.meshPerAttribute, i),
                            void 0 === r.maxInstancedCount && (r.maxInstancedCount = g.meshPerAttribute * g.count)) : $t.enableAttribute(h),
                            Yt.bindBuffer(Yt.ARRAY_BUFFER, m),
                            Yt.vertexAttribPointer(h, f, u, d, v * g.array.BYTES_PER_ELEMENT, (n * v + y) * g.array.BYTES_PER_ELEMENT)
                        } else
                            l && l.isInstancedBufferAttribute ? ($t.enableAttributeAndDivisor(h, l.meshPerAttribute, i),
                            void 0 === r.maxInstancedCount && (r.maxInstancedCount = l.meshPerAttribute * l.count)) : $t.enableAttribute(h),
                            Yt.bindBuffer(Yt.ARRAY_BUFFER, m),
                            Yt.vertexAttribPointer(h, f, u, d, 0, n * f * l.array.BYTES_PER_ELEMENT)
                    } else if (void 0 !== s) {
                        var x = s[c];
                        if (void 0 !== x)
                            switch (x.length) {
                            case 2:
                                Yt.vertexAttrib2fv(h, x);
                                break;
                            case 3:
                                Yt.vertexAttrib3fv(h, x);
                                break;
                            case 4:
                                Yt.vertexAttrib4fv(h, x);
                                break;
                            default:
                                Yt.vertexAttrib1fv(h, x)
                            }
                    }
                }
            }
            $t.disableUnusedAttributes()
        }
        function f(t, e) {
            return Math.abs(e[0]) - Math.abs(t[0])
        }
        function m(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.material.program && e.material.program && t.material.program !== e.material.program ? t.material.program.id - e.material.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
        }
        function g(t, e) {
            return t.object.renderOrder !== e.object.renderOrder ? t.object.renderOrder - e.object.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
        }
        function v(t, e, r, n, i) {
            var a, o;
            r.transparent ? (a = nt,
            o = ++it) : (a = tt,
            o = ++et);
            var s = a[o];
            void 0 !== s ? (s.id = t.id,
            s.object = t,
            s.geometry = e,
            s.material = r,
            s.z = Wt.z,
            s.group = i) : (s = {
                id: t.id,
                object: t,
                geometry: e,
                material: r,
                z: Wt.z,
                group: i
            },
            a.push(s))
        }
        function y(t) {
            var e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(),
            kt.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
            _(kt)
        }
        function x(t) {
            return kt.center.set(0, 0, 0),
            kt.radius = .7071067811865476,
            kt.applyMatrix4(t.matrixWorld),
            _(kt)
        }
        function _(t) {
            if (!Dt.intersectsSphere(t))
                return !1;
            var e = Gt.numPlanes;
            if (0 === e)
                return !0;
            var r = lt.clippingPlanes
              , n = t.center
              , i = -t.radius
              , a = 0;
            do
                if (r[a].distanceToPoint(n) < i)
                    return !1;
            while (++a !== e);return !0
        }
        function b(t, e) {
            if (t.visible !== !1) {
                var r = 0 !== (t.layers.mask & e.layers.mask);
                if (r)
                    if (t.isLight)
                        K.push(t);
                    else if (t.isSprite)
                        t.frustumCulled !== !1 && x(t) !== !0 || ct.push(t);
                    else if (t.isLensFlare)
                        ht.push(t);
                    else if (t.isImmediateRenderObject)
                        lt.sortObjects === !0 && (Wt.setFromMatrixPosition(t.matrixWorld),
                        Wt.applyProjection(jt)),
                        v(t, null, t.material, Wt.z, null);
                    else if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(),
                    t.frustumCulled === !1 || y(t) === !0)) {
                        var n = t.material;
                        if (n.visible === !0) {
                            lt.sortObjects === !0 && (Wt.setFromMatrixPosition(t.matrixWorld),
                            Wt.applyProjection(jt));
                            var i = le.update(t);
                            if (n.isMultiMaterial)
                                for (var a = i.groups, o = n.materials, s = 0, c = a.length; s < c; s++) {
                                    var h = a[s]
                                      , l = o[h.materialIndex];
                                    l.visible === !0 && v(t, i, l, Wt.z, h)
                                }
                            else
                                v(t, i, n, Wt.z, null)
                        }
                    }
                for (var u = t.children, s = 0, c = u.length; s < c; s++)
                    b(u[s], e)
            }
        }
        function w(t, e, r, n) {
            for (var i = 0, a = t.length; i < a; i++) {
                var o = t[i]
                  , s = o.object
                  , c = o.geometry
                  , h = void 0 === n ? o.material : n
                  , l = o.group;
                if (s.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse, s.matrixWorld),
                s.normalMatrix.getNormalMatrix(s.modelViewMatrix),
                s.isImmediateRenderObject) {
                    E(h);
                    var u = T(e, r, h, s);
                    gt = "",
                    s.render(function(t) {
                        lt.renderBufferImmediate(t, u, h)
                    })
                } else
                    lt.renderBufferDirect(e, r, c, h, s, l)
            }
        }
        function M(e, r, n) {
            var i = ee.get(e)
              , a = ue.getParameters(e, Xt, r, Gt.numPlanes, n)
              , o = ue.getProgramCode(e, a)
              , s = i.program
              , h = !0;
            if (void 0 === s)
                e.addEventListener("dispose", c);
            else if (s.code !== o)
                p(e);
            else {
                if (void 0 !== a.shaderID)
                    return;
                h = !1
            }
            if (h) {
                if (a.shaderID) {
                    var l = Oc[a.shaderID];
                    i.__webglShader = {
                        name: e.type,
                        uniforms: t.UniformsUtils.clone(l.uniforms),
                        vertexShader: l.vertexShader,
                        fragmentShader: l.fragmentShader
                    }
                } else
                    i.__webglShader = {
                        name: e.type,
                        uniforms: e.uniforms,
                        vertexShader: e.vertexShader,
                        fragmentShader: e.fragmentShader
                    };
                e.__webglShader = i.__webglShader,
                s = ue.acquireProgram(e, a, o),
                i.program = s,
                e.program = s
            }
            var u = s.getAttributes();
            if (e.morphTargets) {
                e.numSupportedMorphTargets = 0;
                for (var d = 0; d < lt.maxMorphTargets; d++)
                    u["morphTarget" + d] >= 0 && e.numSupportedMorphTargets++
            }
            if (e.morphNormals) {
                e.numSupportedMorphNormals = 0;
                for (var d = 0; d < lt.maxMorphNormals; d++)
                    u["morphNormal" + d] >= 0 && e.numSupportedMorphNormals++
            }
            var f = i.__webglShader.uniforms;
            (e.isShaderMaterial || e.isRawShaderMaterial) && e.clipping !== !0 || (i.numClippingPlanes = Gt.numPlanes,
            f.clippingPlanes = Gt.uniform),
            i.fog = r,
            i.lightsHash = Xt.hash,
            e.lights && (f.ambientLightColor.value = Xt.ambient,
            f.directionalLights.value = Xt.directional,
            f.spotLights.value = Xt.spot,
            f.pointLights.value = Xt.point,
            f.hemisphereLights.value = Xt.hemi,
            f.directionalShadowMap.value = Xt.directionalShadowMap,
            f.directionalShadowMatrix.value = Xt.directionalShadowMatrix,
            f.spotShadowMap.value = Xt.spotShadowMap,
            f.spotShadowMatrix.value = Xt.spotShadowMatrix,
            f.pointShadowMap.value = Xt.pointShadowMap,
            f.pointShadowMatrix.value = Xt.pointShadowMatrix);
            var m = i.program.getUniforms()
              , g = X.seqWithValue(m.seq, f);
            i.uniformsList = g,
            i.dynamicUniforms = X.splitDynamic(g, f)
        }
        function E(t) {
            t.side === wi ? $t.disable(Yt.CULL_FACE) : $t.enable(Yt.CULL_FACE),
            $t.setFlipSided(t.side === bi),
            t.transparent === !0 ? $t.setBlending(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.premultipliedAlpha) : $t.setBlending(Li),
            $t.setDepthFunc(t.depthFunc),
            $t.setDepthTest(t.depthTest),
            $t.setDepthWrite(t.depthWrite),
            $t.setColorWrite(t.colorWrite),
            $t.setPolygonOffset(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits)
        }
        function T(t, e, r, n) {
            bt = 0;
            var i = ee.get(r);
            if (Ht && (Vt || t !== vt)) {
                var a = t === vt && r.id === ft;
                Gt.setState(r.clippingPlanes, r.clipShadows, t, i, a)
            }
            r.needsUpdate === !1 && (void 0 === i.program ? r.needsUpdate = !0 : r.fog && i.fog !== e ? r.needsUpdate = !0 : r.lights && i.lightsHash !== Xt.hash ? r.needsUpdate = !0 : void 0 !== i.numClippingPlanes && i.numClippingPlanes !== Gt.numPlanes && (r.needsUpdate = !0)),
            r.needsUpdate && (M(r, e, n),
            r.needsUpdate = !1);
            var o = !1
              , s = !1
              , c = !1
              , h = i.program
              , l = h.getUniforms()
              , u = i.__webglShader.uniforms;
            if (h.id !== ut && (Yt.useProgram(h.program),
            ut = h.id,
            o = !0,
            s = !0,
            c = !0),
            r.id !== ft && (ft = r.id,
            s = !0),
            o || t !== vt) {
                if (l.set(Yt, t, "projectionMatrix"),
                Kt.logarithmicDepthBuffer && l.setValue(Yt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)),
                t !== vt && (vt = t,
                s = !0,
                c = !0),
                r.isShaderMaterial || r.isMeshPhongMaterial || r.isMeshStandardMaterial || r.envMap) {
                    var p = l.map.cameraPosition;
                    void 0 !== p && p.setValue(Yt, Wt.setFromMatrixPosition(t.matrixWorld))
                }
                (r.isMeshPhongMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial || r.skinning) && l.setValue(Yt, "viewMatrix", t.matrixWorldInverse),
                l.set(Yt, lt, "toneMappingExposure"),
                l.set(Yt, lt, "toneMappingWhitePoint")
            }
            if (r.skinning) {
                l.setOptional(Yt, n, "bindMatrix"),
                l.setOptional(Yt, n, "bindMatrixInverse");
                var d = n.skeleton;
                d && (Kt.floatVertexTextures && d.useVertexTexture ? (l.set(Yt, d, "boneTexture"),
                l.set(Yt, d, "boneTextureWidth"),
                l.set(Yt, d, "boneTextureHeight")) : l.setOptional(Yt, d, "boneMatrices"))
            }
            s && (r.lights && N(u, c),
            e && r.fog && P(u, e),
            (r.isMeshBasicMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial || r.isMeshStandardMaterial || r.isMeshDepthMaterial) && S(u, r),
            r.isLineBasicMaterial ? A(u, r) : r.isLineDashedMaterial ? (A(u, r),
            L(u, r)) : r.isPointsMaterial ? R(u, r) : r.isMeshLambertMaterial ? C(u, r) : r.isMeshPhongMaterial ? U(u, r) : r.isMeshPhysicalMaterial ? D(u, r) : r.isMeshStandardMaterial ? I(u, r) : r.isMeshDepthMaterial ? r.displacementMap && (u.displacementMap.value = r.displacementMap,
            u.displacementScale.value = r.displacementScale,
            u.displacementBias.value = r.displacementBias) : r.isMeshNormalMaterial && (u.opacity.value = r.opacity),
            X.upload(Yt, i.uniformsList, u, lt)),
            l.set(Yt, n, "modelViewMatrix"),
            l.set(Yt, n, "normalMatrix"),
            l.setValue(Yt, "modelMatrix", n.matrixWorld);
            var f = i.dynamicUniforms;
            return null !== f && (X.evalDynamic(f, u, n, r, t),
            X.upload(Yt, f, u, lt)),
            h
        }
        function S(t, e) {
            t.opacity.value = e.opacity,
            t.diffuse.value = e.color,
            e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity),
            t.map.value = e.map,
            t.specularMap.value = e.specularMap,
            t.alphaMap.value = e.alphaMap,
            e.aoMap && (t.aoMap.value = e.aoMap,
            t.aoMapIntensity.value = e.aoMapIntensity);
            var r;
            if (e.map ? r = e.map : e.specularMap ? r = e.specularMap : e.displacementMap ? r = e.displacementMap : e.normalMap ? r = e.normalMap : e.bumpMap ? r = e.bumpMap : e.roughnessMap ? r = e.roughnessMap : e.metalnessMap ? r = e.metalnessMap : e.alphaMap ? r = e.alphaMap : e.emissiveMap && (r = e.emissiveMap),
            void 0 !== r) {
                r.isWebGLRenderTarget && (r = r.texture);
                var n = r.offset
                  , i = r.repeat;
                t.offsetRepeat.value.set(n.x, n.y, i.x, i.y)
            }
            t.envMap.value = e.envMap,
            t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1,
            t.reflectivity.value = e.reflectivity,
            t.refractionRatio.value = e.refractionRatio
        }
        function A(t, e) {
            t.diffuse.value = e.color,
            t.opacity.value = e.opacity
        }
        function L(t, e) {
            t.dashSize.value = e.dashSize,
            t.totalSize.value = e.dashSize + e.gapSize,
            t.scale.value = e.scale
        }
        function R(t, e) {
            if (t.diffuse.value = e.color,
            t.opacity.value = e.opacity,
            t.size.value = e.size * St,
            t.scale.value = .5 * G.clientHeight,
            t.map.value = e.map,
            null !== e.map) {
                var r = e.map.offset
                  , n = e.map.repeat;
                t.offsetRepeat.value.set(r.x, r.y, n.x, n.y)
            }
        }
        function P(t, e) {
            t.fogColor.value = e.color,
            e.isFog ? (t.fogNear.value = e.near,
            t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
        }
        function C(t, e) {
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
        }
        function U(t, e) {
            t.specular.value = e.specular,
            t.shininess.value = Math.max(e.shininess, 1e-4),
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale)),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias)
        }
        function I(t, e) {
            t.roughness.value = e.roughness,
            t.metalness.value = e.metalness,
            e.roughnessMap && (t.roughnessMap.value = e.roughnessMap),
            e.metalnessMap && (t.metalnessMap.value = e.metalnessMap),
            e.lightMap && (t.lightMap.value = e.lightMap,
            t.lightMapIntensity.value = e.lightMapIntensity),
            e.emissiveMap && (t.emissiveMap.value = e.emissiveMap),
            e.bumpMap && (t.bumpMap.value = e.bumpMap,
            t.bumpScale.value = e.bumpScale),
            e.normalMap && (t.normalMap.value = e.normalMap,
            t.normalScale.value.copy(e.normalScale)),
            e.displacementMap && (t.displacementMap.value = e.displacementMap,
            t.displacementScale.value = e.displacementScale,
            t.displacementBias.value = e.displacementBias),
            e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
        }
        function D(t, e) {
            t.clearCoat.value = e.clearCoat,
            t.clearCoatRoughness.value = e.clearCoatRoughness,
            I(t, e)
        }
        function N(t, e) {
            t.ambientLightColor.needsUpdate = e,
            t.directionalLights.needsUpdate = e,
            t.pointLights.needsUpdate = e,
            t.spotLights.needsUpdate = e,
            t.hemisphereLights.needsUpdate = e
        }
        function O(t) {
            for (var e = 0, r = 0, n = t.length; r < n; r++) {
                var i = t[r];
                i.castShadow && (Xt.shadows[e++] = i)
            }
            Xt.shadows.length = e
        }
        function F(t, e) {
            var r, n, i, a, o, s, c, h = 0, l = 0, p = 0, d = e.matrixWorldInverse, f = 0, m = 0, g = 0, v = 0;
            for (r = 0,
            n = t.length; r < n; r++)
                if (i = t[r],
                a = i.color,
                o = i.intensity,
                s = i.distance,
                c = i.shadow && i.shadow.map ? i.shadow.map.texture : null,
                i.isAmbientLight)
                    h += a.r * o,
                    l += a.g * o,
                    p += a.b * o;
                else if (i.isDirectionalLight) {
                    var y = pe.get(i);
                    y.color.copy(i.color).multiplyScalar(i.intensity),
                    y.direction.setFromMatrixPosition(i.matrixWorld),
                    Wt.setFromMatrixPosition(i.target.matrixWorld),
                    y.direction.sub(Wt),
                    y.direction.transformDirection(d),
                    y.shadow = i.castShadow,
                    i.castShadow && (y.shadowBias = i.shadow.bias,
                    y.shadowRadius = i.shadow.radius,
                    y.shadowMapSize = i.shadow.mapSize),
                    Xt.directionalShadowMap[f] = c,
                    Xt.directionalShadowMatrix[f] = i.shadow.matrix,
                    Xt.directional[f++] = y
                } else if (i.isSpotLight) {
                    var y = pe.get(i);
                    y.position.setFromMatrixPosition(i.matrixWorld),
                    y.position.applyMatrix4(d),
                    y.color.copy(a).multiplyScalar(o),
                    y.distance = s,
                    y.direction.setFromMatrixPosition(i.matrixWorld),
                    Wt.setFromMatrixPosition(i.target.matrixWorld),
                    y.direction.sub(Wt),
                    y.direction.transformDirection(d),
                    y.coneCos = Math.cos(i.angle),
                    y.penumbraCos = Math.cos(i.angle * (1 - i.penumbra)),
                    y.decay = 0 === i.distance ? 0 : i.decay,
                    y.shadow = i.castShadow,
                    i.castShadow && (y.shadowBias = i.shadow.bias,
                    y.shadowRadius = i.shadow.radius,
                    y.shadowMapSize = i.shadow.mapSize),
                    Xt.spotShadowMap[g] = c,
                    Xt.spotShadowMatrix[g] = i.shadow.matrix,
                    Xt.spot[g++] = y
                } else if (i.isPointLight) {
                    var y = pe.get(i);
                    y.position.setFromMatrixPosition(i.matrixWorld),
                    y.position.applyMatrix4(d),
                    y.color.copy(i.color).multiplyScalar(i.intensity),
                    y.distance = i.distance,
                    y.decay = 0 === i.distance ? 0 : i.decay,
                    y.shadow = i.castShadow,
                    i.castShadow && (y.shadowBias = i.shadow.bias,
                    y.shadowRadius = i.shadow.radius,
                    y.shadowMapSize = i.shadow.mapSize),
                    Xt.pointShadowMap[m] = c,
                    void 0 === Xt.pointShadowMatrix[m] && (Xt.pointShadowMatrix[m] = new u),
                    Wt.setFromMatrixPosition(i.matrixWorld).negate(),
                    Xt.pointShadowMatrix[m].identity().setPosition(Wt),
                    Xt.point[m++] = y
                } else if (i.isHemisphereLight) {
                    var y = pe.get(i);
                    y.direction.setFromMatrixPosition(i.matrixWorld),
                    y.direction.transformDirection(d),
                    y.direction.normalize(),
                    y.skyColor.copy(i.color).multiplyScalar(o),
                    y.groundColor.copy(i.groundColor).multiplyScalar(o),
                    Xt.hemi[v++] = y
                }
            Xt.ambient[0] = h,
            Xt.ambient[1] = l,
            Xt.ambient[2] = p,
            Xt.directional.length = f,
            Xt.spot.length = g,
            Xt.point.length = m,
            Xt.hemi.length = v,
            Xt.hash = f + "," + m + "," + g + "," + v + "," + Xt.shadows.length
        }
        function z() {
            var t = bt;
            return t >= Kt.maxTextures && console.warn("WebGLRenderer: trying to use " + t + " texture units while this GPU supports only " + Kt.maxTextures),
            bt += 1,
            t
        }
        function B(t) {
            var e;
            if (t === wa)
                return Yt.REPEAT;
            if (t === Ma)
                return Yt.CLAMP_TO_EDGE;
            if (t === Ea)
                return Yt.MIRRORED_REPEAT;
            if (t === Sa)
                return Yt.NEAREST;
            if (t === Aa)
                return Yt.NEAREST_MIPMAP_NEAREST;
            if (t === La)
                return Yt.NEAREST_MIPMAP_LINEAR;
            if (t === Ra)
                return Yt.LINEAR;
            if (t === Pa)
                return Yt.LINEAR_MIPMAP_NEAREST;
            if (t === Ca)
                return Yt.LINEAR_MIPMAP_LINEAR;
            if (t === Ia)
                return Yt.UNSIGNED_BYTE;
            if (t === Ha)
                return Yt.UNSIGNED_SHORT_4_4_4_4;
            if (t === Va)
                return Yt.UNSIGNED_SHORT_5_5_5_1;
            if (t === ka)
                return Yt.UNSIGNED_SHORT_5_6_5;
            if (t === Da)
                return Yt.BYTE;
            if (t === Na)
                return Yt.SHORT;
            if (t === Oa)
                return Yt.UNSIGNED_SHORT;
            if (t === Fa)
                return Yt.INT;
            if (t === za)
                return Yt.UNSIGNED_INT;
            if (t === Ba)
                return Yt.FLOAT;
            if (e = Jt.get("OES_texture_half_float"),
            null !== e && t === Ga)
                return e.HALF_FLOAT_OES;
            if (t === Wa)
                return Yt.ALPHA;
            if (t === Xa)
                return Yt.RGB;
            if (t === qa)
                return Yt.RGBA;
            if (t === Ya)
                return Yt.LUMINANCE;
            if (t === Za)
                return Yt.LUMINANCE_ALPHA;
            if (t === Qa)
                return Yt.DEPTH_COMPONENT;
            if (t === Ka)
                return Yt.DEPTH_STENCIL;
            if (t === Ni)
                return Yt.FUNC_ADD;
            if (t === Oi)
                return Yt.FUNC_SUBTRACT;
            if (t === Fi)
                return Yt.FUNC_REVERSE_SUBTRACT;
            if (t === Gi)
                return Yt.ZERO;
            if (t === Hi)
                return Yt.ONE;
            if (t === Vi)
                return Yt.SRC_COLOR;
            if (t === ki)
                return Yt.ONE_MINUS_SRC_COLOR;
            if (t === ji)
                return Yt.SRC_ALPHA;
            if (t === Wi)
                return Yt.ONE_MINUS_SRC_ALPHA;
            if (t === Xi)
                return Yt.DST_ALPHA;
            if (t === qi)
                return Yt.ONE_MINUS_DST_ALPHA;
            if (t === Yi)
                return Yt.DST_COLOR;
            if (t === Zi)
                return Yt.ONE_MINUS_DST_COLOR;
            if (t === Ji)
                return Yt.SRC_ALPHA_SATURATE;
            if (e = Jt.get("WEBGL_compressed_texture_s3tc"),
            null !== e) {
                if (t === $a)
                    return e.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (t === to)
                    return e.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (t === eo)
                    return e.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (t === ro)
                    return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
            }
            if (e = Jt.get("WEBGL_compressed_texture_pvrtc"),
            null !== e) {
                if (t === no)
                    return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (t === io)
                    return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (t === ao)
                    return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (t === oo)
                    return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            }
            if (e = Jt.get("WEBGL_compressed_texture_etc1"),
            null !== e && t === so)
                return e.COMPRESSED_RGB_ETC1_WEBGL;
            if (e = Jt.get("EXT_blend_minmax"),
            null !== e) {
                if (t === zi)
                    return e.MIN_EXT;
                if (t === Bi)
                    return e.MAX_EXT
            }
            return e = Jt.get("WEBGL_depth_texture"),
            null !== e && t === ja ? e.UNSIGNED_INT_24_8_WEBGL : 0
        }
        console.log("THREE.WebGLRenderer", hi),
        e = e || {};
        var G = void 0 !== e.canvas ? e.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")
          , H = void 0 !== e.context ? e.context : null
          , V = void 0 !== e.alpha && e.alpha
          , k = void 0 === e.depth || e.depth
          , j = void 0 === e.stencil || e.stencil
          , W = void 0 !== e.antialias && e.antialias
          , Y = void 0 === e.premultipliedAlpha || e.premultipliedAlpha
          , Q = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer
          , K = []
          , tt = []
          , et = -1
          , nt = []
          , it = -1
          , st = new Float32Array(8)
          , ct = []
          , ht = [];
        this.domElement = G,
        this.context = null,
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.gammaFactor = 2,
        this.gammaInput = !1,
        this.gammaOutput = !1,
        this.physicallyCorrectLights = !1,
        this.toneMapping = ha,
        this.toneMappingExposure = 1,
        this.toneMappingWhitePoint = 1,
        this.maxMorphTargets = 8,
        this.maxMorphNormals = 4;
        var lt = this
          , ut = null
          , pt = null
          , dt = null
          , ft = -1
          , gt = ""
          , vt = null
          , yt = new a
          , xt = null
          , _t = new a
          , bt = 0
          , wt = new q(0)
          , Mt = 0
          , Et = G.width
          , Tt = G.height
          , St = 1
          , At = new a(0,0,Et,Tt)
          , Lt = !1
          , Rt = new a(0,0,Et,Tt)
          , Dt = new at
          , Gt = new ce
          , Ht = !1
          , Vt = !1
          , kt = new rt
          , jt = new u
          , Wt = new l
          , Xt = {
            hash: "",
            ambient: [0, 0, 0],
            directional: [],
            directionalShadowMap: [],
            directionalShadowMatrix: [],
            spot: [],
            spotShadowMap: [],
            spotShadowMatrix: [],
            point: [],
            pointShadowMap: [],
            pointShadowMatrix: [],
            hemi: [],
            shadows: []
        }
          , qt = {
            calls: 0,
            vertices: 0,
            faces: 0,
            points: 0
        };
        this.info = {
            render: qt,
            memory: {
                geometries: 0,
                textures: 0
            },
            programs: null
        };
        var Yt;
        try {
            var Zt = {
                alpha: V,
                depth: k,
                stencil: j,
                antialias: W,
                premultipliedAlpha: Y,
                preserveDrawingBuffer: Q
            };
            if (Yt = H || G.getContext("webgl", Zt) || G.getContext("experimental-webgl", Zt),
            null === Yt)
                throw null !== G.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context.";
            void 0 === Yt.getShaderPrecisionFormat && (Yt.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }
            ),
            G.addEventListener("webglcontextlost", s, !1)
        } catch (t) {
            console.error("THREE.WebGLRenderer: " + t)
        }
        var Jt = new se(Yt);
        Jt.get("WEBGL_depth_texture"),
        Jt.get("OES_texture_float"),
        Jt.get("OES_texture_float_linear"),
        Jt.get("OES_texture_half_float"),
        Jt.get("OES_texture_half_float_linear"),
        Jt.get("OES_standard_derivatives"),
        Jt.get("ANGLE_instanced_arrays");
        var Qt = Jt.get("WEBGL_draw_buffers");
        Jt.get("OES_element_index_uint") && (Pt.MaxIndex = 4294967296);
        var Kt = new oe(Yt,Jt,e)
          , $t = new ae(Yt,Jt,B)
          , ee = new ie
          , he = new ne(Yt,Jt,$t,ee,Kt,B,this.info)
          , le = new re(Yt,ee,this.info)
          , ue = new te(this,Kt)
          , pe = new Bt;
        this.info.programs = ue.programs;
        var de = new zt(Yt,Jt,qt)
          , fe = new Ft(Yt,Jt,qt)
          , me = [Yt.COLOR_ATTACHMENT0]
          , ge = [Yt.BACK]
          , ve = new Ot((-1),1,1,(-1),0,1)
          , ye = new Nt
          , xe = new Ct(new It(2,2),new mt({
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }))
          , _e = Oc.cube
          , be = new Ct(new Ut(5,5,5),new $({
            uniforms: _e.uniforms,
            vertexShader: _e.vertexShader,
            fragmentShader: _e.fragmentShader,
            side: bi,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        }));
        i(),
        this.context = Yt,
        this.capabilities = Kt,
        this.extensions = Jt,
        this.properties = ee,
        this.state = $t;
        var we = new ot(this,Xt,le,Kt);
        this.shadowMap = we;
        var Me = new J(this,ct)
          , Ee = new Z(this,ht);
        this.getContext = function() {
            return Yt
        }
        ,
        this.getContextAttributes = function() {
            return Yt.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            Jt.get("WEBGL_lose_context").loseContext()
        }
        ,
        this.getMaxAnisotropy = function() {
            return Kt.getMaxAnisotropy()
        }
        ,
        this.getPrecision = function() {
            return Kt.precision
        }
        ,
        this.getPixelRatio = function() {
            return St
        }
        ,
        this.setPixelRatio = function(t) {
            void 0 !== t && (St = t,
            this.setSize(Rt.z, Rt.w, !1))
        }
        ,
        this.getSize = function() {
            return {
                width: Et,
                height: Tt
            }
        }
        ,
        this.setSize = function(t, e, r) {
            Et = t,
            Tt = e,
            G.width = t * St,
            G.height = e * St,
            r !== !1 && (G.style.width = t + "px",
            G.style.height = e + "px"),
            this.setViewport(0, 0, t, e)
        }
        ,
        this.setViewport = function(t, e, r, n) {
            $t.viewport(Rt.set(t, e, r, n))
        }
        ,
        this.setScissor = function(t, e, r, n) {
            $t.scissor(At.set(t, e, r, n))
        }
        ,
        this.setScissorTest = function(t) {
            $t.setScissorTest(Lt = t)
        }
        ,
        this.getClearColor = function() {
            return wt
        }
        ,
        this.setClearColor = function(t, e) {
            wt.set(t),
            Mt = void 0 !== e ? e : 1,
            n(wt.r, wt.g, wt.b, Mt)
        }
        ,
        this.getClearAlpha = function() {
            return Mt
        }
        ,
        this.setClearAlpha = function(t) {
            Mt = t,
            n(wt.r, wt.g, wt.b, Mt)
        }
        ,
        this.clear = function(t, e, r) {
            var n = 0;
            (void 0 === t || t) && (n |= Yt.COLOR_BUFFER_BIT),
            (void 0 === e || e) && (n |= Yt.DEPTH_BUFFER_BIT),
            (void 0 === r || r) && (n |= Yt.STENCIL_BUFFER_BIT),
            Yt.clear(n)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.clearTarget = function(t, e, r, n) {
            this.setRenderTarget(t),
            this.clear(e, r, n)
        }
        ,
        this.resetGLState = o,
        this.dispose = function() {
            nt = [],
            it = -1,
            tt = [],
            et = -1,
            G.removeEventListener("webglcontextlost", s, !1)
        }
        ,
        this.renderBufferImmediate = function(t, e, r) {
            $t.initAttributes();
            var n = ee.get(t);
            t.hasPositions && !n.position && (n.position = Yt.createBuffer()),
            t.hasNormals && !n.normal && (n.normal = Yt.createBuffer()),
            t.hasUvs && !n.uv && (n.uv = Yt.createBuffer()),
            t.hasColors && !n.color && (n.color = Yt.createBuffer());
            var i = e.getAttributes();
            if (t.hasPositions && (Yt.bindBuffer(Yt.ARRAY_BUFFER, n.position),
            Yt.bufferData(Yt.ARRAY_BUFFER, t.positionArray, Yt.DYNAMIC_DRAW),
            $t.enableAttribute(i.position),
            Yt.vertexAttribPointer(i.position, 3, Yt.FLOAT, !1, 0, 0)),
            t.hasNormals) {
                if (Yt.bindBuffer(Yt.ARRAY_BUFFER, n.normal),
                !r.isMeshPhongMaterial && !r.isMeshStandardMaterial && r.shading === Mi)
                    for (var a = 0, o = 3 * t.count; a < o; a += 9) {
                        var s = t.normalArray
                          , c = (s[a + 0] + s[a + 3] + s[a + 6]) / 3
                          , h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3
                          , l = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
                        s[a + 0] = c,
                        s[a + 1] = h,
                        s[a + 2] = l,
                        s[a + 3] = c,
                        s[a + 4] = h,
                        s[a + 5] = l,
                        s[a + 6] = c,
                        s[a + 7] = h,
                        s[a + 8] = l
                    }
                Yt.bufferData(Yt.ARRAY_BUFFER, t.normalArray, Yt.DYNAMIC_DRAW),
                $t.enableAttribute(i.normal),
                Yt.vertexAttribPointer(i.normal, 3, Yt.FLOAT, !1, 0, 0)
            }
            t.hasUvs && r.map && (Yt.bindBuffer(Yt.ARRAY_BUFFER, n.uv),
            Yt.bufferData(Yt.ARRAY_BUFFER, t.uvArray, Yt.DYNAMIC_DRAW),
            $t.enableAttribute(i.uv),
            Yt.vertexAttribPointer(i.uv, 2, Yt.FLOAT, !1, 0, 0)),
            t.hasColors && r.vertexColors !== Ti && (Yt.bindBuffer(Yt.ARRAY_BUFFER, n.color),
            Yt.bufferData(Yt.ARRAY_BUFFER, t.colorArray, Yt.DYNAMIC_DRAW),
            $t.enableAttribute(i.color),
            Yt.vertexAttribPointer(i.color, 3, Yt.FLOAT, !1, 0, 0)),
            $t.disableUnusedAttributes(),
            Yt.drawArrays(Yt.TRIANGLES, 0, t.count),
            t.count = 0
        }
        ,
        this.renderBufferDirect = function(t, e, n, i, a, o) {
            E(i);
            var s = T(t, e, i, a)
              , c = !1
              , h = n.id + "_" + s.id + "_" + i.wireframe;
            h !== gt && (gt = h,
            c = !0);
            var l = a.morphTargetInfluences;
            if (void 0 !== l) {
                for (var u = [], p = 0, m = l.length; p < m; p++) {
                    var g = l[p];
                    u.push([g, p])
                }
                u.sort(f),
                u.length > 8 && (u.length = 8);
                for (var v = n.morphAttributes, p = 0, m = u.length; p < m; p++) {
                    var g = u[p];
                    if (st[p] = g[0],
                    0 !== g[0]) {
                        var y = g[1];
                        i.morphTargets === !0 && v.position && n.addAttribute("morphTarget" + p, v.position[y]),
                        i.morphNormals === !0 && v.normal && n.addAttribute("morphNormal" + p, v.normal[y])
                    } else
                        i.morphTargets === !0 && n.removeAttribute("morphTarget" + p),
                        i.morphNormals === !0 && n.removeAttribute("morphNormal" + p)
                }
                for (var p = u.length, x = st.length; p < x; p++)
                    st[p] = 0;
                s.getUniforms().setValue(Yt, "morphTargetInfluences", st),
                c = !0
            }
            var y = n.index
              , _ = n.attributes.position;
            i.wireframe === !0 && (y = le.getWireframeAttribute(n));
            var b;
            null !== y ? (b = fe,
            b.setIndex(y)) : b = de,
            c && (d(i, s, n),
            null !== y && Yt.bindBuffer(Yt.ELEMENT_ARRAY_BUFFER, le.getAttributeBuffer(y)));
            var w = 0
              , M = 0;
            null !== y ? M = y.count : void 0 !== _ && (M = _.count);
            var S = n.drawRange.start
              , A = n.drawRange.count
              , L = null !== o ? o.start : 0
              , R = null !== o ? o.count : 1 / 0
              , P = Math.max(w, S, L)
              , C = Math.min(w + M, S + A, L + R) - 1
              , U = Math.max(0, C - P + 1);
            if (0 !== U) {
                if (a.isMesh)
                    if (i.wireframe === !0)
                        $t.setLineWidth(i.wireframeLinewidth * r()),
                        b.setMode(Yt.LINES);
                    else
                        switch (a.drawMode) {
                        case yo:
                            b.setMode(Yt.TRIANGLES);
                            break;
                        case xo:
                            b.setMode(Yt.TRIANGLE_STRIP);
                            break;
                        case _o:
                            b.setMode(Yt.TRIANGLE_FAN)
                        }
                else if (a.isLine) {
                    var I = i.linewidth;
                    void 0 === I && (I = 1),
                    $t.setLineWidth(I * r()),
                    a.isLineSegments ? b.setMode(Yt.LINES) : b.setMode(Yt.LINE_STRIP)
                } else
                    a.isPoints && b.setMode(Yt.POINTS);
                n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && b.renderInstances(n, P, U) : b.render(P, U)
            }
        }
        ,
        this.render = function(t, e, r, i) {
            if (void 0 !== e && e.isCamera !== !0)
                return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
            var a = t.fog;
            gt = "",
            ft = -1,
            vt = null,
            t.autoUpdate === !0 && t.updateMatrixWorld(),
            null === e.parent && e.updateMatrixWorld(),
            e.matrixWorldInverse.getInverse(e.matrixWorld),
            jt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse),
            Dt.setFromMatrix(jt),
            K.length = 0,
            et = -1,
            it = -1,
            ct.length = 0,
            ht.length = 0,
            Vt = this.localClippingEnabled,
            Ht = Gt.init(this.clippingPlanes, Vt, e),
            b(t, e),
            tt.length = et + 1,
            nt.length = it + 1,
            lt.sortObjects === !0 && (tt.sort(m),
            nt.sort(g)),
            Ht && Gt.beginShadows(),
            O(K),
            we.render(t, e),
            F(K, e),
            Ht && Gt.endShadows(),
            qt.calls = 0,
            qt.vertices = 0,
            qt.faces = 0,
            qt.points = 0,
            void 0 === r && (r = null),
            this.setRenderTarget(r);
            var o = t.background;
            if (null === o ? n(wt.r, wt.g, wt.b, Mt) : o && o.isColor && (n(o.r, o.g, o.b, 1),
            i = !0),
            (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
            o && o.isCubeTexture ? (ye.projectionMatrix.copy(e.projectionMatrix),
            ye.matrixWorld.extractRotation(e.matrixWorld),
            ye.matrixWorldInverse.getInverse(ye.matrixWorld),
            be.material.uniforms.tCube.value = o,
            be.modelViewMatrix.multiplyMatrices(ye.matrixWorldInverse, be.matrixWorld),
            le.update(be),
            lt.renderBufferDirect(ye, null, be.geometry, be.material, be, null)) : o && o.isTexture && (xe.material.map = o,
            le.update(xe),
            lt.renderBufferDirect(ve, null, xe.geometry, xe.material, xe, null)),
            t.overrideMaterial) {
                var s = t.overrideMaterial;
                w(tt, e, a, s),
                w(nt, e, a, s)
            } else
                $t.setBlending(Li),
                w(tt, e, a),
                w(nt, e, a);
            Me.render(t, e),
            Ee.render(t, e, _t),
            r && he.updateRenderTargetMipmap(r),
            $t.setDepthTest(!0),
            $t.setDepthWrite(!0),
            $t.setColorWrite(!0)
        }
        ,
        this.setFaceCulling = function(t, e) {
            $t.setCullFace(t),
            $t.setFlipSided(e === mi)
        }
        ,
        this.allocTextureUnit = z,
        this.setTexture2D = function() {
            var t = !1;
            return function(e, r) {
                e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),
                t = !0),
                e = e.texture),
                he.setTexture2D(e, r)
            }
        }(),
        this.setTexture = function() {
            var t = !1;
            return function(e, r) {
                t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),
                t = !0),
                he.setTexture2D(e, r)
            }
        }(),
        this.setTextureCube = function() {
            var t = !1;
            return function(e, r) {
                e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),
                t = !0),
                e = e.texture),
                e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? he.setTextureCube(e, r) : he.setTextureCubeDynamic(e, r)
            }
        }(),
        this.getCurrentRenderTarget = function() {
            return pt
        }
        ,
        this.setRenderTarget = function(t) {
            pt = t,
            t && void 0 === ee.get(t).__webglFramebuffer && he.setupRenderTarget(t);
            var e, r, n = t && t.isWebGLRenderTargetCube;
            if (t ? (r = ee.get(t),
            e = n ? r.__webglFramebuffer[t.activeCubeFace] : r.__webglFramebuffer,
            yt.copy(t.scissor),
            xt = t.scissorTest,
            _t.copy(t.viewport)) : (e = null,
            yt.copy(At).multiplyScalar(St),
            xt = Lt,
            _t.copy(Rt).multiplyScalar(St)),
            dt !== e && (Yt.bindFramebuffer(Yt.FRAMEBUFFER, e),
            dt = e,
            Qt && (r && r.__webglAttachments ? Qt.drawBuffersWEBGL(r.__webglAttachments) : t ? Qt.drawBuffersWEBGL(me) : Qt.drawBuffersWEBGL(ge))),
            $t.scissor(yt),
            $t.setScissorTest(xt),
            $t.viewport(_t),
            n) {
                var i = ee.get(t.texture);
                Yt.framebufferTexture2D(Yt.FRAMEBUFFER, Yt.COLOR_ATTACHMENT0, Yt.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, i.__webglTexture, t.activeMipMapLevel)
            }
        }
        ,
        this.readRenderTargetPixels = function(t, e, r, n, i, a) {
            if ((t && t.isWebGLRenderTarget) === !1)
                return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            var o = ee.get(t).__webglFramebuffer;
            if (o) {
                var s = !1;
                o !== dt && (Yt.bindFramebuffer(Yt.FRAMEBUFFER, o),
                s = !0);
                try {
                    var c = t.texture
                      , h = c.format
                      , l = c.type;
                    if (h !== qa && B(h) !== Yt.getParameter(Yt.IMPLEMENTATION_COLOR_READ_FORMAT))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                    if (!(l === Ia || B(l) === Yt.getParameter(Yt.IMPLEMENTATION_COLOR_READ_TYPE) || l === Ba && (Jt.get("OES_texture_float") || Jt.get("WEBGL_color_buffer_float")) || l === Ga && Jt.get("EXT_color_buffer_half_float")))
                        return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                    Yt.checkFramebufferStatus(Yt.FRAMEBUFFER) === Yt.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - n && r >= 0 && r <= t.height - i && Yt.readPixels(e, r, n, i, B(h), B(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
                } finally {
                    s && Yt.bindFramebuffer(Yt.FRAMEBUFFER, dt)
                }
            }
        }
    }
    function le(t, e) {
        this.name = "",
        this.color = new q(t),
        this.density = void 0 !== e ? e : 25e-5
    }
    function ue(t, e, r) {
        this.name = "",
        this.color = new q(t),
        this.near = void 0 !== e ? e : 1,
        this.far = void 0 !== r ? r : 1e3
    }
    function pe() {
        lt.call(this),
        this.type = "Scene",
        this.background = null,
        this.fog = null,
        this.overrideMaterial = null,
        this.autoUpdate = !0
    }
    function de(t, e, r, n, i) {
        lt.call(this),
        this.lensFlares = [],
        this.positionScreen = new l,
        this.customUpdateCallback = void 0,
        void 0 !== t && this.add(t, e, r, n, i)
    }
    function fe(t) {
        Q.call(this),
        this.type = "SpriteMaterial",
        this.color = new q(16777215),
        this.map = null,
        this.rotation = 0,
        this.fog = !1,
        this.lights = !1,
        this.setValues(t)
    }
    function me(t) {
        lt.call(this),
        this.type = "Sprite",
        this.material = void 0 !== t ? t : new fe
    }
    function ge() {
        lt.call(this),
        this.type = "LOD",
        Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }
    function ve(t, e, r, i, a, o, s, c, h, l, u, p) {
        n.call(this, null, o, s, c, h, l, i, a, u, p),
        this.image = {
            data: t,
            width: e,
            height: r
        },
        this.magFilter = void 0 !== h ? h : Sa,
        this.minFilter = void 0 !== l ? l : Sa,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function ye(e, r, n) {
        if (this.useVertexTexture = void 0 === n || n,
        this.identityMatrix = new u,
        e = e || [],
        this.bones = e.slice(0),
        this.useVertexTexture) {
            var i = Math.sqrt(4 * this.bones.length);
            i = t.Math.nextPowerOfTwo(Math.ceil(i)),
            i = Math.max(i, 4),
            this.boneTextureWidth = i,
            this.boneTextureHeight = i,
            this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4),
            this.boneTexture = new ve(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,qa,Ba)
        } else
            this.boneMatrices = new Float32Array(16 * this.bones.length);
        if (void 0 === r)
            this.calculateInverses();
        else if (this.bones.length === r.length)
            this.boneInverses = r.slice(0);
        else {
            console.warn("THREE.Skeleton bonInverses is the wrong length."),
            this.boneInverses = [];
            for (var a = 0, o = this.bones.length; a < o; a++)
                this.boneInverses.push(new u)
        }
    }
    function xe(t) {
        lt.call(this),
        this.type = "Bone",
        this.skin = t
    }
    function _e(t, e, r) {
        Ct.call(this, t, e),
        this.type = "SkinnedMesh",
        this.bindMode = "attached",
        this.bindMatrix = new u,
        this.bindMatrixInverse = new u;
        var n = [];
        if (this.geometry && void 0 !== this.geometry.bones) {
            for (var i, a, o = 0, s = this.geometry.bones.length; o < s; ++o)
                a = this.geometry.bones[o],
                i = new xe(this),
                n.push(i),
                i.name = a.name,
                i.position.fromArray(a.pos),
                i.quaternion.fromArray(a.rotq),
                void 0 !== a.scl && i.scale.fromArray(a.scl);
            for (var o = 0, s = this.geometry.bones.length; o < s; ++o)
                a = this.geometry.bones[o],
                a.parent !== -1 && null !== a.parent && void 0 !== n[a.parent] ? n[a.parent].add(n[o]) : this.add(n[o])
        }
        this.normalizeSkinWeights(),
        this.updateMatrixWorld(!0),
        this.bind(new ye(n,(void 0),r), this.matrixWorld)
    }
    function be(t) {
        Q.call(this),
        this.type = "LineBasicMaterial",
        this.color = new q(16777215),
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.lights = !1,
        this.setValues(t)
    }
    function we(t, e, r) {
        return 1 === r ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),
        new Me(t,e)) : (lt.call(this),
        this.type = "Line",
        this.geometry = void 0 !== t ? t : new Pt,
        void (this.material = void 0 !== e ? e : new be({
            color: 16777215 * Math.random()
        })))
    }
    function Me(t, e) {
        we.call(this, t, e),
        this.type = "LineSegments"
    }
    function Ee(t) {
        Q.call(this),
        this.type = "PointsMaterial",
        this.color = new q(16777215),
        this.map = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.lights = !1,
        this.setValues(t)
    }
    function Te(t, e) {
        lt.call(this),
        this.type = "Points",
        this.geometry = void 0 !== t ? t : new Pt,
        this.material = void 0 !== e ? e : new Ee({
            color: 16777215 * Math.random()
        })
    }
    function Se() {
        lt.call(this),
        this.type = "Group"
    }
    function Ae(t, e, r, i, a, o, s, c, h) {
        function l() {
            requestAnimationFrame(l),
            t.readyState >= t.HAVE_CURRENT_DATA && (u.needsUpdate = !0)
        }
        n.call(this, t, e, r, i, a, o, s, c, h),
        this.generateMipmaps = !1;
        var u = this;
        l()
    }
    function Le(t, e, r, i, a, o, s, c, h, l, u, p) {
        n.call(this, null, o, s, c, h, l, i, a, u, p),
        this.image = {
            width: e,
            height: r
        },
        this.mipmaps = t,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function Re(t, e, r, i, a, o, s, c, h) {
        n.call(this, t, e, r, i, a, o, s, c, h),
        this.needsUpdate = !0
    }
    function Pe(t, e, r, i, a, o, s, c, h, l) {
        if (l = void 0 !== l ? l : Qa,
        l !== Qa && l !== Ka)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n.call(this, null, i, a, o, s, c, l, r, h),
        this.image = {
            width: t,
            height: e
        },
        this.type = void 0 !== r ? r : Oa,
        this.magFilter = void 0 !== s ? s : Sa,
        this.minFilter = void 0 !== c ? c : Sa,
        this.flipY = !1,
        this.generateMipmaps = !1
    }
    function Ce(t) {
        function e(t, e) {
            return t - e
        }
        Pt.call(this);
        var r = [0, 0]
          , n = {}
          , i = ["a", "b", "c"];
        if (t && t.isGeometry) {
            for (var a = t.vertices, o = t.faces, s = 0, c = new Uint32Array(6 * o.length), h = 0, l = o.length; h < l; h++)
                for (var u = o[h], p = 0; p < 3; p++) {
                    r[0] = u[i[p]],
                    r[1] = u[i[(p + 1) % 3]],
                    r.sort(e);
                    var d = r.toString();
                    void 0 === n[d] && (c[2 * s] = r[0],
                    c[2 * s + 1] = r[1],
                    n[d] = !0,
                    s++)
                }
            for (var f = new Float32Array(2 * s * 3), h = 0, l = s; h < l; h++)
                for (var p = 0; p < 2; p++) {
                    var m = a[c[2 * h + p]]
                      , g = 6 * h + 3 * p;
                    f[g + 0] = m.x,
                    f[g + 1] = m.y,
                    f[g + 2] = m.z
                }
            this.addAttribute("position", new gt(f,3))
        } else if (t && t.isBufferGeometry)
            if (null !== t.index) {
                var v = t.index.array
                  , a = t.attributes.position
                  , y = t.groups
                  , s = 0;
                0 === y.length && t.addGroup(0, v.length);
                for (var c = new Uint32Array(2 * v.length), x = 0, _ = y.length; x < _; ++x)
                    for (var b = y[x], w = b.start, M = b.count, h = w, E = w + M; h < E; h += 3)
                        for (var p = 0; p < 3; p++) {
                            r[0] = v[h + p],
                            r[1] = v[h + (p + 1) % 3],
                            r.sort(e);
                            var d = r.toString();
                            void 0 === n[d] && (c[2 * s] = r[0],
                            c[2 * s + 1] = r[1],
                            n[d] = !0,
                            s++)
                        }
                for (var f = new Float32Array(2 * s * 3), h = 0, l = s; h < l; h++)
                    for (var p = 0; p < 2; p++) {
                        var g = 6 * h + 3 * p
                          , T = c[2 * h + p];
                        f[g + 0] = a.getX(T),
                        f[g + 1] = a.getY(T),
                        f[g + 2] = a.getZ(T)
                    }
                this.addAttribute("position", new gt(f,3))
            } else {
                for (var a = t.attributes.position.array, s = a.length / 3, S = s / 3, f = new Float32Array(2 * s * 3), h = 0, l = S; h < l; h++)
                    for (var p = 0; p < 3; p++) {
                        var g = 18 * h + 6 * p
                          , A = 9 * h + 3 * p;
                        f[g + 0] = a[A],
                        f[g + 1] = a[A + 1],
                        f[g + 2] = a[A + 2];
                        var T = 9 * h + 3 * ((p + 1) % 3);
                        f[g + 3] = a[T],
                        f[g + 4] = a[T + 1],
                        f[g + 5] = a[T + 2]
                    }
                this.addAttribute("position", new gt(f,3))
            }
    }
    function Ue(t, e, n) {
        At.call(this),
        this.type = "ParametricGeometry",
        this.parameters = {
            func: t,
            slices: e,
            stacks: n
        };
        var i, a, o, s, c, h = this.vertices, l = this.faces, u = this.faceVertexUvs[0], p = e + 1;
        for (i = 0; i <= n; i++)
            for (c = i / n,
            a = 0; a <= e; a++)
                s = a / e,
                o = t(s, c),
                h.push(o);
        var d, f, m, g, v, y, x, _;
        for (i = 0; i < n; i++)
            for (a = 0; a < e; a++)
                d = i * p + a,
                f = i * p + a + 1,
                m = (i + 1) * p + a + 1,
                g = (i + 1) * p + a,
                v = new r(a / e,i / n),
                y = new r((a + 1) / e,i / n),
                x = new r((a + 1) / e,(i + 1) / n),
                _ = new r(a / e,(i + 1) / n),
                l.push(new ft(d,f,g)),
                u.push([v, y, _]),
                l.push(new ft(f,m,g)),
                u.push([y.clone(), x, _.clone()]);
        this.computeFaceNormals(),
        this.computeVertexNormals()
    }
    function Ie(t, e, n, i) {
        function a(t) {
            var e = t.normalize().clone();
            e.index = p.vertices.push(e) - 1;
            var n = c(t) / 2 / Math.PI + .5
              , i = h(t) / Math.PI + .5;
            return e.uv = new r(n,1 - i),
            e
        }
        function o(t, e, r) {
            var n = new ft(t.index,e.index,r.index,[t.clone(), e.clone(), r.clone()]);
            p.faces.push(n),
            b.copy(t).add(e).add(r).divideScalar(3);
            var i = c(b);
            p.faceVertexUvs[0].push([u(t.uv, t, i), u(e.uv, e, i), u(r.uv, r, i)])
        }
        function s(t, e) {
            for (var r = Math.pow(2, e), n = a(p.vertices[t.a]), i = a(p.vertices[t.b]), s = a(p.vertices[t.c]), c = [], h = 0; h <= r; h++) {
                c[h] = [];
                for (var l = a(n.clone().lerp(s, h / r)), u = a(i.clone().lerp(s, h / r)), d = r - h, f = 0; f <= d; f++)
                    0 === f && h === r ? c[h][f] = l : c[h][f] = a(l.clone().lerp(u, f / d))
            }
            for (var h = 0; h < r; h++)
                for (var f = 0; f < 2 * (r - h) - 1; f++) {
                    var m = Math.floor(f / 2);
                    f % 2 === 0 ? o(c[h][m + 1], c[h + 1][m], c[h][m]) : o(c[h][m + 1], c[h + 1][m + 1], c[h + 1][m])
                }
        }
        function c(t) {
            return Math.atan2(t.z, -t.x)
        }
        function h(t) {
            return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
        }
        function u(t, e, n) {
            return n < 0 && 1 === t.x && (t = new r(t.x - 1,t.y)),
            0 === e.x && 0 === e.z && (t = new r(n / 2 / Math.PI + .5,t.y)),
            t.clone()
        }
        At.call(this),
        this.type = "PolyhedronGeometry",
        this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: i
        },
        n = n || 1,
        i = i || 0;
        for (var p = this, d = 0, f = t.length; d < f; d += 3)
            a(new l(t[d],t[d + 1],t[d + 2]));
        for (var m = this.vertices, g = [], d = 0, v = 0, f = e.length; d < f; d += 3,
        v++) {
            var y = m[e[d]]
              , x = m[e[d + 1]]
              , _ = m[e[d + 2]];
            g[v] = new ft(y.index,x.index,_.index,[y.clone(), x.clone(), _.clone()])
        }
        for (var b = new l, d = 0, f = g.length; d < f; d++)
            s(g[d], i);
        for (var d = 0, f = this.faceVertexUvs[0].length; d < f; d++) {
            var w = this.faceVertexUvs[0][d]
              , M = w[0].x
              , E = w[1].x
              , T = w[2].x
              , S = Math.max(M, E, T)
              , A = Math.min(M, E, T);
            S > .9 && A < .1 && (M < .2 && (w[0].x += 1),
            E < .2 && (w[1].x += 1),
            T < .2 && (w[2].x += 1))
        }
        for (var d = 0, f = this.vertices.length; d < f; d++)
            this.vertices[d].multiplyScalar(n);
        this.mergeVertices(),
        this.computeFaceNormals(),
        this.boundingSphere = new rt(new l,n)
    }
    function De(t, e) {
        var r = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1]
          , n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
        Ie.call(this, r, n, t, e),
        this.type = "TetrahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function Ne(t, e) {
        var r = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1]
          , n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
        Ie.call(this, r, n, t, e),
        this.type = "OctahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function Oe(t, e) {
        var r = (1 + Math.sqrt(5)) / 2
          , n = [-1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1]
          , i = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
        Ie.call(this, n, i, t, e),
        this.type = "IcosahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function Fe(t, e) {
        var r = (1 + Math.sqrt(5)) / 2
          , n = 1 / r
          , i = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, -n, -r, 0, -n, r, 0, n, -r, 0, n, r, 0, -r, 0, -n, r, 0, -n, -r, 0, n, r, 0, n]
          , a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
        Ie.call(this, i, a, t, e),
        this.type = "DodecahedronGeometry",
        this.parameters = {
            radius: t,
            detail: e
        }
    }
    function ze(t, e, n, i, a, o) {
        function s(t, e, r) {
            return C.vertices.push(new l(t,e,r)) - 1
        }
        At.call(this),
        this.type = "TubeGeometry",
        this.parameters = {
            path: t,
            segments: e,
            radius: n,
            radialSegments: i,
            closed: a,
            taper: o
        },
        e = e || 64,
        n = n || 1,
        i = i || 8,
        a = a || !1,
        o = o || ze.NoTaper;
        var c, h, u, p, d, f, m, g, v, y, x, _, b, w, M, E, T, S, A, L, R, P = [], C = this, U = e + 1, I = new l, D = new ze.FrenetFrames(t,e,a), N = D.tangents, O = D.normals, F = D.binormals;
        for (this.tangents = N,
        this.normals = O,
        this.binormals = F,
        y = 0; y < U; y++)
            for (P[y] = [],
            p = y / (U - 1),
            v = t.getPointAt(p),
            c = N[y],
            h = O[y],
            u = F[y],
            f = n * o(p),
            x = 0; x < i; x++)
                d = x / i * 2 * Math.PI,
                m = -f * Math.cos(d),
                g = f * Math.sin(d),
                I.copy(v),
                I.x += m * h.x + g * u.x,
                I.y += m * h.y + g * u.y,
                I.z += m * h.z + g * u.z,
                P[y][x] = s(I.x, I.y, I.z);
        for (y = 0; y < e; y++)
            for (x = 0; x < i; x++)
                _ = a ? (y + 1) % e : y + 1,
                b = (x + 1) % i,
                w = P[y][x],
                M = P[_][x],
                E = P[_][b],
                T = P[y][b],
                S = new r(y / e,x / i),
                A = new r((y + 1) / e,x / i),
                L = new r((y + 1) / e,(x + 1) / i),
                R = new r(y / e,(x + 1) / i),
                this.faces.push(new ft(w,M,T)),
                this.faceVertexUvs[0].push([S, A, R]),
                this.faces.push(new ft(M,E,T)),
                this.faceVertexUvs[0].push([A.clone(), L, R.clone()]);
        this.computeFaceNormals(),
        this.computeVertexNormals()
    }
    function Be(t, e, n, i, a, o) {
        function s(t, e, r, n, i) {
            var a = Math.cos(t)
              , o = Math.sin(t)
              , s = r / e * t
              , c = Math.cos(s);
            i.x = n * (2 + c) * .5 * a,
            i.y = n * (2 + c) * o * .5,
            i.z = n * Math.sin(s) * .5
        }
        Pt.call(this),
        this.type = "TorusKnotBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: n,
            radialSegments: i,
            p: a,
            q: o
        },
        t = t || 100,
        e = e || 40,
        n = Math.floor(n) || 64,
        i = Math.floor(i) || 8,
        a = a || 2,
        o = o || 3;
        var c, h, u = (i + 1) * (n + 1), p = i * n * 2 * 3, d = new gt(new (p > 65535 ? Uint32Array : Uint16Array)(p),1), f = new gt(new Float32Array(3 * u),3), m = new gt(new Float32Array(3 * u),3), g = new gt(new Float32Array(2 * u),2), v = 0, y = 0, x = new l, _ = new l, b = new r, w = new l, M = new l, E = new l, T = new l, S = new l;
        for (c = 0; c <= n; ++c) {
            var A = c / n * a * Math.PI * 2;
            for (s(A, a, o, t, w),
            s(A + .01, a, o, t, M),
            T.subVectors(M, w),
            S.addVectors(M, w),
            E.crossVectors(T, S),
            S.crossVectors(E, T),
            E.normalize(),
            S.normalize(),
            h = 0; h <= i; ++h) {
                var L = h / i * Math.PI * 2
                  , R = -e * Math.cos(L)
                  , P = e * Math.sin(L);
                x.x = w.x + (R * S.x + P * E.x),
                x.y = w.y + (R * S.y + P * E.y),
                x.z = w.z + (R * S.z + P * E.z),
                f.setXYZ(v, x.x, x.y, x.z),
                _.subVectors(x, w).normalize(),
                m.setXYZ(v, _.x, _.y, _.z),
                b.x = c / n,
                b.y = h / i,
                g.setXY(v, b.x, b.y),
                v++
            }
        }
        for (h = 1; h <= n; h++)
            for (c = 1; c <= i; c++) {
                var C = (i + 1) * (h - 1) + (c - 1)
                  , U = (i + 1) * h + (c - 1)
                  , I = (i + 1) * h + c
                  , D = (i + 1) * (h - 1) + c;
                d.setX(y, C),
                y++,
                d.setX(y, U),
                y++,
                d.setX(y, D),
                y++,
                d.setX(y, U),
                y++,
                d.setX(y, I),
                y++,
                d.setX(y, D),
                y++
            }
        this.setIndex(d),
        this.addAttribute("position", f),
        this.addAttribute("normal", m),
        this.addAttribute("uv", g)
    }
    function Ge(t, e, r, n, i, a, o) {
        At.call(this),
        this.type = "TorusKnotGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: r,
            radialSegments: n,
            p: i,
            q: a
        },
        void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),
        this.fromBufferGeometry(new Be(t,e,r,n,i,a)),
        this.mergeVertices()
    }
    function He(t, e, r, n, i) {
        Pt.call(this),
        this.type = "TorusBufferGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: r,
            tubularSegments: n,
            arc: i
        },
        t = t || 100,
        e = e || 40,
        r = Math.floor(r) || 8,
        n = Math.floor(n) || 6,
        i = i || 2 * Math.PI;
        var a, o, s = (r + 1) * (n + 1), c = r * n * 2 * 3, h = new (c > 65535 ? Uint32Array : Uint16Array)(c), u = new Float32Array(3 * s), p = new Float32Array(3 * s), d = new Float32Array(2 * s), f = 0, m = 0, g = 0, v = new l, y = new l, x = new l;
        for (a = 0; a <= r; a++)
            for (o = 0; o <= n; o++) {
                var _ = o / n * i
                  , b = a / r * Math.PI * 2;
                y.x = (t + e * Math.cos(b)) * Math.cos(_),
                y.y = (t + e * Math.cos(b)) * Math.sin(_),
                y.z = e * Math.sin(b),
                u[f] = y.x,
                u[f + 1] = y.y,
                u[f + 2] = y.z,
                v.x = t * Math.cos(_),
                v.y = t * Math.sin(_),
                x.subVectors(y, v).normalize(),
                p[f] = x.x,
                p[f + 1] = x.y,
                p[f + 2] = x.z,
                d[m] = o / n,
                d[m + 1] = a / r,
                f += 3,
                m += 2
            }
        for (a = 1; a <= r; a++)
            for (o = 1; o <= n; o++) {
                var w = (n + 1) * a + o - 1
                  , M = (n + 1) * (a - 1) + o - 1
                  , E = (n + 1) * (a - 1) + o
                  , T = (n + 1) * a + o;
                h[g] = w,
                h[g + 1] = M,
                h[g + 2] = T,
                h[g + 3] = M,
                h[g + 4] = E,
                h[g + 5] = T,
                g += 6
            }
        this.setIndex(new gt(h,1)),
        this.addAttribute("position", new gt(u,3)),
        this.addAttribute("normal", new gt(p,3)),
        this.addAttribute("uv", new gt(d,2))
    }
    function Ve(t, e, r, n, i) {
        At.call(this),
        this.type = "TorusGeometry",
        this.parameters = {
            radius: t,
            tube: e,
            radialSegments: r,
            tubularSegments: n,
            arc: i
        },
        this.fromBufferGeometry(new He(t,e,r,n,i))
    }
    function ke(t, e) {
        return "undefined" == typeof t ? void (t = []) : (At.call(this),
        this.type = "ExtrudeGeometry",
        t = Array.isArray(t) ? t : [t],
        this.addShapeList(t, e),
        void this.computeFaceNormals())
    }
    function je(t, e) {
        e = e || {};
        var r = e.font;
        if ((r && r.isFont) === !1)
            return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),
            new At;
        var n = r.generateShapes(t, e.size, e.curveSegments);
        e.amount = void 0 !== e.height ? e.height : 50,
        void 0 === e.bevelThickness && (e.bevelThickness = 10),
        void 0 === e.bevelSize && (e.bevelSize = 8),
        void 0 === e.bevelEnabled && (e.bevelEnabled = !1),
        ke.call(this, n, e),
        this.type = "TextGeometry"
    }
    function We(t, e, r, n, i, a, o) {
        Pt.call(this),
        this.type = "SphereBufferGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: r,
            phiStart: n,
            phiLength: i,
            thetaStart: a,
            thetaLength: o
        },
        t = t || 50,
        e = Math.max(3, Math.floor(e) || 8),
        r = Math.max(2, Math.floor(r) || 6),
        n = void 0 !== n ? n : 0,
        i = void 0 !== i ? i : 2 * Math.PI,
        a = void 0 !== a ? a : 0,
        o = void 0 !== o ? o : Math.PI;
        for (var s = a + o, c = (e + 1) * (r + 1), h = new gt(new Float32Array(3 * c),3), u = new gt(new Float32Array(3 * c),3), p = new gt(new Float32Array(2 * c),2), d = 0, f = [], m = new l, g = 0; g <= r; g++) {
            for (var v = [], y = g / r, x = 0; x <= e; x++) {
                var _ = x / e
                  , b = -t * Math.cos(n + _ * i) * Math.sin(a + y * o)
                  , w = t * Math.cos(a + y * o)
                  , M = t * Math.sin(n + _ * i) * Math.sin(a + y * o);
                m.set(b, w, M).normalize(),
                h.setXYZ(d, b, w, M),
                u.setXYZ(d, m.x, m.y, m.z),
                p.setXY(d, _, 1 - y),
                v.push(d),
                d++
            }
            f.push(v)
        }
        for (var E = [], g = 0; g < r; g++)
            for (var x = 0; x < e; x++) {
                var T = f[g][x + 1]
                  , S = f[g][x]
                  , A = f[g + 1][x]
                  , L = f[g + 1][x + 1];
                (0 !== g || a > 0) && E.push(T, S, L),
                (g !== r - 1 || s < Math.PI) && E.push(S, A, L)
            }
        this.setIndex(new (h.count > 65535 ? Mt : bt)(E,1)),
        this.addAttribute("position", h),
        this.addAttribute("normal", u),
        this.addAttribute("uv", p),
        this.boundingSphere = new rt(new l,t)
    }
    function Xe(t, e, r, n, i, a, o) {
        At.call(this),
        this.type = "SphereGeometry",
        this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: r,
            phiStart: n,
            phiLength: i,
            thetaStart: a,
            thetaLength: o
        },
        this.fromBufferGeometry(new We(t,e,r,n,i,a,o))
    }
    function qe(t, e, n, i, a, o) {
        Pt.call(this),
        this.type = "RingBufferGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: i,
            thetaStart: a,
            thetaLength: o
        },
        t = t || 20,
        e = e || 50,
        a = void 0 !== a ? a : 0,
        o = void 0 !== o ? o : 2 * Math.PI,
        n = void 0 !== n ? Math.max(3, n) : 8,
        i = void 0 !== i ? Math.max(1, i) : 1;
        var s, c, h, u = (n + 1) * (i + 1), p = n * i * 2 * 3, d = new gt(new (p > 65535 ? Uint32Array : Uint16Array)(p),1), f = new gt(new Float32Array(3 * u),3), m = new gt(new Float32Array(3 * u),3), g = new gt(new Float32Array(2 * u),2), v = 0, y = 0, x = t, _ = (e - t) / i, b = new l, w = new r;
        for (c = 0; c <= i; c++) {
            for (h = 0; h <= n; h++)
                s = a + h / n * o,
                b.x = x * Math.cos(s),
                b.y = x * Math.sin(s),
                f.setXYZ(v, b.x, b.y, b.z),
                m.setXYZ(v, 0, 0, 1),
                w.x = (b.x / e + 1) / 2,
                w.y = (b.y / e + 1) / 2,
                g.setXY(v, w.x, w.y),
                v++;
            x += _
        }
        for (c = 0; c < i; c++) {
            var M = c * (n + 1);
            for (h = 0; h < n; h++) {
                s = h + M;
                var E = s
                  , T = s + n + 1
                  , S = s + n + 2
                  , A = s + 1;
                d.setX(y, E),
                y++,
                d.setX(y, T),
                y++,
                d.setX(y, S),
                y++,
                d.setX(y, E),
                y++,
                d.setX(y, S),
                y++,
                d.setX(y, A),
                y++
            }
        }
        this.setIndex(d),
        this.addAttribute("position", f),
        this.addAttribute("normal", m),
        this.addAttribute("uv", g)
    }
    function Ye(t, e, r, n, i, a) {
        At.call(this),
        this.type = "RingGeometry",
        this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: r,
            phiSegments: n,
            thetaStart: i,
            thetaLength: a
        },
        this.fromBufferGeometry(new qe(t,e,r,n,i,a))
    }
    function Ze(t, e, r, n) {
        At.call(this),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: t,
            height: e,
            widthSegments: r,
            heightSegments: n
        },
        this.fromBufferGeometry(new It(t,e,r,n))
    }
    function Je(e, n, i, a) {
        Pt.call(this),
        this.type = "LatheBufferGeometry",
        this.parameters = {
            points: e,
            segments: n,
            phiStart: i,
            phiLength: a
        },
        n = Math.floor(n) || 12,
        i = i || 0,
        a = a || 2 * Math.PI,
        a = t.Math.clamp(a, 0, 2 * Math.PI);
        var o, s, c, h = (n + 1) * e.length, u = n * e.length * 2 * 3, p = new gt(new (u > 65535 ? Uint32Array : Uint16Array)(u),1), d = new gt(new Float32Array(3 * h),3), f = new gt(new Float32Array(2 * h),2), m = 0, g = 0, v = 1 / n, y = new l, x = new r;
        for (s = 0; s <= n; s++) {
            var _ = i + s * v * a
              , b = Math.sin(_)
              , w = Math.cos(_);
            for (c = 0; c <= e.length - 1; c++)
                y.x = e[c].x * b,
                y.y = e[c].y,
                y.z = e[c].x * w,
                d.setXYZ(m, y.x, y.y, y.z),
                x.x = s / n,
                x.y = c / (e.length - 1),
                f.setXY(m, x.x, x.y),
                m++
        }
        for (s = 0; s < n; s++)
            for (c = 0; c < e.length - 1; c++) {
                o = c + s * e.length;
                var M = o
                  , E = o + e.length
                  , T = o + e.length + 1
                  , S = o + 1;
                p.setX(g, M),
                g++,
                p.setX(g, E),
                g++,
                p.setX(g, S),
                g++,
                p.setX(g, E),
                g++,
                p.setX(g, T),
                g++,
                p.setX(g, S),
                g++
            }
        if (this.setIndex(p),
        this.addAttribute("position", d),
        this.addAttribute("uv", f),
        this.computeVertexNormals(),
        a === 2 * Math.PI) {
            var A = this.attributes.normal.array
              , L = new l
              , R = new l
              , P = new l;
            for (o = n * e.length * 3,
            s = 0,
            c = 0; s < e.length; s++,
            c += 3)
                L.x = A[c + 0],
                L.y = A[c + 1],
                L.z = A[c + 2],
                R.x = A[o + c + 0],
                R.y = A[o + c + 1],
                R.z = A[o + c + 2],
                P.addVectors(L, R).normalize(),
                A[c + 0] = A[o + c + 0] = P.x,
                A[c + 1] = A[o + c + 1] = P.y,
                A[c + 2] = A[o + c + 2] = P.z
        }
    }
    function Qe(t, e, r, n) {
        At.call(this),
        this.type = "LatheGeometry",
        this.parameters = {
            points: t,
            segments: e,
            phiStart: r,
            phiLength: n
        },
        this.fromBufferGeometry(new Je(t,e,r,n)),
        this.mergeVertices()
    }
    function Ke(t, e) {
        At.call(this),
        this.type = "ShapeGeometry",
        Array.isArray(t) === !1 && (t = [t]),
        this.addShapeList(t, e),
        this.computeFaceNormals()
    }
    function $e(e, r) {
        function n(t, e) {
            return t - e
        }
        Pt.call(this),
        r = void 0 !== r ? r : 1;
        var i, a = Math.cos(t.Math.DEG2RAD * r), o = [0, 0], s = {}, c = ["a", "b", "c"];
        e && e.isBufferGeometry ? (i = new At,
        i.fromBufferGeometry(e)) : i = e.clone(),
        i.mergeVertices(),
        i.computeFaceNormals();
        for (var h = i.vertices, l = i.faces, u = 0, p = l.length; u < p; u++)
            for (var d = l[u], f = 0; f < 3; f++) {
                o[0] = d[c[f]],
                o[1] = d[c[(f + 1) % 3]],
                o.sort(n);
                var m = o.toString();
                void 0 === s[m] ? s[m] = {
                    vert1: o[0],
                    vert2: o[1],
                    face1: u,
                    face2: void 0
                } : s[m].face2 = u
            }
        var g = [];
        for (var m in s) {
            var v = s[m];
            if (void 0 === v.face2 || l[v.face1].normal.dot(l[v.face2].normal) <= a) {
                var y = h[v.vert1];
                g.push(y.x),
                g.push(y.y),
                g.push(y.z),
                y = h[v.vert2],
                g.push(y.x),
                g.push(y.y),
                g.push(y.z)
            }
        }
        this.addAttribute("position", new gt(new Float32Array(g),3))
    }
    function tr(t, e, n, i, a, o, s, c) {
        function h() {
            var t = (i + 1) * (a + 1);
            return o === !1 && (t += (i + 1) * m + i * m),
            t
        }
        function u() {
            var t = i * a * 2 * 3;
            return o === !1 && (t += i * m * 3),
            t
        }
        function p() {
            var r, o, h = new l, u = new l, p = 0, d = (e - t) / n;
            for (o = 0; o <= a; o++) {
                var m = []
                  , g = o / a
                  , v = g * (e - t) + t;
                for (r = 0; r <= i; r++) {
                    var A = r / i
                      , L = A * c + s
                      , R = Math.sin(L)
                      , P = Math.cos(L);
                    u.x = v * R,
                    u.y = -g * n + T,
                    u.z = v * P,
                    x.setXYZ(w, u.x, u.y, u.z),
                    h.set(R, d, P).normalize(),
                    _.setXYZ(w, h.x, h.y, h.z),
                    b.setXY(w, A, 1 - g),
                    m.push(w),
                    w++
                }
                E.push(m)
            }
            for (r = 0; r < i; r++)
                for (o = 0; o < a; o++) {
                    var C = E[o][r]
                      , U = E[o + 1][r]
                      , I = E[o + 1][r + 1]
                      , D = E[o][r + 1];
                    y.setX(M, C),
                    M++,
                    y.setX(M, U),
                    M++,
                    y.setX(M, D),
                    M++,
                    y.setX(M, U),
                    M++,
                    y.setX(M, I),
                    M++,
                    y.setX(M, D),
                    M++,
                    p += 6
                }
            f.addGroup(S, p, 0),
            S += p
        }
        function d(n) {
            var a, o, h, u = new r, p = new l, d = 0, m = n === !0 ? t : e, g = n === !0 ? 1 : -1;
            for (o = w,
            a = 1; a <= i; a++)
                x.setXYZ(w, 0, T * g, 0),
                _.setXYZ(w, 0, g, 0),
                u.x = .5,
                u.y = .5,
                b.setXY(w, u.x, u.y),
                w++;
            for (h = w,
            a = 0; a <= i; a++) {
                var v = a / i
                  , E = v * c + s
                  , A = Math.cos(E)
                  , L = Math.sin(E);
                p.x = m * L,
                p.y = T * g,
                p.z = m * A,
                x.setXYZ(w, p.x, p.y, p.z),
                _.setXYZ(w, 0, g, 0),
                u.x = .5 * A + .5,
                u.y = .5 * L * g + .5,
                b.setXY(w, u.x, u.y),
                w++
            }
            for (a = 0; a < i; a++) {
                var R = o + a
                  , P = h + a;
                n === !0 ? (y.setX(M, P),
                M++,
                y.setX(M, P + 1),
                M++,
                y.setX(M, R),
                M++) : (y.setX(M, P + 1),
                M++,
                y.setX(M, P),
                M++,
                y.setX(M, R),
                M++),
                d += 3
            }
            f.addGroup(S, d, n === !0 ? 1 : 2),
            S += d
        }
        Pt.call(this),
        this.type = "CylinderBufferGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: i,
            heightSegments: a,
            openEnded: o,
            thetaStart: s,
            thetaLength: c
        };
        var f = this;
        t = void 0 !== t ? t : 20,
        e = void 0 !== e ? e : 20,
        n = void 0 !== n ? n : 100,
        i = Math.floor(i) || 8,
        a = Math.floor(a) || 1,
        o = void 0 !== o && o,
        s = void 0 !== s ? s : 0,
        c = void 0 !== c ? c : 2 * Math.PI;
        var m = 0;
        o === !1 && (t > 0 && m++,
        e > 0 && m++);
        var g = h()
          , v = u()
          , y = new gt(new (v > 65535 ? Uint32Array : Uint16Array)(v),1)
          , x = new gt(new Float32Array(3 * g),3)
          , _ = new gt(new Float32Array(3 * g),3)
          , b = new gt(new Float32Array(2 * g),2)
          , w = 0
          , M = 0
          , E = []
          , T = n / 2
          , S = 0;
        p(),
        o === !1 && (t > 0 && d(!0),
        e > 0 && d(!1)),
        this.setIndex(y),
        this.addAttribute("position", x),
        this.addAttribute("normal", _),
        this.addAttribute("uv", b)
    }
    function er(t, e, r, n, i, a, o, s) {
        At.call(this),
        this.type = "CylinderGeometry",
        this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: r,
            radialSegments: n,
            heightSegments: i,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        },
        this.fromBufferGeometry(new tr(t,e,r,n,i,a,o,s)),
        this.mergeVertices()
    }
    function rr(t, e, r, n, i, a, o) {
        er.call(this, 0, t, e, r, n, i, a, o),
        this.type = "ConeGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: r,
            heightSegments: n,
            openEnded: i,
            thetaStart: a,
            thetaLength: o
        }
    }
    function nr(t, e, r, n, i, a, o) {
        tr.call(this, 0, t, e, r, n, i, a, o),
        this.type = "ConeBufferGeometry",
        this.parameters = {
            radius: t,
            height: e,
            radialSegments: r,
            heightSegments: n,
            thetaStart: a,
            thetaLength: o
        }
    }
    function ir(t, e, r, n) {
        Pt.call(this),
        this.type = "CircleBufferGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: r,
            thetaLength: n
        },
        t = t || 50,
        e = void 0 !== e ? Math.max(3, e) : 8,
        r = void 0 !== r ? r : 0,
        n = void 0 !== n ? n : 2 * Math.PI;
        var i = e + 2
          , a = new Float32Array(3 * i)
          , o = new Float32Array(3 * i)
          , s = new Float32Array(2 * i);
        o[2] = 1,
        s[0] = .5,
        s[1] = .5;
        for (var c = 0, h = 3, u = 2; c <= e; c++,
        h += 3,
        u += 2) {
            var p = r + c / e * n;
            a[h] = t * Math.cos(p),
            a[h + 1] = t * Math.sin(p),
            o[h + 2] = 1,
            s[u] = (a[h] / t + 1) / 2,
            s[u + 1] = (a[h + 1] / t + 1) / 2
        }
        for (var d = [], h = 1; h <= e; h++)
            d.push(h, h + 1, 0);
        this.setIndex(new gt(new Uint16Array(d),1)),
        this.addAttribute("position", new gt(a,3)),
        this.addAttribute("normal", new gt(o,3)),
        this.addAttribute("uv", new gt(s,2)),
        this.boundingSphere = new rt(new l,t)
    }
    function ar(t, e, r, n) {
        At.call(this),
        this.type = "CircleGeometry",
        this.parameters = {
            radius: t,
            segments: e,
            thetaStart: r,
            thetaLength: n
        },
        this.fromBufferGeometry(new ir(t,e,r,n))
    }
    function or(t, e, r, n, i, a) {
        At.call(this),
        this.type = "BoxGeometry",
        this.parameters = {
            width: t,
            height: e,
            depth: r,
            widthSegments: n,
            heightSegments: i,
            depthSegments: a
        },
        this.fromBufferGeometry(new Ut(t,e,r,n,i,a)),
        this.mergeVertices()
    }
    function sr() {
        $.call(this, {
            uniforms: t.UniformsUtils.merge([Nc.lights, {
                opacity: {
                    value: 1
                }
            }]),
            vertexShader: Dc.shadow_vert,
            fragmentShader: Dc.shadow_frag
        }),
        this.lights = !0,
        this.transparent = !0,
        Object.defineProperties(this, {
            opacity: {
                enumerable: !0,
                get: function() {
                    return this.uniforms.opacity.value
                },
                set: function(t) {
                    this.uniforms.opacity.value = t
                }
            }
        })
    }
    function cr(t) {
        $.call(this, t),
        this.type = "RawShaderMaterial"
    }
    function hr(e) {
        this.uuid = t.Math.generateUUID(),
        this.type = "MultiMaterial",
        this.materials = e instanceof Array ? e : [],
        this.visible = !0
    }
    function lr(t) {
        Q.call(this),
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new q(16777215),
        this.roughness = .5,
        this.metalness = .5,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new q(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalScale = new r(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapIntensity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function ur(t) {
        lr.call(this),
        this.defines = {
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.reflectivity = .5,
        this.clearCoat = 0,
        this.clearCoatRoughness = 0,
        this.setValues(t)
    }
    function pr(t) {
        Q.call(this),
        this.type = "MeshPhongMaterial",
        this.color = new q(16777215),
        this.specular = new q(1118481),
        this.shininess = 30,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new q(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalScale = new r(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = aa,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function dr(t) {
        Q.call(this, t),
        this.type = "MeshNormalMaterial",
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.morphTargets = !1,
        this.setValues(t)
    }
    function fr(t) {
        Q.call(this),
        this.type = "MeshLambertMaterial",
        this.color = new q(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new q(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.combine = aa,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.skinning = !1,
        this.morphTargets = !1,
        this.morphNormals = !1,
        this.setValues(t)
    }
    function mr(t) {
        Q.call(this),
        this.type = "LineDashedMaterial",
        this.color = new q(16777215),
        this.linewidth = 1,
        this.scale = 1,
        this.dashSize = 3,
        this.gapSize = 1,
        this.lights = !1,
        this.setValues(t)
    }
    function gr(t, e, r) {
        var n = this
          , i = !1
          , a = 0
          , o = 0;
        this.onStart = void 0,
        this.onLoad = t,
        this.onProgress = e,
        this.onError = r,
        this.itemStart = function(t) {
            o++,
            i === !1 && void 0 !== n.onStart && n.onStart(t, a, o),
            i = !0
        }
        ,
        this.itemEnd = function(t) {
            a++,
            void 0 !== n.onProgress && n.onProgress(t, a, o),
            a === o && (i = !1,
            void 0 !== n.onLoad && n.onLoad())
        }
        ,
        this.itemError = function(t) {
            void 0 !== n.onError && n.onError(t)
        }
    }
    function vr(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager
    }
    function yr(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager,
        this._parser = null
    }
    function xr(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager,
        this._parser = null
    }
    function _r(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager
    }
    function br(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager
    }
    function wr(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager
    }
    function Mr(t, e) {
        lt.call(this),
        this.type = "Light",
        this.color = new q(t),
        this.intensity = void 0 !== e ? e : 1,
        this.receiveShadow = void 0
    }
    function Er(t, e, r) {
        Mr.call(this, t, r),
        this.type = "HemisphereLight",
        this.castShadow = void 0,
        this.position.copy(lt.DefaultUp),
        this.updateMatrix(),
        this.groundColor = new q(e)
    }
    function Tr(t) {
        this.camera = t,
        this.bias = 0,
        this.radius = 1,
        this.mapSize = new r(512,512),
        this.map = null,
        this.matrix = new u
    }
    function Sr() {
        Tr.call(this, new Nt(50,1,.5,500))
    }
    function Ar(t, e, r, n, i, a) {
        Mr.call(this, t, e),
        this.type = "SpotLight",
        this.position.copy(lt.DefaultUp),
        this.updateMatrix(),
        this.target = new lt,
        Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / Math.PI
            }
        }),
        this.distance = void 0 !== r ? r : 0,
        this.angle = void 0 !== n ? n : Math.PI / 3,
        this.penumbra = void 0 !== i ? i : 0,
        this.decay = void 0 !== a ? a : 1,
        this.shadow = new Sr
    }
    function Lr(t, e, r, n) {
        Mr.call(this, t, e),
        this.type = "PointLight",
        Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / (4 * Math.PI)
            }
        }),
        this.distance = void 0 !== r ? r : 0,
        this.decay = void 0 !== n ? n : 1,
        this.shadow = new Tr(new Nt(90,1,.5,500))
    }
    function Rr(t) {
        Tr.call(this, new Ot((-5),5,5,(-5),.5,500))
    }
    function Pr(t, e) {
        Mr.call(this, t, e),
        this.type = "DirectionalLight",
        this.position.copy(lt.DefaultUp),
        this.updateMatrix(),
        this.target = new lt,
        this.shadow = new Rr
    }
    function Cr(t, e) {
        Mr.call(this, t, e),
        this.type = "AmbientLight",
        this.castShadow = void 0
    }
    function Ur(t, e, r, n) {
        this.parameterPositions = t,
        this._cachedIndex = 0,
        this.resultBuffer = void 0 !== n ? n : new e.constructor(r),
        this.sampleValues = e,
        this.valueSize = r
    }
    function Ir(t, e, r, n) {
        Ur.call(this, t, e, r, n),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0
    }
    function Dr(t, e, r, n) {
        Ur.call(this, t, e, r, n)
    }
    function Nr(t, e, r, n) {
        Ur.call(this, t, e, r, n)
    }
    function Or(e, r, n, i) {
        if (void 0 === e)
            throw new Error("track name is undefined");
        if (void 0 === r || 0 === r.length)
            throw new Error("no keyframes in track named " + e);
        this.name = e,
        this.times = t.AnimationUtils.convertArray(r, this.TimeBufferType),
        this.values = t.AnimationUtils.convertArray(n, this.ValueBufferType),
        this.setInterpolation(i || this.DefaultInterpolation),
        this.validate(),
        this.optimize()
    }
    function Fr(t, e, r, n) {
        Or.call(this, t, e, r, n)
    }
    function zr(t, e, r, n) {
        Ur.call(this, t, e, r, n)
    }
    function Br(t, e, r, n) {
        Or.call(this, t, e, r, n)
    }
    function Gr(t, e, r, n) {
        Or.call(this, t, e, r, n)
    }
    function Hr(t, e, r, n) {
        Or.call(this, t, e, r, n)
    }
    function Vr(t, e, r) {
        Or.call(this, t, e, r)
    }
    function kr(t, e, r, n) {
        Or.call(this, t, e, r, n)
    }
    function jr(t, e, r, n) {
        Or.apply(this, arguments)
    }
    function Wr(e, r, n) {
        this.name = e,
        this.tracks = n,
        this.duration = void 0 !== r ? r : -1,
        this.uuid = t.Math.generateUUID(),
        this.duration < 0 && this.resetDuration(),
        this.optimize()
    }
    function Xr(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager,
        this.textures = {}
    }
    function qr(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager
    }
    function Yr() {
        this.onLoadStart = function() {}
        ,
        this.onLoadProgress = function() {}
        ,
        this.onLoadComplete = function() {}
    }
    function Zr(e) {
        "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),
        e = void 0),
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager,
        this.withCredentials = !1
    }
    function Jr(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager,
        this.texturePath = ""
    }
    function Qr() {}
    function Kr(t, e) {
        this.v1 = t,
        this.v2 = e
    }
    function $r() {
        this.curves = [],
        this.autoClose = !1
    }
    function tn(t, e, r, n, i, a, o, s) {
        this.aX = t,
        this.aY = e,
        this.xRadius = r,
        this.yRadius = n,
        this.aStartAngle = i,
        this.aEndAngle = a,
        this.aClockwise = o,
        this.aRotation = s || 0
    }
    function en(t) {
        this.points = void 0 === t ? [] : t
    }
    function rn(t, e, r, n) {
        this.v0 = t,
        this.v1 = e,
        this.v2 = r,
        this.v3 = n
    }
    function nn(t, e, r) {
        this.v0 = t,
        this.v1 = e,
        this.v2 = r
    }
    function an() {
        on.apply(this, arguments),
        this.holes = []
    }
    function on(t) {
        $r.call(this),
        this.currentPoint = new r,
        t && this.fromPoints(t)
    }
    function sn() {
        this.subPaths = [],
        this.currentPath = null
    }
    function cn(t) {
        this.data = t
    }
    function hn(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager
    }
    function ln() {
        return void 0 === Xc && (Xc = new (window.AudioContext || window.webkitAudioContext)),
        Xc
    }
    function un(e) {
        this.manager = void 0 !== e ? e : t.DefaultLoadingManager
    }
    function pn() {
        this.type = "StereoCamera",
        this.aspect = 1,
        this.eyeSep = .064,
        this.cameraL = new Nt,
        this.cameraL.layers.enable(1),
        this.cameraL.matrixAutoUpdate = !1,
        this.cameraR = new Nt,
        this.cameraR.layers.enable(2),
        this.cameraR.matrixAutoUpdate = !1
    }
    function dn(t, e, r) {
        lt.call(this),
        this.type = "CubeCamera";
        var n = 90
          , i = 1
          , a = new Nt(n,i,t,e);
        a.up.set(0, -1, 0),
        a.lookAt(new l(1,0,0)),
        this.add(a);
        var o = new Nt(n,i,t,e);
        o.up.set(0, -1, 0),
        o.lookAt(new l((-1),0,0)),
        this.add(o);
        var s = new Nt(n,i,t,e);
        s.up.set(0, 0, 1),
        s.lookAt(new l(0,1,0)),
        this.add(s);
        var h = new Nt(n,i,t,e);
        h.up.set(0, 0, -1),
        h.lookAt(new l(0,(-1),0)),
        this.add(h);
        var u = new Nt(n,i,t,e);
        u.up.set(0, -1, 0),
        u.lookAt(new l(0,0,1)),
        this.add(u);
        var p = new Nt(n,i,t,e);
        p.up.set(0, -1, 0),
        p.lookAt(new l(0,0,(-1))),
        this.add(p);
        var d = {
            format: Xa,
            magFilter: Ra,
            minFilter: Ra
        };
        this.renderTarget = new c(r,r,d),
        this.updateCubeMap = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var r = this.renderTarget
              , n = r.texture.generateMipmaps;
            r.texture.generateMipmaps = !1,
            r.activeCubeFace = 0,
            t.render(e, a, r),
            r.activeCubeFace = 1,
            t.render(e, o, r),
            r.activeCubeFace = 2,
            t.render(e, s, r),
            r.activeCubeFace = 3,
            t.render(e, h, r),
            r.activeCubeFace = 4,
            t.render(e, u, r),
            r.texture.generateMipmaps = n,
            r.activeCubeFace = 5,
            t.render(e, p, r),
            t.setRenderTarget(null)
        }
    }
    function fn() {
        lt.call(this),
        this.type = "AudioListener",
        this.context = ln(),
        this.gain = this.context.createGain(),
        this.gain.connect(this.context.destination),
        this.filter = null
    }
    function mn(t) {
        lt.call(this),
        this.type = "Audio",
        this.context = t.context,
        this.source = this.context.createBufferSource(),
        this.source.onended = this.onEnded.bind(this),
        this.gain = this.context.createGain(),
        this.gain.connect(t.getInput()),
        this.autoplay = !1,
        this.startTime = 0,
        this.playbackRate = 1,
        this.isPlaying = !1,
        this.hasPlaybackControl = !0,
        this.sourceType = "empty",
        this.filters = []
    }
    function gn(t) {
        mn.call(this, t),
        this.panner = this.context.createPanner(),
        this.panner.connect(this.gain)
    }
    function vn(t, e) {
        this.analyser = t.context.createAnalyser(),
        this.analyser.fftSize = void 0 !== e ? e : 2048,
        this.data = new Uint8Array(this.analyser.frequencyBinCount),
        t.getOutput().connect(this.analyser)
    }
    function yn(t, e, r) {
        this.binding = t,
        this.valueSize = r;
        var n, i = Float64Array;
        switch (e) {
        case "quaternion":
            n = this._slerp;
            break;
        case "string":
        case "bool":
            i = Array,
            n = this._select;
            break;
        default:
            n = this._lerp
        }
        this.buffer = new i(4 * r),
        this._mixBufferRegion = n,
        this.cumulativeWeight = 0,
        this.useCount = 0,
        this.referenceCount = 0
    }
    function xn(t, e, r) {
        this.path = e,
        this.parsedPath = r || xn.parseTrackName(e),
        this.node = xn.findNode(t, this.parsedPath.nodeName) || t,
        this.rootNode = t
    }
    function _n(e) {
        this.uuid = t.Math.generateUUID(),
        this._objects = Array.prototype.slice.call(arguments),
        this.nCachedObjects_ = 0;
        var r = {};
        this._indicesByUUID = r;
        for (var n = 0, i = arguments.length; n !== i; ++n)
            r[arguments[n].uuid] = n;
        this._paths = [],
        this._parsedPaths = [],
        this._bindings = [],
        this._bindingsIndicesByPath = {};
        var a = this;
        this.stats = {
            objects: {
                get total() {
                    return a._objects.length
                },
                get inUse() {
                    return this.total - a.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return a._bindings.length
            }
        }
    }
    function bn(t, e, r) {
        this._mixer = t,
        this._clip = e,
        this._localRoot = r || null;
        for (var n = e.tracks, i = n.length, a = new Array(i), o = {
            endingStart: mo,
            endingEnd: mo
        }, s = 0; s !== i; ++s) {
            var c = n[s].createInterpolant(null);
            a[s] = c,
            c.settings = o
        }
        this._interpolantSettings = o,
        this._interpolants = a,
        this._propertyBindings = new Array(i),
        this._cacheIndex = null,
        this._byClipCacheIndex = null,
        this._timeScaleInterpolant = null,
        this._weightInterpolant = null,
        this.loop = ho,
        this._loopCount = -1,
        this._startTime = null,
        this.time = 0,
        this.timeScale = 1,
        this._effectiveTimeScale = 1,
        this.weight = 1,
        this._effectiveWeight = 1,
        this.repetitions = 1 / 0,
        this.paused = !1,
        this.enabled = !0,
        this.clampWhenFinished = !1,
        this.zeroSlopeAtStart = !0,
        this.zeroSlopeAtEnd = !0
    }
    function wn(t) {
        this._root = t,
        this._initMemoryManager(),
        this._accuIndex = 0,
        this.time = 0,
        this.timeScale = 1
    }
    function Mn(t) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."),
        t = arguments[1]),
        this.value = t,
        this.dynamic = !1
    }
    function En() {
        Pt.call(this),
        this.type = "InstancedBufferGeometry",
        this.maxInstancedCount = void 0
    }
    function Tn(e, r, n, i) {
        this.uuid = t.Math.generateUUID(),
        this.data = e,
        this.itemSize = r,
        this.offset = n,
        this.normalized = i === !0
    }
    function Sn(e, r) {
        this.uuid = t.Math.generateUUID(),
        this.array = e,
        this.stride = r,
        this.count = void 0 !== e ? e.length / r : 0,
        this.dynamic = !1,
        this.updateRange = {
            offset: 0,
            count: -1
        },
        this.version = 0
    }
    function An(t, e, r) {
        Sn.call(this, t, e),
        this.meshPerAttribute = r || 1
    }
    function Ln(t, e, r) {
        gt.call(this, t, e),
        this.meshPerAttribute = r || 1
    }
    function Rn(t, e, r, n) {
        this.ray = new st(t,e),
        this.near = r || 0,
        this.far = n || 1 / 0,
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    }
    function Pn(t, e) {
        return t.distance - e.distance
    }
    function Cn(t, e, r, n) {
        if (t.visible !== !1 && (t.raycast(e, r),
        n === !0))
            for (var i = t.children, a = 0, o = i.length; a < o; a++)
                Cn(i[a], e, r, !0)
    }
    function Un(t) {
        this.autoStart = void 0 === t || t,
        this.startTime = 0,
        this.oldTime = 0,
        this.elapsedTime = 0,
        this.running = !1
    }
    function In(t) {
        function e(t, e, r, n, i, a, o) {
            var s = .5 * (r - t)
              , c = .5 * (n - e);
            return (2 * (e - r) + s + c) * o + (-3 * (e - r) - 2 * s - c) * a + s * i + e
        }
        this.points = t;
        var r, n, i, a, o, s, c, h, u, p = [], d = {
            x: 0,
            y: 0,
            z: 0
        };
        this.initFromArray = function(t) {
            this.points = [];
            for (var e = 0; e < t.length; e++)
                this.points[e] = {
                    x: t[e][0],
                    y: t[e][1],
                    z: t[e][2]
                }
        }
        ,
        this.getPoint = function(t) {
            return r = (this.points.length - 1) * t,
            n = Math.floor(r),
            i = r - n,
            p[0] = 0 === n ? n : n - 1,
            p[1] = n,
            p[2] = n > this.points.length - 2 ? this.points.length - 1 : n + 1,
            p[3] = n > this.points.length - 3 ? this.points.length - 1 : n + 2,
            s = this.points[p[0]],
            c = this.points[p[1]],
            h = this.points[p[2]],
            u = this.points[p[3]],
            a = i * i,
            o = i * a,
            d.x = e(s.x, c.x, h.x, u.x, i, a, o),
            d.y = e(s.y, c.y, h.y, u.y, i, a, o),
            d.z = e(s.z, c.z, h.z, u.z, i, a, o),
            d
        }
        ,
        this.getControlPointsArray = function() {
            var t, e, r = this.points.length, n = [];
            for (t = 0; t < r; t++)
                e = this.points[t],
                n[t] = [e.x, e.y, e.z];
            return n
        }
        ,
        this.getLength = function(t) {
            var e, r, n, i, a = 0, o = 0, s = 0, c = new l, h = new l, u = [], p = 0;
            for (u[0] = 0,
            t || (t = 100),
            n = this.points.length * t,
            c.copy(this.points[0]),
            e = 1; e < n; e++)
                r = e / n,
                i = this.getPoint(r),
                h.copy(i),
                p += h.distanceTo(c),
                c.copy(i),
                a = (this.points.length - 1) * r,
                o = Math.floor(a),
                o !== s && (u[o] = p,
                s = o);
            return u[u.length] = p,
            {
                chunks: u,
                total: p
            }
        }
        ,
        this.reparametrizeByArcLength = function(t) {
            var e, r, n, i, a, o, s, c, h = [], u = new l, p = this.getLength();
            for (h.push(u.copy(this.points[0]).clone()),
            e = 1; e < this.points.length; e++) {
                for (o = p.chunks[e] - p.chunks[e - 1],
                s = Math.ceil(t * o / p.total),
                i = (e - 1) / (this.points.length - 1),
                a = e / (this.points.length - 1),
                r = 1; r < s - 1; r++)
                    n = i + r * (1 / s) * (a - i),
                    c = this.getPoint(n),
                    h.push(u.copy(c).clone());
                h.push(u.copy(this.points[e]).clone())
            }
            this.points = h
        }
    }
    function Dn(t, e, r) {
        return this.radius = void 0 !== t ? t : 1,
        this.phi = void 0 !== e ? e : 0,
        this.theta = void 0 !== r ? r : 0,
        this
    }
    function Nn(t, e) {
        Ct.call(this, t, e),
        this.animationsMap = {},
        this.animationsList = [];
        var r = this.geometry.morphTargets.length
          , n = "__default"
          , i = 0
          , a = r - 1
          , o = r / 1;
        this.createAnimation(n, i, a, o),
        this.setAnimationWeight(n, 1)
    }
    function On(t) {
        lt.call(this),
        this.material = t,
        this.render = function(t) {}
    }
    function Fn(t, e, r, n) {
        this.object = t,
        this.size = void 0 !== e ? e : 1;
        var i = void 0 !== r ? r : 16711680
          , a = void 0 !== n ? n : 1
          , o = 0
          , s = this.object.geometry;
        s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
        var c = new Pt
          , h = new Et(2 * o * 3,3);
        c.addAttribute("position", h),
        Me.call(this, c, new be({
            color: i,
            linewidth: a
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function zn(t) {
        lt.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1;
        for (var e = new Pt, r = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], n = 0, i = 1, a = 32; n < a; n++,
        i++) {
            var o = n / a * Math.PI * 2
              , s = i / a * Math.PI * 2;
            r.push(Math.cos(o), Math.sin(o), 1, Math.cos(s), Math.sin(s), 1)
        }
        e.addAttribute("position", new Et(r,3));
        var c = new be({
            fog: !1
        });
        this.cone = new Me(e,c),
        this.add(this.cone),
        this.update()
    }
    function Bn(t) {
        this.bones = this.getBoneList(t);
        for (var e = new At, r = 0; r < this.bones.length; r++) {
            var n = this.bones[r];
            n.parent && n.parent.isBone && (e.vertices.push(new l),
            e.vertices.push(new l),
            e.colors.push(new q(0,0,1)),
            e.colors.push(new q(0,1,0)))
        }
        e.dynamic = !0;
        var i = new be({
            vertexColors: Ai,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        });
        Me.call(this, e, i),
        this.root = t,
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function Gn(t, e) {
        this.light = t,
        this.light.updateMatrixWorld();
        var r = new We(e,4,2)
          , n = new mt({
            wireframe: !0,
            fog: !1
        });
        n.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        Ct.call(this, r, n),
        this.matrix = this.light.matrixWorld,
        this.matrixAutoUpdate = !1
    }
    function Hn(t, e) {
        lt.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.colors = [new q, new q];
        var r = new Xe(e,4,2);
        r.rotateX(-Math.PI / 2);
        for (var n = 0, i = 8; n < i; n++)
            r.faces[n].color = this.colors[n < 4 ? 0 : 1];
        var a = new mt({
            vertexColors: Si,
            wireframe: !0
        });
        this.lightSphere = new Ct(r,a),
        this.add(this.lightSphere),
        this.update()
    }
    function Vn(t, e, r, n) {
        e = e || 1,
        r = new q(void 0 !== r ? r : 4473924),
        n = new q(void 0 !== n ? n : 8947848);
        for (var i = e / 2, a = 2 * t / e, o = [], s = [], c = 0, h = 0, l = -t; c <= e; c++,
        l += a) {
            o.push(-t, 0, l, t, 0, l),
            o.push(l, 0, -t, l, 0, t);
            var u = c === i ? r : n;
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3,
            u.toArray(s, h),
            h += 3
        }
        var p = new Pt;
        p.addAttribute("position", new Et(o,3)),
        p.addAttribute("color", new Et(s,3));
        var d = new be({
            vertexColors: Ai
        });
        Me.call(this, p, d)
    }
    function kn(t, e, r, n) {
        this.object = t,
        this.size = void 0 !== e ? e : 1;
        var i = void 0 !== r ? r : 16776960
          , a = void 0 !== n ? n : 1
          , o = 0
          , s = this.object.geometry;
        s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
        var c = new Pt
          , h = new Et(2 * o * 3,3);
        c.addAttribute("position", h),
        Me.call(this, c, new be({
            color: i,
            linewidth: a
        })),
        this.matrixAutoUpdate = !1,
        this.update()
    }
    function jn(t, e) {
        lt.call(this),
        this.light = t,
        this.light.updateMatrixWorld(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        void 0 === e && (e = 1);
        var r = new Pt;
        r.addAttribute("position", new Et([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0],3));
        var n = new be({
            fog: !1
        });
        this.add(new we(r,n)),
        r = new Pt,
        r.addAttribute("position", new Et([0, 0, 0, 0, 0, 1],3)),
        this.add(new we(r,n)),
        this.update()
    }
    function Wn(t) {
        function e(t, e, n) {
            r(t, n),
            r(e, n)
        }
        function r(t, e) {
            n.vertices.push(new l),
            n.colors.push(new q(e)),
            void 0 === a[t] && (a[t] = []),
            a[t].push(n.vertices.length - 1)
        }
        var n = new At
          , i = new be({
            color: 16777215,
            vertexColors: Si
        })
          , a = {}
          , o = 16755200
          , s = 16711680
          , c = 43775
          , h = 16777215
          , u = 3355443;
        e("n1", "n2", o),
        e("n2", "n4", o),
        e("n4", "n3", o),
        e("n3", "n1", o),
        e("f1", "f2", o),
        e("f2", "f4", o),
        e("f4", "f3", o),
        e("f3", "f1", o),
        e("n1", "f1", o),
        e("n2", "f2", o),
        e("n3", "f3", o),
        e("n4", "f4", o),
        e("p", "n1", s),
        e("p", "n2", s),
        e("p", "n3", s),
        e("p", "n4", s),
        e("u1", "u2", c),
        e("u2", "u3", c),
        e("u3", "u1", c),
        e("c", "t", h),
        e("p", "c", u),
        e("cn1", "cn2", u),
        e("cn3", "cn4", u),
        e("cf1", "cf2", u),
        e("cf3", "cf4", u),
        Me.call(this, n, i),
        this.camera = t,
        this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(),
        this.matrix = t.matrixWorld,
        this.matrixAutoUpdate = !1,
        this.pointMap = a,
        this.update()
    }
    function Xn(t, e) {
        var r = void 0 !== e ? e : 8947848;
        this.object = t,
        this.box = new et,
        Ct.call(this, new or(1,1,1), new mt({
            color: r,
            wireframe: !0
        }))
    }
    function qn(t, e) {
        void 0 === e && (e = 16776960);
        var r = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7])
          , n = new Float32Array(24)
          , i = new Pt;
        i.setIndex(new gt(r,1)),
        i.addAttribute("position", new gt(n,3)),
        Me.call(this, i, new be({
            color: e
        })),
        void 0 !== t && this.update(t)
    }
    function Yn(t, e, r, n, i, a) {
        lt.call(this),
        void 0 === n && (n = 16776960),
        void 0 === r && (r = 1),
        void 0 === i && (i = .2 * r),
        void 0 === a && (a = .2 * i),
        this.position.copy(e),
        this.line = new we(qc,new be({
            color: n
        })),
        this.line.matrixAutoUpdate = !1,
        this.add(this.line),
        this.cone = new Ct(Yc,new mt({
            color: n
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(t),
        this.setLength(r, i, a)
    }
    function Zn(t) {
        t = t || 1;
        var e = new Float32Array([0, 0, 0, t, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t])
          , r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1])
          , n = new Pt;
        n.addAttribute("position", new gt(e,3)),
        n.addAttribute("color", new gt(r,3));
        var i = new be({
            vertexColors: Ai
        });
        Me.call(this, n, i)
    }
    function Jn(e) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3."),
        t.CatmullRomCurve3.call(this, e),
        this.type = "catmullrom",
        this.closed = !0
    }
    function Qn(t, e, r, n, i, a) {
        tn.call(this, t, e, r, r, n, i, a)
    }
    function Kn(t, e, r, n, i, a, o) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
        new ft(t,e,r,i,a,o)
    }
    function $n(t, e) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
        new Te(t,e)
    }
    function ti(t, e) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
        new Te(t,e)
    }
    function ei(t) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
        new Ee(t)
    }
    function ri(t) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
        new Ee(t)
    }
    function ni(t) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
        new Ee(t)
    }
    function ii(t, e, r) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."),
        new l(t,e,r)
    }
    function ai(t, e) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."),
        new Me(new $e(t.geometry),new be({
            color: void 0 !== e ? e : 16777215
        }))
    }
    function oi(t, e) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."),
        new Me(new Ce(t.geometry),new be({
            color: void 0 !== e ? e : 16777215
        }))
    }
    function si() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
        this.projectVector = function(t, e) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."),
            t.project(e)
        }
        ,
        this.unprojectVector = function(t, e) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
            t.unproject(e)
        }
        ,
        this.pickingRay = function(t, e) {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }
    function ci() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
        this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
        this.clear = function() {}
        ,
        this.render = function() {}
        ,
        this.setClearColor = function() {}
        ,
        this.setSize = function() {}
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
    void 0 === Math.sign && (Math.sign = function(t) {
        return t < 0 ? -1 : t > 0 ? 1 : +t
    }
    ),
    void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
        }
    }),
    void 0 === Object.assign && !function() {
        Object.assign = function(t) {
            if (void 0 === t || null === t)
                throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), r = 1; r < arguments.length; r++) {
                var n = arguments[r];
                if (void 0 !== n && null !== n)
                    for (var i in n)
                        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
    }(),
    Object.assign(e.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var r = this._listeners;
            void 0 === r[t] && (r[t] = []),
            r[t].indexOf(e) === -1 && r[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners)
                return !1;
            var r = this._listeners;
            return void 0 !== r[t] && r[t].indexOf(e) !== -1
        },
        removeEventListener: function(t, e) {
            if (void 0 !== this._listeners) {
                var r = this._listeners
                  , n = r[t];
                if (void 0 !== n) {
                    var i = n.indexOf(e);
                    i !== -1 && n.splice(i, 1)
                }
            }
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners) {
                var e = this._listeners
                  , r = e[t.type];
                if (void 0 !== r) {
                    t.target = this;
                    var n = []
                      , i = 0
                      , a = r.length;
                    for (i = 0; i < a; i++)
                        n[i] = r[i];
                    for (i = 0; i < a; i++)
                        n[i].call(this, t)
                }
            }
        }
    });
    var hi = "81dev"
      , li = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    }
      , ui = 0
      , pi = 1
      , di = 2
      , fi = 3
      , mi = 0
      , gi = 1
      , vi = 0
      , yi = 1
      , xi = 2
      , _i = 0
      , bi = 1
      , wi = 2
      , Mi = 1
      , Ei = 2
      , Ti = 0
      , Si = 1
      , Ai = 2
      , Li = 0
      , Ri = 1
      , Pi = 2
      , Ci = 3
      , Ui = 4
      , Ii = 5
      , Di = {
        NoBlending: Li,
        NormalBlending: Ri,
        AdditiveBlending: Pi,
        SubtractiveBlending: Ci,
        MultiplyBlending: Ui,
        CustomBlending: Ii
    }
      , Ni = 100
      , Oi = 101
      , Fi = 102
      , zi = 103
      , Bi = 104
      , Gi = 200
      , Hi = 201
      , Vi = 202
      , ki = 203
      , ji = 204
      , Wi = 205
      , Xi = 206
      , qi = 207
      , Yi = 208
      , Zi = 209
      , Ji = 210
      , Qi = 0
      , Ki = 1
      , $i = 2
      , ta = 3
      , ea = 4
      , ra = 5
      , na = 6
      , ia = 7
      , aa = 0
      , oa = 1
      , sa = 2
      , ca = 0
      , ha = 1
      , la = 2
      , ua = 3
      , pa = 4
      , da = 300
      , fa = 301
      , ma = 302
      , ga = 303
      , va = 304
      , ya = 305
      , xa = 306
      , _a = 307
      , ba = {
        UVMapping: da,
        CubeReflectionMapping: fa,
        CubeRefractionMapping: ma,
        EquirectangularReflectionMapping: ga,
        EquirectangularRefractionMapping: va,
        SphericalReflectionMapping: ya,
        CubeUVReflectionMapping: xa,
        CubeUVRefractionMapping: _a
    }
      , wa = 1e3
      , Ma = 1001
      , Ea = 1002
      , Ta = {
        RepeatWrapping: wa,
        ClampToEdgeWrapping: Ma,
        MirroredRepeatWrapping: Ea
    }
      , Sa = 1003
      , Aa = 1004
      , La = 1005
      , Ra = 1006
      , Pa = 1007
      , Ca = 1008
      , Ua = {
        NearestFilter: Sa,
        NearestMipMapNearestFilter: Aa,
        NearestMipMapLinearFilter: La,
        LinearFilter: Ra,
        LinearMipMapNearestFilter: Pa,
        LinearMipMapLinearFilter: Ca
    }
      , Ia = 1009
      , Da = 1010
      , Na = 1011
      , Oa = 1012
      , Fa = 1013
      , za = 1014
      , Ba = 1015
      , Ga = 1016
      , Ha = 1017
      , Va = 1018
      , ka = 1019
      , ja = 1020
      , Wa = 1021
      , Xa = 1022
      , qa = 1023
      , Ya = 1024
      , Za = 1025
      , Ja = qa
      , Qa = 1026
      , Ka = 1027
      , $a = 2001
      , to = 2002
      , eo = 2003
      , ro = 2004
      , no = 2100
      , io = 2101
      , ao = 2102
      , oo = 2103
      , so = 2151
      , co = 2200
      , ho = 2201
      , lo = 2202
      , uo = 2300
      , po = 2301
      , fo = 2302
      , mo = 2400
      , go = 2401
      , vo = 2402
      , yo = 0
      , xo = 1
      , _o = 2
      , bo = 3e3
      , wo = 3001
      , Mo = 3007
      , Eo = 3002
      , To = 3003
      , So = 3004
      , Ao = 3005
      , Lo = 3006
      , Ro = 3200
      , Po = 3201;
    t.Math = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: function() {
            var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), r = new Array(36), n = 0;
            return function() {
                for (var i = 0; i < 36; i++)
                    8 === i || 13 === i || 18 === i || 23 === i ? r[i] = "-" : 14 === i ? r[i] = "4" : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0),
                    t = 15 & n,
                    n >>= 4,
                    r[i] = e[19 === i ? 3 & t | 8 : t]);
                return r.join("")
            }
        }(),
        clamp: function(t, e, r) {
            return Math.max(e, Math.min(r, t))
        },
        euclideanModulo: function(t, e) {
            return (t % e + e) % e
        },
        mapLinear: function(t, e, r, n, i) {
            return n + (t - e) * (i - n) / (r - e)
        },
        smoothstep: function(t, e, r) {
            return t <= e ? 0 : t >= r ? 1 : (t = (t - e) / (r - e),
            t * t * (3 - 2 * t))
        },
        smootherstep: function(t, e, r) {
            return t <= e ? 0 : t >= r ? 1 : (t = (t - e) / (r - e),
            t * t * t * (t * (6 * t - 15) + 10))
        },
        random16: function() {
            return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."),
            Math.random()
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        degToRad: function(e) {
            return e * t.Math.DEG2RAD
        },
        radToDeg: function(e) {
            return e * t.Math.RAD2DEG
        },
        isPowerOfTwo: function(t) {
            return 0 === (t & t - 1) && 0 !== t
        },
        nearestPowerOfTwo: function(t) {
            return Math.pow(2, Math.round(Math.log(t) / Math.LN2))
        },
        nextPowerOfTwo: function(t) {
            return t--,
            t |= t >> 1,
            t |= t >> 2,
            t |= t >> 4,
            t |= t >> 8,
            t |= t >> 16,
            t++,
            t
        }
    },
    r.prototype = {
        constructor: r,
        isVector2: !0,
        get width() {
            return this.x
        },
        set width(t) {
            this.x = t
        },
        get height() {
            return this.y
        },
        set height(t) {
            this.y = t
        },
        set: function(t, e) {
            return this.x = t,
            this.y = e,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this
        },
        multiply: function(t) {
            return this.x *= t.x,
            this.y *= t.y,
            this
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t,
            this.y *= t) : (this.x = 0,
            this.y = 0),
            this
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this
        },
        clampScalar: function() {
            var t, e;
            return function(n, i) {
                return void 0 === t && (t = new r,
                e = new r),
                t.set(n, n),
                e.set(i, i),
                this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var r = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, r)) / r)
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        angle: function() {
            var t = Math.atan2(this.y, this.x);
            return t < 0 && (t += 2 * Math.PI),
            t
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , r = this.y - t.y;
            return e * e + r * r
        },
        distanceToManhattan: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0),
            e = e * t.itemSize + r,
            this.x = t.array[e],
            this.y = t.array[e + 1],
            this
        },
        rotateAround: function(t, e) {
            var r = Math.cos(e)
              , n = Math.sin(e)
              , i = this.x - t.x
              , a = this.y - t.y;
            return this.x = i * r - a * n + t.x,
            this.y = i * n + a * r + t.y,
            this
        }
    },
    n.DEFAULT_IMAGE = void 0,
    n.DEFAULT_MAPPING = da,
    n.prototype = {
        constructor: n,
        isTexture: !0,
        set needsUpdate(t) {
            t === !0 && this.version++
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.image = t.image,
            this.mipmaps = t.mipmaps.slice(0),
            this.mapping = t.mapping,
            this.wrapS = t.wrapS,
            this.wrapT = t.wrapT,
            this.magFilter = t.magFilter,
            this.minFilter = t.minFilter,
            this.anisotropy = t.anisotropy,
            this.format = t.format,
            this.type = t.type,
            this.offset.copy(t.offset),
            this.repeat.copy(t.repeat),
            this.generateMipmaps = t.generateMipmaps,
            this.premultiplyAlpha = t.premultiplyAlpha,
            this.flipY = t.flipY,
            this.unpackAlignment = t.unpackAlignment,
            this.encoding = t.encoding,
            this
        },
        toJSON: function(e) {
            function r(t) {
                var e;
                return void 0 !== t.toDataURL ? e = t : (e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
                e.width = t.width,
                e.height = t.height,
                e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)),
                e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", .6) : e.toDataURL("image/png")
            }
            if (void 0 !== e.textures[this.uuid])
                return e.textures[this.uuid];
            var n = {
                metadata: {
                    version: 4.4,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var i = this.image;
                void 0 === i.uuid && (i.uuid = t.Math.generateUUID()),
                void 0 === e.images[i.uuid] && (e.images[i.uuid] = {
                    uuid: i.uuid,
                    url: r(i)
                }),
                n.image = i.uuid
            }
            return e.textures[this.uuid] = n,
            n
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(t) {
            if (this.mapping === da) {
                if (t.multiply(this.repeat),
                t.add(this.offset),
                t.x < 0 || t.x > 1)
                    switch (this.wrapS) {
                    case wa:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case Ma:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case Ea:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                    }
                if (t.y < 0 || t.y > 1)
                    switch (this.wrapT) {
                    case wa:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case Ma:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case Ea:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                    }
                this.flipY && (t.y = 1 - t.y)
            }
        }
    },
    Object.assign(n.prototype, e.prototype);
    var Co = 0;
    a.prototype = {
        constructor: a,
        isVector4: !0,
        set: function(t, e, r, n) {
            return this.x = t,
            this.y = e,
            this.z = r,
            this.w = n,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this.w = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setW: function(t) {
            return this.w = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            case 3:
                this.w = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            case 3:
                return this.w;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z,this.w)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this.w = void 0 !== t.w ? t.w : 1,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this.w += t.w,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this.w += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this.w = t.w + e.w,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this.w += t.w * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this.w -= t.w,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this.w -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this.w = t.w - e.w,
            this
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t,
            this.y *= t,
            this.z *= t,
            this.w *= t) : (this.x = 0,
            this.y = 0,
            this.z = 0,
            this.w = 0),
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , r = this.y
              , n = this.z
              , i = this.w
              , a = t.elements;
            return this.x = a[0] * e + a[4] * r + a[8] * n + a[12] * i,
            this.y = a[1] * e + a[5] * r + a[9] * n + a[13] * i,
            this.z = a[2] * e + a[6] * r + a[10] * n + a[14] * i,
            this.w = a[3] * e + a[7] * r + a[11] * n + a[15] * i,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
            this.y = 0,
            this.z = 0) : (this.x = t.x / e,
            this.y = t.y / e,
            this.z = t.z / e),
            this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e, r, n, i, a = .01, o = .1, s = t.elements, c = s[0], h = s[4], l = s[8], u = s[1], p = s[5], d = s[9], f = s[2], m = s[6], g = s[10];
            if (Math.abs(h - u) < a && Math.abs(l - f) < a && Math.abs(d - m) < a) {
                if (Math.abs(h + u) < o && Math.abs(l + f) < o && Math.abs(d + m) < o && Math.abs(c + p + g - 3) < o)
                    return this.set(1, 0, 0, 0),
                    this;
                e = Math.PI;
                var v = (c + 1) / 2
                  , y = (p + 1) / 2
                  , x = (g + 1) / 2
                  , _ = (h + u) / 4
                  , b = (l + f) / 4
                  , w = (d + m) / 4;
                return v > y && v > x ? v < a ? (r = 0,
                n = .707106781,
                i = .707106781) : (r = Math.sqrt(v),
                n = _ / r,
                i = b / r) : y > x ? y < a ? (r = .707106781,
                n = 0,
                i = .707106781) : (n = Math.sqrt(y),
                r = _ / n,
                i = w / n) : x < a ? (r = .707106781,
                n = .707106781,
                i = 0) : (i = Math.sqrt(x),
                r = b / i,
                n = w / i),
                this.set(r, n, i, e),
                this
            }
            var M = Math.sqrt((m - d) * (m - d) + (l - f) * (l - f) + (u - h) * (u - h));
            return Math.abs(M) < .001 && (M = 1),
            this.x = (m - d) / M,
            this.y = (l - f) / M,
            this.z = (u - h) / M,
            this.w = Math.acos((c + p + g - 1) / 2),
            this
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this.w = Math.min(this.w, t.w),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this.w = Math.max(this.w, t.w),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this.w = Math.max(t.w, Math.min(e.w, this.w)),
            this
        },
        clampScalar: function() {
            var t, e;
            return function(r, n) {
                return void 0 === t && (t = new a,
                e = new a),
                t.set(r, r, r, r),
                e.set(n, n, n, n),
                this.clamp(t, e)
            }
        }(),
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this.w = Math.floor(this.w),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this.w = Math.ceil(this.w),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this.w = Math.round(this.w),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this.w = -this.w,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this.w += (t.w - this.w) * e,
            this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this.w = t[e + 3],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t[e + 3] = this.w,
            t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0),
            e = e * t.itemSize + r,
            this.x = t.array[e],
            this.y = t.array[e + 1],
            this.z = t.array[e + 2],
            this.w = t.array[e + 3],
            this
        }
    },
    Object.assign(o.prototype, e.prototype, {
        isWebGLRenderTarget: !0,
        setSize: function(t, e) {
            this.width === t && this.height === e || (this.width = t,
            this.height = e,
            this.dispose()),
            this.viewport.set(0, 0, t, e),
            this.scissor.set(0, 0, t, e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.width = t.width,
            this.height = t.height,
            this.viewport.copy(t.viewport),
            this.texture = t.texture.clone(),
            this.depthBuffer = t.depthBuffer,
            this.stencilBuffer = t.stencilBuffer,
            this.depthTexture = t.depthTexture,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    s.prototype = Object.create(o.prototype),
    s.prototype.constructor = s,
    s.prototype.isWebGLMultiRenderTarget = !0,
    s.copy = function(t) {
        return o.prototype.copy.call(this, t),
        this.attachments = t.attachments.map(function(t) {
            return t.clone()
        }),
        this
    }
    ,
    c.prototype = Object.create(o.prototype),
    c.prototype.constructor = c,
    c.prototype.isWebGLRenderTargetCube = !0,
    h.prototype = {
        constructor: h,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t,
            this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t,
            this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t,
            this.onChangeCallback()
        },
        get w() {
            return this._w
        },
        set w(t) {
            this._w = t,
            this.onChangeCallback()
        },
        set: function(t, e, r, n) {
            return this._x = t,
            this._y = e,
            this._z = r,
            this._w = n,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._w)
        },
        copy: function(t) {
            return this._x = t.x,
            this._y = t.y,
            this._z = t.z,
            this._w = t.w,
            this.onChangeCallback(),
            this
        },
        setFromEuler: function(t, e) {
            if ((t && t.isEuler) === !1)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var r = Math.cos(t._x / 2)
              , n = Math.cos(t._y / 2)
              , i = Math.cos(t._z / 2)
              , a = Math.sin(t._x / 2)
              , o = Math.sin(t._y / 2)
              , s = Math.sin(t._z / 2)
              , c = t.order;
            return "XYZ" === c ? (this._x = a * n * i + r * o * s,
            this._y = r * o * i - a * n * s,
            this._z = r * n * s + a * o * i,
            this._w = r * n * i - a * o * s) : "YXZ" === c ? (this._x = a * n * i + r * o * s,
            this._y = r * o * i - a * n * s,
            this._z = r * n * s - a * o * i,
            this._w = r * n * i + a * o * s) : "ZXY" === c ? (this._x = a * n * i - r * o * s,
            this._y = r * o * i + a * n * s,
            this._z = r * n * s + a * o * i,
            this._w = r * n * i - a * o * s) : "ZYX" === c ? (this._x = a * n * i - r * o * s,
            this._y = r * o * i + a * n * s,
            this._z = r * n * s - a * o * i,
            this._w = r * n * i + a * o * s) : "YZX" === c ? (this._x = a * n * i + r * o * s,
            this._y = r * o * i + a * n * s,
            this._z = r * n * s - a * o * i,
            this._w = r * n * i - a * o * s) : "XZY" === c && (this._x = a * n * i - r * o * s,
            this._y = r * o * i - a * n * s,
            this._z = r * n * s + a * o * i,
            this._w = r * n * i + a * o * s),
            e !== !1 && this.onChangeCallback(),
            this
        },
        setFromAxisAngle: function(t, e) {
            var r = e / 2
              , n = Math.sin(r);
            return this._x = t.x * n,
            this._y = t.y * n,
            this._z = t.z * n,
            this._w = Math.cos(r),
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(t) {
            var e, r = t.elements, n = r[0], i = r[4], a = r[8], o = r[1], s = r[5], c = r[9], h = r[2], l = r[6], u = r[10], p = n + s + u;
            return p > 0 ? (e = .5 / Math.sqrt(p + 1),
            this._w = .25 / e,
            this._x = (l - c) * e,
            this._y = (a - h) * e,
            this._z = (o - i) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u),
            this._w = (l - c) / e,
            this._x = .25 * e,
            this._y = (i + o) / e,
            this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u),
            this._w = (a - h) / e,
            this._x = (i + o) / e,
            this._y = .25 * e,
            this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s),
            this._w = (o - i) / e,
            this._x = (a + h) / e,
            this._y = (c + l) / e,
            this._z = .25 * e),
            this.onChangeCallback(),
            this
        },
        setFromUnitVectors: function() {
            var t, e, r = 1e-6;
            return function(n, i) {
                return void 0 === t && (t = new l),
                e = n.dot(i) + 1,
                e < r ? (e = 0,
                Math.abs(n.x) > Math.abs(n.z) ? t.set(-n.y, n.x, 0) : t.set(0, -n.z, n.y)) : t.crossVectors(n, i),
                this._x = t.x,
                this._y = t.y,
                this._z = t.z,
                this._w = e,
                this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            return this._x *= -1,
            this._y *= -1,
            this._z *= -1,
            this.onChangeCallback(),
            this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._x = 0,
            this._y = 0,
            this._z = 0,
            this._w = 1) : (t = 1 / t,
            this._x = this._x * t,
            this._y = this._y * t,
            this._z = this._z * t,
            this._w = this._w * t),
            this.onChangeCallback(),
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
            this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function(t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function(t, e) {
            var r = t._x
              , n = t._y
              , i = t._z
              , a = t._w
              , o = e._x
              , s = e._y
              , c = e._z
              , h = e._w;
            return this._x = r * h + a * o + n * c - i * s,
            this._y = n * h + a * s + i * o - r * c,
            this._z = i * h + a * c + r * s - n * o,
            this._w = a * h - r * o - n * s - i * c,
            this.onChangeCallback(),
            this
        },
        slerp: function(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            var r = this._x
              , n = this._y
              , i = this._z
              , a = this._w
              , o = a * t._w + r * t._x + n * t._y + i * t._z;
            if (o < 0 ? (this._w = -t._w,
            this._x = -t._x,
            this._y = -t._y,
            this._z = -t._z,
            o = -o) : this.copy(t),
            o >= 1)
                return this._w = a,
                this._x = r,
                this._y = n,
                this._z = i,
                this;
            var s = Math.sqrt(1 - o * o);
            if (Math.abs(s) < .001)
                return this._w = .5 * (a + this._w),
                this._x = .5 * (r + this._x),
                this._y = .5 * (n + this._y),
                this._z = .5 * (i + this._z),
                this;
            var c = Math.atan2(s, o)
              , h = Math.sin((1 - e) * c) / s
              , l = Math.sin(e * c) / s;
            return this._w = a * h + this._w * l,
            this._x = r * h + this._x * l,
            this._y = n * h + this._y * l,
            this._z = i * h + this._z * l,
            this.onChangeCallback(),
            this
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this._x = t[e],
            this._y = t[e + 1],
            this._z = t[e + 2],
            this._w = t[e + 3],
            this.onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._w,
            t
        },
        onChange: function(t) {
            return this.onChangeCallback = t,
            this
        },
        onChangeCallback: function() {}
    },
    Object.assign(h, {
        slerp: function(t, e, r, n) {
            return r.copy(t).slerp(e, n)
        },
        slerpFlat: function(t, e, r, n, i, a, o) {
            var s = r[n + 0]
              , c = r[n + 1]
              , h = r[n + 2]
              , l = r[n + 3]
              , u = i[a + 0]
              , p = i[a + 1]
              , d = i[a + 2]
              , f = i[a + 3];
            if (l !== f || s !== u || c !== p || h !== d) {
                var m = 1 - o
                  , g = s * u + c * p + h * d + l * f
                  , v = g >= 0 ? 1 : -1
                  , y = 1 - g * g;
                if (y > Number.EPSILON) {
                    var x = Math.sqrt(y)
                      , _ = Math.atan2(x, g * v);
                    m = Math.sin(m * _) / x,
                    o = Math.sin(o * _) / x
                }
                var b = o * v;
                if (s = s * m + u * b,
                c = c * m + p * b,
                h = h * m + d * b,
                l = l * m + f * b,
                m === 1 - o) {
                    var w = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
                    s *= w,
                    c *= w,
                    h *= w,
                    l *= w
                }
            }
            t[e] = s,
            t[e + 1] = c,
            t[e + 2] = h,
            t[e + 3] = l
        }
    }),
    l.prototype = {
        constructor: l,
        isVector3: !0,
        set: function(t, e, r) {
            return this.x = t,
            this.y = e,
            this.z = r,
            this
        },
        setScalar: function(t) {
            return this.x = t,
            this.y = t,
            this.z = t,
            this
        },
        setX: function(t) {
            return this.x = t,
            this
        },
        setY: function(t) {
            return this.y = t,
            this
        },
        setZ: function(t) {
            return this.z = t,
            this
        },
        setComponent: function(t, e) {
            switch (t) {
            case 0:
                this.x = e;
                break;
            case 1:
                this.y = e;
                break;
            case 2:
                this.z = e;
                break;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        getComponent: function(t) {
            switch (t) {
            case 0:
                return this.x;
            case 1:
                return this.y;
            case 2:
                return this.z;
            default:
                throw new Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x,this.y,this.z)
        },
        copy: function(t) {
            return this.x = t.x,
            this.y = t.y,
            this.z = t.z,
            this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
            this.addVectors(t, e)) : (this.x += t.x,
            this.y += t.y,
            this.z += t.z,
            this)
        },
        addScalar: function(t) {
            return this.x += t,
            this.y += t,
            this.z += t,
            this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x,
            this.y = t.y + e.y,
            this.z = t.z + e.z,
            this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e,
            this.y += t.y * e,
            this.z += t.z * e,
            this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
            this.subVectors(t, e)) : (this.x -= t.x,
            this.y -= t.y,
            this.z -= t.z,
            this)
        },
        subScalar: function(t) {
            return this.x -= t,
            this.y -= t,
            this.z -= t,
            this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x,
            this.y = t.y - e.y,
            this.z = t.z - e.z,
            this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
            this.multiplyVectors(t, e)) : (this.x *= t.x,
            this.y *= t.y,
            this.z *= t.z,
            this)
        },
        multiplyScalar: function(t) {
            return isFinite(t) ? (this.x *= t,
            this.y *= t,
            this.z *= t) : (this.x = 0,
            this.y = 0,
            this.z = 0),
            this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x,
            this.y = t.y * e.y,
            this.z = t.z * e.z,
            this
        },
        applyEuler: function() {
            var t;
            return function(e) {
                return (e && e.isEuler) === !1 && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
                void 0 === t && (t = new h),
                this.applyQuaternion(t.setFromEuler(e))
            }
        }(),
        applyAxisAngle: function() {
            var t;
            return function(e, r) {
                return void 0 === t && (t = new h),
                this.applyQuaternion(t.setFromAxisAngle(e, r))
            }
        }(),
        applyMatrix3: function(t) {
            var e = this.x
              , r = this.y
              , n = this.z
              , i = t.elements;
            return this.x = i[0] * e + i[3] * r + i[6] * n,
            this.y = i[1] * e + i[4] * r + i[7] * n,
            this.z = i[2] * e + i[5] * r + i[8] * n,
            this
        },
        applyMatrix4: function(t) {
            var e = this.x
              , r = this.y
              , n = this.z
              , i = t.elements;
            return this.x = i[0] * e + i[4] * r + i[8] * n + i[12],
            this.y = i[1] * e + i[5] * r + i[9] * n + i[13],
            this.z = i[2] * e + i[6] * r + i[10] * n + i[14],
            this
        },
        applyProjection: function(t) {
            var e = this.x
              , r = this.y
              , n = this.z
              , i = t.elements
              , a = 1 / (i[3] * e + i[7] * r + i[11] * n + i[15]);
            return this.x = (i[0] * e + i[4] * r + i[8] * n + i[12]) * a,
            this.y = (i[1] * e + i[5] * r + i[9] * n + i[13]) * a,
            this.z = (i[2] * e + i[6] * r + i[10] * n + i[14]) * a,
            this
        },
        applyQuaternion: function(t) {
            var e = this.x
              , r = this.y
              , n = this.z
              , i = t.x
              , a = t.y
              , o = t.z
              , s = t.w
              , c = s * e + a * n - o * r
              , h = s * r + o * e - i * n
              , l = s * n + i * r - a * e
              , u = -i * e - a * r - o * n;
            return this.x = c * s + u * -i + h * -o - l * -a,
            this.y = h * s + u * -a + l * -i - c * -o,
            this.z = l * s + u * -o + c * -a - h * -i,
            this
        },
        project: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u),
                t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)),
                this.applyProjection(t)
            }
        }(),
        unproject: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u),
                t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)),
                this.applyProjection(t)
            }
        }(),
        transformDirection: function(t) {
            var e = this.x
              , r = this.y
              , n = this.z
              , i = t.elements;
            return this.x = i[0] * e + i[4] * r + i[8] * n,
            this.y = i[1] * e + i[5] * r + i[9] * n,
            this.z = i[2] * e + i[6] * r + i[10] * n,
            this.normalize()
        },
        divide: function(t) {
            return this.x /= t.x,
            this.y /= t.y,
            this.z /= t.z,
            this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x),
            this.y = Math.min(this.y, t.y),
            this.z = Math.min(this.z, t.z),
            this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x),
            this.y = Math.max(this.y, t.y),
            this.z = Math.max(this.z, t.z),
            this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
            this.y = Math.max(t.y, Math.min(e.y, this.y)),
            this.z = Math.max(t.z, Math.min(e.z, this.z)),
            this
        },
        clampScalar: function() {
            var t, e;
            return function(r, n) {
                return void 0 === t && (t = new l,
                e = new l),
                t.set(r, r, r),
                e.set(n, n, n),
                this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var r = this.length();
            return this.multiplyScalar(Math.max(t, Math.min(e, r)) / r)
        },
        floor: function() {
            return this.x = Math.floor(this.x),
            this.y = Math.floor(this.y),
            this.z = Math.floor(this.z),
            this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x),
            this.y = Math.ceil(this.y),
            this.z = Math.ceil(this.z),
            this
        },
        round: function() {
            return this.x = Math.round(this.x),
            this.y = Math.round(this.y),
            this.z = Math.round(this.z),
            this
        },
        roundToZero: function() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
            this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
            this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
            this
        },
        negate: function() {
            return this.x = -this.x,
            this.y = -this.y,
            this.z = -this.z,
            this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length())
        },
        setLength: function(t) {
            return this.multiplyScalar(t / this.length())
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e,
            this.y += (t.y - this.y) * e,
            this.z += (t.z - this.z) * e,
            this
        },
        lerpVectors: function(t, e, r) {
            return this.subVectors(e, t).multiplyScalar(r).add(t)
        },
        cross: function(t, e) {
            if (void 0 !== e)
                return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                this.crossVectors(t, e);
            var r = this.x
              , n = this.y
              , i = this.z;
            return this.x = n * t.z - i * t.y,
            this.y = i * t.x - r * t.z,
            this.z = r * t.y - n * t.x,
            this
        },
        crossVectors: function(t, e) {
            var r = t.x
              , n = t.y
              , i = t.z
              , a = e.x
              , o = e.y
              , s = e.z;
            return this.x = n * s - i * o,
            this.y = i * a - r * s,
            this.z = r * o - n * a,
            this
        },
        projectOnVector: function(t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new l),
                t.copy(this).projectOnVector(e),
                this.sub(t)
            }
        }(),
        reflect: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new l),
                this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function(e) {
            var r = this.dot(e) / Math.sqrt(this.lengthSq() * e.lengthSq());
            return Math.acos(t.Math.clamp(r, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x
              , r = this.y - t.y
              , n = this.z - t.z;
            return e * e + r * r + n * n
        },
        distanceToManhattan: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function(t) {
            var e = Math.sin(t.phi) * t.radius;
            return this.x = e * Math.sin(t.theta),
            this.y = Math.cos(t.phi) * t.radius,
            this.z = e * Math.cos(t.theta),
            this
        },
        setFromMatrixPosition: function(t) {
            return this.setFromMatrixColumn(t, 3)
        },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length()
              , r = this.setFromMatrixColumn(t, 1).length()
              , n = this.setFromMatrixColumn(t, 2).length();
            return this.x = e,
            this.y = r,
            this.z = n,
            this
        },
        setFromMatrixColumn: function(t, e) {
            if ("number" == typeof t) {
                console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");
                var r = t;
                t = e,
                e = r
            }
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.x = t[e],
            this.y = t[e + 1],
            this.z = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.x,
            t[e + 1] = this.y,
            t[e + 2] = this.z,
            t
        },
        fromAttribute: function(t, e, r) {
            return void 0 === r && (r = 0),
            e = e * t.itemSize + r,
            this.x = t.array[e],
            this.y = t.array[e + 1],
            this.z = t.array[e + 2],
            this
        }
    },
    u.prototype = {
        constructor: u,
        isMatrix4: !0,
        set: function(t, e, r, n, i, a, o, s, c, h, l, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = t,
            g[4] = e,
            g[8] = r,
            g[12] = n,
            g[1] = i,
            g[5] = a,
            g[9] = o,
            g[13] = s,
            g[2] = c,
            g[6] = h,
            g[10] = l,
            g[14] = u,
            g[3] = p,
            g[7] = d,
            g[11] = f,
            g[15] = m,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new u).fromArray(this.elements)
        },
        copy: function(t) {
            return this.elements.set(t.elements),
            this
        },
        copyPosition: function(t) {
            var e = this.elements
              , r = t.elements;
            return e[12] = r[12],
            e[13] = r[13],
            e[14] = r[14],
            this
        },
        extractBasis: function(t, e, r) {
            return t.setFromMatrixColumn(this, 0),
            e.setFromMatrixColumn(this, 1),
            r.setFromMatrixColumn(this, 2),
            this
        },
        makeBasis: function(t, e, r) {
            return this.set(t.x, e.x, r.x, 0, t.y, e.y, r.y, 0, t.z, e.z, r.z, 0, 0, 0, 0, 1),
            this
        },
        extractRotation: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new l);
                var r = this.elements
                  , n = e.elements
                  , i = 1 / t.setFromMatrixColumn(e, 0).length()
                  , a = 1 / t.setFromMatrixColumn(e, 1).length()
                  , o = 1 / t.setFromMatrixColumn(e, 2).length();
                return r[0] = n[0] * i,
                r[1] = n[1] * i,
                r[2] = n[2] * i,
                r[4] = n[4] * a,
                r[5] = n[5] * a,
                r[6] = n[6] * a,
                r[8] = n[8] * o,
                r[9] = n[9] * o,
                r[10] = n[10] * o,
                this
            }
        }(),
        makeRotationFromEuler: function(t) {
            (t && t.isEuler) === !1 && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements
              , r = t.x
              , n = t.y
              , i = t.z
              , a = Math.cos(r)
              , o = Math.sin(r)
              , s = Math.cos(n)
              , c = Math.sin(n)
              , h = Math.cos(i)
              , l = Math.sin(i);
            if ("XYZ" === t.order) {
                var u = a * h
                  , p = a * l
                  , d = o * h
                  , f = o * l;
                e[0] = s * h,
                e[4] = -s * l,
                e[8] = c,
                e[1] = p + d * c,
                e[5] = u - f * c,
                e[9] = -o * s,
                e[2] = f - u * c,
                e[6] = d + p * c,
                e[10] = a * s
            } else if ("YXZ" === t.order) {
                var m = s * h
                  , g = s * l
                  , v = c * h
                  , y = c * l;
                e[0] = m + y * o,
                e[4] = v * o - g,
                e[8] = a * c,
                e[1] = a * l,
                e[5] = a * h,
                e[9] = -o,
                e[2] = g * o - v,
                e[6] = y + m * o,
                e[10] = a * s
            } else if ("ZXY" === t.order) {
                var m = s * h
                  , g = s * l
                  , v = c * h
                  , y = c * l;
                e[0] = m - y * o,
                e[4] = -a * l,
                e[8] = v + g * o,
                e[1] = g + v * o,
                e[5] = a * h,
                e[9] = y - m * o,
                e[2] = -a * c,
                e[6] = o,
                e[10] = a * s
            } else if ("ZYX" === t.order) {
                var u = a * h
                  , p = a * l
                  , d = o * h
                  , f = o * l;
                e[0] = s * h,
                e[4] = d * c - p,
                e[8] = u * c + f,
                e[1] = s * l,
                e[5] = f * c + u,
                e[9] = p * c - d,
                e[2] = -c,
                e[6] = o * s,
                e[10] = a * s
            } else if ("YZX" === t.order) {
                var x = a * s
                  , _ = a * c
                  , b = o * s
                  , w = o * c;
                e[0] = s * h,
                e[4] = w - x * l,
                e[8] = b * l + _,
                e[1] = l,
                e[5] = a * h,
                e[9] = -o * h,
                e[2] = -c * h,
                e[6] = _ * l + b,
                e[10] = x - w * l
            } else if ("XZY" === t.order) {
                var x = a * s
                  , _ = a * c
                  , b = o * s
                  , w = o * c;
                e[0] = s * h,
                e[4] = -l,
                e[8] = c * h,
                e[1] = x * l + w,
                e[5] = a * h,
                e[9] = _ * l - b,
                e[2] = b * l - _,
                e[6] = o * h,
                e[10] = w * l + x
            }
            return e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        },
        makeRotationFromQuaternion: function(t) {
            var e = this.elements
              , r = t.x
              , n = t.y
              , i = t.z
              , a = t.w
              , o = r + r
              , s = n + n
              , c = i + i
              , h = r * o
              , l = r * s
              , u = r * c
              , p = n * s
              , d = n * c
              , f = i * c
              , m = a * o
              , g = a * s
              , v = a * c;
            return e[0] = 1 - (p + f),
            e[4] = l - v,
            e[8] = u + g,
            e[1] = l + v,
            e[5] = 1 - (h + f),
            e[9] = d - m,
            e[2] = u - g,
            e[6] = d + m,
            e[10] = 1 - (h + p),
            e[3] = 0,
            e[7] = 0,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1,
            this
        },
        lookAt: function() {
            var t, e, r;
            return function(n, i, a) {
                void 0 === t && (t = new l,
                e = new l,
                r = new l);
                var o = this.elements;
                return r.subVectors(n, i).normalize(),
                0 === r.lengthSq() && (r.z = 1),
                t.crossVectors(a, r).normalize(),
                0 === t.lengthSq() && (r.z += 1e-4,
                t.crossVectors(a, r).normalize()),
                e.crossVectors(r, t),
                o[0] = t.x,
                o[4] = e.x,
                o[8] = r.x,
                o[1] = t.y,
                o[5] = e.y,
                o[9] = r.y,
                o[2] = t.z,
                o[6] = e.z,
                o[10] = r.z,
                this
            }
        }(),
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
            this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var r = t.elements
              , n = e.elements
              , i = this.elements
              , a = r[0]
              , o = r[4]
              , s = r[8]
              , c = r[12]
              , h = r[1]
              , l = r[5]
              , u = r[9]
              , p = r[13]
              , d = r[2]
              , f = r[6]
              , m = r[10]
              , g = r[14]
              , v = r[3]
              , y = r[7]
              , x = r[11]
              , _ = r[15]
              , b = n[0]
              , w = n[4]
              , M = n[8]
              , E = n[12]
              , T = n[1]
              , S = n[5]
              , A = n[9]
              , L = n[13]
              , R = n[2]
              , P = n[6]
              , C = n[10]
              , U = n[14]
              , I = n[3]
              , D = n[7]
              , N = n[11]
              , O = n[15];
            return i[0] = a * b + o * T + s * R + c * I,
            i[4] = a * w + o * S + s * P + c * D,
            i[8] = a * M + o * A + s * C + c * N,
            i[12] = a * E + o * L + s * U + c * O,
            i[1] = h * b + l * T + u * R + p * I,
            i[5] = h * w + l * S + u * P + p * D,
            i[9] = h * M + l * A + u * C + p * N,
            i[13] = h * E + l * L + u * U + p * O,
            i[2] = d * b + f * T + m * R + g * I,
            i[6] = d * w + f * S + m * P + g * D,
            i[10] = d * M + f * A + m * C + g * N,
            i[14] = d * E + f * L + m * U + g * O,
            i[3] = v * b + y * T + x * R + _ * I,
            i[7] = v * w + y * S + x * P + _ * D,
            i[11] = v * M + y * A + x * C + _ * N,
            i[15] = v * E + y * L + x * U + _ * O,
            this
        },
        multiplyToArray: function(t, e, r) {
            var n = this.elements;
            return this.multiplyMatrices(t, e),
            r[0] = n[0],
            r[1] = n[1],
            r[2] = n[2],
            r[3] = n[3],
            r[4] = n[4],
            r[5] = n[5],
            r[6] = n[6],
            r[7] = n[7],
            r[8] = n[8],
            r[9] = n[9],
            r[10] = n[10],
            r[11] = n[11],
            r[12] = n[12],
            r[13] = n[13],
            r[14] = n[14],
            r[15] = n[15],
            this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[4] *= t,
            e[8] *= t,
            e[12] *= t,
            e[1] *= t,
            e[5] *= t,
            e[9] *= t,
            e[13] *= t,
            e[2] *= t,
            e[6] *= t,
            e[10] *= t,
            e[14] *= t,
            e[3] *= t,
            e[7] *= t,
            e[11] *= t,
            e[15] *= t,
            this
        },
        applyToVector3Array: function() {
            var t;
            return function(e, r, n) {
                void 0 === t && (t = new l),
                void 0 === r && (r = 0),
                void 0 === n && (n = e.length);
                for (var i = 0, a = r; i < n; i += 3,
                a += 3)
                    t.fromArray(e, a),
                    t.applyMatrix4(this),
                    t.toArray(e, a);
                return e
            }
        }(),
        applyToBuffer: function() {
            var t;
            return function(e, r, n) {
                void 0 === t && (t = new l),
                void 0 === r && (r = 0),
                void 0 === n && (n = e.length / e.itemSize);
                for (var i = 0, a = r; i < n; i++,
                a++)
                    t.x = e.getX(a),
                    t.y = e.getY(a),
                    t.z = e.getZ(a),
                    t.applyMatrix4(this),
                    e.setXYZ(t.x, t.y, t.z);
                return e
            }
        }(),
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , r = t[4]
              , n = t[8]
              , i = t[12]
              , a = t[1]
              , o = t[5]
              , s = t[9]
              , c = t[13]
              , h = t[2]
              , l = t[6]
              , u = t[10]
              , p = t[14]
              , d = t[3]
              , f = t[7]
              , m = t[11]
              , g = t[15];
            return d * (+i * s * l - n * c * l - i * o * u + r * c * u + n * o * p - r * s * p) + f * (+e * s * p - e * c * u + i * a * u - n * a * p + n * c * h - i * s * h) + m * (+e * c * l - e * o * p - i * a * l + r * a * p + i * o * h - r * c * h) + g * (-n * o * h - e * s * l + e * o * u + n * a * l - r * a * u + r * s * h)
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1],
            e[1] = e[4],
            e[4] = t,
            t = e[2],
            e[2] = e[8],
            e[8] = t,
            t = e[6],
            e[6] = e[9],
            e[9] = t,
            t = e[3],
            e[3] = e[12],
            e[12] = t,
            t = e[7],
            e[7] = e[13],
            e[13] = t,
            t = e[11],
            e[11] = e[14],
            e[14] = t,
            this
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),
            this.toArray(t, e)
        },
        getPosition: function() {
            var t;
            return function() {
                return void 0 === t && (t = new l),
                console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),
                t.setFromMatrixColumn(this, 3)
            }
        }(),
        setPosition: function(t) {
            var e = this.elements;
            return e[12] = t.x,
            e[13] = t.y,
            e[14] = t.z,
            this
        },
        getInverse: function(t, e) {
            var r = this.elements
              , n = t.elements
              , i = n[0]
              , a = n[1]
              , o = n[2]
              , s = n[3]
              , c = n[4]
              , h = n[5]
              , l = n[6]
              , u = n[7]
              , p = n[8]
              , d = n[9]
              , f = n[10]
              , m = n[11]
              , g = n[12]
              , v = n[13]
              , y = n[14]
              , x = n[15]
              , _ = d * y * u - v * f * u + v * l * m - h * y * m - d * l * x + h * f * x
              , b = g * f * u - p * y * u - g * l * m + c * y * m + p * l * x - c * f * x
              , w = p * v * u - g * d * u + g * h * m - c * v * m - p * h * x + c * d * x
              , M = g * d * l - p * v * l - g * h * f + c * v * f + p * h * y - c * d * y
              , E = i * _ + a * b + o * w + s * M;
            if (0 === E) {
                var T = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
                if (e === !0)
                    throw new Error(T);
                return console.warn(T),
                this.identity()
            }
            var S = 1 / E;
            return r[0] = _ * S,
            r[1] = (v * f * s - d * y * s - v * o * m + a * y * m + d * o * x - a * f * x) * S,
            r[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * S,
            r[3] = (d * l * s - h * f * s - d * o * u + a * f * u + h * o * m - a * l * m) * S,
            r[4] = b * S,
            r[5] = (p * y * s - g * f * s + g * o * m - i * y * m - p * o * x + i * f * x) * S,
            r[6] = (g * l * s - c * y * s - g * o * u + i * y * u + c * o * x - i * l * x) * S,
            r[7] = (c * f * s - p * l * s + p * o * u - i * f * u - c * o * m + i * l * m) * S,
            r[8] = w * S,
            r[9] = (g * d * s - p * v * s - g * a * m + i * v * m + p * a * x - i * d * x) * S,
            r[10] = (c * v * s - g * h * s + g * a * u - i * v * u - c * a * x + i * h * x) * S,
            r[11] = (p * h * s - c * d * s - p * a * u + i * d * u + c * a * m - i * h * m) * S,
            r[12] = M * S,
            r[13] = (p * v * o - g * d * o + g * a * f - i * v * f - p * a * y + i * d * y) * S,
            r[14] = (g * h * o - c * v * o - g * a * l + i * v * l + c * a * y - i * h * y) * S,
            r[15] = (c * d * o - p * h * o + p * a * l - i * d * l - c * a * f + i * h * f) * S,
            this
        },
        scale: function(t) {
            var e = this.elements
              , r = t.x
              , n = t.y
              , i = t.z;
            return e[0] *= r,
            e[4] *= n,
            e[8] *= i,
            e[1] *= r,
            e[5] *= n,
            e[9] *= i,
            e[2] *= r,
            e[6] *= n,
            e[10] *= i,
            e[3] *= r,
            e[7] *= n,
            e[11] *= i,
            this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements
              , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
              , r = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
              , n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, r, n))
        },
        makeTranslation: function(t, e, r) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, r, 0, 0, 0, 1),
            this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t)
              , r = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t)
              , r = Math.sin(t);
            return this.set(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1),
            this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t)
              , r = Math.sin(t);
            return this.set(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
            this
        },
        makeRotationAxis: function(t, e) {
            var r = Math.cos(e)
              , n = Math.sin(e)
              , i = 1 - r
              , a = t.x
              , o = t.y
              , s = t.z
              , c = i * a
              , h = i * o;
            return this.set(c * a + r, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + r, h * s - n * a, 0, c * s - n * o, h * s + n * a, i * s * s + r, 0, 0, 0, 0, 1),
            this
        },
        makeScale: function(t, e, r) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1),
            this
        },
        compose: function(t, e, r) {
            return this.makeRotationFromQuaternion(e),
            this.scale(r),
            this.setPosition(t),
            this
        },
        decompose: function() {
            var t, e;
            return function(r, n, i) {
                void 0 === t && (t = new l,
                e = new u);
                var a = this.elements
                  , o = t.set(a[0], a[1], a[2]).length()
                  , s = t.set(a[4], a[5], a[6]).length()
                  , c = t.set(a[8], a[9], a[10]).length()
                  , h = this.determinant();
                h < 0 && (o = -o),
                r.x = a[12],
                r.y = a[13],
                r.z = a[14],
                e.elements.set(this.elements);
                var p = 1 / o
                  , d = 1 / s
                  , f = 1 / c;
                return e.elements[0] *= p,
                e.elements[1] *= p,
                e.elements[2] *= p,
                e.elements[4] *= d,
                e.elements[5] *= d,
                e.elements[6] *= d,
                e.elements[8] *= f,
                e.elements[9] *= f,
                e.elements[10] *= f,
                n.setFromRotationMatrix(e),
                i.x = o,
                i.y = s,
                i.z = c,
                this
            }
        }(),
        makeFrustum: function(t, e, r, n, i, a) {
            var o = this.elements
              , s = 2 * i / (e - t)
              , c = 2 * i / (n - r)
              , h = (e + t) / (e - t)
              , l = (n + r) / (n - r)
              , u = -(a + i) / (a - i)
              , p = -2 * a * i / (a - i);
            return o[0] = s,
            o[4] = 0,
            o[8] = h,
            o[12] = 0,
            o[1] = 0,
            o[5] = c,
            o[9] = l,
            o[13] = 0,
            o[2] = 0,
            o[6] = 0,
            o[10] = u,
            o[14] = p,
            o[3] = 0,
            o[7] = 0,
            o[11] = -1,
            o[15] = 0,
            this
        },
        makePerspective: function(e, r, n, i) {
            var a = n * Math.tan(t.Math.DEG2RAD * e * .5)
              , o = -a
              , s = o * r
              , c = a * r;
            return this.makeFrustum(s, c, o, a, n, i)
        },
        makeOrthographic: function(t, e, r, n, i, a) {
            var o = this.elements
              , s = 1 / (e - t)
              , c = 1 / (r - n)
              , h = 1 / (a - i)
              , l = (e + t) * s
              , u = (r + n) * c
              , p = (a + i) * h;
            return o[0] = 2 * s,
            o[4] = 0,
            o[8] = 0,
            o[12] = -l,
            o[1] = 0,
            o[5] = 2 * c,
            o[9] = 0,
            o[13] = -u,
            o[2] = 0,
            o[6] = 0,
            o[10] = -2 * h,
            o[14] = -p,
            o[3] = 0,
            o[7] = 0,
            o[11] = 0,
            o[15] = 1,
            this
        },
        equals: function(t) {
            for (var e = this.elements, r = t.elements, n = 0; n < 16; n++)
                if (e[n] !== r[n])
                    return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var r = 0; r < 16; r++)
                this.elements[r] = t[r + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var r = this.elements;
            return t[e] = r[0],
            t[e + 1] = r[1],
            t[e + 2] = r[2],
            t[e + 3] = r[3],
            t[e + 4] = r[4],
            t[e + 5] = r[5],
            t[e + 6] = r[6],
            t[e + 7] = r[7],
            t[e + 8] = r[8],
            t[e + 9] = r[9],
            t[e + 10] = r[10],
            t[e + 11] = r[11],
            t[e + 12] = r[12],
            t[e + 13] = r[13],
            t[e + 14] = r[14],
            t[e + 15] = r[15],
            t
        }
    },
    p.prototype = Object.create(n.prototype),
    p.prototype.constructor = p,
    p.prototype.isCubeTexture = !0,
    Object.defineProperty(p.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(t) {
            this.image = t
        }
    });
    var Uo = new n
      , Io = new p
      , Do = []
      , No = [];
    k.prototype.setValue = function(t, e) {
        for (var r = this.seq, n = 0, i = r.length; n !== i; ++n) {
            var a = r[n];
            a.setValue(t, e[a.id])
        }
    }
    ;
    var Oo = /([\w\d_]+)(\])?(\[|\.)?/g;
    X.prototype.setValue = function(t, e, r) {
        var n = this.map[e];
        void 0 !== n && n.setValue(t, r, this.renderer)
    }
    ,
    X.prototype.set = function(t, e, r) {
        var n = this.map[r];
        void 0 !== n && n.setValue(t, e[r], this.renderer)
    }
    ,
    X.prototype.setOptional = function(t, e, r) {
        var n = e[r];
        void 0 !== n && this.setValue(t, r, n)
    }
    ,
    X.upload = function(t, e, r, n) {
        for (var i = 0, a = e.length; i !== a; ++i) {
            var o = e[i]
              , s = r[o.id];
            s.needsUpdate !== !1 && o.setValue(t, s.value, n)
        }
    }
    ,
    X.seqWithValue = function(t, e) {
        for (var r = [], n = 0, i = t.length; n !== i; ++n) {
            var a = t[n];
            a.id in e && r.push(a)
        }
        return r
    }
    ,
    X.splitDynamic = function(t, e) {
        for (var r = null, n = t.length, i = 0, a = 0; a !== n; ++a) {
            var o = t[a]
              , s = e[o.id];
            s && s.dynamic === !0 ? (null === r && (r = []),
            r.push(o)) : (i < a && (t[i] = o),
            ++i)
        }
        return i < n && (t.length = i),
        r
    }
    ,
    X.evalDynamic = function(t, e, r, n, i) {
        for (var a = 0, o = t.length; a !== o; ++a) {
            var s = e[t[a].id]
              , c = s.onUpdateCallback;
            void 0 !== c && c.call(s, r, n, i)
        }
    }
    ,
    t.UniformsUtils = {
        merge: function(t) {
            for (var e = {}, r = 0; r < t.length; r++) {
                var n = this.clone(t[r]);
                for (var i in n)
                    e[i] = n[i]
            }
            return e
        },
        clone: function(t) {
            var e = {};
            for (var r in t) {
                e[r] = {};
                for (var n in t[r]) {
                    var i = t[r][n];
                    i && i.isColor || i && i.isVector2 || i && i.isVector3 || i && i.isVector4 || i && i.isMatrix3 || i && i.isMatrix4 || i && i.isTexture ? e[r][n] = i.clone() : Array.isArray(i) ? e[r][n] = i.slice() : e[r][n] = i
                }
            }
            return e
        }
    };
    var Fo = "#ifdef USE_ALPHAMAP\r\n\r\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\r\n\r\n#endif\r\n"
      , zo = "#ifdef USE_ALPHAMAP\r\n\r\n\tuniform sampler2D alphaMap;\r\n\r\n#endif\r\n"
      , Bo = "#ifdef ALPHATEST\r\n\r\n\tif ( diffuseColor.a < ALPHATEST ) discard;\r\n\r\n#endif\r\n"
      , Go = "#ifdef USE_AOMAP\r\n\r\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\r\n\r\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\r\n\r\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\r\n\r\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\r\n\r\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , Ho = "#ifdef USE_AOMAP\r\n\r\n\tuniform sampler2D aoMap;\r\n\tuniform float aoMapIntensity;\r\n\r\n#endif"
      , Vo = "\r\nvec3 transformed = vec3( position );\r\n"
      , ko = "\r\nvec3 objectNormal = vec3( normal );\r\n"
      , jo = 'bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\r\n\r\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\r\n\r\n}\r\n\r\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\r\n\r\n\t\tif( decayExponent > 0.0 ) {\r\n\r\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\r\n\r\n\t\t\t// based upon Frostbite 3 Moving to Physically-based Rendering\r\n\t\t\t// page 32, equation 26: E[window1]\r\n\t\t\t// http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\r\n\t\t\t// this is intended to be used on spot and point lights who are represented as luminous intensity\r\n\t\t\t// but who must be converted to luminous irradiance for surface lighting calculation\r\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\r\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\r\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\r\n\r\n#else\r\n\r\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\r\n\r\n#endif\r\n\r\n\t\t}\r\n\r\n\t\treturn 1.0;\r\n}\r\n\r\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\r\n\r\n\treturn RECIPROCAL_PI * diffuseColor;\r\n\r\n} // validated\r\n\r\n\r\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\r\n\r\n\t// Original approximation by Christophe Schlick \'94\r\n\t//;float fresnel = pow( 1.0 - dotLH, 5.0 );\r\n\r\n\t// Optimized variant (presented by Epic at SIGGRAPH \'13)\r\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\r\n\r\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\r\n\r\n} // validated\r\n\r\n\r\n// Microfacet Models for Refraction through Rough Surfaces - equation (34)\r\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\r\n// alpha is "roughness squared" in Disney’s reparameterization\r\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\r\n\r\n\t// geometry term = G(l)⋅G(v) / 4(n⋅l)(n⋅v)\r\n\r\n\tfloat a2 = pow2( alpha );\r\n\r\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\r\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\r\n\r\n\treturn 1.0 / ( gl * gv );\r\n\r\n} // validated\r\n\r\n// from page 12, listing 2 of http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\r\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\r\n\r\n\tfloat a2 = pow2( alpha );\r\n\r\n\t// dotNL and dotNV are explicitly swapped. This is not a mistake.\r\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\r\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\r\n\r\n\treturn 0.5 / max( gv + gl, EPSILON );\r\n}\r\n\r\n\r\n\r\n// Microfacet Models for Refraction through Rough Surfaces - equation (33)\r\n// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html\r\n// alpha is "roughness squared" in Disney’s reparameterization\r\nfloat D_GGX( const in float alpha, const in float dotNH ) {\r\n\r\n\tfloat a2 = pow2( alpha );\r\n\r\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1\r\n\r\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\r\n\r\n}\r\n\r\n\r\n// GGX Distribution, Schlick Fresnel, GGX-Smith Visibility\r\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\r\n\r\n\tfloat alpha = pow2( roughness ); // UE4\'s roughness\r\n\r\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\r\n\r\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\r\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\r\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\r\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\r\n\r\n\tvec3 F = F_Schlick( specularColor, dotLH );\r\n\r\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\r\n\r\n\tfloat D = D_GGX( alpha, dotNH );\r\n\r\n\treturn F * ( G * D );\r\n\r\n} // validated\r\n\r\n\r\n// ref: https://www.unrealengine.com/blog/physically-based-shading-on-mobile - environmentBRDF for GGX on mobile\r\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\r\n\r\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\r\n\r\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\r\n\r\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\r\n\r\n\tvec4 r = roughness * c0 + c1;\r\n\r\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\r\n\r\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\r\n\r\n\treturn specularColor * AB.x + AB.y;\r\n\r\n} // validated\r\n\r\n\r\nfloat G_BlinnPhong_Implicit( ) {\r\n\r\n\t// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)\r\n\treturn 0.25;\r\n\r\n}\r\n\r\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\r\n\r\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\r\n\r\n}\r\n\r\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\r\n\r\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\r\n\r\n\t//float dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\r\n\t//float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\r\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\r\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\r\n\r\n\tvec3 F = F_Schlick( specularColor, dotLH );\r\n\r\n\tfloat G = G_BlinnPhong_Implicit( );\r\n\r\n\tfloat D = D_BlinnPhong( shininess, dotNH );\r\n\r\n\treturn F * ( G * D );\r\n\r\n} // validated\r\n\r\n// source: http://simonstechblog.blogspot.ca/2011/12/microfacet-brdf.html\r\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\r\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\r\n}\r\n\r\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\r\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\r\n}\r\n'
      , Wo = "#ifdef USE_BUMPMAP\r\n\r\n\tuniform sampler2D bumpMap;\r\n\tuniform float bumpScale;\r\n\r\n\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\r\n\t// http://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\r\n\r\n\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\r\n\r\n\tvec2 dHdxy_fwd() {\r\n\r\n\t\tvec2 dSTdx = dFdx( vUv );\r\n\t\tvec2 dSTdy = dFdy( vUv );\r\n\r\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\r\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\r\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\r\n\r\n\t\treturn vec2( dBx, dBy );\r\n\r\n\t}\r\n\r\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\r\n\r\n\t\tvec3 vSigmaX = dFdx( surf_pos );\r\n\t\tvec3 vSigmaY = dFdy( surf_pos );\r\n\t\tvec3 vN = surf_norm;\t\t// normalized\r\n\r\n\t\tvec3 R1 = cross( vSigmaY, vN );\r\n\t\tvec3 R2 = cross( vN, vSigmaX );\r\n\r\n\t\tfloat fDet = dot( vSigmaX, R1 );\r\n\r\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\r\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\r\n\r\n\t}\r\n\r\n#endif\r\n"
      , Xo = "#if NUM_CLIPPING_PLANES > 0\r\n\r\n\tfor ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\r\n\r\n\t\tvec4 plane = clippingPlanes[ i ];\r\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\r\n\r\n\t}\r\n\r\n#endif\r\n"
      , qo = "#if NUM_CLIPPING_PLANES > 0\r\n\r\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\r\n\t\tvarying vec3 vViewPosition;\r\n\t#endif\r\n\r\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\r\n\r\n#endif\r\n"
      , Yo = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\r\n\tvarying vec3 vViewPosition;\r\n#endif\r\n"
      , Zo = "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\r\n\tvViewPosition = - mvPosition.xyz;\r\n#endif\r\n\r\n"
      , Jo = "#ifdef USE_COLOR\r\n\r\n\tdiffuseColor.rgb *= vColor;\r\n\r\n#endif"
      , Qo = "#ifdef USE_COLOR\r\n\r\n\tvarying vec3 vColor;\r\n\r\n#endif\r\n"
      , Ko = "#ifdef USE_COLOR\r\n\r\n\tvarying vec3 vColor;\r\n\r\n#endif"
      , $o = "#ifdef USE_COLOR\r\n\r\n\tvColor.xyz = color.xyz;\r\n\r\n#endif"
      , ts = "#define PI 3.14159265359\r\n#define PI2 6.28318530718\r\n#define RECIPROCAL_PI 0.31830988618\r\n#define RECIPROCAL_PI2 0.15915494\r\n#define LOG2 1.442695\r\n#define EPSILON 1e-6\r\n\r\n#define saturate(a) clamp( a, 0.0, 1.0 )\r\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\r\n\r\nfloat pow2( const in float x ) { return x*x; }\r\nfloat pow3( const in float x ) { return x*x*x; }\r\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\r\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\r\n// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.\r\n// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\r\nhighp float rand( const in vec2 uv ) {\r\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\r\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\r\n\treturn fract(sin(sn) * c);\r\n}\r\n\r\nstruct IncidentLight {\r\n\tvec3 color;\r\n\tvec3 direction;\r\n\tbool visible;\r\n};\r\n\r\nstruct ReflectedLight {\r\n\tvec3 directDiffuse;\r\n\tvec3 directSpecular;\r\n\tvec3 indirectDiffuse;\r\n\tvec3 indirectSpecular;\r\n};\r\n\r\nstruct GeometricContext {\r\n\tvec3 position;\r\n\tvec3 normal;\r\n\tvec3 viewDir;\r\n};\r\n\r\n\r\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\r\n\r\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\r\n\r\n}\r\n\r\n// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\r\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\r\n\r\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\r\n\r\n}\r\n\r\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\r\n\r\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\r\n\r\n\treturn - distance * planeNormal + point;\r\n\r\n}\r\n\r\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\r\n\r\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\r\n\r\n}\r\n\r\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\r\n\r\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\r\n\r\n}\r\n"
      , es = "#ifdef ENVMAP_TYPE_CUBE_UV\r\n\r\n#define cubeUV_textureSize (1024.0)\r\n\r\nint getFaceFromDirection(vec3 direction) {\r\n\tvec3 absDirection = abs(direction);\r\n\tint face = -1;\r\n\tif( absDirection.x > absDirection.z ) {\r\n\t\tif(absDirection.x > absDirection.y )\r\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\r\n\t\telse\r\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\r\n\t}\r\n\telse {\r\n\t\tif(absDirection.z > absDirection.y )\r\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\r\n\t\telse\r\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\r\n\t}\r\n\treturn face;\r\n}\r\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\r\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\r\n\r\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\r\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\r\n\tfloat dxRoughness = dFdx(roughness);\r\n\tfloat dyRoughness = dFdy(roughness);\r\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\r\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\r\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\r\n\t// Clamp the value to the max mip level counts. hard coded to 6 mips\r\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\r\n\tfloat mipLevel = 0.5 * log2(d);\r\n\treturn vec2(floor(mipLevel), fract(mipLevel));\r\n}\r\n\r\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\r\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\r\n\r\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\r\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\r\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\r\n\r\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\r\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\r\n\t// float powScale = exp2(roughnessLevel + mipLevel);\r\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\r\n\t// float scale =  1.0 / exp2(roughnessLevel + 2.0 + mipLevel);\r\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\r\n\t// float mipOffset = 0.75*(1.0 - 1.0/exp2(mipLevel))/exp2(roughnessLevel);\r\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\r\n\r\n\tbool bRes = mipLevel == 0.0;\r\n\tscale =  bRes && (scale < a) ? a : scale;\r\n\r\n\tvec3 r;\r\n\tvec2 offset;\r\n\tint face = getFaceFromDirection(direction);\r\n\r\n\tfloat rcpPowScale = 1.0 / powScale;\r\n\r\n\tif( face == 0) {\r\n\t\tr = vec3(direction.x, -direction.z, direction.y);\r\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\r\n\t}\r\n\telse if( face == 1) {\r\n\t\tr = vec3(direction.y, direction.x, direction.z);\r\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\r\n\t}\r\n\telse if( face == 2) {\r\n\t\tr = vec3(direction.z, direction.x, direction.y);\r\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\r\n\t}\r\n\telse if( face == 3) {\r\n\t\tr = vec3(direction.x, direction.z, direction.y);\r\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\r\n\t}\r\n\telse if( face == 4) {\r\n\t\tr = vec3(direction.y, direction.x, -direction.z);\r\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\r\n\t}\r\n\telse {\r\n\t\tr = vec3(direction.z, -direction.x, direction.y);\r\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\r\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\r\n\t}\r\n\tr = normalize(r);\r\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\r\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\r\n\tvec2 base = offset + vec2( texelOffset );\r\n\treturn base + s * ( scale - 2.0 * texelOffset );\r\n}\r\n\r\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\r\n\r\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\r\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\r\n\tfloat r1 = floor(roughnessVal);\r\n\tfloat r2 = r1 + 1.0;\r\n\tfloat t = fract(roughnessVal);\r\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\r\n\tfloat s = mipInfo.y;\r\n\tfloat level0 = mipInfo.x;\r\n\tfloat level1 = level0 + 1.0;\r\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\r\n\r\n\t// round to nearest mipmap if we are not interpolating.\r\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\r\n\r\n\t// Tri linear interpolation.\r\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\r\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\r\n\r\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\r\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\r\n\r\n\tvec4 result = mix(color10, color20, t);\r\n\r\n\treturn vec4(result.rgb, 1.0);\r\n}\r\n\r\n#endif\r\n"
      , rs = "#ifdef FLIP_SIDED\r\n\r\n\tobjectNormal = -objectNormal;\r\n\r\n#endif\r\n\r\nvec3 transformedNormal = normalMatrix * objectNormal;\r\n"
      , ns = "#ifdef USE_DISPLACEMENTMAP\r\n\r\n\tuniform sampler2D displacementMap;\r\n\tuniform float displacementScale;\r\n\tuniform float displacementBias;\r\n\r\n#endif\r\n"
      , is = "#ifdef USE_DISPLACEMENTMAP\r\n\r\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\r\n\r\n#endif\r\n"
      , as = "#ifdef USE_EMISSIVEMAP\r\n\r\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\r\n\r\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\r\n\r\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\r\n\r\n#endif\r\n"
      , os = "#ifdef USE_EMISSIVEMAP\r\n\r\n\tuniform sampler2D emissiveMap;\r\n\r\n#endif\r\n"
      , ss = "  gl_FragColor = linearToOutputTexel( gl_FragColor );\r\n"
      , cs = "// For a discussion of what this is, please read this: http://lousodrome.net/blog/light/2013/05/26/gamma-correct-and-hdr-rendering-in-a-32-bits-buffer/\r\n\r\nvec4 LinearToLinear( in vec4 value ) {\r\n  return value;\r\n}\r\n\r\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\r\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\r\n}\r\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\r\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\r\n}\r\n\r\nvec4 sRGBToLinear( in vec4 value ) {\r\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\r\n}\r\nvec4 LinearTosRGB( in vec4 value ) {\r\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\r\n}\r\n\r\nvec4 RGBEToLinear( in vec4 value ) {\r\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\r\n}\r\nvec4 LinearToRGBE( in vec4 value ) {\r\n  float maxComponent = max( max( value.r, value.g ), value.b );\r\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\r\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\r\n//  return vec4( value.brg, ( 3.0 + 128.0 ) / 256.0 );\r\n}\r\n\r\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\r\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\r\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\r\n}\r\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\r\n  float maxRGB = max( value.x, max( value.g, value.b ) );\r\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\r\n  M            = ceil( M * 255.0 ) / 255.0;\r\n  return vec4( value.rgb / ( M * maxRange ), M );\r\n}\r\n\r\n// reference: http://iwasbeingirony.blogspot.ca/2010/06/difference-between-rgbm-and-rgbd.html\r\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\r\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\r\n}\r\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\r\n    float maxRGB = max( value.x, max( value.g, value.b ) );\r\n    float D      = max( maxRange / maxRGB, 1.0 );\r\n    D            = min( floor( D ) / 255.0, 1.0 );\r\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\r\n}\r\n\r\n// LogLuv reference: http://graphicrants.blogspot.ca/2009/04/rgbm-color-encoding.html\r\n\r\n// M matrix, for encoding\r\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\r\nvec4 LinearToLogLuv( in vec4 value )  {\r\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\r\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\r\n  vec4 vResult;\r\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\r\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\r\n  vResult.w = fract(Le);\r\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\r\n  return vResult;\r\n}\r\n\r\n// Inverse M matrix, for decoding\r\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\r\nvec4 LogLuvToLinear( in vec4 value ) {\r\n  float Le = value.z * 255.0 + value.w;\r\n  vec3 Xp_Y_XYZp;\r\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\r\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\r\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\r\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\r\n  return vec4( max(vRGB, 0.0), 1.0 );\r\n}\r\n"
      , hs = "#ifdef USE_ENVMAP\r\n\r\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\r\n\r\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\r\n\r\n\t\t// Transforming Normal Vectors with the Inverse Transformation\r\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\r\n\r\n\t\t#ifdef ENVMAP_MODE_REFLECTION\r\n\r\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\r\n\r\n\t\t#else\r\n\r\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\r\n\r\n\t\t#endif\r\n\r\n\t#else\r\n\r\n\t\tvec3 reflectVec = vReflect;\r\n\r\n\t#endif\r\n\r\n\t#ifdef ENVMAP_TYPE_CUBE\r\n\r\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\r\n\r\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\r\n\r\n\t\tvec2 sampleUV;\r\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\r\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\r\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\r\n\r\n\t#elif defined( ENVMAP_TYPE_SPHERE )\r\n\r\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\r\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\r\n\r\n\t#else\r\n\r\n\t\tvec4 envColor = vec4( 0.0 );\r\n\r\n\t#endif\r\n\r\n\tenvColor = envMapTexelToLinear( envColor );\r\n\r\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\r\n\r\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\r\n\r\n\t#elif defined( ENVMAP_BLENDING_MIX )\r\n\r\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\r\n\r\n\t#elif defined( ENVMAP_BLENDING_ADD )\r\n\r\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , ls = "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\r\n\tuniform float reflectivity;\r\n\tuniform float envMapIntenstiy;\r\n#endif\r\n\r\n#ifdef USE_ENVMAP\r\n\r\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\r\n\t\tvarying vec3 vWorldPosition;\r\n\t#endif\r\n\r\n\t#ifdef ENVMAP_TYPE_CUBE\r\n\t\tuniform samplerCube envMap;\r\n\t#else\r\n\t\tuniform sampler2D envMap;\r\n\t#endif\r\n\tuniform float flipEnvMap;\r\n\r\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\r\n\t\tuniform float refractionRatio;\r\n\t#else\r\n\t\tvarying vec3 vReflect;\r\n\t#endif\r\n\r\n#endif\r\n"
      , us = "#ifdef USE_ENVMAP\r\n\r\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\r\n\t\tvarying vec3 vWorldPosition;\r\n\r\n\t#else\r\n\r\n\t\tvarying vec3 vReflect;\r\n\t\tuniform float refractionRatio;\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , ps = "#ifdef USE_ENVMAP\r\n\r\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\r\n\r\n\t\tvWorldPosition = worldPosition.xyz;\r\n\r\n\t#else\r\n\r\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\r\n\r\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\r\n\r\n\t\t#ifdef ENVMAP_MODE_REFLECTION\r\n\r\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\r\n\r\n\t\t#else\r\n\r\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\r\n\r\n\t\t#endif\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , ds = "#ifdef USE_FOG\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\r\n\r\n\t#else\r\n\r\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\r\n\r\n\t#endif\r\n\r\n\t#ifdef FOG_EXP2\r\n\r\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\r\n\r\n\t#else\r\n\r\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\r\n\r\n\t#endif\r\n\r\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\r\n\r\n#endif\r\n"
      , fs = "#ifdef USE_FOG\r\n\r\n\tuniform vec3 fogColor;\r\n\r\n\t#ifdef FOG_EXP2\r\n\r\n\t\tuniform float fogDensity;\r\n\r\n\t#else\r\n\r\n\t\tuniform float fogNear;\r\n\t\tuniform float fogFar;\r\n\t#endif\r\n\r\n#endif"
      , ms = "#ifdef USE_LIGHTMAP\r\n\r\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity; // factor of PI should not be present; included here to prevent breakage\r\n\r\n#endif\r\n"
      , gs = "#ifdef USE_LIGHTMAP\r\n\r\n\tuniform sampler2D lightMap;\r\n\tuniform float lightMapIntensity;\r\n\r\n#endif"
      , vs = "vec3 diffuse = vec3( 1.0 );\r\n\r\nGeometricContext geometry;\r\ngeometry.position = mvPosition.xyz;\r\ngeometry.normal = normalize( transformedNormal );\r\ngeometry.viewDir = normalize( -mvPosition.xyz );\r\n\r\nGeometricContext backGeometry;\r\nbackGeometry.position = geometry.position;\r\nbackGeometry.normal = -geometry.normal;\r\nbackGeometry.viewDir = geometry.viewDir;\r\n\r\nvLightFront = vec3( 0.0 );\r\n\r\n#ifdef DOUBLE_SIDED\r\n\tvLightBack = vec3( 0.0 );\r\n#endif\r\n\r\nIncidentLight directLight;\r\nfloat dotNL;\r\nvec3 directLightColor_Diffuse;\r\n\r\n#if NUM_POINT_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\r\n\r\n\t\tdotNL = dot( geometry.normal, directLight.direction );\r\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\r\n\r\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#ifdef DOUBLE_SIDED\r\n\r\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n#if NUM_SPOT_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\r\n\r\n\t\tdotNL = dot( geometry.normal, directLight.direction );\r\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\r\n\r\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#ifdef DOUBLE_SIDED\r\n\r\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#endif\r\n\t}\r\n\r\n#endif\r\n\r\n#if NUM_DIR_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\r\n\r\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\r\n\r\n\t\tdotNL = dot( geometry.normal, directLight.direction );\r\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\r\n\r\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#ifdef DOUBLE_SIDED\r\n\r\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n#if NUM_HEMI_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\r\n\r\n\t\t#ifdef DOUBLE_SIDED\r\n\r\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n#endif\r\n"
      , ys = "uniform vec3 ambientLightColor;\r\n\r\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\r\n\r\n\tvec3 irradiance = ambientLightColor;\r\n\r\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\r\n\r\n\t\tirradiance *= PI;\r\n\r\n\t#endif\r\n\r\n\treturn irradiance;\r\n\r\n}\r\n\r\n#if NUM_DIR_LIGHTS > 0\r\n\r\n\tstruct DirectionalLight {\r\n\t\tvec3 direction;\r\n\t\tvec3 color;\r\n\r\n\t\tint shadow;\r\n\t\tfloat shadowBias;\r\n\t\tfloat shadowRadius;\r\n\t\tvec2 shadowMapSize;\r\n\t};\r\n\r\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\r\n\r\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\r\n\r\n\t\tdirectLight.color = directionalLight.color;\r\n\t\tdirectLight.direction = directionalLight.direction;\r\n\t\tdirectLight.visible = true;\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n\r\n#if NUM_POINT_LIGHTS > 0\r\n\r\n\tstruct PointLight {\r\n\t\tvec3 position;\r\n\t\tvec3 color;\r\n\t\tfloat distance;\r\n\t\tfloat decay;\r\n\r\n\t\tint shadow;\r\n\t\tfloat shadowBias;\r\n\t\tfloat shadowRadius;\r\n\t\tvec2 shadowMapSize;\r\n\t};\r\n\r\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\r\n\r\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\r\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\r\n\r\n\t\tvec3 lVector = pointLight.position - geometry.position;\r\n\t\tdirectLight.direction = normalize( lVector );\r\n\r\n\t\tfloat lightDistance = length( lVector );\r\n\r\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\r\n\r\n\t\t\tdirectLight.color = pointLight.color;\r\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\r\n\r\n\t\t\tdirectLight.visible = true;\r\n\r\n\t\t} else {\r\n\r\n\t\t\tdirectLight.color = vec3( 0.0 );\r\n\t\t\tdirectLight.visible = false;\r\n\r\n\t\t}\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n\r\n#if NUM_SPOT_LIGHTS > 0\r\n\r\n\tstruct SpotLight {\r\n\t\tvec3 position;\r\n\t\tvec3 direction;\r\n\t\tvec3 color;\r\n\t\tfloat distance;\r\n\t\tfloat decay;\r\n\t\tfloat coneCos;\r\n\t\tfloat penumbraCos;\r\n\r\n\t\tint shadow;\r\n\t\tfloat shadowBias;\r\n\t\tfloat shadowRadius;\r\n\t\tvec2 shadowMapSize;\r\n\t};\r\n\r\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\r\n\r\n\t// directLight is an out parameter as having it as a return value caused compiler errors on some devices\r\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\r\n\r\n\t\tvec3 lVector = spotLight.position - geometry.position;\r\n\t\tdirectLight.direction = normalize( lVector );\r\n\r\n\t\tfloat lightDistance = length( lVector );\r\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\r\n\r\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\r\n\r\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\r\n\r\n\t\t\tdirectLight.color = spotLight.color;\r\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\r\n\r\n\t\t\tdirectLight.visible = true;\r\n\r\n\t\t} else {\r\n\r\n\t\t\tdirectLight.color = vec3( 0.0 );\r\n\t\t\tdirectLight.visible = false;\r\n\r\n\t\t}\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n\r\n#if NUM_HEMI_LIGHTS > 0\r\n\r\n\tstruct HemisphereLight {\r\n\t\tvec3 direction;\r\n\t\tvec3 skyColor;\r\n\t\tvec3 groundColor;\r\n\t};\r\n\r\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\r\n\r\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\r\n\r\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\r\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\r\n\r\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\r\n\r\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\r\n\r\n\t\t\tirradiance *= PI;\r\n\r\n\t\t#endif\r\n\r\n\t\treturn irradiance;\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n\r\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\r\n\r\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\r\n\r\n\t\t#include <normal_flip>\r\n\r\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\r\n\r\n\t\t#ifdef ENVMAP_TYPE_CUBE\r\n\r\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\r\n\r\n\t\t\t// TODO: replace with properly filtered cubemaps and access the irradiance LOD level, be it the last LOD level\r\n\t\t\t// of a specular cubemap, or just the default level of a specially created irradiance cubemap.\r\n\r\n\t\t\t#ifdef TEXTURE_LOD_EXT\r\n\r\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\t// force the bias high to get the last LOD level as it is the most blurred.\r\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\r\n\r\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\r\n\r\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\r\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\r\n\r\n\t\t#else\r\n\r\n\t\t\tvec4 envMapColor = vec4( 0.0 );\r\n\r\n\t\t#endif\r\n\r\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\r\n\r\n\t}\r\n\r\n\t// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html\r\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\r\n\r\n\t\t//float envMapWidth = pow( 2.0, maxMIPLevelScalar );\r\n\t\t//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\r\n\r\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\r\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\r\n\r\n\t\t// clamp to allowable LOD ranges.\r\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\r\n\r\n\t}\r\n\r\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\r\n\r\n\t\t#ifdef ENVMAP_MODE_REFLECTION\r\n\r\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\r\n\r\n\t\t#else\r\n\r\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\r\n\r\n\t\t#endif\r\n\r\n\t\t#include <normal_flip>\r\n\r\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\r\n\r\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\r\n\r\n\t\t#ifdef ENVMAP_TYPE_CUBE\r\n\r\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\r\n\r\n\t\t\t#ifdef TEXTURE_LOD_EXT\r\n\r\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\r\n\r\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\r\n\r\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\r\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\r\n\r\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\r\n\r\n\t\t\tvec2 sampleUV;\r\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\r\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\r\n\r\n\t\t\t#ifdef TEXTURE_LOD_EXT\r\n\r\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\r\n\r\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\r\n\r\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\r\n\r\n\t\t\t#ifdef TEXTURE_LOD_EXT\r\n\r\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\r\n\r\n\t\t\t#else\r\n\r\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\r\n\r\n\t\t\t#endif\r\n\r\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\r\n\r\n\t\t#endif\r\n\r\n\t\treturn envMapColor.rgb * envMapIntensity;\r\n\r\n\t}\r\n\r\n#endif\r\n"
      , xs = "BlinnPhongMaterial material;\r\nmaterial.diffuseColor = diffuseColor.rgb;\r\nmaterial.specularColor = specular;\r\nmaterial.specularShininess = shininess;\r\nmaterial.specularStrength = specularStrength;\r\n"
      , _s = "varying vec3 vViewPosition;\r\n\r\n#ifndef FLAT_SHADED\r\n\r\n\tvarying vec3 vNormal;\r\n\r\n#endif\r\n\r\n\r\nstruct BlinnPhongMaterial {\r\n\r\n\tvec3\tdiffuseColor;\r\n\tvec3\tspecularColor;\r\n\tfloat\tspecularShininess;\r\n\tfloat\tspecularStrength;\r\n\r\n};\r\n\r\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\r\n\r\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\r\n\r\n\tvec3 irradiance = dotNL * directLight.color;\r\n\r\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\r\n\r\n\t\tirradiance *= PI; // punctual light\r\n\r\n\t#endif\r\n\r\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\r\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\r\n\r\n}\r\n\r\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\r\n\r\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\r\n\r\n}\r\n\r\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\r\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\r\n\r\n#define Material_LightProbeLOD( material )\t(0)\r\n"
      , bs = "PhysicalMaterial material;\r\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\r\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\r\n#ifdef STANDARD\r\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\r\n#else\r\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\r\n\tmaterial.clearCoat = saturate( clearCoat ); // Burley clearcoat model\r\n\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\r\n#endif\r\n"
      , ws = "struct PhysicalMaterial {\r\n\r\n\tvec3\tdiffuseColor;\r\n\tfloat\tspecularRoughness;\r\n\tvec3\tspecularColor;\r\n\r\n\t#ifndef STANDARD\r\n\t\tfloat clearCoat;\r\n\t\tfloat clearCoatRoughness;\r\n\t#endif\r\n\r\n};\r\n\r\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\r\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\r\n\r\n// Clear coat directional hemishperical reflectance (this approximation should be improved)\r\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\r\n\r\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\r\n\r\n}\r\n\r\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\r\n\r\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\r\n\r\n\tvec3 irradiance = dotNL * directLight.color;\r\n\r\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\r\n\r\n\t\tirradiance *= PI; // punctual light\r\n\r\n\t#endif\r\n\r\n\t#ifndef STANDARD\r\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\r\n\t#else\r\n\t\tfloat clearCoatDHR = 0.0;\r\n\t#endif\r\n\r\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\r\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\r\n\r\n\t#ifndef STANDARD\r\n\r\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\r\n\r\n\t#endif\r\n\r\n}\r\n\r\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\r\n\r\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\r\n\r\n}\r\n\r\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\r\n\r\n\t#ifndef STANDARD\r\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\r\n\t\tfloat dotNL = dotNV;\r\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\r\n\t#else\r\n\t\tfloat clearCoatDHR = 0.0;\r\n\t#endif\r\n\r\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\r\n\r\n\t#ifndef STANDARD\r\n\r\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\r\n\r\n\t#endif\r\n\r\n}\r\n\r\n#define RE_Direct\t\t\t\tRE_Direct_Physical\r\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\r\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\r\n\r\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\r\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\r\n\r\n// ref: http://www.frostbite.com/wp-content/uploads/2014/11/course_notes_moving_frostbite_to_pbr_v2.pdf\r\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\r\n\r\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\r\n\r\n}\r\n"
      , Ms = "//\r\n// This is a template that can be used to light a material, it uses pluggable RenderEquations (RE)\r\n//   for specific lighting scenarios.\r\n//\r\n// Instructions for use:\r\n//  - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined\r\n//  - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???\r\n//  - Create a material parameter that is to be passed as the third parameter to your lighting functions.\r\n//\r\n// TODO:\r\n//  - Add area light support.\r\n//  - Add sphere light support.\r\n//  - Add diffuse light probe (irradiance cubemap) support.\r\n//\r\n\r\nGeometricContext geometry;\r\n\r\ngeometry.position = - vViewPosition;\r\ngeometry.normal = normal;\r\ngeometry.viewDir = normalize( vViewPosition );\r\n\r\nIncidentLight directLight;\r\n\r\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\r\n\r\n\tPointLight pointLight;\r\n\r\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\tpointLight = pointLights[ i ];\r\n\r\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\r\n\r\n\t\t#ifdef USE_SHADOWMAP\r\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\r\n\t\t#endif\r\n\r\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\r\n\r\n\tSpotLight spotLight;\r\n\r\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\tspotLight = spotLights[ i ];\r\n\r\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\r\n\r\n\t\t#ifdef USE_SHADOWMAP\r\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\r\n\t\t#endif\r\n\r\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\r\n\r\n\tDirectionalLight directionalLight;\r\n\r\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\r\n\r\n\t\tdirectionalLight = directionalLights[ i ];\r\n\r\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\r\n\r\n\t\t#ifdef USE_SHADOWMAP\r\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\r\n\t\t#endif\r\n\r\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\r\n\r\n\t}\r\n\r\n#endif\r\n\r\n#if defined( RE_IndirectDiffuse )\r\n\r\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\r\n\r\n\t#ifdef USE_LIGHTMAP\r\n\r\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\r\n\r\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\r\n\r\n\t\t\tlightMapIrradiance *= PI; // factor of PI should not be present; included here to prevent breakage\r\n\r\n\t\t#endif\r\n\r\n\t\tirradiance += lightMapIrradiance;\r\n\r\n\t#endif\r\n\r\n\t#if ( NUM_HEMI_LIGHTS > 0 )\r\n\r\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\r\n\r\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\r\n\r\n\t\t// TODO, replace 8 with the real maxMIPLevel\r\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\r\n\r\n\t#endif\r\n\r\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\r\n\r\n#endif\r\n\r\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\r\n\r\n\t// TODO, replace 8 with the real maxMIPLevel\r\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\r\n\r\n\t#ifndef STANDARD\r\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\r\n\t#else\r\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\r\n\t#endif\r\n\t\t\r\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\r\n\r\n#endif\r\n"
      , Es = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\r\n\r\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\r\n\r\n#endif"
      , Ts = "#ifdef USE_LOGDEPTHBUF\r\n\r\n\tuniform float logDepthBufFC;\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tvarying float vFragDepth;\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , Ss = "#ifdef USE_LOGDEPTHBUF\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tvarying float vFragDepth;\r\n\r\n\t#endif\r\n\r\n\tuniform float logDepthBufFC;\r\n\r\n#endif"
      , As = "#ifdef USE_LOGDEPTHBUF\r\n\r\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\r\n\r\n\t#ifdef USE_LOGDEPTHBUF_EXT\r\n\r\n\t\tvFragDepth = 1.0 + gl_Position.w;\r\n\r\n\t#else\r\n\r\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , Ls = "#ifdef USE_MAP\r\n\r\n\tvec4 texelColor = texture2D( map, vUv );\r\n\r\n\ttexelColor = mapTexelToLinear( texelColor );\r\n\tdiffuseColor *= texelColor;\r\n\r\n#endif\r\n"
      , Rs = "#ifdef USE_MAP\r\n\r\n\tuniform sampler2D map;\r\n\r\n#endif\r\n"
      , Ps = "#ifdef USE_MAP\r\n\r\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\r\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\r\n\r\n#endif\r\n"
      , Cs = "#ifdef USE_MAP\r\n\r\n\tuniform vec4 offsetRepeat;\r\n\tuniform sampler2D map;\r\n\r\n#endif\r\n"
      , Us = "float metalnessFactor = metalness;\r\n\r\n#ifdef USE_METALNESSMAP\r\n\r\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\r\n\tmetalnessFactor *= texelMetalness.r;\r\n\r\n#endif\r\n"
      , Is = "#ifdef USE_METALNESSMAP\r\n\r\n\tuniform sampler2D metalnessMap;\r\n\r\n#endif"
      , Ds = "#ifdef USE_MORPHNORMALS\r\n\r\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\r\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\r\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\r\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\r\n\r\n#endif\r\n"
      , Ns = "#ifdef USE_MORPHTARGETS\r\n\r\n\t#ifndef USE_MORPHNORMALS\r\n\r\n\tuniform float morphTargetInfluences[ 8 ];\r\n\r\n\t#else\r\n\r\n\tuniform float morphTargetInfluences[ 4 ];\r\n\r\n\t#endif\r\n\r\n#endif"
      , Os = "#ifdef USE_MORPHTARGETS\r\n\r\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\r\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\r\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\r\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\r\n\r\n\t#ifndef USE_MORPHNORMALS\r\n\r\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\r\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\r\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\r\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , Fs = "#ifdef DOUBLE_SIDED\r\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\r\n#else\r\n\tfloat flipNormal = 1.0;\r\n#endif\r\n"
      , zs = "#ifdef FLAT_SHADED\r\n\r\n\t// Workaround for Adreno/Nexus5 not able able to do dFdx( vViewPosition ) ...\r\n\r\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\r\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\r\n\tvec3 normal = normalize( cross( fdx, fdy ) );\r\n\r\n#else\r\n\r\n\tvec3 normal = normalize( vNormal ) * flipNormal;\r\n\r\n#endif\r\n\r\n#ifdef USE_NORMALMAP\r\n\r\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\r\n\r\n#elif defined( USE_BUMPMAP )\r\n\r\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\r\n\r\n#endif\r\n"
      , Bs = "#ifdef USE_NORMALMAP\r\n\r\n\tuniform sampler2D normalMap;\r\n\tuniform vec2 normalScale;\r\n\r\n\t// Per-Pixel Tangent Space Normal Mapping\r\n\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\r\n\r\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\r\n\r\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\r\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\r\n\t\tvec2 st0 = dFdx( vUv.st );\r\n\t\tvec2 st1 = dFdy( vUv.st );\r\n\r\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\r\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\r\n\t\tvec3 N = normalize( surf_norm );\r\n\r\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\r\n\t\tmapN.xy = normalScale * mapN.xy;\r\n\t\tmat3 tsn = mat3( S, T, N );\r\n\t\treturn normalize( tsn * mapN );\r\n\r\n\t}\r\n\r\n#endif\r\n"
      , Gs = "vec3 packNormalToRGB( const in vec3 normal ) {\r\n  return normalize( normal ) * 0.5 + 0.5;\r\n}\r\n\r\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\r\n  return 1.0 - 2.0 * rgb.xyz;\r\n}\r\n\r\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\r\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\r\n\r\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\r\n\r\nconst float ShiftRight8 = 1. / 256.;\r\n\r\nvec4 packDepthToRGBA( const in float v ) {\r\n\r\n\tvec4 r = vec4( fract( v * PackFactors ), v );\r\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\r\n\treturn r * PackUpscale;\r\n\r\n}\r\n\r\nfloat unpackRGBAToDepth( const in vec4 v ) {\r\n\r\n\treturn dot( v, UnpackFactors );\r\n\r\n}\r\n\r\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\r\n\r\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\r\n  return ( viewZ + near ) / ( near - far );\r\n}\r\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\r\n  return linearClipZ * ( near - far ) - near;\r\n}\r\n\r\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\r\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\r\n}\r\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\r\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\r\n}\r\n"
      , Hs = "#ifdef PREMULTIPLIED_ALPHA\r\n\r\n\t// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.\r\n\tgl_FragColor.rgb *= gl_FragColor.a;\r\n\r\n#endif\r\n"
      , Vs = "#ifdef USE_SKINNING\r\n\r\n\tvec4 mvPosition = modelViewMatrix * skinned;\r\n\r\n#else\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\r\n\r\n#endif\r\n\r\ngl_Position = projectionMatrix * mvPosition;\r\n"
      , ks = "float roughnessFactor = roughness;\r\n\r\n#ifdef USE_ROUGHNESSMAP\r\n\r\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\r\n\troughnessFactor *= texelRoughness.r;\r\n\r\n#endif\r\n"
      , js = "#ifdef USE_ROUGHNESSMAP\r\n\r\n\tuniform sampler2D roughnessMap;\r\n\r\n#endif"
      , Ws = "#ifdef USE_SHADOWMAP\r\n\r\n\t#if NUM_DIR_LIGHTS > 0\r\n\r\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\r\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n\t#if NUM_SPOT_LIGHTS > 0\r\n\r\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\r\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n\t#if NUM_POINT_LIGHTS > 0\r\n\r\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\r\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\r\n\r\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\r\n\r\n\t}\r\n\r\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\r\n\r\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\r\n\r\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\r\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\r\n\r\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\r\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\r\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\r\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\r\n\r\n\t\tvec2 f = fract( uv * size + 0.5 );\r\n\r\n\t\tfloat a = mix( lb, lt, f.y );\r\n\t\tfloat b = mix( rb, rt, f.y );\r\n\t\tfloat c = mix( a, b, f.x );\r\n\r\n\t\treturn c;\r\n\r\n\t}\r\n\r\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\r\n\r\n\t\tshadowCoord.xyz /= shadowCoord.w;\r\n\t\tshadowCoord.z += shadowBias;\r\n\r\n\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\r\n\t\t// if ( all( something, something ) ) using this instead\r\n\r\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\r\n\t\tbool inFrustum = all( inFrustumVec );\r\n\r\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\r\n\r\n\t\tbool frustumTest = all( frustumTestVec );\r\n\r\n\t\tif ( frustumTest ) {\r\n\r\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\r\n\r\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\r\n\r\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\r\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\r\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\r\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\r\n\r\n\t\t\treturn (\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\r\n\t\t\t) * ( 1.0 / 9.0 );\r\n\r\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\r\n\r\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\r\n\r\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\r\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\r\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\r\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\r\n\r\n\t\t\treturn (\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\r\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\r\n\t\t\t) * ( 1.0 / 9.0 );\r\n\r\n\t\t#else // no percentage-closer filtering:\r\n\r\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\r\n\r\n\t\t#endif\r\n\r\n\t\t}\r\n\r\n\t\treturn 1.0;\r\n\r\n\t}\r\n\r\n\t// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D\r\n\t// vector suitable for 2D texture mapping. This code uses the following layout for the\r\n\t// 2D texture:\r\n\t//\r\n\t// xzXZ\r\n\t//  y Y\r\n\t//\r\n\t// Y - Positive y direction\r\n\t// y - Negative y direction\r\n\t// X - Positive x direction\r\n\t// x - Negative x direction\r\n\t// Z - Positive z direction\r\n\t// z - Negative z direction\r\n\t//\r\n\t// Source and test bed:\r\n\t// https://gist.github.com/tschw/da10c43c467ce8afd0c4\r\n\r\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\r\n\r\n\t\t// Number of texels to avoid at the edge of each square\r\n\r\n\t\tvec3 absV = abs( v );\r\n\r\n\t\t// Intersect unit cube\r\n\r\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\r\n\t\tabsV *= scaleToCube;\r\n\r\n\t\t// Apply scale to avoid seams\r\n\r\n\t\t// two texels less per square (one texel will do for NEAREST)\r\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\r\n\r\n\t\t// Unwrap\r\n\r\n\t\t// space: -1 ... 1 range for each square\r\n\t\t//\r\n\t\t// #X##\t\tdim    := ( 4 , 2 )\r\n\t\t//  # #\t\tcenter := ( 1 , 1 )\r\n\r\n\t\tvec2 planar = v.xy;\r\n\r\n\t\tfloat almostATexel = 1.5 * texelSizeY;\r\n\t\tfloat almostOne = 1.0 - almostATexel;\r\n\r\n\t\tif ( absV.z >= almostOne ) {\r\n\r\n\t\t\tif ( v.z > 0.0 )\r\n\t\t\t\tplanar.x = 4.0 - v.x;\r\n\r\n\t\t} else if ( absV.x >= almostOne ) {\r\n\r\n\t\t\tfloat signX = sign( v.x );\r\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\r\n\r\n\t\t} else if ( absV.y >= almostOne ) {\r\n\r\n\t\t\tfloat signY = sign( v.y );\r\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\r\n\t\t\tplanar.y = v.z * signY - 2.0;\r\n\r\n\t\t}\r\n\r\n\t\t// Transform to UV space\r\n\r\n\t\t// scale := 0.5 / dim\r\n\t\t// translate := ( center + 0.5 ) / dim\r\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\r\n\r\n\t}\r\n\r\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\r\n\r\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\r\n\r\n\t\t// for point lights, the uniform @vShadowCoord is re-purposed to hold\r\n\t\t// the distance from the light to the world-space position of the fragment.\r\n\t\tvec3 lightToPosition = shadowCoord.xyz;\r\n\r\n\t\t// bd3D = base direction 3D\r\n\t\tvec3 bd3D = normalize( lightToPosition );\r\n\t\t// dp = distance from light to fragment position\r\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\r\n\r\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\r\n\r\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\r\n\r\n\t\t\treturn (\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\r\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\r\n\t\t\t) * ( 1.0 / 9.0 );\r\n\r\n\t\t#else // no percentage-closer filtering\r\n\r\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\r\n\r\n\t\t#endif\r\n\r\n\t}\r\n\r\n#endif\r\n"
      , Xs = "#ifdef USE_SHADOWMAP\r\n\r\n\t#if NUM_DIR_LIGHTS > 0\r\n\r\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\r\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n\t#if NUM_SPOT_LIGHTS > 0\r\n\r\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\r\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n\t#if NUM_POINT_LIGHTS > 0\r\n\r\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\r\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , qs = "#ifdef USE_SHADOWMAP\r\n\r\n\t#if NUM_DIR_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\r\n\r\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n\t#if NUM_SPOT_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n\t#if NUM_POINT_LIGHTS > 0\r\n\r\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , Ys = "float getShadowMask() {\r\n\r\n\tfloat shadow = 1.0;\r\n\r\n\t#ifdef USE_SHADOWMAP\r\n\r\n\t#if NUM_DIR_LIGHTS > 0\r\n\r\n\tDirectionalLight directionalLight;\r\n\r\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\r\n\r\n\t\tdirectionalLight = directionalLights[ i ];\r\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n\t#if NUM_SPOT_LIGHTS > 0\r\n\r\n\tSpotLight spotLight;\r\n\r\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\r\n\r\n\t\tspotLight = spotLights[ i ];\r\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n\t#if NUM_POINT_LIGHTS > 0\r\n\r\n\tPointLight pointLight;\r\n\r\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\r\n\r\n\t\tpointLight = pointLights[ i ];\r\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\r\n\r\n\t}\r\n\r\n\t#endif\r\n\r\n\t#endif\r\n\r\n\treturn shadow;\r\n\r\n}\r\n"
      , Zs = "#ifdef USE_SKINNING\r\n\r\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\r\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\r\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\r\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\r\n\r\n#endif"
      , Js = "#ifdef USE_SKINNING\r\n\r\n\tuniform mat4 bindMatrix;\r\n\tuniform mat4 bindMatrixInverse;\r\n\r\n\t#ifdef BONE_TEXTURE\r\n\r\n\t\tuniform sampler2D boneTexture;\r\n\t\tuniform int boneTextureWidth;\r\n\t\tuniform int boneTextureHeight;\r\n\r\n\t\tmat4 getBoneMatrix( const in float i ) {\r\n\r\n\t\t\tfloat j = i * 4.0;\r\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\r\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\r\n\r\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\r\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\r\n\r\n\t\t\ty = dy * ( y + 0.5 );\r\n\r\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\r\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\r\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\r\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\r\n\r\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\r\n\r\n\t\t\treturn bone;\r\n\r\n\t\t}\r\n\r\n\t#else\r\n\r\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\r\n\r\n\t\tmat4 getBoneMatrix( const in float i ) {\r\n\r\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\r\n\t\t\treturn bone;\r\n\r\n\t\t}\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , Qs = "#ifdef USE_SKINNING\r\n\r\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\r\n\r\n\tvec4 skinned = vec4( 0.0 );\r\n\tskinned += boneMatX * skinVertex * skinWeight.x;\r\n\tskinned += boneMatY * skinVertex * skinWeight.y;\r\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\r\n\tskinned += boneMatW * skinVertex * skinWeight.w;\r\n\tskinned  = bindMatrixInverse * skinned;\r\n\r\n#endif\r\n"
      , Ks = "#ifdef USE_SKINNING\r\n\r\n\tmat4 skinMatrix = mat4( 0.0 );\r\n\tskinMatrix += skinWeight.x * boneMatX;\r\n\tskinMatrix += skinWeight.y * boneMatY;\r\n\tskinMatrix += skinWeight.z * boneMatZ;\r\n\tskinMatrix += skinWeight.w * boneMatW;\r\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\r\n\r\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\r\n\r\n#endif\r\n"
      , $s = "float specularStrength;\r\n\r\n#ifdef USE_SPECULARMAP\r\n\r\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\r\n\tspecularStrength = texelSpecular.r;\r\n\r\n#else\r\n\r\n\tspecularStrength = 1.0;\r\n\r\n#endif"
      , tc = "#ifdef USE_SPECULARMAP\r\n\r\n\tuniform sampler2D specularMap;\r\n\r\n#endif"
      , ec = "#if defined( TONE_MAPPING )\r\n\r\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\r\n\r\n#endif\r\n"
      , rc = "#define saturate(a) clamp( a, 0.0, 1.0 )\r\n\r\nuniform float toneMappingExposure;\r\nuniform float toneMappingWhitePoint;\r\n\r\n// exposure only\r\nvec3 LinearToneMapping( vec3 color ) {\r\n\r\n  return toneMappingExposure * color;\r\n\r\n}\r\n\r\n// source: https://www.cs.utah.edu/~reinhard/cdrom/\r\nvec3 ReinhardToneMapping( vec3 color ) {\r\n\r\n  color *= toneMappingExposure;\r\n  return saturate( color / ( vec3( 1.0 ) + color ) );\r\n\r\n}\r\n\r\n// source: http://filmicgames.com/archives/75\r\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\r\nvec3 Uncharted2ToneMapping( vec3 color ) {\r\n\r\n  // John Hable's filmic operator from Uncharted 2 video game\r\n  color *= toneMappingExposure;\r\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\r\n\r\n}\r\n\r\n// source: http://filmicgames.com/archives/75\r\nvec3 OptimizedCineonToneMapping( vec3 color ) {\r\n\r\n  // optimized filmic operator by Jim Hejl and Richard Burgess-Dawson\r\n  color *= toneMappingExposure;\r\n  color = max( vec3( 0.0 ), color - 0.004 );\r\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\r\n\r\n}\r\n"
      , nc = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\r\n\r\n\tvarying vec2 vUv;\r\n\r\n#endif"
      , ic = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\r\n\r\n\tvarying vec2 vUv;\r\n\tuniform vec4 offsetRepeat;\r\n\r\n#endif\r\n"
      , ac = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\r\n\r\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\r\n\r\n#endif"
      , oc = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\r\n\r\n\tvarying vec2 vUv2;\r\n\r\n#endif"
      , sc = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\r\n\r\n\tattribute vec2 uv2;\r\n\tvarying vec2 vUv2;\r\n\r\n#endif"
      , cc = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\r\n\r\n\tvUv2 = uv2;\r\n\r\n#endif"
      , hc = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\r\n\r\n\t#ifdef USE_SKINNING\r\n\r\n\t\tvec4 worldPosition = modelMatrix * skinned;\r\n\r\n\t#else\r\n\r\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\r\n\r\n\t#endif\r\n\r\n#endif\r\n"
      , lc = "uniform samplerCube tCube;\r\nuniform float tFlip;\r\nuniform float opacity;\r\n\r\nvarying vec3 vWorldPosition;\r\n\r\n#include <common>\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\r\n\tgl_FragColor.a *= opacity;\r\n\r\n}\r\n"
      , uc = "varying vec3 vWorldPosition;\r\n\r\n#include <common>\r\n\r\nvoid main() {\r\n\r\n\tvWorldPosition = transformDirection( position, modelMatrix );\r\n\r\n\t#include <begin_vertex>\r\n\t#include <project_vertex>\r\n\r\n}\r\n"
      , pc = "#if DEPTH_PACKING == 3200\r\n\r\n\tuniform float opacity;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <uv_pars_fragment>\r\n#include <map_pars_fragment>\r\n#include <alphamap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tvec4 diffuseColor = vec4( 1.0 );\r\n\r\n\t#if DEPTH_PACKING == 3200\r\n\r\n\t\tdiffuseColor.a = opacity;\r\n\r\n\t#endif\r\n\r\n\t#include <map_fragment>\r\n\t#include <alphamap_fragment>\r\n\t#include <alphatest_fragment>\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\r\n\t#if DEPTH_PACKING == 3200\r\n\r\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\r\n\r\n\t#elif DEPTH_PACKING == 3201\r\n\r\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\r\n\r\n\t#endif\r\n\r\n}\r\n"
      , dc = "#include <common>\r\n#include <uv_pars_vertex>\r\n#include <displacementmap_pars_vertex>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <uv_vertex>\r\n\r\n\t#include <skinbase_vertex>\r\n\r\n\t#include <begin_vertex>\r\n\t#include <displacementmap_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n}\r\n"
      , fc = "uniform vec3 lightPos;\r\nvarying vec4 vWorldPosition;\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main () {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\r\n\r\n}\r\n"
      , mc = "varying vec4 vWorldPosition;\r\n\r\n#include <common>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <skinbase_vertex>\r\n\t#include <begin_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <project_vertex>\r\n\t#include <worldpos_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n\tvWorldPosition = worldPosition;\r\n\r\n}\r\n"
      , gc = "uniform sampler2D tEquirect;\r\nuniform float tFlip;\r\n\r\nvarying vec3 vWorldPosition;\r\n\r\n#include <common>\r\n\r\nvoid main() {\r\n\r\n\t// \tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\r\n\tvec3 direction = normalize( vWorldPosition );\r\n\tvec2 sampleUV;\r\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\r\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\r\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\r\n\r\n}\r\n"
      , vc = "varying vec3 vWorldPosition;\r\n\r\n#include <common>\r\n\r\nvoid main() {\r\n\r\n\tvWorldPosition = transformDirection( position, modelMatrix );\r\n\r\n\t#include <begin_vertex>\r\n\t#include <project_vertex>\r\n\r\n}\r\n"
      , yc = "uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\nuniform float dashSize;\r\nuniform float totalSize;\r\n\r\nvarying float vLineDistance;\r\n\r\n#include <common>\r\n#include <color_pars_fragment>\r\n#include <fog_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\r\n\r\n\t\tdiscard;\r\n\r\n\t}\r\n\r\n\tvec3 outgoingLight = vec3( 0.0 );\r\n\tvec4 diffuseColor = vec4( diffuse, opacity );\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <color_fragment>\r\n\r\n\toutgoingLight = diffuseColor.rgb; // simple shader\r\n\r\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\r\n}\r\n"
      , xc = "uniform float scale;\r\nattribute float lineDistance;\r\n\r\nvarying float vLineDistance;\r\n\r\n#include <common>\r\n#include <color_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <color_vertex>\r\n\r\n\tvLineDistance = scale * lineDistance;\r\n\r\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\r\n\tgl_Position = projectionMatrix * mvPosition;\r\n\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n}\r\n"
      , _c = "uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\n#ifndef FLAT_SHADED\r\n\r\n\tvarying vec3 vNormal;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <color_pars_fragment>\r\n#include <uv_pars_fragment>\r\n#include <uv2_pars_fragment>\r\n#include <map_pars_fragment>\r\n#include <alphamap_pars_fragment>\r\n#include <aomap_pars_fragment>\r\n#include <envmap_pars_fragment>\r\n#include <fog_pars_fragment>\r\n#include <specularmap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tvec4 diffuseColor = vec4( diffuse, opacity );\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <map_fragment>\r\n\t#include <color_fragment>\r\n\t#include <alphamap_fragment>\r\n\t#include <alphatest_fragment>\r\n\t#include <specularmap_fragment>\r\n\r\n\tReflectedLight reflectedLight;\r\n\treflectedLight.directDiffuse = vec3( 0.0 );\r\n\treflectedLight.directSpecular = vec3( 0.0 );\r\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\r\n\treflectedLight.indirectSpecular = vec3( 0.0 );\r\n\r\n\t#include <aomap_fragment>\r\n\r\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\r\n\r\n\t#include <normal_flip>\r\n\t#include <envmap_fragment>\r\n\r\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\r\n}\r\n"
      , bc = "#include <common>\r\n#include <uv_pars_vertex>\r\n#include <uv2_pars_vertex>\r\n#include <envmap_pars_vertex>\r\n#include <color_pars_vertex>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <uv_vertex>\r\n\t#include <uv2_vertex>\r\n\t#include <color_vertex>\r\n\t#include <skinbase_vertex>\r\n\r\n\t#ifdef USE_ENVMAP\r\n\r\n\t#include <beginnormal_vertex>\r\n\t#include <morphnormal_vertex>\r\n\t#include <skinnormal_vertex>\r\n\t#include <defaultnormal_vertex>\r\n\r\n\t#endif\r\n\r\n\t#include <begin_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\r\n\t#include <worldpos_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\t#include <envmap_vertex>\r\n\r\n}\r\n"
      , wc = "uniform vec3 diffuse;\r\nuniform vec3 emissive;\r\nuniform float opacity;\r\n\r\nvarying vec3 vLightFront;\r\n\r\n#ifdef DOUBLE_SIDED\r\n\r\n\tvarying vec3 vLightBack;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <color_pars_fragment>\r\n#include <uv_pars_fragment>\r\n#include <uv2_pars_fragment>\r\n#include <map_pars_fragment>\r\n#include <alphamap_pars_fragment>\r\n#include <aomap_pars_fragment>\r\n#include <lightmap_pars_fragment>\r\n#include <emissivemap_pars_fragment>\r\n#include <envmap_pars_fragment>\r\n#include <bsdfs>\r\n#include <lights_pars>\r\n#include <fog_pars_fragment>\r\n#include <shadowmap_pars_fragment>\r\n#include <shadowmask_pars_fragment>\r\n#include <specularmap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tvec4 diffuseColor = vec4( diffuse, opacity );\r\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\r\n\tvec3 totalEmissiveRadiance = emissive;\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <map_fragment>\r\n\t#include <color_fragment>\r\n\t#include <alphamap_fragment>\r\n\t#include <alphatest_fragment>\r\n\t#include <specularmap_fragment>\r\n\t#include <emissivemap_fragment>\r\n\r\n\t// accumulation\r\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\r\n\r\n\t#include <lightmap_fragment>\r\n\r\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\r\n\r\n\t#ifdef DOUBLE_SIDED\r\n\r\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\r\n\r\n\t#else\r\n\r\n\t\treflectedLight.directDiffuse = vLightFront;\r\n\r\n\t#endif\r\n\r\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\r\n\r\n\t// modulation\r\n\t#include <aomap_fragment>\r\n\r\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\r\n\r\n\t#include <normal_flip>\r\n\t#include <envmap_fragment>\r\n\r\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\r\n}\r\n"
      , Mc = "#define LAMBERT\r\n\r\nvarying vec3 vLightFront;\r\n\r\n#ifdef DOUBLE_SIDED\r\n\r\n\tvarying vec3 vLightBack;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <uv_pars_vertex>\r\n#include <uv2_pars_vertex>\r\n#include <envmap_pars_vertex>\r\n#include <bsdfs>\r\n#include <lights_pars>\r\n#include <color_pars_vertex>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <shadowmap_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <uv_vertex>\r\n\t#include <uv2_vertex>\r\n\t#include <color_vertex>\r\n\r\n\t#include <beginnormal_vertex>\r\n\t#include <morphnormal_vertex>\r\n\t#include <skinbase_vertex>\r\n\t#include <skinnormal_vertex>\r\n\t#include <defaultnormal_vertex>\r\n\r\n\t#include <begin_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n\t#include <worldpos_vertex>\r\n\t#include <envmap_vertex>\r\n\t#include <lights_lambert_vertex>\r\n\t#include <shadowmap_vertex>\r\n\r\n}\r\n"
      , Ec = "#define PHONG\r\n\r\nuniform vec3 diffuse;\r\nuniform vec3 emissive;\r\nuniform vec3 specular;\r\nuniform float shininess;\r\nuniform float opacity;\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <color_pars_fragment>\r\n#include <uv_pars_fragment>\r\n#include <uv2_pars_fragment>\r\n#include <map_pars_fragment>\r\n#include <alphamap_pars_fragment>\r\n#include <aomap_pars_fragment>\r\n#include <lightmap_pars_fragment>\r\n#include <emissivemap_pars_fragment>\r\n#include <envmap_pars_fragment>\r\n#include <fog_pars_fragment>\r\n#include <bsdfs>\r\n#include <lights_pars>\r\n#include <lights_phong_pars_fragment>\r\n#include <shadowmap_pars_fragment>\r\n#include <bumpmap_pars_fragment>\r\n#include <normalmap_pars_fragment>\r\n#include <specularmap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tvec4 diffuseColor = vec4( diffuse, opacity );\r\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\r\n\tvec3 totalEmissiveRadiance = emissive;\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <map_fragment>\r\n\t#include <color_fragment>\r\n\t#include <alphamap_fragment>\r\n\t#include <alphatest_fragment>\r\n\t#include <specularmap_fragment>\r\n\t#include <normal_flip>\r\n\t#include <normal_fragment>\r\n\t#include <emissivemap_fragment>\r\n\r\n\t// accumulation\r\n\t#include <lights_phong_fragment>\r\n\t#include <lights_template>\r\n\r\n\t// modulation\r\n\t#include <aomap_fragment>\r\n\r\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\r\n\r\n\t#include <envmap_fragment>\r\n\r\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\r\n}\r\n"
      , Tc = "#define PHONG\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n#ifndef FLAT_SHADED\r\n\r\n\tvarying vec3 vNormal;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <uv_pars_vertex>\r\n#include <uv2_pars_vertex>\r\n#include <displacementmap_pars_vertex>\r\n#include <envmap_pars_vertex>\r\n#include <color_pars_vertex>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <shadowmap_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <uv_vertex>\r\n\t#include <uv2_vertex>\r\n\t#include <color_vertex>\r\n\r\n\t#include <beginnormal_vertex>\r\n\t#include <morphnormal_vertex>\r\n\t#include <skinbase_vertex>\r\n\t#include <skinnormal_vertex>\r\n\t#include <defaultnormal_vertex>\r\n\r\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\r\n\r\n\tvNormal = normalize( transformedNormal );\r\n\r\n#endif\r\n\r\n\t#include <begin_vertex>\r\n\t#include <displacementmap_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n\tvViewPosition = - mvPosition.xyz;\r\n\r\n\t#include <worldpos_vertex>\r\n\t#include <envmap_vertex>\r\n\t#include <shadowmap_vertex>\r\n\r\n}\r\n"
      , Sc = "#define PHYSICAL\r\n\r\nuniform vec3 diffuse;\r\nuniform vec3 emissive;\r\nuniform float roughness;\r\nuniform float metalness;\r\nuniform float opacity;\r\n\r\n#ifndef STANDARD\r\n\tuniform float clearCoat;\r\n\tuniform float clearCoatRoughness;\r\n#endif\r\n\r\nuniform float envMapIntensity; // temporary\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n#ifndef FLAT_SHADED\r\n\r\n\tvarying vec3 vNormal;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <color_pars_fragment>\r\n#include <uv_pars_fragment>\r\n#include <uv2_pars_fragment>\r\n#include <map_pars_fragment>\r\n#include <alphamap_pars_fragment>\r\n#include <aomap_pars_fragment>\r\n#include <lightmap_pars_fragment>\r\n#include <emissivemap_pars_fragment>\r\n#include <envmap_pars_fragment>\r\n#include <fog_pars_fragment>\r\n#include <bsdfs>\r\n#include <cube_uv_reflection_fragment>\r\n#include <lights_pars>\r\n#include <lights_physical_pars_fragment>\r\n#include <shadowmap_pars_fragment>\r\n#include <bumpmap_pars_fragment>\r\n#include <normalmap_pars_fragment>\r\n#include <roughnessmap_pars_fragment>\r\n#include <metalnessmap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tvec4 diffuseColor = vec4( diffuse, opacity );\r\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\r\n\tvec3 totalEmissiveRadiance = emissive;\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <map_fragment>\r\n\t#include <color_fragment>\r\n\t#include <alphamap_fragment>\r\n\t#include <alphatest_fragment>\r\n\t#include <specularmap_fragment>\r\n\t#include <roughnessmap_fragment>\r\n\t#include <metalnessmap_fragment>\r\n\t#include <normal_flip>\r\n\t#include <normal_fragment>\r\n\t#include <emissivemap_fragment>\r\n\r\n\t// accumulation\r\n\t#include <lights_physical_fragment>\r\n\t#include <lights_template>\r\n\r\n\t// modulation\r\n\t#include <aomap_fragment>\r\n\r\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\r\n\r\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\r\n}\r\n"
      , Ac = "#define PHYSICAL\r\n\r\nvarying vec3 vViewPosition;\r\n\r\n#ifndef FLAT_SHADED\r\n\r\n\tvarying vec3 vNormal;\r\n\r\n#endif\r\n\r\n#include <common>\r\n#include <uv_pars_vertex>\r\n#include <uv2_pars_vertex>\r\n#include <displacementmap_pars_vertex>\r\n#include <color_pars_vertex>\r\n#include <morphtarget_pars_vertex>\r\n#include <skinning_pars_vertex>\r\n#include <shadowmap_pars_vertex>\r\n#include <specularmap_pars_fragment>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <uv_vertex>\r\n\t#include <uv2_vertex>\r\n\t#include <color_vertex>\r\n\r\n\t#include <beginnormal_vertex>\r\n\t#include <morphnormal_vertex>\r\n\t#include <skinbase_vertex>\r\n\t#include <skinnormal_vertex>\r\n\t#include <defaultnormal_vertex>\r\n\r\n#ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED\r\n\r\n\tvNormal = normalize( transformedNormal );\r\n\r\n#endif\r\n\r\n\t#include <begin_vertex>\r\n\t#include <displacementmap_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <skinning_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n\tvViewPosition = - mvPosition.xyz;\r\n\r\n\t#include <worldpos_vertex>\r\n\t#include <shadowmap_vertex>\r\n\r\n}\r\n"
      , Lc = "uniform float opacity;\r\nvarying vec3 vNormal;\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\r\n}\r\n"
      , Rc = "varying vec3 vNormal;\r\n\r\n#include <common>\r\n#include <morphtarget_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\tvNormal = normalize( normalMatrix * normal );\r\n\r\n\t#include <begin_vertex>\r\n\t#include <morphtarget_vertex>\r\n\t#include <project_vertex>\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\r\n}\r\n"
      , Pc = "uniform vec3 diffuse;\r\nuniform float opacity;\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <color_pars_fragment>\r\n#include <map_particle_pars_fragment>\r\n#include <fog_pars_fragment>\r\n#include <shadowmap_pars_fragment>\r\n#include <logdepthbuf_pars_fragment>\r\n#include <clipping_planes_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\t#include <clipping_planes_fragment>\r\n\r\n\tvec3 outgoingLight = vec3( 0.0 );\r\n\tvec4 diffuseColor = vec4( diffuse, opacity );\r\n\r\n\t#include <logdepthbuf_fragment>\r\n\t#include <map_particle_fragment>\r\n\t#include <color_fragment>\r\n\t#include <alphatest_fragment>\r\n\r\n\toutgoingLight = diffuseColor.rgb;\r\n\r\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\r\n\r\n\t#include <premultiplied_alpha_fragment>\r\n\t#include <tonemapping_fragment>\r\n\t#include <encodings_fragment>\r\n\t#include <fog_fragment>\r\n\r\n}\r\n"
      , Cc = "uniform float size;\r\nuniform float scale;\r\n\r\n#include <common>\r\n#include <color_pars_vertex>\r\n#include <shadowmap_pars_vertex>\r\n#include <logdepthbuf_pars_vertex>\r\n#include <clipping_planes_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <color_vertex>\r\n\t#include <begin_vertex>\r\n\t#include <project_vertex>\r\n\r\n\t#ifdef USE_SIZEATTENUATION\r\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\r\n\t#else\r\n\t\tgl_PointSize = size;\r\n\t#endif\r\n\r\n\t#include <logdepthbuf_vertex>\r\n\t#include <clipping_planes_vertex>\r\n\t#include <worldpos_vertex>\r\n\t#include <shadowmap_vertex>\r\n\r\n}\r\n"
      , Uc = "uniform float opacity;\r\n\r\n#include <common>\r\n#include <packing>\r\n#include <bsdfs>\r\n#include <lights_pars>\r\n#include <shadowmap_pars_fragment>\r\n#include <shadowmask_pars_fragment>\r\n\r\nvoid main() {\r\n\r\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\r\n\r\n}\r\n"
      , Ic = "#include <shadowmap_pars_vertex>\r\n\r\nvoid main() {\r\n\r\n\t#include <begin_vertex>\r\n\t#include <project_vertex>\r\n\t#include <worldpos_vertex>\r\n\t#include <shadowmap_vertex>\r\n\r\n}\r\n"
      , Dc = {
        alphamap_fragment: Fo,
        alphamap_pars_fragment: zo,
        alphatest_fragment: Bo,
        aomap_fragment: Go,
        aomap_pars_fragment: Ho,
        begin_vertex: Vo,
        beginnormal_vertex: ko,
        bsdfs: jo,
        bumpmap_pars_fragment: Wo,
        clipping_planes_fragment: Xo,
        clipping_planes_pars_fragment: qo,
        clipping_planes_pars_vertex: Yo,
        clipping_planes_vertex: Zo,
        color_fragment: Jo,
        color_pars_fragment: Qo,
        color_pars_vertex: Ko,
        color_vertex: $o,
        common: ts,
        cube_uv_reflection_fragment: es,
        defaultnormal_vertex: rs,
        displacementmap_pars_vertex: ns,
        displacementmap_vertex: is,
        emissivemap_fragment: as,
        emissivemap_pars_fragment: os,
        encodings_fragment: ss,
        encodings_pars_fragment: cs,
        envmap_fragment: hs,
        envmap_pars_fragment: ls,
        envmap_pars_vertex: us,
        envmap_vertex: ps,
        fog_fragment: ds,
        fog_pars_fragment: fs,
        lightmap_fragment: ms,
        lightmap_pars_fragment: gs,
        lights_lambert_vertex: vs,
        lights_pars: ys,
        lights_phong_fragment: xs,
        lights_phong_pars_fragment: _s,
        lights_physical_fragment: bs,
        lights_physical_pars_fragment: ws,
        lights_template: Ms,
        logdepthbuf_fragment: Es,
        logdepthbuf_pars_fragment: Ts,
        logdepthbuf_pars_vertex: Ss,
        logdepthbuf_vertex: As,
        map_fragment: Ls,
        map_pars_fragment: Rs,
        map_particle_fragment: Ps,
        map_particle_pars_fragment: Cs,
        metalnessmap_fragment: Us,
        metalnessmap_pars_fragment: Is,
        morphnormal_vertex: Ds,
        morphtarget_pars_vertex: Ns,
        morphtarget_vertex: Os,
        normal_flip: Fs,
        normal_fragment: zs,
        normalmap_pars_fragment: Bs,
        packing: Gs,
        premultiplied_alpha_fragment: Hs,
        project_vertex: Vs,
        roughnessmap_fragment: ks,
        roughnessmap_pars_fragment: js,
        shadowmap_pars_fragment: Ws,
        shadowmap_pars_vertex: Xs,
        shadowmap_vertex: qs,
        shadowmask_pars_fragment: Ys,
        skinbase_vertex: Zs,
        skinning_pars_vertex: Js,
        skinning_vertex: Qs,
        skinnormal_vertex: Ks,
        specularmap_fragment: $s,
        specularmap_pars_fragment: tc,
        tonemapping_fragment: ec,
        tonemapping_pars_fragment: rc,
        uv_pars_fragment: nc,
        uv_pars_vertex: ic,
        uv_vertex: ac,
        uv2_pars_fragment: oc,
        uv2_pars_vertex: sc,
        uv2_vertex: cc,
        worldpos_vertex: hc,
        cube_frag: lc,
        cube_vert: uc,
        depth_frag: pc,
        depth_vert: dc,
        distanceRGBA_frag: fc,
        distanceRGBA_vert: mc,
        equirect_frag: gc,
        equirect_vert: vc,
        linedashed_frag: yc,
        linedashed_vert: xc,
        meshbasic_frag: _c,
        meshbasic_vert: bc,
        meshlambert_frag: wc,
        meshlambert_vert: Mc,
        meshphong_frag: Ec,
        meshphong_vert: Tc,
        meshphysical_frag: Sc,
        meshphysical_vert: Ac,
        normal_frag: Lc,
        normal_vert: Rc,
        points_frag: Pc,
        points_vert: Cc,
        shadow_frag: Uc,
        shadow_vert: Ic
    };
    q.prototype = {
        constructor: q,
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
            this
        },
        setScalar: function(t) {
            this.r = t,
            this.g = t,
            this.b = t
        },
        setHex: function(t) {
            return t = Math.floor(t),
            this.r = (t >> 16 & 255) / 255,
            this.g = (t >> 8 & 255) / 255,
            this.b = (255 & t) / 255,
            this
        },
        setRGB: function(t, e, r) {
            return this.r = t,
            this.g = e,
            this.b = r,
            this
        },
        setHSL: function() {
            function e(t, e, r) {
                return r < 0 && (r += 1),
                r > 1 && (r -= 1),
                r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - r) : t
            }
            return function(r, n, i) {
                if (r = t.Math.euclideanModulo(r, 1),
                n = t.Math.clamp(n, 0, 1),
                i = t.Math.clamp(i, 0, 1),
                0 === n)
                    this.r = this.g = this.b = i;
                else {
                    var a = i <= .5 ? i * (1 + n) : i + n - i * n
                      , o = 2 * i - a;
                    this.r = e(o, a, r + 1 / 3),
                    this.g = e(o, a, r),
                    this.b = e(o, a, r - 1 / 3)
                }
                return this
            }
        }(),
        setStyle: function(e) {
            function r(t) {
                void 0 !== t && parseFloat(t) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
            }
            var n;
            if (n = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
                var i, a = n[1], o = n[2];
                switch (a) {
                case "rgb":
                case "rgba":
                    if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))
                        return this.r = Math.min(255, parseInt(i[1], 10)) / 255,
                        this.g = Math.min(255, parseInt(i[2], 10)) / 255,
                        this.b = Math.min(255, parseInt(i[3], 10)) / 255,
                        r(i[5]),
                        this;
                    if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o))
                        return this.r = Math.min(100, parseInt(i[1], 10)) / 100,
                        this.g = Math.min(100, parseInt(i[2], 10)) / 100,
                        this.b = Math.min(100, parseInt(i[3], 10)) / 100,
                        r(i[5]),
                        this;
                    break;
                case "hsl":
                case "hsla":
                    if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(o)) {
                        var s = parseFloat(i[1]) / 360
                          , c = parseInt(i[2], 10) / 100
                          , h = parseInt(i[3], 10) / 100;
                        return r(i[5]),
                        this.setHSL(s, c, h)
                    }
                }
            } else if (n = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
                var l = n[1]
                  , u = l.length;
                if (3 === u)
                    return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255,
                    this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255,
                    this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255,
                    this;
                if (6 === u)
                    return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255,
                    this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255,
                    this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255,
                    this
            }
            if (e && e.length > 0) {
                var l = t.ColorKeywords[e];
                void 0 !== l ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + e)
            }
            return this
        },
        clone: function() {
            return new this.constructor(this.r,this.g,this.b)
        },
        copy: function(t) {
            return this.r = t.r,
            this.g = t.g,
            this.b = t.b,
            this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2),
            this.r = Math.pow(t.r, e),
            this.g = Math.pow(t.g, e),
            this.b = Math.pow(t.b, e),
            this
        },
        copyLinearToGamma: function(t, e) {
            void 0 === e && (e = 2);
            var r = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, r),
            this.g = Math.pow(t.g, r),
            this.b = Math.pow(t.b, r),
            this
        },
        convertGammaToLinear: function() {
            var t = this.r
              , e = this.g
              , r = this.b;
            return this.r = t * t,
            this.g = e * e,
            this.b = r * r,
            this
        },
        convertLinearToGamma: function() {
            return this.r = Math.sqrt(this.r),
            this.g = Math.sqrt(this.g),
            this.b = Math.sqrt(this.b),
            this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            var e, r, n = t || {
                h: 0,
                s: 0,
                l: 0
            }, i = this.r, a = this.g, o = this.b, s = Math.max(i, a, o), c = Math.min(i, a, o), h = (c + s) / 2;
            if (c === s)
                e = 0,
                r = 0;
            else {
                var l = s - c;
                switch (r = h <= .5 ? l / (s + c) : l / (2 - s - c),
                s) {
                case i:
                    e = (a - o) / l + (a < o ? 6 : 0);
                    break;
                case a:
                    e = (o - i) / l + 2;
                    break;
                case o:
                    e = (i - a) / l + 4
                }
                e /= 6
            }
            return n.h = e,
            n.s = r,
            n.l = h,
            n
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(t, e, r) {
            var n = this.getHSL();
            return n.h += t,
            n.s += e,
            n.l += r,
            this.setHSL(n.h, n.s, n.l),
            this
        },
        add: function(t) {
            return this.r += t.r,
            this.g += t.g,
            this.b += t.b,
            this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r,
            this.g = t.g + e.g,
            this.b = t.b + e.b,
            this
        },
        addScalar: function(t) {
            return this.r += t,
            this.g += t,
            this.b += t,
            this
        },
        sub: function(t) {
            return this.r = Math.max(0, this.r - t.r),
            this.g = Math.max(0, this.g - t.g),
            this.b = Math.max(0, this.b - t.b),
            this
        },
        multiply: function(t) {
            return this.r *= t.r,
            this.g *= t.g,
            this.b *= t.b,
            this
        },
        multiplyScalar: function(t) {
            return this.r *= t,
            this.g *= t,
            this.b *= t,
            this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e,
            this.g += (t.g - this.g) * e,
            this.b += (t.b - this.b) * e,
            this
        },
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0),
            this.r = t[e],
            this.g = t[e + 1],
            this.b = t[e + 2],
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this.r,
            t[e + 1] = this.g,
            t[e + 2] = this.b,
            t
        },
        toJSON: function() {
            return this.getHex()
        }
    },
    t.ColorKeywords = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    var Nc = {
        common: {
            diffuse: {
                value: new q(15658734)
            },
            opacity: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new a(0,0,1,1)
            },
            specularMap: {
                value: null
            },
            alphaMap: {
                value: null
            },
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            reflectivity: {
                value: 1
            },
            refractionRatio: {
                value: .98
            }
        },
        aomap: {
            aoMap: {
                value: null
            },
            aoMapIntensity: {
                value: 1
            }
        },
        lightmap: {
            lightMap: {
                value: null
            },
            lightMapIntensity: {
                value: 1
            }
        },
        emissivemap: {
            emissiveMap: {
                value: null
            }
        },
        bumpmap: {
            bumpMap: {
                value: null
            },
            bumpScale: {
                value: 1
            }
        },
        normalmap: {
            normalMap: {
                value: null
            },
            normalScale: {
                value: new r(1,1)
            }
        },
        displacementmap: {
            displacementMap: {
                value: null
            },
            displacementScale: {
                value: 1
            },
            displacementBias: {
                value: 0
            }
        },
        roughnessmap: {
            roughnessMap: {
                value: null
            }
        },
        metalnessmap: {
            metalnessMap: {
                value: null
            }
        },
        fog: {
            fogDensity: {
                value: 25e-5
            },
            fogNear: {
                value: 1
            },
            fogFar: {
                value: 2e3
            },
            fogColor: {
                value: new q(16777215)
            }
        },
        lights: {
            ambientLightColor: {
                value: []
            },
            directionalLights: {
                value: [],
                properties: {
                    direction: {},
                    color: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            directionalShadowMap: {
                value: []
            },
            directionalShadowMatrix: {
                value: []
            },
            spotLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    direction: {},
                    distance: {},
                    coneCos: {},
                    penumbraCos: {},
                    decay: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            spotShadowMap: {
                value: []
            },
            spotShadowMatrix: {
                value: []
            },
            pointLights: {
                value: [],
                properties: {
                    color: {},
                    position: {},
                    decay: {},
                    distance: {},
                    shadow: {},
                    shadowBias: {},
                    shadowRadius: {},
                    shadowMapSize: {}
                }
            },
            pointShadowMap: {
                value: []
            },
            pointShadowMatrix: {
                value: []
            },
            hemisphereLights: {
                value: [],
                properties: {
                    direction: {},
                    skyColor: {},
                    groundColor: {}
                }
            }
        },
        points: {
            diffuse: {
                value: new q(15658734)
            },
            opacity: {
                value: 1
            },
            size: {
                value: 1
            },
            scale: {
                value: 1
            },
            map: {
                value: null
            },
            offsetRepeat: {
                value: new a(0,0,1,1)
            }
        }
    }
      , Oc = {
        basic: {
            uniforms: t.UniformsUtils.merge([Nc.common, Nc.aomap, Nc.fog]),
            vertexShader: Dc.meshbasic_vert,
            fragmentShader: Dc.meshbasic_frag
        },
        lambert: {
            uniforms: t.UniformsUtils.merge([Nc.common, Nc.aomap, Nc.lightmap, Nc.emissivemap, Nc.fog, Nc.lights, {
                emissive: {
                    value: new q(0)
                }
            }]),
            vertexShader: Dc.meshlambert_vert,
            fragmentShader: Dc.meshlambert_frag
        },
        phong: {
            uniforms: t.UniformsUtils.merge([Nc.common, Nc.aomap, Nc.lightmap, Nc.emissivemap, Nc.bumpmap, Nc.normalmap, Nc.displacementmap, Nc.fog, Nc.lights, {
                emissive: {
                    value: new q(0)
                },
                specular: {
                    value: new q(1118481)
                },
                shininess: {
                    value: 30
                }
            }]),
            vertexShader: Dc.meshphong_vert,
            fragmentShader: Dc.meshphong_frag
        },
        standard: {
            uniforms: t.UniformsUtils.merge([Nc.common, Nc.aomap, Nc.lightmap, Nc.emissivemap, Nc.bumpmap, Nc.normalmap, Nc.displacementmap, Nc.roughnessmap, Nc.metalnessmap, Nc.fog, Nc.lights, {
                emissive: {
                    value: new q(0)
                },
                roughness: {
                    value: .5
                },
                metalness: {
                    value: 0
                },
                envMapIntensity: {
                    value: 1
                }
            }]),
            vertexShader: Dc.meshphysical_vert,
            fragmentShader: Dc.meshphysical_frag
        },
        points: {
            uniforms: t.UniformsUtils.merge([Nc.points, Nc.fog]),
            vertexShader: Dc.points_vert,
            fragmentShader: Dc.points_frag
        },
        dashed: {
            uniforms: t.UniformsUtils.merge([Nc.common, Nc.fog, {
                scale: {
                    value: 1
                },
                dashSize: {
                    value: 1
                },
                totalSize: {
                    value: 2
                }
            }]),
            vertexShader: Dc.linedashed_vert,
            fragmentShader: Dc.linedashed_frag
        },
        depth: {
            uniforms: t.UniformsUtils.merge([Nc.common, Nc.displacementmap]),
            vertexShader: Dc.depth_vert,
            fragmentShader: Dc.depth_frag
        },
        normal: {
            uniforms: {
                opacity: {
                    value: 1
                }
            },
            vertexShader: Dc.normal_vert,
            fragmentShader: Dc.normal_frag
        },
        cube: {
            uniforms: {
                tCube: {
                    value: null
                },
                tFlip: {
                    value: -1
                },
                opacity: {
                    value: 1
                }
            },
            vertexShader: Dc.cube_vert,
            fragmentShader: Dc.cube_frag
        },
        equirect: {
            uniforms: {
                tEquirect: {
                    value: null
                },
                tFlip: {
                    value: -1
                }
            },
            vertexShader: Dc.equirect_vert,
            fragmentShader: Dc.equirect_frag
        },
        distanceRGBA: {
            uniforms: {
                lightPos: {
                    value: new l
                }
            },
            vertexShader: Dc.distanceRGBA_vert,
            fragmentShader: Dc.distanceRGBA_frag
        }
    };
    Oc.physical = {
        uniforms: t.UniformsUtils.merge([Oc.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: Dc.meshphysical_vert,
        fragmentShader: Dc.meshphysical_frag
    },
    Y.prototype = {
        constructor: Y,
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, r = t.length; e < r; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new r;
            return function(e, r) {
                var n = t.copy(r).multiplyScalar(.5);
                return this.min.copy(e).sub(n),
                this.max.copy(e).add(n),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = +(1 / 0),
            this.max.x = this.max.y = -(1 / 0),
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(t) {
            var e = t || new r;
            return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            var e = t || new r;
            return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            var n = e || new r;
            return n.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            var n = e || new r;
            return n.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new r;
            return function(e) {
                var r = t.copy(e).clamp(this.min, this.max);
                return r.sub(e).length()
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    },
    Q.prototype = {
        constructor: Q,
        isMaterial: !0,
        get needsUpdate() {
            return this._needsUpdate
        },
        set needsUpdate(t) {
            t === !0 && this.update(),
            this._needsUpdate = t
        },
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var r = t[e];
                    if (void 0 !== r) {
                        var n = this[e];
                        void 0 !== n ? n && n.isColor ? n.set(r) : n && n.isVector3 && r && r.isVector3 ? n.copy(r) : "overdraw" === e ? this[e] = Number(r) : this[e] = r : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                    } else
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.")
                }
        },
        toJSON: function(t) {
            function e(t) {
                var e = [];
                for (var r in t) {
                    var n = t[r];
                    delete n.metadata,
                    e.push(n)
                }
                return e
            }
            var r = void 0 === t;
            r && (t = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.4,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            if (n.uuid = this.uuid,
            n.type = this.type,
            "" !== this.name && (n.name = this.name),
            this.color && this.color.isColor && (n.color = this.color.getHex()),
            void 0 !== this.roughness && (n.roughness = this.roughness),
            void 0 !== this.metalness && (n.metalness = this.metalness),
            this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
            this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
            void 0 !== this.shininess && (n.shininess = this.shininess),
            this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
            this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
            this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid),
            this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
            n.bumpScale = this.bumpScale),
            this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
            n.normalScale = this.normalScale.toArray()),
            this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
            n.displacementScale = this.displacementScale,
            n.displacementBias = this.displacementBias),
            this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
            this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
            this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
            this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
            this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
            n.reflectivity = this.reflectivity),
            void 0 !== this.size && (n.size = this.size),
            void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
            this.blending !== Ri && (n.blending = this.blending),
            this.shading !== Ei && (n.shading = this.shading),
            this.side !== _i && (n.side = this.side),
            this.vertexColors !== Ti && (n.vertexColors = this.vertexColors),
            this.opacity < 1 && (n.opacity = this.opacity),
            this.transparent === !0 && (n.transparent = this.transparent),
            n.depthFunc = this.depthFunc,
            n.depthTest = this.depthTest,
            n.depthWrite = this.depthWrite,
            this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
            this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha),
            this.wireframe === !0 && (n.wireframe = this.wireframe),
            this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
            "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
            "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
            n.skinning = this.skinning,
            n.morphTargets = this.morphTargets,
            r) {
                var i = e(t.textures)
                  , a = e(t.images);
                i.length > 0 && (n.textures = i),
                a.length > 0 && (n.images = a)
            }
            return n
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name,
            this.fog = t.fog,
            this.lights = t.lights,
            this.blending = t.blending,
            this.side = t.side,
            this.shading = t.shading,
            this.vertexColors = t.vertexColors,
            this.opacity = t.opacity,
            this.transparent = t.transparent,
            this.blendSrc = t.blendSrc,
            this.blendDst = t.blendDst,
            this.blendEquation = t.blendEquation,
            this.blendSrcAlpha = t.blendSrcAlpha,
            this.blendDstAlpha = t.blendDstAlpha,
            this.blendEquationAlpha = t.blendEquationAlpha,
            this.depthFunc = t.depthFunc,
            this.depthTest = t.depthTest,
            this.depthWrite = t.depthWrite,
            this.colorWrite = t.colorWrite,
            this.precision = t.precision,
            this.polygonOffset = t.polygonOffset,
            this.polygonOffsetFactor = t.polygonOffsetFactor,
            this.polygonOffsetUnits = t.polygonOffsetUnits,
            this.alphaTest = t.alphaTest,
            this.premultipliedAlpha = t.premultipliedAlpha,
            this.overdraw = t.overdraw,
            this.visible = t.visible,
            this.clipShadows = t.clipShadows;
            var e = t.clippingPlanes
              , r = null;
            if (null !== e) {
                var n = e.length;
                r = new Array(n);
                for (var i = 0; i !== n; ++i)
                    r[i] = e[i].clone()
            }
            return this.clippingPlanes = r,
            this
        },
        update: function() {
            this.dispatchEvent({
                type: "update"
            })
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    },
    Object.assign(Q.prototype, e.prototype);
    var Fc = 0;
    $.prototype = Object.create(Q.prototype),
    $.prototype.constructor = $,
    $.prototype.isShaderMaterial = !0,
    $.prototype.copy = function(e) {
        return Q.prototype.copy.call(this, e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = t.UniformsUtils.clone(e.uniforms),
        this.defines = e.defines,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.skinning = e.skinning,
        this.morphTargets = e.morphTargets,
        this.morphNormals = e.morphNormals,
        this.extensions = e.extensions,
        this
    }
    ,
    $.prototype.toJSON = function(t) {
        var e = Q.prototype.toJSON.call(this, t);
        return e.uniforms = this.uniforms,
        e.vertexShader = this.vertexShader,
        e.fragmentShader = this.fragmentShader,
        e
    }
    ,
    tt.prototype = Object.create(Q.prototype),
    tt.prototype.constructor = tt,
    tt.prototype.isMeshDepthMaterial = !0,
    tt.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.depthPacking = t.depthPacking,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.map = t.map,
        this.alphaMap = t.alphaMap,
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
    ,
    et.prototype = {
        constructor: et,
        isBox3: !0,
        set: function(t, e) {
            return this.min.copy(t),
            this.max.copy(e),
            this
        },
        setFromArray: function(t) {
            for (var e = +(1 / 0), r = +(1 / 0), n = +(1 / 0), i = -(1 / 0), a = -(1 / 0), o = -(1 / 0), s = 0, c = t.length; s < c; s += 3) {
                var h = t[s]
                  , l = t[s + 1]
                  , u = t[s + 2];
                h < e && (e = h),
                l < r && (r = l),
                u < n && (n = u),
                h > i && (i = h),
                l > a && (a = l),
                u > o && (o = u)
            }
            this.min.set(e, r, n),
            this.max.set(i, a, o)
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, r = t.length; e < r; e++)
                this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new l;
            return function(e, r) {
                var n = t.copy(r).multiplyScalar(.5);
                return this.min.copy(e).sub(n),
                this.max.copy(e).add(n),
                this
            }
        }(),
        setFromObject: function() {
            var t = new l;
            return function(e) {
                var r = this;
                return e.updateMatrixWorld(!0),
                this.makeEmpty(),
                e.traverse(function(e) {
                    var n = e.geometry;
                    if (void 0 !== n)
                        if (n && n.isGeometry)
                            for (var i = n.vertices, a = 0, o = i.length; a < o; a++)
                                t.copy(i[a]),
                                t.applyMatrix4(e.matrixWorld),
                                r.expandByPoint(t);
                        else if (n && n.isBufferGeometry) {
                            var s = n.attributes.position;
                            if (void 0 !== s) {
                                var c, h, l;
                                s && s.isInterleavedBufferAttribute ? (c = s.data.array,
                                h = s.offset,
                                l = s.data.stride) : (c = s.array,
                                h = 0,
                                l = 3);
                                for (var a = h, o = c.length; a < o; a += l)
                                    t.fromArray(c, a),
                                    t.applyMatrix4(e.matrixWorld),
                                    r.expandByPoint(t)
                            }
                        }
                }),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min),
            this.max.copy(t.max),
            this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = +(1 / 0),
            this.max.x = this.max.y = this.max.z = -(1 / 0),
            this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(t) {
            var e = t || new l;
            return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            var e = t || new l;
            return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t),
            this.max.max(t),
            this
        },
        expandByVector: function(t) {
            return this.min.sub(t),
            this.max.add(t),
            this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t),
            this.max.addScalar(t),
            this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            var r = e || new l;
            return r.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new l),
                this.clampPoint(e.center, t),
                t.distanceToSquared(e.center) <= e.radius * e.radius
            }
        }(),
        intersectsPlane: function(t) {
            var e, r;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
            r = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
            r = t.normal.x * this.min.x),
            t.normal.y > 0 ? (e += t.normal.y * this.min.y,
            r += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
            r += t.normal.y * this.min.y),
            t.normal.z > 0 ? (e += t.normal.z * this.min.z,
            r += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
            r += t.normal.z * this.min.z),
            e <= t.constant && r >= t.constant
        },
        clampPoint: function(t, e) {
            var r = e || new l;
            return r.copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new l;
            return function(e) {
                var r = t.copy(e).clamp(this.min, this.max);
                return r.sub(e).length()
            }
        }(),
        getBoundingSphere: function() {
            var t = new l;
            return function(e) {
                var r = e || new rt;
                return this.getCenter(r.center),
                r.radius = .5 * this.size(t).length(),
                r
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min),
            this.max.min(t.max),
            this.isEmpty() && this.makeEmpty(),
            this
        },
        union: function(t) {
            return this.min.min(t.min),
            this.max.max(t.max),
            this
        },
        applyMatrix4: function() {
            var t = [new l, new l, new l, new l, new l, new l, new l, new l];
            return function(e) {
                return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
                t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
                t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
                t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
                t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
                t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
                t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
                t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
                this.setFromPoints(t),
                this)
            }
        }(),
        translate: function(t) {
            return this.min.add(t),
            this.max.add(t),
            this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    },
    rt.prototype = {
        constructor: rt,
        set: function(t, e) {
            return this.center.copy(t),
            this.radius = e,
            this
        },
        setFromPoints: function() {
            var t = new et;
            return function(e, r) {
                var n = this.center;
                void 0 !== r ? n.copy(r) : t.setFromPoints(e).getCenter(n);
                for (var i = 0, a = 0, o = e.length; a < o; a++)
                    i = Math.max(i, n.distanceToSquared(e[a]));
                return this.radius = Math.sqrt(i),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.center.copy(t.center),
            this.radius = t.radius,
            this
        },
        empty: function() {
            return this.radius <= 0
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function(t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function(t) {
            return Math.abs(this.center.dot(t.normal) - t.constant) <= this.radius
        },
        clampPoint: function(t, e) {
            var r = this.center.distanceToSquared(t)
              , n = e || new l;
            return n.copy(t),
            r > this.radius * this.radius && (n.sub(this.center).normalize(),
            n.multiplyScalar(this.radius).add(this.center)),
            n
        },
        getBoundingBox: function(t) {
            var e = t || new et;
            return e.set(this.center, this.center),
            e.expandByScalar(this.radius),
            e
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t),
            this.radius = this.radius * t.getMaxScaleOnAxis(),
            this
        },
        translate: function(t) {
            return this.center.add(t),
            this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    },
    nt.prototype = {
        constructor: nt,
        isMatrix3: !0,
        set: function(t, e, r, n, i, a, o, s, c) {
            var h = this.elements;
            return h[0] = t,
            h[1] = n,
            h[2] = o,
            h[3] = e,
            h[4] = i,
            h[5] = s,
            h[6] = r,
            h[7] = a,
            h[8] = c,
            this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
            this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t) {
            var e = t.elements;
            return this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]),
            this
        },
        setFromMatrix4: function(t) {
            var e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
            this
        },
        applyToVector3Array: function() {
            var t;
            return function(e, r, n) {
                void 0 === t && (t = new l),
                void 0 === r && (r = 0),
                void 0 === n && (n = e.length);
                for (var i = 0, a = r; i < n; i += 3,
                a += 3)
                    t.fromArray(e, a),
                    t.applyMatrix3(this),
                    t.toArray(e, a);
                return e
            }
        }(),
        applyToBuffer: function() {
            var t;
            return function(e, r, n) {
                void 0 === t && (t = new l),
                void 0 === r && (r = 0),
                void 0 === n && (n = e.length / e.itemSize);
                for (var i = 0, a = r; i < n; i++,
                a++)
                    t.x = e.getX(a),
                    t.y = e.getY(a),
                    t.z = e.getZ(a),
                    t.applyMatrix3(this),
                    e.setXYZ(t.x, t.y, t.z);
                return e
            }
        }(),
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t,
            e[3] *= t,
            e[6] *= t,
            e[1] *= t,
            e[4] *= t,
            e[7] *= t,
            e[2] *= t,
            e[5] *= t,
            e[8] *= t,
            this
        },
        determinant: function() {
            var t = this.elements
              , e = t[0]
              , r = t[1]
              , n = t[2]
              , i = t[3]
              , a = t[4]
              , o = t[5]
              , s = t[6]
              , c = t[7]
              , h = t[8];
            return e * a * h - e * o * c - r * i * h + r * o * s + n * i * c - n * a * s
        },
        getInverse: function(t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
            var r = t.elements
              , n = this.elements
              , i = r[0]
              , a = r[1]
              , o = r[2]
              , s = r[3]
              , c = r[4]
              , h = r[5]
              , l = r[6]
              , u = r[7]
              , p = r[8]
              , d = p * c - h * u
              , f = h * l - p * s
              , m = u * s - c * l
              , g = i * d + a * f + o * m;
            if (0 === g) {
                var v = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
                if (e === !0)
                    throw new Error(v);
                return console.warn(v),
                this.identity()
            }
            var y = 1 / g;
            return n[0] = d * y,
            n[1] = (o * u - p * a) * y,
            n[2] = (h * a - o * c) * y,
            n[3] = f * y,
            n[4] = (p * i - o * l) * y,
            n[5] = (o * s - h * i) * y,
            n[6] = m * y,
            n[7] = (a * l - u * i) * y,
            n[8] = (c * i - a * s) * y,
            this
        },
        transpose: function() {
            var t, e = this.elements;
            return t = e[1],
            e[1] = e[3],
            e[3] = t,
            t = e[2],
            e[2] = e[6],
            e[6] = t,
            t = e[5],
            e[5] = e[7],
            e[7] = t,
            this
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead."),
            this.toArray(t, e)
        },
        getNormalMatrix: function(t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0],
            t[1] = e[3],
            t[2] = e[6],
            t[3] = e[1],
            t[4] = e[4],
            t[5] = e[7],
            t[6] = e[2],
            t[7] = e[5],
            t[8] = e[8],
            this
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var r = 0; r < 9; r++)
                this.elements[r] = t[r + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []),
            void 0 === e && (e = 0);
            var r = this.elements;
            return t[e] = r[0],
            t[e + 1] = r[1],
            t[e + 2] = r[2],
            t[e + 3] = r[3],
            t[e + 4] = r[4],
            t[e + 5] = r[5],
            t[e + 6] = r[6],
            t[e + 7] = r[7],
            t[e + 8] = r[8],
            t
        }
    },
    it.prototype = {
        constructor: it,
        set: function(t, e) {
            return this.normal.copy(t),
            this.constant = e,
            this
        },
        setComponents: function(t, e, r, n) {
            return this.normal.set(t, e, r),
            this.constant = n,
            this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t),
            this.constant = -e.dot(this.normal),
            this
        },
        setFromCoplanarPoints: function() {
            var t = new l
              , e = new l;
            return function(r, n, i) {
                var a = t.subVectors(i, n).cross(e.subVectors(r, n)).normalize();
                return this.setFromNormalAndCoplanarPoint(a, r),
                this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.normal.copy(t.normal),
            this.constant = t.constant,
            this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t),
            this.constant *= t,
            this
        },
        negate: function() {
            return this.constant *= -1,
            this.normal.negate(),
            this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return this.orthoPoint(t, e).sub(t).negate()
        },
        orthoPoint: function(t, e) {
            var r = this.distanceToPoint(t)
              , n = e || new l;
            return n.copy(this.normal).multiplyScalar(r)
        },
        intersectLine: function() {
            var t = new l;
            return function(e, r) {
                var n = r || new l
                  , i = e.delta(t)
                  , a = this.normal.dot(i);
                if (0 !== a) {
                    var o = -(e.start.dot(this.normal) + this.constant) / a;
                    if (!(o < 0 || o > 1))
                        return n.copy(i).multiplyScalar(o).add(e.start)
                } else if (0 === this.distanceToPoint(e.start))
                    return n.copy(e.start)
            }
        }(),
        intersectsLine: function(t) {
            var e = this.distanceToPoint(t.start)
              , r = this.distanceToPoint(t.end);
            return e < 0 && r > 0 || r < 0 && e > 0
        },
        intersectsBox: function(t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function(t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function(t) {
            var e = t || new l;
            return e.copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var t = new l
              , e = new nt;
            return function(r, n) {
                var i = this.coplanarPoint(t).applyMatrix4(r)
                  , a = n || e.getNormalMatrix(r)
                  , o = this.normal.applyMatrix3(a).normalize();
                return this.constant = -i.dot(o),
                this
            }
        }(),
        translate: function(t) {
            return this.constant = this.constant - t.dot(this.normal),
            this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    },
    at.prototype = {
        constructor: at,
        set: function(t, e, r, n, i, a) {
            var o = this.planes;
            return o[0].copy(t),
            o[1].copy(e),
            o[2].copy(r),
            o[3].copy(n),
            o[4].copy(i),
            o[5].copy(a),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this);
        },
        copy: function(t) {
            for (var e = this.planes, r = 0; r < 6; r++)
                e[r].copy(t.planes[r]);
            return this
        },
        setFromMatrix: function(t) {
            var e = this.planes
              , r = t.elements
              , n = r[0]
              , i = r[1]
              , a = r[2]
              , o = r[3]
              , s = r[4]
              , c = r[5]
              , h = r[6]
              , l = r[7]
              , u = r[8]
              , p = r[9]
              , d = r[10]
              , f = r[11]
              , m = r[12]
              , g = r[13]
              , v = r[14]
              , y = r[15];
            return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(),
            e[1].setComponents(o + n, l + s, f + u, y + m).normalize(),
            e[2].setComponents(o + i, l + c, f + p, y + g).normalize(),
            e[3].setComponents(o - i, l - c, f - p, y - g).normalize(),
            e[4].setComponents(o - a, l - h, f - d, y - v).normalize(),
            e[5].setComponents(o + a, l + h, f + d, y + v).normalize(),
            this
        },
        intersectsObject: function() {
            var t = new rt;
            return function(e) {
                var r = e.geometry;
                return null === r.boundingSphere && r.computeBoundingSphere(),
                t.copy(r.boundingSphere).applyMatrix4(e.matrixWorld),
                this.intersectsSphere(t)
            }
        }(),
        intersectsSprite: function() {
            var t = new rt;
            return function(e) {
                return t.center.set(0, 0, 0),
                t.radius = .7071067811865476,
                t.applyMatrix4(e.matrixWorld),
                this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function(t) {
            for (var e = this.planes, r = t.center, n = -t.radius, i = 0; i < 6; i++) {
                var a = e[i].distanceToPoint(r);
                if (a < n)
                    return !1
            }
            return !0
        },
        intersectsBox: function() {
            var t = new l
              , e = new l;
            return function(r) {
                for (var n = this.planes, i = 0; i < 6; i++) {
                    var a = n[i];
                    t.x = a.normal.x > 0 ? r.min.x : r.max.x,
                    e.x = a.normal.x > 0 ? r.max.x : r.min.x,
                    t.y = a.normal.y > 0 ? r.min.y : r.max.y,
                    e.y = a.normal.y > 0 ? r.max.y : r.min.y,
                    t.z = a.normal.z > 0 ? r.min.z : r.max.z,
                    e.z = a.normal.z > 0 ? r.max.z : r.min.z;
                    var o = a.distanceToPoint(t)
                      , s = a.distanceToPoint(e);
                    if (o < 0 && s < 0)
                        return !1
                }
                return !0
            }
        }(),
        containsPoint: function(t) {
            for (var e = this.planes, r = 0; r < 6; r++)
                if (e[r].distanceToPoint(t) < 0)
                    return !1;
            return !0
        }
    },
    st.prototype = {
        constructor: st,
        set: function(t, e) {
            return this.origin.copy(t),
            this.direction.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.origin.copy(t.origin),
            this.direction.copy(t.direction),
            this
        },
        at: function(t, e) {
            var r = e || new l;
            return r.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function(t) {
            return this.direction.copy(t).sub(this.origin).normalize(),
            this
        },
        recast: function() {
            var t = new l;
            return function(e) {
                return this.origin.copy(this.at(e, t)),
                this
            }
        }(),
        closestPointToPoint: function(t, e) {
            var r = e || new l;
            r.subVectors(t, this.origin);
            var n = r.dot(this.direction);
            return n < 0 ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(n).add(this.origin)
        },
        distanceToPoint: function(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function() {
            var t = new l;
            return function(e) {
                var r = t.subVectors(e, this.origin).dot(this.direction);
                return r < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(r).add(this.origin),
                t.distanceToSquared(e))
            }
        }(),
        distanceSqToSegment: function() {
            var t = new l
              , e = new l
              , r = new l;
            return function(n, i, a, o) {
                t.copy(n).add(i).multiplyScalar(.5),
                e.copy(i).sub(n).normalize(),
                r.copy(this.origin).sub(t);
                var s, c, h, l, u = .5 * n.distanceTo(i), p = -this.direction.dot(e), d = r.dot(this.direction), f = -r.dot(e), m = r.lengthSq(), g = Math.abs(1 - p * p);
                if (g > 0)
                    if (s = p * f - d,
                    c = p * d - f,
                    l = u * g,
                    s >= 0)
                        if (c >= -l)
                            if (c <= l) {
                                var v = 1 / g;
                                s *= v,
                                c *= v,
                                h = s * (s + p * c + 2 * d) + c * (p * s + c + 2 * f) + m
                            } else
                                c = u,
                                s = Math.max(0, -(p * c + d)),
                                h = -s * s + c * (c + 2 * f) + m;
                        else
                            c = -u,
                            s = Math.max(0, -(p * c + d)),
                            h = -s * s + c * (c + 2 * f) + m;
                    else
                        c <= -l ? (s = Math.max(0, -(-p * u + d)),
                        c = s > 0 ? -u : Math.min(Math.max(-u, -f), u),
                        h = -s * s + c * (c + 2 * f) + m) : c <= l ? (s = 0,
                        c = Math.min(Math.max(-u, -f), u),
                        h = c * (c + 2 * f) + m) : (s = Math.max(0, -(p * u + d)),
                        c = s > 0 ? u : Math.min(Math.max(-u, -f), u),
                        h = -s * s + c * (c + 2 * f) + m);
                else
                    c = p > 0 ? -u : u,
                    s = Math.max(0, -(p * c + d)),
                    h = -s * s + c * (c + 2 * f) + m;
                return a && a.copy(this.direction).multiplyScalar(s).add(this.origin),
                o && o.copy(e).multiplyScalar(c).add(t),
                h
            }
        }(),
        intersectSphere: function() {
            var t = new l;
            return function(e, r) {
                t.subVectors(e.center, this.origin);
                var n = t.dot(this.direction)
                  , i = t.dot(t) - n * n
                  , a = e.radius * e.radius;
                if (i > a)
                    return null;
                var o = Math.sqrt(a - i)
                  , s = n - o
                  , c = n + o;
                return s < 0 && c < 0 ? null : s < 0 ? this.at(c, r) : this.at(s, r)
            }
        }(),
        intersectsSphere: function(t) {
            return this.distanceToPoint(t.center) <= t.radius
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            if (0 === e)
                return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            var r = -(this.origin.dot(t.normal) + t.constant) / e;
            return r >= 0 ? r : null
        },
        intersectPlane: function(t, e) {
            var r = this.distanceToPlane(t);
            return null === r ? null : this.at(r, e)
        },
        intersectsPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            if (0 === e)
                return !0;
            var r = t.normal.dot(this.direction);
            return r * e < 0
        },
        intersectBox: function(t, e) {
            var r, n, i, a, o, s, c = 1 / this.direction.x, h = 1 / this.direction.y, l = 1 / this.direction.z, u = this.origin;
            return c >= 0 ? (r = (t.min.x - u.x) * c,
            n = (t.max.x - u.x) * c) : (r = (t.max.x - u.x) * c,
            n = (t.min.x - u.x) * c),
            h >= 0 ? (i = (t.min.y - u.y) * h,
            a = (t.max.y - u.y) * h) : (i = (t.max.y - u.y) * h,
            a = (t.min.y - u.y) * h),
            r > a || i > n ? null : ((i > r || r !== r) && (r = i),
            (a < n || n !== n) && (n = a),
            l >= 0 ? (o = (t.min.z - u.z) * l,
            s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l,
            s = (t.min.z - u.z) * l),
            r > s || o > n ? null : ((o > r || r !== r) && (r = o),
            (s < n || n !== n) && (n = s),
            n < 0 ? null : this.at(r >= 0 ? r : n, e)))
        },
        intersectsBox: function() {
            var t = new l;
            return function(e) {
                return null !== this.intersectBox(e, t)
            }
        }(),
        intersectTriangle: function() {
            var t = new l
              , e = new l
              , r = new l
              , n = new l;
            return function(i, a, o, s, c) {
                e.subVectors(a, i),
                r.subVectors(o, i),
                n.crossVectors(e, r);
                var h, l = this.direction.dot(n);
                if (l > 0) {
                    if (s)
                        return null;
                    h = 1
                } else {
                    if (!(l < 0))
                        return null;
                    h = -1,
                    l = -l
                }
                t.subVectors(this.origin, i);
                var u = h * this.direction.dot(r.crossVectors(t, r));
                if (u < 0)
                    return null;
                var p = h * this.direction.dot(e.cross(t));
                if (p < 0)
                    return null;
                if (u + p > l)
                    return null;
                var d = -h * t.dot(n);
                return d < 0 ? null : this.at(d / l, c)
            }
        }(),
        applyMatrix4: function(t) {
            return this.direction.add(this.origin).applyMatrix4(t),
            this.origin.applyMatrix4(t),
            this.direction.sub(this.origin),
            this.direction.normalize(),
            this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    },
    ct.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
    ct.DefaultOrder = "XYZ",
    ct.prototype = {
        constructor: ct,
        isEuler: !0,
        get x() {
            return this._x
        },
        set x(t) {
            this._x = t,
            this.onChangeCallback()
        },
        get y() {
            return this._y
        },
        set y(t) {
            this._y = t,
            this.onChangeCallback()
        },
        get z() {
            return this._z
        },
        set z(t) {
            this._z = t,
            this.onChangeCallback()
        },
        get order() {
            return this._order
        },
        set order(t) {
            this._order = t,
            this.onChangeCallback()
        },
        set: function(t, e, r, n) {
            return this._x = t,
            this._y = e,
            this._z = r,
            this._order = n || this._order,
            this.onChangeCallback(),
            this
        },
        clone: function() {
            return new this.constructor(this._x,this._y,this._z,this._order)
        },
        copy: function(t) {
            return this._x = t._x,
            this._y = t._y,
            this._z = t._z,
            this._order = t._order,
            this.onChangeCallback(),
            this
        },
        setFromRotationMatrix: function(e, r, n) {
            var i = t.Math.clamp
              , a = e.elements
              , o = a[0]
              , s = a[4]
              , c = a[8]
              , h = a[1]
              , l = a[5]
              , u = a[9]
              , p = a[2]
              , d = a[6]
              , f = a[10];
            return r = r || this._order,
            "XYZ" === r ? (this._y = Math.asin(i(c, -1, 1)),
            Math.abs(c) < .99999 ? (this._x = Math.atan2(-u, f),
            this._z = Math.atan2(-s, o)) : (this._x = Math.atan2(d, l),
            this._z = 0)) : "YXZ" === r ? (this._x = Math.asin(-i(u, -1, 1)),
            Math.abs(u) < .99999 ? (this._y = Math.atan2(c, f),
            this._z = Math.atan2(h, l)) : (this._y = Math.atan2(-p, o),
            this._z = 0)) : "ZXY" === r ? (this._x = Math.asin(i(d, -1, 1)),
            Math.abs(d) < .99999 ? (this._y = Math.atan2(-p, f),
            this._z = Math.atan2(-s, l)) : (this._y = 0,
            this._z = Math.atan2(h, o))) : "ZYX" === r ? (this._y = Math.asin(-i(p, -1, 1)),
            Math.abs(p) < .99999 ? (this._x = Math.atan2(d, f),
            this._z = Math.atan2(h, o)) : (this._x = 0,
            this._z = Math.atan2(-s, l))) : "YZX" === r ? (this._z = Math.asin(i(h, -1, 1)),
            Math.abs(h) < .99999 ? (this._x = Math.atan2(-u, l),
            this._y = Math.atan2(-p, o)) : (this._x = 0,
            this._y = Math.atan2(c, f))) : "XZY" === r ? (this._z = Math.asin(-i(s, -1, 1)),
            Math.abs(s) < .99999 ? (this._x = Math.atan2(d, l),
            this._y = Math.atan2(c, o)) : (this._x = Math.atan2(-u, f),
            this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + r),
            this._order = r,
            n !== !1 && this.onChangeCallback(),
            this
        },
        setFromQuaternion: function() {
            var t;
            return function(e, r, n) {
                return void 0 === t && (t = new u),
                t.makeRotationFromQuaternion(e),
                this.setFromRotationMatrix(t, r, n)
            }
        }(),
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function() {
            var t = new h;
            return function(e) {
                return t.setFromEuler(this),
                this.setFromQuaternion(t, e)
            }
        }(),
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0],
            this._y = t[1],
            this._z = t[2],
            void 0 !== t[3] && (this._order = t[3]),
            this.onChangeCallback(),
            this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []),
            void 0 === e && (e = 0),
            t[e] = this._x,
            t[e + 1] = this._y,
            t[e + 2] = this._z,
            t[e + 3] = this._order,
            t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new l(this._x,this._y,this._z)
        },
        onChange: function(t) {
            return this.onChangeCallback = t,
            this
        },
        onChangeCallback: function() {}
    },
    ht.prototype = {
        constructor: ht,
        set: function(t) {
            this.mask = 1 << t
        },
        enable: function(t) {
            this.mask |= 1 << t
        },
        toggle: function(t) {
            this.mask ^= 1 << t
        },
        disable: function(t) {
            this.mask &= ~(1 << t)
        },
        test: function(t) {
            return 0 !== (this.mask & t.mask)
        }
    },
    lt.DefaultUp = new l(0,1,0),
    lt.DefaultMatrixAutoUpdate = !0,
    Object.assign(lt.prototype, e.prototype, {
        isObject3D: !0,
        applyMatrix: function(t) {
            this.matrix.multiplyMatrices(t, this.matrix),
            this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function() {
            var t = new h;
            return function(e, r) {
                return t.setFromAxisAngle(e, r),
                this.quaternion.multiply(t),
                this
            }
        }(),
        rotateX: function() {
            var t = new l(1,0,0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function() {
            var t = new l(0,1,0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function() {
            var t = new l(0,0,1);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function() {
            var t = new l;
            return function(e, r) {
                return t.copy(e).applyQuaternion(this.quaternion),
                this.position.add(t.multiplyScalar(r)),
                this
            }
        }(),
        translateX: function() {
            var t = new l(1,0,0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function() {
            var t = new l(0,1,0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function() {
            var t = new l(0,0,1);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var t = new u;
            return function(e) {
                return e.applyMatrix4(t.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var t = new u;
            return function(e) {
                t.lookAt(e, this.position, this.up),
                this.quaternion.setFromRotationMatrix(t)
            }
        }(),
        add: function(t) {
            if (arguments.length > 1) {
                for (var e = 0; e < arguments.length; e++)
                    this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
            this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
            t.parent = this,
            t.dispatchEvent({
                type: "added"
            }),
            this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
            this)
        },
        remove: function(t) {
            if (arguments.length > 1)
                for (var e = 0; e < arguments.length; e++)
                    this.remove(arguments[e]);
            var r = this.children.indexOf(t);
            r !== -1 && (t.parent = null,
            t.dispatchEvent({
                type: "removed"
            }),
            this.children.splice(r, 1))
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e)
                return this;
            for (var r = 0, n = this.children.length; r < n; r++) {
                var i = this.children[r]
                  , a = i.getObjectByProperty(t, e);
                if (void 0 !== a)
                    return a
            }
        },
        getWorldPosition: function(t) {
            var e = t || new l;
            return this.updateMatrixWorld(!0),
            e.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var t = new l
              , e = new l;
            return function(r) {
                var n = r || new h;
                return this.updateMatrixWorld(!0),
                this.matrixWorld.decompose(t, n, e),
                n
            }
        }(),
        getWorldRotation: function() {
            var t = new h;
            return function(e) {
                var r = e || new ct;
                return this.getWorldQuaternion(t),
                r.setFromQuaternion(t, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var t = new l
              , e = new h;
            return function(r) {
                var n = r || new l;
                return this.updateMatrixWorld(!0),
                this.matrixWorld.decompose(t, e, n),
                n
            }
        }(),
        getWorldDirection: function() {
            var t = new h;
            return function(e) {
                var r = e || new l;
                return this.getWorldQuaternion(t),
                r.set(0, 0, 1).applyQuaternion(t)
            }
        }(),
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = this.children, r = 0, n = e.length; r < n; r++)
                e[r].traverse(t)
        },
        traverseVisible: function(t) {
            if (this.visible !== !1) {
                t(this);
                for (var e = this.children, r = 0, n = e.length; r < n; r++)
                    e[r].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e),
            e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
            this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            this.matrixAutoUpdate === !0 && this.updateMatrix(),
            this.matrixWorldNeedsUpdate !== !0 && t !== !0 || (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
            this.matrixWorldNeedsUpdate = !1,
            t = !0);
            for (var e = this.children, r = 0, n = e.length; r < n; r++)
                e[r].updateMatrixWorld(t)
        },
        toJSON: function(t) {
            function e(t) {
                var e = [];
                for (var r in t) {
                    var n = t[r];
                    delete n.metadata,
                    e.push(n)
                }
                return e
            }
            var r = void 0 === t || "" === t
              , n = {};
            r && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {}
            },
            n.metadata = {
                version: 4.4,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var i = {};
            if (i.uuid = this.uuid,
            i.type = this.type,
            "" !== this.name && (i.name = this.name),
            "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
            this.castShadow === !0 && (i.castShadow = !0),
            this.receiveShadow === !0 && (i.receiveShadow = !0),
            this.visible === !1 && (i.visible = !1),
            i.matrix = this.matrix.toArray(),
            void 0 !== this.geometry && (void 0 === t.geometries[this.geometry.uuid] && (t.geometries[this.geometry.uuid] = this.geometry.toJSON(t)),
            i.geometry = this.geometry.uuid),
            void 0 !== this.material && (void 0 === t.materials[this.material.uuid] && (t.materials[this.material.uuid] = this.material.toJSON(t)),
            i.material = this.material.uuid),
            this.children.length > 0) {
                i.children = [];
                for (var a = 0; a < this.children.length; a++)
                    i.children.push(this.children[a].toJSON(t).object)
            }
            if (r) {
                var o = e(t.geometries)
                  , s = e(t.materials)
                  , c = e(t.textures)
                  , h = e(t.images);
                o.length > 0 && (n.geometries = o),
                s.length > 0 && (n.materials = s),
                c.length > 0 && (n.textures = c),
                h.length > 0 && (n.images = h)
            }
            return n.object = i,
            n
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e) {
            if (void 0 === e && (e = !0),
            this.name = t.name,
            this.up.copy(t.up),
            this.position.copy(t.position),
            this.quaternion.copy(t.quaternion),
            this.scale.copy(t.scale),
            this.matrix.copy(t.matrix),
            this.matrixWorld.copy(t.matrixWorld),
            this.matrixAutoUpdate = t.matrixAutoUpdate,
            this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
            this.visible = t.visible,
            this.castShadow = t.castShadow,
            this.receiveShadow = t.receiveShadow,
            this.frustumCulled = t.frustumCulled,
            this.renderOrder = t.renderOrder,
            this.userData = JSON.parse(JSON.stringify(t.userData)),
            e === !0)
                for (var r = 0; r < t.children.length; r++) {
                    var n = t.children[r];
                    this.add(n.clone())
                }
            return this
        }
    });
    var zc = 0;
    pt.prototype = {
        constructor: pt,
        set: function(t, e) {
            return this.start.copy(t),
            this.end.copy(e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.start.copy(t.start),
            this.end.copy(t.end),
            this
        },
        getCenter: function(t) {
            var e = t || new l;
            return e.addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            var e = t || new l;
            return e.subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            var r = e || new l;
            return this.delta(r).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: function() {
            var e = new l
              , r = new l;
            return function(n, i) {
                e.subVectors(n, this.start),
                r.subVectors(this.end, this.start);
                var a = r.dot(r)
                  , o = r.dot(e)
                  , s = o / a;
                return i && (s = t.Math.clamp(s, 0, 1)),
                s
            }
        }(),
        closestPointToPoint: function(t, e, r) {
            var n = this.closestPointToPointParameter(t, e)
              , i = r || new l;
            return this.delta(i).multiplyScalar(n).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t),
            this.end.applyMatrix4(t),
            this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    },
    dt.normal = function() {
        var t = new l;
        return function(e, r, n, i) {
            var a = i || new l;
            a.subVectors(n, r),
            t.subVectors(e, r),
            a.cross(t);
            var o = a.lengthSq();
            return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
        }
    }(),
    dt.barycoordFromPoint = function() {
        var t = new l
          , e = new l
          , r = new l;
        return function(n, i, a, o, s) {
            t.subVectors(o, i),
            e.subVectors(a, i),
            r.subVectors(n, i);
            var c = t.dot(t)
              , h = t.dot(e)
              , u = t.dot(r)
              , p = e.dot(e)
              , d = e.dot(r)
              , f = c * p - h * h
              , m = s || new l;
            if (0 === f)
                return m.set(-2, -1, -1);
            var g = 1 / f
              , v = (p * u - h * d) * g
              , y = (c * d - h * u) * g;
            return m.set(1 - v - y, y, v)
        }
    }(),
    dt.containsPoint = function() {
        var t = new l;
        return function(e, r, n, i) {
            var a = dt.barycoordFromPoint(e, r, n, i, t);
            return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
        }
    }(),
    dt.prototype = {
        constructor: dt,
        set: function(t, e, r) {
            return this.a.copy(t),
            this.b.copy(e),
            this.c.copy(r),
            this
        },
        setFromPointsAndIndices: function(t, e, r, n) {
            return this.a.copy(t[e]),
            this.b.copy(t[r]),
            this.c.copy(t[n]),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.a.copy(t.a),
            this.b.copy(t.b),
            this.c.copy(t.c),
            this
        },
        area: function() {
            var t = new l
              , e = new l;
            return function() {
                return t.subVectors(this.c, this.b),
                e.subVectors(this.a, this.b),
                .5 * t.cross(e).length()
            }
        }(),
        midpoint: function(t) {
            var e = t || new l;
            return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(t) {
            return dt.normal(this.a, this.b, this.c, t)
        },
        plane: function(t) {
            var e = t || new it;
            return e.setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(t, e) {
            return dt.barycoordFromPoint(t, this.a, this.b, this.c, e)
        },
        containsPoint: function(t) {
            return dt.containsPoint(t, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var t, e, r, n;
            return function(i, a) {
                void 0 === t && (t = new it,
                e = [new pt, new pt, new pt],
                r = new l,
                n = new l);
                var o = a || new l
                  , s = 1 / 0;
                if (t.setFromCoplanarPoints(this.a, this.b, this.c),
                t.projectPoint(i, r),
                this.containsPoint(r) === !0)
                    o.copy(r);
                else {
                    e[0].set(this.a, this.b),
                    e[1].set(this.b, this.c),
                    e[2].set(this.c, this.a);
                    for (var c = 0; c < e.length; c++) {
                        e[c].closestPointToPoint(r, !0, n);
                        var h = r.distanceToSquared(n);
                        h < s && (s = h,
                        o.copy(n))
                    }
                }
                return o
            }
        }(),
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    },
    ft.prototype = {
        constructor: ft,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.a = t.a,
            this.b = t.b,
            this.c = t.c,
            this.normal.copy(t.normal),
            this.color.copy(t.color),
            this.materialIndex = t.materialIndex;
            for (var e = 0, r = t.vertexNormals.length; e < r; e++)
                this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (var e = 0, r = t.vertexColors.length; e < r; e++)
                this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    },
    mt.prototype = Object.create(Q.prototype),
    mt.prototype.constructor = mt,
    mt.prototype.isMeshBasicMaterial = !0,
    mt.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this
    }
    ,
    gt.prototype = {
        constructor: gt,
        isBufferAttribute: !0,
        set needsUpdate(t) {
            t === !0 && this.version++
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array),
            this.itemSize = t.itemSize,
            this.count = t.count,
            this.normalized = t.normalized,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, r) {
            t *= this.itemSize,
            r *= e.itemSize;
            for (var n = 0, i = this.itemSize; n < i; n++)
                this.array[t + n] = e.array[r + n];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t),
            this
        },
        copyColorsArray: function(t) {
            for (var e = this.array, r = 0, n = 0, i = t.length; n < i; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n),
                a = new q),
                e[r++] = a.r,
                e[r++] = a.g,
                e[r++] = a.b
            }
            return this
        },
        copyIndicesArray: function(t) {
            for (var e = this.array, r = 0, n = 0, i = t.length; n < i; n++) {
                var a = t[n];
                e[r++] = a.a,
                e[r++] = a.b,
                e[r++] = a.c
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, n = 0, i = 0, a = t.length; i < a; i++) {
                var o = t[i];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                o = new r),
                e[n++] = o.x,
                e[n++] = o.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, r = 0, n = 0, i = t.length; n < i; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n),
                a = new l),
                e[r++] = a.x,
                e[r++] = a.y,
                e[r++] = a.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, r = 0, n = 0, i = t.length; n < i; n++) {
                var o = t[n];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n),
                o = new a),
                e[r++] = o.x,
                e[r++] = o.y,
                e[r++] = o.z,
                e[r++] = o.w
            }
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e,
            this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e,
            this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e,
            this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e,
            this
        },
        setXY: function(t, e, r) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = r,
            this
        },
        setXYZ: function(t, e, r, n) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = r,
            this.array[t + 2] = n,
            this
        },
        setXYZW: function(t, e, r, n, i) {
            return t *= this.itemSize,
            this.array[t + 0] = e,
            this.array[t + 1] = r,
            this.array[t + 2] = n,
            this.array[t + 3] = i,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    },
    Object.assign(At.prototype, e.prototype, {
        isGeometry: !0,
        applyMatrix: function(t) {
            for (var e = (new nt).getNormalMatrix(t), r = 0, n = this.vertices.length; r < n; r++) {
                var i = this.vertices[r];
                i.applyMatrix4(t)
            }
            for (var r = 0, n = this.faces.length; r < n; r++) {
                var a = this.faces[r];
                a.normal.applyMatrix3(e).normalize();
                for (var o = 0, s = a.vertexNormals.length; o < s; o++)
                    a.vertexNormals[o].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this.verticesNeedUpdate = !0,
            this.normalsNeedUpdate = !0,
            this
        },
        rotateX: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u),
                t.makeRotationX(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateY: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u),
                t.makeRotationY(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateZ: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u),
                t.makeRotationZ(e),
                this.applyMatrix(t),
                this
            }
        }(),
        translate: function() {
            var t;
            return function(e, r, n) {
                return void 0 === t && (t = new u),
                t.makeTranslation(e, r, n),
                this.applyMatrix(t),
                this
            }
        }(),
        scale: function() {
            var t;
            return function(e, r, n) {
                return void 0 === t && (t = new u),
                t.makeScale(e, r, n),
                this.applyMatrix(t),
                this
            }
        }(),
        lookAt: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new lt),
                t.lookAt(e),
                t.updateMatrix(),
                this.applyMatrix(t.matrix)
            }
        }(),
        fromBufferGeometry: function(t) {
            function e(t, e, r, i) {
                var a = void 0 !== s ? [p[t].clone(), p[e].clone(), p[r].clone()] : []
                  , o = void 0 !== c ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[r].clone()] : []
                  , l = new ft(t,e,r,a,o,i);
                n.faces.push(l),
                void 0 !== h && n.faceVertexUvs[0].push([d[t].clone(), d[e].clone(), d[r].clone()]),
                void 0 !== u && n.faceVertexUvs[1].push([f[t].clone(), f[e].clone(), f[r].clone()])
            }
            var n = this
              , i = null !== t.index ? t.index.array : void 0
              , a = t.attributes
              , o = a.position.array
              , s = void 0 !== a.normal ? a.normal.array : void 0
              , c = void 0 !== a.color ? a.color.array : void 0
              , h = void 0 !== a.uv ? a.uv.array : void 0
              , u = void 0 !== a.uv2 ? a.uv2.array : void 0;
            void 0 !== u && (this.faceVertexUvs[1] = []);
            for (var p = [], d = [], f = [], m = 0, g = 0; m < o.length; m += 3,
            g += 2)
                n.vertices.push(new l(o[m],o[m + 1],o[m + 2])),
                void 0 !== s && p.push(new l(s[m],s[m + 1],s[m + 2])),
                void 0 !== c && n.colors.push(new q(c[m],c[m + 1],c[m + 2])),
                void 0 !== h && d.push(new r(h[g],h[g + 1])),
                void 0 !== u && f.push(new r(u[g],u[g + 1]));
            if (void 0 !== i) {
                var v = t.groups;
                if (v.length > 0)
                    for (var m = 0; m < v.length; m++)
                        for (var y = v[m], x = y.start, _ = y.count, g = x, b = x + _; g < b; g += 3)
                            e(i[g], i[g + 1], i[g + 2], y.materialIndex);
                else
                    for (var m = 0; m < i.length; m += 3)
                        e(i[m], i[m + 1], i[m + 2])
            } else
                for (var m = 0; m < o.length / 3; m += 3)
                    e(m, m + 1, m + 2);
            return this.computeFaceNormals(),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            this
        },
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z),
            t
        },
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center
              , e = this.boundingSphere.radius
              , r = 0 === e ? 1 : 1 / e
              , n = new u;
            return n.set(r, 0, 0, -r * t.x, 0, r, 0, -r * t.y, 0, 0, r, -r * t.z, 0, 0, 0, 1),
            this.applyMatrix(n),
            this
        },
        computeFaceNormals: function() {
            for (var t = new l, e = new l, r = 0, n = this.faces.length; r < n; r++) {
                var i = this.faces[r]
                  , a = this.vertices[i.a]
                  , o = this.vertices[i.b]
                  , s = this.vertices[i.c];
                t.subVectors(s, o),
                e.subVectors(a, o),
                t.cross(e),
                t.normalize(),
                i.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            void 0 === t && (t = !0);
            var e, r, n, i, a, o;
            for (o = new Array(this.vertices.length),
            e = 0,
            r = this.vertices.length; e < r; e++)
                o[e] = new l;
            if (t) {
                var s, c, h, u = new l, p = new l;
                for (n = 0,
                i = this.faces.length; n < i; n++)
                    a = this.faces[n],
                    s = this.vertices[a.a],
                    c = this.vertices[a.b],
                    h = this.vertices[a.c],
                    u.subVectors(h, c),
                    p.subVectors(s, c),
                    u.cross(p),
                    o[a.a].add(u),
                    o[a.b].add(u),
                    o[a.c].add(u)
            } else
                for (n = 0,
                i = this.faces.length; n < i; n++)
                    a = this.faces[n],
                    o[a.a].add(a.normal),
                    o[a.b].add(a.normal),
                    o[a.c].add(a.normal);
            for (e = 0,
            r = this.vertices.length; e < r; e++)
                o[e].normalize();
            for (n = 0,
            i = this.faces.length; n < i; n++) {
                a = this.faces[n];
                var d = a.vertexNormals;
                3 === d.length ? (d[0].copy(o[a.a]),
                d[1].copy(o[a.b]),
                d[2].copy(o[a.c])) : (d[0] = o[a.a].clone(),
                d[1] = o[a.b].clone(),
                d[2] = o[a.c].clone())
            }
            this.faces.length > 0 && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, r, n, i;
            for (r = 0,
            n = this.faces.length; r < n; r++)
                for (i = this.faces[r],
                i.__originalFaceNormal ? i.__originalFaceNormal.copy(i.normal) : i.__originalFaceNormal = i.normal.clone(),
                i.__originalVertexNormals || (i.__originalVertexNormals = []),
                t = 0,
                e = i.vertexNormals.length; t < e; t++)
                    i.__originalVertexNormals[t] ? i.__originalVertexNormals[t].copy(i.vertexNormals[t]) : i.__originalVertexNormals[t] = i.vertexNormals[t].clone();
            var a = new At;
            for (a.faces = this.faces,
            t = 0,
            e = this.morphTargets.length; t < e; t++) {
                if (!this.morphNormals[t]) {
                    this.morphNormals[t] = {},
                    this.morphNormals[t].faceNormals = [],
                    this.morphNormals[t].vertexNormals = [];
                    var o, s, c = this.morphNormals[t].faceNormals, h = this.morphNormals[t].vertexNormals;
                    for (r = 0,
                    n = this.faces.length; r < n; r++)
                        o = new l,
                        s = {
                            a: new l,
                            b: new l,
                            c: new l
                        },
                        c.push(o),
                        h.push(s)
                }
                var u = this.morphNormals[t];
                a.vertices = this.morphTargets[t].vertices,
                a.computeFaceNormals(),
                a.computeVertexNormals();
                var o, s;
                for (r = 0,
                n = this.faces.length; r < n; r++)
                    i = this.faces[r],
                    o = u.faceNormals[r],
                    s = u.vertexNormals[r],
                    o.copy(i.normal),
                    s.a.copy(i.vertexNormals[0]),
                    s.b.copy(i.vertexNormals[1]),
                    s.c.copy(i.vertexNormals[2])
            }
            for (r = 0,
            n = this.faces.length; r < n; r++)
                i = this.faces[r],
                i.normal = i.__originalFaceNormal,
                i.vertexNormals = i.__originalVertexNormals
        },
        computeTangents: function() {
            console.warn("THREE.Geometry: .computeTangents() has been removed.")
        },
        computeLineDistances: function() {
            for (var t = 0, e = this.vertices, r = 0, n = e.length; r < n; r++)
                r > 0 && (t += e[r].distanceTo(e[r - 1])),
                this.lineDistances[r] = t
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new et),
            this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new rt),
            this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, r) {
            if ((t && t.isGeometry) === !1)
                return void console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t);
            var n, i = this.vertices.length, a = this.vertices, o = t.vertices, s = this.faces, c = t.faces, h = this.faceVertexUvs[0], l = t.faceVertexUvs[0], u = this.colors, p = t.colors;
            void 0 === r && (r = 0),
            void 0 !== e && (n = (new nt).getNormalMatrix(e));
            for (var d = 0, f = o.length; d < f; d++) {
                var m = o[d]
                  , g = m.clone();
                void 0 !== e && g.applyMatrix4(e),
                a.push(g)
            }
            for (var d = 0, f = p.length; d < f; d++)
                u.push(p[d].clone());
            for (d = 0,
            f = c.length; d < f; d++) {
                var v, y, x, _ = c[d], b = _.vertexNormals, w = _.vertexColors;
                v = new ft(_.a + i,_.b + i,_.c + i),
                v.normal.copy(_.normal),
                void 0 !== n && v.normal.applyMatrix3(n).normalize();
                for (var M = 0, E = b.length; M < E; M++)
                    y = b[M].clone(),
                    void 0 !== n && y.applyMatrix3(n).normalize(),
                    v.vertexNormals.push(y);
                v.color.copy(_.color);
                for (var M = 0, E = w.length; M < E; M++)
                    x = w[M],
                    v.vertexColors.push(x.clone());
                v.materialIndex = _.materialIndex + r,
                s.push(v)
            }
            for (d = 0,
            f = l.length; d < f; d++) {
                var T = l[d]
                  , S = [];
                if (void 0 !== T) {
                    for (var M = 0, E = T.length; M < E; M++)
                        S.push(T[M].clone());
                    h.push(S)
                }
            }
        },
        mergeMesh: function(t) {
            return (t && t.isMesh) === !1 ? void console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t) : (t.matrixAutoUpdate && t.updateMatrix(),
            void this.merge(t.geometry, t.matrix))
        },
        mergeVertices: function() {
            var t, e, r, n, i, a, o, s, c = {}, h = [], l = [], u = 4, p = Math.pow(10, u);
            for (r = 0,
            n = this.vertices.length; r < n; r++)
                t = this.vertices[r],
                e = Math.round(t.x * p) + "_" + Math.round(t.y * p) + "_" + Math.round(t.z * p),
                void 0 === c[e] ? (c[e] = r,
                h.push(this.vertices[r]),
                l[r] = h.length - 1) : l[r] = l[c[e]];
            var d = [];
            for (r = 0,
            n = this.faces.length; r < n; r++) {
                i = this.faces[r],
                i.a = l[i.a],
                i.b = l[i.b],
                i.c = l[i.c],
                a = [i.a, i.b, i.c];
                for (var f = -1, m = 0; m < 3; m++)
                    if (a[m] === a[(m + 1) % 3]) {
                        f = m,
                        d.push(r);
                        break
                    }
            }
            for (r = d.length - 1; r >= 0; r--) {
                var g = d[r];
                for (this.faces.splice(g, 1),
                o = 0,
                s = this.faceVertexUvs.length; o < s; o++)
                    this.faceVertexUvs[o].splice(g, 1)
            }
            var v = this.vertices.length - h.length;
            return this.vertices = h,
            v
        },
        sortFacesByMaterialIndex: function() {
            function t(t, e) {
                return t.materialIndex - e.materialIndex
            }
            for (var e = this.faces, r = e.length, n = 0; n < r; n++)
                e[n]._id = n;
            e.sort(t);
            var i, a, o = this.faceVertexUvs[0], s = this.faceVertexUvs[1];
            o && o.length === r && (i = []),
            s && s.length === r && (a = []);
            for (var n = 0; n < r; n++) {
                var c = e[n]._id;
                i && i.push(o[c]),
                a && a.push(s[c])
            }
            i && (this.faceVertexUvs[0] = i),
            a && (this.faceVertexUvs[1] = a)
        },
        toJSON: function() {
            function t(t, e, r) {
                return r ? t | 1 << e : t & ~(1 << e)
            }
            function e(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== p[e] ? p[e] : (p[e] = u.length / 3,
                u.push(t.x, t.y, t.z),
                p[e])
            }
            function r(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== f[e] ? f[e] : (f[e] = d.length,
                d.push(t.getHex()),
                f[e])
            }
            function n(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2,
                m.push(t.x, t.y),
                g[e])
            }
            var i = {
                metadata: {
                    version: 4.4,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (i.uuid = this.uuid,
            i.type = this.type,
            "" !== this.name && (i.name = this.name),
            void 0 !== this.parameters) {
                var a = this.parameters;
                for (var o in a)
                    void 0 !== a[o] && (i[o] = a[o]);
                return i
            }
            for (var s = [], c = 0; c < this.vertices.length; c++) {
                var h = this.vertices[c];
                s.push(h.x, h.y, h.z)
            }
            for (var l = [], u = [], p = {}, d = [], f = {}, m = [], g = {}, c = 0; c < this.faces.length; c++) {
                var v = this.faces[c]
                  , y = !0
                  , x = !1
                  , _ = void 0 !== this.faceVertexUvs[0][c]
                  , b = v.normal.length() > 0
                  , w = v.vertexNormals.length > 0
                  , M = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b
                  , E = v.vertexColors.length > 0
                  , T = 0;
                if (T = t(T, 0, 0),
                T = t(T, 1, y),
                T = t(T, 2, x),
                T = t(T, 3, _),
                T = t(T, 4, b),
                T = t(T, 5, w),
                T = t(T, 6, M),
                T = t(T, 7, E),
                l.push(T),
                l.push(v.a, v.b, v.c),
                l.push(v.materialIndex),
                _) {
                    var S = this.faceVertexUvs[0][c];
                    l.push(n(S[0]), n(S[1]), n(S[2]))
                }
                if (b && l.push(e(v.normal)),
                w) {
                    var A = v.vertexNormals;
                    l.push(e(A[0]), e(A[1]), e(A[2]))
                }
                if (M && l.push(r(v.color)),
                E) {
                    var L = v.vertexColors;
                    l.push(r(L[0]), r(L[1]), r(L[2]))
                }
            }
            return i.data = {},
            i.data.vertices = s,
            i.data.normals = u,
            d.length > 0 && (i.data.colors = d),
            m.length > 0 && (i.data.uvs = [m]),
            i.data.faces = l,
            i
        },
        clone: function() {
            return (new At).copy(this)
        },
        copy: function(t) {
            this.vertices = [],
            this.faces = [],
            this.faceVertexUvs = [[]],
            this.colors = [];
            for (var e = t.vertices, r = 0, n = e.length; r < n; r++)
                this.vertices.push(e[r].clone());
            for (var i = t.colors, r = 0, n = i.length; r < n; r++)
                this.colors.push(i[r].clone());
            for (var a = t.faces, r = 0, n = a.length; r < n; r++)
                this.faces.push(a[r].clone());
            for (var r = 0, n = t.faceVertexUvs.length; r < n; r++) {
                var o = t.faceVertexUvs[r];
                void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
                for (var s = 0, c = o.length; s < c; s++) {
                    for (var h = o[s], l = [], u = 0, p = h.length; u < p; u++) {
                        var d = h[u];
                        l.push(d.clone())
                    }
                    this.faceVertexUvs[r].push(l)
                }
            }
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    });
    var Bc = 0;
    Object.assign(Rt.prototype, e.prototype, {
        computeBoundingBox: At.prototype.computeBoundingBox,
        computeBoundingSphere: At.prototype.computeBoundingSphere,
        computeFaceNormals: function() {
            console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
        },
        computeVertexNormals: function() {
            console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
        },
        computeGroups: function(t) {
            for (var e, r, n = [], i = t.faces, a = 0; a < i.length; a++) {
                var o = i[a];
                o.materialIndex !== r && (r = o.materialIndex,
                void 0 !== e && (e.count = 3 * a - e.start,
                n.push(e)),
                e = {
                    start: 3 * a,
                    materialIndex: r
                })
            }
            void 0 !== e && (e.count = 3 * a - e.start,
            n.push(e)),
            this.groups = n
        },
        fromGeometry: function(t) {
            var e, n = t.faces, i = t.vertices, a = t.faceVertexUvs, o = a[0] && a[0].length > 0, s = a[1] && a[1].length > 0, c = t.morphTargets, h = c.length;
            if (h > 0) {
                e = [];
                for (var l = 0; l < h; l++)
                    e[l] = [];
                this.morphTargets.position = e
            }
            var u, p = t.morphNormals, d = p.length;
            if (d > 0) {
                u = [];
                for (var l = 0; l < d; l++)
                    u[l] = [];
                this.morphTargets.normal = u
            }
            for (var f = t.skinIndices, m = t.skinWeights, g = f.length === i.length, v = m.length === i.length, l = 0; l < n.length; l++) {
                var y = n[l];
                this.vertices.push(i[y.a], i[y.b], i[y.c]);
                var x = y.vertexNormals;
                if (3 === x.length)
                    this.normals.push(x[0], x[1], x[2]);
                else {
                    var _ = y.normal;
                    this.normals.push(_, _, _)
                }
                var b = y.vertexColors;
                if (3 === b.length)
                    this.colors.push(b[0], b[1], b[2]);
                else {
                    var w = y.color;
                    this.colors.push(w, w, w)
                }
                if (o === !0) {
                    var M = a[0][l];
                    void 0 !== M ? this.uvs.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l),
                    this.uvs.push(new r, new r, new r))
                }
                if (s === !0) {
                    var M = a[1][l];
                    void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l),
                    this.uvs2.push(new r, new r, new r))
                }
                for (var E = 0; E < h; E++) {
                    var T = c[E].vertices;
                    e[E].push(T[y.a], T[y.b], T[y.c])
                }
                for (var E = 0; E < d; E++) {
                    var S = p[E].vertexNormals[l];
                    u[E].push(S.a, S.b, S.c)
                }
                g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]),
                v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(t),
            this.verticesNeedUpdate = t.verticesNeedUpdate,
            this.normalsNeedUpdate = t.normalsNeedUpdate,
            this.colorsNeedUpdate = t.colorsNeedUpdate,
            this.uvsNeedUpdate = t.uvsNeedUpdate,
            this.groupsNeedUpdate = t.groupsNeedUpdate,
            this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Object.assign(Pt.prototype, e.prototype, {
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            this.index = t
        },
        addAttribute: function(t, e) {
            return (e && e.isBufferAttribute) === !1 && (e && e.isInterleavedBufferAttribute) === !1 ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),
            void this.addAttribute(t, new gt(arguments[1],arguments[2]))) : "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),
            void this.setIndex(e)) : (this.attributes[t] = e,
            this)
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        removeAttribute: function(t) {
            return delete this.attributes[t],
            this
        },
        addGroup: function(t, e, r) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== r ? r : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t,
            this.drawRange.count = e
        },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            void 0 !== e && (t.applyToVector3Array(e.array),
            e.needsUpdate = !0);
            var r = this.attributes.normal;
            if (void 0 !== r) {
                var n = (new nt).getNormalMatrix(t);
                n.applyToVector3Array(r.array),
                r.needsUpdate = !0
            }
            return null !== this.boundingBox && this.computeBoundingBox(),
            null !== this.boundingSphere && this.computeBoundingSphere(),
            this
        },
        rotateX: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u),
                t.makeRotationX(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateY: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u),
                t.makeRotationY(e),
                this.applyMatrix(t),
                this
            }
        }(),
        rotateZ: function() {
            var t;
            return function(e) {
                return void 0 === t && (t = new u),
                t.makeRotationZ(e),
                this.applyMatrix(t),
                this
            }
        }(),
        translate: function() {
            var t;
            return function(e, r, n) {
                return void 0 === t && (t = new u),
                t.makeTranslation(e, r, n),
                this.applyMatrix(t),
                this
            }
        }(),
        scale: function() {
            var t;
            return function(e, r, n) {
                return void 0 === t && (t = new u),
                t.makeScale(e, r, n),
                this.applyMatrix(t),
                this
            }
        }(),
        lookAt: function() {
            var t;
            return function(e) {
                void 0 === t && (t = new lt),
                t.lookAt(e),
                t.updateMatrix(),
                this.applyMatrix(t.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z),
            t
        },
        setFromObject: function(t) {
            var e = t.geometry;
            if (t && t.isPoints || t && t.isLine) {
                var r = new Et(3 * e.vertices.length,3)
                  , n = new Et(3 * e.colors.length,3);
                if (this.addAttribute("position", r.copyVector3sArray(e.vertices)),
                this.addAttribute("color", n.copyColorsArray(e.colors)),
                e.lineDistances && e.lineDistances.length === e.vertices.length) {
                    var i = new Et(e.lineDistances.length,1);
                    this.addAttribute("lineDistance", i.copyArray(e.lineDistances))
                }
                null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
                null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else
                t && t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        updateFromObject: function(t) {
            var e = t.geometry;
            if (t && t.isMesh) {
                var r = e.__directGeometry;
                if (e.elementsNeedUpdate === !0 && (r = void 0,
                e.elementsNeedUpdate = !1),
                void 0 === r)
                    return this.fromGeometry(e);
                r.verticesNeedUpdate = e.verticesNeedUpdate,
                r.normalsNeedUpdate = e.normalsNeedUpdate,
                r.colorsNeedUpdate = e.colorsNeedUpdate,
                r.uvsNeedUpdate = e.uvsNeedUpdate,
                r.groupsNeedUpdate = e.groupsNeedUpdate,
                e.verticesNeedUpdate = !1,
                e.normalsNeedUpdate = !1,
                e.colorsNeedUpdate = !1,
                e.uvsNeedUpdate = !1,
                e.groupsNeedUpdate = !1,
                e = r
            }
            var n;
            return e.verticesNeedUpdate === !0 && (n = this.attributes.position,
            void 0 !== n && (n.copyVector3sArray(e.vertices),
            n.needsUpdate = !0),
            e.verticesNeedUpdate = !1),
            e.normalsNeedUpdate === !0 && (n = this.attributes.normal,
            void 0 !== n && (n.copyVector3sArray(e.normals),
            n.needsUpdate = !0),
            e.normalsNeedUpdate = !1),
            e.colorsNeedUpdate === !0 && (n = this.attributes.color,
            void 0 !== n && (n.copyColorsArray(e.colors),
            n.needsUpdate = !0),
            e.colorsNeedUpdate = !1),
            e.uvsNeedUpdate && (n = this.attributes.uv,
            void 0 !== n && (n.copyVector2sArray(e.uvs),
            n.needsUpdate = !0),
            e.uvsNeedUpdate = !1),
            e.lineDistancesNeedUpdate && (n = this.attributes.lineDistance,
            void 0 !== n && (n.copyArray(e.lineDistances),
            n.needsUpdate = !0),
            e.lineDistancesNeedUpdate = !1),
            e.groupsNeedUpdate && (e.computeGroups(t.geometry),
            this.groups = e.groups,
            e.groupsNeedUpdate = !1),
            this
        },
        fromGeometry: function(t) {
            return t.__directGeometry = (new Rt).fromGeometry(t),
            this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            if (this.addAttribute("position", new gt(e,3).copyVector3sArray(t.vertices)),
            t.normals.length > 0) {
                var r = new Float32Array(3 * t.normals.length);
                this.addAttribute("normal", new gt(r,3).copyVector3sArray(t.normals))
            }
            if (t.colors.length > 0) {
                var n = new Float32Array(3 * t.colors.length);
                this.addAttribute("color", new gt(n,3).copyColorsArray(t.colors))
            }
            if (t.uvs.length > 0) {
                var i = new Float32Array(2 * t.uvs.length);
                this.addAttribute("uv", new gt(i,2).copyVector2sArray(t.uvs))
            }
            if (t.uvs2.length > 0) {
                var a = new Float32Array(2 * t.uvs2.length);
                this.addAttribute("uv2", new gt(a,2).copyVector2sArray(t.uvs2))
            }
            if (t.indices.length > 0) {
                var o = t.vertices.length > 65535 ? Uint32Array : Uint16Array
                  , s = new o(3 * t.indices.length);
                this.setIndex(new gt(s,1).copyIndicesArray(t.indices))
            }
            this.groups = t.groups;
            for (var c in t.morphTargets) {
                for (var h = [], l = t.morphTargets[c], u = 0, p = l.length; u < p; u++) {
                    var d = l[u]
                      , f = new Et(3 * d.length,3);
                    h.push(f.copyVector3sArray(d))
                }
                this.morphAttributes[c] = h
            }
            if (t.skinIndices.length > 0) {
                var m = new Et(4 * t.skinIndices.length,4);
                this.addAttribute("skinIndex", m.copyVector4sArray(t.skinIndices))
            }
            if (t.skinWeights.length > 0) {
                var g = new Et(4 * t.skinWeights.length,4);
                this.addAttribute("skinWeight", g.copyVector4sArray(t.skinWeights))
            }
            return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()),
            this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new et);
            var t = this.attributes.position.array;
            void 0 !== t ? this.boundingBox.setFromArray(t) : this.boundingBox.makeEmpty(),
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var t = new et
              , e = new l;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new rt);
                var r = this.attributes.position;
                if (r) {
                    var n = r.array
                      , i = this.boundingSphere.center;
                    t.setFromArray(n),
                    t.getCenter(i);
                    for (var a = 0, o = 0, s = n.length; o < s; o += 3)
                        e.fromArray(n, o),
                        a = Math.max(a, i.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(a),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index
              , e = this.attributes
              , r = this.groups;
            if (e.position) {
                var n = e.position.array;
                if (void 0 === e.normal)
                    this.addAttribute("normal", new gt(new Float32Array(n.length),3));
                else
                    for (var i = e.normal.array, a = 0, o = i.length; a < o; a++)
                        i[a] = 0;
                var s, c, h, u = e.normal.array, p = new l, d = new l, f = new l, m = new l, g = new l;
                if (t) {
                    var v = t.array;
                    0 === r.length && this.addGroup(0, v.length);
                    for (var y = 0, x = r.length; y < x; ++y)
                        for (var _ = r[y], b = _.start, w = _.count, a = b, o = b + w; a < o; a += 3)
                            s = 3 * v[a + 0],
                            c = 3 * v[a + 1],
                            h = 3 * v[a + 2],
                            p.fromArray(n, s),
                            d.fromArray(n, c),
                            f.fromArray(n, h),
                            m.subVectors(f, d),
                            g.subVectors(p, d),
                            m.cross(g),
                            u[s] += m.x,
                            u[s + 1] += m.y,
                            u[s + 2] += m.z,
                            u[c] += m.x,
                            u[c + 1] += m.y,
                            u[c + 2] += m.z,
                            u[h] += m.x,
                            u[h + 1] += m.y,
                            u[h + 2] += m.z
                } else
                    for (var a = 0, o = n.length; a < o; a += 9)
                        p.fromArray(n, a),
                        d.fromArray(n, a + 3),
                        f.fromArray(n, a + 6),
                        m.subVectors(f, d),
                        g.subVectors(p, d),
                        m.cross(g),
                        u[a] = m.x,
                        u[a + 1] = m.y,
                        u[a + 2] = m.z,
                        u[a + 3] = m.x,
                        u[a + 4] = m.y,
                        u[a + 5] = m.z,
                        u[a + 6] = m.x,
                        u[a + 7] = m.y,
                        u[a + 8] = m.z;
                this.normalizeNormals(),
                e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if ((t && t.isBufferGeometry) === !1)
                return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0);
            var r = this.attributes;
            for (var n in r)
                if (void 0 !== t.attributes[n])
                    for (var i = r[n], a = i.array, o = t.attributes[n], s = o.array, c = o.itemSize, h = 0, l = c * e; h < s.length; h++,
                    l++)
                        a[l] = s[h];
            return this
        },
        normalizeNormals: function() {
            for (var t, e, r, n, i = this.attributes.normal.array, a = 0, o = i.length; a < o; a += 3)
                t = i[a],
                e = i[a + 1],
                r = i[a + 2],
                n = 1 / Math.sqrt(t * t + e * e + r * r),
                i[a] *= n,
                i[a + 1] *= n,
                i[a + 2] *= n
        },
        toNonIndexed: function() {
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),
                this;
            var t = new Pt
              , e = this.index.array
              , r = this.attributes;
            for (var n in r) {
                for (var i = r[n], a = i.array, o = i.itemSize, s = new a.constructor(e.length * o), c = 0, h = 0, l = 0, u = e.length; l < u; l++) {
                    c = e[l] * o;
                    for (var p = 0; p < o; p++)
                        s[h++] = a[c++]
                }
                t.addAttribute(n, new gt(s,o))
            }
            return t
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.4,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
            t.type = this.type,
            "" !== this.name && (t.name = this.name),
            void 0 !== this.parameters) {
                var e = this.parameters;
                for (var r in e)
                    void 0 !== e[r] && (t[r] = e[r]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var n = this.index;
            if (null !== n) {
                var i = Array.prototype.slice.call(n.array);
                t.data.index = {
                    type: n.array.constructor.name,
                    array: i
                }
            }
            var a = this.attributes;
            for (var r in a) {
                var o = a[r]
                  , i = Array.prototype.slice.call(o.array);
                t.data.attributes[r] = {
                    itemSize: o.itemSize,
                    type: o.array.constructor.name,
                    array: i,
                    normalized: o.normalized
                }
            }
            var s = this.groups;
            s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
            var c = this.boundingSphere;
            return null !== c && (t.data.boundingSphere = {
                center: c.center.toArray(),
                radius: c.radius
            }),
            t
        },
        clone: function() {
            return (new Pt).copy(this)
        },
        copy: function(t) {
            var e = t.index;
            null !== e && this.setIndex(e.clone());
            var r = t.attributes;
            for (var n in r) {
                var i = r[n];
                this.addAttribute(n, i.clone())
            }
            for (var a = t.groups, o = 0, s = a.length; o < s; o++) {
                var c = a[o];
                this.addGroup(c.start, c.count, c.materialIndex)
            }
            return this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
    Pt.MaxIndex = 65535,
    Ct.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Ct,
        isMesh: !0,
        setDrawMode: function(t) {
            this.drawMode = t
        },
        copy: function(t) {
            return lt.prototype.copy.call(this, t),
            this.drawMode = t.drawMode,
            this
        },
        updateMorphTargets: function() {
            var t = this.geometry.morphTargets;
            if (void 0 !== t && t.length > 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (var e = 0, r = t.length; e < r; e++)
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[t[e].name] = e
            }
        },
        raycast: function() {
            function t(t, e, r, n, i, a, o) {
                return dt.barycoordFromPoint(t, e, r, n, y),
                i.multiplyScalar(y.x),
                a.multiplyScalar(y.y),
                o.multiplyScalar(y.z),
                i.add(a).add(o),
                i.clone()
            }
            function e(t, e, r, n, i, a, o) {
                var s, c = t.material;
                if (s = c.side === bi ? r.intersectTriangle(a, i, n, !0, o) : r.intersectTriangle(n, i, a, c.side !== wi, o),
                null === s)
                    return null;
                _.copy(o),
                _.applyMatrix4(t.matrixWorld);
                var h = e.ray.origin.distanceTo(_);
                return h < e.near || h > e.far ? null : {
                    distance: h,
                    point: _.clone(),
                    object: t
                }
            }
            function n(r, n, i, a, o, l, u, p) {
                s.fromArray(a, 3 * l),
                c.fromArray(a, 3 * u),
                h.fromArray(a, 3 * p);
                var d = e(r, n, i, s, c, h, x);
                return d && (o && (m.fromArray(o, 2 * l),
                g.fromArray(o, 2 * u),
                v.fromArray(o, 2 * p),
                d.uv = t(x, s, c, h, m, g, v)),
                d.face = new ft(l,u,p,dt.normal(s, c, h)),
                d.faceIndex = l),
                d
            }
            var i = new u
              , a = new st
              , o = new rt
              , s = new l
              , c = new l
              , h = new l
              , p = new l
              , d = new l
              , f = new l
              , m = new r
              , g = new r
              , v = new r
              , y = new l
              , x = new l
              , _ = new l;
            return function(r, l) {
                var u = this.geometry
                  , y = this.material
                  , _ = this.matrixWorld;
                if (void 0 !== y && (null === u.boundingSphere && u.computeBoundingSphere(),
                o.copy(u.boundingSphere),
                o.applyMatrix4(_),
                r.ray.intersectsSphere(o) !== !1 && (i.getInverse(_),
                a.copy(r.ray).applyMatrix4(i),
                null === u.boundingBox || a.intersectsBox(u.boundingBox) !== !1))) {
                    var b, w;
                    if (u && u.isBufferGeometry) {
                        var M, E, T, S = u.index, A = u.attributes, L = A.position.array;
                        if (void 0 !== A.uv && (b = A.uv.array),
                        null !== S)
                            for (var R = S.array, P = 0, C = R.length; P < C; P += 3)
                                M = R[P],
                                E = R[P + 1],
                                T = R[P + 2],
                                w = n(this, r, a, L, b, M, E, T),
                                w && (w.faceIndex = Math.floor(P / 3),
                                l.push(w));
                        else
                            for (var P = 0, C = L.length; P < C; P += 9)
                                M = P / 3,
                                E = M + 1,
                                T = M + 2,
                                w = n(this, r, a, L, b, M, E, T),
                                w && (w.index = M,
                                l.push(w))
                    } else if (u && u.isGeometry) {
                        var U, I, D, N = y && y.isMultiMaterial, O = N === !0 ? y.materials : null, F = u.vertices, z = u.faces, B = u.faceVertexUvs[0];
                        B.length > 0 && (b = B);
                        for (var G = 0, H = z.length; G < H; G++) {
                            var V = z[G]
                              , k = N === !0 ? O[V.materialIndex] : y;
                            if (void 0 !== k) {
                                if (U = F[V.a],
                                I = F[V.b],
                                D = F[V.c],
                                k.morphTargets === !0) {
                                    var j = u.morphTargets
                                      , W = this.morphTargetInfluences;
                                    s.set(0, 0, 0),
                                    c.set(0, 0, 0),
                                    h.set(0, 0, 0);
                                    for (var X = 0, q = j.length; X < q; X++) {
                                        var Y = W[X];
                                        if (0 !== Y) {
                                            var Z = j[X].vertices;
                                            s.addScaledVector(p.subVectors(Z[V.a], U), Y),
                                            c.addScaledVector(d.subVectors(Z[V.b], I), Y),
                                            h.addScaledVector(f.subVectors(Z[V.c], D), Y)
                                        }
                                    }
                                    s.add(U),
                                    c.add(I),
                                    h.add(D),
                                    U = s,
                                    I = c,
                                    D = h
                                }
                                if (w = e(this, r, a, U, I, D, x)) {
                                    if (b) {
                                        var J = b[G];
                                        m.copy(J[0]),
                                        g.copy(J[1]),
                                        v.copy(J[2]),
                                        w.uv = t(x, U, I, D, m, g, v)
                                    }
                                    w.face = V,
                                    w.faceIndex = G,
                                    l.push(w)
                                }
                            }
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Ut.prototype = Object.create(Pt.prototype),
    Ut.prototype.constructor = Ut,
    It.prototype = Object.create(Pt.prototype),
    It.prototype.constructor = It,
    Dt.prototype = Object.create(lt.prototype),
    Dt.prototype.constructor = Dt,
    Dt.prototype.isCamera = !0,
    Dt.prototype.getWorldDirection = function() {
        var t = new h;
        return function(e) {
            var r = e || new l;
            return this.getWorldQuaternion(t),
            r.set(0, 0, -1).applyQuaternion(t)
        }
    }(),
    Dt.prototype.lookAt = function() {
        var t = new u;
        return function(e) {
            t.lookAt(this.position, e, this.up),
            this.quaternion.setFromRotationMatrix(t)
        }
    }(),
    Dt.prototype.clone = function() {
        return (new this.constructor).copy(this)
    }
    ,
    Dt.prototype.copy = function(t) {
        return lt.prototype.copy.call(this, t),
        this.matrixWorldInverse.copy(t.matrixWorldInverse),
        this.projectionMatrix.copy(t.projectionMatrix),
        this
    }
    ,
    Nt.prototype = Object.assign(Object.create(Dt.prototype), {
        constructor: Nt,
        isPerspectiveCamera: !0,
        copy: function(t) {
            return Dt.prototype.copy.call(this, t),
            this.fov = t.fov,
            this.zoom = t.zoom,
            this.near = t.near,
            this.far = t.far,
            this.focus = t.focus,
            this.aspect = t.aspect,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this.filmGauge = t.filmGauge,
            this.filmOffset = t.filmOffset,
            this
        },
        setFocalLength: function(e) {
            var r = .5 * this.getFilmHeight() / e;
            this.fov = 2 * t.Math.RAD2DEG * Math.atan(r),
            this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var e = Math.tan(.5 * t.Math.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / e
        },
        getEffectiveFOV: function() {
            return 2 * t.Math.RAD2DEG * Math.atan(Math.tan(.5 * t.Math.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, r, n, i, a) {
            this.aspect = t / e,
            this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: r,
                offsetY: n,
                width: i,
                height: a
            },
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null,
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var e = this.near
              , r = e * Math.tan(.5 * t.Math.DEG2RAD * this.fov) / this.zoom
              , n = 2 * r
              , i = this.aspect * n
              , a = -.5 * i
              , o = this.view;
            if (null !== o) {
                var s = o.fullWidth
                  , c = o.fullHeight;
                a += o.offsetX * i / s,
                r -= o.offsetY * n / c,
                i *= o.width / s,
                n *= o.height / c
            }
            var h = this.filmOffset;
            0 !== h && (a += e * h / this.getFilmWidth()),
            this.projectionMatrix.makeFrustum(a, a + i, r - n, r, e, this.far)
        },
        toJSON: function(t) {
            var e = lt.prototype.toJSON.call(this, t);
            return e.object.fov = this.fov,
            e.object.zoom = this.zoom,
            e.object.near = this.near,
            e.object.far = this.far,
            e.object.focus = this.focus,
            e.object.aspect = this.aspect,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e.object.filmGauge = this.filmGauge,
            e.object.filmOffset = this.filmOffset,
            e
        }
    }),
    Ot.prototype = Object.assign(Object.create(Dt.prototype), {
        constructor: Ot,
        isOrthographicCamera: !0,
        copy: function(t) {
            return Dt.prototype.copy.call(this, t),
            this.left = t.left,
            this.right = t.right,
            this.top = t.top,
            this.bottom = t.bottom,
            this.near = t.near,
            this.far = t.far,
            this.zoom = t.zoom,
            this.view = null === t.view ? null : Object.assign({}, t.view),
            this
        },
        setViewOffset: function(t, e, r, n, i, a) {
            this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: r,
                offsetY: n,
                width: i,
                height: a
            },
            this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null,
            this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom)
              , e = (this.top - this.bottom) / (2 * this.zoom)
              , r = (this.right + this.left) / 2
              , n = (this.top + this.bottom) / 2
              , i = r - t
              , a = r + t
              , o = n + e
              , s = n - e;
            if (null !== this.view) {
                var c = this.zoom / (this.view.width / this.view.fullWidth)
                  , h = this.zoom / (this.view.height / this.view.fullHeight)
                  , l = (this.right - this.left) / this.view.width
                  , u = (this.top - this.bottom) / this.view.height;
                i += l * (this.view.offsetX / c),
                a = i + l * (this.view.width / c),
                o -= u * (this.view.offsetY / h),
                s = o - u * (this.view.height / h)
            }
            this.projectionMatrix.makeOrthographic(i, a, o, s, this.near, this.far)
        },
        toJSON: function(t) {
            var e = lt.prototype.toJSON.call(this, t);
            return e.object.zoom = this.zoom,
            e.object.left = this.left,
            e.object.right = this.right,
            e.object.top = this.top,
            e.object.bottom = this.bottom,
            e.object.near = this.near,
            e.object.far = this.far,
            null !== this.view && (e.object.view = Object.assign({}, this.view)),
            e
        }
    });
    var Gc = 0;
    le.prototype.isFogExp2 = !0,
    le.prototype.clone = function() {
        return new le(this.color.getHex(),this.density)
    }
    ,
    le.prototype.toJSON = function(t) {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }
    ,
    ue.prototype.isFog = !0,
    ue.prototype.clone = function() {
        return new ue(this.color.getHex(),this.near,this.far)
    }
    ,
    ue.prototype.toJSON = function(t) {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }
    ,
    pe.prototype = Object.create(lt.prototype),
    pe.prototype.constructor = pe,
    pe.prototype.copy = function(t, e) {
        return lt.prototype.copy.call(this, t, e),
        null !== t.background && (this.background = t.background.clone()),
        null !== t.fog && (this.fog = t.fog.clone()),
        null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()),
        this.autoUpdate = t.autoUpdate,
        this.matrixAutoUpdate = t.matrixAutoUpdate,
        this
    }
    ,
    pe.prototype.toJSON = function(t) {
        var e = lt.prototype.toJSON.call(this, t);
        return null !== this.background && (e.object.background = this.background.toJSON(t)),
        null !== this.fog && (e.object.fog = this.fog.toJSON()),
        e
    }
    ,
    de.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: de,
        isLensFlare: !0,
        copy: function(t) {
            lt.prototype.copy.call(this, t),
            this.positionScreen.copy(t.positionScreen),
            this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, r = t.lensFlares.length; e < r; e++)
                this.lensFlares.push(t.lensFlares[e]);
            return this
        },
        add: function(t, e, r, n, i, a) {
            void 0 === e && (e = -1),
            void 0 === r && (r = 0),
            void 0 === a && (a = 1),
            void 0 === i && (i = new q(16777215)),
            void 0 === n && (n = Ri),
            r = Math.min(r, Math.max(0, r)),
            this.lensFlares.push({
                texture: t,
                size: e,
                distance: r,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: a,
                color: i,
                blending: n
            })
        },
        updateLensFlares: function() {
            var t, e, r = this.lensFlares.length, n = 2 * -this.positionScreen.x, i = 2 * -this.positionScreen.y;
            for (t = 0; t < r; t++)
                e = this.lensFlares[t],
                e.x = this.positionScreen.x + n * e.distance,
                e.y = this.positionScreen.y + i * e.distance,
                e.wantedRotation = e.x * Math.PI * .25,
                e.rotation += .25 * (e.wantedRotation - e.rotation)
        }
    }),
    fe.prototype = Object.create(Q.prototype),
    fe.prototype.constructor = fe,
    fe.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.rotation = t.rotation,
        this
    }
    ,
    me.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: me,
        isSprite: !0,
        raycast: function() {
            var t = new l;
            return function(e, r) {
                t.setFromMatrixPosition(this.matrixWorld);
                var n = e.ray.distanceSqToPoint(t)
                  , i = this.scale.x * this.scale.y / 4;
                n > i || r.push({
                    distance: Math.sqrt(n),
                    point: this.position,
                    face: null,
                    object: this
                })
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        }
    }),
    ge.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: ge,
        copy: function(t) {
            lt.prototype.copy.call(this, t, !1);
            for (var e = t.levels, r = 0, n = e.length; r < n; r++) {
                var i = e[r];
                this.addLevel(i.object.clone(), i.distance)
            }
            return this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0),
            e = Math.abs(e);
            for (var r = this.levels, n = 0; n < r.length && !(e < r[n].distance); n++)
                ;
            r.splice(n, 0, {
                distance: e,
                object: t
            }),
            this.add(t)
        },
        getObjectForDistance: function(t) {
            for (var e = this.levels, r = 1, n = e.length; r < n && !(t < e[r].distance); r++)
                ;
            return e[r - 1].object
        },
        raycast: function() {
            var t = new l;
            return function(e, r) {
                t.setFromMatrixPosition(this.matrixWorld);
                var n = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(n).raycast(e, r)
            }
        }(),
        update: function() {
            var t = new l
              , e = new l;
            return function(r) {
                var n = this.levels;
                if (n.length > 1) {
                    t.setFromMatrixPosition(r.matrixWorld),
                    e.setFromMatrixPosition(this.matrixWorld);
                    var i = t.distanceTo(e);
                    n[0].object.visible = !0;
                    for (var a = 1, o = n.length; a < o && i >= n[a].distance; a++)
                        n[a - 1].object.visible = !1,
                        n[a].object.visible = !0;
                    for (; a < o; a++)
                        n[a].object.visible = !1
                }
            }
        }(),
        toJSON: function(t) {
            var e = lt.prototype.toJSON.call(this, t);
            e.object.levels = [];
            for (var r = this.levels, n = 0, i = r.length; n < i; n++) {
                var a = r[n];
                e.object.levels.push({
                    object: a.object.uuid,
                    distance: a.distance
                })
            }
            return e
        }
    }),
    ve.prototype = Object.create(n.prototype),
    ve.prototype.constructor = ve,
    ve.prototype.isDataTexture = !0,
    Object.assign(ye.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var r = new u;
                this.bones[t] && r.getInverse(this.bones[t].matrixWorld),
                this.boneInverses.push(r)
            }
        },
        pose: function() {
            for (var t, e = 0, r = this.bones.length; e < r; e++)
                t = this.bones[e],
                t && t.matrixWorld.getInverse(this.boneInverses[e]);
            for (var e = 0, r = this.bones.length; e < r; e++)
                t = this.bones[e],
                t && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld),
                t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld),
                t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: function() {
            var t = new u;
            return function() {
                for (var e = 0, r = this.bones.length; e < r; e++) {
                    var n = this.bones[e] ? this.bones[e].matrixWorld : this.identityMatrix;
                    t.multiplyMatrices(n, this.boneInverses[e]),
                    t.toArray(this.boneMatrices, 16 * e)
                }
                this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new ye(this.bones,this.boneInverses,this.useVertexTexture)
        }
    }),
    xe.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: xe,
        isBone: !0,
        copy: function(t) {
            return lt.prototype.copy.call(this, t),
            this.skin = t.skin,
            this
        }
    }),
    _e.prototype = Object.assign(Object.create(Ct.prototype), {
        constructor: _e,
        isSkinnedMesh: !0,
        bind: function(t, e) {
            this.skeleton = t,
            void 0 === e && (this.updateMatrixWorld(!0),
            this.skeleton.calculateInverses(),
            e = this.matrixWorld),
            this.bindMatrix.copy(e),
            this.bindMatrixInverse.getInverse(e)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            if (this.geometry && this.geometry.isGeometry)
                for (var t = 0; t < this.geometry.skinWeights.length; t++) {
                    var e = this.geometry.skinWeights[t]
                      , r = 1 / e.lengthManhattan();
                    r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0)
                }
            else if (this.geometry && this.geometry.isBufferGeometry)
                for (var n = new a, i = this.geometry.attributes.skinWeight, t = 0; t < i.count; t++) {
                    n.x = i.getX(t),
                    n.y = i.getY(t),
                    n.z = i.getZ(t),
                    n.w = i.getW(t);
                    var r = 1 / n.lengthManhattan();
                    r !== 1 / 0 ? n.multiplyScalar(r) : n.set(1, 0, 0, 0),
                    i.setXYZW(t, n.x, n.y, n.z, n.w)
                }
        },
        updateMatrixWorld: function(t) {
            Ct.prototype.updateMatrixWorld.call(this, !0),
            "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this)
        }
    }),
    be.prototype = Object.create(Q.prototype),
    be.prototype.constructor = be,
    be.prototype.isLineBasicMaterial = !0,
    be.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.linewidth = t.linewidth,
        this.linecap = t.linecap,
        this.linejoin = t.linejoin,
        this
    }
    ,
    we.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: we,
        isLine: !0,
        raycast: function() {
            var t = new u
              , e = new st
              , r = new rt;
            return function(n, i) {
                var a = n.linePrecision
                  , o = a * a
                  , s = this.geometry
                  , c = this.matrixWorld;
                if (null === s.boundingSphere && s.computeBoundingSphere(),
                r.copy(s.boundingSphere),
                r.applyMatrix4(c),
                n.ray.intersectsSphere(r) !== !1) {
                    t.getInverse(c),
                    e.copy(n.ray).applyMatrix4(t);
                    var h = new l
                      , u = new l
                      , p = new l
                      , d = new l
                      , f = this && this.isLineSegments ? 2 : 1;
                    if (s && s.isBufferGeometry) {
                        var m = s.index
                          , g = s.attributes
                          , v = g.position.array;
                        if (null !== m)
                            for (var y = m.array, x = 0, _ = y.length - 1; x < _; x += f) {
                                var b = y[x]
                                  , w = y[x + 1];
                                h.fromArray(v, 3 * b),
                                u.fromArray(v, 3 * w);
                                var M = e.distanceSqToSegment(h, u, d, p);
                                if (!(M > o)) {
                                    d.applyMatrix4(this.matrixWorld);
                                    var E = n.ray.origin.distanceTo(d);
                                    E < n.near || E > n.far || i.push({
                                        distance: E,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: x,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            }
                        else
                            for (var x = 0, _ = v.length / 3 - 1; x < _; x += f) {
                                h.fromArray(v, 3 * x),
                                u.fromArray(v, 3 * x + 3);
                                var M = e.distanceSqToSegment(h, u, d, p);
                                if (!(M > o)) {
                                    d.applyMatrix4(this.matrixWorld);
                                    var E = n.ray.origin.distanceTo(d);
                                    E < n.near || E > n.far || i.push({
                                        distance: E,
                                        point: p.clone().applyMatrix4(this.matrixWorld),
                                        index: x,
                                        face: null,
                                        faceIndex: null,
                                        object: this
                                    })
                                }
                            }
                    } else if (s && s.isGeometry)
                        for (var T = s.vertices, S = T.length, x = 0; x < S - 1; x += f) {
                            var M = e.distanceSqToSegment(T[x], T[x + 1], d, p);
                            if (!(M > o)) {
                                d.applyMatrix4(this.matrixWorld);
                                var E = n.ray.origin.distanceTo(d);
                                E < n.near || E > n.far || i.push({
                                    distance: E,
                                    point: p.clone().applyMatrix4(this.matrixWorld),
                                    index: x,
                                    face: null,
                                    faceIndex: null,
                                    object: this
                                })
                            }
                        }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Me.prototype = Object.assign(Object.create(we.prototype), {
        constructor: Me,
        isLineSegments: !0
    }),
    Ee.prototype = Object.create(Q.prototype),
    Ee.prototype.constructor = Ee,
    Ee.prototype.isPointsMaterial = !0,
    Ee.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.size = t.size,
        this.sizeAttenuation = t.sizeAttenuation,
        this
    }
    ,
    Te.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Te,
        isPoints: !0,
        raycast: function() {
            var t = new u
              , e = new st
              , r = new rt;
            return function(n, i) {
                function a(t, r) {
                    var a = e.distanceSqToPoint(t);
                    if (a < p) {
                        var s = e.closestPointToPoint(t);
                        s.applyMatrix4(c);
                        var h = n.ray.origin.distanceTo(s);
                        if (h < n.near || h > n.far)
                            return;
                        i.push({
                            distance: h,
                            distanceToRay: Math.sqrt(a),
                            point: s.clone(),
                            index: r,
                            face: null,
                            object: o
                        })
                    }
                }
                var o = this
                  , s = this.geometry
                  , c = this.matrixWorld
                  , h = n.params.Points.threshold;
                if (null === s.boundingSphere && s.computeBoundingSphere(),
                r.copy(s.boundingSphere),
                r.applyMatrix4(c),
                n.ray.intersectsSphere(r) !== !1) {
                    t.getInverse(c),
                    e.copy(n.ray).applyMatrix4(t);
                    var u = h / ((this.scale.x + this.scale.y + this.scale.z) / 3)
                      , p = u * u
                      , d = new l;
                    if (s && s.isBufferGeometry) {
                        var f = s.index
                          , m = s.attributes
                          , g = m.position.array;
                        if (null !== f)
                            for (var v = f.array, y = 0, x = v.length; y < x; y++) {
                                var _ = v[y];
                                d.fromArray(g, 3 * _),
                                a(d, _)
                            }
                        else
                            for (var y = 0, b = g.length / 3; y < b; y++)
                                d.fromArray(g, 3 * y),
                                a(d, y)
                    } else
                        for (var w = s.vertices, y = 0, b = w.length; y < b; y++)
                            a(w[y], y)
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry,this.material).copy(this)
        }
    }),
    Se.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Se
    }),
    Ae.prototype = Object.create(n.prototype),
    Ae.prototype.constructor = Ae,
    Le.prototype = Object.create(n.prototype),
    Le.prototype.constructor = Le,
    Le.prototype.isCompressedTexture = !0,
    Re.prototype = Object.create(n.prototype),
    Re.prototype.constructor = Re,
    Pe.prototype = Object.create(n.prototype),
    Pe.prototype.constructor = Pe,
    Pe.prototype.isDepthTexture = !0,
    Ce.prototype = Object.create(Pt.prototype),
    Ce.prototype.constructor = Ce,
    Ue.prototype = Object.create(At.prototype),
    Ue.prototype.constructor = Ue,
    Ie.prototype = Object.create(At.prototype),
    Ie.prototype.constructor = Ie,
    De.prototype = Object.create(Ie.prototype),
    De.prototype.constructor = De,
    Ne.prototype = Object.create(Ie.prototype),
    Ne.prototype.constructor = Ne,
    Oe.prototype = Object.create(Ie.prototype),
    Oe.prototype.constructor = Oe,
    Fe.prototype = Object.create(Ie.prototype),
    Fe.prototype.constructor = Fe,
    ze.prototype = Object.create(At.prototype),
    ze.prototype.constructor = ze,
    ze.NoTaper = function(t) {
        return 1
    }
    ,
    ze.SinusoidalTaper = function(t) {
        return Math.sin(Math.PI * t)
    }
    ,
    ze.FrenetFrames = function(e, r, n) {
        function i() {
            g[0] = new l,
            v[0] = new l,
            o = Number.MAX_VALUE,
            s = Math.abs(m[0].x),
            c = Math.abs(m[0].y),
            h = Math.abs(m[0].z),
            s <= o && (o = s,
            f.set(1, 0, 0)),
            c <= o && (o = c,
            f.set(0, 1, 0)),
            h <= o && f.set(0, 0, 1),
            y.crossVectors(m[0], f).normalize(),
            g[0].crossVectors(m[0], y),
            v[0].crossVectors(m[0], g[0])
        }
        var a, o, s, c, h, p, d, f = new l, m = [], g = [], v = [], y = new l, x = new u, _ = r + 1;
        for (this.tangents = m,
        this.normals = g,
        this.binormals = v,
        p = 0; p < _; p++)
            d = p / (_ - 1),
            m[p] = e.getTangentAt(d),
            m[p].normalize();
        for (i(),
        p = 1; p < _; p++)
            g[p] = g[p - 1].clone(),
            v[p] = v[p - 1].clone(),
            y.crossVectors(m[p - 1], m[p]),
            y.length() > Number.EPSILON && (y.normalize(),
            a = Math.acos(t.Math.clamp(m[p - 1].dot(m[p]), -1, 1)),
            g[p].applyMatrix4(x.makeRotationAxis(y, a))),
            v[p].crossVectors(m[p], g[p]);
        if (n)
            for (a = Math.acos(t.Math.clamp(g[0].dot(g[_ - 1]), -1, 1)),
            a /= _ - 1,
            m[0].dot(y.crossVectors(g[0], g[_ - 1])) > 0 && (a = -a),
            p = 1; p < _; p++)
                g[p].applyMatrix4(x.makeRotationAxis(m[p], a * p)),
                v[p].crossVectors(m[p], g[p])
    }
    ,
    Be.prototype = Object.create(Pt.prototype),
    Be.prototype.constructor = Be,
    Ge.prototype = Object.create(At.prototype),
    Ge.prototype.constructor = Ge,
    He.prototype = Object.create(Pt.prototype),
    He.prototype.constructor = He,
    Ve.prototype = Object.create(At.prototype),
    Ve.prototype.constructor = Ve,
    t.ShapeUtils = {
        area: function(t) {
            for (var e = t.length, r = 0, n = e - 1, i = 0; i < e; n = i++)
                r += t[n].x * t[i].y - t[i].x * t[n].y;
            return .5 * r
        },
        triangulate: function() {
            function e(t, e, r, n, i, a) {
                var o, s, c, h, l, u, p, d, f;
                if (s = t[a[e]].x,
                c = t[a[e]].y,
                h = t[a[r]].x,
                l = t[a[r]].y,
                u = t[a[n]].x,
                p = t[a[n]].y,
                Number.EPSILON > (h - s) * (p - c) - (l - c) * (u - s))
                    return !1;
                var m, g, v, y, x, _, b, w, M, E, T, S, A, L, R;
                for (m = u - h,
                g = p - l,
                v = s - u,
                y = c - p,
                x = h - s,
                _ = l - c,
                o = 0; o < i; o++)
                    if (d = t[a[o]].x,
                    f = t[a[o]].y,
                    !(d === s && f === c || d === h && f === l || d === u && f === p) && (b = d - s,
                    w = f - c,
                    M = d - h,
                    E = f - l,
                    T = d - u,
                    S = f - p,
                    R = m * E - g * M,
                    A = x * w - _ * b,
                    L = v * S - y * T,
                    R >= -Number.EPSILON && L >= -Number.EPSILON && A >= -Number.EPSILON))
                        return !1;
                return !0
            }
            return function(r, n) {
                var i = r.length;
                if (i < 3)
                    return null;
                var a, o, s, c = [], h = [], l = [];
                if (t.ShapeUtils.area(r) > 0)
                    for (o = 0; o < i; o++)
                        h[o] = o;
                else
                    for (o = 0; o < i; o++)
                        h[o] = i - 1 - o;
                var u = i
                  , p = 2 * u;
                for (o = u - 1; u > 2; ) {
                    if (p-- <= 0)
                        return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"),
                        n ? l : c;
                    if (a = o,
                    u <= a && (a = 0),
                    o = a + 1,
                    u <= o && (o = 0),
                    s = o + 1,
                    u <= s && (s = 0),
                    e(r, a, o, s, u, h)) {
                        var d, f, m, g, v;
                        for (d = h[a],
                        f = h[o],
                        m = h[s],
                        c.push([r[d], r[f], r[m]]),
                        l.push([h[a], h[o], h[s]]),
                        g = o,
                        v = o + 1; v < u; g++,
                        v++)
                            h[g] = h[v];
                        u--,
                        p = 2 * u
                    }
                }
                return n ? l : c
            }
        }(),
        triangulateShape: function(e, r) {
            function n(t) {
                var e = t.length;
                e > 2 && t[e - 1].equals(t[0]) && t.pop();
            }
            function i(t, e, r) {
                return t.x !== e.x ? t.x < e.x ? t.x <= r.x && r.x <= e.x : e.x <= r.x && r.x <= t.x : t.y < e.y ? t.y <= r.y && r.y <= e.y : e.y <= r.y && r.y <= t.y
            }
            function a(t, e, r, n, a) {
                var o = e.x - t.x
                  , s = e.y - t.y
                  , c = n.x - r.x
                  , h = n.y - r.y
                  , l = t.x - r.x
                  , u = t.y - r.y
                  , p = s * c - o * h
                  , d = s * l - o * u;
                if (Math.abs(p) > Number.EPSILON) {
                    var f;
                    if (p > 0) {
                        if (d < 0 || d > p)
                            return [];
                        if (f = h * l - c * u,
                        f < 0 || f > p)
                            return []
                    } else {
                        if (d > 0 || d < p)
                            return [];
                        if (f = h * l - c * u,
                        f > 0 || f < p)
                            return []
                    }
                    if (0 === f)
                        return !a || 0 !== d && d !== p ? [t] : [];
                    if (f === p)
                        return !a || 0 !== d && d !== p ? [e] : [];
                    if (0 === d)
                        return [r];
                    if (d === p)
                        return [n];
                    var m = f / p;
                    return [{
                        x: t.x + m * o,
                        y: t.y + m * s
                    }]
                }
                if (0 !== d || h * l !== c * u)
                    return [];
                var g = 0 === o && 0 === s
                  , v = 0 === c && 0 === h;
                if (g && v)
                    return t.x !== r.x || t.y !== r.y ? [] : [t];
                if (g)
                    return i(r, n, t) ? [t] : [];
                if (v)
                    return i(t, e, r) ? [r] : [];
                var y, x, _, b, w, M, E, T;
                return 0 !== o ? (t.x < e.x ? (y = t,
                _ = t.x,
                x = e,
                b = e.x) : (y = e,
                _ = e.x,
                x = t,
                b = t.x),
                r.x < n.x ? (w = r,
                E = r.x,
                M = n,
                T = n.x) : (w = n,
                E = n.x,
                M = r,
                T = r.x)) : (t.y < e.y ? (y = t,
                _ = t.y,
                x = e,
                b = e.y) : (y = e,
                _ = e.y,
                x = t,
                b = t.y),
                r.y < n.y ? (w = r,
                E = r.y,
                M = n,
                T = n.y) : (w = n,
                E = n.y,
                M = r,
                T = r.y)),
                _ <= E ? b < E ? [] : b === E ? a ? [] : [w] : b <= T ? [w, x] : [w, M] : _ > T ? [] : _ === T ? a ? [] : [y] : b <= T ? [y, x] : [y, M]
            }
            function o(t, e, r, n) {
                var i = e.x - t.x
                  , a = e.y - t.y
                  , o = r.x - t.x
                  , s = r.y - t.y
                  , c = n.x - t.x
                  , h = n.y - t.y
                  , l = i * s - a * o
                  , u = i * h - a * c;
                if (Math.abs(l) > Number.EPSILON) {
                    var p = c * s - h * o;
                    return l > 0 ? u >= 0 && p >= 0 : u >= 0 || p >= 0
                }
                return u > 0
            }
            function s(t, e) {
                function r(t, e) {
                    var r = y.length - 1
                      , n = t - 1;
                    n < 0 && (n = r);
                    var i = t + 1;
                    i > r && (i = 0);
                    var a = o(y[t], y[n], y[i], s[e]);
                    if (!a)
                        return !1;
                    var c = s.length - 1
                      , h = e - 1;
                    h < 0 && (h = c);
                    var l = e + 1;
                    return l > c && (l = 0),
                    a = o(s[e], s[h], s[l], y[t]),
                    !!a
                }
                function n(t, e) {
                    var r, n, i;
                    for (r = 0; r < y.length; r++)
                        if (n = r + 1,
                        n %= y.length,
                        i = a(t, e, y[r], y[n], !0),
                        i.length > 0)
                            return !0;
                    return !1
                }
                function i(t, r) {
                    var n, i, o, s, c;
                    for (n = 0; n < x.length; n++)
                        for (i = e[x[n]],
                        o = 0; o < i.length; o++)
                            if (s = o + 1,
                            s %= i.length,
                            c = a(t, r, i[o], i[s], !0),
                            c.length > 0)
                                return !0;
                    return !1
                }
                for (var s, c, h, l, u, p, d, f, m, g, v, y = t.concat(), x = [], _ = [], b = 0, w = e.length; b < w; b++)
                    x.push(b);
                for (var M = 0, E = 2 * x.length; x.length > 0; ) {
                    if (E--,
                    E < 0) {
                        console.log("Infinite Loop! Holes left:" + x.length + ", Probably Hole outside Shape!");
                        break
                    }
                    for (h = M; h < y.length; h++) {
                        l = y[h],
                        c = -1;
                        for (var b = 0; b < x.length; b++)
                            if (p = x[b],
                            d = l.x + ":" + l.y + ":" + p,
                            void 0 === _[d]) {
                                s = e[p];
                                for (var T = 0; T < s.length; T++)
                                    if (u = s[T],
                                    r(h, T) && !n(l, u) && !i(l, u)) {
                                        c = T,
                                        x.splice(b, 1),
                                        f = y.slice(0, h + 1),
                                        m = y.slice(h),
                                        g = s.slice(c),
                                        v = s.slice(0, c + 1),
                                        y = f.concat(g).concat(v).concat(m),
                                        M = h;
                                        break
                                    }
                                if (c >= 0)
                                    break;
                                _[d] = !0
                            }
                        if (c >= 0)
                            break
                    }
                }
                return y
            }
            n(e),
            r.forEach(n);
            for (var c, h, l, u, p, d, f = {}, m = e.concat(), g = 0, v = r.length; g < v; g++)
                Array.prototype.push.apply(m, r[g]);
            for (c = 0,
            h = m.length; c < h; c++)
                p = m[c].x + ":" + m[c].y,
                void 0 !== f[p] && console.warn("THREE.ShapeUtils: Duplicate point", p, c),
                f[p] = c;
            var y = s(e, r)
              , x = t.ShapeUtils.triangulate(y, !1);
            for (c = 0,
            h = x.length; c < h; c++)
                for (u = x[c],
                l = 0; l < 3; l++)
                    p = u[l].x + ":" + u[l].y,
                    d = f[p],
                    void 0 !== d && (u[l] = d);
            return x.concat()
        },
        isClockWise: function(e) {
            return t.ShapeUtils.area(e) < 0
        },
        b2: function() {
            function t(t, e) {
                var r = 1 - t;
                return r * r * e
            }
            function e(t, e) {
                return 2 * (1 - t) * t * e
            }
            function r(t, e) {
                return t * t * e
            }
            return function(n, i, a, o) {
                return t(n, i) + e(n, a) + r(n, o)
            }
        }(),
        b3: function() {
            function t(t, e) {
                var r = 1 - t;
                return r * r * r * e
            }
            function e(t, e) {
                var r = 1 - t;
                return 3 * r * r * t * e
            }
            function r(t, e) {
                var r = 1 - t;
                return 3 * r * t * t * e
            }
            function n(t, e) {
                return t * t * t * e
            }
            return function(i, a, o, s, c) {
                return t(i, a) + e(i, o) + r(i, s) + n(i, c)
            }
        }()
    },
    ke.prototype = Object.create(At.prototype),
    ke.prototype.constructor = ke,
    ke.prototype.addShapeList = function(t, e) {
        for (var r = t.length, n = 0; n < r; n++) {
            var i = t[n];
            this.addShape(i, e)
        }
    }
    ,
    ke.prototype.addShape = function(e, n) {
        function i(t, e, r) {
            return e || console.error("THREE.ExtrudeGeometry: vec does not exist"),
            e.clone().multiplyScalar(r).add(t)
        }
        function a(t, e, n) {
            var i, a, o = 1, s = t.x - e.x, c = t.y - e.y, h = n.x - t.x, l = n.y - t.y, u = s * s + c * c, p = s * l - c * h;
            if (Math.abs(p) > Number.EPSILON) {
                var d = Math.sqrt(u)
                  , f = Math.sqrt(h * h + l * l)
                  , m = e.x - c / d
                  , g = e.y + s / d
                  , v = n.x - l / f
                  , y = n.y + h / f
                  , x = ((v - m) * l - (y - g) * h) / (s * l - c * h);
                i = m + s * x - t.x,
                a = g + c * x - t.y;
                var _ = i * i + a * a;
                if (_ <= 2)
                    return new r(i,a);
                o = Math.sqrt(_ / 2)
            } else {
                var b = !1;
                s > Number.EPSILON ? h > Number.EPSILON && (b = !0) : s < -Number.EPSILON ? h < -Number.EPSILON && (b = !0) : Math.sign(c) === Math.sign(l) && (b = !0),
                b ? (i = -c,
                a = s,
                o = Math.sqrt(u)) : (i = s,
                a = c,
                o = Math.sqrt(u / 2))
            }
            return new r(i / o,a / o)
        }
        function o() {
            if (w) {
                var t = 0
                  , e = W * t;
                for (Y = 0; Y < X; Y++)
                    j = F[Y],
                    u(j[2] + e, j[1] + e, j[0] + e);
                for (t = E + 2 * b,
                e = W * t,
                Y = 0; Y < X; Y++)
                    j = F[Y],
                    u(j[0] + e, j[1] + e, j[2] + e)
            } else {
                for (Y = 0; Y < X; Y++)
                    j = F[Y],
                    u(j[2], j[1], j[0]);
                for (Y = 0; Y < X; Y++)
                    j = F[Y],
                    u(j[0] + W * E, j[1] + W * E, j[2] + W * E)
            }
        }
        function s() {
            var t = 0;
            for (c(z, t),
            t += z.length,
            R = 0,
            P = N.length; R < P; R++)
                L = N[R],
                c(L, t),
                t += L.length
        }
        function c(t, e) {
            var r, n;
            for (Y = t.length; --Y >= 0; ) {
                r = Y,
                n = Y - 1,
                n < 0 && (n = t.length - 1);
                var i = 0
                  , a = E + 2 * b;
                for (i = 0; i < a; i++) {
                    var o = W * i
                      , s = W * (i + 1)
                      , c = e + r + o
                      , h = e + n + o
                      , l = e + n + s
                      , u = e + r + s;
                    p(c, h, l, u, t, i, a, r, n)
                }
            }
        }
        function h(t, e, r) {
            C.vertices.push(new l(t,e,r))
        }
        function u(t, e, r) {
            t += U,
            e += U,
            r += U,
            C.faces.push(new ft(t,e,r,null,null,0));
            var n = A.generateTopUV(C, t, e, r);
            C.faceVertexUvs[0].push(n)
        }
        function p(t, e, r, n, i, a, o, s, c) {
            t += U,
            e += U,
            r += U,
            n += U,
            C.faces.push(new ft(t,e,n,null,null,1)),
            C.faces.push(new ft(e,r,n,null,null,1));
            var h = A.generateSideWallUV(C, t, e, r, n);
            C.faceVertexUvs[0].push([h[0], h[1], h[3]]),
            C.faceVertexUvs[0].push([h[1], h[2], h[3]])
        }
        var d, f, m, g, v, y = void 0 !== n.amount ? n.amount : 100, x = void 0 !== n.bevelThickness ? n.bevelThickness : 6, _ = void 0 !== n.bevelSize ? n.bevelSize : x - 2, b = void 0 !== n.bevelSegments ? n.bevelSegments : 3, w = void 0 === n.bevelEnabled || n.bevelEnabled, M = void 0 !== n.curveSegments ? n.curveSegments : 12, E = void 0 !== n.steps ? n.steps : 1, T = n.extrudePath, S = !1, A = void 0 !== n.UVGenerator ? n.UVGenerator : ke.WorldUVGenerator;
        T && (d = T.getSpacedPoints(E),
        S = !0,
        w = !1,
        f = void 0 !== n.frames ? n.frames : new ze.FrenetFrames(T,E,(!1)),
        m = new l,
        g = new l,
        v = new l),
        w || (b = 0,
        x = 0,
        _ = 0);
        var L, R, P, C = this, U = this.vertices.length, I = e.extractPoints(M), D = I.shape, N = I.holes, O = !t.ShapeUtils.isClockWise(D);
        if (O) {
            for (D = D.reverse(),
            R = 0,
            P = N.length; R < P; R++)
                L = N[R],
                t.ShapeUtils.isClockWise(L) && (N[R] = L.reverse());
            O = !1
        }
        var F = t.ShapeUtils.triangulateShape(D, N)
          , z = D;
        for (R = 0,
        P = N.length; R < P; R++)
            L = N[R],
            D = D.concat(L);
        for (var B, G, H, V, k, j, W = D.length, X = F.length, q = [], Y = 0, Z = z.length, J = Z - 1, Q = Y + 1; Y < Z; Y++,
        J++,
        Q++)
            J === Z && (J = 0),
            Q === Z && (Q = 0),
            q[Y] = a(z[Y], z[J], z[Q]);
        var K, $ = [], tt = q.concat();
        for (R = 0,
        P = N.length; R < P; R++) {
            for (L = N[R],
            K = [],
            Y = 0,
            Z = L.length,
            J = Z - 1,
            Q = Y + 1; Y < Z; Y++,
            J++,
            Q++)
                J === Z && (J = 0),
                Q === Z && (Q = 0),
                K[Y] = a(L[Y], L[J], L[Q]);
            $.push(K),
            tt = tt.concat(K)
        }
        for (B = 0; B < b; B++) {
            for (H = B / b,
            V = x * Math.cos(H * Math.PI / 2),
            G = _ * Math.sin(H * Math.PI / 2),
            Y = 0,
            Z = z.length; Y < Z; Y++)
                k = i(z[Y], q[Y], G),
                h(k.x, k.y, -V);
            for (R = 0,
            P = N.length; R < P; R++)
                for (L = N[R],
                K = $[R],
                Y = 0,
                Z = L.length; Y < Z; Y++)
                    k = i(L[Y], K[Y], G),
                    h(k.x, k.y, -V)
        }
        for (G = _,
        Y = 0; Y < W; Y++)
            k = w ? i(D[Y], tt[Y], G) : D[Y],
            S ? (g.copy(f.normals[0]).multiplyScalar(k.x),
            m.copy(f.binormals[0]).multiplyScalar(k.y),
            v.copy(d[0]).add(g).add(m),
            h(v.x, v.y, v.z)) : h(k.x, k.y, 0);
        var et;
        for (et = 1; et <= E; et++)
            for (Y = 0; Y < W; Y++)
                k = w ? i(D[Y], tt[Y], G) : D[Y],
                S ? (g.copy(f.normals[et]).multiplyScalar(k.x),
                m.copy(f.binormals[et]).multiplyScalar(k.y),
                v.copy(d[et]).add(g).add(m),
                h(v.x, v.y, v.z)) : h(k.x, k.y, y / E * et);
        for (B = b - 1; B >= 0; B--) {
            for (H = B / b,
            V = x * Math.cos(H * Math.PI / 2),
            G = _ * Math.sin(H * Math.PI / 2),
            Y = 0,
            Z = z.length; Y < Z; Y++)
                k = i(z[Y], q[Y], G),
                h(k.x, k.y, y + V);
            for (R = 0,
            P = N.length; R < P; R++)
                for (L = N[R],
                K = $[R],
                Y = 0,
                Z = L.length; Y < Z; Y++)
                    k = i(L[Y], K[Y], G),
                    S ? h(k.x, k.y + d[E - 1].y, d[E - 1].x + V) : h(k.x, k.y, y + V)
        }
        o(),
        s()
    }
    ,
    ke.WorldUVGenerator = {
        generateTopUV: function(t, e, n, i) {
            var a = t.vertices
              , o = a[e]
              , s = a[n]
              , c = a[i];
            return [new r(o.x,o.y), new r(s.x,s.y), new r(c.x,c.y)]
        },
        generateSideWallUV: function(t, e, n, i, a) {
            var o = t.vertices
              , s = o[e]
              , c = o[n]
              , h = o[i]
              , l = o[a];
            return Math.abs(s.y - c.y) < .01 ? [new r(s.x,1 - s.z), new r(c.x,1 - c.z), new r(h.x,1 - h.z), new r(l.x,1 - l.z)] : [new r(s.y,1 - s.z), new r(c.y,1 - c.z), new r(h.y,1 - h.z), new r(l.y,1 - l.z)]
        }
    },
    je.prototype = Object.create(ke.prototype),
    je.prototype.constructor = je,
    We.prototype = Object.create(Pt.prototype),
    We.prototype.constructor = We,
    Xe.prototype = Object.create(At.prototype),
    Xe.prototype.constructor = Xe,
    qe.prototype = Object.create(Pt.prototype),
    qe.prototype.constructor = qe,
    Ye.prototype = Object.create(At.prototype),
    Ye.prototype.constructor = Ye,
    Ze.prototype = Object.create(At.prototype),
    Ze.prototype.constructor = Ze,
    Je.prototype = Object.create(Pt.prototype),
    Je.prototype.constructor = Je,
    Qe.prototype = Object.create(At.prototype),
    Qe.prototype.constructor = Qe,
    Ke.prototype = Object.create(At.prototype),
    Ke.prototype.constructor = Ke,
    Ke.prototype.addShapeList = function(t, e) {
        for (var r = 0, n = t.length; r < n; r++)
            this.addShape(t[r], e);
        return this
    }
    ,
    Ke.prototype.addShape = function(e, r) {
        void 0 === r && (r = {});
        var n, i, a, o = void 0 !== r.curveSegments ? r.curveSegments : 12, s = r.material, c = void 0 === r.UVGenerator ? ke.WorldUVGenerator : r.UVGenerator, h = this.vertices.length, u = e.extractPoints(o), p = u.shape, d = u.holes, f = !t.ShapeUtils.isClockWise(p);
        if (f) {
            for (p = p.reverse(),
            n = 0,
            i = d.length; n < i; n++)
                a = d[n],
                t.ShapeUtils.isClockWise(a) && (d[n] = a.reverse());
            f = !1
        }
        var m = t.ShapeUtils.triangulateShape(p, d);
        for (n = 0,
        i = d.length; n < i; n++)
            a = d[n],
            p = p.concat(a);
        var g, v, y = p.length, x = m.length;
        for (n = 0; n < y; n++)
            g = p[n],
            this.vertices.push(new l(g.x,g.y,0));
        for (n = 0; n < x; n++) {
            v = m[n];
            var _ = v[0] + h
              , b = v[1] + h
              , w = v[2] + h;
            this.faces.push(new ft(_,b,w,null,null,s)),
            this.faceVertexUvs[0].push(c.generateTopUV(this, _, b, w))
        }
    }
    ,
    $e.prototype = Object.create(Pt.prototype),
    $e.prototype.constructor = $e,
    tr.prototype = Object.create(Pt.prototype),
    tr.prototype.constructor = tr,
    er.prototype = Object.create(At.prototype),
    er.prototype.constructor = er,
    rr.prototype = Object.create(er.prototype),
    rr.prototype.constructor = rr,
    nr.prototype = Object.create(Pt.prototype),
    nr.prototype.constructor = nr,
    ir.prototype = Object.create(Pt.prototype),
    ir.prototype.constructor = ir,
    ar.prototype = Object.create(At.prototype),
    ar.prototype.constructor = ar,
    or.prototype = Object.create(At.prototype),
    or.prototype.constructor = or;
    var Hc = Object.freeze({
        WireframeGeometry: Ce,
        ParametricGeometry: Ue,
        TetrahedronGeometry: De,
        OctahedronGeometry: Ne,
        IcosahedronGeometry: Oe,
        DodecahedronGeometry: Fe,
        PolyhedronGeometry: Ie,
        TubeGeometry: ze,
        TorusKnotGeometry: Ge,
        TorusKnotBufferGeometry: Be,
        TorusGeometry: Ve,
        TorusBufferGeometry: He,
        TextGeometry: je,
        SphereBufferGeometry: We,
        SphereGeometry: Xe,
        RingGeometry: Ye,
        RingBufferGeometry: qe,
        PlaneBufferGeometry: It,
        PlaneGeometry: Ze,
        LatheGeometry: Qe,
        LatheBufferGeometry: Je,
        ShapeGeometry: Ke,
        ExtrudeGeometry: ke,
        EdgesGeometry: $e,
        ConeGeometry: rr,
        ConeBufferGeometry: nr,
        CylinderGeometry: er,
        CylinderBufferGeometry: tr,
        CircleBufferGeometry: ir,
        CircleGeometry: ar,
        BoxBufferGeometry: Ut,
        BoxGeometry: or
    });
    sr.prototype = Object.create($.prototype),
    sr.prototype.constructor = sr,
    sr.prototype.isShadowMaterial = !0,
    cr.prototype = Object.create($.prototype),
    cr.prototype.constructor = cr,
    cr.prototype.isRawShaderMaterial = !0,
    hr.prototype = {
        constructor: hr,
        isMultiMaterial: !0,
        toJSON: function(t) {
            for (var e = {
                metadata: {
                    version: 4.2,
                    type: "material",
                    generator: "MaterialExporter"
                },
                uuid: this.uuid,
                type: this.type,
                materials: []
            }, r = this.materials, n = 0, i = r.length; n < i; n++) {
                var a = r[n].toJSON(t);
                delete a.metadata,
                e.materials.push(a)
            }
            return e.visible = this.visible,
            e
        },
        clone: function() {
            for (var t = new this.constructor, e = 0; e < this.materials.length; e++)
                t.materials.push(this.materials[e].clone());
            return t.visible = this.visible,
            t
        }
    },
    lr.prototype = Object.create(Q.prototype),
    lr.prototype.constructor = lr,
    lr.prototype.isMeshStandardMaterial = !0,
    lr.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(t.color),
        this.roughness = t.roughness,
        this.metalness = t.metalness,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.roughnessMap = t.roughnessMap,
        this.metalnessMap = t.metalnessMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.envMapIntensity = t.envMapIntensity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    ur.prototype = Object.create(lr.prototype),
    ur.prototype.constructor = ur,
    ur.prototype.isMeshPhysicalMaterial = !0,
    ur.prototype.copy = function(t) {
        return lr.prototype.copy.call(this, t),
        this.defines = {
            PHYSICAL: ""
        },
        this.reflectivity = t.reflectivity,
        this.clearCoat = t.clearCoat,
        this.clearCoatRoughness = t.clearCoatRoughness,
        this
    }
    ,
    pr.prototype = Object.create(Q.prototype),
    pr.prototype.constructor = pr,
    pr.prototype.isMeshPhongMaterial = !0,
    pr.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.specular.copy(t.specular),
        this.shininess = t.shininess,
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.bumpMap = t.bumpMap,
        this.bumpScale = t.bumpScale,
        this.normalMap = t.normalMap,
        this.normalScale.copy(t.normalScale),
        this.displacementMap = t.displacementMap,
        this.displacementScale = t.displacementScale,
        this.displacementBias = t.displacementBias,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    dr.prototype = Object.create(Q.prototype),
    dr.prototype.constructor = dr,
    dr.prototype.isMeshNormalMaterial = !0,
    dr.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this
    }
    ,
    fr.prototype = Object.create(Q.prototype),
    fr.prototype.constructor = fr,
    fr.prototype.isMeshLambertMaterial = !0,
    fr.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.map = t.map,
        this.lightMap = t.lightMap,
        this.lightMapIntensity = t.lightMapIntensity,
        this.aoMap = t.aoMap,
        this.aoMapIntensity = t.aoMapIntensity,
        this.emissive.copy(t.emissive),
        this.emissiveMap = t.emissiveMap,
        this.emissiveIntensity = t.emissiveIntensity,
        this.specularMap = t.specularMap,
        this.alphaMap = t.alphaMap,
        this.envMap = t.envMap,
        this.combine = t.combine,
        this.reflectivity = t.reflectivity,
        this.refractionRatio = t.refractionRatio,
        this.wireframe = t.wireframe,
        this.wireframeLinewidth = t.wireframeLinewidth,
        this.wireframeLinecap = t.wireframeLinecap,
        this.wireframeLinejoin = t.wireframeLinejoin,
        this.skinning = t.skinning,
        this.morphTargets = t.morphTargets,
        this.morphNormals = t.morphNormals,
        this
    }
    ,
    mr.prototype = Object.create(Q.prototype),
    mr.prototype.constructor = mr,
    mr.prototype.isLineDashedMaterial = !0,
    mr.prototype.copy = function(t) {
        return Q.prototype.copy.call(this, t),
        this.color.copy(t.color),
        this.linewidth = t.linewidth,
        this.scale = t.scale,
        this.dashSize = t.dashSize,
        this.gapSize = t.gapSize,
        this
    }
    ;
    var Vc = Object.freeze({
        ShadowMaterial: sr,
        SpriteMaterial: fe,
        RawShaderMaterial: cr,
        ShaderMaterial: $,
        PointsMaterial: Ee,
        MultiMaterial: hr,
        MeshPhysicalMaterial: ur,
        MeshStandardMaterial: lr,
        MeshPhongMaterial: pr,
        MeshNormalMaterial: dr,
        MeshLambertMaterial: fr,
        MeshDepthMaterial: tt,
        MeshBasicMaterial: mt,
        LineDashedMaterial: mr,
        LineBasicMaterial: be,
        Material: Q
    });
    t.Cache = {
        enabled: !1,
        files: {},
        add: function(t, e) {
            this.enabled !== !1 && (this.files[t] = e)
        },
        get: function(t) {
            if (this.enabled !== !1)
                return this.files[t]
        },
        remove: function(t) {
            delete this.files[t]
        },
        clear: function() {
            this.files = {}
        }
    },
    t.DefaultLoadingManager = new gr,
    Object.assign(vr.prototype, {
        load: function(e, r, n, i) {
            void 0 !== this.path && (e = this.path + e);
            var a = this
              , o = t.Cache.get(e);
            if (void 0 !== o)
                return a.manager.itemStart(e),
                setTimeout(function() {
                    r && r(o),
                    a.manager.itemEnd(e)
                }, 0),
                o;
            var s = new XMLHttpRequest;
            return s.open("GET", e, !0),
            s.addEventListener("load", function(n) {
                var o = n.target.response;
                t.Cache.add(e, o),
                200 === this.status ? (r && r(o),
                a.manager.itemEnd(e)) : 0 === this.status ? (console.warn("THREE.XHRLoader: HTTP Status 0 received."),
                r && r(o),
                a.manager.itemEnd(e)) : (i && i(n),
                a.manager.itemError(e))
            }, !1),
            void 0 !== n && s.addEventListener("progress", function(t) {
                n(t)
            }, !1),
            s.addEventListener("error", function(t) {
                i && i(t),
                a.manager.itemError(e)
            }, !1),
            void 0 !== this.responseType && (s.responseType = this.responseType),
            void 0 !== this.withCredentials && (s.withCredentials = this.withCredentials),
            s.overrideMimeType && s.overrideMimeType("text/plain"),
            s.send(null),
            a.manager.itemStart(e),
            s
        },
        setPath: function(t) {
            return this.path = t,
            this
        },
        setResponseType: function(t) {
            return this.responseType = t,
            this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t,
            this
        }
    }),
    Object.assign(yr.prototype, {
        load: function(t, e, r, n) {
            function i(i) {
                c.load(t[i], function(t) {
                    var r = a._parser(t, !0);
                    o[i] = {
                        width: r.width,
                        height: r.height,
                        format: r.format,
                        mipmaps: r.mipmaps
                    },
                    h += 1,
                    6 === h && (1 === r.mipmapCount && (s.minFilter = Ra),
                    s.format = r.format,
                    s.needsUpdate = !0,
                    e && e(s))
                }, r, n)
            }
            var a = this
              , o = []
              , s = new Le;
            s.image = o;
            var c = new vr(this.manager);
            if (c.setPath(this.path),
            c.setResponseType("arraybuffer"),
            Array.isArray(t))
                for (var h = 0, l = 0, u = t.length; l < u; ++l)
                    i(l);
            else
                c.load(t, function(t) {
                    var r = a._parser(t, !0);
                    if (r.isCubemap)
                        for (var n = r.mipmaps.length / r.mipmapCount, i = 0; i < n; i++) {
                            o[i] = {
                                mipmaps: []
                            };
                            for (var c = 0; c < r.mipmapCount; c++)
                                o[i].mipmaps.push(r.mipmaps[i * r.mipmapCount + c]),
                                o[i].format = r.format,
                                o[i].width = r.width,
                                o[i].height = r.height
                        }
                    else
                        s.image.width = r.width,
                        s.image.height = r.height,
                        s.mipmaps = r.mipmaps;
                    1 === r.mipmapCount && (s.minFilter = Ra),
                    s.format = r.format,
                    s.needsUpdate = !0,
                    e && e(s)
                }, r, n);
            return s
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    });
    var kc = xr;
    Object.assign(xr.prototype, {
        load: function(t, e, r, n) {
            var i = this
              , a = new ve
              , o = new vr(this.manager);
            return o.setResponseType("arraybuffer"),
            o.load(t, function(t) {
                var r = i._parser(t);
                r && (void 0 !== r.image ? a.image = r.image : void 0 !== r.data && (a.image.width = r.width,
                a.image.height = r.height,
                a.image.data = r.data),
                a.wrapS = void 0 !== r.wrapS ? r.wrapS : Ma,
                a.wrapT = void 0 !== r.wrapT ? r.wrapT : Ma,
                a.magFilter = void 0 !== r.magFilter ? r.magFilter : Ra,
                a.minFilter = void 0 !== r.minFilter ? r.minFilter : Ca,
                a.anisotropy = void 0 !== r.anisotropy ? r.anisotropy : 1,
                void 0 !== r.format && (a.format = r.format),
                void 0 !== r.type && (a.type = r.type),
                void 0 !== r.mipmaps && (a.mipmaps = r.mipmaps),
                1 === r.mipmapCount && (a.minFilter = Ra),
                a.needsUpdate = !0,
                e && e(a, r))
            }, r, n),
            a
        }
    }),
    Object.assign(_r.prototype, {
        load: function(t, e, r, n) {
            var i = this
              , a = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
            if (a.onload = function() {
                a.onload = null,
                URL.revokeObjectURL(a.src),
                e && e(a),
                i.manager.itemEnd(t)
            }
            ,
            0 === t.indexOf("data:"))
                a.src = t;
            else {
                var o = new vr;
                o.setPath(this.path),
                o.setResponseType("blob"),
                o.setWithCredentials(this.withCredentials),
                o.load(t, function(t) {
                    a.src = URL.createObjectURL(t)
                }, r, n)
            }
            return i.manager.itemStart(t),
            a
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(br.prototype, {
        load: function(t, e, r, n) {
            function i(r) {
                o.load(t[r], function(t) {
                    a.images[r] = t,
                    s++,
                    6 === s && (a.needsUpdate = !0,
                    e && e(a))
                }, void 0, n)
            }
            var a = new p
              , o = new _r(this.manager);
            o.setCrossOrigin(this.crossOrigin),
            o.setPath(this.path);
            for (var s = 0, c = 0; c < t.length; ++c)
                i(c);
            return a
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Object.assign(wr.prototype, {
        load: function(t, e, r, i) {
            var a = new n
              , o = new _r(this.manager);
            return o.setCrossOrigin(this.crossOrigin),
            o.setWithCredentials(this.withCredentials),
            o.setPath(this.path),
            o.load(t, function(r) {
                var n = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
                a.format = n ? Xa : qa,
                a.image = r,
                a.needsUpdate = !0,
                void 0 !== e && e(a)
            }, r, i),
            a
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t,
            this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t,
            this
        },
        setPath: function(t) {
            return this.path = t,
            this
        }
    }),
    Mr.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Mr,
        isLight: !0,
        copy: function(t) {
            return lt.prototype.copy.call(this, t),
            this.color.copy(t.color),
            this.intensity = t.intensity,
            this
        },
        toJSON: function(t) {
            var e = lt.prototype.toJSON.call(this, t);
            return e.object.color = this.color.getHex(),
            e.object.intensity = this.intensity,
            void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
            void 0 !== this.distance && (e.object.distance = this.distance),
            void 0 !== this.angle && (e.object.angle = this.angle),
            void 0 !== this.decay && (e.object.decay = this.decay),
            void 0 !== this.penumbra && (e.object.penumbra = this.penumbra),
            void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()),
            e
        }
    }),
    Er.prototype = Object.assign(Object.create(Mr.prototype), {
        constructor: Er,
        isHemisphereLight: !0,
        copy: function(t) {
            return Mr.prototype.copy.call(this, t),
            this.groundColor.copy(t.groundColor),
            this
        }
    }),
    Object.assign(Tr.prototype, {
        copy: function(t) {
            return this.camera = t.camera.clone(),
            this.bias = t.bias,
            this.radius = t.radius,
            this.mapSize.copy(t.mapSize),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias),
            1 !== this.radius && (t.radius = this.radius),
            512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()),
            t.camera = this.camera.toJSON(!1).object,
            delete t.camera.matrix,
            t
        }
    }),
    Sr.prototype = Object.assign(Object.create(Tr.prototype), {
        constructor: Sr,
        isSpotLightShadow: !0,
        update: function(e) {
            var r = 2 * t.Math.RAD2DEG * e.angle
              , n = this.mapSize.width / this.mapSize.height
              , i = e.distance || 500
              , a = this.camera;
            r === a.fov && n === a.aspect && i === a.far || (a.fov = r,
            a.aspect = n,
            a.far = i,
            a.updateProjectionMatrix())
        }
    }),
    Ar.prototype = Object.assign(Object.create(Mr.prototype), {
        constructor: Ar,
        isSpotLight: !0,
        copy: function(t) {
            return Mr.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.angle = t.angle,
            this.penumbra = t.penumbra,
            this.decay = t.decay,
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    Lr.prototype = Object.assign(Object.create(Mr.prototype), {
        constructor: Lr,
        isPointLight: !0,
        copy: function(t) {
            return Mr.prototype.copy.call(this, t),
            this.distance = t.distance,
            this.decay = t.decay,
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    Rr.prototype = Object.assign(Object.create(Tr.prototype), {
        constructor: Rr
    }),
    Pr.prototype = Object.assign(Object.create(Mr.prototype), {
        constructor: Pr,
        isDirectionalLight: !0,
        copy: function(t) {
            return Mr.prototype.copy.call(this, t),
            this.target = t.target.clone(),
            this.shadow = t.shadow.clone(),
            this
        }
    }),
    Cr.prototype = Object.assign(Object.create(Mr.prototype), {
        constructor: Cr,
        isAmbientLight: !0
    }),
    t.AnimationUtils = {
        arraySlice: function(e, r, n) {
            return t.AnimationUtils.isTypedArray(e) ? new e.constructor(e.subarray(r, n)) : e.slice(r, n)
        },
        convertArray: function(t, e, r) {
            return !t || !r && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
            function e(e, r) {
                return t[e] - t[r]
            }
            for (var r = t.length, n = new Array(r), i = 0; i !== r; ++i)
                n[i] = i;
            return n.sort(e),
            n
        },
        sortedArray: function(t, e, r) {
            for (var n = t.length, i = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
                for (var s = r[a] * e, c = 0; c !== e; ++c)
                    i[o++] = t[s + c];
            return i
        },
        flattenJSON: function(t, e, r, n) {
            for (var i = 1, a = t[0]; void 0 !== a && void 0 === a[n]; )
                a = t[i++];
            if (void 0 !== a) {
                var o = a[n];
                if (void 0 !== o)
                    if (Array.isArray(o)) {
                        do
                            o = a[n],
                            void 0 !== o && (e.push(a.time),
                            r.push.apply(r, o)),
                            a = t[i++];
                        while (void 0 !== a)
                    } else if (void 0 !== o.toArray) {
                        do
                            o = a[n],
                            void 0 !== o && (e.push(a.time),
                            o.toArray(r, r.length)),
                            a = t[i++];
                        while (void 0 !== a)
                    } else
                        do
                            o = a[n],
                            void 0 !== o && (e.push(a.time),
                            r.push(o)),
                            a = t[i++];
                        while (void 0 !== a)
            }
        }
    },
    Ur.prototype = {
        constructor: Ur,
        evaluate: function(t) {
            var e = this.parameterPositions
              , r = this._cachedIndex
              , n = e[r]
              , i = e[r - 1];
            t: {
                e: {
                    var a;
                    r: {
                        n: if (!(t < n)) {
                            for (var o = r + 2; ; ) {
                                if (void 0 === n) {
                                    if (t < i)
                                        break n;
                                    return r = e.length,
                                    this._cachedIndex = r,
                                    this.afterEnd_(r - 1, t, i)
                                }
                                if (r === o)
                                    break;
                                if (i = n,
                                n = e[++r],
                                t < n)
                                    break e
                            }
                            a = e.length;
                            break r
                        }
                        {
                            if (t >= i)
                                break t;
                            var s = e[1];
                            t < s && (r = 2,
                            i = s);
                            for (var o = r - 2; ; ) {
                                if (void 0 === i)
                                    return this._cachedIndex = 0,
                                    this.beforeStart_(0, t, n);
                                if (r === o)
                                    break;
                                if (n = i,
                                i = e[--r - 1],
                                t >= i)
                                    break e
                            }
                            a = r,
                            r = 0
                        }
                    }
                    for (; r < a; ) {
                        var c = r + a >>> 1;
                        t < e[c] ? a = c : r = c + 1
                    }
                    if (n = e[r],
                    i = e[r - 1],
                    void 0 === i)
                        return this._cachedIndex = 0,
                        this.beforeStart_(0, t, n);
                    if (void 0 === n)
                        return r = e.length,
                        this._cachedIndex = r,
                        this.afterEnd_(r - 1, i, t)
                }
                this._cachedIndex = r,
                this.intervalChanged_(r, i, n)
            }
            return this.interpolate_(r, i, t, n)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            for (var e = this.resultBuffer, r = this.sampleValues, n = this.valueSize, i = t * n, a = 0; a !== n; ++a)
                e[a] = r[i + a];
            return e
        },
        interpolate_: function(t, e, r, n) {
            throw new Error("call to abstract method")
        },
        intervalChanged_: function(t, e, r) {}
    },
    Object.assign(Ur.prototype, {
        beforeStart_: Ur.prototype.copySampleValue_,
        afterEnd_: Ur.prototype.copySampleValue_
    }),
    Ir.prototype = Object.assign(Object.create(Ur.prototype), {
        constructor: Ir,
        DefaultSettings_: {
            endingStart: mo,
            endingEnd: mo
        },
        intervalChanged_: function(t, e, r) {
            var n = this.parameterPositions
              , i = t - 2
              , a = t + 1
              , o = n[i]
              , s = n[a];
            if (void 0 === o)
                switch (this.getSettings_().endingStart) {
                case go:
                    i = t,
                    o = 2 * e - r;
                    break;
                case vo:
                    i = n.length - 2,
                    o = e + n[i] - n[i + 1];
                    break;
                default:
                    i = t,
                    o = r
                }
            if (void 0 === s)
                switch (this.getSettings_().endingEnd) {
                case go:
                    a = t,
                    s = 2 * r - e;
                    break;
                case vo:
                    a = 1,
                    s = r + n[1] - n[0];
                    break;
                default:
                    a = t - 1,
                    s = e
                }
            var c = .5 * (r - e)
              , h = this.valueSize;
            this._weightPrev = c / (e - o),
            this._weightNext = c / (s - r),
            this._offsetPrev = i * h,
            this._offsetNext = a * h
        },
        interpolate_: function(t, e, r, n) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, p = this._weightNext, d = (r - e) / (n - e), f = d * d, m = f * d, g = -u * m + 2 * u * f - u * d, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-.5 + u) * d + 1, y = (-1 - p) * m + (1.5 + p) * f + .5 * d, x = p * m - p * f, _ = 0; _ !== o; ++_)
                i[_] = g * a[h + _] + v * a[c + _] + y * a[s + _] + x * a[l + _];
            return i
        }
    }),
    Dr.prototype = Object.assign(Object.create(Ur.prototype), {
        constructor: Dr,
        interpolate_: function(t, e, r, n) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (r - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u)
                i[u] = a[c + u] * l + a[s + u] * h;
            return i
        }
    }),
    Nr.prototype = Object.assign(Object.create(Ur.prototype), {
        constructor: Nr,
        interpolate_: function(t, e, r, n) {
            return this.copySampleValue_(t - 1)
        }
    });
    var jc;
    jc = {
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: po,
        InterpolantFactoryMethodDiscrete: function(t) {
            return new Nr(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodLinear: function(t) {
            return new Dr(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: function(t) {
            return new Ir(this.times,this.values,this.getValueSize(),t)
        },
        setInterpolation: function(t) {
            var e;
            switch (t) {
            case uo:
                e = this.InterpolantFactoryMethodDiscrete;
                break;
            case po:
                e = this.InterpolantFactoryMethodLinear;
                break;
            case fo:
                e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                var r = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
                if (void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation)
                        throw new Error(r);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                return void console.warn(r)
            }
            this.createInterpolant = e
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
            case this.InterpolantFactoryMethodDiscrete:
                return uo;
            case this.InterpolantFactoryMethodLinear:
                return po;
            case this.InterpolantFactoryMethodSmooth:
                return fo
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, r = 0, n = e.length; r !== n; ++r)
                    e[r] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, r = 0, n = e.length; r !== n; ++r)
                    e[r] *= t;
            return this
        },
        trim: function(e, r) {
            for (var n = this.times, i = n.length, a = 0, o = i - 1; a !== i && n[a] < e; )
                ++a;
            for (; o !== -1 && n[o] > r; )
                --o;
            if (++o,
            0 !== a || o !== i) {
                a >= o && (o = Math.max(o, 1),
                a = o - 1);
                var s = this.getValueSize();
                this.times = t.AnimationUtils.arraySlice(n, a, o),
                this.values = t.AnimationUtils.arraySlice(this.values, a * s, o * s)
            }
            return this
        },
        validate: function() {
            var e = !0
              , r = this.getValueSize();
            r - Math.floor(r) !== 0 && (console.error("invalid value size in track", this),
            e = !1);
            var n = this.times
              , i = this.values
              , a = n.length;
            0 === a && (console.error("track is empty", this),
            e = !1);
            for (var o = null, s = 0; s !== a; s++) {
                var c = n[s];
                if ("number" == typeof c && isNaN(c)) {
                    console.error("time is not a valid number", this, s, c),
                    e = !1;
                    break
                }
                if (null !== o && o > c) {
                    console.error("out of order keys", this, s, c, o),
                    e = !1;
                    break
                }
                o = c
            }
            if (void 0 !== i && t.AnimationUtils.isTypedArray(i))
                for (var s = 0, h = i.length; s !== h; ++s) {
                    var l = i[s];
                    if (isNaN(l)) {
                        console.error("value is not a valid number", this, s, l),
                        e = !1;
                        break
                    }
                }
            return e
        },
        optimize: function() {
            for (var e = this.times, r = this.values, n = this.getValueSize(), i = this.getInterpolation() === fo, a = 1, o = e.length - 1, s = 1; s < o; ++s) {
                var c = !1
                  , h = e[s]
                  , l = e[s + 1];
                if (h !== l && (1 !== s || h !== h[0]))
                    if (i)
                        c = !0;
                    else
                        for (var u = s * n, p = u - n, d = u + n, f = 0; f !== n; ++f) {
                            var m = r[u + f];
                            if (m !== r[p + f] || m !== r[d + f]) {
                                c = !0;
                                break
                            }
                        }
                if (c) {
                    if (s !== a) {
                        e[a] = e[s];
                        for (var g = s * n, v = a * n, f = 0; f !== n; ++f)
                            r[v + f] = r[g + f]
                    }
                    ++a
                }
            }
            if (o > 0) {
                e[a] = e[o];
                for (var g = o * n, v = a * n, f = 0; f !== n; ++f)
                    r[v + f] = r[g + f];
                ++a
            }
            return a !== e.length && (this.times = t.AnimationUtils.arraySlice(e, 0, a),
            this.values = t.AnimationUtils.arraySlice(r, 0, a * n)),
            this
        }
    },
    Fr.prototype = Object.assign(Object.create(jc), {
        constructor: Fr,
        ValueTypeName: "vector"
    }),
    zr.prototype = Object.assign(Object.create(Ur.prototype), {
        constructor: zr,
        interpolate_: function(t, e, r, n) {
            for (var i = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = (r - e) / (n - e), l = s + o; s !== l; s += 4)
                h.slerpFlat(i, 0, a, s - o, a, s, c);
            return i
        }
    }),
    Br.prototype = Object.assign(Object.create(jc), {
        constructor: Br,
        ValueTypeName: "quaternion",
        DefaultInterpolation: po,
        InterpolantFactoryMethodLinear: function(t) {
            return new zr(this.times,this.values,this.getValueSize(),t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }),
    Gr.prototype = Object.assign(Object.create(jc), {
        constructor: Gr,
        ValueTypeName: "number"
    }),
    Hr.prototype = Object.assign(Object.create(jc), {
        constructor: Hr,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: uo,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    Vr.prototype = Object.assign(Object.create(jc), {
        constructor: Vr,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: uo,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }),
    kr.prototype = Object.assign(Object.create(jc), {
        constructor: kr,
        ValueTypeName: "color"
    }),
    jr.prototype = jc,
    jc.constructor = jr,
    Object.assign(jr, {
        parse: function(e) {
            if (void 0 === e.type)
                throw new Error("track type undefined, can not parse");
            var r = jr._getTrackTypeForValueTypeName(e.type);
            if (void 0 === e.times) {
                var n = []
                  , i = [];
                t.AnimationUtils.flattenJSON(e.keys, n, i, "value"),
                e.times = n,
                e.values = i
            }
            return void 0 !== r.parse ? r.parse(e) : new r(e.name,e.times,e.values,e.interpolation)
        },
        toJSON: function(e) {
            var r, n = e.constructor;
            if (void 0 !== n.toJSON)
                r = n.toJSON(e);
            else {
                r = {
                    name: e.name,
                    times: t.AnimationUtils.convertArray(e.times, Array),
                    values: t.AnimationUtils.convertArray(e.values, Array)
                };
                var i = e.getInterpolation();
                i !== e.DefaultInterpolation && (r.interpolation = i)
            }
            return r.type = e.ValueTypeName,
            r
        },
        _getTrackTypeForValueTypeName: function(t) {
            switch (t.toLowerCase()) {
            case "scalar":
            case "double":
            case "float":
            case "number":
            case "integer":
                return Gr;
            case "vector":
            case "vector2":
            case "vector3":
            case "vector4":
                return Fr;
            case "color":
                return kr;
            case "quaternion":
                return Br;
            case "bool":
            case "boolean":
                return Vr;
            case "string":
                return Hr
            }
            throw new Error("Unsupported typeName: " + t)
        }
    }),
    Wr.prototype = {
        constructor: Wr,
        resetDuration: function() {
            for (var t = this.tracks, e = 0, r = 0, n = t.length; r !== n; ++r) {
                var i = this.tracks[r];
                e = Math.max(e, i.times[i.times.length - 1])
            }
            this.duration = e
        },
        trim: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var t = 0; t < this.tracks.length; t++)
                this.tracks[t].optimize();
            return this
        }
    },
    Object.assign(Wr, {
        parse: function(t) {
            for (var e = [], r = t.tracks, n = 1 / (t.fps || 1), i = 0, a = r.length; i !== a; ++i)
                e.push(jr.parse(r[i]).scale(n));
            return new Wr(t.name,t.duration,e)
        },
        toJSON: function(t) {
            for (var e = [], r = t.tracks, n = {
                name: t.name,
                duration: t.duration,
                tracks: e
            }, i = 0, a = r.length; i !== a; ++i)
                e.push(jr.toJSON(r[i]));
            return n
        },
        CreateFromMorphTargetSequence: function(e, r, n, i) {
            for (var a = r.length, o = [], s = 0; s < a; s++) {
                var c = []
                  , h = [];
                c.push((s + a - 1) % a, s, (s + 1) % a),
                h.push(0, 1, 0);
                var l = t.AnimationUtils.getKeyframeOrder(c);
                c = t.AnimationUtils.sortedArray(c, 1, l),
                h = t.AnimationUtils.sortedArray(h, 1, l),
                i || 0 !== c[0] || (c.push(a),
                h.push(h[0])),
                o.push(new Gr(".morphTargetInfluences[" + r[s].name + "]",c,h).scale(1 / n))
            }
            return new Wr(e,(-1),o)
        },
        findByName: function(t, e) {
            var r = t;
            if (!Array.isArray(t)) {
                var n = t;
                r = n.geometry && n.geometry.animations || n.animations
            }
            for (var i = 0; i < r.length; i++)
                if (r[i].name === e)
                    return r[i];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, r) {
            for (var n = {}, i = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
                var s = t[a]
                  , c = s.name.match(i);
                if (c && c.length > 1) {
                    var h = c[1]
                      , l = n[h];
                    l || (n[h] = l = []),
                    l.push(s)
                }
            }
            var u = [];
            for (var h in n)
                u.push(Wr.CreateFromMorphTargetSequence(h, n[h], e, r));
            return u
        },
        parseAnimation: function(e, r) {
            if (!e)
                return console.error("  no animation in JSONLoader data"),
                null;
            for (var n = function(e, r, n, i, a) {
                if (0 !== n.length) {
                    var o = []
                      , s = [];
                    t.AnimationUtils.flattenJSON(n, o, s, i),
                    0 !== o.length && a.push(new e(r,o,s))
                }
            }, i = [], a = e.name || "default", o = e.length || -1, s = e.fps || 30, c = e.hierarchy || [], h = 0; h < c.length; h++) {
                var l = c[h].keys;
                if (l && 0 !== l.length)
                    if (l[0].morphTargets) {
                        for (var u = {}, p = 0; p < l.length; p++)
                            if (l[p].morphTargets)
                                for (var d = 0; d < l[p].morphTargets.length; d++)
                                    u[l[p].morphTargets[d]] = -1;
                        for (var f in u) {
                            for (var m = [], g = [], d = 0; d !== l[p].morphTargets.length; ++d) {
                                var v = l[p];
                                m.push(v.time),
                                g.push(v.morphTarget === f ? 1 : 0)
                            }
                            i.push(new Gr(".morphTargetInfluence[" + f + "]",m,g))
                        }
                        o = u.length * (s || 1)
                    } else {
                        var y = ".bones[" + r[h].name + "]";
                        n(Fr, y + ".position", l, "pos", i),
                        n(Br, y + ".quaternion", l, "rot", i),
                        n(Fr, y + ".scale", l, "scl", i)
                    }
            }
            if (0 === i.length)
                return null;
            var x = new Wr(a,o,i);
            return x
        }
    }),
    Object.assign(Xr.prototype, {
        load: function(t, e, r, n) {
            var i = this
              , a = new vr(i.manager);
            a.load(t, function(t) {
                e(i.parse(JSON.parse(t)))
            }, r, n)
        },
        setTextures: function(t) {
            this.textures = t
        },
        parse: function(t) {
            function e(t) {
                return void 0 === n[t] && console.warn("THREE.MaterialLoader: Undefined texture", t),
                n[t]
            }
            var n = this.textures
              , i = new Vc[t.type];
            if (void 0 !== t.uuid && (i.uuid = t.uuid),
            void 0 !== t.name && (i.name = t.name),
            void 0 !== t.color && i.color.setHex(t.color),
            void 0 !== t.roughness && (i.roughness = t.roughness),
            void 0 !== t.metalness && (i.metalness = t.metalness),
            void 0 !== t.emissive && i.emissive.setHex(t.emissive),
            void 0 !== t.specular && i.specular.setHex(t.specular),
            void 0 !== t.shininess && (i.shininess = t.shininess),
            void 0 !== t.uniforms && (i.uniforms = t.uniforms),
            void 0 !== t.vertexShader && (i.vertexShader = t.vertexShader),
            void 0 !== t.fragmentShader && (i.fragmentShader = t.fragmentShader),
            void 0 !== t.vertexColors && (i.vertexColors = t.vertexColors),
            void 0 !== t.fog && (i.fog = t.fog),
            void 0 !== t.shading && (i.shading = t.shading),
            void 0 !== t.blending && (i.blending = t.blending),
            void 0 !== t.side && (i.side = t.side),
            void 0 !== t.opacity && (i.opacity = t.opacity),
            void 0 !== t.transparent && (i.transparent = t.transparent),
            void 0 !== t.alphaTest && (i.alphaTest = t.alphaTest),
            void 0 !== t.depthTest && (i.depthTest = t.depthTest),
            void 0 !== t.depthWrite && (i.depthWrite = t.depthWrite),
            void 0 !== t.colorWrite && (i.colorWrite = t.colorWrite),
            void 0 !== t.wireframe && (i.wireframe = t.wireframe),
            void 0 !== t.wireframeLinewidth && (i.wireframeLinewidth = t.wireframeLinewidth),
            void 0 !== t.wireframeLinecap && (i.wireframeLinecap = t.wireframeLinecap),
            void 0 !== t.wireframeLinejoin && (i.wireframeLinejoin = t.wireframeLinejoin),
            void 0 !== t.skinning && (i.skinning = t.skinning),
            void 0 !== t.morphTargets && (i.morphTargets = t.morphTargets),
            void 0 !== t.size && (i.size = t.size),
            void 0 !== t.sizeAttenuation && (i.sizeAttenuation = t.sizeAttenuation),
            void 0 !== t.map && (i.map = e(t.map)),
            void 0 !== t.alphaMap && (i.alphaMap = e(t.alphaMap),
            i.transparent = !0),
            void 0 !== t.bumpMap && (i.bumpMap = e(t.bumpMap)),
            void 0 !== t.bumpScale && (i.bumpScale = t.bumpScale),
            void 0 !== t.normalMap && (i.normalMap = e(t.normalMap)),
            void 0 !== t.normalScale) {
                var a = t.normalScale;
                Array.isArray(a) === !1 && (a = [a, a]),
                i.normalScale = (new r).fromArray(a)
            }
            if (void 0 !== t.displacementMap && (i.displacementMap = e(t.displacementMap)),
            void 0 !== t.displacementScale && (i.displacementScale = t.displacementScale),
            void 0 !== t.displacementBias && (i.displacementBias = t.displacementBias),
            void 0 !== t.roughnessMap && (i.roughnessMap = e(t.roughnessMap)),
            void 0 !== t.metalnessMap && (i.metalnessMap = e(t.metalnessMap)),
            void 0 !== t.emissiveMap && (i.emissiveMap = e(t.emissiveMap)),
            void 0 !== t.emissiveIntensity && (i.emissiveIntensity = t.emissiveIntensity),
            void 0 !== t.specularMap && (i.specularMap = e(t.specularMap)),
            void 0 !== t.envMap && (i.envMap = e(t.envMap)),
            void 0 !== t.reflectivity && (i.reflectivity = t.reflectivity),
            void 0 !== t.lightMap && (i.lightMap = e(t.lightMap)),
            void 0 !== t.lightMapIntensity && (i.lightMapIntensity = t.lightMapIntensity),
            void 0 !== t.aoMap && (i.aoMap = e(t.aoMap)),
            void 0 !== t.aoMapIntensity && (i.aoMapIntensity = t.aoMapIntensity),
            void 0 !== t.materials)
                for (var o = 0, s = t.materials.length; o < s; o++)
                    i.materials.push(this.parse(t.materials[o]));
            return i
        }
    }),
    Object.assign(qr.prototype, {
        load: function(t, e, r, n) {
            var i = this
              , a = new vr(i.manager);
            a.load(t, function(t) {
                e(i.parse(JSON.parse(t)))
            }, r, n)
        },
        parse: function(t) {
            var e = new Pt
              , r = t.data.index
              , n = {
                Int8Array: Int8Array,
                Uint8Array: Uint8Array,
                Uint8ClampedArray: Uint8ClampedArray,
                Int16Array: Int16Array,
                Uint16Array: Uint16Array,
                Int32Array: Int32Array,
                Uint32Array: Uint32Array,
                Float32Array: Float32Array,
                Float64Array: Float64Array
            };
            if (void 0 !== r) {
                var i = new n[r.type](r.array);
                e.setIndex(new gt(i,1))
            }
            var a = t.data.attributes;
            for (var o in a) {
                var s = a[o]
                  , i = new n[s.type](s.array);
                e.addAttribute(o, new gt(i,s.itemSize,s.normalized))
            }
            var c = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== c)
                for (var h = 0, u = c.length; h !== u; ++h) {
                    var p = c[h];
                    e.addGroup(p.start, p.count, p.materialIndex)
                }
            var d = t.data.boundingSphere;
            if (void 0 !== d) {
                var f = new l;
                void 0 !== d.center && f.fromArray(d.center),
                e.boundingSphere = new rt(f,d.radius)
            }
            return e
        }
    }),
    Yr.prototype = {
        constructor: Yr,
        crossOrigin: void 0,
        extractUrlBase: function(t) {
            var e = t.split("/");
            return 1 === e.length ? "./" : (e.pop(),
            e.join("/") + "/")
        },
        initMaterials: function(t, e, r) {
            for (var n = [], i = 0; i < t.length; ++i)
                n[i] = this.createMaterial(t[i], e, r);
            return n
        },
        createMaterial: function() {
            var e, r, n;
            return function(i, a, o) {
                function s(e, n, i, s, h) {
                    var l, u = a + e, p = Yr.Handlers.get(u);
                    null !== p ? l = p.load(u) : (r.setCrossOrigin(o),
                    l = r.load(u)),
                    void 0 !== n && (l.repeat.fromArray(n),
                    1 !== n[0] && (l.wrapS = wa),
                    1 !== n[1] && (l.wrapT = wa)),
                    void 0 !== i && l.offset.fromArray(i),
                    void 0 !== s && ("repeat" === s[0] && (l.wrapS = wa),
                    "mirror" === s[0] && (l.wrapS = Ea),
                    "repeat" === s[1] && (l.wrapT = wa),
                    "mirror" === s[1] && (l.wrapT = Ea)),
                    void 0 !== h && (l.anisotropy = h);
                    var d = t.Math.generateUUID();
                    return c[d] = l,
                    d
                }
                void 0 === e && (e = new q),
                void 0 === r && (r = new wr),
                void 0 === n && (n = new Xr);
                var c = {}
                  , h = {
                    uuid: t.Math.generateUUID(),
                    type: "MeshLambertMaterial"
                };
                for (var l in i) {
                    var u = i[l];
                    switch (l) {
                    case "DbgColor":
                    case "DbgIndex":
                    case "opticalDensity":
                    case "illumination":
                        break;
                    case "DbgName":
                        h.name = u;
                        break;
                    case "blending":
                        h.blending = Di[u];
                        break;
                    case "colorAmbient":
                    case "mapAmbient":
                        console.warn("THREE.Loader.createMaterial:", l, "is no longer supported.");
                        break;
                    case "colorDiffuse":
                        h.color = e.fromArray(u).getHex();
                        break;
                    case "colorSpecular":
                        h.specular = e.fromArray(u).getHex();
                        break;
                    case "colorEmissive":
                        h.emissive = e.fromArray(u).getHex();
                        break;
                    case "specularCoef":
                        h.shininess = u;
                        break;
                    case "shading":
                        "basic" === u.toLowerCase() && (h.type = "MeshBasicMaterial"),
                        "phong" === u.toLowerCase() && (h.type = "MeshPhongMaterial"),
                        "standard" === u.toLowerCase() && (h.type = "MeshStandardMaterial");
                        break;
                    case "mapDiffuse":
                        h.map = s(u, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
                        break;
                    case "mapDiffuseRepeat":
                    case "mapDiffuseOffset":
                    case "mapDiffuseWrap":
                    case "mapDiffuseAnisotropy":
                        break;
                    case "mapEmissive":
                        h.emissiveMap = s(u, i.mapEmissiveRepeat, i.mapEmissiveOffset, i.mapEmissiveWrap, i.mapEmissiveAnisotropy);
                        break;
                    case "mapEmissiveRepeat":
                    case "mapEmissiveOffset":
                    case "mapEmissiveWrap":
                    case "mapEmissiveAnisotropy":
                        break;
                    case "mapLight":
                        h.lightMap = s(u, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
                        break;
                    case "mapLightRepeat":
                    case "mapLightOffset":
                    case "mapLightWrap":
                    case "mapLightAnisotropy":
                        break;
                    case "mapAO":
                        h.aoMap = s(u, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
                        break;
                    case "mapAORepeat":
                    case "mapAOOffset":
                    case "mapAOWrap":
                    case "mapAOAnisotropy":
                        break;
                    case "mapBump":
                        h.bumpMap = s(u, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
                        break;
                    case "mapBumpScale":
                        h.bumpScale = u;
                        break;
                    case "mapBumpRepeat":
                    case "mapBumpOffset":
                    case "mapBumpWrap":
                    case "mapBumpAnisotropy":
                        break;
                    case "mapNormal":
                        h.normalMap = s(u, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
                        break;
                    case "mapNormalFactor":
                        h.normalScale = [u, u];
                        break;
                    case "mapNormalRepeat":
                    case "mapNormalOffset":
                    case "mapNormalWrap":
                    case "mapNormalAnisotropy":
                        break;
                    case "mapSpecular":
                        h.specularMap = s(u, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
                        break;
                    case "mapSpecularRepeat":
                    case "mapSpecularOffset":
                    case "mapSpecularWrap":
                    case "mapSpecularAnisotropy":
                        break;
                    case "mapMetalness":
                        h.metalnessMap = s(u, i.mapMetalnessRepeat, i.mapMetalnessOffset, i.mapMetalnessWrap, i.mapMetalnessAnisotropy);
                        break;
                    case "mapMetalnessRepeat":
                    case "mapMetalnessOffset":
                    case "mapMetalnessWrap":
                    case "mapMetalnessAnisotropy":
                        break;
                    case "mapRoughness":
                        h.roughnessMap = s(u, i.mapRoughnessRepeat, i.mapRoughnessOffset, i.mapRoughnessWrap, i.mapRoughnessAnisotropy);
                        break;
                    case "mapRoughnessRepeat":
                    case "mapRoughnessOffset":
                    case "mapRoughnessWrap":
                    case "mapRoughnessAnisotropy":
                        break;
                    case "mapAlpha":
                        h.alphaMap = s(u, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
                        break;
                    case "mapAlphaRepeat":
                    case "mapAlphaOffset":
                    case "mapAlphaWrap":
                    case "mapAlphaAnisotropy":
                        break;
                    case "flipSided":
                        h.side = bi;
                        break;
                    case "doubleSided":
                        h.side = wi;
                        break;
                    case "transparency":
                        console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"),
                        h.opacity = u;
                        break;
                    case "depthTest":
                    case "depthWrite":
                    case "colorWrite":
                    case "opacity":
                    case "reflectivity":
                    case "transparent":
                    case "visible":
                    case "wireframe":
                        h[l] = u;
                        break;
                    case "vertexColors":
                        u === !0 && (h.vertexColors = Ai),
                        "face" === u && (h.vertexColors = Si);
                        break;
                    default:
                        console.error("THREE.Loader.createMaterial: Unsupported", l, u)
                    }
                }
                return "MeshBasicMaterial" === h.type && delete h.emissive,
                "MeshPhongMaterial" !== h.type && delete h.specular,
                h.opacity < 1 && (h.transparent = !0),
                n.setTextures(c),
                n.parse(h)
            }
        }()
    },
    Yr.Handlers = {
        handlers: [],
        add: function(t, e) {
            this.handlers.push(t, e)
        },
        get: function(t) {
            for (var e = this.handlers, r = 0, n = e.length; r < n; r += 2) {
                var i = e[r]
                  , a = e[r + 1];
                if (i.test(t))
                    return a
            }
            return null
        }
    },
    Object.assign(Zr.prototype, {
        load: function(t, e, r, n) {
            var i = this
              , a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : Yr.prototype.extractUrlBase(t)
              , o = new vr(this.manager);
            o.setWithCredentials(this.withCredentials),
            o.load(t, function(r) {
                var n = JSON.parse(r)
                  , o = n.metadata;
                if (void 0 !== o) {
                    var s = o.type;
                    if (void 0 !== s) {
                        if ("object" === s.toLowerCase())
                            return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.");
                        if ("scene" === s.toLowerCase())
                            return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
                    }
                }
                var c = i.parse(n, a);
                e(c.geometry, c.materials)
            }, r, n)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        parse: function(t, e) {
            function n(e) {
                function n(t, e) {
                    return t & 1 << e
                }
                var i, a, o, s, h, u, p, d, f, m, g, v, y, x, _, b, w, M, E, T, S, A, L, R, P, C, U, I = t.faces, D = t.vertices, N = t.normals, O = t.colors, F = 0;
                if (void 0 !== t.uvs) {
                    for (i = 0; i < t.uvs.length; i++)
                        t.uvs[i].length && F++;
                    for (i = 0; i < F; i++)
                        c.faceVertexUvs[i] = []
                }
                for (s = 0,
                h = D.length; s < h; )
                    M = new l,
                    M.x = D[s++] * e,
                    M.y = D[s++] * e,
                    M.z = D[s++] * e,
                    c.vertices.push(M);
                for (s = 0,
                h = I.length; s < h; )
                    if (m = I[s++],
                    g = n(m, 0),
                    v = n(m, 1),
                    y = n(m, 3),
                    x = n(m, 4),
                    _ = n(m, 5),
                    b = n(m, 6),
                    w = n(m, 7),
                    g) {
                        if (T = new ft,
                        T.a = I[s],
                        T.b = I[s + 1],
                        T.c = I[s + 3],
                        S = new ft,
                        S.a = I[s + 1],
                        S.b = I[s + 2],
                        S.c = I[s + 3],
                        s += 4,
                        v && (f = I[s++],
                        T.materialIndex = f,
                        S.materialIndex = f),
                        o = c.faces.length,
                        y)
                            for (i = 0; i < F; i++)
                                for (R = t.uvs[i],
                                c.faceVertexUvs[i][o] = [],
                                c.faceVertexUvs[i][o + 1] = [],
                                a = 0; a < 4; a++)
                                    d = I[s++],
                                    C = R[2 * d],
                                    U = R[2 * d + 1],
                                    P = new r(C,U),
                                    2 !== a && c.faceVertexUvs[i][o].push(P),
                                    0 !== a && c.faceVertexUvs[i][o + 1].push(P);
                        if (x && (p = 3 * I[s++],
                        T.normal.set(N[p++], N[p++], N[p]),
                        S.normal.copy(T.normal)),
                        _)
                            for (i = 0; i < 4; i++)
                                p = 3 * I[s++],
                                L = new l(N[p++],N[p++],N[p]),
                                2 !== i && T.vertexNormals.push(L),
                                0 !== i && S.vertexNormals.push(L);
                        if (b && (u = I[s++],
                        A = O[u],
                        T.color.setHex(A),
                        S.color.setHex(A)),
                        w)
                            for (i = 0; i < 4; i++)
                                u = I[s++],
                                A = O[u],
                                2 !== i && T.vertexColors.push(new q(A)),
                                0 !== i && S.vertexColors.push(new q(A));
                        c.faces.push(T),
                        c.faces.push(S)
                    } else {
                        if (E = new ft,
                        E.a = I[s++],
                        E.b = I[s++],
                        E.c = I[s++],
                        v && (f = I[s++],
                        E.materialIndex = f),
                        o = c.faces.length,
                        y)
                            for (i = 0; i < F; i++)
                                for (R = t.uvs[i],
                                c.faceVertexUvs[i][o] = [],
                                a = 0; a < 3; a++)
                                    d = I[s++],
                                    C = R[2 * d],
                                    U = R[2 * d + 1],
                                    P = new r(C,U),
                                    c.faceVertexUvs[i][o].push(P);
                        if (x && (p = 3 * I[s++],
                        E.normal.set(N[p++], N[p++], N[p])),
                        _)
                            for (i = 0; i < 3; i++)
                                p = 3 * I[s++],
                                L = new l(N[p++],N[p++],N[p]),
                                E.vertexNormals.push(L);
                        if (b && (u = I[s++],
                        E.color.setHex(O[u])),
                        w)
                            for (i = 0; i < 3; i++)
                                u = I[s++],
                                E.vertexColors.push(new q(O[u]));
                        c.faces.push(E)
                    }
            }
            function i() {
                var e = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
                if (t.skinWeights)
                    for (var r = 0, n = t.skinWeights.length; r < n; r += e) {
                        var i = t.skinWeights[r]
                          , o = e > 1 ? t.skinWeights[r + 1] : 0
                          , s = e > 2 ? t.skinWeights[r + 2] : 0
                          , h = e > 3 ? t.skinWeights[r + 3] : 0;
                        c.skinWeights.push(new a(i,o,s,h))
                    }
                if (t.skinIndices)
                    for (var r = 0, n = t.skinIndices.length; r < n; r += e) {
                        var l = t.skinIndices[r]
                          , u = e > 1 ? t.skinIndices[r + 1] : 0
                          , p = e > 2 ? t.skinIndices[r + 2] : 0
                          , d = e > 3 ? t.skinIndices[r + 3] : 0;
                        c.skinIndices.push(new a(l,u,p,d))
                    }
                c.bones = t.bones,
                c.bones && c.bones.length > 0 && (c.skinWeights.length !== c.skinIndices.length || c.skinIndices.length !== c.vertices.length) && console.warn("When skinning, number of vertices (" + c.vertices.length + "), skinIndices (" + c.skinIndices.length + "), and skinWeights (" + c.skinWeights.length + ") should match.")
            }
            function o(e) {
                if (void 0 !== t.morphTargets)
                    for (var r = 0, n = t.morphTargets.length; r < n; r++) {
                        c.morphTargets[r] = {},
                        c.morphTargets[r].name = t.morphTargets[r].name,
                        c.morphTargets[r].vertices = [];
                        for (var i = c.morphTargets[r].vertices, a = t.morphTargets[r].vertices, o = 0, s = a.length; o < s; o += 3) {
                            var h = new l;
                            h.x = a[o] * e,
                            h.y = a[o + 1] * e,
                            h.z = a[o + 2] * e,
                            i.push(h)
                        }
                    }
                if (void 0 !== t.morphColors && t.morphColors.length > 0) {
                    console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
                    for (var u = c.faces, p = t.morphColors[0].colors, r = 0, n = u.length; r < n; r++)
                        u[r].color.fromArray(p, 3 * r)
                }
            }
            function s() {
                var e = []
                  , r = [];
                void 0 !== t.animation && r.push(t.animation),
                void 0 !== t.animations && (t.animations.length ? r = r.concat(t.animations) : r.push(t.animations));
                for (var n = 0; n < r.length; n++) {
                    var i = Wr.parseAnimation(r[n], c.bones);
                    i && e.push(i)
                }
                if (c.morphTargets) {
                    var a = Wr.CreateClipsFromMorphTargetSequences(c.morphTargets, 10);
                    e = e.concat(a)
                }
                e.length > 0 && (c.animations = e)
            }
            var c = new At
              , h = void 0 !== t.scale ? 1 / t.scale : 1;
            if (n(h),
            i(),
            o(h),
            s(),
            c.computeFaceNormals(),
            c.computeBoundingSphere(),
            void 0 === t.materials || 0 === t.materials.length)
                return {
                    geometry: c
                };
            var u = Yr.prototype.initMaterials(t.materials, e, this.crossOrigin);
            return {
                geometry: c,
                materials: u
            }
        }
    }),
    Object.assign(Jr.prototype, {
        load: function(t, e, r, n) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var i = this
              , a = new vr(i.manager);
            a.load(t, function(t) {
                i.parse(JSON.parse(t), e)
            }, r, n)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        },
        parse: function(t, e) {
            var r = this.parseGeometries(t.geometries)
              , n = this.parseImages(t.images, function() {
                void 0 !== e && e(o)
            })
              , i = this.parseTextures(t.textures, n)
              , a = this.parseMaterials(t.materials, i)
              , o = this.parseObject(t.object, r, a);
            return t.animations && (o.animations = this.parseAnimations(t.animations)),
            void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(o),
            o
        },
        parseGeometries: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var r = new Zr, n = new qr, i = 0, a = t.length; i < a; i++) {
                    var o, s = t[i];
                    switch (s.type) {
                    case "PlaneGeometry":
                    case "PlaneBufferGeometry":
                        o = new Hc[s.type](s.width,s.height,s.widthSegments,s.heightSegments);
                        break;
                    case "BoxGeometry":
                    case "BoxBufferGeometry":
                    case "CubeGeometry":
                        o = new Hc[s.type](s.width,s.height,s.depth,s.widthSegments,s.heightSegments,s.depthSegments);
                        break;
                    case "CircleGeometry":
                    case "CircleBufferGeometry":
                        o = new Hc[s.type](s.radius,s.segments,s.thetaStart,s.thetaLength);
                        break;
                    case "CylinderGeometry":
                    case "CylinderBufferGeometry":
                        o = new Hc[s.type](s.radiusTop,s.radiusBottom,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "ConeGeometry":
                    case "ConeBufferGeometry":
                        o = new Hc[s.type](s.radius,s.height,s.radialSegments,s.heightSegments,s.openEnded,s.thetaStart,s.thetaLength);
                        break;
                    case "SphereGeometry":
                    case "SphereBufferGeometry":
                        o = new Hc[s.type](s.radius,s.widthSegments,s.heightSegments,s.phiStart,s.phiLength,s.thetaStart,s.thetaLength);
                        break;
                    case "DodecahedronGeometry":
                    case "IcosahedronGeometry":
                    case "OctahedronGeometry":
                    case "TetrahedronGeometry":
                        o = new Hc[s.type](s.radius,s.detail);
                        break;
                    case "RingGeometry":
                    case "RingBufferGeometry":
                        o = new Hc[s.type](s.innerRadius,s.outerRadius,s.thetaSegments,s.phiSegments,s.thetaStart,s.thetaLength);
                        break;
                    case "TorusGeometry":
                    case "TorusBufferGeometry":
                        o = new Hc[s.type](s.radius,s.tube,s.radialSegments,s.tubularSegments,s.arc);
                        break;
                    case "TorusKnotGeometry":
                    case "TorusKnotBufferGeometry":
                        o = new Hc[s.type](s.radius,s.tube,s.tubularSegments,s.radialSegments,s.p,s.q);
                        break;
                    case "LatheGeometry":
                    case "LatheBufferGeometry":
                        o = new Hc[s.type](s.points,s.segments,s.phiStart,s.phiLength);
                        break;
                    case "BufferGeometry":
                        o = n.parse(s);
                        break;
                    case "Geometry":
                        o = r.parse(s.data, this.texturePath).geometry;
                        break;
                    default:
                        console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                        continue
                    }
                    o.uuid = s.uuid,
                    void 0 !== s.name && (o.name = s.name),
                    e[s.uuid] = o
                }
            return e
        },
        parseMaterials: function(t, e) {
            var r = {};
            if (void 0 !== t) {
                var n = new Xr;
                n.setTextures(e);
                for (var i = 0, a = t.length; i < a; i++) {
                    var o = n.parse(t[i]);
                    r[o.uuid] = o
                }
            }
            return r
        },
        parseAnimations: function(t) {
            for (var e = [], r = 0; r < t.length; r++) {
                var n = Wr.parse(t[r]);
                e.push(n)
            }
            return e
        },
        parseImages: function(t, e) {
            function r(t) {
                return n.manager.itemStart(t),
                o.load(t, function() {
                    n.manager.itemEnd(t)
                }, void 0, function() {
                    n.manager.itemError(t)
                })
            }
            var n = this
              , i = {};
            if (void 0 !== t && t.length > 0) {
                var a = new gr(e)
                  , o = new _r(a);
                o.setCrossOrigin(this.crossOrigin);
                for (var s = 0, c = t.length; s < c; s++) {
                    var h = t[s]
                      , l = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url : n.texturePath + h.url;
                    i[h.uuid] = r(l)
                }
            }
            return i
        },
        parseTextures: function(t, e) {
            function r(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t),
                e[t])
            }
            var i = {};
            if (void 0 !== t)
                for (var a = 0, o = t.length; a < o; a++) {
                    var s = t[a];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid),
                    void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                    var c = new n(e[s.image]);
                    c.needsUpdate = !0,
                    c.uuid = s.uuid,
                    void 0 !== s.name && (c.name = s.name),
                    void 0 !== s.mapping && (c.mapping = r(s.mapping, ba)),
                    void 0 !== s.offset && c.offset.fromArray(s.offset),
                    void 0 !== s.repeat && c.repeat.fromArray(s.repeat),
                    void 0 !== s.wrap && (c.wrapS = r(s.wrap[0], Ta),
                    c.wrapT = r(s.wrap[1], Ta)),
                    void 0 !== s.minFilter && (c.minFilter = r(s.minFilter, Ua)),
                    void 0 !== s.magFilter && (c.magFilter = r(s.magFilter, Ua)),
                    void 0 !== s.anisotropy && (c.anisotropy = s.anisotropy),
                    void 0 !== s.flipY && (c.flipY = s.flipY),
                    i[s.uuid] = c
                }
            return i
        },
        parseObject: function() {
            var t = new u;
            return function(e, r, n) {
                function i(t) {
                    return void 0 === r[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t),
                    r[t]
                }
                function a(t) {
                    if (void 0 !== t)
                        return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t),
                        n[t]
                }
                var o;
                switch (e.type) {
                case "Scene":
                    o = new pe,
                    void 0 !== e.background && Number.isInteger(e.background) && (o.background = new q(e.background)),
                    void 0 !== e.fog && ("Fog" === e.fog.type ? o.fog = new ue(e.fog.color,e.fog.near,e.fog.far) : "FogExp2" === e.fog.type && (o.fog = new le(e.fog.color,e.fog.density)));
                    break;
                case "PerspectiveCamera":
                    o = new Nt(e.fov,e.aspect,e.near,e.far),
                    void 0 !== e.focus && (o.focus = e.focus),
                    void 0 !== e.zoom && (o.zoom = e.zoom),
                    void 0 !== e.filmGauge && (o.filmGauge = e.filmGauge),
                    void 0 !== e.filmOffset && (o.filmOffset = e.filmOffset),
                    void 0 !== e.view && (o.view = Object.assign({}, e.view));
                    break;
                case "OrthographicCamera":
                    o = new Ot(e.left,e.right,e.top,e.bottom,e.near,e.far);
                    break;
                case "AmbientLight":
                    o = new Cr(e.color,e.intensity);
                    break;
                case "DirectionalLight":
                    o = new Pr(e.color,e.intensity);
                    break;
                case "PointLight":
                    o = new Lr(e.color,e.intensity,e.distance,e.decay);
                    break;
                case "SpotLight":
                    o = new Ar(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);
                    break;
                case "HemisphereLight":
                    o = new Er(e.color,e.groundColor,e.intensity);
                    break;
                case "Mesh":
                    var s = i(e.geometry)
                      , c = a(e.material);
                    o = s.bones && s.bones.length > 0 ? new _e(s,c) : new Ct(s,c);
                    break;
                case "LOD":
                    o = new ge;
                    break;
                case "Line":
                    o = new we(i(e.geometry),a(e.material),e.mode);
                    break;
                case "LineSegments":
                    o = new Me(i(e.geometry),a(e.material));
                    break;
                case "PointCloud":
                case "Points":
                    o = new Te(i(e.geometry),a(e.material));
                    break;
                case "Sprite":
                    o = new me(a(e.material));
                    break;
                case "Group":
                    o = new Se;
                    break;
                default:
                    o = new lt
                }
                if (o.uuid = e.uuid,
                void 0 !== e.name && (o.name = e.name),
                void 0 !== e.matrix ? (t.fromArray(e.matrix),
                t.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== e.position && o.position.fromArray(e.position),
                void 0 !== e.rotation && o.rotation.fromArray(e.rotation),
                void 0 !== e.quaternion && o.quaternion.fromArray(e.quaternion),
                void 0 !== e.scale && o.scale.fromArray(e.scale)),
                void 0 !== e.castShadow && (o.castShadow = e.castShadow),
                void 0 !== e.receiveShadow && (o.receiveShadow = e.receiveShadow),
                e.shadow && (void 0 !== e.shadow.bias && (o.shadow.bias = e.shadow.bias),
                void 0 !== e.shadow.radius && (o.shadow.radius = e.shadow.radius),
                void 0 !== e.shadow.mapSize && o.shadow.mapSize.fromArray(e.shadow.mapSize),
                void 0 !== e.shadow.camera && (o.shadow.camera = this.parseObject(e.shadow.camera))),
                void 0 !== e.visible && (o.visible = e.visible),
                void 0 !== e.userData && (o.userData = e.userData),
                void 0 !== e.children)
                    for (var h in e.children)
                        o.add(this.parseObject(e.children[h], r, n));
                if ("LOD" === e.type)
                    for (var l = e.levels, u = 0; u < l.length; u++) {
                        var p = l[u]
                          , h = o.getObjectByProperty("uuid", p.object);
                        void 0 !== h && o.addLevel(h, p.distance)
                    }
                return o
            }
        }()
    }),
    Qr.prototype = {
        constructor: Qr,
        getPoint: function(t) {
            return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),
            null
        },
        getPointAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getPoint(e)
        },
        getPoints: function(t) {
            t || (t = 5);
            for (var e = [], r = 0; r <= t; r++)
                e.push(this.getPoint(r / t));
            return e
        },
        getSpacedPoints: function(t) {
            t || (t = 5);
            for (var e = [], r = 0; r <= t; r++)
                e.push(this.getPointAt(r / t));
            return e
        },
        getLength: function() {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (t || (t = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
            this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate)
                return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, r, n = [], i = this.getPoint(0), a = 0;
            for (n.push(0),
            r = 1; r <= t; r++)
                e = this.getPoint(r / t),
                a += e.distanceTo(i),
                n.push(a),
                i = e;
            return this.cacheArcLengths = n,
            n
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            var r, n = this.getLengths(), i = 0, a = n.length;
            r = e ? e : t * n[a - 1];
            for (var o, s = 0, c = a - 1; s <= c; )
                if (i = Math.floor(s + (c - s) / 2),
                o = n[i] - r,
                o < 0)
                    s = i + 1;
                else {
                    if (!(o > 0)) {
                        c = i;
                        break
                    }
                    c = i - 1
                }
            if (i = c,
            n[i] === r) {
                var h = i / (a - 1);
                return h
            }
            var l = n[i]
              , u = n[i + 1]
              , p = u - l
              , d = (r - l) / p
              , h = (i + d) / (a - 1);
            return h
        },
        getTangent: function(t) {
            var e = 1e-4
              , r = t - e
              , n = t + e;
            r < 0 && (r = 0),
            n > 1 && (n = 1);
            var i = this.getPoint(r)
              , a = this.getPoint(n)
              , o = a.clone().sub(i);
            return o.normalize()
        },
        getTangentAt: function(t) {
            var e = this.getUtoTmapping(t);
            return this.getTangent(e)
        }
    },
    Qr.create = function(t, e) {
        return t.prototype = Object.create(Qr.prototype),
        t.prototype.constructor = t,
        t.prototype.getPoint = e,
        t
    }
    ,
    Kr.prototype = Object.create(Qr.prototype),
    Kr.prototype.constructor = Kr,
    Kr.prototype.isLineCurve = !0,
    Kr.prototype.getPoint = function(t) {
        if (1 === t)
            return this.v2.clone();
        var e = this.v2.clone().sub(this.v1);
        return e.multiplyScalar(t).add(this.v1),
        e
    }
    ,
    Kr.prototype.getPointAt = function(t) {
        return this.getPoint(t)
    }
    ,
    Kr.prototype.getTangent = function(t) {
        var e = this.v2.clone().sub(this.v1);
        return e.normalize()
    }
    ,
    $r.prototype = Object.assign(Object.create(Qr.prototype), {
        constructor: $r,
        add: function(t) {
            this.curves.push(t)
        },
        closePath: function() {
            var t = this.curves[0].getPoint(0)
              , e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new Kr(e,t))
        },
        getPoint: function(t) {
            for (var e = t * this.getLength(), r = this.getCurveLengths(), n = 0; n < r.length; ) {
                if (r[n] >= e) {
                    var i = r[n] - e
                      , a = this.curves[n]
                      , o = a.getLength()
                      , s = 0 === o ? 0 : 1 - i / o;
                    return a.getPointAt(s)
                }
                n++
            }
            return null
        },
        getLength: function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0,
            this.cacheLengths = null,
            this.getLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
                return this.cacheLengths;
            for (var t = [], e = 0, r = 0, n = this.curves.length; r < n; r++)
                e += this.curves[r].getLength(),
                t.push(e);
            return this.cacheLengths = t,
            t
        },
        getSpacedPoints: function(t) {
            t || (t = 40);
            for (var e = [], r = 0; r <= t; r++)
                e.push(this.getPoint(r / t));
            return this.autoClose && e.push(e[0]),
            e
        },
        getPoints: function(t) {
            t = t || 12;
            for (var e, r = [], n = 0, i = this.curves; n < i.length; n++)
                for (var a = i[n], o = a && a.isEllipseCurve ? 2 * t : a && a.isLineCurve ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
                    var h = s[c];
                    e && e.equals(h) || (r.push(h),
                    e = h)
                }
            return this.autoClose && r.length > 1 && !r[r.length - 1].equals(r[0]) && r.push(r[0]),
            r
        },
        createPointsGeometry: function(t) {
            var e = this.getPoints(t);
            return this.createGeometry(e)
        },
        createSpacedPointsGeometry: function(t) {
            var e = this.getSpacedPoints(t);
            return this.createGeometry(e)
        },
        createGeometry: function(t) {
            for (var e = new At, r = 0, n = t.length; r < n; r++) {
                var i = t[r];
                e.vertices.push(new l(i.x,i.y,i.z || 0))
            }
            return e
        }
    }),
    tn.prototype = Object.create(Qr.prototype),
    tn.prototype.constructor = tn,
    tn.prototype.isEllipseCurve = !0,
    tn.prototype.getPoint = function(t) {
        for (var e = 2 * Math.PI, n = this.aEndAngle - this.aStartAngle, i = Math.abs(n) < Number.EPSILON; n < 0; )
            n += e;
        for (; n > e; )
            n -= e;
        n < Number.EPSILON && (n = i ? 0 : e),
        this.aClockwise !== !0 || i || (n === e ? n = -e : n -= e);
        var a = this.aStartAngle + t * n
          , o = this.aX + this.xRadius * Math.cos(a)
          , s = this.aY + this.yRadius * Math.sin(a);
        if (0 !== this.aRotation) {
            var c = Math.cos(this.aRotation)
              , h = Math.sin(this.aRotation)
              , l = o - this.aX
              , u = s - this.aY;
            o = l * c - u * h + this.aX,
            s = l * h + u * c + this.aY
        }
        return new r(o,s)
    }
    ,
    t.CurveUtils = {
        tangentQuadraticBezier: function(t, e, r, n) {
            return 2 * (1 - t) * (r - e) + 2 * t * (n - r)
        },
        tangentCubicBezier: function(t, e, r, n, i) {
            return -3 * e * (1 - t) * (1 - t) + 3 * r * (1 - t) * (1 - t) - 6 * t * r * (1 - t) + 6 * t * n * (1 - t) - 3 * t * t * n + 3 * t * t * i
        },
        tangentSpline: function(t, e, r, n, i) {
            var a = 6 * t * t - 6 * t
              , o = 3 * t * t - 4 * t + 1
              , s = -6 * t * t + 6 * t
              , c = 3 * t * t - 2 * t;
            return a + o + s + c
        },
        interpolate: function(t, e, r, n, i) {
            var a = .5 * (r - t)
              , o = .5 * (n - e)
              , s = i * i
              , c = i * s;
            return (2 * e - 2 * r + a + o) * c + (-3 * e + 3 * r - 2 * a - o) * s + a * i + e
        }
    },
    en.prototype = Object.create(Qr.prototype),
    en.prototype.constructor = en,
    en.prototype.isSplineCurve = !0,
    en.prototype.getPoint = function(e) {
        var n = this.points
          , i = (n.length - 1) * e
          , a = Math.floor(i)
          , o = i - a
          , s = n[0 === a ? a : a - 1]
          , c = n[a]
          , h = n[a > n.length - 2 ? n.length - 1 : a + 1]
          , l = n[a > n.length - 3 ? n.length - 1 : a + 2]
          , u = t.CurveUtils.interpolate;
        return new r(u(s.x, c.x, h.x, l.x, o),u(s.y, c.y, h.y, l.y, o))
    }
    ,
    rn.prototype = Object.create(Qr.prototype),
    rn.prototype.constructor = rn,
    rn.prototype.getPoint = function(e) {
        var n = t.ShapeUtils.b3;
        return new r(n(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),n(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
    }
    ,
    rn.prototype.getTangent = function(e) {
        var n = t.CurveUtils.tangentCubicBezier;
        return new r(n(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),n(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
    }
    ,
    nn.prototype = Object.create(Qr.prototype),
    nn.prototype.constructor = nn,
    nn.prototype.getPoint = function(e) {
        var n = t.ShapeUtils.b2;
        return new r(n(e, this.v0.x, this.v1.x, this.v2.x),n(e, this.v0.y, this.v1.y, this.v2.y))
    }
    ,
    nn.prototype.getTangent = function(e) {
        var n = t.CurveUtils.tangentQuadraticBezier;
        return new r(n(e, this.v0.x, this.v1.x, this.v2.x),n(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
    }
    ;
    var Wc = Object.assign(Object.create($r.prototype), {
        fromPoints: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, r = t.length; e < r; e++)
                this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function(t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function(t, e) {
            var n = new Kr(this.currentPoint.clone(),new r(t,e));
            this.curves.push(n),
            this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function(t, e, n, i) {
            var a = new nn(this.currentPoint.clone(),new r(t,e),new r(n,i));
            this.curves.push(a),
            this.currentPoint.set(n, i)
        },
        bezierCurveTo: function(t, e, n, i, a, o) {
            var s = new rn(this.currentPoint.clone(),new r(t,e),new r(n,i),new r(a,o));
            this.curves.push(s),
            this.currentPoint.set(a, o)
        },
        splineThru: function(t) {
            var e = [this.currentPoint.clone()].concat(t)
              , r = new en(e);
            this.curves.push(r),
            this.currentPoint.copy(t[t.length - 1])
        },
        arc: function(t, e, r, n, i, a) {
            var o = this.currentPoint.x
              , s = this.currentPoint.y;
            this.absarc(t + o, e + s, r, n, i, a)
        },
        absarc: function(t, e, r, n, i, a) {
            this.absellipse(t, e, r, r, n, i, a)
        },
        ellipse: function(t, e, r, n, i, a, o, s) {
            var c = this.currentPoint.x
              , h = this.currentPoint.y;
            this.absellipse(t + c, e + h, r, n, i, a, o, s)
        },
        absellipse: function(t, e, r, n, i, a, o, s) {
            var c = new tn(t,e,r,n,i,a,o,s);
            if (this.curves.length > 0) {
                var h = c.getPoint(0);
                h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
            }
            this.curves.push(c);
            var l = c.getPoint(1);
            this.currentPoint.copy(l)
        }
    });
    an.prototype = Object.assign(Object.create(Wc), {
        constructor: an,
        getPointsHoles: function(t) {
            for (var e = [], r = 0, n = this.holes.length; r < n; r++)
                e[r] = this.holes[r].getPoints(t);
            return e
        },
        extractAllPoints: function(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        extractPoints: function(t) {
            return this.extractAllPoints(t)
        }
    }),
    on.prototype = Wc,
    Wc.constructor = on,
    sn.prototype = {
        moveTo: function(t, e) {
            this.currentPath = new on,
            this.subPaths.push(this.currentPath),
            this.currentPath.moveTo(t, e)
        },
        lineTo: function(t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function(t, e, r, n) {
            this.currentPath.quadraticCurveTo(t, e, r, n)
        },
        bezierCurveTo: function(t, e, r, n, i, a) {
            this.currentPath.bezierCurveTo(t, e, r, n, i, a)
        },
        splineThru: function(t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function(e, r) {
            function n(t) {
                for (var e = [], r = 0, n = t.length; r < n; r++) {
                    var i = t[r]
                      , a = new an;
                    a.curves = i.curves,
                    e.push(a)
                }
                return e
            }
            function i(t, e) {
                for (var r = e.length, n = !1, i = r - 1, a = 0; a < r; i = a++) {
                    var o = e[i]
                      , s = e[a]
                      , c = s.x - o.x
                      , h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (h < 0 && (o = e[a],
                        c = -c,
                        s = e[i],
                        h = -h),
                        t.y < o.y || t.y > s.y)
                            continue;
                        if (t.y === o.y) {
                            if (t.x === o.x)
                                return !0
                        } else {
                            var l = h * (t.x - o.x) - c * (t.y - o.y);
                            if (0 === l)
                                return !0;
                            if (l < 0)
                                continue;
                            n = !n
                        }
                    } else {
                        if (t.y !== o.y)
                            continue;
                        if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x)
                            return !0
                    }
                }
                return n
            }
            var a = t.ShapeUtils.isClockWise
              , o = this.subPaths;
            if (0 === o.length)
                return [];
            if (r === !0)
                return n(o);
            var s, c, h, l = [];
            if (1 === o.length)
                return c = o[0],
                h = new an,
                h.curves = c.curves,
                l.push(h),
                l;
            var u = !a(o[0].getPoints());
            u = e ? !u : u;
            var p, d = [], f = [], m = [], g = 0;
            f[g] = void 0,
            m[g] = [];
            for (var v = 0, y = o.length; v < y; v++)
                c = o[v],
                p = c.getPoints(),
                s = a(p),
                s = e ? !s : s,
                s ? (!u && f[g] && g++,
                f[g] = {
                    s: new an,
                    p: p
                },
                f[g].s.curves = c.curves,
                u && g++,
                m[g] = []) : m[g].push({
                    h: c,
                    p: p[0]
                });
            if (!f[0])
                return n(o);
            if (f.length > 1) {
                for (var x = !1, _ = [], b = 0, w = f.length; b < w; b++)
                    d[b] = [];
                for (var b = 0, w = f.length; b < w; b++)
                    for (var M = m[b], E = 0; E < M.length; E++) {
                        for (var T = M[E], S = !0, A = 0; A < f.length; A++)
                            i(T.p, f[A].p) && (b !== A && _.push({
                                froms: b,
                                tos: A,
                                hole: E
                            }),
                            S ? (S = !1,
                            d[A].push(T)) : x = !0);
                        S && d[b].push(T)
                    }
                _.length > 0 && (x || (m = d))
            }
            for (var L, v = 0, R = f.length; v < R; v++) {
                h = f[v].s,
                l.push(h),
                L = m[v];
                for (var P = 0, C = L.length; P < C; P++)
                    h.holes.push(L[P].h)
            }
            return l
        }
    },
    Object.assign(cn.prototype, {
        isFont: !0,
        generateShapes: function(e, r, n) {
            function i(t) {
                for (var e = String(t).split(""), n = r / o.resolution, i = 0, s = [], c = 0; c < e.length; c++) {
                    var h = a(e[c], n, i);
                    i += h.offset,
                    s.push(h.path)
                }
                return s
            }
            function a(e, r, i) {
                var a = o.glyphs[e] || o.glyphs["?"];
                if (a) {
                    var s, c, h, l, u, p, d, f, m, g, v, y = new sn, x = [], _ = t.ShapeUtils.b2, b = t.ShapeUtils.b3;
                    if (a.o)
                        for (var w = a._cachedOutline || (a._cachedOutline = a.o.split(" ")), M = 0, E = w.length; M < E; ) {
                            var T = w[M++];
                            switch (T) {
                            case "m":
                                s = w[M++] * r + i,
                                c = w[M++] * r,
                                y.moveTo(s, c);
                                break;
                            case "l":
                                s = w[M++] * r + i,
                                c = w[M++] * r,
                                y.lineTo(s, c);
                                break;
                            case "q":
                                if (h = w[M++] * r + i,
                                l = w[M++] * r,
                                d = w[M++] * r + i,
                                f = w[M++] * r,
                                y.quadraticCurveTo(d, f, h, l),
                                v = x[x.length - 1]) {
                                    u = v.x,
                                    p = v.y;
                                    for (var S = 1; S <= n; S++) {
                                        var A = S / n;
                                        _(A, u, d, h),
                                        _(A, p, f, l)
                                    }
                                }
                                break;
                            case "b":
                                if (h = w[M++] * r + i,
                                l = w[M++] * r,
                                d = w[M++] * r + i,
                                f = w[M++] * r,
                                m = w[M++] * r + i,
                                g = w[M++] * r,
                                y.bezierCurveTo(d, f, m, g, h, l),
                                v = x[x.length - 1]) {
                                    u = v.x,
                                    p = v.y;
                                    for (var S = 1; S <= n; S++) {
                                        var A = S / n;
                                        b(A, u, d, m, h),
                                        b(A, p, f, g, l)
                                    }
                                }
                            }
                        }
                    return {
                        offset: a.ha * r,
                        path: y
                    }
                }
            }
            void 0 === r && (r = 100),
            void 0 === n && (n = 4);
            for (var o = this.data, s = i(e), c = [], h = 0, l = s.length; h < l; h++)
                Array.prototype.push.apply(c, s[h].toShapes());
            return c
        }
    }),
    Object.assign(hn.prototype, {
        load: function(t, e, r, n) {
            var i = this
              , a = new vr(this.manager);
            a.load(t, function(t) {
                var r;
                try {
                    r = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),
                    r = JSON.parse(t.substring(65, t.length - 2))
                }
                var n = i.parse(r);
                e && e(n)
            }, r, n)
        },
        parse: function(t) {
            return new cn(t)
        }
    });
    var Xc;
    Object.assign(un.prototype, {
        load: function(t, e, r, n) {
            var i = new vr(this.manager);
            i.setResponseType("arraybuffer"),
            i.load(t, function(t) {
                var r = ln();
                r.decodeAudioData(t, function(t) {
                    e(t)
                })
            }, r, n)
        }
    }),
    Object.assign(pn.prototype, {
        update: function() {
            var e, r, n, i, a, o, s, c = new u, h = new u;
            return function(l) {
                var u = e !== this || r !== l.focus || n !== l.fov || i !== l.aspect * this.aspect || a !== l.near || o !== l.far || s !== l.zoom;
                if (u) {
                    e = this,
                    r = l.focus,
                    n = l.fov,
                    i = l.aspect * this.aspect,
                    a = l.near,
                    o = l.far,
                    s = l.zoom;
                    var p, d, f = l.projectionMatrix.clone(), m = this.eyeSep / 2, g = m * a / r, v = a * Math.tan(t.Math.DEG2RAD * n * .5) / s;
                    h.elements[12] = -m,
                    c.elements[12] = m,
                    p = -v * i + g,
                    d = v * i + g,
                    f.elements[0] = 2 * a / (d - p),
                    f.elements[8] = (d + p) / (d - p),
                    this.cameraL.projectionMatrix.copy(f),
                    p = -v * i - g,
                    d = v * i - g,
                    f.elements[0] = 2 * a / (d - p),
                    f.elements[8] = (d + p) / (d - p),
                    this.cameraR.projectionMatrix.copy(f)
                }
                this.cameraL.matrixWorld.copy(l.matrixWorld).multiply(h),
                this.cameraR.matrixWorld.copy(l.matrixWorld).multiply(c)
            }
        }()
    }),
    dn.prototype = Object.create(lt.prototype),
    dn.prototype.constructor = dn,
    fn.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: fn,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination),
            this.gain.connect(this.context.destination),
            this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(t) {
            null !== this.filter ? (this.gain.disconnect(this.filter),
            this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination),
            this.filter = t,
            this.gain.connect(this.filter),
            this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(t) {
            this.gain.gain.value = t
        },
        updateMatrixWorld: function() {
            var t = new l
              , e = new h
              , r = new l
              , n = new l;
            return function(i) {
                lt.prototype.updateMatrixWorld.call(this, i);
                var a = this.context.listener
                  , o = this.up;
                this.matrixWorld.decompose(t, e, r),
                n.set(0, 0, -1).applyQuaternion(e),
                a.setPosition(t.x, t.y, t.z),
                a.setOrientation(n.x, n.y, n.z, o.x, o.y, o.z)
            }
        }()
    }),
    mn.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: mn,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(t) {
            return this.hasPlaybackControl = !1,
            this.sourceType = "audioNode",
            this.source = t,
            this.connect(),
            this
        },
        setBuffer: function(t) {
            return this.source.buffer = t,
            this.sourceType = "buffer",
            this.autoplay && this.play(),
            this
        },
        play: function() {
            if (this.isPlaying === !0)
                return void console.warn("THREE.Audio: Audio is already playing.");
            if (this.hasPlaybackControl === !1)
                return void console.warn("THREE.Audio: this Audio has no playback control.");
            var t = this.context.createBufferSource();
            return t.buffer = this.source.buffer,
            t.loop = this.source.loop,
            t.onended = this.source.onended,
            t.start(0, this.startTime),
            t.playbackRate.value = this.playbackRate,
            this.isPlaying = !0,
            this.source = t,
            this.connect()
        },
        pause: function() {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
            this.startTime = this.context.currentTime,
            this.isPlaying = !1,
            this)
        },
        stop: function() {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.source.stop(),
            this.startTime = 0,
            this.isPlaying = !1,
            this)
        },
        connect: function() {
            if (this.filters.length > 0) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else
                this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (this.filters.length > 0) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++)
                    this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else
                this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(t) {
            return t || (t = []),
            this.isPlaying === !0 ? (this.disconnect(),
            this.filters = t,
            this.connect()) : this.filters = t,
            this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function(t) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : (this.playbackRate = t,
            this.isPlaying === !0 && (this.source.playbackRate.value = this.playbackRate),
            this)
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return this.hasPlaybackControl === !1 ? (console.warn("THREE.Audio: this Audio has no playback control."),
            !1) : this.source.loop
        },
        setLoop: function(t) {
            return this.hasPlaybackControl === !1 ? void console.warn("THREE.Audio: this Audio has no playback control.") : void (this.source.loop = t)
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(t) {
            return this.gain.gain.value = t,
            this
        }
    }),
    gn.prototype = Object.assign(Object.create(mn.prototype), {
        constructor: gn,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(t) {
            this.panner.refDistance = t
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(t) {
            this.panner.rolloffFactor = t
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(t) {
            this.panner.distanceModel = t
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(t) {
            this.panner.maxDistance = t
        },
        updateMatrixWorld: function() {
            var t = new l;
            return function(e) {
                lt.prototype.updateMatrixWorld.call(this, e),
                t.setFromMatrixPosition(this.matrixWorld),
                this.panner.setPosition(t.x, t.y, t.z)
            }
        }()
    }),
    Object.assign(vn.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data),
            this.data
        },
        getAverageFrequency: function() {
            for (var t = 0, e = this.getFrequencyData(), r = 0; r < e.length; r++)
                t += e[r];
            return t / e.length
        }
    }),
    yn.prototype = {
        constructor: yn,
        accumulate: function(t, e) {
            var r = this.buffer
              , n = this.valueSize
              , i = t * n + n
              , a = this.cumulativeWeight;
            if (0 === a) {
                for (var o = 0; o !== n; ++o)
                    r[i + o] = r[o];
                a = e
            } else {
                a += e;
                var s = e / a;
                this._mixBufferRegion(r, i, 0, s, n)
            }
            this.cumulativeWeight = a
        },
        apply: function(t) {
            var e = this.valueSize
              , r = this.buffer
              , n = t * e + e
              , i = this.cumulativeWeight
              , a = this.binding;
            if (this.cumulativeWeight = 0,
            i < 1) {
                var o = 3 * e;
                this._mixBufferRegion(r, n, o, 1 - i, e)
            }
            for (var s = e, c = e + e; s !== c; ++s)
                if (r[s] !== r[s + e]) {
                    a.setValue(r, n);
                    break
                }
        },
        saveOriginalState: function() {
            var t = this.binding
              , e = this.buffer
              , r = this.valueSize
              , n = 3 * r;
            t.getValue(e, n);
            for (var i = r, a = n; i !== a; ++i)
                e[i] = e[n + i % r];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            var t = 3 * this.valueSize;
            this.binding.setValue(this.buffer, t)
        },
        _select: function(t, e, r, n, i) {
            if (n >= .5)
                for (var a = 0; a !== i; ++a)
                    t[e + a] = t[r + a]
        },
        _slerp: function(t, e, r, n, i) {
            h.slerpFlat(t, e, t, e, t, r, n)
        },
        _lerp: function(t, e, r, n, i) {
            for (var a = 1 - n, o = 0; o !== i; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[r + o] * n
            }
        }
    },
    xn.prototype = {
        constructor: xn,
        getValue: function(t, e) {
            this.bind(),
            this.getValue(t, e)
        },
        setValue: function(t, e) {
            this.bind(),
            this.setValue(t, e)
        },
        bind: function() {
            var t = this.node
              , e = this.parsedPath
              , r = e.objectName
              , n = e.propertyName
              , i = e.propertyIndex;
            if (t || (t = xn.findNode(this.rootNode, e.nodeName) || this.rootNode,
            this.node = t),
            this.getValue = this._getValue_unavailable,
            this.setValue = this._setValue_unavailable,
            !t)
                return void console.error("  trying to update node for track: " + this.path + " but it wasn't found.");
            if (r) {
                var a = e.objectIndex;
                switch (r) {
                case "materials":
                    if (!t.material)
                        return void console.error("  can not bind to material as node does not have a material", this);
                    if (!t.material.materials)
                        return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                    t = t.material.materials;
                    break;
                case "bones":
                    if (!t.skeleton)
                        return void console.error("  can not bind to bones as node does not have a skeleton", this);
                    t = t.skeleton.bones;
                    for (var o = 0; o < t.length; o++)
                        if (t[o].name === a) {
                            a = o;
                            break
                        }
                    break;
                default:
                    if (void 0 === t[r])
                        return void console.error("  can not bind to objectName of node, undefined", this);
                    t = t[r]
                }
                if (void 0 !== a) {
                    if (void 0 === t[a])
                        return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, t);
                    t = t[a]
                }
            }
            var s = t[n];
            if (void 0 === s) {
                var c = e.nodeName;
                return void console.error("  trying to update property for track: " + c + "." + n + " but it wasn't found.", t)
            }
            var h = this.Versioning.None;
            void 0 !== t.needsUpdate ? (h = this.Versioning.NeedsUpdate,
            this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (h = this.Versioning.MatrixWorldNeedsUpdate,
            this.targetObject = t);
            var l = this.BindingType.Direct;
            if (void 0 !== i) {
                if ("morphTargetInfluences" === n) {
                    if (!t.geometry)
                        return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this);
                    if (!t.geometry.morphTargets)
                        return void console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this);
                    for (var o = 0; o < this.node.geometry.morphTargets.length; o++)
                        if (t.geometry.morphTargets[o].name === i) {
                            i = o;
                            break
                        }
                }
                l = this.BindingType.ArrayElement,
                this.resolvedProperty = s,
                this.propertyIndex = i
            } else
                void 0 !== s.fromArray && void 0 !== s.toArray ? (l = this.BindingType.HasFromToArray,
                this.resolvedProperty = s) : void 0 !== s.length ? (l = this.BindingType.EntireArray,
                this.resolvedProperty = s) : this.propertyName = n;
            this.getValue = this.GetterByBindingType[l],
            this.setValue = this.SetterByBindingTypeAndVersioning[l][h]
        },
        unbind: function() {
            this.node = null,
            this.getValue = this._getValue_unbound,
            this.setValue = this._setValue_unbound
        }
    },
    Object.assign(xn.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        _getValue_unbound: xn.prototype.getValue,
        _setValue_unbound: xn.prototype.setValue,
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(t, e) {
            t[e] = this.node[this.propertyName]
        }
        , function(t, e) {
            for (var r = this.resolvedProperty, n = 0, i = r.length; n !== i; ++n)
                t[e++] = r[n]
        }
        , function(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }
        , function(t, e) {
            this.resolvedProperty.toArray(t, e)
        }
        ],
        SetterByBindingTypeAndVersioning: [[function(t, e) {
            this.node[this.propertyName] = t[e]
        }
        , function(t, e) {
            this.node[this.propertyName] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.node[this.propertyName] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            for (var r = this.resolvedProperty, n = 0, i = r.length; n !== i; ++n)
                r[n] = t[e++]
        }
        , function(t, e) {
            for (var r = this.resolvedProperty, n = 0, i = r.length; n !== i; ++n)
                r[n] = t[e++];
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            for (var r = this.resolvedProperty, n = 0, i = r.length; n !== i; ++n)
                r[n] = t[e++];
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e]
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty[this.propertyIndex] = t[e],
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ], [function(t, e) {
            this.resolvedProperty.fromArray(t, e)
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.needsUpdate = !0
        }
        , function(t, e) {
            this.resolvedProperty.fromArray(t, e),
            this.targetObject.matrixWorldNeedsUpdate = !0
        }
        ]]
    }),
    xn.Composite = function(t, e, r) {
        var n = r || xn.parseTrackName(e);
        this._targetGroup = t,
        this._bindings = t.subscribe_(e, n)
    }
    ,
    xn.Composite.prototype = {
        constructor: xn.Composite,
        getValue: function(t, e) {
            this.bind();
            var r = this._targetGroup.nCachedObjects_
              , n = this._bindings[r];
            void 0 !== n && n.getValue(t, e)
        },
        setValue: function(t, e) {
            for (var r = this._bindings, n = this._targetGroup.nCachedObjects_, i = r.length; n !== i; ++n)
                r[n].setValue(t, e)
        },
        bind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, r = t.length; e !== r; ++e)
                t[e].bind()
        },
        unbind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, r = t.length; e !== r; ++e)
                t[e].unbind()
        }
    },
    xn.create = function(t, e, r) {
        return t && t.isAnimationObjectGroup ? new xn.Composite(t,e,r) : new xn(t,e,r)
    }
    ,
    xn.parseTrackName = function(t) {
        var e = /^((?:\w+\/)*)(\w+)?(?:\.(\w+)(?:\[(.+)\])?)?\.(\w+)(?:\[(.+)\])?$/
          , r = e.exec(t);
        if (!r)
            throw new Error("cannot parse trackName at all: " + t);
        var n = {
            nodeName: r[2],
            objectName: r[3],
            objectIndex: r[4],
            propertyName: r[5],
            propertyIndex: r[6]
        };
        if (null === n.propertyName || 0 === n.propertyName.length)
            throw new Error("can not parse propertyName from trackName: " + t);
        return n
    }
    ,
    xn.findNode = function(t, e) {
        if (!e || "" === e || "root" === e || "." === e || e === -1 || e === t.name || e === t.uuid)
            return t;
        if (t.skeleton) {
            var r = function(t) {
                for (var r = 0; r < t.bones.length; r++) {
                    var n = t.bones[r];
                    if (n.name === e)
                        return n
                }
                return null
            }
              , n = r(t.skeleton);
            if (n)
                return n
        }
        if (t.children) {
            var i = function(t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    if (n.name === e || n.uuid === e)
                        return n;
                    var a = i(n.children);
                    if (a)
                        return a
                }
                return null
            }
              , a = i(t.children);
            if (a)
                return a
        }
        return null
    }
    ,
    _n.prototype = {
        constructor: _n,
        isAnimationObjectGroup: !0,
        add: function(t) {
            for (var e = this._objects, r = e.length, n = this.nCachedObjects_, i = this._indicesByUUID, a = this._paths, o = this._parsedPaths, s = this._bindings, c = s.length, h = 0, l = arguments.length; h !== l; ++h) {
                var u = arguments[h]
                  , p = u.uuid
                  , d = i[p];
                if (void 0 === d) {
                    d = r++,
                    i[p] = d,
                    e.push(u);
                    for (var f = 0, m = c; f !== m; ++f)
                        s[f].push(new xn(u,a[f],o[f]))
                } else if (d < n) {
                    var g = e[d]
                      , v = --n
                      , y = e[v];
                    i[y.uuid] = d,
                    e[d] = y,
                    i[p] = v,
                    e[v] = u;
                    for (var f = 0, m = c; f !== m; ++f) {
                        var x = s[f]
                          , _ = x[v]
                          , b = x[d];
                        x[d] = _,
                        void 0 === b && (b = new xn(u,a[f],o[f])),
                        x[v] = b
                    }
                } else
                    e[d] !== g && console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...")
            }
            this.nCachedObjects_ = n
        },
        remove: function(t) {
            for (var e = this._objects, r = this.nCachedObjects_, n = this._indicesByUUID, i = this._bindings, a = i.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o]
                  , h = c.uuid
                  , l = n[h];
                if (void 0 !== l && l >= r) {
                    var u = r++
                      , p = e[u];
                    n[p.uuid] = l,
                    e[l] = p,
                    n[h] = u,
                    e[u] = c;
                    for (var d = 0, f = a; d !== f; ++d) {
                        var m = i[d]
                          , g = m[u]
                          , v = m[l];
                        m[l] = g,
                        m[u] = v
                    }
                }
            }
            this.nCachedObjects_ = r
        },
        uncache: function(t) {
            for (var e = this._objects, r = e.length, n = this.nCachedObjects_, i = this._indicesByUUID, a = this._bindings, o = a.length, s = 0, c = arguments.length; s !== c; ++s) {
                var h = arguments[s]
                  , l = h.uuid
                  , u = i[l];
                if (void 0 !== u)
                    if (delete i[l],
                    u < n) {
                        var p = --n
                          , d = e[p]
                          , f = --r
                          , m = e[f];
                        i[d.uuid] = u,
                        e[u] = d,
                        i[m.uuid] = p,
                        e[p] = m,
                        e.pop();
                        for (var g = 0, v = o; g !== v; ++g) {
                            var y = a[g]
                              , x = y[p]
                              , _ = y[f];
                            y[u] = x,
                            y[p] = _,
                            y.pop()
                        }
                    } else {
                        var f = --r
                          , m = e[f];
                        i[m.uuid] = u,
                        e[u] = m,
                        e.pop();
                        for (var g = 0, v = o; g !== v; ++g) {
                            var y = a[g];
                            y[u] = y[f],
                            y.pop()
                        }
                    }
            }
            this.nCachedObjects_ = n
        },
        subscribe_: function(t, e) {
            var r = this._bindingsIndicesByPath
              , n = r[t]
              , i = this._bindings;
            if (void 0 !== n)
                return i[n];
            var a = this._paths
              , o = this._parsedPaths
              , s = this._objects
              , c = s.length
              , h = this.nCachedObjects_
              , l = new Array(c);
            n = i.length,
            r[t] = n,
            a.push(t),
            o.push(e),
            i.push(l);
            for (var u = h, p = s.length; u !== p; ++u) {
                var d = s[u];
                l[u] = new xn(d,t,e)
            }
            return l
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath
              , r = e[t];
            if (void 0 !== r) {
                var n = this._paths
                  , i = this._parsedPaths
                  , a = this._bindings
                  , o = a.length - 1
                  , s = a[o]
                  , c = t[o];
                e[c] = r,
                a[r] = s,
                a.pop(),
                i[r] = i[o],
                i.pop(),
                n[r] = n[o],
                n.pop()
            }
        }
    },
    bn.prototype = {
        constructor: bn,
        play: function() {
            return this._mixer._activateAction(this),
            this
        },
        stop: function() {
            return this._mixer._deactivateAction(this),
            this.reset()
        },
        reset: function() {
            return this.paused = !1,
            this.enabled = !0,
            this.time = 0,
            this._loopCount = -1,
            this._startTime = null,
            this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(t) {
            return this._startTime = t,
            this
        },
        setLoop: function(t, e) {
            return this.loop = t,
            this.repetitions = e,
            this
        },
        setEffectiveWeight: function(t) {
            return this.weight = t,
            this._effectiveWeight = this.enabled ? t : 0,
            this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function(t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function(t, e, r) {
            if (t.fadeOut(e),
            this.fadeIn(e),
            r) {
                var n = this._clip.duration
                  , i = t._clip.duration
                  , a = i / n
                  , o = n / i;
                t.warp(1, a, e),
                this.warp(o, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, r) {
            return t.crossFadeFrom(this, e, r)
        },
        stopFading: function() {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        setEffectiveTimeScale: function(t) {
            return this.timeScale = t,
            this._effectiveTimeScale = this.paused ? 0 : t,
            this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(t) {
            return this.timeScale = this._clip.duration / t,
            this.stopWarping()
        },
        syncWith: function(t) {
            return this.time = t.time,
            this.timeScale = t.timeScale,
            this.stopWarping()
        },
        halt: function(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function(t, e, r) {
            var n = this._mixer
              , i = n.time
              , a = this._timeScaleInterpolant
              , o = this.timeScale;
            null === a && (a = n._lendControlInterpolant(),
            this._timeScaleInterpolant = a);
            var s = a.parameterPositions
              , c = a.sampleValues;
            return s[0] = i,
            s[1] = i + r,
            c[0] = t / o,
            c[1] = e / o,
            this
        },
        stopWarping: function() {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null,
            this._mixer._takeBackControlInterpolant(t)),
            this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(t, e, r, n) {
            var i = this._startTime;
            if (null !== i) {
                var a = (t - i) * r;
                if (a < 0 || 0 === r)
                    return;
                this._startTime = null,
                e = r * a
            }
            e *= this._updateTimeScale(t);
            var o = this._updateTime(e)
              , s = this._updateWeight(t);
            if (s > 0)
                for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l)
                    c[l].evaluate(o),
                    h[l].accumulate(n, s)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var r = this._weightInterpolant;
                if (null !== r) {
                    var n = r.evaluate(t)[0];
                    e *= n,
                    t > r.parameterPositions[1] && (this.stopFading(),
                    0 === n && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e,
            e
        },
        _updateTimeScale: function(t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var r = this._timeScaleInterpolant;
                if (null !== r) {
                    var n = r.evaluate(t)[0];
                    e *= n,
                    t > r.parameterPositions[1] && (this.stopWarping(),
                    0 === e ? this.paused = !0 : this.timeScale = e)
                }
            }
            return this._effectiveTimeScale = e,
            e
        },
        _updateTime: function(t) {
            var e = this.time + t;
            if (0 === t)
                return e;
            var r = this._clip.duration
              , n = this.loop
              , i = this._loopCount;
            if (n === co) {
                i === -1 && (this.loopCount = 0,
                this._setEndings(!0, !0, !1));
                t: {
                    if (e >= r)
                        e = r;
                    else {
                        if (!(e < 0))
                            break t;
                        e = 0
                    }
                    this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                    this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: t < 0 ? -1 : 1
                    })
                }
            } else {
                var a = n === lo;
                if (i === -1 && (t >= 0 ? (i = 0,
                this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)),
                e >= r || e < 0) {
                    var o = Math.floor(e / r);
                    e -= r * o,
                    i += Math.abs(o);
                    var s = this.repetitions - i;
                    if (s < 0)
                        this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                        e = t > 0 ? r : 0,
                        this._mixer.dispatchEvent({
                            type: "finished",
                            action: this,
                            direction: t > 0 ? 1 : -1
                        });
                    else {
                        if (0 === s) {
                            var c = t < 0;
                            this._setEndings(c, !c, a)
                        } else
                            this._setEndings(!1, !1, a);
                        this._loopCount = i,
                        this._mixer.dispatchEvent({
                            type: "loop",
                            action: this,
                            loopDelta: o
                        })
                    }
                }
                if (a && 1 === (1 & i))
                    return this.time = e,
                    r - e
            }
            return this.time = e,
            e
        },
        _setEndings: function(t, e, r) {
            var n = this._interpolantSettings;
            r ? (n.endingStart = go,
            n.endingEnd = go) : (t ? n.endingStart = this.zeroSlopeAtStart ? go : mo : n.endingStart = vo,
            e ? n.endingEnd = this.zeroSlopeAtEnd ? go : mo : n.endingEnd = vo)
        },
        _scheduleFading: function(t, e, r) {
            var n = this._mixer
              , i = n.time
              , a = this._weightInterpolant;
            null === a && (a = n._lendControlInterpolant(),
            this._weightInterpolant = a);
            var o = a.parameterPositions
              , s = a.sampleValues;
            return o[0] = i,
            s[0] = e,
            o[1] = i + t,
            s[1] = r,
            this
        }
    },
    Object.assign(wn.prototype, e.prototype, {
        clipAction: function(t, e) {
            var r = e || this._root
              , n = r.uuid
              , i = "string" == typeof t ? Wr.findByName(r, t) : t
              , a = null !== i ? i.uuid : t
              , o = this._actionsByClip[a]
              , s = null;
            if (void 0 !== o) {
                var c = o.actionByRoot[n];
                if (void 0 !== c)
                    return c;
                s = o.knownActions[0],
                null === i && (i = s._clip)
            }
            if (null === i)
                return null;
            var h = new bn(this,i,e);
            return this._bindAction(h, s),
            this._addInactiveAction(h, a, n),
            h
        },
        existingAction: function(t, e) {
            var r = e || this._root
              , n = r.uuid
              , i = "string" == typeof t ? Wr.findByName(r, t) : t
              , a = i ? i.uuid : t
              , o = this._actionsByClip[a];
            return void 0 !== o ? o.actionByRoot[n] || null : null
        },
        stopAllAction: function() {
            var t = this._actions
              , e = this._nActiveActions
              , r = this._bindings
              , n = this._nActiveBindings;
            this._nActiveActions = 0,
            this._nActiveBindings = 0;
            for (var i = 0; i !== e; ++i)
                t[i].reset();
            for (var i = 0; i !== n; ++i)
                r[i].useCount = 0;
            return this
        },
        update: function(t) {
            t *= this.timeScale;
            for (var e = this._actions, r = this._nActiveActions, n = this.time += t, i = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== r; ++o) {
                var s = e[o];
                s.enabled && s._update(n, t, i, a)
            }
            for (var c = this._bindings, h = this._nActiveBindings, o = 0; o !== h; ++o)
                c[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(t) {
            var e = this._actions
              , r = t.uuid
              , n = this._actionsByClip
              , i = n[r];
            if (void 0 !== i) {
                for (var a = i.knownActions, o = 0, s = a.length; o !== s; ++o) {
                    var c = a[o];
                    this._deactivateAction(c);
                    var h = c._cacheIndex
                      , l = e[e.length - 1];
                    c._cacheIndex = null,
                    c._byClipCacheIndex = null,
                    l._cacheIndex = h,
                    e[h] = l,
                    e.pop(),
                    this._removeInactiveBindingsForAction(c)
                }
                delete n[r]
            }
        },
        uncacheRoot: function(t) {
            var e = t.uuid
              , r = this._actionsByClip;
            for (var n in r) {
                var i = r[n].actionByRoot
                  , a = i[e];
                void 0 !== a && (this._deactivateAction(a),
                this._removeInactiveAction(a))
            }
            var o = this._bindingsByRootAndName
              , s = o[e];
            if (void 0 !== s)
                for (var c in s) {
                    var h = s[c];
                    h.restoreOriginalState(),
                    this._removeInactiveBinding(h)
                }
        },
        uncacheAction: function(t, e) {
            var r = this.existingAction(t, e);
            null !== r && (this._deactivateAction(r),
            this._removeInactiveAction(r))
        }
    }),
    Object.assign(wn.prototype, {
        _bindAction: function(t, e) {
            var r = t._localRoot || this._root
              , n = t._clip.tracks
              , i = n.length
              , a = t._propertyBindings
              , o = t._interpolants
              , s = r.uuid
              , c = this._bindingsByRootAndName
              , h = c[s];
            void 0 === h && (h = {},
            c[s] = h);
            for (var l = 0; l !== i; ++l) {
                var u = n[l]
                  , p = u.name
                  , d = h[p];
                if (void 0 !== d)
                    a[l] = d;
                else {
                    if (d = a[l],
                    void 0 !== d) {
                        null === d._cacheIndex && (++d.referenceCount,
                        this._addInactiveBinding(d, s, p));
                        continue
                    }
                    var f = e && e._propertyBindings[l].binding.parsedPath;
                    d = new yn(xn.create(r, p, f),u.ValueTypeName,u.getValueSize()),
                    ++d.referenceCount,
                    this._addInactiveBinding(d, s, p),
                    a[l] = d
                }
                o[l].resultBuffer = d.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid
                      , r = t._clip.uuid
                      , n = this._actionsByClip[r];
                    this._bindAction(t, n && n.knownActions[0]),
                    this._addInactiveAction(t, r, e)
                }
                for (var i = t._propertyBindings, a = 0, o = i.length; a !== o; ++a) {
                    var s = i[a];
                    0 === s.useCount++ && (this._lendBinding(s),
                    s.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, r = 0, n = e.length; r !== n; ++r) {
                    var i = e[r];
                    0 === --i.useCount && (i.restoreOriginalState(),
                    this._takeBackBinding(i))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [],
            this._nActiveActions = 0,
            this._actionsByClip = {},
            this._bindings = [],
            this._nActiveBindings = 0,
            this._bindingsByRootAndName = {},
            this._controlInterpolants = [],
            this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(t) {
            var e = t._cacheIndex;
            return null !== e && e < this._nActiveActions
        },
        _addInactiveAction: function(t, e, r) {
            var n = this._actions
              , i = this._actionsByClip
              , a = i[e];
            if (void 0 === a)
                a = {
                    knownActions: [t],
                    actionByRoot: {}
                },
                t._byClipCacheIndex = 0,
                i[e] = a;
            else {
                var o = a.knownActions;
                t._byClipCacheIndex = o.length,
                o.push(t)
            }
            t._cacheIndex = n.length,
            n.push(t),
            a.actionByRoot[r] = t
        },
        _removeInactiveAction: function(t) {
            var e = this._actions
              , r = e[e.length - 1]
              , n = t._cacheIndex;
            r._cacheIndex = n,
            e[n] = r,
            e.pop(),
            t._cacheIndex = null;
            var i = t._clip.uuid
              , a = this._actionsByClip
              , o = a[i]
              , s = o.knownActions
              , c = s[s.length - 1]
              , h = t._byClipCacheIndex;
            c._byClipCacheIndex = h,
            s[h] = c,
            s.pop(),
            t._byClipCacheIndex = null;
            var l = o.actionByRoot
              , u = (e._localRoot || this._root).uuid;
            delete l[u],
            0 === s.length && delete a[i],
            this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            for (var e = t._propertyBindings, r = 0, n = e.length; r !== n; ++r) {
                var i = e[r];
                0 === --i.referenceCount && this._removeInactiveBinding(i)
            }
        },
        _lendAction: function(t) {
            var e = this._actions
              , r = t._cacheIndex
              , n = this._nActiveActions++
              , i = e[n];
            t._cacheIndex = n,
            e[n] = t,
            i._cacheIndex = r,
            e[r] = i
        },
        _takeBackAction: function(t) {
            var e = this._actions
              , r = t._cacheIndex
              , n = --this._nActiveActions
              , i = e[n];
            t._cacheIndex = n,
            e[n] = t,
            i._cacheIndex = r,
            e[r] = i
        },
        _addInactiveBinding: function(t, e, r) {
            var n = this._bindingsByRootAndName
              , i = n[e]
              , a = this._bindings;
            void 0 === i && (i = {},
            n[e] = i),
            i[r] = t,
            t._cacheIndex = a.length,
            a.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings
              , r = t.binding
              , n = r.rootNode.uuid
              , i = r.path
              , a = this._bindingsByRootAndName
              , o = a[n]
              , s = e[e.length - 1]
              , c = t._cacheIndex;
            s._cacheIndex = c,
            e[c] = s,
            e.pop(),
            delete o[i];
            t: {
                for (var h in o)
                    break t;
                delete a[n]
            }
        },
        _lendBinding: function(t) {
            var e = this._bindings
              , r = t._cacheIndex
              , n = this._nActiveBindings++
              , i = e[n];
            t._cacheIndex = n,
            e[n] = t,
            i._cacheIndex = r,
            e[r] = i
        },
        _takeBackBinding: function(t) {
            var e = this._bindings
              , r = t._cacheIndex
              , n = --this._nActiveBindings
              , i = e[n];
            t._cacheIndex = n,
            e[n] = t,
            i._cacheIndex = r,
            e[r] = i
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants
              , e = this._nActiveControlInterpolants++
              , r = t[e];
            return void 0 === r && (r = new Dr(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),
            r.__cacheIndex = e,
            t[e] = r),
            r
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants
              , r = t.__cacheIndex
              , n = --this._nActiveControlInterpolants
              , i = e[n];
            t.__cacheIndex = n,
            e[n] = t,
            i.__cacheIndex = r,
            e[r] = i
        },
        _controlInterpolantsResultBuffer: new Float32Array(1)
    }),
    Mn.prototype = {
        constructor: Mn,
        onUpdate: function(t) {
            return this.dynamic = !0,
            this.onUpdateCallback = t,
            this
        }
    },
    En.prototype = Object.create(Pt.prototype),
    En.prototype.constructor = En,
    En.prototype.isInstancedBufferGeometry = !0,
    En.prototype.addGroup = function(t, e, r) {
        this.groups.push({
            start: t,
            count: e,
            instances: r
        })
    }
    ,
    En.prototype.copy = function(t) {
        var e = t.index;
        null !== e && this.setIndex(e.clone());
        var r = t.attributes;
        for (var n in r) {
            var i = r[n];
            this.addAttribute(n, i.clone())
        }
        for (var a = t.groups, o = 0, s = a.length; o < s; o++) {
            var c = a[o];
            this.addGroup(c.start, c.count, c.instances)
        }
        return this
    }
    ,
    Tn.prototype = {
        constructor: Tn,
        isInterleavedBufferAttribute: !0,
        get count() {
            return this.data.count
        },
        get array() {
            return this.data.array
        },
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e,
            this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e,
            this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e,
            this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e,
            this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, r) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = r,
            this
        },
        setXYZ: function(t, e, r, n) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = r,
            this.data.array[t + 2] = n,
            this
        },
        setXYZW: function(t, e, r, n, i) {
            return t = t * this.data.stride + this.offset,
            this.data.array[t + 0] = e,
            this.data.array[t + 1] = r,
            this.data.array[t + 2] = n,
            this.data.array[t + 3] = i,
            this
        }
    },
    Sn.prototype = {
        constructor: Sn,
        isInterleavedBuffer: !0,
        set needsUpdate(t) {
            t === !0 && this.version++
        },
        setDynamic: function(t) {
            return this.dynamic = t,
            this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array),
            this.count = t.count,
            this.stride = t.stride,
            this.dynamic = t.dynamic,
            this
        },
        copyAt: function(t, e, r) {
            t *= this.stride,
            r *= e.stride;
            for (var n = 0, i = this.stride; n < i; n++)
                this.array[t + n] = e.array[r + n];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0),
            this.array.set(t, e),
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    },
    An.prototype = Object.create(Sn.prototype),
    An.prototype.constructor = An,
    An.prototype.isInstancedInterleavedBuffer = !0,
    An.prototype.copy = function(t) {
        return Sn.prototype.copy.call(this, t),
        this.meshPerAttribute = t.meshPerAttribute,
        this
    }
    ,
    Ln.prototype = Object.create(gt.prototype),
    Ln.prototype.constructor = Ln,
    Ln.prototype.isInstancedBufferAttribute = !0,
    Ln.prototype.copy = function(t) {
        return gt.prototype.copy.call(this, t),
        this.meshPerAttribute = t.meshPerAttribute,
        this
    }
    ,
    Rn.prototype = {
        constructor: Rn,
        linePrecision: 1,
        set: function(t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld),
            this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e),
            this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(t, e) {
            var r = [];
            return Cn(t, this, r, e),
            r.sort(Pn),
            r
        },
        intersectObjects: function(t, e) {
            var r = [];
            if (Array.isArray(t) === !1)
                return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
                r;
            for (var n = 0, i = t.length; n < i; n++)
                Cn(t[n], this, r, e);
            return r.sort(Pn),
            r
        }
    },
    Un.prototype = {
        constructor: Un,
        start: function() {
            this.startTime = (performance || Date).now(),
            this.oldTime = this.startTime,
            this.running = !0
        },
        stop: function() {
            this.getElapsedTime(),
            this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(),
            this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running && this.start(),
            this.running) {
                var e = (performance || Date).now();
                t = (e - this.oldTime) / 1e3,
                this.oldTime = e,
                this.elapsedTime += t
            }
            return t
        }
    },
    Dn.prototype = {
        constructor: Dn,
        set: function(t, e, r) {
            return this.radius = t,
            this.phi = e,
            this.theta = r,
            this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius.copy(t.radius),
            this.phi.copy(t.phi),
            this.theta.copy(t.theta),
            this
        },
        makeSafe: function() {
            var t = 1e-6;
            return this.phi = Math.max(t, Math.min(Math.PI - t, this.phi)),
            this
        },
        setFromVector3: function(e) {
            return this.radius = e.length(),
            0 === this.radius ? (this.theta = 0,
            this.phi = 0) : (this.theta = Math.atan2(e.x, e.z),
            this.phi = Math.acos(t.Math.clamp(e.y / this.radius, -1, 1))),
            this
        }
    },
    Nn.prototype = Object.create(Ct.prototype),
    Nn.prototype.constructor = Nn,
    Nn.prototype.createAnimation = function(t, e, r, n) {
        var i = {
            start: e,
            end: r,
            length: r - e + 1,
            fps: n,
            duration: (r - e) / n,
            lastFrame: 0,
            currentFrame: 0,
            active: !1,
            time: 0,
            direction: 1,
            weight: 1,
            directionBackwards: !1,
            mirroredLoop: !1
        };
        this.animationsMap[t] = i,
        this.animationsList.push(i)
    }
    ,
    Nn.prototype.autoCreateAnimations = function(t) {
        for (var e, r = /([a-z]+)_?(\d+)/i, n = {}, i = this.geometry, a = 0, o = i.morphTargets.length; a < o; a++) {
            var s = i.morphTargets[a]
              , c = s.name.match(r);
            if (c && c.length > 1) {
                var h = c[1];
                n[h] || (n[h] = {
                    start: 1 / 0,
                    end: -(1 / 0)
                });
                var l = n[h];
                a < l.start && (l.start = a),
                a > l.end && (l.end = a),
                e || (e = h)
            }
        }
        for (var h in n) {
            var l = n[h];
            this.createAnimation(h, l.start, l.end, t)
        }
        this.firstAnimation = e
    }
    ,
    Nn.prototype.setAnimationDirectionForward = function(t) {
        var e = this.animationsMap[t];
        e && (e.direction = 1,
        e.directionBackwards = !1)
    }
    ,
    Nn.prototype.setAnimationDirectionBackward = function(t) {
        var e = this.animationsMap[t];
        e && (e.direction = -1,
        e.directionBackwards = !0)
    }
    ,
    Nn.prototype.setAnimationFPS = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.fps = e,
        r.duration = (r.end - r.start) / r.fps)
    }
    ,
    Nn.prototype.setAnimationDuration = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.duration = e,
        r.fps = (r.end - r.start) / r.duration)
    }
    ,
    Nn.prototype.setAnimationWeight = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.weight = e)
    }
    ,
    Nn.prototype.setAnimationTime = function(t, e) {
        var r = this.animationsMap[t];
        r && (r.time = e)
    }
    ,
    Nn.prototype.getAnimationTime = function(t) {
        var e = 0
          , r = this.animationsMap[t];
        return r && (e = r.time),
        e
    }
    ,
    Nn.prototype.getAnimationDuration = function(t) {
        var e = -1
          , r = this.animationsMap[t];
        return r && (e = r.duration),
        e
    }
    ,
    Nn.prototype.playAnimation = function(t) {
        var e = this.animationsMap[t];
        e ? (e.time = 0,
        e.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + t + "] undefined in .playAnimation()")
    }
    ,
    Nn.prototype.stopAnimation = function(t) {
        var e = this.animationsMap[t];
        e && (e.active = !1)
    }
    ,
    Nn.prototype.update = function(e) {
        for (var r = 0, n = this.animationsList.length; r < n; r++) {
            var i = this.animationsList[r];
            if (i.active) {
                var a = i.duration / i.length;
                i.time += i.direction * e,
                i.mirroredLoop ? (i.time > i.duration || i.time < 0) && (i.direction *= -1,
                i.time > i.duration && (i.time = i.duration,
                i.directionBackwards = !0),
                i.time < 0 && (i.time = 0,
                i.directionBackwards = !1)) : (i.time = i.time % i.duration,
                i.time < 0 && (i.time += i.duration));
                var o = i.start + t.Math.clamp(Math.floor(i.time / a), 0, i.length - 1)
                  , s = i.weight;
                o !== i.currentFrame && (this.morphTargetInfluences[i.lastFrame] = 0,
                this.morphTargetInfluences[i.currentFrame] = 1 * s,
                this.morphTargetInfluences[o] = 0,
                i.lastFrame = i.currentFrame,
                i.currentFrame = o);
                var c = i.time % a / a;
                i.directionBackwards && (c = 1 - c),
                i.currentFrame !== i.lastFrame ? (this.morphTargetInfluences[i.currentFrame] = c * s,
                this.morphTargetInfluences[i.lastFrame] = (1 - c) * s) : this.morphTargetInfluences[i.currentFrame] = s
            }
        }
    }
    ,
    On.prototype = Object.create(lt.prototype),
    On.prototype.constructor = On,
    On.prototype.isImmediateRenderObject = !0,
    Fn.prototype = Object.create(Me.prototype),
    Fn.prototype.constructor = Fn,
    Fn.prototype.update = function() {
        var t = new l
          , e = new l
          , r = new nt;
        return function() {
            var n = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0),
            r.getNormalMatrix(this.object.matrixWorld);
            var i = this.object.matrixWorld
              , a = this.geometry.attributes.position
              , o = this.object.geometry;
            if (o && o.isGeometry)
                for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++)
                    for (var p = c[l], d = 0, f = p.vertexNormals.length; d < f; d++) {
                        var m = s[p[n[d]]]
                          , g = p.vertexNormals[d];
                        t.copy(m).applyMatrix4(i),
                        e.copy(g).applyMatrix3(r).normalize().multiplyScalar(this.size).add(t),
                        a.setXYZ(h, t.x, t.y, t.z),
                        h += 1,
                        a.setXYZ(h, e.x, e.y, e.z),
                        h += 1
                    }
            else if (o && o.isBufferGeometry)
                for (var v = o.attributes.position, y = o.attributes.normal, h = 0, d = 0, f = v.count; d < f; d++)
                    t.set(v.getX(d), v.getY(d), v.getZ(d)).applyMatrix4(i),
                    e.set(y.getX(d), y.getY(d), y.getZ(d)),
                    e.applyMatrix3(r).normalize().multiplyScalar(this.size).add(t),
                    a.setXYZ(h, t.x, t.y, t.z),
                    h += 1,
                    a.setXYZ(h, e.x, e.y, e.z),
                    h += 1;
            return a.needsUpdate = !0,
            this
        }
    }(),
    zn.prototype = Object.create(lt.prototype),
    zn.prototype.constructor = zn,
    zn.prototype.dispose = function() {
        this.cone.geometry.dispose(),
        this.cone.material.dispose()
    }
    ,
    zn.prototype.update = function() {
        var t = new l
          , e = new l;
        return function() {
            var r = this.light.distance ? this.light.distance : 1e3
              , n = r * Math.tan(this.light.angle);
            this.cone.scale.set(n, n, r),
            t.setFromMatrixPosition(this.light.matrixWorld),
            e.setFromMatrixPosition(this.light.target.matrixWorld),
            this.cone.lookAt(e.sub(t)),
            this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
        }
    }(),
    Bn.prototype = Object.create(Me.prototype),
    Bn.prototype.constructor = Bn,
    Bn.prototype.getBoneList = function(t) {
        var e = [];
        t && t.isBone && e.push(t);
        for (var r = 0; r < t.children.length; r++)
            e.push.apply(e, this.getBoneList(t.children[r]));
        return e
    }
    ,
    Bn.prototype.update = function() {
        for (var t = this.geometry, e = (new u).getInverse(this.root.matrixWorld), r = new u, n = 0, i = 0; i < this.bones.length; i++) {
            var a = this.bones[i];
            a.parent && a.parent.isBone && (r.multiplyMatrices(e, a.matrixWorld),
            t.vertices[n].setFromMatrixPosition(r),
            r.multiplyMatrices(e, a.parent.matrixWorld),
            t.vertices[n + 1].setFromMatrixPosition(r),
            n += 2)
        }
        t.verticesNeedUpdate = !0,
        t.computeBoundingSphere()
    }
    ,
    Gn.prototype = Object.create(Ct.prototype),
    Gn.prototype.constructor = Gn,
    Gn.prototype.dispose = function() {
        this.geometry.dispose(),
        this.material.dispose()
    }
    ,
    Gn.prototype.update = function() {
        this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
    ,
    Hn.prototype = Object.create(lt.prototype),
    Hn.prototype.constructor = Hn,
    Hn.prototype.dispose = function() {
        this.lightSphere.geometry.dispose(),
        this.lightSphere.material.dispose()
    }
    ,
    Hn.prototype.update = function() {
        var t = new l;
        return function() {
            this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),
            this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),
            this.lightSphere.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()),
            this.lightSphere.geometry.colorsNeedUpdate = !0
        }
    }(),
    Vn.prototype = Object.create(Me.prototype),
    Vn.prototype.constructor = Vn,
    Vn.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }
    ,
    kn.prototype = Object.create(Me.prototype),
    kn.prototype.constructor = kn,
    kn.prototype.update = function() {
        var t = new l
          , e = new l
          , r = new nt;
        return function() {
            this.object.updateMatrixWorld(!0),
            r.getNormalMatrix(this.object.matrixWorld);
            for (var n = this.object.matrixWorld, i = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
                var u = s[h]
                  , p = u.normal;
                t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n),
                e.copy(p).applyMatrix3(r).normalize().multiplyScalar(this.size).add(t),
                i.setXYZ(c, t.x, t.y, t.z),
                c += 1,
                i.setXYZ(c, e.x, e.y, e.z),
                c += 1
            }
            return i.needsUpdate = !0,
            this
        }
    }(),
    jn.prototype = Object.create(lt.prototype),
    jn.prototype.constructor = jn,
    jn.prototype.dispose = function() {
        var t = this.children[0]
          , e = this.children[1];
        t.geometry.dispose(),
        t.material.dispose(),
        e.geometry.dispose(),
        e.material.dispose()
    }
    ,
    jn.prototype.update = function() {
        var t = new l
          , e = new l
          , r = new l;
        return function() {
            t.setFromMatrixPosition(this.light.matrixWorld),
            e.setFromMatrixPosition(this.light.target.matrixWorld),
            r.subVectors(e, t);
            var n = this.children[0]
              , i = this.children[1];
            n.lookAt(r),
            n.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
            i.lookAt(r),
            i.scale.z = r.length()
        }
    }(),
    Wn.prototype = Object.create(Me.prototype),
    Wn.prototype.constructor = Wn,
    Wn.prototype.update = function() {
        function t(t, a, o, s) {
            n.set(a, o, s).unproject(i);
            var c = r[t];
            if (void 0 !== c)
                for (var h = 0, l = c.length; h < l; h++)
                    e.vertices[c[h]].copy(n)
        }
        var e, r, n = new l, i = new Dt;
        return function() {
            e = this.geometry,
            r = this.pointMap;
            var n = 1
              , a = 1;
            i.projectionMatrix.copy(this.camera.projectionMatrix),
            t("c", 0, 0, -1),
            t("t", 0, 0, 1),
            t("n1", -n, -a, -1),
            t("n2", n, -a, -1),
            t("n3", -n, a, -1),
            t("n4", n, a, -1),
            t("f1", -n, -a, 1),
            t("f2", n, -a, 1),
            t("f3", -n, a, 1),
            t("f4", n, a, 1),
            t("u1", .7 * n, 1.1 * a, -1),
            t("u2", .7 * -n, 1.1 * a, -1),
            t("u3", 0, 2 * a, -1),
            t("cf1", -n, 0, 1),
            t("cf2", n, 0, 1),
            t("cf3", 0, -a, 1),
            t("cf4", 0, a, 1),
            t("cn1", -n, 0, -1),
            t("cn2", n, 0, -1),
            t("cn3", 0, -a, -1),
            t("cn4", 0, a, -1),
            e.verticesNeedUpdate = !0
        }
    }(),
    Xn.prototype = Object.create(Ct.prototype),
    Xn.prototype.constructor = Xn,
    Xn.prototype.update = function() {
        this.box.setFromObject(this.object),
        this.box.size(this.scale),
        this.box.getCenter(this.position)
    }
    ,
    qn.prototype = Object.create(Me.prototype),
    qn.prototype.constructor = qn,
    qn.prototype.update = function() {
        var t = new et;
        return function(e) {
            if (e && e.isBox3 ? t.copy(e) : t.setFromObject(e),
            !t.isEmpty()) {
                var r = t.min
                  , n = t.max
                  , i = this.geometry.attributes.position
                  , a = i.array;
                a[0] = n.x,
                a[1] = n.y,
                a[2] = n.z,
                a[3] = r.x,
                a[4] = n.y,
                a[5] = n.z,
                a[6] = r.x,
                a[7] = r.y,
                a[8] = n.z,
                a[9] = n.x,
                a[10] = r.y,
                a[11] = n.z,
                a[12] = n.x,
                a[13] = n.y,
                a[14] = r.z,
                a[15] = r.x,
                a[16] = n.y,
                a[17] = r.z,
                a[18] = r.x,
                a[19] = r.y,
                a[20] = r.z,
                a[21] = n.x,
                a[22] = r.y,
                a[23] = r.z,
                i.needsUpdate = !0,
                this.geometry.computeBoundingSphere()
            }
        }
    }();
    var qc = new Pt;
    qc.addAttribute("position", new Et([0, 0, 0, 0, 1, 0],3));
    var Yc = new tr(0,.5,1,5,1);
    Yc.translate(0, -.5, 0),
    Yn.prototype = Object.create(lt.prototype),
    Yn.prototype.constructor = Yn,
    Yn.prototype.setDirection = function() {
        var t, e = new l;
        return function(r) {
            r.y > .99999 ? this.quaternion.set(0, 0, 0, 1) : r.y < -.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(r.z, 0, -r.x).normalize(),
            t = Math.acos(r.y),
            this.quaternion.setFromAxisAngle(e, t))
        }
    }(),
    Yn.prototype.setLength = function(t, e, r) {
        void 0 === e && (e = .2 * t),
        void 0 === r && (r = .2 * e),
        this.line.scale.set(1, Math.max(0, t - e), 1),
        this.line.updateMatrix(),
        this.cone.scale.set(r, e, r),
        this.cone.position.y = t,
        this.cone.updateMatrix()
    }
    ,
    Yn.prototype.setColor = function(t) {
        this.line.material.color.copy(t),
        this.cone.material.color.copy(t)
    }
    ,
    Zn.prototype = Object.create(Me.prototype),
    Zn.prototype.constructor = Zn,
    t.CatmullRomCurve3 = function() {
        function t() {}
        var e = new l
          , r = new t
          , n = new t
          , i = new t;
        return t.prototype.init = function(t, e, r, n) {
            this.c0 = t,
            this.c1 = r,
            this.c2 = -3 * t + 3 * e - 2 * r - n,
            this.c3 = 2 * t - 2 * e + r + n
        }
        ,
        t.prototype.initNonuniformCatmullRom = function(t, e, r, n, i, a, o) {
            var s = (e - t) / i - (r - t) / (i + a) + (r - e) / a
              , c = (r - e) / a - (n - e) / (a + o) + (n - r) / o;
            s *= a,
            c *= a,
            this.init(e, r, s, c)
        }
        ,
        t.prototype.initCatmullRom = function(t, e, r, n, i) {
            this.init(e, r, i * (r - t), i * (n - e))
        }
        ,
        t.prototype.calc = function(t) {
            var e = t * t
              , r = e * t;
            return this.c0 + this.c1 * t + this.c2 * e + this.c3 * r
        }
        ,
        Qr.create(function(t) {
            this.points = t || [],
            this.closed = !1
        }, function(t) {
            var a, o, s, c, h = this.points;
            c = h.length,
            c < 2 && console.log("duh, you need at least 2 points"),
            a = (c - (this.closed ? 0 : 1)) * t,
            o = Math.floor(a),
            s = a - o,
            this.closed ? o += o > 0 ? 0 : (Math.floor(Math.abs(o) / h.length) + 1) * h.length : 0 === s && o === c - 1 && (o = c - 2,
            s = 1);
            var u, p, d, f;
            if (this.closed || o > 0 ? u = h[(o - 1) % c] : (e.subVectors(h[0], h[1]).add(h[0]),
            u = e),
            p = h[o % c],
            d = h[(o + 1) % c],
            this.closed || o + 2 < c ? f = h[(o + 2) % c] : (e.subVectors(h[c - 1], h[c - 2]).add(h[c - 1]),
            f = e),
            void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
                var m = "chordal" === this.type ? .5 : .25
                  , g = Math.pow(u.distanceToSquared(p), m)
                  , v = Math.pow(p.distanceToSquared(d), m)
                  , y = Math.pow(d.distanceToSquared(f), m);
                v < 1e-4 && (v = 1),
                g < 1e-4 && (g = v),
                y < 1e-4 && (y = v),
                r.initNonuniformCatmullRom(u.x, p.x, d.x, f.x, g, v, y),
                n.initNonuniformCatmullRom(u.y, p.y, d.y, f.y, g, v, y),
                i.initNonuniformCatmullRom(u.z, p.z, d.z, f.z, g, v, y)
            } else if ("catmullrom" === this.type) {
                var x = void 0 !== this.tension ? this.tension : .5;
                r.initCatmullRom(u.x, p.x, d.x, f.x, x),
                n.initCatmullRom(u.y, p.y, d.y, f.y, x),
                i.initCatmullRom(u.z, p.z, d.z, f.z, x)
            }
            var _ = new l(r.calc(s),n.calc(s),i.calc(s));
            return _
        })
    }(),
    Jn.prototype = Object.create(t.CatmullRomCurve3.prototype);
    var Zc = Qr.create(function(t) {
        console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),
        this.points = void 0 === t ? [] : t
    }, function(e) {
        var r = this.points
          , n = (r.length - 1) * e
          , i = Math.floor(n)
          , a = n - i
          , o = r[0 == i ? i : i - 1]
          , s = r[i]
          , c = r[i > r.length - 2 ? r.length - 1 : i + 1]
          , h = r[i > r.length - 3 ? r.length - 1 : i + 2]
          , u = t.CurveUtils.interpolate;
        return new l(u(o.x, s.x, c.x, h.x, a),u(o.y, s.y, c.y, h.y, a),u(o.z, s.z, c.z, h.z, a))
    });
    t.CubicBezierCurve3 = Qr.create(function(t, e, r, n) {
        this.v0 = t,
        this.v1 = e,
        this.v2 = r,
        this.v3 = n
    }, function(e) {
        var r = t.ShapeUtils.b3;
        return new l(r(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x),r(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y),r(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
    }),
    t.QuadraticBezierCurve3 = Qr.create(function(t, e, r) {
        this.v0 = t,
        this.v1 = e,
        this.v2 = r
    }, function(e) {
        var r = t.ShapeUtils.b2;
        return new l(r(e, this.v0.x, this.v1.x, this.v2.x),r(e, this.v0.y, this.v1.y, this.v2.y),r(e, this.v0.z, this.v1.z, this.v2.z))
    }),
    t.LineCurve3 = Qr.create(function(t, e) {
        this.v1 = t,
        this.v2 = e
    }, function(t) {
        if (1 === t)
            return this.v2.clone();
        var e = new l;
        return e.subVectors(this.v2, this.v1),
        e.multiplyScalar(t),
        e.add(this.v1),
        e
    }),
    Qn.prototype = Object.create(tn.prototype),
    Qn.prototype.constructor = Qn,
    t.SceneUtils = {
        createMultiMaterialObject: function(t, e) {
            for (var r = new Se, n = 0, i = e.length; n < i; n++)
                r.add(new Ct(t,e[n]));
            return r
        },
        detach: function(t, e, r) {
            t.applyMatrix(e.matrixWorld),
            e.remove(t),
            r.add(t)
        },
        attach: function(t, e, r) {
            var n = new u;
            n.getInverse(r.matrixWorld),
            t.applyMatrix(n),
            e.remove(t),
            r.add(t)
        }
    };
    var Jc = 0
      , Qc = 1;
    Object.assign(Y.prototype, {
        center: function(t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        size: function(t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),
            this.getSize(t)
        }
    }),
    Object.assign(et.prototype, {
        center: function(t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),
            this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        },
        size: function(t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),
            this.getSize(t)
        }
    }),
    Object.assign(pt.prototype, {
        center: function(t) {
            return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),
            this.getCenter(t)
        }
    }),
    Object.assign(nt.prototype, {
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
            t.applyMatrix3(this)
        },
        multiplyVector3Array: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(t)
        }
    }),
    Object.assign(u.prototype, {
        extractPosition: function(t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
            this.copyPosition(t)
        },
        setRotationFromQuaternion: function(t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
            this.makeRotationFromQuaternion(t)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),
            t.applyProjection(this)
        },
        multiplyVector4: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        multiplyVector3Array: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
            this.applyToVector3Array(t)
        },
        rotateAxis: function(t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
            t.transformDirection(this)
        },
        crossVector: function(t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
            t.applyMatrix4(this)
        },
        translate: function(t) {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function(t) {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function(t) {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function(t) {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function(t, e) {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        }
    }),
    Object.assign(it.prototype, {
        isIntersectionLine: function(t) {
            return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),
            this.intersectsLine(t)
        }
    }),
    Object.assign(h.prototype, {
        multiplyVector3: function(t) {
            return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
            t.applyQuaternion(this)
        }
    }),
    Object.assign(st.prototype, {
        isIntersectionBox: function(t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),
            this.intersectsBox(t)
        },
        isIntersectionPlane: function(t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),
            this.intersectsPlane(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),
            this.intersectsSphere(t)
        }
    }),
    Object.assign(an.prototype, {
        extrude: function(t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),
            new ke(this,t)
        },
        makeGeometry: function(t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),
            new Ke(this,t)
        }
    }),
    Object.assign(l.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
            this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
            this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
            this.setFromMatrixColumn(e, t)
        }
    }),
    Object.assign(lt.prototype, {
        getChildByName: function(t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
            this.getObjectByName(t)
        },
        renderDepth: function(t) {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
            this.translateOnAxis(e, t)
        }
    }),
    Object.defineProperties(lt.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
                this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function(t) {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }),
    Object.defineProperties(ge.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                this.levels
            }
        }
    }),
    Nt.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),
        void 0 !== e && (this.filmGauge = e),
        this.setFocalLength(t)
    }
    ,
    Object.defineProperties(Mr.prototype, {
        onlyShadow: {
            set: function(t) {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),
                this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),
                this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),
                this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),
                this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),
                this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),
                this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),
                this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."),
                this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function(t) {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),
                this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),
                this.shadow.mapSize.height = t
            }
        }
    }),
    Object.defineProperties(gt.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
                this.array.length
            }
        }
    }),
    Object.assign(Pt.prototype, {
        addIndex: function(t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
            this.setIndex(t)
        },
        addDrawCall: function(t, e, r) {
            void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
            console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
            this.addGroup(t, e)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
            this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }),
    Object.defineProperties(Pt.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
                this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
                this.groups
            }
        }
    }),
    Object.defineProperties(Q.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE." + this.type + ": .wrapRGB has been removed."),
                new q
            }
        }
    }),
    Object.defineProperties(pr.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),
                !1
            },
            set: function(t) {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }),
    Object.defineProperties($.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),
                this.extensions.derivatives = t
            }
        }
    }),
    e.prototype = Object.assign(Object.create({
        constructor: e,
        apply: function(t) {
            console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in."),
            Object.assign(t, this)
        }
    }), e.prototype),
    Object.assign(he.prototype, {
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
            this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
            this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
            this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
            this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
            this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
            this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
            this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),
            this.setScissorTest(t)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }),
    Object.defineProperties(he.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
                this.shadowMap.cullFace = t
            }
        }
    }),
    Object.defineProperties(ot.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? di : pi
            },
            set: function(t) {
                var e = t !== pi;
                console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."),
                this.renderReverseSided = e
            }
        }
    }),
    Object.defineProperties(o.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
                this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
                this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
                this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
                this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
                this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
                this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
                this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
                this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
                this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
                this.texture.generateMipmaps = t
            }
        }
    }),
    Object.assign(mn.prototype, {
        load: function(t) {
            console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");
            var e = this
              , r = new un;
            return r.load(t, function(t) {
                e.setBuffer(t)
            }),
            this
        }
    }),
    Object.assign(vn.prototype, {
        getData: function(t) {
            return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),
            this.getFrequencyData()
        }
    });
    var Kc = {
        merge: function(t, e, r) {
            console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
            var n;
            e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(),
            n = e.matrix,
            e = e.geometry),
            t.merge(e, n, r)
        },
        center: function(t) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
            t.center()
        }
    }
      , $c = {
        crossOrigin: void 0,
        loadTexture: function(t, e, r, n) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var i = new wr;
            i.setCrossOrigin(this.crossOrigin);
            var a = i.load(t, r, void 0, n);
            return e && (a.mapping = e),
            a
        },
        loadTextureCube: function(t, e, r, n) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var i = new br;
            i.setCrossOrigin(this.crossOrigin);
            var a = i.load(t, r, void 0, n);
            return e && (a.mapping = e),
            a
        },
        loadCompressedTexture: function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        },
        loadCompressedTextureCube: function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    };
    t.WebGLMultiRenderTarget = s,
    t.WebGLRenderTargetCube = c,
    t.WebGLRenderTarget = o,
    t.WebGLRenderer = he,
    t.ShaderLib = Oc,
    t.UniformsLib = Nc,
    t.ShaderChunk = Dc,
    t.FogExp2 = le,
    t.Fog = ue,
    t.Scene = pe,
    t.LensFlare = de,
    t.Sprite = me,
    t.LOD = ge,
    t.SkinnedMesh = _e,
    t.Skeleton = ye,
    t.Bone = xe,
    t.Mesh = Ct,
    t.LineSegments = Me,
    t.Line = we,
    t.Points = Te,
    t.Group = Se,
    t.VideoTexture = Ae,
    t.DataTexture = ve,
    t.CompressedTexture = Le,
    t.CubeTexture = p,
    t.CanvasTexture = Re,
    t.DepthTexture = Pe,
    t.TextureIdCount = i,
    t.Texture = n,
    t.MaterialIdCount = K,
    t.CompressedTextureLoader = yr,
    t.BinaryTextureLoader = xr,
    t.DataTextureLoader = kc,
    t.CubeTextureLoader = br,
    t.TextureLoader = wr,
    t.ObjectLoader = Jr,
    t.MaterialLoader = Xr,
    t.BufferGeometryLoader = qr,
    t.LoadingManager = gr,
    t.JSONLoader = Zr,
    t.ImageLoader = _r,
    t.FontLoader = hn,
    t.XHRLoader = vr,
    t.Loader = Yr,
    t.AudioLoader = un,
    t.SpotLightShadow = Sr,
    t.SpotLight = Ar,
    t.PointLight = Lr,
    t.HemisphereLight = Er,
    t.DirectionalLightShadow = Rr,
    t.DirectionalLight = Pr,
    t.AmbientLight = Cr,
    t.LightShadow = Tr,
    t.Light = Mr,
    t.StereoCamera = pn,
    t.PerspectiveCamera = Nt,
    t.OrthographicCamera = Ot,
    t.CubeCamera = dn,
    t.Camera = Dt,
    t.AudioListener = fn,
    t.PositionalAudio = gn,
    t.getAudioContext = ln,
    t.AudioAnalyser = vn,
    t.Audio = mn,
    t.VectorKeyframeTrack = Fr,
    t.StringKeyframeTrack = Hr,
    t.QuaternionKeyframeTrack = Br,
    t.NumberKeyframeTrack = Gr,
    t.ColorKeyframeTrack = kr,
    t.BooleanKeyframeTrack = Vr,
    t.PropertyMixer = yn,
    t.PropertyBinding = xn,
    t.KeyframeTrack = jr,
    t.AnimationObjectGroup = _n,
    t.AnimationMixer = wn,
    t.AnimationClip = Wr,
    t.Uniform = Mn,
    t.InstancedBufferGeometry = En,
    t.BufferGeometry = Pt,
    t.GeometryIdCount = Lt,
    t.Geometry = At,
    t.InterleavedBufferAttribute = Tn,
    t.InstancedInterleavedBuffer = An,
    t.InterleavedBuffer = Sn,
    t.InstancedBufferAttribute = Ln,
    t.DynamicBufferAttribute = St,
    t.Float64Attribute = Tt,
    t.Float32Attribute = Et,
    t.Uint32Attribute = Mt,
    t.Int32Attribute = wt,
    t.Uint16Attribute = bt,
    t.Int16Attribute = _t,
    t.Uint8ClampedAttribute = xt,
    t.Uint8Attribute = yt,
    t.Int8Attribute = vt,
    t.BufferAttribute = gt,
    t.Face3 = ft,
    t.Object3DIdCount = ut,
    t.Object3D = lt,
    t.Raycaster = Rn,
    t.Layers = ht,
    t.EventDispatcher = e,
    t.Clock = Un,
    t.QuaternionLinearInterpolant = zr,
    t.LinearInterpolant = Dr,
    t.DiscreteInterpolant = Nr,
    t.CubicInterpolant = Ir,
    t.Interpolant = Ur,
    t.Triangle = dt,
    t.Spline = In,
    t.Spherical = Dn,
    t.Plane = it,
    t.Frustum = at,
    t.Sphere = rt,
    t.Ray = st,
    t.Matrix4 = u,
    t.Matrix3 = nt,
    t.Box3 = et,
    t.Box2 = Y,
    t.Line3 = pt,
    t.Euler = ct,
    t.Vector4 = a,
    t.Vector3 = l,
    t.Vector2 = r,
    t.Quaternion = h,
    t.Color = q,
    t.MorphBlendMesh = Nn,
    t.ImmediateRenderObject = On,
    t.VertexNormalsHelper = Fn,
    t.SpotLightHelper = zn,
    t.SkeletonHelper = Bn,
    t.PointLightHelper = Gn,
    t.HemisphereLightHelper = Hn,
    t.GridHelper = Vn,
    t.FaceNormalsHelper = kn,
    t.DirectionalLightHelper = jn,
    t.CameraHelper = Wn,
    t.BoundingBoxHelper = Xn,
    t.BoxHelper = qn,
    t.ArrowHelper = Yn,
    t.AxisHelper = Zn,
    t.ClosedSplineCurve3 = Jn,
    t.SplineCurve3 = Zc,
    t.ArcCurve = Qn,
    t.EllipseCurve = tn,
    t.SplineCurve = en,
    t.CubicBezierCurve = rn,
    t.QuadraticBezierCurve = nn,
    t.LineCurve = Kr,
    t.Shape = an,
    t.ShapePath = sn,
    t.Path = on,
    t.Font = cn,
    t.CurvePath = $r,
    t.Curve = Qr,
    t.WireframeGeometry = Ce,
    t.ParametricGeometry = Ue,
    t.TetrahedronGeometry = De,
    t.OctahedronGeometry = Ne,
    t.IcosahedronGeometry = Oe,
    t.DodecahedronGeometry = Fe,
    t.PolyhedronGeometry = Ie,
    t.TubeGeometry = ze,
    t.TorusKnotGeometry = Ge,
    t.TorusKnotBufferGeometry = Be,
    t.TorusGeometry = Ve,
    t.TorusBufferGeometry = He,
    t.TextGeometry = je,
    t.SphereBufferGeometry = We,
    t.SphereGeometry = Xe,
    t.RingGeometry = Ye,
    t.RingBufferGeometry = qe,
    t.PlaneBufferGeometry = It,
    t.PlaneGeometry = Ze,
    t.LatheGeometry = Qe,
    t.LatheBufferGeometry = Je,
    t.ShapeGeometry = Ke,
    t.ExtrudeGeometry = ke,
    t.EdgesGeometry = $e,
    t.ConeGeometry = rr,
    t.ConeBufferGeometry = nr,
    t.CylinderGeometry = er,
    t.CylinderBufferGeometry = tr,
    t.CircleBufferGeometry = ir,
    t.CircleGeometry = ar,
    t.BoxBufferGeometry = Ut,
    t.BoxGeometry = or,
    t.ShadowMaterial = sr,
    t.SpriteMaterial = fe,
    t.RawShaderMaterial = cr,
    t.ShaderMaterial = $,
    t.PointsMaterial = Ee,
    t.MultiMaterial = hr,
    t.MeshPhysicalMaterial = ur,
    t.MeshStandardMaterial = lr,
    t.MeshPhongMaterial = pr,
    t.MeshNormalMaterial = dr,
    t.MeshLambertMaterial = fr,
    t.MeshDepthMaterial = tt,
    t.MeshBasicMaterial = mt;
    t.LineDashedMaterial = mr;
    t.LineBasicMaterial = be,
    t.Material = Q,
    t.REVISION = hi,
    t.MOUSE = li,
    t.CullFaceNone = ui,
    t.CullFaceBack = pi,
    t.CullFaceFront = di,
    t.CullFaceFrontBack = fi,
    t.FrontFaceDirectionCW = mi,
    t.FrontFaceDirectionCCW = gi,
    t.BasicShadowMap = vi,
    t.PCFShadowMap = yi,
    t.PCFSoftShadowMap = xi,
    t.FrontSide = _i,
    t.BackSide = bi,
    t.DoubleSide = wi,
    t.FlatShading = Mi,
    t.SmoothShading = Ei,
    t.NoColors = Ti,
    t.FaceColors = Si,
    t.VertexColors = Ai,
    t.NoBlending = Li,
    t.NormalBlending = Ri,
    t.AdditiveBlending = Pi,
    t.SubtractiveBlending = Ci,
    t.MultiplyBlending = Ui,
    t.CustomBlending = Ii,
    t.BlendingMode = Di,
    t.AddEquation = Ni,
    t.SubtractEquation = Oi,
    t.ReverseSubtractEquation = Fi,
    t.MinEquation = zi,
    t.MaxEquation = Bi,
    t.ZeroFactor = Gi,
    t.OneFactor = Hi,
    t.SrcColorFactor = Vi,
    t.OneMinusSrcColorFactor = ki,
    t.SrcAlphaFactor = ji,
    t.OneMinusSrcAlphaFactor = Wi,
    t.DstAlphaFactor = Xi,
    t.OneMinusDstAlphaFactor = qi,
    t.DstColorFactor = Yi,
    t.OneMinusDstColorFactor = Zi,
    t.SrcAlphaSaturateFactor = Ji,
    t.NeverDepth = Qi,
    t.AlwaysDepth = Ki,
    t.LessDepth = $i,
    t.LessEqualDepth = ta,
    t.EqualDepth = ea,
    t.GreaterEqualDepth = ra,
    t.GreaterDepth = na,
    t.NotEqualDepth = ia,
    t.MultiplyOperation = aa,
    t.MixOperation = oa,
    t.AddOperation = sa,
    t.NoToneMapping = ca,
    t.LinearToneMapping = ha,
    t.ReinhardToneMapping = la,
    t.Uncharted2ToneMapping = ua,
    t.CineonToneMapping = pa,
    t.UVMapping = da,
    t.CubeReflectionMapping = fa,
    t.CubeRefractionMapping = ma,
    t.EquirectangularReflectionMapping = ga,
    t.EquirectangularRefractionMapping = va,
    t.SphericalReflectionMapping = ya,
    t.CubeUVReflectionMapping = xa,
    t.CubeUVRefractionMapping = _a,
    t.TextureMapping = ba,
    t.RepeatWrapping = wa,
    t.ClampToEdgeWrapping = Ma,
    t.MirroredRepeatWrapping = Ea,
    t.TextureWrapping = Ta,
    t.NearestFilter = Sa,
    t.NearestMipMapNearestFilter = Aa,
    t.NearestMipMapLinearFilter = La,
    t.LinearFilter = Ra,
    t.LinearMipMapNearestFilter = Pa,
    t.LinearMipMapLinearFilter = Ca,
    t.TextureFilter = Ua,
    t.UnsignedByteType = Ia,
    t.ByteType = Da,
    t.ShortType = Na,
    t.UnsignedShortType = Oa,
    t.IntType = Fa,
    t.UnsignedIntType = za,
    t.FloatType = Ba,
    t.HalfFloatType = Ga,
    t.UnsignedShort4444Type = Ha,
    t.UnsignedShort5551Type = Va,
    t.UnsignedShort565Type = ka,
    t.UnsignedInt248Type = ja,
    t.AlphaFormat = Wa,
    t.RGBFormat = Xa,
    t.RGBAFormat = qa,
    t.LuminanceFormat = Ya,
    t.LuminanceAlphaFormat = Za,
    t.RGBEFormat = Ja,
    t.DepthFormat = Qa,
    t.DepthStencilFormat = Ka,
    t.RGB_S3TC_DXT1_Format = $a,
    t.RGBA_S3TC_DXT1_Format = to,
    t.RGBA_S3TC_DXT3_Format = eo,
    t.RGBA_S3TC_DXT5_Format = ro,
    t.RGB_PVRTC_4BPPV1_Format = no,
    t.RGB_PVRTC_2BPPV1_Format = io,
    t.RGBA_PVRTC_4BPPV1_Format = ao,
    t.RGBA_PVRTC_2BPPV1_Format = oo,
    t.RGB_ETC1_Format = so,
    t.LoopOnce = co,
    t.LoopRepeat = ho,
    t.LoopPingPong = lo,
    t.InterpolateDiscrete = uo,
    t.InterpolateLinear = po,
    t.InterpolateSmooth = fo,
    t.ZeroCurvatureEnding = mo,
    t.ZeroSlopeEnding = go,
    t.WrapAroundEnding = vo,
    t.TrianglesDrawMode = yo,
    t.TriangleStripDrawMode = xo,
    t.TriangleFanDrawMode = _o,
    t.LinearEncoding = bo,
    t.sRGBEncoding = wo,
    t.GammaEncoding = Mo,
    t.RGBEEncoding = Eo,
    t.LogLuvEncoding = To,
    t.RGBM7Encoding = So,
    t.RGBM16Encoding = Ao,
    t.RGBDEncoding = Lo,
    t.BasicDepthPacking = Ro,
    t.RGBADepthPacking = Po,
    t.CubeGeometry = or,
    t.Face4 = Kn,
    t.LineStrip = Jc,
    t.LinePieces = Qc,
    t.MeshFaceMaterial = hr,
    t.PointCloud = $n,
    t.Particle = me,
    t.ParticleSystem = ti,
    t.PointCloudMaterial = ei,
    t.ParticleBasicMaterial = ri,
    t.ParticleSystemMaterial = ni,
    t.Vertex = ii,
    t.EdgesHelper = ai,
    t.WireframeHelper = oi,
    t.GeometryUtils = Kc,
    t.ImageUtils = $c,
    t.Projector = si,
    t.CanvasRenderer = ci,
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    Object.defineProperty(t, "AudioContext", {
        get: function() {
            return t.getAudioContext()
        }
    })
});
