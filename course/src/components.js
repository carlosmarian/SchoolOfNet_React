var Nav = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <a href={this.props.linkUrl} className="navbar-brand">
                            {this.props.title}
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
});

var Title = React.createClass({

    render: function () {
        //console.log(this.props.children);

        var TitleStyle = {
            color: "#777676",
            fontSize: this.props.fontSize ? this.props.fontSize : "35px"
        };
        return (
            <div className="row">
                <h1 style={TitleStyle}>{this.props.children}</h1>
            </div>
        );
    }
});

var Button = React.createClass({
    getInitialState: function () {
        return {
            click: false
        };
    },
    toggleClick: function () {
        this.setState({
            click: !this.state.click
        })
    },
    render: function () {
        var btnClass = this.state.click ? 'btn btn-warning' : 'btn btn-success';

        var title = this.state.click ? this.props.textActive : this.props.children;

        return (
            <button onClick={this.toggleClick} className={btnClass}>{title}</button>
        );
    }
});

var Form = React.createClass({
    render: function () {
        var inputStyle = {
            color: "#A7A5A5"
        };
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" style={inputStyle} placeholder="Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input style={inputStyle} type="email" className="form-control" id="email" placeholder="E-mail" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select defaultValue="R" className="form-control" id="subject" >
                        <option value="A">Angular</option>
                        <option value="V">VueJS</option>
                        <option value="R">React</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="messenger">Messenger</label>
                    <textarea style={inputStyle} type="email" className="form-control" id="messenger" rows="3"></textarea>
                </div>
            </form>
        );
    }
})