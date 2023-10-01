import { useState } from "react";

// export default function Contact() {
//   const [favorite, setFavorite] = useState(false);
//   const [deleted, setDeleted] = useState(false);

//   return (
//     <>
//       <div style={{ display: deleted ? "none" : "block" }}>
//         Name:Heather
//         <br />
//         Phone:08123456789
//         <br />
//         Action:
//         <button onClick={() => setFavorite(!favorite)}>
//           {favorite ? "💖" : "🖤"}
//         </button>
//         <button
//           onClick={() => setDeleted(true)}
//           style={{ color: "red", display: favorite ? "none" : "inline" }}
//         >
//           🗑 Delete
//         </button>
//       </div>
//       <button
//         onClick={() => setDeleted(false)}
//         style={{ display: deleted ? "block" : "none" }}
//       >
//         Reset
//       </button>
//     </>
//   );
// }

export default function Contact() {
  const [state, setState] = useState("default");

  return (
    <>
      <div style={{ display: state == "deleted" ? "none" : "block" }}>
        Name:Heather
        <br />
        Phone:08123456789
        <br />
        Action:
        <button
          onClick={() =>
            state == "default" ? setState("favorited") : setState("default")
          }
        >
          {state !== "favorited" ? "🖤" : "💖"}
        </button>
        <button
          onClick={() => setState("deleted")}
          style={{
            color: "red",
            display: state == "favorited" ? "none" : "inline",
          }}
        >
          🗑 Delete
        </button>
      </div>
      <button
        onClick={() => setState("default")}
        style={{ display: state == "deleted" ? "block" : "none" }}
      >
        Reset
      </button>
    </>
  );
}
