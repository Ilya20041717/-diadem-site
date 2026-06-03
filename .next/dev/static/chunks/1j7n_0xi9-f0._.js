(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/value/use-spring.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSpring",
    ()=>useSpring
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$MainThreadAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/animation/animators/MainThreadAnimation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/frameloop/frame.mjs [app-client] (ecmascript)");
;
;
;
;
;
;
;
function toNumber(v) {
    if (typeof v === "number") return v;
    return parseFloat(v);
}
/**
 * Creates a `MotionValue` that, when `set`, will use a spring animation to animate to its new state.
 *
 * It can either work as a stand-alone `MotionValue` by initialising it with a value, or as a subscriber
 * to another `MotionValue`.
 *
 * @remarks
 *
 * ```jsx
 * const x = useSpring(0, { stiffness: 300 })
 * const y = useSpring(x, { damping: 10 })
 * ```
 *
 * @param inputValue - `MotionValue` or number. If provided a `MotionValue`, when the input `MotionValue` changes, the created `MotionValue` will spring towards that value.
 * @param springConfig - Configuration options for the spring.
 * @returns `MotionValue`
 *
 * @public
 */ function useSpring(source, config = {}) {
    const { isStatic } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$context$2f$MotionConfigContext$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MotionConfigContext"]);
    const activeSpringAnimation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source) ? toNumber(source.get()) : source);
    const latestValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value.get());
    const latestSetter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useSpring.useRef[latestSetter]": ()=>{}
    }["useSpring.useRef[latestSetter]"]);
    const startAnimation = ()=>{
        /**
         * If the previous animation hasn't had the chance to even render a frame, render it now.
         */ const animation = activeSpringAnimation.current;
        if (animation && animation.time === 0) {
            animation.sample(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frameData"].delta);
        }
        stopAnimation();
        activeSpringAnimation.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$animators$2f$MainThreadAnimation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["animateValue"])({
            keyframes: [
                value.get(),
                latestValue.current
            ],
            velocity: value.getVelocity(),
            type: "spring",
            restDelta: 0.001,
            restSpeed: 0.01,
            ...config,
            onUpdate: latestSetter.current
        });
    };
    const stopAnimation = ()=>{
        if (activeSpringAnimation.current) {
            activeSpringAnimation.current.stop();
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInsertionEffect"])({
        "useSpring.useInsertionEffect": ()=>{
            return value.attach({
                "useSpring.useInsertionEffect": (v, set)=>{
                    /**
             * A more hollistic approach to this might be to use isStatic to fix VisualElement animations
             * at that level, but this will work for now
             */ if (isStatic) return set(v);
                    latestValue.current = v;
                    latestSetter.current = set;
                    __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$frameloop$2f$frame$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frame"].update(startAnimation);
                    return value.get();
                }
            }["useSpring.useInsertionEffect"], stopAnimation);
        }
    }["useSpring.useInsertionEffect"], [
        JSON.stringify(config)
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$isomorphic$2d$effect$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsomorphicLayoutEffect"])({
        "useSpring.useIsomorphicLayoutEffect": ()=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$utils$2f$is$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMotionValue"])(source)) {
                return source.on("change", {
                    "useSpring.useIsomorphicLayoutEffect": (v)=>value.set(toNumber(v))
                }["useSpring.useIsomorphicLayoutEffect"]);
            }
        }
    }["useSpring.useIsomorphicLayoutEffect"], [
        value
    ]);
    return value;
}
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses,
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>defaultAttributes
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Icon
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])(iconName)}`, className),
            ...props
        }));
    Component.displayName = `${iconName}`;
    return Component;
};
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>X
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const X = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("X", [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "X",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Sparkles", [
    [
        "path",
        {
            d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
            key: "4pj2yx"
        }
    ],
    [
        "path",
        {
            d: "M20 3v4",
            key: "1olli1"
        }
    ],
    [
        "path",
        {
            d: "M22 5h-4",
            key: "1gvqau"
        }
    ],
    [
        "path",
        {
            d: "M4 17v2",
            key: "vumght"
        }
    ],
    [
        "path",
        {
            d: "M5 18H3",
            key: "zchphs"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowRight", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageCircle
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MessageCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MessageCircle", [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Send
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Send", [
    [
        "path",
        {
            d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
            key: "1ffxy3"
        }
    ],
    [
        "path",
        {
            d: "m21.854 2.147-10.94 10.939",
            key: "12cjpa"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Send",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Phone
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Menu
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Menu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Menu", [
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "12",
            y2: "12",
            key: "1e0a9i"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "6",
            y2: "6",
            key: "1owob3"
        }
    ],
    [
        "line",
        {
            x1: "4",
            x2: "20",
            y1: "18",
            y2: "18",
            key: "yk5zj1"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Menu",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createTailwindMerge",
    ()=>createTailwindMerge,
    "extendTailwindMerge",
    ()=>extendTailwindMerge,
    "fromTheme",
    ()=>fromTheme,
    "getDefaultConfig",
    ()=>getDefaultConfig,
    "mergeConfigs",
    ()=>mergeConfigs,
    "twJoin",
    ()=>twJoin,
    "twMerge",
    ()=>twMerge,
    "validators",
    ()=>validators
]);
const CLASS_PART_SEPARATOR = '-';
const createClassGroupUtils = (config)=>{
    const classMap = createClassMap(config);
    const { conflictingClassGroups, conflictingClassGroupModifiers } = config;
    const getClassGroupId = (className)=>{
        const classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === '' && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    };
    const getConflictingClassGroupIds = (classGroupId, hasPostfixModifier)=>{
        const conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [
                ...conflicts,
                ...conflictingClassGroupModifiers[classGroupId]
            ];
        }
        return conflicts;
    };
    return {
        getClassGroupId,
        getConflictingClassGroupIds
    };
};
const getGroupRecursive = (classParts, classPartObject)=>{
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    const currentClassPart = classParts[0];
    const nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    const classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    const classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(({ validator })=>validator(classRest))?.classGroupId;
};
const arbitraryPropertyRegex = /^\[(.+)\]$/;
const getGroupIdForArbitraryProperty = (className)=>{
    if (arbitraryPropertyRegex.test(className)) {
        const arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        const property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return 'arbitrary..' + property;
        }
    }
};
/**
 * Exported for testing only
 */ const createClassMap = (config)=>{
    const { theme, prefix } = config;
    const classMap = {
        nextPart: new Map(),
        validators: []
    };
    const prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(([classGroupId, classGroup])=>{
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
};
const processClassesRecursively = (classGroup, classPartObject, classGroupId, theme)=>{
    classGroup.forEach((classDefinition)=>{
        if (typeof classDefinition === 'string') {
            const classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === 'function') {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(([key, classGroup])=>{
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
};
const getPart = (classPartObject, path)=>{
    let currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach((pathPart)=>{
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
};
const isThemeGetter = (func)=>func.isThemeGetter;
const getPrefixedClassGroupEntries = (classGroupEntries, prefix)=>{
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(([classGroupId, classGroup])=>{
        const prefixedClassGroup = classGroup.map((classDefinition)=>{
            if (typeof classDefinition === 'string') {
                return prefix + classDefinition;
            }
            if (typeof classDefinition === 'object') {
                return Object.fromEntries(Object.entries(classDefinition).map(([key, value])=>[
                        prefix + key,
                        value
                    ]));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
};
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
const createLruCache = (maxCacheSize)=>{
    if (maxCacheSize < 1) {
        return {
            get: ()=>undefined,
            set: ()=>{}
        };
    }
    let cacheSize = 0;
    let cache = new Map();
    let previousCache = new Map();
    const update = (key, value)=>{
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    };
    return {
        get (key) {
            let value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set (key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
};
const IMPORTANT_MODIFIER = '!';
const createParseClassName = (config)=>{
    const { separator, experimentalParseClassName } = config;
    const isSeparatorSingleCharacter = separator.length === 1;
    const firstSeparatorCharacter = separator[0];
    const separatorLength = separator.length;
    // parseClassName inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    const parseClassName = (className)=>{
        const modifiers = [];
        let bracketDepth = 0;
        let modifierStart = 0;
        let postfixModifierPosition;
        for(let index = 0; index < className.length; index++){
            let currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === '/') {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === '[') {
                bracketDepth++;
            } else if (currentCharacter === ']') {
                bracketDepth--;
            }
        }
        const baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        const hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        const baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        const maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers,
            hasImportantModifier,
            baseClassName,
            maybePostfixModifierPosition
        };
    };
    if (experimentalParseClassName) {
        return (className)=>experimentalParseClassName({
                className,
                parseClassName
            });
    }
    return parseClassName;
};
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ const sortModifiers = (modifiers)=>{
    if (modifiers.length <= 1) {
        return modifiers;
    }
    const sortedModifiers = [];
    let unsortedModifiers = [];
    modifiers.forEach((modifier)=>{
        const isArbitraryVariant = modifier[0] === '[';
        if (isArbitraryVariant) {
            sortedModifiers.push(...unsortedModifiers.sort(), modifier);
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    sortedModifiers.push(...unsortedModifiers.sort());
    return sortedModifiers;
};
const createConfigUtils = (config)=>({
        cache: createLruCache(config.cacheSize),
        parseClassName: createParseClassName(config),
        ...createClassGroupUtils(config)
    });
const SPLIT_CLASSES_REGEX = /\s+/;
const mergeClassList = (classList, configUtils)=>{
    const { parseClassName, getClassGroupId, getConflictingClassGroupIds } = configUtils;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ const classGroupsInConflict = [];
    const classNames = classList.trim().split(SPLIT_CLASSES_REGEX);
    let result = '';
    for(let index = classNames.length - 1; index >= 0; index -= 1){
        const originalClassName = classNames[index];
        const { modifiers, hasImportantModifier, baseClassName, maybePostfixModifierPosition } = parseClassName(originalClassName);
        let hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        let classGroupId = getClassGroupId(hasPostfixModifier ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        if (!classGroupId) {
            if (!hasPostfixModifier) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                // Not a Tailwind class
                result = originalClassName + (result.length > 0 ? ' ' + result : result);
                continue;
            }
            hasPostfixModifier = false;
        }
        const variantModifier = sortModifiers(modifiers).join(':');
        const modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        const classId = modifierId + classGroupId;
        if (classGroupsInConflict.includes(classId)) {
            continue;
        }
        classGroupsInConflict.push(classId);
        const conflictGroups = getConflictingClassGroupIds(classGroupId, hasPostfixModifier);
        for(let i = 0; i < conflictGroups.length; ++i){
            const group = conflictGroups[i];
            classGroupsInConflict.push(modifierId + group);
        }
        // Tailwind class not in conflict
        result = originalClassName + (result.length > 0 ? ' ' + result : result);
    }
    return result;
};
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    let index = 0;
    let argument;
    let resolvedValue;
    let string = '';
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
}
const toValue = (mix)=>{
    if (typeof mix === 'string') {
        return mix;
    }
    let resolvedValue;
    let string = '';
    for(let k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += ' ');
                string += resolvedValue;
            }
        }
    }
    return string;
};
function createTailwindMerge(createConfigFirst, ...createConfigRest) {
    let configUtils;
    let cacheGet;
    let cacheSet;
    let functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        const config = createConfigRest.reduce((previousConfig, createConfigCurrent)=>createConfigCurrent(previousConfig), createConfigFirst());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        const cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        const result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
const fromTheme = (key)=>{
    const themeGetter = (theme)=>theme[key] || [];
    themeGetter.isThemeGetter = true;
    return themeGetter;
};
const arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
const fractionRegex = /^\d+\/\d+$/;
const stringLengths = /*#__PURE__*/ new Set([
    'px',
    'full',
    'screen'
]);
const tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
const lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
const colorFunctionRegex = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
// Shadow always begins with x and y offset separated by underscore optionally prepended by inset
const shadowRegex = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
const imageRegex = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
const isLength = (value)=>isNumber(value) || stringLengths.has(value) || fractionRegex.test(value);
const isArbitraryLength = (value)=>getIsArbitraryValue(value, 'length', isLengthOnly);
const isNumber = (value)=>Boolean(value) && !Number.isNaN(Number(value));
const isArbitraryNumber = (value)=>getIsArbitraryValue(value, 'number', isNumber);
const isInteger = (value)=>Boolean(value) && Number.isInteger(Number(value));
const isPercent = (value)=>value.endsWith('%') && isNumber(value.slice(0, -1));
const isArbitraryValue = (value)=>arbitraryValueRegex.test(value);
const isTshirtSize = (value)=>tshirtUnitRegex.test(value);
const sizeLabels = /*#__PURE__*/ new Set([
    'length',
    'size',
    'percentage'
]);
const isArbitrarySize = (value)=>getIsArbitraryValue(value, sizeLabels, isNever);
const isArbitraryPosition = (value)=>getIsArbitraryValue(value, 'position', isNever);
const imageLabels = /*#__PURE__*/ new Set([
    'image',
    'url'
]);
const isArbitraryImage = (value)=>getIsArbitraryValue(value, imageLabels, isImage);
const isArbitraryShadow = (value)=>getIsArbitraryValue(value, '', isShadow);
const isAny = ()=>true;
const getIsArbitraryValue = (value, label, testValue)=>{
    const result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return typeof label === 'string' ? result[1] === label : label.has(result[1]);
        }
        return testValue(result[2]);
    }
    return false;
};
const isLengthOnly = (value)=>// `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
    // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
    // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
    lengthUnitRegex.test(value) && !colorFunctionRegex.test(value);
