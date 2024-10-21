import React from 'react'

export default function Footer() {
    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
            <small className="mb-2 block text-xs">
                &copy; 2024 Angelo Ferulano.
            </small>
            <p className="text-xs">
                <span className="font-semibold">Acerca de este sitio web:</span> construido con React y Next.js (App Router y Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, alojado en Vercel.
            </p>
        </footer>
    );
}
