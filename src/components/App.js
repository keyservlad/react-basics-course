import React from "react";
import Header from "./Header";
import Logo from "./Logo";
import Card from "./Card";
//import Counter from "./counter/Counter"; // Counter component normal way
import Counter from "./counterClass/Counter"; // Counter using class (old method)
import Form from "./form/form";
import { GlobalStateProvider, StateContext } from "./context/FuncProvider";
import A from "./context/A";
import B from "./context/B";
import C from "./context/C";

let data = [
  {
    fullName: "Matt Smith",
    status: "friend",
    description: "Kristy is an art director living in New York.",
    totalFriends: 75,
    joinedYear: 2013,
    imageUrl:
      "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    fullName: "John Smith",
    status: "friend",
    description: "Kristy is an art director living in New York.",
    totalFriends: 75,
    joinedYear: 2013,
    imageUrl:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    fullName: "Alice Smith",
    status: "friend",
    description: "Kristy is an art director living in New York.",
    totalFriends: 75,
    joinedYear: 2013,
    imageUrl:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    fullName: "Alex Smith",
    status: "friend",
    description: "Kristy is an art director living in New York.",
    totalFriends: 75,
    joinedYear: 2013,
    imageUrl:
      "https://images.pexels.com/photos/5967012/pexels-photo-5967012.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

const App = (props) => {
  const printCard = () => {
    return data.map((item, index) => {
      return <Card userData={item} key={index} />;
    });
  };

  return (
    <>
      <GlobalStateProvider>
        <StateContext.Consumer>
          {(context) => {
            console.log(context);
            return (
              <>
                <Header background="black">
                  <Logo>Billy's BBQ</Logo>
                  <nav>
                    <a href="/">
                      Link
                      <span style={{ color: "red" }}>?</span>
                    </a>
                    <a href="/">Link</a>
                  </nav>
                </Header>
                <main
                  style={{
                    margin: "0",
                    width: "100%",
                    maxWidth: "960px",
                    padding: "20px",
                  }}
                >
                  <h1>name: {context.state.name}</h1>
                  {/*<Form/> */}
                  {/* <Counter/> */}
                  {/*printCard()*/}
                  <A>
                    <input
                      type="text"
                      value={context.state.name}
                      onChange={context.handleChange}
                    />
                    <B>
                      <C></C>
                    </B>
                  </A>
                </main>
              </>
            );
          }}
        </StateContext.Consumer>
      </GlobalStateProvider>
    </>
  );
};

export default App;
