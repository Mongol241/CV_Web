# Windows XP Style Personal Portfolio 🪟

A nostalgic, interactive personal portfolio website themed after the classic Windows XP operating system. Built with pure HTML, CSS, and Vanilla JavaScript, this project brings back the retro desktop experience while showcasing modern development skills, education, and professional experience.

## ✨ Features

* **Retro UI/UX:** Accurately recreates the Windows XP desktop environment, including desktop icons, the classic blue taskbar, window borders, and the iconic Start button.
* **Dynamic GitHub Integration:** Automatically fetches and displays public repositories from GitHub using the GitHub REST API.
* **Smart Fallback System:** If the GitHub API fails or returns fewer than 6 repositories, the script seamlessly falls back to a local `projects.json` file to ensure the portfolio always looks populated.
* **Live Clock:** A fully functional, real-time taskbar clock.
* **Responsive Design:** Adapts gracefully to mobile devices by hiding desktop icons and adjusting the window layout for smaller screens.
* **Multi-Page Structure:**
  * `profile.html` - Personal profile and overview.
  * `portfolio.html` - Dynamic grid of GitHub repositories.
  * `experience.html` - Professional work history.
  * `education.html` - Academic background and certifications.

## 🛠️ Technologies Used

* **HTML5:** Semantic structuring of the desktop and window elements.
* **CSS3:** Custom styling to mimic the Windows XP "Luna" visual theme, including linear gradients, custom borders, and flexbox/grid layouts.
* **JavaScript (Vanilla):** DOM manipulation, real-time clock logic, and asynchronous data fetching (Fetch API).

## 📂 Project Structure

```text
├── index.html          # Main desktop view
├── profile.html        # Profile window
├── portfolio.html      # GitHub projects window
├── experience.html     # Work experience window
├── education.html      # Education & courses window
├── style.css           # Windows XP theme styling
├── script.js           # Clock logic and GitHub API fetch
├── projects.json       # Fallback data for portfolio items
└── assets/             # Images (bliss.png, profil.png, educatie.png, etc.)
