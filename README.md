# Personal Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features beautiful animations and a component-based architecture.

## Features

- 🎨 Modern, dark-themed design with gradient accents
- ✨ Smooth animations powered by Framer Motion
- 📱 Fully responsive design
- 🎯 Component-based architecture
- 🚀 Fast and optimized with Vite
- 💫 Interactive hover effects and transitions
- 📧 Functional contact form with email integration

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up EmailJS for contact form (optional but recommended):
   - Sign up for a free account at [EmailJS](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Get your Public Key from Account > API Keys
   - Create a `.env` file in the root directory:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id_here
     VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
     VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
personal-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Clients.jsx     # Client logos section
│   │   ├── About.jsx       # About me section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Services.jsx    # Services section
│   │   └── Footer.jsx      # Footer with CTA
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

- Update personal information in component files
- Modify colors in `tailwind.config.js`
- Adjust animations in component files
- Replace placeholder images with your own

## License

MIT

