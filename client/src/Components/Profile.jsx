import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HomepageImage from "../Assets/homepageImage.jpg";
import { useStores } from "../Stores/StoresContex";
import { useNavigate } from "react-router-dom";

const Profile = observer(() => {
  const rootStore = useStores();
  let navigate = useNavigate();
  useEffect(() => {
    if (!rootStore.isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return <div className="homeContainer">fieuhciudsjuic</div>;
});

export default Profile;
