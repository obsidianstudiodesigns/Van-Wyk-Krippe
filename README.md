# Van Wyk Krippe – Livestock Solutions

Durable, reliable feeding and water troughs built for South African farms. Practical agricultural solutions designed to last.

## Business Details
- **Business Name:** Van Wyk Krippe (Livestock Solutions)
- **Address:** No. 32 9de Weg, Industria, Kroonstad, Free State, 9499, South Africa
- **Phone (Frans):** 078 364 4383
- **Phone (Steven):** 081 088 3945
- **Email:** admin@vanwykkrippe.co.za

---

## Pushing to GitHub & Automated GitHub Pages Deployment

This repository is pre-configured with **GitHub Actions** (`.github/workflows/deploy.yml`) and relative Vite paths (`base: './'`) to automatically build and host the website live on GitHub Pages (e.g. at `https://obsidianstudiodesigns.github.io/vanwykkrippe/`).

### Step 1: Initialize Git and Commit
```bash
git init
git add .
git commit -m "Initial release: Van Wyk Krippe website"
```

### Step 2: Add Remote and Push
```bash
git branch -M main
git remote add origin https://github.com/obsidianstudiodesigns/vanwykkrippe.git
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository: `https://github.com/obsidianstudiodesigns/vanwykkrippe`
2. Click **Settings** > **Pages** (in the left sidebar)
3. Under **Build and deployment** > **Source**, select **GitHub Actions**
4. The workflow in `.github/workflows/deploy.yml` will automatically run, build, and publish the website live to:
   **https://obsidianstudiodesigns.github.io/vanwykkrippe/**

---

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
```
The compiled static output will be in `./dist/`.
