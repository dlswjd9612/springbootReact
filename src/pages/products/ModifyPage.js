import { Navigate, useParams } from "react-router-dom";
import ModifyComponent from "../../components/products/ReadComponent";
import { useCallback } from "react";


const ReadPage = () => {
  const { pno, page, size } = useParams();

  const moveToModify = useCallback(
    (pno) => {
      navigate({ pathname: `/products/modify/${pno}`, search: queryStr });
    },
    [pno, page, size]
  );

  const moveToList = useCallback(() => {
    Navigate({ pathname: `/products/list`, search: queryStr });
  });
  return (
    <div className="font-extrabold w-full bg-white mt-6">
      <div className="text-3xl font-extrabold">
        Read Page Component{pno}
        <ModifyComponent pno={pno}></ModifyComponent>
      </div>
    </div>
  );
};

export default ReadPage;

// const ReadPage = () => {
//   const { pno } = useParams();

//   return (
//     <div className="p-4 w-full bg-white">
//       <div className="text-3xl font-extrabold">Products Read Page
//     </div>

//     <ReadComponent pno = {pno}></ReadComponent>
//     </div>
//   );
// };
// export default ReadPage;
