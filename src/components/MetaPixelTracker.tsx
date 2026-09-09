import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";

import { campaign } from "@/config/campaign";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixelTracker() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.fbq || !campaign.metaPixelId) return;

    // O PageView inicial já é disparado pelo script base no head.
    // Aqui registramos apenas as navegações SPA subsequentes.
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    window.fbq("track", "PageView");
  }, [pathname]);

  return null;
}
