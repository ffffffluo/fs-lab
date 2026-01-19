import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./components/Department";
import { organizationData } from "./data/organizationData";

function App() {
  return (
    <div>
      <Header />
      <main>
        {organizationData.map((dept, index) => (
          <Department key={index} department={dept} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
