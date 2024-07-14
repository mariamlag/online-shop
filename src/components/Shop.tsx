// import Item from "./Item";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function Shop({ items }: ItemsProps) {
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedCategroy, setSelectedCategory] = useState(null);

//   const totalProduct = items.length;

//   const filteredItems = items.filter((item) => {
//     if (selectedColor && selectedColor) {
//       return item.color === selectedColor && item.category === selectedCategroy;
//     } else if (selectedColor) {
//       return item.color === selectedColor;
//     } else if (selectedCategroy) {
//       return item.category === selectedCategroy;
//     } else {
//       return true;
//     }
//   });

//   return (
//     <Container>
//       <P>marmenio</P>
//       <Information>
//         <Link to={"/"}>
//           <Hom>Home</Hom>
//         </Link>
//         <Img src="/assets/next.png" alt="" />
//         <Hom>All Products</Hom>
//       </Information>
//       <Title>All Products</Title>
//       <ProductNumber>{totalProduct} products</ProductNumber>

//       <SortButtons>
//         <button onClick={() => setSelectedColor(null)}>All Colors</button>
//         <button onClick={() => setSelectedColor("white")}>White</button>
//         {/* Add more buttons for other colors if needed */}
//       </SortButtons>
//       <SortButtons>
//         <button onClick={() => setSelectedCategory(null)}>
//           All Categories
//         </button>
//         <button onClick={() => setSelectedCategory("bag")}>Bags</button>
//         {/* Add more buttons for other categories if needed */}
//       </SortButtons>
//       <AllShop>
//         {filteredItems.map((item) => (
//           <Item key={item.id} items={[item]} setItems={undefined} />
//         ))}
//       </AllShop>
//     </Container>
//   );
// }
import { useState } from "react";
import Item from "./Item";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Shop({ items }: ItemsProps) {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const totalProduct = items.length;

  // Filter items based on selected colors and categories
  const filteredItems = items.filter((item) => {
    const isColorMatch =
      selectedColors.length === 0 || selectedColors.includes(item.color);
    const isCategoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category as string);
    return isColorMatch && isCategoryMatch;
  });

  const toggleColor = (color: string) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  return (
    <Container>
      <P>marmenio</P>
      <Information>
        <Link to={"/"}>
          <Hom>Home</Hom>
        </Link>
        <Img src="/assets/next.png" alt="" />
        <Hom>All Products</Hom>
      </Information>
      <Title>All Products</Title>
      <ProductNumber>{totalProduct} products</ProductNumber>

      <ColorButtons>
        <p>Colors</p>
        <div>
          <button onClick={() => setSelectedColors([])}>Clear Colors</button>
          {["white", "black", "red", "blue", "green", "pink", "brown"].map(
            (color) => (
              <button
                key={color}
                onClick={() => toggleColor(color)}
                className={selectedColors.includes(color) ? "selected" : ""}
              >
                {color}
              </button>
            )
          )}
        </div>
      </ColorButtons>
      <CategoryButtons>
        <p>Categories</p>
        <div>
          <button onClick={() => setSelectedCategories([])}>
            Clear Categories
          </button>
          {["bag", "accessory", "backpack", "wallet"].map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={
                selectedCategories.includes(category) ? "selected" : ""
              }
            >
              {category}
            </button>
          ))}
        </div>
      </CategoryButtons>
      <AllShop>
        //{" "}
        {filteredItems.map((item) => (
          <Link key={item.id} to={`/SingleItem/${item.id}`}>
            <Item key={item.id} items={[item]} setItems={undefined} />
          </Link>
        ))}
      </AllShop>
    </Container>
  );
}
const CategoryButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4c4c4c;
  padding: 1rem;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  button {
    border-style: none;
    color: #945d09;
    border-bottom: 1px solid #945d09;
    background-color: white;
    width: 6rem;
    height: 2rem;
    border-radius: 0.5rem;

    &:hover {
      color: rgb(4, 4, 4);
      border-bottom: 1px solid #000000;
    }
  }
`;
const ColorButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4c4c4c;
  padding: 1rem;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
  button {
    border-style: none;
    color: #945d09;
    border-bottom: 1px solid #945d09;
    background-color: white;
    width: 6rem;
    height: 2rem;
    border-radius: 0.5rem;

    &:hover {
      color: rgb(0, 0, 0);
      border-bottom: 1px solid #000000;
    }
  }
`;

const ProductNumber = styled.p`
  color: black;
  width: 90%;
  font-weight: 300;
  opacity: 0.5;
  font-size: 1rem;
  margin: 0.1rem;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
`;
const Title = styled.h1`
  color: black;
  width: 90%;
  margin: 1rem;
  @media (min-width: 775px) {
    margin: 1.3rem;
  }
`;
const Img = styled.img`
  width: 1rem;
  height: 1rem;

  @media (min-width: 775px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
  margin-top: 0.9rem;
  width: 90%;
  font-size: 1.2rem;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
`;
const AllShop = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0.5rem;
  gap: 0.6rem;
  @media (min-width: 775px) {
    gap: 1rem;
    margin-top: 1rem;
  }
`;
const P = styled.p`
  font-family: "tsripa";
  color: #945d09;
  @media (min-width: 775px) {
    font-size: 1.7rem;
  }
`;
const Hom = styled.p`
  color: black;
  font-weight: 300;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 3%;
`;
