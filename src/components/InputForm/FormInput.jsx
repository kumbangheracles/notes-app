import React from "react";

class FormInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      maxTitleLength: 50,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    if (name === 'title' && value.length > this.state.maxTitleLength) {
      return;
    }

    this.setState({ [name]: value });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const { title, body } = this.state;

    // Validasi input kosong
    if (title.trim() === '' || body.trim() === '') {
      alert("Title dan catatan tidak boleh kosong!");
      return;
    }

    // Mengirim data ke props parent
    this.props.addNotes({ title, body });

    // Reset form setelah submit
    this.setState({
      title: '',
      body: '',
    });
  }
  render() {
    const { title, body, maxTitleLength } = this.state;
    const remainingCharacters = maxTitleLength - title.length;

    return (
      <form className="form-input" onSubmit={this.onSubmitHandler}>
        <p>Sisa Karakter: {remainingCharacters}</p>
        <input
          className="title-content"
          type="text"
          name="title"
          placeholder="Masukkan judul. . ."
          value={title}
          onChange={this.handleChange}
        />
        <textarea
          className="description-content"
          name="body"
          placeholder="Masukkan catatan..."
          value={body}
          onChange={this.handleChange}
        />
        <button className="button-input" type="submit">Add</button>
      </form>
    );
  }
}

export default FormInput;
