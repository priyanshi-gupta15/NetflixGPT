// src/components/BackgroundLayout.jsx
const BackgroundLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_large.jpg"
        alt="Netflix background"
        className="absolute inset-0 w-full h-full object-cover object-[center_top] sm:object-center -z-10 opacity-70"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 -z-10"></div>

      {/* Page Content */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">{children}</div>
    </div>
  );
};

export default BackgroundLayout;
