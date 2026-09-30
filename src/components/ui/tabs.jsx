import * as React from "react";
import { cn } from "../../lib/utils";

const TabsContext = React.createContext({
  value: "",
  onValueChange: () => {},
});

const Tabs = React.forwardRef(
  ({ value, defaultValue, onValueChange, className, children, ...props }, ref) => {
    const [activeTab, setActiveTab] = React.useState(defaultValue || "");
    const currentTab = value !== undefined ? value : activeTab;

    const handleValueChange = React.useCallback(
      (val) => {
        if (value === undefined) {
          setActiveTab(val);
        }
        if (onValueChange) {
          onValueChange(val);
        }
      },
      [value, onValueChange]
    );

    return (
      <TabsContext.Provider
        value={{ value: currentTab, onValueChange: handleValueChange }}
      >
        <div ref={ref} className={cn("w-full", className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex items-center justify-start rounded-lg text-gray-400 gap-2 sm:gap-4 overflow-x-auto",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef(
  ({ value, className, children, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    const isSelected = context.value === value;

    return (
      <button
        ref={ref}
        type="button"
        role="tab"
        aria-selected={isSelected}
        onClick={() => context.onValueChange(value)}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap px-3 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 relative cursor-pointer focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
isSelected
                        ? "text-[#20a46a]"
                        : "text-gray-400 hover:text-white",
                      className
                    )}
                    {...props}
                  >
                    {children}
                    {isSelected && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#20a46a] shadow-[0_0_12px_#20a46a]" />
                    )}
      </button>
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

const TabsContent = React.forwardRef(
  ({ value, className, children, ...props }, ref) => {
    const context = React.useContext(TabsContext);
    if (context.value !== value) return null;

    return (
      <div
        ref={ref}
        role="tabpanel"
        className={cn("mt-4 focus-visible:outline-none", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsList, TabsTrigger, TabsContent };
