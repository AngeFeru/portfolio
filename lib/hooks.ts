
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";
import { inView } from "framer-motion";

export function useSectionInView(sectionName: SectionName, threshold= 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }

    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, hasAnimated]);

  return {
    ref,
    inView: hasAnimated || inView, // Return true if already animated or in view
  };
}

