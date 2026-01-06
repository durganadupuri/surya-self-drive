"use client";

import { useState } from "react";

export default function AddVehicleForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    await fetch("/api/admin/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    form.reset();
    setLoading(false);
    window.location.reload();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 grid gap-4 rounded-xl border border-border/60 p-6"
    >
      <h2 className="text-lg font-semibold">Add Vehicle</h2>

      <input name="name" placeholder="Vehicle name" required />
      <input name="brand" placeholder="Brand" required />
      <input name="modelYear" placeholder="Model year" required />
      <input name="seaterType" placeholder="Seater type (5/7)" required />
      <input name="imageUrl" placeholder="Image URL" required />

      <select name="category">
        <option value="STANDARD">STANDARD</option>
        <option value="LUXURY">LUXURY</option>
      </select>

      <input name="weekdayPrice" placeholder="Weekday price" />
      <input name="weekendPrice" placeholder="Weekend price" />

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-black px-4 py-2 text-white"
      >
        {loading ? "Adding..." : "Add Vehicle"}
      </button>
    </form>
  );
}
