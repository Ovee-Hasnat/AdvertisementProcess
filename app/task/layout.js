export default function TaskLayout({ children }) {
  return (
    <div className="bg-black text-neutral-200">
      <h1 className="text-3xl font-semibold text-center underline">
        Task Management
      </h1>
      {children}
    </div>
  );
}
