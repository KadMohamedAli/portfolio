import ClientLayout from "./components/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-2">Software Engineer</h2>
        <p className="mb-4">+213 696181641 | kaddour.mohamed.ali.31@gmail.com | Boufarik, Algeria</p>
        <p className="max-w-2xl">
          I am a Software Engineer with experience working on professional and personal projects...
        </p>
      </div>
    </ClientLayout>
  );
}
