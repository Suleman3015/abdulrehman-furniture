import React from "react";
import "./categorycomponent.css";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import TopProducts from "../topProducts/topProducts";
import { TopProductsLists} from "../../static/topProducts.static"

function CategoryComponent() {
  // const [loading, setLoading] = useState(false);
  const matchesLarge = useMediaQuery("(max-width:1200px)");
  const matches = useMediaQuery("(max-width:600px)");
  return (
    <div className="mainCategoryComponent">
      <div className="categoryHeading">
        <h1>Procure By Categories</h1>
      </div>
      <div className="semiCategoryComponent">
        {/* {loading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]?.map(() => <CategoryLoader />)
        ) : ( */}
          <>

          {
            TopProductsLists.map((elem)=>{
              return(

              <div className="categoryBoxes">
              <div
                style={{
                  // width:"25%",
                  margin: "auto",
                  textAlign: "center",
                }}
              >
                <Typography
                  style={{
                    fontSize:  matches === true ? "27px" :  matchesLarge === true ? "20px" : "28px",
                    letterSpacing: "1px",
                    fontWeight: "600",
                    fontFamily: "'Alegreya SC', serif",
                    // margin:"auto auto 10px auto",
                    // color:"rgb(54, 69, 79)"
                  }}
                  className="catCompTypo"
                >
                  {elem.title}
                </Typography>
              </div>

              <img
                alt="furniture"
                className="imgCategory"
                // onLoad={() => setLoading(true)}
                src={elem.productImg}
              />
            </div>

             )})
          }
          </>
        {/* )} */}
      </div>
      <div className="hotItemMain">
        <div
          style={{
            margin: "auto",
            width: "90%",
          }}
        >
          <TopProducts
            boxColor="black"
            title="Items Suggested For You"
            background="none"
            pex={matches === true ? "18px" :"32px" }
            align={matches === true ? "center" :"start"}

          />
        </div>
      </div>
    </div>
  );
}

export default CategoryComponent;