const isNever = ()=>false;
const isShadow = (value)=>shadowRegex.test(value);
const isImage = (value)=>imageRegex.test(value);
const validators = /*#__PURE__*/ Object.defineProperty({
    __proto__: null,
    isAny,
    isArbitraryImage,
    isArbitraryLength,
    isArbitraryNumber,
    isArbitraryPosition,
    isArbitraryShadow,
    isArbitrarySize,
    isArbitraryValue,
    isInteger,
    isLength,
    isNumber,
    isPercent,
    isTshirtSize
}, Symbol.toStringTag, {
    value: 'Module'
});
const getDefaultConfig = ()=>{
    const colors = fromTheme('colors');
    const spacing = fromTheme('spacing');
    const blur = fromTheme('blur');
    const brightness = fromTheme('brightness');
    const borderColor = fromTheme('borderColor');
    const borderRadius = fromTheme('borderRadius');
    const borderSpacing = fromTheme('borderSpacing');
    const borderWidth = fromTheme('borderWidth');
    const contrast = fromTheme('contrast');
    const grayscale = fromTheme('grayscale');
    const hueRotate = fromTheme('hueRotate');
    const invert = fromTheme('invert');
    const gap = fromTheme('gap');
    const gradientColorStops = fromTheme('gradientColorStops');
    const gradientColorStopPositions = fromTheme('gradientColorStopPositions');
    const inset = fromTheme('inset');
    const margin = fromTheme('margin');
    const opacity = fromTheme('opacity');
    const padding = fromTheme('padding');
    const saturate = fromTheme('saturate');
    const scale = fromTheme('scale');
    const sepia = fromTheme('sepia');
    const skew = fromTheme('skew');
    const space = fromTheme('space');
    const translate = fromTheme('translate');
    const getOverscroll = ()=>[
            'auto',
            'contain',
            'none'
        ];
    const getOverflow = ()=>[
            'auto',
            'hidden',
            'clip',
            'visible',
            'scroll'
        ];
    const getSpacingWithAutoAndArbitrary = ()=>[
            'auto',
            isArbitraryValue,
            spacing
        ];
    const getSpacingWithArbitrary = ()=>[
            isArbitraryValue,
            spacing
        ];
    const getLengthWithEmptyAndArbitrary = ()=>[
            '',
            isLength,
            isArbitraryLength
        ];
    const getNumberWithAutoAndArbitrary = ()=>[
            'auto',
            isNumber,
            isArbitraryValue
        ];
    const getPositions = ()=>[
            'bottom',
            'center',
            'left',
            'left-bottom',
            'left-top',
            'right',
            'right-bottom',
            'right-top',
            'top'
        ];
    const getLineStyles = ()=>[
            'solid',
            'dashed',
            'dotted',
            'double',
            'none'
        ];
    const getBlendModes = ()=>[
            'normal',
            'multiply',
            'screen',
            'overlay',
            'darken',
            'lighten',
            'color-dodge',
            'color-burn',
            'hard-light',
            'soft-light',
            'difference',
            'exclusion',
            'hue',
            'saturation',
            'color',
            'luminosity'
        ];
    const getAlign = ()=>[
            'start',
            'end',
            'center',
            'between',
            'around',
            'evenly',
            'stretch'
        ];
    const getZeroAndEmpty = ()=>[
            '',
            '0',
            isArbitraryValue
        ];
    const getBreaks = ()=>[
            'auto',
            'avoid',
            'all',
            'avoid-page',
            'page',
            'left',
            'right',
            'column'
        ];
    const getNumberAndArbitrary = ()=>[
            isNumber,
            isArbitraryValue
        ];
    return {
        cacheSize: 500,
        separator: ':',
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength,
                isArbitraryLength
            ],
            blur: [
                'none',
                '',
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumberAndArbitrary(),
            borderColor: [
                colors
            ],
            borderRadius: [
                'none',
                '',
                'full',
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmptyAndArbitrary(),
            contrast: getNumberAndArbitrary(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumberAndArbitrary(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumberAndArbitrary(),
            scale: getNumberAndArbitrary(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        'auto',
                        'square',
                        'video',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                'container'
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ 'break-after': [
                {
                    'break-after': getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ 'break-before': [
                {
                    'break-before': getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ 'break-inside': [
                {
                    'break-inside': [
                        'auto',
                        'avoid',
                        'avoid-page',
                        'avoid-column'
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ 'box-decoration': [
                {
                    'box-decoration': [
                        'slice',
                        'clone'
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        'border',
                        'content'
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
                'block',
                'inline-block',
                'inline',
                'flex',
                'inline-flex',
                'table',
                'inline-table',
                'table-caption',
                'table-cell',
                'table-column',
                'table-column-group',
                'table-footer-group',
                'table-header-group',
                'table-row-group',
                'table-row',
                'flow-root',
                'grid',
                'inline-grid',
                'contents',
                'list-item',
                'hidden'
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ float: [
                {
                    float: [
                        'right',
                        'left',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        'left',
                        'right',
                        'both',
                        'none',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                'isolate',
                'isolation-auto'
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ 'object-fit': [
                {
                    object: [
                        'contain',
                        'cover',
                        'fill',
                        'none',
                        'scale-down'
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ 'object-position': [
                {
                    object: [
                        ...getPositions(),
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-x': [
                {
                    'overflow-x': getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ 'overflow-y': [
                {
                    'overflow-y': getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-x': [
                {
                    'overscroll-x': getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ 'overscroll-y': [
                {
                    'overscroll-y': getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                'static',
                'fixed',
                'absolute',
                'relative',
                'sticky'
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-x': [
                {
                    'inset-x': [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ 'inset-y': [
                {
                    'inset-y': [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                'visible',
                'invisible',
                'collapse'
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        'auto',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ 'flex-direction': [
                {
                    flex: [
                        'row',
                        'row-reverse',
                        'col',
                        'col-reverse'
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ 'flex-wrap': [
                {
                    flex: [
                        'wrap',
                        'wrap-reverse',
                        'nowrap'
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        '1',
                        'auto',
                        'initial',
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        'first',
                        'last',
                        'none',
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ 'grid-cols': [
                {
                    'grid-cols': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start-end': [
                {
                    col: [
                        'auto',
                        {
                            span: [
                                'full',
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-start': [
                {
                    'col-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ 'col-end': [
                {
                    'col-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ 'grid-rows': [
                {
                    'grid-rows': [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start-end': [
                {
                    row: [
                        'auto',
                        {
                            span: [
                                isInteger,
                                isArbitraryValue
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-start': [
                {
                    'row-start': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ 'row-end': [
                {
                    'row-end': getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ 'grid-flow': [
                {
                    'grid-flow': [
                        'row',
                        'col',
                        'dense',
                        'row-dense',
                        'col-dense'
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ 'auto-cols': [
                {
                    'auto-cols': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ 'auto-rows': [
                {
                    'auto-rows': [
                        'auto',
                        'min',
                        'max',
                        'fr',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-x': [
                {
                    'gap-x': [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ 'gap-y': [
                {
                    'gap-y': [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ 'justify-content': [
                {
                    justify: [
                        'normal',
                        ...getAlign()
                    ]
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ 'justify-items': [
                {
                    'justify-items': [
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ 'justify-self': [
                {
                    'justify-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ 'align-content': [
                {
                    content: [
                        'normal',
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ 'align-items': [
                {
                    items: [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ 'align-self': [
                {
                    self: [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch',
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ 'place-content': [
                {
                    'place-content': [
                        ...getAlign(),
                        'baseline'
                    ]
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ 'place-items': [
                {
                    'place-items': [
                        'start',
                        'end',
                        'center',
                        'baseline',
                        'stretch'
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ 'place-self': [
                {
                    'place-self': [
                        'auto',
                        'start',
                        'end',
                        'center',
                        'stretch'
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ 'space-x': [
                {
                    'space-x': [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-x-reverse': [
                'space-x-reverse'
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ 'space-y': [
                {
                    'space-y': [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ 'space-y-reverse': [
                'space-y-reverse'
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svw',
                        'lvw',
                        'dvw',
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ 'min-w': [
                {
                    'min-w': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ 'max-w': [
                {
                    'max-w': [
                        isArbitraryValue,
                        spacing,
                        'none',
                        'full',
                        'min',
                        'max',
                        'fit',
                        'prose',
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ 'min-h': [
                {
                    'min-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ 'max-h': [
                {
                    'max-h': [
                        isArbitraryValue,
                        spacing,
                        'min',
                        'max',
                        'fit',
                        'svh',
                        'lvh',
                        'dvh'
                    ]
                }
            ],
            /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */ size: [
                {
                    size: [
                        isArbitraryValue,
                        spacing,
                        'auto',
                        'min',
                        'max',
                        'fit'
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ 'font-size': [
                {
                    text: [
                        'base',
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ 'font-smoothing': [
                'antialiased',
                'subpixel-antialiased'
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ 'font-style': [
                'italic',
                'not-italic'
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ 'font-weight': [
                {
                    font: [
                        'thin',
                        'extralight',
                        'light',
                        'normal',
                        'medium',
                        'semibold',
                        'bold',
                        'extrabold',
                        'black',
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ 'font-family': [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-normal': [
                'normal-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-ordinal': [
                'ordinal'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-slashed-zero': [
                'slashed-zero'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-figure': [
                'lining-nums',
                'oldstyle-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-spacing': [
                'proportional-nums',
                'tabular-nums'
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ 'fvn-fraction': [
                'diagonal-fractions',
                'stacked-fractions'
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        'tighter',
                        'tight',
                        'normal',
                        'wide',
                        'wider',
                        'widest',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ 'line-clamp': [
                {
                    'line-clamp': [
                        'none',
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        'none',
                        'tight',
                        'snug',
                        'normal',
                        'relaxed',
                        'loose',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ 'list-image': [
                {
                    'list-image': [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ 'list-style-type': [
                {
                    list: [
                        'none',
                        'disc',
                        'decimal',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ 'list-style-position': [
                {
                    list: [
                        'inside',
                        'outside'
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ 'placeholder-color': [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ 'placeholder-opacity': [
                {
                    'placeholder-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ 'text-alignment': [
                {
                    text: [
                        'left',
                        'center',
                        'right',
                        'justify',
                        'start',
                        'end'
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ 'text-color': [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ 'text-opacity': [
                {
                    'text-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ 'text-decoration': [
                'underline',
                'overline',
                'line-through',
                'no-underline'
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ 'text-decoration-style': [
                {
                    decoration: [
                        ...getLineStyles(),
                        'wavy'
                    ]
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ 'text-decoration-thickness': [
                {
                    decoration: [
                        'auto',
                        'from-font',
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ 'underline-offset': [
                {
                    'underline-offset': [
                        'auto',
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ 'text-decoration-color': [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ 'text-transform': [
                'uppercase',
                'lowercase',
                'capitalize',
                'normal-case'
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ 'text-overflow': [
                'truncate',
                'text-ellipsis',
                'text-clip'
            ],
            /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */ 'text-wrap': [
                {
                    text: [
                        'wrap',
                        'nowrap',
                        'balance',
                        'pretty'
                    ]
                }
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ 'vertical-align': [
                {
                    align: [
                        'baseline',
                        'top',
                        'middle',
                        'bottom',
                        'text-top',
                        'text-bottom',
                        'sub',
                        'super',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        'normal',
                        'nowrap',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'break-spaces'
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ break: [
                {
                    break: [
                        'normal',
                        'words',
                        'all',
                        'keep'
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        'none',
                        'manual',
                        'auto'
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        'none',
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ 'bg-attachment': [
                {
                    bg: [
                        'fixed',
                        'local',
                        'scroll'
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ 'bg-clip': [
                {
                    'bg-clip': [
                        'border',
                        'padding',
                        'content',
                        'text'
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ 'bg-opacity': [
                {
                    'bg-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ 'bg-origin': [
                {
                    'bg-origin': [
                        'border',
                        'padding',
                        'content'
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ 'bg-position': [
                {
                    bg: [
                        ...getPositions(),
                        isArbitraryPosition
                    ]
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ 'bg-repeat': [
                {
                    bg: [
                        'no-repeat',
                        {
                            repeat: [
                                '',
                                'x',
                                'y',
                                'round',
                                'space'
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ 'bg-size': [
                {
                    bg: [
                        'auto',
                        'cover',
                        'contain',
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ 'bg-image': [
                {
                    bg: [
                        'none',
                        {
                            'gradient-to': [
                                't',
                                'tr',
                                'r',
                                'br',
                                'b',
                                'bl',
                                'l',
                                'tl'
                            ]
                        },
                        isArbitraryImage
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ 'bg-color': [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from-pos': [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via-pos': [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to-pos': [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-from': [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-via': [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ 'gradient-to': [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-s': [
                {
                    'rounded-s': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-e': [
                {
                    'rounded-e': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-t': [
                {
                    'rounded-t': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-r': [
                {
                    'rounded-r': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-b': [
                {
                    'rounded-b': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-l': [
                {
                    'rounded-l': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ss': [
                {
                    'rounded-ss': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-se': [
                {
                    'rounded-se': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-ee': [
                {
                    'rounded-ee': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-es': [
                {
                    'rounded-es': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tl': [
                {
                    'rounded-tl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-tr': [
                {
                    'rounded-tr': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-br': [
                {
                    'rounded-br': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ 'rounded-bl': [
                {
                    'rounded-bl': [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w': [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-x': [
                {
                    'border-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-y': [
                {
                    'border-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-s': [
                {
                    'border-s': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-e': [
                {
                    'border-e': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-t': [
                {
                    'border-t': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-r': [
                {
                    'border-r': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-b': [
                {
                    'border-b': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ 'border-w-l': [
                {
                    'border-l': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ 'border-opacity': [
                {
                    'border-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ 'border-style': [
                {
                    border: [
                        ...getLineStyles(),
                        'hidden'
                    ]
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x': [
                {
                    'divide-x': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-x-reverse': [
                'divide-x-reverse'
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y': [
                {
                    'divide-y': [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ 'divide-y-reverse': [
                'divide-y-reverse'
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ 'divide-opacity': [
                {
                    'divide-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ 'divide-style': [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color': [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-x': [
                {
                    'border-x': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-y': [
                {
                    'border-y': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-s': [
                {
                    'border-s': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-e': [
                {
                    'border-e': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-t': [
                {
                    'border-t': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-r': [
                {
                    'border-r': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-b': [
                {
                    'border-b': [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ 'border-color-l': [
                {
                    'border-l': [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ 'divide-color': [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ 'outline-style': [
                {
                    outline: [
                        '',
                        ...getLineStyles()
                    ]
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ 'outline-offset': [
                {
                    'outline-offset': [
                        isLength,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ 'outline-w': [
                {
                    outline: [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ 'outline-color': [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w': [
                {
                    ring: getLengthWithEmptyAndArbitrary()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ 'ring-w-inset': [
                'ring-inset'
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ 'ring-color': [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ 'ring-opacity': [
                {
                    'ring-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ 'ring-offset-w': [
                {
                    'ring-offset': [
                        isLength,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ 'ring-offset-color': [
                {
                    'ring-offset': [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        '',
                        'inner',
                        'none',
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ 'shadow-color': [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ 'mix-blend': [
                {
                    'mix-blend': [
                        ...getBlendModes(),
                        'plus-lighter',
                        'plus-darker'
                    ]
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ 'bg-blend': [
                {
                    'bg-blend': getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ 'drop-shadow': [
                {
                    'drop-shadow': [
                        '',
                        'none',
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ 'hue-rotate': [
                {
                    'hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ 'backdrop-filter': [
                {
                    'backdrop-filter': [
                        '',
                        'none'
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ 'backdrop-blur': [
                {
                    'backdrop-blur': [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ 'backdrop-brightness': [
                {
                    'backdrop-brightness': [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ 'backdrop-contrast': [
                {
                    'backdrop-contrast': [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ 'backdrop-grayscale': [
                {
                    'backdrop-grayscale': [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ 'backdrop-hue-rotate': [
                {
                    'backdrop-hue-rotate': [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ 'backdrop-invert': [
                {
                    'backdrop-invert': [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ 'backdrop-opacity': [
                {
                    'backdrop-opacity': [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ 'backdrop-saturate': [
                {
                    'backdrop-saturate': [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ 'backdrop-sepia': [
                {
                    'backdrop-sepia': [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ 'border-collapse': [
                {
                    border: [
                        'collapse',
                        'separate'
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing': [
                {
                    'border-spacing': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-x': [
                {
                    'border-spacing-x': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ 'border-spacing-y': [
                {
                    'border-spacing-y': [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ 'table-layout': [
                {
                    table: [
                        'auto',
                        'fixed'
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        'top',
                        'bottom'
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        'none',
                        'all',
                        '',
                        'colors',
                        'opacity',
                        'shadow',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        'linear',
                        'in',
                        'out',
                        'in-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        'none',
                        'spin',
                        'ping',
                        'pulse',
                        'bounce',
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        '',
                        'gpu',
                        'none'
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-x': [
                {
                    'scale-x': [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ 'scale-y': [
                {
                    'scale-y': [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-x': [
                {
                    'translate-x': [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ 'translate-y': [
                {
                    'translate-y': [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-x': [
                {
                    'skew-x': [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ 'skew-y': [
                {
                    'skew-y': [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ 'transform-origin': [
                {
                    origin: [
                        'center',
                        'top',
                        'top-right',
                        'right',
                        'bottom-right',
                        'bottom',
                        'bottom-left',
                        'left',
                        'top-left',
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        'auto',
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                {
                    appearance: [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
                {
                    cursor: [
                        'auto',
                        'default',
                        'pointer',
                        'wait',
                        'text',
                        'move',
                        'help',
                        'not-allowed',
                        'none',
                        'context-menu',
                        'progress',
                        'cell',
                        'crosshair',
                        'vertical-text',
                        'alias',
                        'copy',
                        'no-drop',
                        'grab',
                        'grabbing',
                        'all-scroll',
                        'col-resize',
                        'row-resize',
                        'n-resize',
                        'e-resize',
                        's-resize',
                        'w-resize',
                        'ne-resize',
                        'nw-resize',
                        'se-resize',
                        'sw-resize',
                        'ew-resize',
                        'ns-resize',
                        'nesw-resize',
                        'nwse-resize',
                        'zoom-in',
                        'zoom-out',
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ 'caret-color': [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ 'pointer-events': [
                {
                    'pointer-events': [
                        'none',
                        'auto'
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        'none',
                        'y',
                        'x',
                        ''
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ 'scroll-behavior': [
                {
                    scroll: [
                        'auto',
                        'smooth'
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-m': [
                {
                    'scroll-m': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mx': [
                {
                    'scroll-mx': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-my': [
                {
                    'scroll-my': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ms': [
                {
                    'scroll-ms': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-me': [
                {
                    'scroll-me': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mt': [
                {
                    'scroll-mt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mr': [
                {
                    'scroll-mr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-mb': [
                {
                    'scroll-mb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ 'scroll-ml': [
                {
                    'scroll-ml': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-p': [
                {
                    'scroll-p': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-px': [
                {
                    'scroll-px': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-py': [
                {
                    'scroll-py': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-ps': [
                {
                    'scroll-ps': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pe': [
                {
                    'scroll-pe': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pt': [
                {
                    'scroll-pt': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pr': [
                {
                    'scroll-pr': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pb': [
                {
                    'scroll-pb': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ 'scroll-pl': [
                {
                    'scroll-pl': getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ 'snap-align': [
                {
                    snap: [
                        'start',
                        'end',
                        'center',
                        'align-none'
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ 'snap-stop': [
                {
                    snap: [
                        'normal',
                        'always'
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-type': [
                {
                    snap: [
                        'none',
                        'x',
                        'y',
                        'both'
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ 'snap-strictness': [
                {
                    snap: [
                        'mandatory',
                        'proximity'
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        'auto',
                        'none',
                        'manipulation'
                    ]
                }
            ],
            /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-x': [
                {
                    'touch-pan': [
                        'x',
                        'left',
                        'right'
                    ]
                }
            ],
            /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-y': [
                {
                    'touch-pan': [
                        'y',
                        'up',
                        'down'
                    ]
                }
            ],
            /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */ 'touch-pz': [
                'touch-pinch-zoom'
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        'none',
                        'text',
                        'all',
                        'auto'
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ 'will-change': [
                {
                    'will-change': [
                        'auto',
                        'scroll',
                        'contents',
                        'transform',
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        'none'
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ 'stroke-w': [
                {
                    stroke: [
                        isLength,
                        isArbitraryLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        'none'
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                'sr-only',
                'not-sr-only'
            ],
            /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */ 'forced-color-adjust': [
                {
                    'forced-color-adjust': [
                        'auto',
                        'none'
                    ]
                }
            ]
        },
        conflictingClassGroups: {
            overflow: [
                'overflow-x',
                'overflow-y'
            ],
            overscroll: [
                'overscroll-x',
                'overscroll-y'
            ],
            inset: [
                'inset-x',
                'inset-y',
                'start',
                'end',
                'top',
                'right',
                'bottom',
                'left'
            ],
            'inset-x': [
                'right',
                'left'
            ],
            'inset-y': [
                'top',
                'bottom'
            ],
            flex: [
                'basis',
                'grow',
                'shrink'
            ],
            gap: [
                'gap-x',
                'gap-y'
            ],
            p: [
                'px',
                'py',
                'ps',
                'pe',
                'pt',
                'pr',
                'pb',
                'pl'
            ],
            px: [
                'pr',
                'pl'
            ],
            py: [
                'pt',
                'pb'
            ],
            m: [
                'mx',
                'my',
                'ms',
                'me',
                'mt',
                'mr',
                'mb',
                'ml'
            ],
            mx: [
                'mr',
                'ml'
            ],
            my: [
                'mt',
                'mb'
            ],
            size: [
                'w',
                'h'
            ],
            'font-size': [
                'leading'
            ],
            'fvn-normal': [
                'fvn-ordinal',
                'fvn-slashed-zero',
                'fvn-figure',
                'fvn-spacing',
                'fvn-fraction'
            ],
            'fvn-ordinal': [
                'fvn-normal'
            ],
            'fvn-slashed-zero': [
                'fvn-normal'
            ],
            'fvn-figure': [
                'fvn-normal'
            ],
            'fvn-spacing': [
                'fvn-normal'
            ],
            'fvn-fraction': [
                'fvn-normal'
            ],
            'line-clamp': [
                'display',
                'overflow'
            ],
            rounded: [
                'rounded-s',
                'rounded-e',
                'rounded-t',
                'rounded-r',
                'rounded-b',
                'rounded-l',
                'rounded-ss',
                'rounded-se',
                'rounded-ee',
                'rounded-es',
                'rounded-tl',
                'rounded-tr',
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-s': [
                'rounded-ss',
                'rounded-es'
            ],
            'rounded-e': [
                'rounded-se',
                'rounded-ee'
            ],
            'rounded-t': [
                'rounded-tl',
                'rounded-tr'
            ],
            'rounded-r': [
                'rounded-tr',
                'rounded-br'
            ],
            'rounded-b': [
                'rounded-br',
                'rounded-bl'
            ],
            'rounded-l': [
                'rounded-tl',
                'rounded-bl'
            ],
            'border-spacing': [
                'border-spacing-x',
                'border-spacing-y'
            ],
            'border-w': [
                'border-w-s',
                'border-w-e',
                'border-w-t',
                'border-w-r',
                'border-w-b',
                'border-w-l'
            ],
            'border-w-x': [
                'border-w-r',
                'border-w-l'
            ],
            'border-w-y': [
                'border-w-t',
                'border-w-b'
            ],
            'border-color': [
                'border-color-s',
                'border-color-e',
                'border-color-t',
                'border-color-r',
                'border-color-b',
                'border-color-l'
            ],
            'border-color-x': [
                'border-color-r',
                'border-color-l'
            ],
            'border-color-y': [
                'border-color-t',
                'border-color-b'
            ],
            'scroll-m': [
                'scroll-mx',
                'scroll-my',
                'scroll-ms',
                'scroll-me',
                'scroll-mt',
                'scroll-mr',
                'scroll-mb',
                'scroll-ml'
            ],
            'scroll-mx': [
                'scroll-mr',
                'scroll-ml'
            ],
            'scroll-my': [
                'scroll-mt',
                'scroll-mb'
            ],
            'scroll-p': [
                'scroll-px',
                'scroll-py',
                'scroll-ps',
                'scroll-pe',
                'scroll-pt',
                'scroll-pr',
                'scroll-pb',
                'scroll-pl'
            ],
            'scroll-px': [
                'scroll-pr',
                'scroll-pl'
            ],
            'scroll-py': [
                'scroll-pt',
                'scroll-pb'
            ],
            touch: [
                'touch-x',
                'touch-y',
                'touch-pz'
            ],
            'touch-x': [
                'touch'
            ],
            'touch-y': [
                'touch'
            ],
            'touch-pz': [
                'touch'
            ]
        },
        conflictingClassGroupModifiers: {
            'font-size': [
                'leading'
            ]
        }
    };
};
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */ const mergeConfigs = (baseConfig, { cacheSize, prefix, separator, experimentalParseClassName, extend = {}, override = {} })=>{
    overrideProperty(baseConfig, 'cacheSize', cacheSize);
    overrideProperty(baseConfig, 'prefix', prefix);
    overrideProperty(baseConfig, 'separator', separator);
    overrideProperty(baseConfig, 'experimentalParseClassName', experimentalParseClassName);
    for(const configKey in override){
        overrideConfigProperties(baseConfig[configKey], override[configKey]);
    }
    for(const key in extend){
        mergeConfigProperties(baseConfig[key], extend[key]);
    }
    return baseConfig;
};
const overrideProperty = (baseObject, overrideKey, overrideValue)=>{
    if (overrideValue !== undefined) {
        baseObject[overrideKey] = overrideValue;
    }
};
const overrideConfigProperties = (baseObject, overrideObject)=>{
    if (overrideObject) {
        for(const key in overrideObject){
            overrideProperty(baseObject, key, overrideObject[key]);
        }
    }
};
const mergeConfigProperties = (baseObject, mergeObject)=>{
    if (mergeObject) {
        for(const key in mergeObject){
            const mergeValue = mergeObject[key];
            if (mergeValue !== undefined) {
                baseObject[key] = (baseObject[key] || []).concat(mergeValue);
            }
        }
    }
};
const extendTailwindMerge = (configExtension, ...createConfig)=>typeof configExtension === 'function' ? createTailwindMerge(getDefaultConfig, configExtension, ...createConfig) : createTailwindMerge(()=>mergeConfigs(getDefaultConfig(), configExtension), ...createConfig);
const twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BailoutToCSR", {
    enumerable: true,
    get: function() {
        return BailoutToCSR;
    }
});
const _bailouttocsr = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
function BailoutToCSR({ reason, children }) {
    if (typeof window === 'undefined') {
        throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    return children;
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "encodeURIPath", {
    enumerable: true,
    get: function() {
        return encodeURIPath;
    }
});
function encodeURIPath(file) {
    return file.split('/').map((p)=>encodeURIComponent(p)).join('/');
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PreloadChunks", {
    enumerable: true,
    get: function() {
        return PreloadChunks;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const _encodeuripath = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/encode-uri-path.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function PreloadChunks({ moduleIds }) {
    // Early return in client compilation and only load requestStore on server side
    if (typeof window !== 'undefined') {
        return null;
    }
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore === undefined) {
        return null;
    }
    const allFiles = [];
    // Search the current dynamic call unique key id in react loadable manifest,
    // and find the corresponding CSS files to preload
    if (workStore.reactLoadableManifest && moduleIds) {
        const manifest = workStore.reactLoadableManifest;
        for (const key of moduleIds){
            if (!manifest[key]) continue;
            const chunks = manifest[key].files;
            allFiles.push(...chunks);
        }
    }
    if (allFiles.length === 0) {
        return null;
    }
    const query = (0, _deploymentid.getAssetTokenQuery)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: allFiles.map((chunk)=>{
            const href = `${workStore.assetPrefix}/_next/${(0, _encodeuripath.encodeURIPath)(chunk)}${query}`;
            const isCss = chunk.endsWith('.css');
            // If it's stylesheet we use `precedence` o help hoist with React Float.
            // For stylesheets we actually need to render the CSS because nothing else is going to do it so it needs to be part of the component tree.
            // The `preload` for stylesheet is not optional.
            if (isCss) {
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
                    // @ts-ignore
                    precedence: "dynamic",
                    href: href,
                    rel: "stylesheet",
                    as: "style",
                    nonce: workStore.nonce
                }, chunk);
            } else {
                // If it's script we use ReactDOM.preload to preload the resources
                (0, _reactdom.preload)(href, {
                    as: 'script',
                    fetchPriority: 'low',
                    nonce: workStore.nonce
                });
                return null;
            }
        })
    });
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _jsxruntime = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const _dynamicbailouttocsr = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/lazy-dynamic/dynamic-bailout-to-csr.js [app-client] (ecmascript)");
const _preloadchunks = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/lazy-dynamic/preload-chunks.js [app-client] (ecmascript)");
// Normalize loader to return the module as form { default: Component } for `React.lazy`.
// Also for backward compatible since next/dynamic allows to resolve a component directly with loader
// Client component reference proxy need to be converted to a module.
function convertModule(mod) {
    // Check "default" prop before accessing it, as it could be client reference proxy that could break it reference.
    // Cases:
    // mod: { default: Component }
    // mod: Component
    // mod: { default: proxy(Component) }
    // mod: proxy(Component)
    const hasDefault = mod && 'default' in mod;
    return {
        default: hasDefault ? mod.default : mod
    };
}
const defaultOptions = {
    loader: ()=>Promise.resolve(convertModule(()=>null)),
    loading: null,
    ssr: true
};
function Loadable(options) {
    const opts = {
        ...defaultOptions,
        ...options
    };
    const Lazy = /*#__PURE__*/ (0, _react.lazy)(()=>opts.loader().then(convertModule));
    const Loading = opts.loading;
    function LoadableComponent(props) {
        const fallbackElement = Loading ? /*#__PURE__*/ (0, _jsxruntime.jsx)(Loading, {
            isLoading: true,
            pastDelay: true,
            error: null
        }) : null;
        // If it's non-SSR or provided a loading component, wrap it in a suspense boundary
        const hasSuspenseBoundary = !opts.ssr || !!opts.loading;
        const Wrap = hasSuspenseBoundary ? _react.Suspense : _react.Fragment;
        const wrapProps = hasSuspenseBoundary ? {
            fallback: fallbackElement
        } : {};
        const children = opts.ssr ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                typeof window === 'undefined' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_preloadchunks.PreloadChunks, {
                    moduleIds: opts.modules
                }) : null,
                /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                    ...props
                })
            ]
        }) : /*#__PURE__*/ (0, _jsxruntime.jsx)(_dynamicbailouttocsr.BailoutToCSR, {
            reason: "next/dynamic",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Lazy, {
                ...props
            })
        });
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(Wrap, {
            ...wrapProps,
            children: children
        });
    }
    LoadableComponent.displayName = 'LoadableComponent';
    return LoadableComponent;
}
const _default = Loadable;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return dynamic;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _loadable = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/shared/lib/lazy-dynamic/loadable.js [app-client] (ecmascript)"));
function dynamic(dynamicOptions, options) {
    const loadableOptions = {};
    if (typeof dynamicOptions === 'function') {
        loadableOptions.loader = dynamicOptions;
    }
    const mergedOptions = {
        ...loadableOptions,
        ...options
    };
    return (0, _loadable.default)({
        ...mergedOptions,
        modules: mergedOptions.loadableGenerated?.modules
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronDown", [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "inView",
    ()=>inView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/motion-dom/dist/es/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/motion-dom/dist/es/utils/resolve-elements.mjs [app-client] (ecmascript)");
;
const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$motion$2d$dom$2f$dist$2f$es$2f$utils$2f$resolve$2d$elements$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveElements"])(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry);
                if (typeof newOnEnd === "function") {
                    activeIntersections.set(entry.target, newOnEnd);
                } else {
                    observer.unobserve(entry.target);
                }
            } else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/framer-motion/dist/es/render/dom/viewport/index.mjs [app-client] (ecmascript)");
;
;
function useInView(ref, { root, margin, amount, once = false } = {}) {
    const [isInView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            if (!ref.current || once && isInView) return;
            const onEnter = {
                "useInView.useEffect.onEnter": ()=>{
                    setInView(true);
                    return once ? undefined : ({
                        "useInView.useEffect.onEnter": ()=>setInView(false)
                    })["useInView.useEffect.onEnter"];
                }
            }["useInView.useEffect.onEnter"];
            const options = {
                root: root && root.current || undefined,
                margin,
                amount
            };
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$dom$2f$viewport$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inView"])(ref.current, onEnter, options);
        }
    }["useInView.useEffect"], [
        root,
        ref,
        margin,
        once,
        amount
    ]);
    return isInView;
}
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BrainCircuit
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const BrainCircuit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("BrainCircuit", [
    [
        "path",
        {
            d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
            key: "l5xja"
        }
    ],
    [
        "path",
        {
            d: "M9 13a4.5 4.5 0 0 0 3-4",
            key: "10igwf"
        }
    ],
    [
        "path",
        {
            d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
            key: "105sqy"
        }
    ],
    [
        "path",
        {
            d: "M3.477 10.896a4 4 0 0 1 .585-.396",
            key: "ql3yin"
        }
    ],
    [
        "path",
        {
            d: "M6 18a4 4 0 0 1-1.967-.516",
            key: "2e4loj"
        }
    ],
    [
        "path",
        {
            d: "M12 13h4",
            key: "1ku699"
        }
    ],
    [
        "path",
        {
            d: "M12 18h6a2 2 0 0 1 2 2v1",
            key: "105ag5"
        }
    ],
    [
        "path",
        {
            d: "M12 8h8",
            key: "1lhi5i"
        }
    ],
    [
        "path",
        {
            d: "M16 8V5a2 2 0 0 1 2-2",
            key: "u6izg6"
        }
    ],
    [
        "circle",
        {
            cx: "16",
            cy: "13",
            r: ".5",
            key: "ry7gng"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "3",
            r: ".5",
            key: "1aiba7"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "21",
            r: ".5",
            key: "yhc1fs"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "8",
            r: ".5",
            key: "1e43v0"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript) <export default as BrainCircuit>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrainCircuit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2d$circuit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/brain-circuit.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MessageSquare
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const MessageSquare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("MessageSquare", [
    [
        "path",
        {
            d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
            key: "1lielz"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageSquare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Zap
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Zap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Zap", [
    [
        "path",
        {
            d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
            key: "1xq2db"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Zap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Headphones
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Headphones = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Headphones", [
    [
        "path",
        {
            d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
            key: "1xhozi"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Headphones",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Database
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Database", [
    [
        "ellipse",
        {
            cx: "12",
            cy: "5",
            rx: "9",
            ry: "3",
            key: "msslwz"
        }
    ],
    [
        "path",
        {
            d: "M3 5V19A9 3 0 0 0 21 19V5",
            key: "1wlel7"
        }
    ],
    [
        "path",
        {
            d: "M3 12A9 3 0 0 0 21 12",
            key: "mv7ke4"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript) <export default as Database>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Database",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/database.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserCheck
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const UserCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("UserCheck", [
    [
        "path",
        {
            d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
            key: "1yyitq"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "7",
            r: "4",
            key: "nufk8"
        }
    ],
    [
        "polyline",
        {
            points: "16 11 18 13 22 9",
            key: "1pwet4"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileText
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("FileText", [
    [
        "path",
        {
            d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
            key: "1rqfz7"
        }
    ],
    [
        "path",
        {
            d: "M14 2v4a2 2 0 0 0 2 2h4",
            key: "tnqrlb"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Settings2
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Settings2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Settings2", [
    [
        "path",
        {
            d: "M20 7h-9",
            key: "3s1dr2"
        }
    ],
    [
        "path",
        {
            d: "M14 17H5",
            key: "gfn3mx"
        }
    ],
    [
        "circle",
        {
            cx: "17",
            cy: "17",
            r: "3",
            key: "18b49y"
        }
    ],
    [
        "circle",
        {
            cx: "7",
            cy: "7",
            r: "3",
            key: "dfmy0x"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript) <export default as Settings2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/settings-2.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Stethoscope
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Stethoscope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Stethoscope", [
    [
        "path",
        {
            d: "M11 2v2",
            key: "1539x4"
        }
    ],
    [
        "path",
        {
            d: "M5 2v2",
            key: "1yf1q8"
        }
    ],
    [
        "path",
        {
            d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
            key: "rb5t3r"
        }
    ],
    [
        "path",
        {
            d: "M8 15a6 6 0 0 0 12 0v-3",
            key: "x18d4x"
        }
    ],
    [
        "circle",
        {
            cx: "20",
            cy: "10",
            r: "2",
            key: "ts1r5v"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript) <export default as Stethoscope>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stethoscope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$stethoscope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/stethoscope.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Briefcase
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Briefcase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Briefcase", [
    [
        "path",
        {
            d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
            key: "jecpp"
        }
    ],
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "6",
            rx: "2",
            key: "i6l2r4"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Briefcase",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShoppingCart
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ShoppingCart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ShoppingCart", [
    [
        "circle",
        {
            cx: "8",
            cy: "21",
            r: "1",
            key: "jimo8o"
        }
    ],
    [
        "circle",
        {
            cx: "19",
            cy: "21",
            r: "1",
            key: "13723u"
        }
    ],
    [
        "path",
        {
            d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
            key: "9zh506"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShoppingCart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Building2
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Building2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Building2", [
    [
        "path",
        {
            d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",
            key: "1b4qmf"
        }
    ],
    [
        "path",
        {
            d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",
            key: "i71pzd"
        }
    ],
    [
        "path",
        {
            d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",
            key: "10jefs"
        }
    ],
    [
        "path",
        {
            d: "M10 6h4",
            key: "1itunk"
        }
    ],
    [
        "path",
        {
            d: "M10 10h4",
            key: "tcdvrf"
        }
    ],
    [
        "path",
        {
            d: "M10 14h4",
            key: "kelpxr"
        }
    ],
    [
        "path",
        {
            d: "M10 18h4",
            key: "1ulq68"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Building2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Check
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Check = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Check", [
    [
        "path",
        {
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Check",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingDown
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const TrendingDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("TrendingDown", [
    [
        "polyline",
        {
            points: "22 17 13.5 8.5 8.5 13.5 2 7",
            key: "1r2t7k"
        }
    ],
    [
        "polyline",
        {
            points: "16 17 22 17 22 11",
            key: "11uiuu"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Clock", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "polyline",
        {
            points: "12 6 12 12 16 14",
            key: "68esgv"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrendingUp
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("TrendingUp", [
    [
        "polyline",
        {
            points: "22 7 13.5 15.5 8.5 10.5 2 17",
            key: "126l90"
        }
    ],
    [
        "polyline",
        {
            points: "16 7 22 7 22 13",
            key: "kwv8wd"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Rocket
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Rocket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Rocket", [
    [
        "path",
        {
            d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
            key: "m3kijz"
        }
    ],
    [
        "path",
        {
            d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
            key: "1fmvmk"
        }
    ],
    [
        "path",
        {
            d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",
            key: "1f8sc4"
        }
    ],
    [
        "path",
        {
            d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
            key: "qeys4"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Rocket",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Puzzle
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Puzzle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Puzzle", [
    [
        "path",
        {
            d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z",
            key: "w46dr5"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript) <export default as Puzzle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Puzzle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$puzzle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/puzzle.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Shield
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Shield = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Shield", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Shield",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowUpRight
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowUpRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowUpRight", [
    [
        "path",
        {
            d: "M7 7h10v10",
            key: "1tivn9"
        }
    ],
    [
        "path",
        {
            d: "M7 17 17 7",
            key: "1vkiza"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowUpRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Scale
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Scale", [
    [
        "path",
        {
            d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "7g6ntu"
        }
    ],
    [
        "path",
        {
            d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",
            key: "ijws7r"
        }
    ],
    [
        "path",
        {
            d: "M7 21h10",
            key: "1b0cd5"
        }
    ],
    [
        "path",
        {
            d: "M12 3v18",
            key: "108xh3"
        }
    ],
    [
        "path",
        {
            d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",
            key: "3gwbw2"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scale",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Factory
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Factory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Factory", [
    [
        "path",
        {
            d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
            key: "159hny"
        }
    ],
    [
        "path",
        {
            d: "M17 18h1",
            key: "uldtlt"
        }
    ],
    [
        "path",
        {
            d: "M12 18h1",
            key: "s9uhes"
        }
    ],
    [
        "path",
        {
            d: "M7 18h1",
            key: "1neino"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript) <export default as Factory>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Factory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$factory$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/factory.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Boxes
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Boxes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Boxes", [
    [
        "path",
        {
            d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",
            key: "lc1i9w"
        }
    ],
    [
        "path",
        {
            d: "m7 16.5-4.74-2.85",
            key: "1o9zyk"
        }
    ],
    [
        "path",
        {
            d: "m7 16.5 5-3",
            key: "va8pkn"
        }
    ],
    [
        "path",
        {
            d: "M7 16.5v5.17",
            key: "jnp8gn"
        }
    ],
    [
        "path",
        {
            d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",
            key: "8zsnat"
        }
    ],
    [
        "path",
        {
            d: "m17 16.5-5-3",
            key: "8arw3v"
        }
    ],
    [
        "path",
        {
            d: "m17 16.5 4.74-2.85",
            key: "8rfmw"
        }
    ],
    [
        "path",
        {
            d: "M17 16.5v5.17",
            key: "k6z78m"
        }
    ],
    [
        "path",
        {
            d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",
            key: "1xygjf"
        }
    ],
    [
        "path",
        {
            d: "M12 8 7.26 5.15",
            key: "1vbdud"
        }
    ],
    [
        "path",
        {
            d: "m12 8 4.74-2.85",
            key: "3rx089"
        }
    ],
    [
        "path",
        {
            d: "M12 13.5V8",
            key: "1io7kd"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript) <export default as Boxes>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Boxes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$boxes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/boxes.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/headset.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Headset
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Headset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Headset", [
    [
        "path",
        {
            d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",
            key: "12oyoe"
        }
    ],
    [
        "path",
        {
            d: "M21 16v2a4 4 0 0 1-4 4h-5",
            key: "1x7m43"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/headset.js [app-client] (ecmascript) <export default as Headset>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Headset",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headset$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/headset.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArrowLeft
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ArrowLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ArrowLeft", [
    [
        "path",
        {
            d: "m12 19-7-7 7-7",
            key: "1l729n"
        }
    ],
    [
        "path",
        {
            d: "M19 12H5",
            key: "x3x0zl"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CircleCheck
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CircleCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CircleCheck", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckCircle2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoaderCircle
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Search", [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "path",
        {
            d: "m21 21-4.3-4.3",
            key: "1qie3q"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Search",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lightbulb
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Lightbulb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Lightbulb", [
    [
        "path",
        {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }
    ],
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightbulb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CodeXml
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CodeXml = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CodeXml", [
    [
        "path",
        {
            d: "m18 16 4-4-4-4",
            key: "1inbqp"
        }
    ],
    [
        "path",
        {
            d: "m6 8-4 4 4 4",
            key: "15zrgr"
        }
    ],
    [
        "path",
        {
            d: "m14.5 4-5 16",
            key: "e7oirm"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plug
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Plug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Plug", [
    [
        "path",
        {
            d: "M12 22v-5",
            key: "1ega77"
        }
    ],
    [
        "path",
        {
            d: "M9 8V2",
            key: "14iosj"
        }
    ],
    [
        "path",
        {
            d: "M15 8V2",
            key: "18g5xt"
        }
    ],
    [
        "path",
        {
            d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",
            key: "osxo6l"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript) <export default as Plug>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plug",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plug$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/plug.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LifeBuoy
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const LifeBuoy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LifeBuoy", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "m4.93 4.93 4.24 4.24",
            key: "1ymg45"
        }
    ],
    [
        "path",
        {
            d: "m14.83 9.17 4.24-4.24",
            key: "1cb5xl"
        }
    ],
    [
        "path",
        {
            d: "m14.83 14.83 4.24 4.24",
            key: "q42g0n"
        }
    ],
    [
        "path",
        {
            d: "m9.17 14.83-4.24 4.24",
            key: "bqpfvv"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "4",
            key: "4exip2"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-client] (ecmascript) <export default as LifeBuoy>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LifeBuoy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$life$2d$buoy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/life-buoy.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layers
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Layers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Layers", [
    [
        "path",
        {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo"
        }
    ],
    [
        "path",
        {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc"
        }
    ],
    [
        "path",
        {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Layers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Target
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Target = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Target", [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "6",
            key: "1vlfrh"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "2",
            key: "1c9p78"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Target",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShieldCheck
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ShieldCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ShieldCheck", [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "m9 12 2 2 4-4",
            key: "dzmm74"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Quote
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Quote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Quote", [
    [
        "path",
        {
            d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "rib7q0"
        }
    ],
    [
        "path",
        {
            d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
            key: "1ymkrd"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Quote",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lock
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Lock", [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CalendarCheck
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const CalendarCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("CalendarCheck", [
    [
        "path",
        {
            d: "M8 2v4",
            key: "1cmpym"
        }
    ],
    [
        "path",
        {
            d: "M16 2v4",
            key: "4m81vk"
        }
    ],
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "4",
            rx: "2",
            key: "1hopcy"
        }
    ],
    [
        "path",
        {
            d: "M3 10h18",
            key: "8toen8"
        }
    ],
    [
        "path",
        {
            d: "m9 16 2 2 4-4",
            key: "19s6y9"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript) <export default as CalendarCheck>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CalendarCheck",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/calendar-check.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronLeft", [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChevronRight
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const ChevronRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("ChevronRight", [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Plus
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Plus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Plus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "M12 5v14",
            key: "s699le"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plus",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript)");
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mail
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const Mail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("Mail", [
    [
        "rect",
        {
            width: "20",
            height: "16",
            x: "2",
            y: "4",
            rx: "2",
            key: "18n3k1"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
            key: "1ocrg3"
        }
    ]
]);
;
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mail",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=1j7n_0xi9-f0._.js.map