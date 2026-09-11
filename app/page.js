export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white p-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-red-600 flex items-center gap-2">
          <span>▶</span> SkyTube Vercel
        </h1>
        <span className="bg-zinc-800 px-3 py-1 rounded-full text-sm">Ready</span>
      </div>
      <div className="text-center py-20">
        <p className="text-zinc-400 text-lg">Web SkyTube siap mengudara di Vercel!</p>
      </div>
    </main>
  );
}
