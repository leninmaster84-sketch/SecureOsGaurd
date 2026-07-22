# Secure OS Guard — Official Website

Final-year project landing page for **Secure OS Guard**, a Windows desktop
security application (password protection, unauthorized-access monitoring,
security alerts, startup protection).

## Run locally
```
npm install
npm run dev
```
Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production
```
npm run build
```
Output goes to `dist/`.

## Update the download link
Edit `src/config.js`:
```js
export const DOWNLOAD_URL = "https://.../SecureOSGuard_Installer.exe";
export const GITHUB_URL = "https://github.com/leninmaster84-sketch/SecureOsGaurd";
```
Every download button on the site reads from this one file.
