function App() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      background: "#020617",
      color: "white",
      fontFamily: "Arial"
    }}>

      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#0f172a",
        padding: "30px"
      }}>

        <h2 style={{
          color: "#38bdf8",
          marginBottom: "40px"
        }}>
          ZeroTrustX
        </h2>

        <div style={menuItem}>🏠 Dashboard</div>
        <div style={menuItem}>🔐 Authentication</div>
        <div style={menuItem}>☁ AWS Access</div>
        <div style={menuItem}>🛡 Security Logs</div>
        <div style={menuItem}>⚙ Settings</div>

      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        padding: "40px"
      }}>

        <h1 style={{
          fontSize: "40px",
          marginBottom: "30px"
        }}>
          Zero Trust Security Dashboard
        </h1>

        {/* Top Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginBottom: "30px"
        }}>

          <div style={cardStyle}>
            <h3>User Status</h3>
            <p style={greenText}>Authenticated</p>
          </div>

          <div style={cardStyle}>
            <h3>Risk Score</h3>
            <p style={yellowText}>45</p>
          </div>

          <div style={cardStyle}>
            <h3>Device Status</h3>
            <p style={blueText}>Trusted</p>
          </div>

          <div style={cardStyle}>
            <h3>AWS Access</h3>
            <p style={greenText}>Allowed</p>
          </div>

        </div>

        {/* Logs */}
        <div style={boxStyle}>
          <h2>Live Security Logs</h2>

          <div style={logStyle}>
            ✅ User logged in from Mumbai
          </div>

          <div style={logStyle}>
            🔐 MFA verification successful
          </div>

          <div style={logStyle}>
            ☁ IAM Role assigned
          </div>

          <div style={logStyle}>
            🛡 Prisma policy validation passed
          </div>
        </div>

        {/* Architecture */}
        <div style={boxStyle}>
          <h2>Architecture Flow</h2>

          <p style={{
            marginTop: "15px",
            color: "#cbd5e1"
          }}>
            User → Okta MFA → Device Check → Prisma Policy → AWS Access
          </p>
        </div>

      </div>

    </div>
  )
}

const menuItem = {
  padding: "15px",
  marginBottom: "15px",
  background: "#1e293b",
  borderRadius: "10px",
  cursor: "pointer"
}

const cardStyle = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "20px",
  border: "1px solid #1e293b"
}

const boxStyle = {
  background: "#0f172a",
  padding: "25px",
  borderRadius: "20px",
  marginBottom: "25px",
  border: "1px solid #1e293b"
}

const logStyle = {
  background: "#1e293b",
  padding: "15px",
  borderRadius: "10px",
  marginTop: "15px"
}

const greenText = {
  color: "#22c55e",
  fontSize: "24px"
}

const yellowText = {
  color: "#facc15",
  fontSize: "24px"
}

const blueText = {
  color: "#38bdf8",
  fontSize: "24px"
}

export default App