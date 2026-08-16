# Saloni Rana - Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

## 🌟 Overview

A modern, responsive, and interactive portfolio website built with React.js and Tailwind CSS. This portfolio showcases my skills, projects, certifications, and professional experience with a stunning neon purple theme and smooth animations.

## ✨ Features

### 🎨 Design & UI
- **Neon Purple Theme**: Vibrant violet-purple-fuchsia gradient color scheme
- **Glass Morphism**: Modern glass-like UI elements with backdrop blur
- **Dark Mode Support**: Seamless light/dark theme toggle
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion powered transitions and interactions
- **Interactive Elements**: Hover effects, glow animations, and micro-interactions

### 📱 Sections
- **Hero Section**: Introduction with animated profile and floating cards
- **About Me**: Personal background and key highlights
- **Education**: Academic journey with timeline cards
- **Skills**: Categorized technical skills with technology icons
- **Certifications**: Filterable certification gallery with modal view
- **Projects**: Project showcase with hover overlays and detail modals
- **Experience**: Professional experience with detailed modal views
- **Achievements**: Awards and recognitions with documentation
- **Contact**: Contact form with email integration and social links

### 🔧 Technical Features
- **Filter Functionality**: Category-based filtering for certifications
- **Image Gallery**: Project and certificate image galleries with thumbnails
- **Modal System**: Detailed views for projects, certificates, and experiences
- **Scroll Animations**: Elements animate on scroll using Framer Motion
- **Active Navigation**: Dynamic highlighting of active sections
- **Resume Download**: One-click resume download functionality

## 🛠️ Tech Stack

### Frontend
- **React.js** (v18+) - UI Framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Icons** - Additional icon sets

### Development Tools
- **Vite** - Build tool and development server
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── certificates/
│   │   ├── experience/
│   │   ├── profile/
│   │   └── projects/
│   └── resume.pdf
├── src/
│   ├── components/
│   │   ├── modals/
│   │   │   ├── AchievementModal.jsx
│   │   │   ├── CertificateModal.jsx
│   │   │   ├── ExperienceModal.jsx
│   │   │   └── ProjectModal.jsx
│   │   ├── ui/
│   │   │   ├── NeonButton.jsx
│   │   │   ├── ResumeButton.jsx
│   │   │   └── SectionTitle.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── achievements.js
│   │   ├── certifications.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Theme Colors
The theme uses a violet-purple-fuchsia gradient. To customize, update the gradient classes in components:

```tailwind
bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600
```

### Icons
- **Lucide React**: `https://lucide.dev/icons/`
- **React Icons**: `https://react-icons.github.io/react-icons/`

### Fonts
The project uses system fonts by default. To add custom fonts:
1. Add Google Fonts link in `index.html`
2. Update `tailwind.config.js` font family

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📧 Contact

Saloni Rana - [salonics0812@gmail.com](mailto:salonics0812@gmail.com)

Project Link: [https://github.com/saloni-081205/portfolio-website](https://github.com/saloni-081205/portfolio-website)

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

---

<div align="center">
  Made with ❤️ by Saloni Rana
</div>
