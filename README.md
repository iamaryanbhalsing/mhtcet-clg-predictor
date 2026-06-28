# MHT-CET College Finder

![License](https://img.shields.io/badge/License-MIT-yellow.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-Ready-38BDF8?logo=tailwindcss)

**A modern, intelligent web application to help MHT-CET students find the best engineering colleges in Maharashtra based on their percentile, category, and branch preference.**

### Note: This Project is under development So Please Contribute and help me to fix Errors , So that the Peolple will get beniffited form ths....

---

## ✨ Features

- **Smart College Recommendations** — Real-time suggestions with **Safe**, **Moderate**, and **Ambitious** tags
- **"What If" Simulator** — Instantly see how your chances change with different percentiles
- **AI Admission Assistant** — Chat-powered guidance on cutoffs, admission strategy & FAQs
- **Personal Shortlist** — Save colleges and export beautiful PDF reports
- **Side-by-Side Comparison** — Compare up to 4 colleges with key metrics
- **CAP Round Ready** — Accurate cutoff data for all rounds
- **User Authentication** — Secure login/register with JWT
- **Fully Responsive** — Works perfectly on mobile, tablet & desktop

## 🛠 Tech Stack

- **Frontend**: Next.js 16 (App Router) + React + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL (Neon Serverless)
- **ORM**: Prisma
- **Authentication**: JWT + bcrypt
- **PDF Generation**: @react-pdf/renderer
- **AI Assistant**: Ready for integration (OpenAI / Grok / Claude)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL database (Neon recommended)

### 📁 Project Structure
Bash├── app/                    # Next.js App Router pages & layouts

├── components/             # Reusable UI components

│   ├── ui/                 # shadcn/ui components

│   ├── college/            # College-specific components

│   └── layout/             # Navigation, Footer, etc.

├── lib/                    # Utilities, validators & helpers

├── prisma/                 # Schema, migrations & seed

├── api/                    # API routes

├── hooks/                  # Custom React hooks

├── types/                  # TypeScript definitions

├── public/                 # Static assets

└── docs/                   # Additional documentation
🗄️ Database

15+ top engineering colleges with detailed information
Historical MHT-CET cutoff data (2022–2025)
Category-wise (General, SC, ST, OBC, EWS, etc.) cutoffs
Branch-wise (CSE, IT, AI&DS, Mechanical, etc.) data
Easily extensible for new rounds and colleges

### 🌐 Deployment
One-click Deploy on Vercel
<img src="https://vercel.com/button" alt="Deploy with Vercel">
Recommended: Use Neon Postgres + Vercel for seamless serverless deployment.

🤝 Contributing
Contributions are welcome! Whether it's:

Adding new colleges
Improving the AI assistant
Enhancing UI/UX
Adding new features


Fork the project
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

Made by Aryan Bhalsing for MHT-CET aspirants of Maharashtra ❤️
Star the repo if you found it useful! ⭐
Last updated: June 2026


### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/mht-cet-college-finder.git
cd mht-cet-college-finder

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env
