var data = [
    { id: "1", name: "Maria", email: "etste@tstes", subject: "R", messenger: "Um teste maior react" },
    { id: "2", name: "Pedro", email: "ee2@tstes", subject: "A", messenger: "Um teste maio angular" }
];

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
                        <div className="row">
                            <List data={data} />
                            <br /><br />
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