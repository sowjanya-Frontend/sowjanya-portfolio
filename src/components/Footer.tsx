export function Footer() {
  const year = new Date().getFullYear();

  return (
   <footer className="portfolio-footer text-center py-3">
      <div className="container text-center">
        <p className="mb-1">&copy; {year} Sowjanya Kandra</p>
        <p className="mb-0">
          <a href="https://www.linkedin.com/in/sowjanya-kandra-3aab3490" target="_blank" rel="noopener noreferrer" className="text-light me-3">
            LinkedIn
          </a>
          <a href="https://github.com/sowjanya-Frontend" target="_blank" rel="noopener noreferrer" className="text-light">
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}