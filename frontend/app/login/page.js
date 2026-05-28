"use client";

export default function LoginPage() {
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0f172a",
        color: "white",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h1 style={{ fontSize: "40px" }}>
        SmartComp AI
      </h1>

      <p>Salary Intelligence Platform</p>

      <button
        style={{
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Continue with Email
      </button>

      <button
        style={{
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Continue with Google
      </button>

      <button
        style={{
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Continue with GitHub
      </button>
    </main>
  );
}
