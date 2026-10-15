# Sainath Punchbhai — Robotics & Engineering Portfolio (v2)

A responsive, animated static website for GitHub Pages. It uses plain HTML, CSS and JavaScript, so there is no build step, npm installation or command line required.

## Version 3 visual direction
- Midnight blue/black base with controlled lime, yellow, red and blue accents, plus white text and vectors
- More restrained typography: Manrope for headings/body and DM Mono for technical labels
- Reduced secondary copy and hidden project bullet lists to make visuals and project titles lead
- Added layered lighting, floating vector visuals and gentle 3D-style perspective motion

## What's included
- Tagline: “Turning Ideas into Reality” / “via Passion and Innovation”
- Animated robotic-arm hero visual
- Six project case studies based on the current portfolio and supplied resume
- Clickable skills/domain selector
- Scroll-driven engineering pipeline visual that adapts to desktop and mobile
- Experience, competition achievements, and contact section
- Responsive mobile navigation, reduced-motion support and scroll progress
- Links back to original Google Sites project pages for the arm, hexapod and wristwatch

## Upload to GitHub Pages
1. Download and extract this ZIP.
2. Open your `robotics-portfolio` GitHub repository.
3. Select Add file → Upload files.
4. Upload/drag the **contents** of this folder into the repository root, overwriting the previous `index.html`, `styles.css`, and `script.js`. Keep the `assets` folder.
5. Commit changes to `main`.
6. GitHub Pages should automatically redeploy. Open Settings → Pages and click Visit site after the deployment completes.

## Personalize contact details (you said you want to do these yourself)
Open `index.html` in GitHub and use Find (Ctrl+F) to locate:
- `YOUR_EMAIL_HERE` — replace all instances with your email, e.g. `name@example.com`. Keep `mailto:` before it in the link.
- `YOUR_LINKEDIN_URL` — replace with the full URL to your LinkedIn profile.
- `YOUR_GITHUB_URL` — replace with your profile URL, e.g. `https://github.com/yourusername`.
- `YOUR_SOCIAL_URL` — replace with an optional social/profile URL, or remove that row if you don't want it.
- `assets/resume.pdf` — your supplied resume PDF is already included in this package, so the Resume link will work after upload.

Do not paste contact values into the visible text only: update the `href` and the link label in the same row. The email appears twice; replace both `YOUR_EMAIL_HERE` occurrences.

## Accuracy / portfolio notes
- Project content is based on the existing Google Sites portfolio and the provided resume. The current portfolio describes the arm's MoveIt 2 and Gazebo work, the hexapod design/prototyping, and the ESP32 productivity wristwatch.
- The UAV section describes your AeroBMSCE team contribution rather than claiming the entire UAV was built solo.
- Achievements shown: SAE India ADDC 2026 Unique Design Category winner; SAE India Aerothon 2025 runner-up; e-Yantra Robotics Competition 2025 Stage 2 (Hardware); PhaseShift 2024 hardware hackathon Top 5.
- Schematic project illustrations are concept visuals, not photographs of your actual hardware. Replace/add authentic CAD renders, prototype photos, test results and demos for a stronger final portfolio.
- The site's domain/skill claims are based on the supplied resume and current Google Sites content. Adjust anything you don't want to claim.
- Google Fonts are loaded from an external CDN; if unavailable, system font fallbacks are used.
- No analytics, third-party JS libraries, backend or paid service is required.
