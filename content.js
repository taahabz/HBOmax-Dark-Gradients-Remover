const STYLE_ID = "max-gradient-remover-styles";
const cssRules = `
  div[class*="TopGradient-Fuse-Web-Play"],
  div[class*="BottomGradient-Fuse-Web-Play"],
  div[class*="StyledProtection-Fuse-Web-Play"] {
    display: none !important;
  }
`;

/**
 * Applies or removes the style element based on the enabled state.
 * @param {boolean} enabled
 */
function applyStyles(enabled) {
  let styleEl = document.getElementById(STYLE_ID);
  if (enabled) {
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent = cssRules;
      // Append to documentElement if head is not yet parsed (at document_start)
      (document.head || document.documentElement).appendChild(styleEl);
    }
  } else {
    if (styleEl) {
      styleEl.remove();
    }
  }
}

// Load initial toggle state (defaults to true)
chrome.storage.local.get({ enabled: true }, (result) => {
  applyStyles(result.enabled);
});

// Listen for updates from the popup toggle
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.enabled) {
    applyStyles(changes.enabled.newValue);
  }
});
