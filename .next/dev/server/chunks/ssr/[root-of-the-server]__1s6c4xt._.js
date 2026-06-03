module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/NeuralBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NeuralBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function NeuralBackground() {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isDesktop, setIsDesktop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mq = window.matchMedia('(min-width: 640px)');
        setIsDesktop(mq.matches);
        const handler = (e)=>setIsDesktop(e.matches);
        mq.addEventListener('change', handler);
        return ()=>mq.removeEventListener('change', handler);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isDesktop) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        let raf;
        let W = 0, H = 0;
        let nodes = [];
        const resize = ()=>{
            W = canvas.width = canvas.offsetWidth;
            H = canvas.height = canvas.offsetHeight;
        };
        const init = ()=>{
            resize();
            const count = Math.min(80, Math.max(40, Math.floor(W * H / 12000)));
            nodes = Array.from({
                length: count
            }, ()=>({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 0.35,
                    vy: (Math.random() - 0.5) * 0.35,
                    r: Math.random() * 1.8 + 0.4,
                    pulse: Math.random() * Math.PI * 2,
                    pulseSpeed: 0.01 + Math.random() * 0.02
                }));
        };
        const draw = ()=>{
            ctx.clearRect(0, 0, W, H);
            nodes.forEach((n)=>{
                n.x += n.vx;
                n.y += n.vy;
                n.pulse += n.pulseSpeed;
                if (n.x < 0 || n.x > W) n.vx *= -1;
                if (n.y < 0 || n.y > H) n.vy *= -1;
                const alpha = 0.3 + Math.sin(n.pulse) * 0.2;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(171,169,161,${alpha})`;
                ctx.fill();
            });
            const maxDist = 160;
            for(let i = 0; i < nodes.length - 1; i++){
                for(let j = i + 1; j < nodes.length; j++){
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < maxDist) {
                        const a = (1 - d / maxDist) * 0.2;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.strokeStyle = `rgba(171,169,161,${a})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
            raf = requestAnimationFrame(draw);
        };
        init();
        draw();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);
        return ()=>{
            cancelAnimationFrame(raf);
            ro.disconnect();
        };
    }, [
        isDesktop
    ]);
    if (!isDesktop) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "absolute inset-0 w-full h-full pointer-events-none",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/NeuralBackground.tsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$components$2f$NeuralBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/NeuralBackground.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function SiteBackground() {
    const reduceMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScroll"])();
    // Gentle parallax across the whole document
    const y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        '0%',
        reduceMotion ? '0%' : '8%'
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 -z-10 overflow-hidden bg-[#0A0A0A]",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y
                },
                className: "absolute -inset-[8%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ken-burns relative w-full h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/universe.jpg",
                        alt: "",
                        fill: true,
                        priority: true,
                        quality: 82,
                        sizes: "100vw",
                        className: "object-cover object-[50%_40%]"
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-25 hidden sm:block",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$components$2f$NeuralBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none mix-blend-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aurora-blob animate-aurora-1 top-[5%] left-[8%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-brand/10"
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "aurora-blob animate-aurora-3 bottom-[10%] right-[5%] w-[40vw] h-[40vw] max-w-[520px] max-h-[520px] bg-violet-500/10"
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none bg-[#0A0A0A]/28"
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A0A0A]/65 via-transparent to-[#0A0A0A]/75"
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/SiteBackground.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/LoadingScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/* eslint-disable @next/next/no-img-element */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
function LoadingScreen() {
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const reduce = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            if (sessionStorage.getItem('diadem_intro_done')) return;
        } catch  {}
        setShow(true);
        const t = setTimeout(()=>{
            setShow(false);
            try {
                sessionStorage.setItem('diadem_intro_done', '1');
            } catch  {}
        }, reduce ? 600 : 1700);
        return ()=>clearTimeout(t);
    }, [
        reduce
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: show && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#0A0A0A]",
            initial: {
                opacity: 1
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 0.6,
                    ease: 'easeInOut'
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].img, {
                    src: "/diadem-mark.png",
                    alt: "Diadem",
                    initial: {
                        opacity: 0,
                        scale: 0.8,
                        y: 6
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.7,
                        ease: [
                            0.25,
                            0.46,
                            0.45,
                            0.94
                        ]
                    },
                    className: "w-16 h-16 object-contain"
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/LoadingScreen.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].span, {
                    initial: {
                        opacity: 0,
                        letterSpacing: '0.1em'
                    },
                    animate: {
                        opacity: 1,
                        letterSpacing: '0.4em'
                    },
                    transition: {
                        duration: 0.9,
                        delay: 0.2
                    },
                    className: "font-display text-[15px] font-semibold uppercase text-white/90 mt-5 ml-[0.4em]",
                    children: "Diadem"
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/LoadingScreen.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 h-px w-28 overflow-hidden bg-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-gradient-to-r from-transparent via-brand to-transparent",
                        initial: {
                            x: '-100%'
                        },
                        animate: {
                            x: '100%'
                        },
                        transition: {
                            duration: 1.1,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/LoadingScreen.tsx",
                        lineNumber: 47,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/LoadingScreen.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/LoadingScreen.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/LoadingScreen.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1s6c4xt._.js.map