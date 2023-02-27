// Helloはクリックするとアラートを出すテキストを返す
const Hello = () => {
  // クリック時に呼ばれる関数
  const onClick = () => {
    // アラートを出す
    alert("hello");
  };

  const text = "Hello, React";

  // テキストを子に持つdivを返す
  return (
    // divのonClickにクリック時のコールバック関数を渡す
    <div onClick={onClick}>{text}</div>
  );
};

// 外部からHelloを読み込めるようにエクスポート
export default Hello;
