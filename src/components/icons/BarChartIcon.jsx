const BarChartIcon = ({ className }) => {
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
        d="M32 56V40"
        stroke="#3DAC5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 56V24"
        stroke="#3DAC5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 56V32"
        stroke="#3DAC5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BarChartIcon;
