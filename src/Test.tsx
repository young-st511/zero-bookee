import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "./firebaseApp";

function Test() {
  const [id, setId] = useState("");
  const [pw, setPW] = useState("");
  return (
    <div>
      <input value={id} onChange={(e) => setId(e.currentTarget.value)} />
      <input value={pw} onChange={(e) => setPW(e.currentTarget.value)} />
      <button
        onClick={async () => {
          try {
            //Log in
            const data = await signInWithEmailAndPassword(auth, id, pw);
            //! Test
            console.log(data);
          } catch (err) {
            if (err) {
              const error = err as Error;
              alert(error.message);
              console.log(error.message);
            }
          }
        }}
      >
        sign in
      </button>
    </div>
  );
}

export default Test;
