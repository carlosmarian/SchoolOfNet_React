
var Page = React.createClass({
    getInitialState: function () {
        return {
            data: [
                { id: "1", name: "Maria", email: "etste@tstes", subject: "R", messenger: "Um teste maior react" },
                { id: "2", name: "Pedro", email: "ee2@tstes", subject: "A", messenger: "Um teste maio angular" }
            ]
        };
    },
    handleContactSubmit: function (contact) {
        console.log(contact);
        var newContacts = this.state.data.concat([contact]);
        this.setState({
            data: newContacts
        });
    },
    render: function () {
        return (
            <myElement>
                <Nav title="Props React" linkUrl="index.html" />
                <div className="container">
                    <Title fontSize="50px">
                        My title component!
                        </Title>
                    <div className="row">
                        <Form onContactSubmit={this.handleContactSubmit} idNumber={this.state.data.length + 1} />
                    </div>
                    <div className="row">
                        <List data={this.state.data} />
                        <br /><br />
                    </div>
                </div>
            </myElement>
        )
    }
});

ReactDOM.render(
    <Page />,
    document.getElementById('page')
);