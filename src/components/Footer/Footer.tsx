export default function Footer() {
  return (
    <footer className="w-full my-5 flex justify-start flex-col sm:flex-row sm:justify-between">
      <p>
        Built with{" "}
        <a className="text-secondary" href="https://nextjs.org/">
          Next.js
        </a>
        ,{" "}
        <a className="text-secondary" href="https://mdxjs.com/">
          MDX
        </a>{" "}
        and{" "}
        <a className="text-secondary" href="https://tailwindcss.com/">
          Tailwind
        </a>
      </p>
      <p>
        <a className="text-secondary" href="https://filipivanovic.netlify.app/">
          Portfolio
        </a>{" "}
        <a className="text-secondary" href="https://github.com/alkanoidev">
          GitHub
        </a>
      </p>
    </footer>
  );
}
