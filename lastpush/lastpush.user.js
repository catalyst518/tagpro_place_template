// ==UserScript==
// @name         TagPro RPlace Script
// @namespace    http://tampermonkey.net/
// @version      0.3
// @match        https://hot-potato.reddit.com/embed*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function () {
    "use strict";

    async function runScript(theCanvas) {
        const placeApi = getPlaceApi(theCanvas);

        const colors = [
            '#6D001A',
            '#BE0039',
            '#FF4500',
            '#FFA800',
            '#FFD635',
            '#FFF8B8',
            '#00A368',
            '#00CC78',
            '#7EED56',
            '#00756F',
            '#009EAA',
            '#00CCC0',
            '#2450A4',
            '#3690EA',
            '#51E9F4',
            '#493AC1',
            '#6A5CFF',
            '#94B3FF',
            '#811E9F',
            '#B44AC0',
            '#E4ABFF',
            '#DE107F',
            '#FF3881',
            '#FF99AA',
            '#6D482F',
            '#9C6926',
            '#FFB470',
            '#000000',
            '#515252',
            '#898D90',
            '#D4D7D9',
            '#FFFFFF',
        ];

        const pixels = [
            [190,486,31,1],
            [191,486,31,1],
            [192,486,31,1],
            [193,486,31,1],
            [194,486,31,1],
            [195,486,31,1],
            [196,486,31,1],
            [197,486,2,1],
            [198,486,2,1],
            [199,486,31,1],
            [200,486,31,1],
            [201,486,31,1],
            [202,486,2,1],
            [203,486,2,1],
            [204,486,31,1],
            [205,486,31,1],
            [206,486,31,1],
            [207,486,31,1],
            [208,486,31,1],
            [209,486,2,1],
            [210,486,31,1],
            [211,486,31,1],
            [212,486,31,1],
            [213,486,31,1],
            [214,486,2,1],
            [215,486,2,1],
            [216,486,31,1],
            [217,486,31,1],
            [218,486,31,1],
            [219,486,2,1],
            [220,486,2,1],
            [221,486,2,1],
            [222,486,2,1],
            [223,486,31,1],
            [224,486,31,1],
            [225,486,31,1],
            [226,486,2,1],
            [190,487,2,1],
            [191,487,2,1],
            [192,487,2,1],
            [193,487,31,1],
            [194,487,2,1],
            [195,487,2,1],
            [196,487,2,1],
            [197,487,2,1],
            [198,487,31,1],
            [199,487,2,1],
            [200,487,2,1],
            [201,487,2,1],
            [202,487,31,1],
            [203,487,2,1],
            [204,487,31,1],
            [205,487,2,1],
            [206,487,2,1],
            [207,487,2,1],
            [208,487,2,1],
            [209,487,2,1],
            [210,487,31,1],
            [211,487,2,1],
            [212,487,2,1],
            [213,487,2,1],
            [214,487,31,1],
            [215,487,2,1],
            [216,487,31,1],
            [217,487,2,1],
            [218,487,2,1],
            [219,487,31,1],
            [220,487,2,1],
            [221,487,2,1],
            [222,487,31,1],
            [223,487,2,1],
            [224,487,2,1],
            [225,487,2,1],
            [226,487,31,1],
            [190,488,2,1],
            [191,488,2,1],
            [192,488,2,1],
            [193,488,31,1],
            [194,488,2,1],
            [195,488,2,1],
            [196,488,2,1],
            [197,488,2,1],
            [198,488,31,1],
            [199,488,2,1],
            [200,488,2,1],
            [201,488,2,1],
            [202,488,31,1],
            [203,488,2,1],
            [204,488,31,1],
            [205,488,2,1],
            [206,488,2,1],
            [207,488,2,1],
            [208,488,2,1],
            [209,488,2,1],
            [210,488,31,1],
            [211,488,2,1],
            [212,488,2,1],
            [213,488,2,1],
            [214,488,31,1],
            [215,488,2,1],
            [216,488,31,1],
            [217,488,2,1],
            [218,488,2,1],
            [219,488,31,1],
            [220,488,2,1],
            [221,488,2,1],
            [222,488,31,1],
            [223,488,2,1],
            [224,488,2,1],
            [225,488,2,1],
            [226,488,31,1],
            [190,489,2,1],
            [191,489,2,1],
            [192,489,2,1],
            [193,489,31,1],
            [194,489,2,1],
            [195,489,2,1],
            [196,489,2,1],
            [197,489,2,1],
            [198,489,31,1],
            [199,489,31,1],
            [200,489,31,1],
            [201,489,31,1],
            [202,489,31,1],
            [203,489,2,1],
            [204,489,31,1],
            [205,489,2,1],
            [206,489,31,1],
            [207,489,31,1],
            [208,489,31,1],
            [209,489,2,1],
            [210,489,31,1],
            [211,489,31,1],
            [212,489,31,1],
            [213,489,31,1],
            [214,489,31,1],
            [215,489,2,1],
            [216,489,31,1],
            [217,489,31,1],
            [218,489,31,1],
            [219,489,2,1],
            [220,489,2,1],
            [221,489,2,1],
            [222,489,31,1],
            [223,489,2,1],
            [224,489,2,1],
            [225,489,2,1],
            [226,489,31,1],
            [190,490,2,1],
            [191,490,2,1],
            [192,490,2,1],
            [193,490,31,1],
            [194,490,2,1],
            [195,490,2,1],
            [196,490,2,1],
            [197,490,2,1],
            [198,490,31,1],
            [199,490,2,1],
            [200,490,2,1],
            [201,490,2,1],
            [202,490,31,1],
            [203,490,2,1],
            [204,490,31,1],
            [205,490,2,1],
            [206,490,2,1],
            [207,490,2,1],
            [208,490,31,1],
            [209,490,2,1],
            [210,490,31,1],
            [211,490,2,1],
            [212,490,2,1],
            [213,490,2,1],
            [214,490,2,1],
            [215,490,2,1],
            [216,490,31,1],
            [217,490,2,1],
            [218,490,2,1],
            [219,490,31,1],
            [220,490,2,1],
            [221,490,2,1],
            [222,490,31,1],
            [223,490,2,1],
            [224,490,2,1],
            [225,490,2,1],
            [226,490,31,1],
            [190,491,2,1],
            [191,491,2,1],
            [192,491,2,1],
            [193,491,31,1],
            [194,491,2,1],
            [195,491,2,1],
            [196,491,2,1],
            [197,491,2,1],
            [198,491,31,1],
            [199,491,2,1],
            [200,491,2,1],
            [201,491,2,1],
            [202,491,31,1],
            [203,491,2,1],
            [204,491,31,1],
            [205,491,31,1],
            [206,491,31,1],
            [207,491,31,1],
            [208,491,31,1],
            [209,491,2,1],
            [210,491,31,1],
            [211,491,2,1],
            [212,491,2,1],
            [213,491,2,1],
            [214,491,2,1],
            [215,491,2,1],
            [216,491,31,1],
            [217,491,2,1],
            [218,491,2,1],
            [219,491,2,1],
            [220,491,31,1],
            [221,491,2,1],
            [222,491,2,1],
            [223,491,31,1],
            [224,491,31,1],
            [225,491,31,1],
            [226,491,2,1],
        ];

        setTimeout(async () => {
            let newDiv = document.createElement('div');
            newDiv.innerHTML = "<h2>TagPro Script</h2>";
            document.body.prepend(newDiv);
            newDiv.style.position = "absolute";
            newDiv.style.backgroundColor = "red";
            newDiv.style.width = "10%";
            newDiv.style.height = "60%";
            newDiv.style.color = "white";
            newDiv.style["z-index"] = "9999";

            let now = new Date();
            let then = new Date(now.getTime());
            if (then.getUTCDate() === 4 && then.getUTCHours() < 12) then.setUTCHours(12, 43, 0, 0);
            if (then.getUTCMinutes() < 43) then.setUTCMinutes(43, 0, 0);
            let nextStartIn = then - now;

            if (nextStartIn > 0) {
                let sleepFor = Math.min(60e3, nextStartIn);

                while (sleepFor > 0) {
                    let ss = parseInt(nextStartIn / 1000);
                    const hh = parseInt(ss / 3600);
                    ss = ss % 3600;
                    const mm = parseInt(ss / 60);
                    ss = ss % 60;

                    newDiv.innerHTML = `<h2>Next starting in<br>${hh}:${mm}:${ss}<h2>`;

                    await sleep(1000);
                    sleepFor -= 1000;
                    nextStartIn -= 1000;
                }

                newDiv.innerHTML = `<h2>Reloading page<h2>`;
                top.location.href = "https://new.reddit.com/r/place/";
                return;
            }

            while(true) {
                let nextTileIn = document.querySelector("mona-lisa-embed")?.shadowRoot?.querySelector("mona-lisa-status-pill").__nextTileAvailableIn || 0;
                nextTileIn *= 1000;
                nextTileIn += 3000;
                nextTileIn += parseInt(Math.random() * 5000);

                while (nextTileIn > 0) {
                    newDiv.innerHTML = `<h2>Sleeping for ${nextTileIn/1000} seconds<h2>`;
                    await sleep(Math.min(nextTileIn, 1000));
                    nextTileIn = Math.max(0, nextTileIn - 1000);
                }

                let wrong = [];
                for (let i = 0; i < pixels.length; i++) {
                    let pixel = pixels[i];
                    let x = pixel[0];
                    let y = pixel[1];
                    let colorNumber = pixel[2];
                    let color = colors[colorNumber];
                    let weight = pixel[3] * 100;

                    if (weight === 100)
                        weight *= 10;

                    let currentColor = placeApi.getPixel(x, y);

                    if (currentColor !== color) {
                        wrong.push({ idx: i, weight });
                    }
                }

                if(wrong.length === 0) {
                    newDiv.innerHTML = "<h2>No pixels need changing. Rechecking every 5 seconds.</h2>";
                    await sleep(5000);
                } else {
                    let idx = getIdx(wrong);
                    let pixel = pixels[idx];
                    let x = pixel[0];
                    let y = pixel[1];
                    let colorNumber = pixel[2];
                    let color = colors[colorNumber];

                    newDiv.innerHTML = `<h2>${wrong.length} out of ${pixels.length} pixels need changing. Changing ${x},${y} to #${colorNumber}. The page will reload 60 seconds later.</h2>`;

                    placeApi.setPixel(x, y, color);

                    await sleep(60e3);
                    top.location.href = "https://new.reddit.com/r/place/";
                    return;
                }
            }
        }, 5000);
    }

    const colorMap = {
        '#6D001A': 0,
        '#BE0039': 1,
        '#FF4500': 2,
        '#FFA800': 3,
        '#FFD635': 4,
        '#FFF8B8': 5,
        '#00A368': 6,
        '#00CC78': 7,
        '#7EED56': 8,
        '#00756F': 9,
        '#009EAA': 10,
        '#00CCC0': 11,
        '#2450A4': 12,
        '#3690EA': 13,
        '#51E9F4': 14,
        '#493AC1': 15,
        '#6A5CFF': 16,
        '#94B3FF': 17,
        '#811E9F': 18,
        '#B44AC0': 19,
        '#E4ABFF': 20,
        '#DE107F': 21,
        '#FF3881': 22,
        '#FF99AA': 23,
        '#6D482F': 24,
        '#9C6926': 25,
        '#FFB470': 26,
        '#000000': 27,
        '#515252': 28,
        '#898D90': 29,
        '#D4D7D9': 30,
        '#FFFFFF': 31,
    };

    const isReadyInterval = setInterval(() => {
        const theCanvas = document
        .querySelector("mona-lisa-embed")
        ?.shadowRoot?.querySelector("mona-lisa-camera")
        ?.querySelector("mona-lisa-canvas")
        ?.shadowRoot?.querySelector("canvas");

        if (theCanvas && document.querySelector("mona-lisa-embed")?.shadowRoot?.querySelector("mona-lisa-overlay")?.shadowRoot.children.length === 0) {
            clearInterval(isReadyInterval);
            runScript(theCanvas);
        }
    }, 500);

    function getPlaceApi(theCanvas) {
        const context = theCanvas.getContext("2d");

        return {
            getPixel: (x, y) => {
                const data = context.getImageData(x, y, 1, 1).data;
                return rgbToHex(data[0], data[1], data[2]);
            },
            setPixel: async (x, y, color) => {
                theCanvas.dispatchEvent(createEvent("click-canvas", { x, y }));
                await sleep(1000);
                theCanvas.dispatchEvent(
                    createEvent("select-color", { color: colorMap[color] })
                );
                await sleep(1000);
                theCanvas.dispatchEvent(createEvent("confirm-pixel"));
            },
        };
    }

    function getIdx(items) {
        let sumOfWeights = items.reduce((prev, item) => prev + item.weight, 0);
        let random = Math.floor(Math.random() * (sumOfWeights + 1));

        let finder = function(item) {
            random -= item.weight;
            return random <= 0;
        };

        let item = items.find(finder);
        return item.idx;
    }

    function createEvent(e, t) {
        return new CustomEvent(e, {
            composed: !0,
            bubbles: !0,
            cancelable: !0,
            detail: t,
        });
    }

    function sleep(ms) {
        return new Promise((response) => setTimeout(response, ms));
    }

    function rgbToHex(r, g, b) {
        return `#${r.toString(16).padStart(2,'0')}${g.toString(16).padStart(2,'0')}${b.toString(16).padStart(2,'0')}`.toUpperCase();
    }

    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    }

    function GM_fetch(url, opt) {
        function blobTo(to, blob) {
            if (to == "arrayBuffer" && blob.arrayBuffer) return blob.arrayBuffer()
            return new Promise((resolve, reject) => {
                var fileReader = new FileReader()
                fileReader.onload = function (event) { if (to == "base64") resolve(event.target.result); else resolve(event.target.result) }
                if (to == "arrayBuffer") fileReader.readAsArrayBuffer(blob)
                else if (to == "base64") fileReader.readAsDataURL(blob) // "data:*/*;base64,......"
                else if (to == "text") fileReader.readAsText(blob, "utf-8")
                else reject("unknown to")
            })
        }
        return new Promise((resolve, reject) => {
            // https://www.tampermonkey.net/documentation.php?ext=dhdg#GM_xmlhttpRequest
            opt = opt || {}
            opt.url = url
            opt.data = opt.body
            opt.responseType = "blob"
            opt.onload = (resp) => {
                var blob = resp.response
                resp.blob = () => Promise.resolve(blob)
                resp.arrayBuffer = () => blobTo("arrayBuffer", blob)
                resp.text = () => blobTo("text", blob)
                resp.json = async () => JSON.parse(await blobTo("text", blob))
                resolve(resp)
            }
            opt.ontimeout = () => reject("fetch timeout")
            opt.onerror = () => reject("fetch error")
            opt.onabort = () => reject("fetch abort")
            GM_xmlhttpRequest(opt)
        })
    }
})();
