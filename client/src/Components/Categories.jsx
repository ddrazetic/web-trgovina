import React, { useEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const Categories = observer(() => {
  const rootStore = useStores();
  // const { id } = useParams();

  useEffect(() => {
    rootStore.getCategories();
    // console.log("id ", id);
  }, [rootStore]);
  return (
    <div className={rootStore.showingList ? " list show_list" : "list"}>
      <div className="closeCategories" onClick={rootStore.setShowingList}>
        X
      </div>
      <h2 className="headerList">Kategorije</h2>
      <ul>
        {rootStore.categories.map((store, index) => {
          return (
            <li key={index}>
              <Link
                className={"anchor-category "}
                to={`/category/${store.id}`}
                // onClick={function () {
                //   rootStore.setActiveMarker(store);
                // }}
              >
                <div
                  className={
                    "button-list  " +
                    (parseInt(store.id) ===
                    parseInt(rootStore.currentCategoryId)
                      ? "anchor-category-active"
                      : "")
                  }
                >
                  {store.name}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
