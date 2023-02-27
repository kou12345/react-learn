// Containerは赤背景のボックスの中にタイトルと子要素を表示
const Container = (props: { title: string; children: React.ReactElement }) => {
  const { title, children } = props;

  return (
    <div style={{ background: "red" }}>
      <span>{title}</span>
      {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
      <div>{children}</div>
    </div>
  );
};

const Parent = () => {
  return (
    // Containerを使用する際に、他の要素を囲って使用する
    <Container title="Hello">
      {/* 下記のp要素がContainerのchildrenに渡される */}
      <p>ここの部分が背景色で囲まれる</p>
    </Container>
  );
};

export default Parent;
