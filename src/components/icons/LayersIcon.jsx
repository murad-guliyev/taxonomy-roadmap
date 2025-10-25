const LayersIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="80" height="80" rx="16" fill="#DFF5E8" />
      <path
        d="M40 29.5L24 37L40 44.5L56 37L40 29.5Z"
        stroke="#3DAC5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 44L40 51.5L56 44"
        stroke="#3DAC5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 51L40 58.5L56 51"
        stroke="#3DAC5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LayersIcon;
