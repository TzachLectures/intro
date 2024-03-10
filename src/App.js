import FormPage from "./components/FormPage";
let fieldName = "phone";
function App() {
  let user = {
    name: "tzach",
    phone: "12123",
  };

  let user2 = { ...user, [fieldName]: "13123" };

  console.log(user2);

  return <div></div>;
}

export default App;
