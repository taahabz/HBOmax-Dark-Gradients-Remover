# Chrome Web Store Listing — HBOmax Dark Gradients Remover

> Last Updated: 2026-08-07

## Store Listing Fields

**Extension Name**  
`HBOmax Dark Gradients Remover`  
*(Must match manifest.json "name". Max 75 characters.)*

**Short Description**  
`Removes dark gradients, protection overlays, and loader backdrops from Max and HBO Max player controls.`  
*(Max 132 characters. Shown in search results and tiles.)*

**Detailed Description**  
```
Enjoy a completely clean, overlay-free cinematic experience on Max and HBO Max.

HBOmax Dark Gradients Remover removes the dark top and bottom gradient fades that overlay the screen when playback controls are active, as well as the dark background backdrop that dims the screen during buffering.

How to use it:
1. Click the extension icon in your toolbar to open the settings panel.
2. Toggle the switch to enable or disable the gradient remover.
3. The active player tab will reload automatically to apply your settings.
4. Enjoy pure, overlay-free playback.

Privacy & Permissions:
This extension operates entirely locally. It does not track, collect, or transmit any user data. The storage permission is used to save your toggle state, and the tabs permission is used only to reload the active tab when you toggle the remover.
```  
*(Max 16,000 characters. CWS strips markdown, so plain formatting is used.)*

**Category**  
`Productivity`

**Single Purpose**  
`Removes dark gradient overlays and buffering loader backdrops from Max and HBO Max video players.`

**Primary Language**  
`English`

---

## Graphics & Assets

| Asset | Dimensions | Status | Filename / Description |
|-------|-----------|--------|------------------------|
| Store Icon | 128×128 PNG | ✅ Ready | `icons/icon-128.png` |
| Screenshot 1 | 1280×800 or 640×400 | ⬜ Pending | Video player showing movie playback with control bar visible, showing NO dark gradients at the top and bottom. |
| Screenshot 2 | 1280×800 or 640×400 | ⬜ Pending | Close-up of the clean, modern extension popup toggle menu open in the toolbar. |

---

## Permissions Justification

The review team reads these during approval. Be specific about why the permissions are needed. Mismatches or vague explanations will result in rejection.

| Permission | Type | Justification |
|------------|------|---------------|
| `storage` | permissions | Required to save user toggle state (enabled/disabled) locally on the device. |
| `tabs` | permissions | Required to refresh/reload the active streaming tab when the user toggles the settings, so changes apply immediately. |
| `*://*.max.com/*` | host_permissions | Required to inject the stylesheet and toggle styles on the Max streaming video player pages. |
| `*://*.hbomax.com/*` | host_permissions | Required to inject the stylesheet and toggle styles on the HBO Max streaming video player pages. |

---

## Privacy & Data Use

### Data Collection
**Does the extension collect user data?** No

### Data Use Certification
- [x] Data is NOT sold to third parties
- [x] Data is NOT used for purposes unrelated to the extension's core functionality
- [x] Data is NOT used for creditworthiness or lending purposes

---

## Distribution

- **Visibility**: Public (recommended) or Unlisted (only accessible via link)
- **Regions**: All regions
- **Pricing**: Free

---

## Developer Info

- **Publisher Name**: [Your Name / Company]
- **Contact Email**: [Your developer contact email]
- **Support URL / Email**: [Your GitHub issues link or email]
- **Homepage URL**: [Your GitHub repository URL or website]

---

## Version History

| Version | Date | Changes | Status |
|---------|------|---------|--------|
| 1.0.0 | 2026-08-07 | Initial release. Added player control gradients hiding, buffering loader backdrop hiding, popup toggle switch, and automatic tab reload logic. | Draft |
