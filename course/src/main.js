
var Page = React.createClass(
    {
        render: function () {
            return (
                <myElement>
                    <Nav title="Props React" linkUrl="index.html" />
                    <div className="container">
                        <Title title="My component Form" />
                        <Form />
                        <div className="row">
                            <Button title="Send" textActive="Loading..." />
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