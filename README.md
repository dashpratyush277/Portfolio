# Portfolio Website

A modern, responsive portfolio website built with React featuring a beautiful black and orange theme with dynamic light/dark mode switching.

## Features

- 🎨 **Beautiful Design**: Modern UI with black and orange theme
- 🌓 **Dark/Light Mode**: Dynamic theme switching with smooth transitions
- 📱 **Responsive**: Fully responsive design for all devices
- ⚡ **Fast**: Optimized performance with React
- 🎯 **SEO Friendly**: Proper meta tags and semantic HTML
- 🔧 **Customizable**: Easy to customize content and styling

## Pages

- **Home**: Hero section, about, skills, and call-to-action
- **Education**: Academic background, certifications, and achievements
- **Experience**: Work history, freelance projects, and skills summary
- **Projects**: Project showcase with filtering and featured projects
- **Contact**: Contact form and information with availability status

## Technologies Used

- **React 18** - Frontend framework
- **React Router** - Navigation and routing
- **React Icons** - Beautiful icons
- **CSS3** - Custom styling with CSS variables
- **HTML5** - Semantic markup

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Customization

### Personal Information

Update the following files with your information:

1. **Home Page** (`src/pages/Home.js`):
   - Update name, title, and description
   - Modify skills and statistics
   - Update social media links

2. **Education Page** (`src/pages/Education.js`):
   - Add your educational background
   - Update certifications
   - Modify achievements and skills

3. **Experience Page** (`src/pages/Experience.js`):
   - Add your work experience
   - Update freelance projects
   - Modify skills summary

4. **Projects Page** (`src/pages/Projects.js`):
   - Add your projects with images and links
   - Update project descriptions and technologies
   - Modify project categories

5. **Contact Page** (`src/pages/Contact.js`):
   - Update contact information
   - Modify social media links
   - Update availability status

### Styling

The theme uses CSS variables for easy customization:

- **Light Theme Colors** (in `src/index.css`):
  - `--bg-primary`: Main background
  - `--bg-secondary`: Secondary background
  - `--text-primary`: Primary text color
  - `--text-secondary`: Secondary text color
  - `--accent-color`: Orange accent color
  - `--border-color`: Border colors

- **Dark Theme Colors**:
  - Same variables with dark theme values

### Images

Replace placeholder images with your own:
- Profile photo in the hero section
- Project screenshots in the projects page
- Any other images you want to add

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   └── Navbar.css
├── pages/
│   ├── Home.js            # Home page
│   ├── Home.css
│   ├── Education.js       # Education page
│   ├── Education.css
│   ├── Experience.js      # Experience page
│   ├── Experience.css
│   ├── Projects.js        # Projects page
│   ├── Projects.css
│   ├── Contact.js         # Contact page
│   └── Contact.css
├── App.js                 # Main app component
├── App.css
├── index.js              # Entry point
└── index.css             # Global styles
```

## Deployment

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Add homepage to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

2. Install gh-pages: `npm install --save-dev gh-pages`

3. Add scripts to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

4. Deploy: `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or contact me.

---

**Happy coding! 🚀** 