"use client";
import { useState, useEffect } from "react";

export default function KitModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const script = document.createElement("script");
      script.src = "https://backendbuilder.kit.com/a881ca9970/index.js";
      script.async = true;
      script.setAttribute("data-uid", "a881ca9970");
      document.getElementById("kit-container").appendChild(script);

      return () => {
        document.getElementById("kit-container").innerHTML = "";
      };
    }
  }, [open]);

  return (
    <div>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        View My Tools
      </button>

      {/* Modal overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] md:w-[600px] relative">
            {/* Close button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-600"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-4">My Tech Stack & Tools</h2>

            {/* Script will inject content here */}
            <div id="kit-container" />
          </div>
        </div>
      )}
    </div>
  );
}
