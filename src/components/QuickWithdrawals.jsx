import React from "react";

import pix from "../assets/pix.svg";
import visa from "../assets/visa.svg";
import applePay from "../assets/applepay.svg";
import mastercard from "../assets/mastercard.svg";
import bankTransfer from "../assets/bank-transfer.svg";
import crypto from "../assets/crypto.svg";
import skrill from "../assets/skrill.svg";
import googlePay from "../assets/gpay.svg";
import binance from "../assets/binance.svg";
import neteller from "../assets/neteller.svg";

const paymentMethods = [
  {
    id: 1,
    name: "Pix",
    image: pix,
    position: "top-left",
  },
  {
    id: 2,
    name: "Visa",
    image: visa,
    position: "top-left-2",
  },
  {
    id: 3,
    name: "Apple Pay",
    image: applePay,
    position: "top-center",
  },
  {
    id: 4,
    name: "Mastercard",
    image: mastercard,
    position: "top-right",
  },
  {
    id: 5,
    name: "Bank Transfers",
    image: bankTransfer,
    position: "top-right-2",
  },
  {
    id: 6,
    name: "Crypto",
    image: crypto,
    position: "middle-left",
  },
  {
    id: 7,
    name: "Skrill",
    image: skrill,
    position: "middle-right",
  },
  {
    id: 8,
    name: "Google Pay",
    image: googlePay,
    position: "bottom-left",
  },
  {
    id: 9,
    name: "Binance",
    image: binance,
    position: "bottom-center",
  },
  {
    id: 10,
    name: "Neteller",
    image: neteller,
    position: "bottom-right",
  },
];

const QuickWithdrawals = () => {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        {/* ==========================================
            DESKTOP
        =========================================== */}

        <div className="relative hidden min-h-[620px] items-center justify-center lg:flex">
          {/* Central Heading */}
          <div className="relative z-20 max-w-[750px] text-center">
            <h2 className="font-primary text-5xl font-normal leading-[1.1] tracking-tight text-white xl:text-[64px]">
              Quick <span className="text-[#168b5b]">Withdrawals,</span>
              <br />
              <span>Trusted Local Options</span>
            </h2>
          </div>

          {/* ==========================================
              PAYMENT CARDS
          =========================================== */}

          {paymentMethods.map((method) => (
            <PaymentCard key={method.id} method={method} />
          ))}
        </div>

        {/* ==========================================
            MOBILE / TABLET
        =========================================== */}

        <div className="lg:hidden">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-[700px] text-center">
            <h2 className="font-primary text-4xl font-normal leading-[1.1] tracking-tight text-[#202428] sm:text-5xl">
              Quick <span className="text-[#168b5b]">Withdrawals,</span>
              <br />
              <span>Trusted Local Options</span>
            </h2>
          </div>

          {/* Payment Methods */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className="
                  flex
                  h-[100px]
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#eaf2ff]
                  p-5
                  shadow-[0_5px_12px_rgba(0,0,0,0.10)]
                "
              >
                <img
                  src={method.image}
                  alt={method.name}
                  className="max-h-[55px] max-w-[150px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ==========================================
   PAYMENT CARD
========================================== */

const PaymentCard = ({ method }) => {
  const positionClasses = {
    "top-left": `
      left-[4%]
      top-[30px]
    `,

    "top-left-2": `
      left-[22%]
      top-[80px]
    `,

    "top-center": `
      left-1/2
      top-[50px]
      -translate-x-1/2
    `,

    "top-right": `
      right-[22%]
      top-[25px]
    `,

    "top-right-2": `
      right-[4%]
      top-[55px]
    `,

    "middle-left": `
      left-[11%]
      top-[330px]
    `,

    "middle-right": `
      right-[11%]
      top-[305px]
    `,

    "bottom-left": `
      left-[23%]
      bottom-[15px]
    `,

    "bottom-center": `
      left-1/2
      bottom-[35px]
      -translate-x-1/2
    `,

    "bottom-right": `
      right-[22%]
      bottom-[0px]
    `,
  };

  return (
    <div
      className={`
        absolute
        z-10
        flex
        h-[115px]
        w-[255px]
        items-center
        justify-center
        rounded-2xl
        bg-[#eaf2ff]
        p-6
        shadow-[0_5px_12px_rgba(0,0,0,0.10)]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)]
        ${positionClasses[method.position]}
      `}
    >
      <img
        src={method.image}
        alt={method.name}
        className="max-h-[65px] max-w-[190px] object-contain"
      />
    </div>
  );
};

export default QuickWithdrawals;
