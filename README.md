# Recipe Book Application

A modern React application for discovering and exploring recipes using the Spoonacular API. Built with React, TypeScript, and Tailwind CSS.

![Recipe Book App](https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=1200&h=400)

## Features

- 🔍 Search recipes by name or ingredients
- 📖 View detailed recipe information including ingredients and instructions
- ⚡ Fast and responsive user interface
- 🎨 Modern and beautiful design using Tailwind CSS
- 📱 Mobile-friendly layout
- ⚠️ Comprehensive error handling

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd recipe-book-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Spoonacular API key:
```env
VITE_SPOONACULAR_API_KEY=your_api_key_here
```

To get an API key:
1. Sign up at [Spoonacular's Food API](https://spoonacular.com/food-api)
2. Navigate to your dashboard
3. Copy your API key

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
recipe-book-app/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── services/       # API services
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── public/             # Static assets
└── ...config files
```

## Technology Stack

- **React** - Frontend library
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Vite** - Build tool and development server
- **Lucide React** - Icon library

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The application integrates with the Spoonacular API to fetch recipe data. Key endpoints used:

- `/recipes/complexSearch` - Search recipes with filters
- `/recipes/{id}/information` - Get detailed recipe information

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Spoonacular API](https://spoonacular.com/food-api) for providing the recipe data
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide React](https://lucide.dev) for the beautiful icons
