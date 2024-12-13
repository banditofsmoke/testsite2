export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Brand Showcase</h1>
      <p className="text-xl mb-8">This website demonstrates our services with customizable feature flags.</p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
        <p className="mb-4">Each page in this showcase can be toggled on or off using feature flags. This allows you to customize the content for each client or use case.</p>
        <p>Explore the pages to see our services in action!</p>
      </div>
    </div>
  );
}

