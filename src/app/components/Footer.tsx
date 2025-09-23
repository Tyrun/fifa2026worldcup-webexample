import React from "react";

/**
 * Footer with purple background + three columns (Use cases / Explore / Resources)
 * Text forced to white.
 */
export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#5005F2", color: "#FFFFFF !important" }}>
      <div className="container py-10">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-black/80 text-white grid place-items-center text-xs font-bold">
            g
          </div>
          <div className="flex items-center gap-4 text-sm">
            {/* social icons as simple characters to avoid extra deps */}
            <span>𝕏</span>
            <span>📷</span>
            <span>▶️</span>
            <span>in</span>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h4 className="mb-3 font-semibold">Use cases</h4>
            <ul className="space-y-2 text-sm">
              <li>UI design</li>
              <li>UX design</li>
              <li>Wireframing</li>
              <li>Diagramming</li>
              <li>Brainstorming</li>
              <li>Online whiteboard</li>
              <li>Team collaboration</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>Design</li>
              <li>Prototyping</li>
              <li>Development features</li>
              <li>Design systems</li>
              <li>Collaboration features</li>
              <li>Design process</li>
              <li>FigJam</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>Blog</li>
              <li>Best practices</li>
              <li>Colors</li>
              <li>Color wheel</li>
              <li>Support</li>
              <li>Developers</li>
              <li>Resource library</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
