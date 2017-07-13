
var Page = React.createClass(
    {
        render: function () {
            return (
                <myElement>
                    <Nav title="Props React" linkUrl="index.html" />
                    <div className="container">
                        <Title title="Titulo novo" />
                        <div className="row">
                            <Button title="Meu botão" textActive="Loading..." />
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