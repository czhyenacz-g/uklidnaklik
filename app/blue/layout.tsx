export default function BlueLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-gray-900">
      {children}
    </div>
  );
}
