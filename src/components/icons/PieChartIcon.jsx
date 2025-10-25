const PieChartIcon = ({ className }) => {
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
        d="M51.5 35.5H40V24C46.075 24 51 28.925 51.5 35.5Z"
        stroke="#3DAC5C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="40"
        cy="40"
        r="16"
        stroke="#3DAC5C"
        strokeWidth="2"
      />
      <path
        d="M40 40L48 32"
        stroke="#3DAC5C"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default PieChartIcon;
