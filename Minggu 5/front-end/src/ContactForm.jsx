/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

export default function ContactForm({ activeContact, formMethods }) {
  const schema = Joi.object({
    id: Joi.string().allow(""),
    name: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean().default(false),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: activeContact,
    resolver: joiResolver(schema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(formMethods.submit)}>
        <input type="hidden" {...register("id")} />
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td>
                <input {...register("name")} />
                {errors.name ? (
                  <>
                    <br />
                    <span>{errors.name.message}</span>
                  </>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>:</td>
              <td>
                <input {...register("phone")} />
                {errors.phone ? (
                  <>
                    <br />
                    <span>{errors.phone.message}</span>
                  </>
                ) : (
                  ""
                )}
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <input type="submit" value="Insert" />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    formMethods.reset();
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
