(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NeuralSphere
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export C as useThree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/@react-three/drei/core/Texture.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Each logo appears once. Colors tuned to read on a dark background.
const LOGOS = [
    // Neural networks / AI
    {
        url: '/logos/openai.svg',
        color: '#10A37F'
    },
    {
        url: '/logos/claude.svg',
        color: '#D97757'
    },
    {
        url: '/logos/googlegemini.svg',
        color: '#4D8EF7'
    },
    {
        url: '/logos/deepseek.svg',
        color: '#4D6BFE'
    },
    {
        url: '/logos/perplexity.svg',
        color: '#20B8CD'
    },
    {
        url: '/logos/mistralai.svg',
        color: '#FA520F'
    },
    {
        url: '/logos/meta.svg',
        color: '#0866FF'
    },
    {
        url: '/logos/huggingface.svg',
        color: '#FFD21E'
    },
    {
        url: '/logos/ollama.svg',
        color: '#ECECEC'
    },
    {
        url: '/logos/elevenlabs.svg',
        color: '#E6E6E6'
    },
    {
        url: '/logos/replicate.svg',
        color: '#E6E6E6'
    },
    {
        url: '/logos/langchain.svg',
        color: '#4CC5B0'
    },
    {
        url: '/logos/githubcopilot.svg',
        color: '#E6E6E6'
    },
    {
        url: '/logos/suno.svg',
        color: '#E6E6E6'
    },
    {
        url: '/logos/nvidia.svg',
        color: '#76B900'
    },
    {
        url: '/logos/googlecolab.svg',
        color: '#F9AB00'
    },
    {
        url: '/logos/kaggle.svg',
        color: '#20BEFF'
    },
    // Integrations / services
    {
        url: '/logos/telegram.svg',
        color: '#26A5E4'
    },
    {
        url: '/logos/whatsapp.svg',
        color: '#25D366'
    },
    {
        url: '/logos/discord.svg',
        color: '#5865F2'
    },
    {
        url: '/logos/vk.svg',
        color: '#0077FF'
    },
    {
        url: '/logos/slack.svg',
        color: '#36C5F0'
    },
    {
        url: '/logos/notion.svg',
        color: '#ECECEC'
    },
    {
        url: '/logos/zapier.svg',
        color: '#FF4F00'
    },
    {
        url: '/logos/make.svg',
        color: '#A78BFA'
    },
    {
        url: '/logos/n8n.svg',
        color: '#EA4B71'
    },
    {
        url: '/logos/airtable.svg',
        color: '#18BFFF'
    },
    {
        url: '/logos/hubspot.svg',
        color: '#FF7A59'
    },
    {
        url: '/logos/stripe.svg',
        color: '#7A73FF'
    },
    {
        url: '/logos/figma.svg',
        color: '#F24E1E'
    },
    {
        url: '/logos/github.svg',
        color: '#E6E6E6'
    },
    {
        url: '/logos/wordpress.svg',
        color: '#4596D1'
    },
    {
        url: '/logos/trello.svg',
        color: '#4B9FFF'
    },
    {
        url: '/logos/gmail.svg',
        color: '#EA4335'
    },
    {
        url: '/logos/googlesheets.svg',
        color: '#34A853'
    },
    {
        url: '/logos/googledrive.svg',
        color: '#4796E3'
    },
    {
        url: '/logos/googledocs.svg',
        color: '#4285F4'
    },
    {
        url: '/logos/googlecalendar.svg',
        color: '#4285F4'
    },
    {
        url: '/logos/googleforms.svg',
        color: '#8E5BD9'
    }
];
const L = LOGOS.length;
const FILL = 250 // extra glowing dots to make the assembled sphere dense
;
const TOTAL = FILL + L;
const DIA_INDEX = L // a sphere node reserved for the Diadem brand mark
;
const MAX_EDGES = 150;
const RADIUS = 2.6;
const easeInOut = (t)=>t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const clamp01 = (v)=>v < 0 ? 0 : v > 1 ? 1 : v;
function makeDotTexture() {
    const s = 64;
    const c = document.createElement('canvas');
    c.width = c.height = s;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.4, 'rgba(255,255,255,0.55)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, s, s);
    const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    return tex;
}
/** Rasterize an SVG logo and tint it with the given brand color. */ function makeLogoTexture(url, color) {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const tex = new __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
    tex.colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
    const img = new Image();
    img.onload = ()=>{
        const pad = size * 0.14;
        ctx.clearRect(0, 0, size, size);
        ctx.drawImage(img, pad, pad, size - pad * 2, size - pad * 2);
        ctx.globalCompositeOperation = 'source-in';
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, size, size);
        ctx.globalCompositeOperation = 'source-over';
        tex.needsUpdate = true;
    };
    img.src = url;
    return tex;
}
function NeuralSphere({ progress, reduce }) {
    _s();
    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointsMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const linesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spriteRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const introStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const drawRangeSet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const { camera } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"])();
    // Diadem brand mark — orbits among the logos, then flies into the camera
    const diademRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const diademMat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const diademTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"])('/diadem-mark.png');
    const dotTex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(makeDotTexture, []);
    const logoTextures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NeuralSphere.useMemo[logoTextures]": ()=>LOGOS.map({
                "NeuralSphere.useMemo[logoTextures]": (l)=>makeLogoTexture(l.url, l.color)
            }["NeuralSphere.useMemo[logoTextures]"])
    }["NeuralSphere.useMemo[logoTextures]"], []);
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NeuralSphere.useMemo[data]": ()=>{
            const assembled = new Float32Array(TOTAL * 3);
            const scattered = new Float32Array(TOTAL * 3);
            const colors = new Float32Array(TOTAL * 3);
            const golden = Math.PI * (3 - Math.sqrt(5));
            const tint = new __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]();
            for(let i = 0; i < TOTAL; i++){
                const y = 1 - i / (TOTAL - 1) * 2;
                const r = Math.sqrt(1 - y * y);
                const theta = golden * i;
                const jitter = i < L ? 1 : 0.7 + Math.random() * 0.3;
                assembled[i * 3] = Math.cos(theta) * r * RADIUS * jitter;
                assembled[i * 3 + 1] = y * RADIUS * jitter;
                assembled[i * 3 + 2] = Math.sin(theta) * r * RADIUS * jitter;
                const su = Math.random() * 2 - 1;
                const st = Math.random() * Math.PI * 2;
                const sr = Math.sqrt(1 - su * su);
                const dist = 3.4 + Math.random() * 4.2;
                scattered[i * 3] = Math.cos(st) * sr * dist;
                // Bias the swarm downward so logos don't fly up behind the fixed header
                scattered[i * 3 + 1] = su * dist * 0.55 - 1.1;
                scattered[i * 3 + 2] = Math.sin(st) * sr * dist;
                // logo-node dots glow in their brand color, fillers silver-white
                if (i < L) tint.set(LOGOS[i].color);
                else tint.set('#cfd2e0');
                colors[i * 3] = tint.r;
                colors[i * 3 + 1] = tint.g;
                colors[i * 3 + 2] = tint.b;
            }
            const edges = [];
            const threshold = 0.62 * RADIUS;
            outer: for(let i = 0; i < TOTAL; i++){
                let made = 0;
                for(let j = i + 1; j < TOTAL && made < 2; j++){
                    const dx = assembled[i * 3] - assembled[j * 3];
                    const dy = assembled[i * 3 + 1] - assembled[j * 3 + 1];
                    const dz = assembled[i * 3 + 2] - assembled[j * 3 + 2];
                    if (dx * dx + dy * dy + dz * dz < threshold * threshold) {
                        edges.push(i, j);
                        made++;
                        if (edges.length / 2 >= MAX_EDGES) break outer;
                    }
                }
            }
            return {
                assembled,
                scattered,
                colors,
                edges: Int32Array.from(edges),
                edgeCount: edges.length / 2,
                linePos: new Float32Array(MAX_EDGES * 2 * 3)
            };
        }
    }["NeuralSphere.useMemo[data]"], []);
    const cur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "NeuralSphere.useMemo[cur]": ()=>new Float32Array(TOTAL * 3)
    }["NeuralSphere.useMemo[cur]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "NeuralSphere.useFrame": (state, delta)=>{
            if (introStart.current === 0) introStart.current = state.clock.elapsedTime;
            if (!drawRangeSet.current && linesRef.current) {
                linesRef.current.geometry.setDrawRange(0, data.edgeCount * 2);
                drawRangeSet.current = true;
            }
            const scroll = clamp01(progress.get());
            const scrollDisperse = easeInOut(scroll);
            const introT = clamp01((state.clock.elapsedTime - introStart.current) / 1.8);
            const introDisperse = reduce ? 0 : 1 - easeInOut(introT);
            // Position spread: intro assembles, then scroll scatters
            const posDisperse = reduce ? 0 : Math.max(introDisperse, scrollDisperse);
            // Logos reveal only on scroll (so the initial sphere is pure dots)
            const reveal = reduce ? 0 : clamp01((scrollDisperse - 0.06) / 0.28);
            const { assembled, scattered, edges, edgeCount, linePos } = data;
            for(let k = 0; k < TOTAL * 3; k++){
                cur[k] = assembled[k] + (scattered[k] - assembled[k]) * posDisperse;
            }
            if (pointsRef.current) {
                const attr = pointsRef.current.geometry.getAttribute('position');
                attr.array.set(cur);
                attr.needsUpdate = true;
            }
            if (pointsMat.current) pointsMat.current.opacity = 1 - reveal; // dots fade as logos appear
            // Logos fade in at their node positions
            for(let i = 0; i < L; i++){
                const s = spriteRefs.current[i];
                if (!s) continue;
                s.position.set(cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
                s.material.opacity = reveal;
                s.visible = reveal > 0.01;
            }
            if (linesRef.current) {
                for(let e = 0; e < edgeCount; e++){
                    const a = edges[e * 2] * 3;
                    const b = edges[e * 2 + 1] * 3;
                    const o = e * 6;
                    linePos[o] = cur[a];
                    linePos[o + 1] = cur[a + 1];
                    linePos[o + 2] = cur[a + 2];
                    linePos[o + 3] = cur[b];
                    linePos[o + 4] = cur[b + 1];
                    linePos[o + 5] = cur[b + 2];
                }
                const lattr = linesRef.current.geometry.getAttribute('position');
                lattr.array.set(linePos);
                lattr.needsUpdate = true;
            }
            if (lineMat.current) lineMat.current.opacity = 0.18 * (1 - posDisperse);
            if (group.current) {
                group.current.rotation.y += reduce ? 0 : delta * (0.07 + posDisperse * 0.1);
                group.current.rotation.x = reduce ? 0 : Math.sin(state.clock.elapsedTime * 0.12) * 0.05;
            }
            const targetZ = 6.6 + posDisperse * 1.4;
            camera.position.z += (targetZ - camera.position.z) * Math.min(1, delta * 3);
            camera.lookAt(0, 0, 0);
            // Diadem mark: just another node — orbits and scatters among the logos
            if (diademRef.current) {
                const i = DIA_INDEX;
                diademRef.current.position.set(cur[i * 3], cur[i * 3 + 1], cur[i * 3 + 2]);
                const op = reduce ? 1 : reveal;
                diademRef.current.visible = op > 0.01;
                if (diademMat.current) diademMat.current.opacity = op;
            }
        }
    }["NeuralSphere.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("group", {
        ref: group,
        position: [
            0,
            -0.7,
            0
        ],
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
                ref: pointsRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                                attach: "attributes-position",
                                args: [
                                    data.assembled.slice(),
                                    3
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                                attach: "attributes-color",
                                args: [
                                    data.colors,
                                    3
                                ]
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                        lineNumber: 258,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pointsMaterial", {
                        ref: pointsMat,
                        map: dotTex,
                        size: 0.14,
                        sizeAttenuation: true,
                        vertexColors: true,
                        transparent: true,
                        opacity: 1,
                        depthWrite: false,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            LOGOS.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sprite", {
                    ref: (el)=>{
                        spriteRefs.current[i] = el;
                    },
                    scale: [
                        0.6,
                        0.6,
                        1
                    ],
                    visible: false,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spriteMaterial", {
                        map: logoTextures[i],
                        transparent: true,
                        opacity: 0,
                        depthWrite: false,
                        depthTest: false
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                }, i, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineSegments", {
                ref: linesRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferAttribute", {
                            attach: "attributes-position",
                            args: [
                                data.linePos,
                                3
                            ]
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("lineBasicMaterial", {
                        ref: lineMat,
                        color: '#8e8cf0',
                        transparent: true,
                        opacity: 0.16,
                        depthWrite: false,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"]
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                        lineNumber: 297,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sprite", {
                ref: diademRef,
                scale: [
                    0.85,
                    0.85,
                    1
                ],
                visible: false,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("spriteMaterial", {
                    ref: diademMat,
                    map: diademTex,
                    transparent: true,
                    opacity: 0,
                    depthWrite: false,
                    depthTest: false
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                    lineNumber: 309,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
                lineNumber: 308,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s(NeuralSphere, "HnjYvkZlW/8EjTdARB4MSSDs44I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__C__as__useThree$3e$__["useThree"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$drei$2f$core$2f$Texture$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTexture"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = NeuralSphere;
var _c;
__turbopack_context__.k.register(_c, "NeuralSphere");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/HeroScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$components$2f$three$2f$NeuralSphere$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/three/NeuralSphere.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function HeroScene({ progress, reduce }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
        className: "!absolute inset-0",
        dpr: [
            1,
            1.6
        ],
        gl: {
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
        },
        camera: {
            position: [
                0,
                0,
                6.5
            ],
            fov: 50
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: null,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f_41d$$_443$$_436$$_43d$$_43e$$_435$$2f$Diadem$2f$my$2d$company$2d$site$2f$components$2f$three$2f$NeuralSphere$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                progress: progress,
                reduce: reduce
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/HeroScene.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/HeroScene.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/HeroScene.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = HeroScene;
var _c;
__turbopack_context__.k.register(_c, "HeroScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/HeroScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/Нужное/Diadem/my-company-site/components/HeroScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=1r_4_com~apple~CloudDocs_%D0%9D%D1%83%D0%B6%D0%BD%D0%BE%D0%B5_Diadem_my-company-site_components_1d4pvjm._.js.map