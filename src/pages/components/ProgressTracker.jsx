import React from "react";
import { Check } from "lucide-react";

const ProgressTracker = ({ steps, currStep }) => {
  // Math.min ensures the line never exceeds 100% even if currStep is 4 (Review)
  const progressWidth = Math.min((currStep / (steps.length - 1)) * 100, 100);

  return (
    <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 mt-4">
      {/* Line and Circles Container */}
      <div className="relative flex items-center px-6">
        {/* Background Line */}
        <div className="absolute top-1/2 left-6 right-6 h-0.5 sm:h-1 bg-slate-700 -translate-y-1/2" />

        {/* Active Line */}
        <div
          className="absolute top-1/2 left-6 h-0.5 sm:h-1 bg-green-500 -translate-y-1/2 transition-all duration-500 ease-in-out"
          style={{
            width: `calc(${progressWidth}% - ${
              progressWidth > 0 ? "0px" : "0px"
            })`,
            // Logic to ensure line connects properly between circles
            maxWidth: "calc(100% - 48px)",
          }}
        />

        {/* Steps */}
        <div className="relative flex w-full justify-between">
          {steps.map((_, index) => {
            const isCompleted =
              index < currStep || (currStep === 4 && index === 3);
            const isCurrent = index === currStep && currStep < 4;

            return (
              <div
                key={index}
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full text-xs sm:text-sm md:text-base font-semibold z-10 transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isCurrent
                      ? "bg-blue-500 text-white ring-4 ring-blue-500/30"
                      : "bg-slate-700 text-slate-400"
                  }`}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                ) : (
                  index + 1
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Labels Container */}
      <div className="flex justify-between mt-2 sm:mt-4">
        {steps.map((label, index) => {
          const isCompleted =
            index < currStep || (currStep === 4 && index === 3);
          const isCurrent = index === currStep && currStep < 4;

          return (
            <div
              key={index}
              className={`flex-1 text-center transition-colors duration-300 px-1`}
            >
              <span
                className={`
                block text-[10px] sm:text-xs md:text-sm break-words leading-tight
                ${isCurrent ? "text-blue-400 font-bold" : "text-slate-400"}
                ${isCompleted ? "text-green-400" : ""}
                /* On very small mobile, we can hide labels for non-active steps if it's too crowded */
                ${!isCurrent && !isCompleted ? "hidden xs:block" : "block"}
              `}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;
