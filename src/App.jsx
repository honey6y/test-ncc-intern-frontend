import "./App.css";
import Content from "./component/content/Content";
import Footer from "./component/footer/Footer";
import SideBar from "./component/sideBar/SideBar";

function App() {
    return (
        <div className="App">
            <SideBar />
            <div className="wrapper-content-footer">
                <Content />
                <Footer />
            </div>
        </div>
    );
}

export default App;
