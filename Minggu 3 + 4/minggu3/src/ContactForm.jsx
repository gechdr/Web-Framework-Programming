/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm({
  activeContact,
  formSubmit,
  clearSelection,
}) {
  const { register, handleSubmit } = useForm({ values: activeContact });
  // function submitForm(data) {
  //   return formSubmit(data);
  // }
  return (
    <div>
      <form onSubmit={handleSubmit(formSubmit)}>
        <input type="hidden" {...register("id")} />
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>
                <input {...register("name")} />
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:</td>
              <td>
                <input {...register("phone")} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Update" />
                <button
                  // style={{ display: activeContact.id ? "inline" : "none" }}
                  onClick={(e) => {
                    e.preventDefault();
                    clearSelection();
                  }}
                >
                  Clear selection
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
