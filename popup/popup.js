document.addEventListener("DOMContentLoaded", async () => {
  const toggleInput = document.getElementById("toggle-remover");
  const statusDot = document.querySelector(".status-dot");
  const statusText = document.getElementById("status-text");

  /**
   * Updates the UI elements based on current status.
   * @param {boolean} enabled
   */
  function updateUI(enabled) {
    if (enabled) {
      statusDot.className = "status-dot active";
      statusText.className = "status-text active";
      statusText.textContent = "Active";
      toggleInput.checked = true;
    } else {
      statusDot.className = "status-dot inactive";
      statusText.className = "status-text inactive";
      statusText.textContent = "Inactive";
      toggleInput.checked = false;
    }
  }

  try {
    // Load setting (defaults to true if not set)
    const result = await chrome.storage.local.get({ enabled: true });
    updateUI(result.enabled);
  } catch (error) {
    console.error("Failed to load settings:", error);
  }

  // Listen to user changes
  toggleInput.addEventListener("change", async () => {
    const isEnabled = toggleInput.checked;
    try {
      await chrome.storage.local.set({ enabled: isEnabled });
      updateUI(isEnabled);

      // Query active tab and reload it if it matches Max or HBO Max domains
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (tab && tab.url && (tab.url.includes("max.com") || tab.url.includes("hbomax.com"))) {
        await chrome.tabs.reload(tab.id);
      }
    } catch (error) {
      console.error("Failed to save settings or reload active tab:", error);
    }
  });
});
