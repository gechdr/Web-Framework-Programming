import { useState } from "react";
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

export default function RUForm() {
  const [contact, setContact] = useState({
    name: "",
    age: 0,
    gender: false,
    hobbies: [],
  });
  const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required(),
    gender: Joi.boolean().required(),
    hobbies: Joi.array(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: joiResolver(schema) });

  function submitForm(data) {
    const newContact = {
      name: data.name,
      age: parseInt(data.age),
      gender: data.gender,
      hobbies: data.hobbies,
    };

    setContact(newContact);
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>{contact.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>:</td>
            <td>{contact.age}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>:</td>
            <td>{contact.gender ? "male" : "female"}</td>
          </tr>
          <tr>
            <td>Hobbies</td>
            <td>:</td>
            <td>
              <ul>
                {contact.hobbies.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <hr></hr>
      <form onSubmit={handleSubmit(submitForm)}>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>
                <input type="text" {...register("name")} />
                <br />
                <span>{errors.name ? errors.name.message : ""}</span>
              </td>
            </tr>
            <tr>
              <td>Age</td>
              <td>:</td>
              <td>
                <input type="text" {...register("age")} />
                <br />
                <span>{errors.age?.message}</span>
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>:</td>
              <td>
                <input type="radio" {...register("gender")} value="true" />
                male{" "}
                <input type="radio" {...register("gender")} value="false" />
                female{" "}
              </td>
            </tr>
            <tr>
              <td>Hobbies</td>
              <td>:</td>
              <td>
                <input
                  type="checkbox"
                  {...register("hobbies")}
                  value="Eating"
                />
                Eating
                <br />
                <input
                  type="checkbox"
                  {...register("hobbies")}
                  value="Sleeping"
                />
                Sleeping
                <br />
                <input
                  type="checkbox"
                  {...register("hobbies")}
                  value="Gaming"
                />
                Gaming
                <br />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Update" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

// import { useRef } from "react";
// import { useState } from "react";

// export default function RUForm() {
//   const [contact, setContact] = useState({
//     name: "",
//     age: 0,
//   });

//   const nameInput = useRef(null);
//   const ageInput = useRef(null);

//   function submitForm() {
//     let safe = true;

//     if (isNaN(parseInt(ageInput.current.value))) {
//       safe = false;
//       alert("wrong input");
//     }

//     if (safe) {
//       const newContact = {
//         name: nameInput.current.value,
//         age: parseInt(ageInput.current.value),
//       };
//       setContact(newContact);
//     }
//   }

//   return (
//     <div>
//       <table>
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>:</td>
//             <td>{contact.name}</td>
//           </tr>
//           <tr>
//             <td>Age</td>
//             <td>:</td>
//             <td>{contact.age}</td>
//           </tr>
//         </tbody>
//       </table>
//       <hr></hr>
//       <table>
//         <tbody>
//           <tr>
//             <td>Name</td>
//             <td>:</td>
//             <td>
//               <input type="text" name="name" ref={nameInput} />
//             </td>
//           </tr>
//           <tr>
//             <td>Age</td>
//             <td>:</td>
//             <td>
//               <input type="text" name="age" ref={ageInput} />
//             </td>
//           </tr>
//           <tr>
//             <td colSpan={2}>
//               <button onClick={submitForm}>Update</button>
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }
