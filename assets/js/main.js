const pageUrl = new URL(window.location.href);

// Keep the directory URL on static hosts that serve the entry file directly.
if (/^https?:$/.test(pageUrl.protocol) && /\/index\.html$/i.test(pageUrl.pathname)) {
    pageUrl.pathname = pageUrl.pathname.replace(/index\.html$/i, "");
    window.history.replaceState(window.history.state, "", pageUrl);
}
