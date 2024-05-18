import React from "react";
import Product from "./Product";

const App = () => {
  return (
    <>
    <div style={{
      display : "flex",
      justifyContent : "center",
      alignItems : "center",
      flexDirection : "column",
      textAlign : "center"
    }}>
      <Product 
        Title= {"Iphone15"}
        Price={"150000"}
        imageSrc="https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg",
        Discription={
          "The iPhone 15 has a 6.12 inch screen with rounded corners and a curved design. It has a ceramic shield front, color-infused glass back, and an aluminum design. The iPhone 15 is available in black, blue, green, yellow, and pink."
        }
      />
      <Product
        Title= {"Iphone15"}
        Price={"150000"}
        Image={
          <img 
          style={{height : "200px", width : "300px"}}
            src={
              "https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg"
            }
            alt="Example"
          />
        }
        Discription={
          "The iPhone 15 has a 6.12 inch screen with rounded corners and a curved design. It has a ceramic shield front, color-infused glass back, and an aluminum design. The iPhone 15 is available in black, blue, green, yellow, and pink."
        }
      />
      <Product
        Title= {"Iphone15"}
        Price={"150000"}
        Image={
          <img 
          style={{height : "200px", width : "300px"}}
            src={
              "https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg"
            }
            alt="Example"
          />
        }
        Discription={
          "The iPhone 15 has a 6.12 inch screen with rounded corners and a curved design. It has a ceramic shield front, color-infused glass back, and an aluminum design. The iPhone 15 is available in black, blue, green, yellow, and pink."
        }
      />
      <Product
        Title= {"Iphone15"}
        Price={"150000"}
        Image={
          <img 
          style={{height : "200px", width : "300px"}}
            src={
              "https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg"
            }
            alt="Example"
          />
        }
        Discription={
          "The iPhone 15 has a 6.12 inch screen with rounded corners and a curved design. It has a ceramic shield front, color-infused glass back, and an aluminum design. The iPhone 15 is available in black, blue, green, yellow, and pink."
        }
      />
      <Product
        Title= {"Iphone15"}
        Price={"150000"}
        Image={
          <img 
          style={{height : "200px", width : "300px"}}
            src={
              "https://cdn.mos.cms.futurecdn.net/yDn3ZSXu9eSBxmXQDZ4PCF-1200-80.jpg"
            }
            alt="Example"
          />
        }
        Discription={
          "The iPhone 15 has a 6.12 inch screen with rounded corners and a curved design. It has a ceramic shield front, color-infused glass back, and an aluminum design. The iPhone 15 is available in black, blue, green, yellow, and pink."
        }
      />
      </div>
    </>
  );
};

export default App;
