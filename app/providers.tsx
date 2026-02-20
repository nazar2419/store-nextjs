'use client';

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from './theme-provider';
import { Toaster } from "@/components/ui/sonner"

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <Toaster/> 
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default Providers;