"use client";
import { useState, useRef, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { bmwModels } from "@/data/bmwModels";
import { services } from "@/data/services";
import { getServiceIcon, PhoneIcon, MessageIcon, WrenchIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

interface FormValues {
  bmwModel: string;
  bestDate: string;
  fullName: string;
  phone: string;
  email: string;
  cityTown?: string;
  additionalInfo?: string;
}

// TODO: wire up email backend (Resend or similar)

export default function SchedulingForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();

  const [submitted, setSubmitted] = useState(false);
  const [modelQuery, setModelQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [otherServiceText, setOtherServiceText] = useState("");
  const [selectedComms, setSelectedComms] = useState<string[]>([]);
  const [serviceError, setServiceError] = useState("");
  const [commError, setCommError] = useState("");
  const autocompleteRef = useRef<HTMLDivElement>(null);

  const today = new Date().toISOString().split("T")[0];

  const suggestions = modelQuery
    ? bmwModels.filter((m) =>
        m.toLowerCase().includes(modelQuery.toLowerCase())
      )
    : [];

  // Close autocomplete on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(e.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selectModel = (model: string) => {
    setModelQuery(model);
    setValue("bmwModel", model);
    setShowSuggestions(false);
  };

  const toggleService = (slug: string) => {
    setSelectedServices((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
    );
    setServiceError("");
  };

  const toggleComm = (comm: string) => {
    setSelectedComms((prev) =>
      prev.includes(comm) ? prev.filter((c) => c !== comm) : [...prev, comm]
    );
    setCommError("");
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let valid = true;
    if (selectedServices.length === 0) {
      setServiceError("Please select at least one service.");
      valid = false;
    }
    if (selectedComms.length === 0) {
      setCommError("Please select at least one option.");
      valid = false;
    }
    if (!valid) return;

    // TODO: wire up email backend (Resend or similar)
    console.log({ ...data, services: selectedServices, preferredComm: selectedComms });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="form-section">
        <div className="container">
          <div
            aria-live="polite"
            style={{
              background: "rgba(28,105,212,0.08)",
              border: "1px solid var(--color-accent)",
              borderRadius: "4px",
              padding: "48px 32px",
              textAlign: "center",
              maxWidth: "640px",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 700,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              Request Received
            </p>
            <p style={{ color: "var(--color-muted)", lineHeight: 1.7 }}>
              Thanks! We&rsquo;ve received your request and will be in touch within
              1 business day to confirm your appointment.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="form-section" id="schedule">
      <div className="container">
        <SectionHeader
          label="Book Service"
          headline="Schedule Your BMW Appointment"
          subheadline="We'll confirm your requested date and time within 1 business day."
        />

        {/* Quick Contact Strip */}
        <div className="quick-contact-strip">
          <p className="quick-contact-text">
            For the quickest response:
          </p>
          <div className="quick-contact-btns">
            <a
              href="sms:6036793883?body=I'd%20like%20to%20schedule%20an%20appointment."
              className="btn-secondary"
              style={{ padding: "12px 20px", fontSize: "13px" }}
            >
              <MessageIcon size={15} />
              Text Us
            </a>
            <a
              href="tel:6036793883"
              className="btn-secondary"
              style={{ padding: "12px 20px", fontSize: "13px" }}
            >
              <PhoneIcon size={15} />
              Call Us
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-grid">

            {/* BMW Model Autocomplete */}
            <div className="form-group full">
              <label htmlFor="bmwModel" className="form-label">
                BMW Model<span className="required-star">*</span>
              </label>
              <div className="autocomplete-wrapper" ref={autocompleteRef}>
                <input
                  id="bmwModel"
                  type="text"
                  autoComplete="off"
                  aria-required="true"
                  aria-autocomplete="list"
                  aria-controls="model-suggestions"
                  aria-describedby={errors.bmwModel ? "bmwModel-error" : undefined}
                  placeholder="Type your BMW model (e.g., 3 Series, X5)"
                  value={modelQuery}
                  className={`form-input${errors.bmwModel ? " error" : ""}`}
                  {...register("bmwModel", { required: "BMW Model is required." })}
                  onChange={(e) => {
                    setModelQuery(e.target.value);
                    setValue("bmwModel", e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <ul
                    id="model-suggestions"
                    role="listbox"
                    className="autocomplete-list"
                  >
                    {suggestions.map((model) => (
                      <li
                        key={model}
                        role="option"
                        aria-selected={modelQuery === model}
                        className="autocomplete-item"
                        onMouseDown={() => selectModel(model)}
                      >
                        {model}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {errors.bmwModel && (
                <span id="bmwModel-error" className="form-error" role="alert">
                  {errors.bmwModel.message}
                </span>
              )}
            </div>

            {/* Service Required Multi-select */}
            <div className="form-group full">
              <span className="form-label" id="services-label">
                Service Required<span className="required-star">*</span>
              </span>
              <div
                role="group"
                aria-labelledby="services-label"
                className="services-multiselect"
                aria-describedby={serviceError ? "service-error" : undefined}
              >
                {services.map((svc) => {
                  const Icon = getServiceIcon(svc.slug);
                  const isSelected = selectedServices.includes(svc.slug);
                  return (
                    <button
                      key={svc.slug}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => toggleService(svc.slug)}
                      className={`service-select-item${isSelected ? " selected" : ""}`}
                    >
                      <span className="icon">
                        <Icon size={16} />
                      </span>
                      {svc.name}
                    </button>
                  );
                })}
                {/* Other */}
                <button
                  type="button"
                  aria-pressed={selectedServices.includes("other")}
                  onClick={() => toggleService("other")}
                  className={`service-select-item${selectedServices.includes("other") ? " selected" : ""}`}
                >
                  <span className="icon">
                    <WrenchIcon size={16} />
                  </span>
                  Other
                </button>
              </div>

              {selectedServices.includes("other") && (
                <input
                  type="text"
                  placeholder="Please describe the service you need"
                  value={otherServiceText}
                  onChange={(e) => setOtherServiceText(e.target.value)}
                  className="form-input"
                  style={{ marginTop: "10px" }}
                  aria-label="Other service description"
                />
              )}

              {serviceError && (
                <span id="service-error" className="form-error" role="alert">
                  {serviceError}
                </span>
              )}
            </div>

            {/* Best Date */}
            <div className="form-group">
              <label htmlFor="bestDate" className="form-label">
                Preferred Date<span className="required-star">*</span>
              </label>
              <input
                id="bestDate"
                type="date"
                min={today}
                aria-required="true"
                aria-describedby={errors.bestDate ? "bestDate-error" : undefined}
                className={`form-input${errors.bestDate ? " error" : ""}`}
                style={{ colorScheme: "dark" }}
                {...register("bestDate", {
                  required: "Please select a preferred date.",
                  validate: (v) =>
                    v >= today || "Date cannot be in the past.",
                })}
              />
              {errors.bestDate && (
                <span id="bestDate-error" className="form-error" role="alert">
                  {errors.bestDate.message}
                </span>
              )}
            </div>

            {/* Full Name */}
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name<span className="required-star">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                aria-required="true"
                placeholder="Your full name"
                aria-describedby={errors.fullName ? "fullName-error" : undefined}
                className={`form-input${errors.fullName ? " error" : ""}`}
                {...register("fullName", { required: "Full Name is required." })}
              />
              {errors.fullName && (
                <span id="fullName-error" className="form-error" role="alert">
                  {errors.fullName.message}
                </span>
              )}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone<span className="required-star">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                aria-required="true"
                placeholder="(603) 555-0100"
                aria-describedby={errors.phone ? "phone-error" : undefined}
                className={`form-input${errors.phone ? " error" : ""}`}
                {...register("phone", {
                  required: "Phone number is required.",
                  pattern: {
                    value: /^[+\d][\d\s\-().]{6,}$/,
                    message: "Please enter a valid phone number.",
                  },
                })}
              />
              {errors.phone && (
                <span id="phone-error" className="form-error" role="alert">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email<span className="required-star">*</span>
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                aria-required="true"
                placeholder="you@example.com"
                aria-describedby={errors.email ? "email-error" : undefined}
                className={`form-input${errors.email ? " error" : ""}`}
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <span id="email-error" className="form-error" role="alert">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Preferred Communication */}
            <div className="form-group full">
              <span className="form-label" id="comm-label">
                Preferred Communication<span className="required-star">*</span>
              </span>
              <p
                style={{
                  fontSize: "12px",
                  color: "var(--color-muted)",
                  marginBottom: "10px",
                  marginTop: "-4px",
                }}
              >
                How would you like us to confirm? Select all that apply.
              </p>
              <div
                role="group"
                aria-labelledby="comm-label"
                aria-describedby={commError ? "comm-error" : undefined}
                className="comm-buttons"
              >
                {["Call", "Text", "Email"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    aria-pressed={selectedComms.includes(opt)}
                    onClick={() => toggleComm(opt)}
                    className={`comm-btn${selectedComms.includes(opt) ? " selected" : ""}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              {commError && (
                <span id="comm-error" className="form-error" role="alert">
                  {commError}
                </span>
              )}
            </div>

            {/* City/Town (optional) */}
            <div className="form-group">
              <label htmlFor="cityTown" className="form-label">
                City / Town
                <span style={{ fontSize: "11px", color: "#555", marginLeft: "6px", textTransform: "none", letterSpacing: 0 }}>
                  (optional)
                </span>
              </label>
              <input
                id="cityTown"
                type="text"
                autoComplete="address-level2"
                placeholder="e.g. Exeter, Portsmouth"
                className="form-input"
                {...register("cityTown")}
              />
            </div>

            {/* Additional Info (optional) */}
            <div className="form-group full">
              <label htmlFor="additionalInfo" className="form-label">
                Additional Info
                <span style={{ fontSize: "11px", color: "#555", marginLeft: "6px", textTransform: "none", letterSpacing: 0 }}>
                  (optional)
                </span>
              </label>
              <textarea
                id="additionalInfo"
                rows={4}
                placeholder="Describe your concern, symptoms, or anything else we should know."
                className="form-input form-textarea"
                {...register("additionalInfo")}
              />
            </div>
          </div>

          <div style={{ marginTop: "32px" }}>
            <button type="submit" className="btn-primary" style={{ minWidth: "220px" }}>
              Request Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
