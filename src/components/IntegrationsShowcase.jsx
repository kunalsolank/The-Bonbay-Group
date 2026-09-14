import React from "react";

const IntegrationsShowcase = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto max-w-[1326px] px-4 sm:px-6">
        {/* Main Title */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mx-auto max-w-2xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-3xl font-medium leading-tight text-transparent sm:max-w-3xl sm:text-4xl lg:max-w-4xl lg:text-5xl">
            Integrations to platforms that power your business
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-gray-400 sm:mt-4 sm:max-w-lg sm:text-lg lg:max-w-xl lg:text-xl">
            A complete showcase for your software product.
          </p>
        </div>

        {/* Subtitle Section */}
        <div className="text-center">
          <h3 className="mx-auto max-w-xl text-2xl font-medium leading-tight text-white sm:max-w-2xl sm:text-3xl lg:max-w-3xl lg:text-4xl">
            Discover what you can integrate
          </h3>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-gray-400 sm:mt-4 sm:max-w-lg lg:max-w-2xl lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsShowcase;
