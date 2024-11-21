import { useState, useEffect } from "react";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
function Alert({
  title,
  text,
  color,
}: {
  title: string;
  text: string;
  color: string;
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timer to hide the alert after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50 px-6 sm:px-0">
      <div
        id="toast-interactive"
        className="w-full max-w-md p-6 text-gray-500 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 relative"
        role="alert"
      >
        <div className="flex">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-blue-500 bg-blue-100 rounded-lg dark:text-blue-300 dark:bg-blue-900">
           <AnnouncementOutlinedIcon/>
            <span className="sr-only">Refresh icon</span>
          </div>
          <div className="ms-4 text-sm font-normal">
            <span className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </span>
            <div className="mb-4 text-sm font-normal">{text}</div>
          </div>
          <button
            type="button"
            className="ms-auto -mx-2 -my-2 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-2 hover:bg-gray-100 inline-flex h-10 w-10 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            onClick={() => setIsVisible(false)}
            aria-label="Close"
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 overflow-hidden" style={{background: `${color}`}}>
          <div className="h-full bg-white animate-progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
