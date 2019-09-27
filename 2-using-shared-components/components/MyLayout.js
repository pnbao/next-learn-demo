import Header from "./Header";

const LayoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const withLayout = Page => {
    return () => (
        <div style={LayoutStyle}>
            <Header/>
            <Page/>
        </div>
    );
};
export default withLayout;
