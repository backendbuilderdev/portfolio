"use client";
import { useEffect, useState } from "react";

export default function KitModal() {
  const [open, setOpen] = useState(true); // start open by default

  useEffect(() => {
    if (!open) return;

    // delay script injection until DOM has #kit-container
    const timer = setTimeout(() => {
      const container = document.getElementById("kit-container");
      if (container && !container.querySelector("script")) {
        const script = document.createElement("script");
        script.src = "https://backendbuilder.kit.com/a881ca9970/index.js";
        script.async = true;
        script.setAttribute("data-uid", "a881ca9970");
        container.appendChild(script);
      }
    }, 100); // tiny delay so modal renders first

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] md:w-[600px] relative">
            {/* Close button */}
            {/* <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600"
            >
              ✕
            </button> */}

            {/* <h2 className="text-xl font-semibold mb-4">My Tech Stack & Tools</h2> */}

            {/* Script injects here */}
            <div id="kit-container" />
          </div>
        </div>
      )}
    </>
  );
}
