export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col justify-center items-center text-center p-6">
      <h1 className="text-4xl md:text-6xl text-red-400 mb-4 glitch">404: PAGE NOT LOCATED</h1>
      <p className="text-lg md:text-xl max-w-xl mb-6">
        Mission Failed. This page self-destructed.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="mt-4 px-6 py-3 border border-red-400 rounded hover:bg-green-600 hover:text-red-600 transition"
      >
        Retry Mission
      </button>
    </div>
  );
}
