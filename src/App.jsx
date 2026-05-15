function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <h1 style={{
        fontSize: "40px",
        marginBottom: "30px"
      }}>
        Zero Trust Security Dashboard
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "20px",
        marginBottom: "30px"
      }}>

        <div style={cardStyle}>
          <h3>User Status</h3>
          <p style={{color:"#22c55e"}}>Authenticated</p>
        </div>

        <div style={cardStyle}>
          <h3>Risk Score</h3>
          <p style={{color:"#facc15"}}>45</p>
        </div>

        <div style={cardStyle}>
          <h3>Device Status</h3>
          <p style={{color:"#38bdf8"}}>Trusted</p>
        </div>

        <div style={cardStyle}>
          <h3>AWS Access</h3>
          <p style={{color:"#22c55e"}}>Allowed</p>
        </div>

      </div>

      <div style={boxStyle}>
        <h2>Security Logs</h2>

        <div style={logStyle}>
          ✅ User logged in from Mumbai
        </div>

        <div style={logStyle}>
          🔐 MFA verification successful
        </div>

        <div style={logStyle}>
          ☁ AWS IAM role assigned
        </div>

        <div style={logStyle}>
          🛡 Prisma policy check passed
        </div>
      </div>

      <div style={boxStyle}>
        <h2>Architecture Flow</h2>

        <p>
          User → Okta MFA → Device Check → Prisma Policy → AWS Access
        </p>
      </div>

    </div>
  )
}

const cardStyle = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "15px"
}

const boxStyle = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "15px",
  marginBottom: "20px"
}

const logStyle = {
  background: "#334155",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "10px"
}

export default App