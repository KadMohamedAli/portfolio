import ClientLayout from "../components/ClientLayout";

export default function About() {
  return (
    <ClientLayout>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">About & Contact</h2>
        <p><strong>Full Name:</strong> KADDOUR Mohamed Ali</p>
        <p><strong>Email:</strong> kaddour.mohamed.ali.31@gmail.com</p>
        <p><strong>Phone:</strong> +213 696181641</p>
        <p><strong>Location:</strong> Boufarik, Algeria</p>
        <p className="mt-4"><strong>LinkedIn:</strong> <a href="#" className="text-blue-600 underline">Your LinkedIn URL</a></p>
        <p><strong>GitHub:</strong> <a href="#" className="text-blue-600 underline">Your GitHub URL</a></p>
      </div>
    </ClientLayout>
  );
}
