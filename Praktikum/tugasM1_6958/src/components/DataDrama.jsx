/* eslint-disable react/prop-types */
export default function DataDrama({ title, data }) {
  return (
    <span className="card-text fs-3 text-white">
      {title}: {data}
    </span>
  );
}
