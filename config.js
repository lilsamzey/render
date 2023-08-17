
const sql = require("mssql/msnodesqlv8");

async function connectToDatabase() {
  try {
    const pool = await sql.connect({
      server: "coursemanagementsystem.cfgtwzvplpnc.eu-north-1.rds.amazonaws.com",
      port: 1433,
      database: "EdnoSchoolManagementSystem",
      user: "admin", 
      password: "Klmn-32553255", 
      options: {
        // encrypt: true,
        // trustServerCertificate: true,
      },
    });

    
    console.log("Connected to the database successfully!");


  } catch (err) {
    console.error("Error connecting to the database:", err.message);
  }
}

// Call the function to connect to the database
connectToDatabase();