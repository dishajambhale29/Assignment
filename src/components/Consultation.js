"use client";

import { useState } from "react";

const initialForm = {
  name: "", email: "", phone: "", city: "", interest: "Sofa customization",
  budget: "₹40,000 – ₹60,000", message: "",
};

export default function Consultation() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function update(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Unable to send your request.");
      setStatus("success");
      setFeedback("Thank you. Your consultation request has been sent.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <section id="consultation" className="section">
      <div className="container">
        <div className="mx-auto mb-8 max-w-[600px] text-center">
          <span className="eyebrow">Let's create something personal</span>
          <h2 className="serif section-title">Request a Consultation & Swatch Kit</h2>
          <p className="section-copy mx-auto">
            Our design team will help you explore fabrics, proportions and
            finishes to find the right piece for your home.
          </p>
        </div>

        <form onSubmit={submit} className="card mx-auto max-w-[720px] p-5 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              <span className="field-label">Full name *</span>
              <input className="field" name="name" value={form.name} onChange={update} placeholder="Your name" required minLength={2} maxLength={80} />
            </label>
            <label>
              <span className="field-label">Email address *</span>
              <input className="field" type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" required maxLength={120} />
            </label>
            <label>
              <span className="field-label">Phone number *</span>
              <input className="field" type="tel" name="phone" value={form.phone} onChange={update} placeholder="+91 98765 43210" required minLength={7} maxLength={20} />
            </label>
            <label>
              <span className="field-label">City</span>
              <input className="field" name="city" value={form.city} onChange={update} placeholder="Your city" maxLength={80} />
            </label>
            <label>
              <span className="field-label">I'm interested in</span>
              <select className="field" name="interest" value={form.interest} onChange={update}>
                <option>Sofa customization</option>
                <option>Signature collections</option>
                <option>Fabric swatch kit</option>
                <option>Interior consultation</option>
              </select>
            </label>
            <label>
              <span className="field-label">Approximate budget</span>
              <select className="field" name="budget" value={form.budget} onChange={update}>
                <option>Under ₹40,000</option>
                <option>₹40,000 – ₹60,000</option>
                <option>₹60,000 – ₹1,00,000</option>
                <option>Above ₹1,00,000</option>
              </select>
            </label>
            <label className="sm:col-span-2">
              <span className="field-label">Tell us a little about your space</span>
              <textarea className="field min-h-[100px] resize-y" name="message" value={form.message} onChange={update} placeholder="Share preferred sofa size, style, fabric or anything else..." maxLength={1000} />
            </label>
          </div>

          <label className="mt-5 flex items-start gap-2 text-[10px] leading-5 text-[#777067]">
            <input type="checkbox" required className="mt-1 accent-[#8e503b]" />
            I agree to be contacted by the Sofaliving team about this enquiry.
          </label>

          <button className="btn mt-5 w-full" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending request..." : "Submit consultation request ↗"}
          </button>
          {feedback && (
            <p role="status" className={`mt-4 rounded-lg p-3 text-center text-xs ${status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
              {feedback}
            </p>
          )}
          <p className="mt-3 text-center text-[9px] text-[#8b8379]">
            We typically respond within 1–2 business days.
          </p>
        </form>
      </div>
    </section>
  );
}
