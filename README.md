# 🚀 Petra Michael - Portfolio

A modern, space-themed portfolio website built with React.js showcasing skills, experience, projects, publications, and certifications.

![Portfolio Preview](https://github.com/user-attachments/assets/17ecf17c-c8d6-407b-a2f3-7eb46646b6f2)

## ✨ Features

- **Space Theme** - Interactive animated solar system background with orbiting planets and asteroid belt
- **Glassmorphism Design** - Modern glass-effect UI components with backdrop blur
- **Responsive Layout** - Mobile-first design that works on all devices
- **Smooth Animations** - Framer Motion animations for engaging user experience
- **Interactive Timeline** - Visual timeline for experience and certifications
- **D3.js Charts** - Live data visualization for project statistics
- **Dark Mode** - Space-optimized dark theme

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: D3.js
- **Timeline**: react-vertical-timeline-component
- **Icons**: react-icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/aimatochysia/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## 🚀 Deployment

```bash
# Build for production
npm run build
```

The build output will be in the `build` folder, ready for deployment to GitHub Pages, Vercel, Netlify, or any static hosting service.

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── app_icons/        # Skill icons
│   ├── certification/    # Certificate images
│   ├── CV/               # Resume PDF
│   ├── experiences_icons/ # Company logos
│   ├── images/           # Profile and misc images
│   ├── logos/            # Site logos
│   └── publications_preview/ # Publication thumbnails
├── src/
│   ├── components/
│   │   ├── BG.js         # Animated space background
│   │   ├── Certification.js
│   │   ├── Contact.js
│   │   ├── Experience.js
│   │   ├── GitHubProjects.js
│   │   ├── Hobbies.js
│   │   ├── Intro.js
│   │   ├── Publications.js
│   │   ├── Skills.js
│   │   └── TableofContents.js
│   ├── App.js
│   ├── App.css
│   └── index.css
└── tailwind.config.js
```

## 🎨 Customization

### Adding New Skills
Edit `src/components/Skills.js` and add new entries to the `skills` array:
```javascript
{
  name: 'Skill Name',
  image: process.env.PUBLIC_URL + '/app_icons/skill-icon.png',
  color: '#hexcolor'
}
```

### Adding Experience
Edit `src/components/Experience.js` and add entries to `experienceGroups`.

### Adding Projects
Edit `src/components/GitHubProjects.js` and add entries to `githubProjects`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

- **Email**: petra.michael@outlook.com
- **LinkedIn**: [Petra Michael](https://www.linkedin.com/in/aimatochysia/)
- **GitHub**: [@aimatochysia](https://github.com/aimatochysia)
