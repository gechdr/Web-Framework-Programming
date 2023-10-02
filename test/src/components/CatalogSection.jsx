/* eslint-disable react/prop-types */
import ItemCard from "./ItemCard";

/**
 * Komponen untuk seksi katalog yang akan digunakan untuk menampilkan daftar barang.
 *
 * Komponen ini menerima props dari komponen `App` dan melakukan looping sejumlah dengan jumlah barang
 * yang ada didalam props items. Untuk setiap barang yang ada di dalam array items, maka akan dibuatkan
 * komponen baru yaitu `ItemCard`. Komponen `ItemCard` ini diberikan sebuah props bernama `item`.
 *
 * Perlu diperhatikan bahwa untuk setiap komponen yang digenerate melalui looping perlu diberi `key`
 * yang akan digunakan oleh React untuk mengenali komponen-komponen tersebut secara internal.
 */
function CatalogSection(props) {
  return (
    <div className="my-3">
      <h1>Daftar Barang</h1>
      <div className="row">
        {props.items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default CatalogSection;
