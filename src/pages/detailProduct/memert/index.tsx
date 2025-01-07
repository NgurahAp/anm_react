import { Navigate, useParams } from "react-router-dom";

// const normalizeString = (str: string): string => {
//   return str.toLowerCase().trim();
// };

// // Component for the error state
// const ProductNotFound = () => (
//   <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
//     <h1 className="text-4xl font-bold text-gray-800 mb-4">
//       Produk Tidak Ditemukan
//     </h1>
//     <p className="text-lg text-gray-600">
//       Produk yang Anda cari tidak tersedia atau telah dihapus.
//     </p>
//     <a
//       href="/"
//       className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
//     >
//       Kembali ke Beranda
//     </a>
//   </div>
// );

export const MemmertDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  // Find product by normalized slug
  // const product = binderProducts.find(
  //   (p) => normalizeString(p.slug) === normalizeString(decodeURIComponent(slug))
  // );

  // if (!product) {
  //   return <ProductNotFound />;
  // }
  return (
    <section>
      <h1>Ini Product Memmert</h1>
    </section>
  );
};
