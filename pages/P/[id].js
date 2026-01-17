export async function getServerSideProps({ params }) {
  return { props: { id: params.id } };
}

export default function Promo({ id }) {
  const claim = async () => {
    const res = await fetch(`/api/claim?id=${id}`);
    const txt = await res.text();

    if (txt === "OK") {
      window.location.href =
        "https://onelink.shein.com/YOUR_SHEIN_AFFILIATE_LINK";
    } else {
      alert("❌ Promo fully claimed");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: 40 }}>
      <h2>🎉 Limited Promo Access</h2>
      <p>Only 170 users can access this promo</p>
      <button onClick={claim}>Claim Now</button>
    </div>
  );
}
