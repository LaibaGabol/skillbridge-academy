# SkillBridge Academy — Demo Website

A complete marketing website with GA4 analytics and Brevo email CRM.

## Project Structure
```
skillbridge/
├── index.html
├── css/style.css
├── js/main.js
├── .github/workflows/deploy.yml
└── README.md
```

## Step 1 — Publish to GitHub Pages

### 1A. Create GitHub repo
1. Go to github.com → New Repository
2. Name: skillbridge-academy | Set to Public
3. Click Create repository

### 1B. Push files (run in your project folder)
```bash
git init
git add .
git commit -m "Initial commit: SkillBridge Academy"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/skillbridge-academy.git
git push -u origin main
```

### 1C. Enable GitHub Pages
1. Repo → Settings → Pages
2. Source: Deploy from branch → main → / (root)
3. Save → wait 2 min
4. Your URL: https://YOUR_USERNAME.github.io/skillbridge-academy

---

## Step 2 — Google Analytics 4

### 2A. Create Property
1. analytics.google.com → Start measuring
2. Account: SkillBridge Academy | Property: SkillBridge Website
3. Platform: Web → paste your GitHub Pages URL
4. Copy your Measurement ID: G-XXXXXXXXXX

### 2B. Add to site
In index.html, replace BOTH instances of G-XXXXXXXXXX with your real ID.

### 2C. What's tracked automatically
- cta_click (all buttons)
- course_click (course cards)
- generate_lead (form submit)
- scroll_depth (25/50/75/90%)
- time_on_page (on exit)

### 2D. Verify
GA4 → Reports → Realtime → open your site in another tab → you should appear ✅

---

## Step 3 — Brevo Free CRM + Email

### 3A. Sign up
brevo.com → free (300 emails/day)

### 3B. Create Contact List
Contacts → Lists → Create → Name: "SkillBridge Leads"

### 3C. Create Form
1. Contacts → Forms → Create a Form
2. Add: First Name, Email, Course Dropdown
3. Settings → List: SkillBridge Leads
4. Save & Publish → Share → copy Embed Code

### 3D. Embed in site
In index.html, delete the placeholder form and paste Brevo's embed code where the comment says "PASTE YOUR BREVO EMBED CODE HERE"

### 3E. Welcome Email Automation
1. Automations → Create workflow
2. Trigger: Contact added to list → SkillBridge Leads
3. Action: Send email (write your welcome + syllabus)
4. Activate ✅

---

## Final Checklist
- [ ] GitHub repo created and pushed
- [ ] GitHub Pages URL live
- [ ] GA4 Measurement ID added to index.html
- [ ] Seeing yourself in GA4 Realtime
- [ ] Brevo account + list created
- [ ] Brevo form embedded
- [ ] Welcome email automation active

Live URL: https://YOUR_USERNAME.github.io/skillbridge-academy
