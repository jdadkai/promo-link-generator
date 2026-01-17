export default function Home() {
  const generate = async () => {
    try {
      const res = await fetch("/api/create");
      const data = await res.json();

      document.getElementById("result").innerHTML =
        `<a href="${data.link}" target="_blank">${data.link}</a>`;
    } catch (err) {
      alert("Error generating link");
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>Generate 170-Capped Promo Link</h2>

      <button
        onClick={generate}
        style={{
          padding: "12px 24px",
          fontSize: 16,
          cursor: "pointer"
        }}
      >
        Generate Link
      </button>

      <p id="result" style={{ marginTop: 20 }}></p>
    </div>
  );
}
