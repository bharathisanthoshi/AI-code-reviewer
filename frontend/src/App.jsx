import { useState ,useEffect} from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import axios from 'axios'
import './App.css'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // Import a highlight.js theme

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(` function sum(){
  return 2 + 1}`);

const [review, setReview] = useState(``)

  useEffect(() => {
    // Highlight the code block after the component mounts
    prism.highlightAll();
  }, [])

  async function reviewCode() {

    const response = await axios.post('http://localhost:8000/ai/get-review', { code })
    // console.log(response)
    setReview(response.data.review);
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 15,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
            
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
          </div>
          
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
