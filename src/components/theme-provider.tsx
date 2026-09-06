import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

/**
 * Applies the dark-only Kinetic Obsidian design system defined in docs/DESIGN.md.
 * The site intentionally has no light-mode fallback: the theme is dark-first.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableColorScheme
      enableSystem={false}
      forcedTheme="dark"
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
