import "./App.css";
import CardComponent from "./cards/components/CardComponent";
import MyComponent from "./components/MyComponent";
function App() {
  const card = {
    _id: "63765801e20ed868a69a62c4",
    title: "first",
    subtitle: "subtitle",
    description: "testing 123",
    phone: "050-0000000",
    email: "test@gmail.com",
    web: "https://www.test.co.il",
    image: {
      url: "assets/images/business-card-top-image.jpg",
      alt: "Business card image",
    },
    address: {
      state: "",
      country: "country",
      city: "tel-aviv",
      street: "Shinkin",
      houseNumber: 3,
      zip: 1234,
    },
    bizNumber: 1000000,
    user_id: "63765801e20ed868a69a62c2",
  };

  return <CardComponent card={card} />;
}

export default App;
