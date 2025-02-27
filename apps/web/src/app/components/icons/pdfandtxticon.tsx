// icons/file.tsx
import React from 'react';

export const PdfIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm8 7V3.414L18.586 8H14a2 2 0 0 1-2-2zm-4 8h-1.5v2H8v-6h2.5a1.5 1.5 0 0 1 0 3zM9.5 14h1a.5.5 0 0 0 0-1h-1v1zm4 3h-1.5v-6H14a1.5 1.5 0 0 1 0 3h-1v3zm0-4h1a.5.5 0 0 0 0-1h-1v1zm4.5 4h-2V11h2a1.5 1.5 0 1 1 0 3h-1v3h1a.5.5 0 0 0 0-1z"
    />
  </svg>
);

export const TxtIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm3 9v1.5H7V15h2v1.5h1.5V15H13v-1.5h-2.5V11H9zm8 0h-5v1.5h1.5V15H12v1.5h5V15h-1.5v-3H17V11z"
    />
  </svg>
);
