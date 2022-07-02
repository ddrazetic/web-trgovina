import React, { useEffect } from "react";
import { useStores } from "../Stores/StoresContex";
import { observer } from "mobx-react";
const Categories = observer(() => {
  const rootStore = useStores();
  useEffect(() => {
    rootStore.getCategories();
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
              <button
                // onClick={function () {
                //   rootStore.setActiveMarker(store);
                // }}
                className="button-list"
              >
                {store.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

export default Categories;
