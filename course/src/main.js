
var Page = React.createClass(
    {
        render: function () {
            return (
                <myElement>
                    <Nav title="Props React" linkUrl="index.html" />
                    <div className="container">
                        <Title fontSize="50px">
                            My title component!
                        </Title>
                        <div className="row">
                            <Form />
                            <Button textActive="Loading..." >Send</Button>
                        </div>
                    </div>
                </myElement>
            )
        }
    }
);

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);