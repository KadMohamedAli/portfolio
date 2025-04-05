import ClientLayout from "../components/ClientLayout";

export default function Projects() {
  return (
    <ClientLayout>
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>3D Video Game</strong>: Built with Unreal Engine 5 and Blender.</li>
          <li><strong>Real-Time Auction Web App</strong>: Spring Boot & WebSocket-powered.</li>
          <li><strong>Mobile Meal Management App</strong>: Android + Firebase.</li>
        </ul>
      </div>
    </ClientLayout>
  );
}
