export function Footer() {
  return (
    <footer className="bg-white border-t border-surface py-8 px-4">
      <div className="max-w-5xl mx-auto text-center text-muted text-sm">
        © {new Date().getFullYear()} HomeKey. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
