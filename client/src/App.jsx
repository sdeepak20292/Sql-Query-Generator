import styles from "./index.module.css"
import sql_logo from './assets/sql_image.png'
import { useState } from "react"

// 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

function App() {
  const [queryDescription, setQueryDescription] = useState("");
  const [sqlQuery, setsqlQuery] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    const query = await generateQuery();
    setsqlQuery(query);
    // console.log(`fetched query: ${query}`)

  };
  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: queryDescription }),
    });

    const data = await response.json();
    return data.response.replace(/```sql|```/g, "").trim();
  };
  
  return (
    <main className={styles.main}>
      <img src={sql_logo} className={styles.icon}></img>
      <h3>Generate SQL with AI</h3>

      <form onSubmit={onSubmit}>
        <input type="text" name="query-description" placeholder="Describe your query"
        onchange={(e) => setQueryDescription(e.target.value)}
        />

        <input type="submit" value="Generate Query"/> 
        <pre> {sqlQuery} </pre>
      </form>
    </main>
  )
}

export default App
