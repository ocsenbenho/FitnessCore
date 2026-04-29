---
name: React Vite Tailwind Best Practices
description: Core guidelines for writing React 19 components with Vite and Tailwind CSS v4.
---

# React, Vite, and Tailwind CSS Guidelines

When working on this project, adhere to the following best practices for React, Vite, and Tailwind CSS.

## 1. React 19 Best Practices
- **Functional Components**: Always use functional components and hooks (`useState`, `useEffect`, `useCallback`, `useMemo`).
- **Clean Code**: Keep components small, focused, and single-purpose. Extract complex logic into custom hooks.
- **State Management**: Prefer local state (`useState`) for UI-only state. If state needs to be shared deeply, consider Context API or simple state management before adding heavy libraries.
- **Props**: Destructure props in the function signature for readability.
- **Immutability**: Always treat state as immutable. Use spread operators or functional updates `setState(prev => ...)` when modifying arrays or objects.

## 2. Tailwind CSS v4 Conventions
- **Utility-First**: Leverage Tailwind's utility classes instead of writing custom CSS.
- **Responsive Design**: Always use Mobile-First responsive prefixes (`md:`, `lg:`, `xl:`).
- **Component Extraction**: Do not over-extract Tailwind classes into `@apply` unless absolutely necessary (e.g., highly reused elements like buttons). Prefer extracting React components instead.
- **Colors**: Use the project's semantic color palette (e.g., `emerald` for primary, `slate` for background/text, `red/amber/emerald` for alerts).
- **Animations**: Utilize Tailwind's built-in animations (`animate-pulse`, `transition-all`) for interactive elements. Add `hover:`, `focus:`, and `active:` states for better UX.

## 3. Vite Build Rules
- **Assets**: Place static assets in the `public/` folder if they are not referenced in code, and in `src/assets/` if they are imported into components.
- **Imports**: Use absolute imports if configured, or clean relative imports.
- **Environment Variables**: Use `import.meta.env.VITE_*` for environment variables. Do not use `process.env`.

## 4. Code Style
- **Formatting**: Use consistent indentation (2 or 4 spaces).
- **Naming Conventions**: 
  - PascalCase for Component files (`ExerciseCard.jsx`).
  - camelCase for functions, hooks, and variables (`handleDayChange`, `useExercise`).
- **Icons**: Use `lucide-react` consistently. Do not mix multiple icon libraries.
