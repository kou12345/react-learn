import React from "react";

// Titleを渡すためのContextを作成
const TitleContext = React.createContext("");

// Titleコンポーネントの中でContextの値を参照する
const Title = () => {
  // Consumerを使って、Contextの値を参照する
  return (
    <TitleContext.Consumer>
      {/* Consumer直下に関数を置いて、Contextの値を参照する */}
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      {/* HeaderからTitleへは何もデータを渡さない */}
      <Title />
    </div>
  );
};

// Pageコンポーネントの中でContextに値を渡す
const Page = () => {
  const title = "React Book";

  // Providerを使い、Contextに値をセットする
  // Provider以下のコンポーネントから値を参照できる
  return (
    <TitleContext.Provider value={title}>
      <Header />
    </TitleContext.Provider>
  );
};

export default Page;
