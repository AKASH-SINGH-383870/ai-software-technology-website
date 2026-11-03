import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import StickyContactBar from "@/components/feature/StickyContactBar";
import AnimatedCursor from "@/components/feature/AnimatedCursor";
import Interactive3DBackground from "@/components/feature/Interactive3DBackground";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <Interactive3DBackground variant="global" />
        <AnimatedCursor />
        <Suspense fallback={<div className="min-h-screen bg-dark-500" />}>
          <AppRoutes />
        </Suspense>
        <StickyContactBar />
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
