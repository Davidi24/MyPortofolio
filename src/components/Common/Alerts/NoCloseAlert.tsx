import { useState, useEffect } from "react";
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import "../../../style/EntryPage.css"
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
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 backdrop-blur-sm z-50 px-6 sm:px-0">
      <div
        id="toast-interactive"
        className="w-full max-w-md p-6 text-gray-500 box rounded-lg shadow dark:bg-gray-800 dark:text-gray-400 relative"
        role="alert"
      >
        <div className="flex">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-blue-500  rounded-lg dark:text-blue-300 dark:bg-blue-900">
            <AnnouncementOutlinedIcon />
            <span className="sr-only">Refresh icon</span>
          </div>
          <div className="ms-4 text-sm font-normal">
            <span className="mb-2 text-lg font-semibold text-[#FFFFFF] dark:text-white">
              {title}
            </span>
            <div className="mb-4 text-sm font-normal text-[#e7e4e4]">{text}</div>
          </div>

        </div>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 w-full h-2 overflow-hidden" style={{ background: `${color}` }}>
          <div className="h-full bg-white animate-progress-bar-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Alert;
