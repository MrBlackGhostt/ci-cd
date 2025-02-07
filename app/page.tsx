"use client"; // Enable client-side interactivity

import { useState } from "react";

export default function BirthdayPage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold">🎉 Happy Birthday! 🎂</h1>
      <p className="text-lg mt-4">
        Wishing you joy, love, and laughter on your special day!
      </p>

      <button
        onClick={() => setShowMessage(true)}
        className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
      >
        Click for a Surprise 🎁
      </button>

      {showMessage && (
        <p className="mt-4 text-xl text-green-600 font-semibold">
          🎈 You're amazing, and this year will be your best yet! 🎊
        </p>
      )}
    </main>
  );
}
