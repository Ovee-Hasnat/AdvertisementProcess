export default function TaskLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-b from-gray-900 to-gray-600 h-screen text-pink-300">
          <h1 className="text-3xl font-semibold text-center underline">
            Task Management
          </h1>
          {children}
        </div>
      </body>
    </html>
  );
}
