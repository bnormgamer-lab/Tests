/*! coi-serviceworker v0.1.7 - Guido Zuidhof and contributors, licensed under MIT */
/*
 * Equivalent implementation of coi-serviceworker.
 * Injects Cross-Origin-Opener-Policy: same-origin and
 * Cross-Origin-Embedder-Policy: require-corp headers via a Service Worker,
 * enabling SharedArrayBuffer on static hosting platforms (e.g., GitHub Pages)
 * that do not support custom HTTP headers.
 */
if (typeof window === 'undefined') {
    // Service Worker context
    self.addEventListener("install", () => self.skipWaiting());
    self.addEventListener("activate", (event) => event.waitUntil(self.clients.claim()));
    self.addEventListener("message", (ev) => {
        if (ev.data && ev.data.type === "deregister") {
            self.registration.unregister().then(() => {
                ev.source.postMessage({ type: "deregistered" });
            });
        }
    });
    self.addEventListener("fetch", function (event) {
        if (event.request.cache === "only-if-cached" && event.request.mode !== "same-origin") {
            return;
        }
        event.respondWith(
            fetch(event.request).then(function (response) {
                if (response.status === 0) {
                    return response;
                }
                const newHeaders = new Headers(response.headers);
                newHeaders.set("Cross-Origin-Embedder-Policy", "require-corp");
                newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
                return new Response(response.body, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: newHeaders,
                });
            }).catch((e) => console.error(e))
        );
    });
} else {
    // Window context — register the Service Worker and reload if needed
    (async function () {
        if (window.crossOriginIsolated !== false) return;
        const registration = await navigator.serviceWorker.register(window.document.currentScript.src).catch((e) => {
            console.error("COOP/COEP Service Worker failed to register:", e);
        });
        if (registration) {
            // Wait for the Service Worker to be ready, then reload
            if (registration.active && !navigator.serviceWorker.controller) {
                window.location.reload();
            } else if (registration.installing || registration.waiting) {
                const sw = registration.installing || registration.waiting;
                sw.addEventListener("statechange", function () {
                    if (sw.state === "activated") {
                        window.location.reload();
                    }
                });
            }
        }
    })();
}
